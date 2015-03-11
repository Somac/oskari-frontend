/**
 * @class Oskari.elf.license.elements.ParamTextElement
 */
Oskari.clazz.define('Oskari.elf.license.elements.ParamTextElement',
    function(instance, validator) {
        this.instance = instance;
        this.sandbox = instance.getSandbox();
        this._templates = {
            licenseUserData: jQuery('<tr><td class="elf_license_user_data_label"></td><td class="elf_license_user_data"></td></tr>'),
            licenseInput: jQuery('<div class="elf_license_input"></div>')
        };
        this._validator = validator;
    }, {
        __name: 'elf-license.ParamTextElement',
        __qname: 'Oskari.elf.license.elements.ParamTextElement',       
        /**
         * Get Qualified name
         * @method getQName
         * @public
         */
        getQName: function () {
            return this.__qname;
        },
        /**
         * Get name
         * @method getName
         * @public
         */
        getName: function () {
            return this.__name;
        },
        /**
         * Initializes the elements
         * @method init
         * @public
         */
        init: function () {},
        /**
         * Get text element
         * @method getElement
         * @public
         *
         * @param {Object} param the license model param
         *
         * @return {Object} jQuery element object
         */
        getElement: function (param, readOnly) {
            var me = this,
                element = me._templates.licenseUserData.clone(),
                title = param.title,
                data = me._templates.licenseInput.clone(),
                input = null,
                value = '';

            data.append('<input type="text"></input>');
            input = data.find('input');

            if (title === null) {
                title = param.name;
            }

            if(param.values[0] && param.values[0] !== null) {
                value = param.values[0];
            }

            // Add data to element
            data.attr('data-name', param.name);
            data.attr('data-title', title);
            data.attr('data-element-type', 'text');

            input.val(value);
            element.find('.elf_license_user_data_label').html(title);
            element.find('.elf_license_user_data').html(data);
            return element;
        }
    }, {
        'protocol': ['Oskari.mapframework.service.Service']
    });
