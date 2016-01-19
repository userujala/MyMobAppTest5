sap.ui.jsview("mymobapptest5.DDMServersView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.DDMServersView
	*/ 
	getControllerName : function() {
		return "mymobapptest5.DDMServersView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.DDMServersView
	*/ 
	createContent : function(oController) {
		
		app = sap.ui.getCore().byId("myApp");
		
	  	var page4 = new sap.m.Page("page4",{  
	          title: "CG_DashBoard",     
	          showNavButton: true,  
	          navButtonTap:function(){  
	                         app = sap.ui.getCore().byId("myApp");  
	                         app.back();
	          }  
	});
	  	
	  	var oContainer = new sap.m.TileContainer({});  
		page4.addContent(oContainer);  
		  
		var T1 = new sap.m.StandardTile({
			title:"EDISAPNDA",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T1);
		
		var T2 = new sap.m.StandardTile({
			title:"EDISAPNDC",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T2);
		
		var T3 = new sap.m.StandardTile({
			title:"EDISAPNDE",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T3);
		
		
		return page4;
		
	}

});