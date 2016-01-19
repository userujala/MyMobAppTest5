sap.ui.controller("mymobapptest5.P1View", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mymobapptest5.P1View
*/
	//onInit: function() {
		
		//var oModelS = new sap.ui.model.json.JSONModel();
		
		
		
		//sap.ui.getCore().setModel(oModelS);

	//},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mymobapptest5.P1View
*/
//	onBeforeRendering: function() {
		
	/*	var oModel5 = new sap.ui.model.json.JSONModel();
		
		$.ajax({
			url:"http://cgdash-db.mo.sap.corp:8080/emplist-web/emplist.svc/Servicenows?$format=json",
			dataType : 'json',
			success: function(response) {
				//console.log(response.d.results);
				var data = response.d.results;
				oModel5.setData(data);
								
			}
		})

		sap.ui.getCore().setModel(oModel5); */
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mymobapptest5.P1View
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mymobapptest5.P1View
*/
//	onExit: function() {
//
//	}

});