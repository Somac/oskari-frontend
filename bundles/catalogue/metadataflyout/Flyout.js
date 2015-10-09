/**
 * @class Oskari.catalogue.bundle.metadataflyout.Flyout
 *
 *
 * This hosts metadata content loaded via ajax from
 * Geonetwork to view.MetadataPage containers
 *
 *
 */
Oskari.clazz.define('Oskari.catalogue.bundle.metadataflyout.Flyout',

    /**
     * @static @method create called automatically on construction
     * Always extend this class, never use as is.
     *
     * @param {Object} instance
     * @param {Object} locale
     *
     */
    function (instance, locale) {

        /* @property instance bundle instance */
        this.instance = instance;

        /* @property locale locale for this */
        this.locale = locale;

        /* @property container the DIV element */
        this.container = null;

        this.pages = {};

        this.additionalTabs = {};

    }, {

        getName: function () {
            return 'Oskari.catalogue.bundle.metadataflyout.Flyout';
        },

        setEl: function (el, width, height) {
            this.container = jQuery(el);
            this.container.addClass('metadataflyout');
        },

        startPlugin: function () {
            var me = this,
                locale = me.locale;
        },

        stopPlugin: function () {
            var p;
            for (p in this.pages) {
                if (this.pages.hasOwnProperty(p)) {
                    this.pages[p].destroy();
                    delete this.pages[p];
                }
            }
            this.container.empty();
        },

        getTitle: function () {
            return this.locale.title;
        },

        getDescription: function () {

        },

        getOptions: function () {

        },

        setState: function (state) {
            this.state = state;
        },

        /**
         * @public @method scheduleShowMetadata
         *
         * this 'schedules' asyncronous loading
         */
        scheduleShowMetadata: function (allMetadata) {
            var me = this,
                container = this.container,
                p,
                pageInfo,
                n,
                data,
                page;
            for (p in this.pages) {
                if (this.pages.hasOwnProperty(p)) {
                    pageInfo = this.pages[p];
                    if (pageInfo) {
                        this.pages[p] = null;
                        pageInfo.page.destroy();
                    }
                }
            }

            container.empty();

            for (n = 0; n < allMetadata.length; n += 1) {
                data = allMetadata[n];
                page =
                    Oskari.clazz.create(
                        'Oskari.catalogue.bundle.metadataflyout.view.MetadataPage',
                        this.instance,
                        this.locale
                    );
                page.init();
                page.insertTo(container);
                this.pages[data.uuid || (data.RS_Identifier_CodeSpace + ':' + data.RS_Identifier_Code)] = {
                    page: page,
                    panel: page,
                    data: data
                };
                if (me.additionalTabs) {
                    page.additionalTabs = me.additionalTabs;
                }
            }
            for (p in this.pages) {
                if (this.pages.hasOwnProperty(p)) {
                    pageInfo = this.pages[p];
                    if (pageInfo) {
                        data = pageInfo.data;
                        page = pageInfo.page;
                        page.scheduleShowMetadata(data.uuid, data.RS_Identifier_Code, data.RS_Identifier_CodeSpace);
                    }
                }
            }
        },

        /**
         * @method setContentState

         * restore state from store
         */
        setContentState: function (contentState) {
            this.contentState = contentState;
        },

        /**
         * @method getContentState
         *
         * get state for store
         */
        getContentState: function () {
            return this.contentState;
        },

        resetContentState: function () {
            this.contentState = {};
        },
        /**
         *
         * Basically a tab template to add to each metadatapanel created.
         * 
         * @param {Object} data Json object containing the tabs (title, content?, callback for getting content...?)
         */
        addTabs: function (data) {
            this.additionalTabs = data;
        }
    }, {
        'protocol': ['Oskari.userinterface.Flyout']
    });
