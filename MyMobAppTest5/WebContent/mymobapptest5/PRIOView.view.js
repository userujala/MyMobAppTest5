sap.ui.jsview("mymobapptest5.PRIOView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.PRIOView
	*/ 
	getControllerName : function() {
		return "mymobapptest5.PRIOView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.PRIOView
	*/ 
	createContent : function(oController) {
		
		app = sap.ui.getCore().byId("myApp");
		
	  	 var page3 = new sap.m.Page("page3",{  
	          title: "CG_DashBoard",      
	          showNavButton: true,  
	          navButtonTap:function(){  
	                         app = sap.ui.getCore().byId("myApp");   
	                         app.back();
	          }  
	});
	  	 
	  	var oContainer = new sap.m.TileContainer({});  
		page3.addContent(oContainer);  
		  
		var T1 = new sap.m.StandardTile({
			title:"P1",
			info : "P1 INC Check",
			number : "23",
			infoState : "Success",
			numberUnit : "34",
			press : function() {
				app.to("idMobileView9"); 
			}
				});  
		oContainer.addTile(T1);
		
		var T2 = new sap.m.StandardTile({
			title:"P2",
			info : "P2 INC Check",
			number : "23",
			infoState : "Success",
			numberUnit : "34",
			press : function() {
				app.to("idMobileView15"); 
			}
				});  
		oContainer.addTile(T2);
		
	/*	var T3 = new sap.m.StandardTile({
			title:"P3",
			info : "P3 INC Check",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T3);
		
		var T4 = new sap.m.StandardTile({
			title:"P4",
			info : "P4 INC Check",
			number : "23",
			infoState : "Success",
			numberUnit : "34"
				});  
		oContainer.addTile(T4); */
		
		return page3;
		
	}

});