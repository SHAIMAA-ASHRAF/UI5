sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

                var oBar = new sap.m.IconTabBar({
                    items:[
                      new sap.m.IconTabFilter("Step1", {
                        text: "Step1",
                        content: [ 
                  ]
                      })
                    ]
                  });
                  oBar.placeAt("content");
                  oBar.setModel(new sap.ui.model.json.JSONModel({
                    currentStep: 0
                  }));
                  
               
            }
    
           
        });
    });


    


