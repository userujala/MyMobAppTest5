sap.ui.jsview("mymobapptest5.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.Main
	*/ 
	getControllerName : function() {
		return "mymobapptest5.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.Main
	*/ 
	createContent : function(oController) {
		
		
		app = sap.ui.getCore().byId("myApp");
        
	 	  var page1 =new sap.m.Page("page1",{  
	 	                      title: "CG_DashBoard",    
	 	                      showNavButton: false,  
	 	                      navButtonTap:function(){   
	 	                                     app.to("idMobileView2");
	 	                                     app.to("idMobileView3");
	 	                                    app.to("idMobileView4");
	 	                                   app.to("idMobileView5");
	 	                                  app.to("idMobileView6");
	 	                                 app.to("idMobileView7");
	 	                                 app.to("idMobileView8");
	 	                                 app.to("idMobileView9");
	 	                                 app.to("idMobileView10");
	 	                                app.to("idMobileView11");
	 	                               app.to("idMobileView12");
	 	                              app.to("idMobileView13");
	 	                             app.to("idMobileView14");
	 	                                     
	 	                      }  
	 	  }); 
	 	  
	 	 var oContainer = new sap.m.TileContainer({});  
			page1.addContent(oContainer);  
			  
			var T1 = new sap.m.StandardTile({
				title:"Servers",
				info : "Server Check",
				number : "3",
				infoState : "Success",
				numberUnit : "23",
				press : function() {
					app.to("idMobileView2");
				} 
					});  
			oContainer.addTile(T1);
			
			var T2 = new sap.m.StandardTile({
				title:"Service Now",
				info : "ServiceNow INC Check",
				number : "23",
				infoState : "Success",
				numberUnit : "34",
				press : function() {
					app.to("idMobileView3");
				} 
					});  
			oContainer.addTile(T2);
			
			var T3 = new sap.m.StandardTile({
				title:"Shift Details",
				info : "Shift Details For All Teams",
				number : "23",
				infoState : "Success",
				numberUnit : "34",
				press: function(){
					app.to("idMobileView10");
				}
					});  
			oContainer.addTile(T3);
			
			
	 	  
	 	 return page1;
		
	}

});