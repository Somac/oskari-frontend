/**
 * @class Oskari.mapframework.bundle.parcelselector.view.ParcelsTab
 *
 *
 */
Oskari.clazz.define("Oskari.mapframework.bundle.parcelselector.view.ParcelsTab",

/**
 * @method create called automatically on construction
 * @static
 */
function(instance, title, selectedEventName) {
    this.instance = instance;
    this.title = title;
    this.selectedEventName = selectedEventName;
    this._createUI();
}, {
    getTitle : function() {
        return this.title;
    },
    getTabPanel : function() {
        return this.tabPanel;
    },
    getState : function() {
        var state = {
            tab : this.getTitle(),
            filter : this.filterField.getValue(),
        };
        return state;
    },
    setState : function(state) {
        if (!state) {
            return;
        }

        if (!state.filter) {
            this.filterField.setValue(state.filter);
            this.filterLayers(state.filter);
        }
    },
    _createUI : function() {

        this.tabPanel = Oskari.clazz.create('Oskari.userinterface.component.TabPanel');
        this.tabPanel.setTitle(this.title);

        this.tabPanel.getContainer().append(this._getFilterField().getField());
        this._getActionButton().insertTo(this.tabPanel.getContainer());
    },
    _getFilterField : function() {
        if (this.filterField) {
            return this.filterField;
        }
        var me = this;
        var field = Oskari.clazz.create('Oskari.userinterface.component.FormInput');
        field.setPlaceholder(this.instance.getLocalization('filter').text);
        field.bindEnterKey(function() {me._startAction.call(me)});
        field.addClearButton();
        this.filterField = field;
        return field;
    },
    _getActionButton : function() {
        if (this.actionButton) {
            return this.actionButton;
        }
        var me = this;
        var btn = Oskari.clazz.create('Oskari.userinterface.component.Button');
        // Make button visually primary button.
        btn.addClass('primary');
        btn.setTitle(this.instance.getLocalization('button'));
        btn.setHandler(function() {me._startAction.call(me)});
        this.actionButton = btn;
        return btn;
    },
    _startAction : function() {
        var input = this._getFilterField().getValue();
        if( !input || isNaN(input) ) {
            alert(this.instance.getLocalization('errors').illegalInput);

        } else if ( this.selectedEventName ) {
            if( !this.selectedEvent ) {
                // Create the event the first time it is needed.
                this.selectedEvent = this.instance.sandbox.getEventBuilder(this.selectedEventName)(input);
            }
            // Start the flow by sending the event.
            this.instance.sandbox.notifyAll(this.selectedEvent);
        }
    }
    
});