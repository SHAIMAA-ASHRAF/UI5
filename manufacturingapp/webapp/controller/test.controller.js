sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,) {
        "use strict";

        return Controller.extend("manufacturingapp.controller.test", {
            onInit: function () {

            },
            myScreen : function () {
             
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Routemachines", {});
            },
    
            });
        });
