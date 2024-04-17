sap.ui.define([
    'sap/m/MessageBox',
    'sap/ui/core/mvc/Controller'
], function(MessageBox, Controller) {
"use strict";

return Controller.extend("manufacturingapp.controller.doc", {
    onInit: function () {

    },


    handleLinkPress: function (evt) {
        MessageBox.alert("Link was clicked!");


},

});
});