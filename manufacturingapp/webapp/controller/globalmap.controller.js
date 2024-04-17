sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("manufacturingapp.controller.globalmap", {
            onInit: function () {
                    
            },

	
        handleImage3Press : function () {
      
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteTest", {});
		},

        });
    });
