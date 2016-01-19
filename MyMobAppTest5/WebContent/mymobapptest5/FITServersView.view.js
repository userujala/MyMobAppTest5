sap.ui.jsview("mymobapptest5.FITServersView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.FITServersView
	*/ 
	getControllerName : function() {
		return "mymobapptest5.FITServersView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.FITServersView
	*/ 
	createContent : function(oController) {
		
		app = sap.ui.getCore().byId("myApp");
	  	  var page5 = new sap.m.Page("page5",{  
	          title: "CG_DashBoard",      
	          showNavButton: true,  
	          navButtonTap:function(){  
	                         app = sap.ui.getCore().byId("myApp");  
	                         app.back();
	          }  
	});
	  	  
	  	var oContainer = new sap.m.TileContainer({});  
		page5.addContent(oContainer);  
		  
		var T1 = new sap.m.StandardTile({
			title:"FIT-Shared-01",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T1);
		
		var T2 = new sap.m.StandardTile({
			title:"FIT-Shared-03",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T2);
		
		var T3 = new sap.m.StandardTile({
			title:"FIT-Shared-04",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T3);
		
		var T4 = new sap.m.StandardTile({
			title:"FIT-Shared-05",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T4);
		
		var T5 = new sap.m.StandardTile({
			title:"FIT-FDS",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T5);
		
		var T6 = new sap.m.StandardTile({
			title:"FIT-IF",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T6);
		
		var T7 = new sap.m.StandardTile({
			title:"FIT-KONE",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T7);
		
		var T8 = new sap.m.StandardTile({
			title:"FIT-MAHLE",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T8);
		
		
		return page5; 
		
	}

});