import olSourceVectorTile from 'ol/source/VectorTile';
import olLayerVectorTile from 'ol/layer/VectorTile';
import olFormatMVT from 'ol/format/MVT';
import TileGrid from 'ol/tilegrid/TileGrid';
import { createDefaultStyle } from 'ol/style/Style';

import { VectorTileModelBuilder } from './VectorTileModelBuilder';
import { styleGenerator } from './styleGenerator';
import mapboxStyleFunction from 'ol-mapbox-style/stylefunction';
import { LAYER_ID, LAYER_HOVER, LAYER_TYPE, FTR_PROPERTY_ID } from '../../domain/constants';

const AbstractMapLayerPlugin = Oskari.clazz.get('Oskari.mapping.mapmodule.AbstractMapLayerPlugin');

/**
 * @class Oskari.mapframework.mapmodule.VectorTileLayerPlugin
 * Provides functionality to draw vector tile layers on the map
 */
class VectorTileLayerPlugin extends AbstractMapLayerPlugin {
    constructor (config) {
        super(config);
        this.__name = 'VectorTileLayerPlugin';
        this._clazz = 'Oskari.mapframework.mapmodule.VectorTileLayerPlugin';
        this.layertype = 'vectortile';
        this.hoverState = {
            layer: null,
            feature: null,
            property: FTR_PROPERTY_ID
        };
    }
    /**
     * @private @method _initImpl
     * Interface method for the module protocol.
     */
    _initImpl () {
        // register domain builder
        const mapLayerService = this.getSandbox().getService('Oskari.mapframework.service.MapLayerService');
        if (mapLayerService) {
            mapLayerService.registerLayerModel(this.layertype + 'layer', this._getLayerModelClass());
            mapLayerService.registerLayerModelBuilder(this.layertype + 'layer', this._getModelBuilder());
        }
        this.getSandbox().getService('Oskari.mapframework.service.VectorFeatureService').registerLayerType(this.layertype, this);
    }
    /**
     * @private @method _getLayerModelClass
     * Returns class to be used as mapLayerService layer model
     */
    _getLayerModelClass () {
        return 'Oskari.mapframework.mapmodule.VectorTileLayer';
    }
    /**
     * @private @method _getModelBuilder
     * Returns object to be used as mapLayerService layer model builder
     */
    _getModelBuilder () {
        return new VectorTileModelBuilder();
    }
    /**
     * @private @method _createPluginEventHandlers
     * Called by superclass to create event handlers
     */
    _createPluginEventHandlers () {
        return {
            AfterChangeMapLayerStyleEvent (event) {
                const oskariLayer = event.getMapLayer();
                this._updateLayerStyle(oskariLayer);
            }
        };
    }
    /**
     * @private @method _updateLayerStyle
     * @param {Oskari.mapframework.mapmodule.VectorTileLayer} oskariLayer
     */
    _updateLayerStyle (oskariLayer) {
        const olLayers = this.getOLMapLayers(oskariLayer);

        if (olLayers && olLayers.length > 0) {
            olLayers[0].setStyle(this._getLayerCurrentStyleFunction(oskariLayer));
        }
    }
    /**
     * @private @method _getLayerCurrentStyleFunction
     * Returns OL style corresponding to layer currently selected style
     * @param {Oskari.mapframework.domain.AbstractLayer} layer
     * @return {ol/style/Style}
     */
    _getLayerCurrentStyleFunction (layer) {
        const externalStyleDef = layer.getCurrentExternalStyleDef();
        const olLayers = this.getOLMapLayers(layer.getId());
        if (externalStyleDef && olLayers.length !== 0) {
            const sourceLayerIds = externalStyleDef.layers.filter(cur => !!cur.source).map(cur => cur.id);
            return mapboxStyleFunction(olLayers[0], externalStyleDef, sourceLayerIds);
        }
        const styleDef = layer.getCurrentStyleDef();
        const hoverOptions = layer.getHoverOptions();
        const factory = this.mapModule.getStyle.bind(this.mapModule);
        return styleDef ? styleGenerator(factory, styleDef, hoverOptions, this.hoverState) : this._createDefaultStyle();
    }
    /**
     * @private @method _createDefaultStyle
     * Creates OL style or style function for default style
     * @return {ol/style/Style}
     */
    _createDefaultStyle () {
        return createDefaultStyle;
    }
    /**
     * Checks if the layer can be handled by this plugin
     * @method  isLayerSupported
     * @param  {Oskari.mapframework.domain.AbstractLayer} layer
     * @return {Boolean}       true if this plugin handles the type of layers
     */
    isLayerSupported (layer) {
        if (!layer) {
            return false;
        }
        return layer.isLayerOfType(this.layertype);
    }
    /**
     * @method getAttributions
     * @param  {Oskari.mapframework.domain.AbstractLayer} layer
     * @return {Array<String>} layer attributions
     */
    getAttributions (layer) {
        if (!layer) {
            return;
        }
        let { attributions } = layer.getOptions();
        if (!attributions) {
            return;
        }
        if (!Array.isArray(attributions)) {
            attributions = [attributions];
        }
        return attributions.map(obj => {
            if (typeof obj === 'string') {
                return obj;
            }
            const { label, link } = obj;
            return link ? `<a href="${link}">${label}</a>` : label;
        });
    }
    /**
     * @method addMapLayerToMap
     * @private
     * Adds a single vector tile layer to this map
     * @param {Oskari.mapframework.domain.VectorTileLayer} layer
     * @param {Boolean} keepLayerOnTop
     * @param {Boolean} isBaseMap
     */
    addMapLayerToMap (layer, keepLayerOnTop, isBaseMap) {
        const sourceOpts = {
            format: new olFormatMVT(),
            url: layer.getLayerUrl().replace('{epsg}', this.mapModule.getProjection()), // projection code
            projection: this.getMap().getView().getProjection(), // OL projection object
            attributions: this.getAttributions(layer)
        };
        const tileGrid = layer.getTileGrid();
        if (tileGrid) {
            sourceOpts.tileGrid = new TileGrid(tileGrid);
        }
        // Properties id, type and hover are being used in VectorFeatureService.
        const vectorTileLayer = new olLayerVectorTile({
            opacity: layer.getOpacity() / 100,
            renderMode: 'hybrid',
            source: this.createSource(layer, sourceOpts)
        });
        // Set oskari properties for vector feature service functionalities.
        const silent = true;
        vectorTileLayer.set(LAYER_ID, layer.getId(), silent);
        vectorTileLayer.set(LAYER_TYPE, layer.getLayerType(), silent);
        vectorTileLayer.set(LAYER_HOVER, layer.getHoverOptions(), silent);

        this.mapModule.addLayer(vectorTileLayer, !keepLayerOnTop);
        this.setOLMapLayers(layer.getId(), vectorTileLayer);
        vectorTileLayer.setStyle(this._getLayerCurrentStyleFunction(layer));
    }
    createSource (layer, options) {
        return new olSourceVectorTile(options);
    }
    /**
     * @method onMapHover VectorFeatureService handler impl method
     * Handles feature highlighting on map hover.
     *
     * @param { Oskari.mapframework.event.common.MouseHoverEvent } event
     * @param { olRenderFeature } feature
     * @param { olVectorTileLayer } layer
     */
    onMapHover (event, feature, layer) {
        const { feature: hoverFeature, layer: hoverLayer, property } = this.hoverState;
        if (feature === hoverFeature) {
            return;
        }
        if (feature && hoverFeature && feature.get(property) === hoverFeature.get(property)) {
            return;
        }
        this.hoverState.feature = feature;
        this.hoverState.layer = layer;
        if (hoverLayer) {
            const style = (hoverLayer.get(LAYER_HOVER) || {}).featureStyle;
            if (style) {
                hoverLayer.changed();
            }
        }
        if (layer && layer !== hoverLayer) {
            const style = (layer.get(LAYER_HOVER) || {}).featureStyle;
            if (style) {
                layer.changed();
            }
        }
    }

    /**
     * @method onLayerRequest VectorFeatureService handler impl method
     * Handles VectorLayerRequest to update hover tooltip and feature style.
     * Other request options are not currently supported.
     *
     * @param { Oskari.mapframework.bundle.mapmodule.request.VectorLayerRequest } request
     * @param { Oskari.mapframework.domain.AbstractLayer|VectorTileLayer } layer
     */
    onLayerRequest (request, layer) {
        const options = request.getOptions();
        if (options.hover) {
            layer.setHoverOptions(options.hover);
            const olLayers = this.getOLMapLayers(layer.getId());
            if (olLayers) {
                olLayers.forEach(lyr => {
                    lyr.set(LAYER_HOVER, layer.getHoverOptions());
                    lyr.setStyle(this._getLayerCurrentStyleFunction(layer));
                });
            }
        }
    }
}

Oskari.clazz.defineES('Oskari.mapframework.mapmodule.VectorTileLayerPlugin',
    VectorTileLayerPlugin,
    {
        /**
         * @property {String[]} protocol array of superclasses as {String}
         * @static
         */
        'protocol': ['Oskari.mapframework.module.Module', 'Oskari.mapframework.ui.module.common.mapmodule.Plugin']
    }
);

export { VectorTileLayerPlugin };
