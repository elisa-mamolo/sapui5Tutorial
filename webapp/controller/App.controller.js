sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("opensap.movies.controller.App", {
		onInit: function () {

		},
		onPress: function (sValue) {
		//load message toast asynchronously because don't know if the user will push the btn
		//improve initial loading time
		sap.ui.require(["sap/m/MessageToast"], function (oMessage) {
		oMessage.show("Searching..." + " " + sValue);
		});
		}
	});
});