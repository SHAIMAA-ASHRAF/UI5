/*global QUnit*/

sap.ui.define([
	"manufacturingapp/controller/manufacturing.controller"
], function (Controller) {
	"use strict";

	QUnit.module("manufacturing Controller");

	QUnit.test("I should test the manufacturing controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
