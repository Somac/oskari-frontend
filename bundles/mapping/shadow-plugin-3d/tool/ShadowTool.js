Oskari.clazz.define('Oskari.mapping.bundle.shadowplugin3d.tool.ShadowTool',
    function () {
    }, {
        index: 2,
        allowedLocations: ['top left', 'top right', 'bottom left', 'bottom right'],
        lefthanded: 'top left',
        righthanded: 'top right',
        allowedSiblings: [
            'Oskari.mapframework.bundle.featuredata2.plugin.FeaturedataPlugin',
            'Oskari.mapframework.bundle.mapmodule.plugin.MyLocationPlugin',
            'Oskari.mapframework.bundle.mapmodule.plugin.Portti2Zoombar',
            'Oskari.mapframework.bundle.mapmodule.plugin.PanButtons'
        ],
        groupedSiblings: true,
        bundleName: 'shadow-plugin-3d',

        /**
        * Get tool object.
        * @method getTool
        *
        * @returns {Object} tool description
        */
        getTool: function () {
            const shadowplugin = this.__sandbox.findRegisteredModuleInstance('shadow-plugin-3d') || null;
            return {
                id: 'Oskari.mapping.bundle.shadowplugin3d.plugin.ShadowingPlugin',
                title: 'ShadowTool',
                config: {
                    instance: shadowplugin
                }
            };
        },

        /**
         * Initialise tool
         * @method init
         */
        init: function (data) {
            if (data.configuration[this.bundleName]) {
                this.setEnabled(true);
            }
        },

        /**
        * Get values.
        * @method getValues
        * @public
        *
        * @returns {Object} tool value object
        */
        getValues: function () {
            if (this.state.enabled) {
                var pluginConfig = this.getPlugin().getConfig();
                pluginConfig.instance = this.getInstance();
                var json = {
                    configuration: {}
                };
                json.configuration[this.bundleName] = {
                    conf: pluginConfig,
                    state: {}
                };
                return json;
            } else {
                return null;
            }
        },
        /**
        * Stop tool.
        * @method stop
        * @public
        */
        stop: function () {
            this.__started = false;
            if (!this.__plugin) {
                return;
            }
            if (this.getSandbox()) {
                this.__plugin.stopPlugin(this.getSandbox());
            }
            this.__mapmodule.unregisterPlugin(this.__plugin);
        }
    }, {
        'extend': ['Oskari.mapframework.publisher.tool.AbstractPluginTool'],
        'protocol': ['Oskari.mapframework.publisher.Tool']
    });
