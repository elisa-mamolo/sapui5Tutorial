sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log"
], function (Controller, Log) {
	"use strict";

	return Controller.extend("opensap.movies.controller.App", {
		onInit: function () {
			Log.info("Controller has been initialized!");
		},
		
		onBeforeRendering: function () {
			Log.info("The view will be shortly rendered!");
		},
		
		onAfterRendering: function () {
			Log.info("The view has been rendered");
		},
		
		onPress: function (sValue) {
		//load message toast asynchronously because don't know if the user will push the btn
		//improve initial loading time
		sap.ui.require(["sap/m/MessageToast"], function (oMessage) {
		oMessage.show("Searching..." + " " + sValue);
		});
		},
		
		onExit: function (){
			Log.info("Controller has been destroyed");
		}
		
	});
});