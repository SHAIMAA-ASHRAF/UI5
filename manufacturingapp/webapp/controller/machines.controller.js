sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("manufacturingapp.controller.machines", {
            onInit: function () {

            },

            machineImagePress1 : function () {
             
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteFinal", {});
            },

            machineImagePress2 : function () {
             
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteFinal", {});
            },
    
        });
    });