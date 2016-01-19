sap.ui.jsview("mymobapptest5.ROTServersView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.ROTServersView
	*/ 
	getControllerName : function() {
		return "mymobapptest5.ROTServersView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.ROTServersView
	*/ 
	createContent : function(oController) {
		
		app = sap.ui.getCore().byId("myApp");	
	  	 var page6 = new sap.m.Page("page6",{  
	          title: "CG_DashBoard",      
	          showNavButton: true,  
	          navButtonTap:function(){  
	                         app = sap.ui.getCore().byId("myApp");  
	                         app.back();
	          }  
	});
	  	 
	  	var oContainer = new sap.m.TileContainer({});  
		page6.addContent(oContainer);  
		  
		var T1 = new sap.m.StandardTile({
			title:"SAPII-Shared01-1-p",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T1);
		
		var T2 = new sap.m.StandardTile({
			title:"SAPII-Dedicated01-1-p",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T2);
		
		var T3 = new sap.m.StandardTile({
			title:"SAPII-Dedicated02-1-p",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T3);
		
		var T4 = new sap.m.StandardTile({
			title:"SAPII-Dedicated03-1-p",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T4);
		
		var T5 = new sap.m.StandardTile({
			title:"PROCTORGAMBLE-P",
			info : "Availability",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T5);
		
			return page6; 
		
	}

});