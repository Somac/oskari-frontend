/**
 * @class Oskari.userinterface.bundle.ui.UserInterfaceBundle
 *
 *
 */
Oskari.clazz.define("Oskari.userinterface.bundle.ui.UserInterfaceBundle", function () {

}, {
    /**
     * @method create creates an Oskari DIV Manager instance
     * @return {Oskari.userinterface.bundle.ui.UserInterfaceBundleInstance}
     */
    "create": function () {

        return Oskari.clazz.create("Oskari.userinterface.bundle.ui.UserInterfaceBundleInstance");
    },
    /**
     * @method update called by the bundle manager to inform on changes in
     * bundlage
     */
    "update": function (manager, bundle, bi, info) {

    }
}, {
    /**
     * @static
     * @property protocol protocols implemented by this bundle
     */
    "protocol": ["Oskari.bundle.Bundle"],
    "source": {
        /**
         * @static
         * @property source.scripts
         *
         */
        "scripts": [{
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/instance.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/request/AddExtensionRequest.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/request/AddExtensionRequestHandler.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/request/RemoveExtensionRequest.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/request/RemoveExtensionRequestHandler.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/request/UpdateExtensionRequest.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/request/UpdateExtensionRequestHandler.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/request/ModalDialogRequest.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/request/ModalDialogRequestHandler.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/event/ExtensionUpdatedEvent.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Accordion.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/AccordionPanel.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/TabContainer.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/TabDropdownContainer.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/TabPanel.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Badge.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Alert.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Popup.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Overlay.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Button.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Form.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/UIHelper.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/FormInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Popover.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Grid.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/GridModel.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/ProgressSpinner.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/FormComponent.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/Select.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/MultiLevelSelect.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/VisualizationForm.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/buttons/AddButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/buttons/CancelButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/buttons/CloseButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/buttons/DeleteButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/buttons/EditButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/buttons/OkButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/buttons/SaveButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/buttons/SearchButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/visualization-form/AreaForm.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/visualization-form/LineForm.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/component/visualization-form/DotForm.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/extension/DefaultTile.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/extension/DefaultFlyout.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/extension/DefaultExtension.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/extension/DefaultView.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/bundle/divmanazer/extension/DefaultLayout.js"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/divman.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/accordion.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/tab.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/modal.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/badge.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/alert.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/forminput.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/grid.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/popup.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/button.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/overlay.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/visualizationform.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/popover.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/select.css"
            }, {
                "type": "text/css",
                "src": "../../../../resources/framework/bundle/divmanazer/css/multilevelselect.css"
            }, {
                "type": "text/javascript",
                "src": "../../../../libraries/jquery/plugins/jquery-placeholder/jquery.placeholder.js"
            }
            /*, {
         "type" : "text/javascript",
         "src" : "../../../../resources/framework/bundle/divmanazer/js/jquery.event.drag-1.5.min.js"
         }*/
        ],
        "locales": [{
            "lang": "cs",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/bundle/divmanazer/locale/cs.js"
        }, {
            "lang": "de",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/bundle/divmanazer/locale/de.js"
        }, {
            "lang": "en",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/bundle/divmanazer/locale/en.js"
        }, {
            "lang": "es",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/bundle/divmanazer/locale/es.js"
        }, {
            "lang": "fi",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/bundle/divmanazer/locale/fi.js"
        }, {
            "lang": "it",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/bundle/divmanazer/locale/it.js"
        }, {
            "lang": "sv",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/bundle/divmanazer/locale/sv.js"
        }]
    },
    "bundle": {
        /**
         * @static
         * @property bundle.manifest
         */
        "manifest": {
            "Bundle-Identifier": "ui",
            "Bundle-Name": "ui",
            "Bundle-Tag": {
                "mapframework": true
            },

            "Bundle-Author": [{
                "Name": "jjk",
                "Organisation": "nls.fi",
                "Temporal": {
                    "Start": "2009",
                    "End": "2011"
                },
                "Copyleft": {
                    "License": {
                        "License-Name": "EUPL",
                        "License-Online-Resource": "http://www.paikkatietoikkuna.fi/license"
                    }
                }
            }],
            "Bundle-Name-Locale": {
                "fi": {
                    "Name": " kpI",
                    "Title": " kpI"
                },
                "en": {}
            },
            "Bundle-Version": "1.0.0",
            "Import-Namespace": ["Oskari"],
            "Import-Bundle": {}
        }
    }
});

Oskari.bundle_manager.installBundleClass("divmanazer", "Oskari.userinterface.bundle.ui.UserInterfaceBundle");
