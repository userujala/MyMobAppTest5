sap.ui.jsview("mymobapptest5.Shift", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.Shift
	*/ 
	getControllerName : function() {
		return "mymobapptest5.Shift";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.Shift
	*/ 
	createContent : function(oController) {
		
		app = sap.ui.getCore().byId("myApp");
        
	 	  var page10 =new sap.m.Page("page10",{  
	 	                      title: "CG_DashBoard",    
	 	                      showNavButton: true,  
	 	                      navButtonTap:function(){    
	 	                    	  app.back();
	 	                                     
	 	                      }  
	 	  });  
	  
	var oContainer = new sap.m.TileContainer({});  
	page10.addContent(oContainer);  
	  
	var T1 = new sap.m.StandardTile({
		title:"DEPLOYMENT",
		info : "Deployment Shift Details",
		press : function() {
			app = sap.ui.getCore().byId("myApp");
			app.to("idMobileView11");
		}
			});  
	oContainer.addTile(T1);
	
	var T2 = new sap.m.StandardTile({
		title:"SUPPORT",
		info : "Support Shift Details",
		press : function() {
			app = sap.ui.getCore().byId("myApp");
			app.to("idMobileView12");
		}
			});  
	oContainer.addTile(T2);
	
	var T3 = new sap.m.StandardTile({
		title:"SOC",
		info : "SOC Shift Details",
		press : function() {
			app = sap.ui.getCore().byId("myApp");
			app.to("idMobileView13");
		}
			});  
	oContainer.addTile(T3);
	
	var T4 = new sap.m.StandardTile({
		title:"PI",
		info : "PI Shift Details",
		press : function() {
			app = sap.ui.getCore().byId("myApp");
			app.to("idMobileView14");
		}
			});  
	oContainer.addTile(T4);
	
		return page10;
		
		
	}

});