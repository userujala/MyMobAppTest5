sap.ui.jsview("mymobapptest5.DCView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.DCView
	*/ 
	getControllerName : function() {
		return "mymobapptest5.DCView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.DCView
	*/ 
	createContent : function(oController) {
		
		app = sap.ui.getCore().byId("myApp");
        
	 	  var page2 =new sap.m.Page("page2",{  
	 	                      title: "CG_DashBoard",    
	 	                      showNavButton: true,  
	 	                      navButtonTap:function(){   
	 	                    	  app.back();
	 	                                     
	 	                      }  
	 	  });  
	  
	var oContainer = new sap.m.TileContainer({});  
	page2.addContent(oContainer);  
	  
	var T1 = new sap.m.StandardTile({
		title:"DDM",
		info : "DDM Servers",
		number : "3",
		infoState : "Success",
		numberUnit : "3",
		press : function() {
			app = sap.ui.getCore().byId("myApp");
			app.to("idMobileView4");
		}
			});  
	oContainer.addTile(T1);
	
	var T2 = new sap.m.StandardTile({
		title:"FIT",
		info : "FIT Servers",
		number : "8",
		infoState : "Success",
		numberUnit : "8",
		press : function() {
			app = sap.ui.getCore().byId("myApp");
			app.to("idMobileView5");
		}
			});  
	oContainer.addTile(T2);
	
	var T3 = new sap.m.StandardTile({
		title:"ROT",
		info : "ROT Servers",
		number : "5",
		infoState : "Success",
		numberUnit : "5",
		press : function() {
			app = sap.ui.getCore().byId("myApp");
			app.to("idMobileView6");
		}
			});  
	oContainer.addTile(T3);
	
	var T4 = new sap.m.StandardTile({
		title:"TEST",
		info : "TEST Servers",
		number : "23",
		infoState : "Success",
		numberUnit : "34",
		press : function() {
			app = sap.ui.getCore().byId("myApp");
			app.to("idMobileView7");
		}
			});  
	oContainer.addTile(T4);
	
	var T5 = new sap.m.StandardTile({
		title:"General TEST",
		info : "TEST Servers",
		number : "6",
		infoState : "Error",
		numberUnit : "6",
		press : function() {
			app = sap.ui.getCore().byId("myApp");
			app.to("idMobileView8");
		}
			});  
	oContainer.addTile(T5);
	
	return page2;
		
	}

});