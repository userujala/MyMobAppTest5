sap.ui.jsview("mymobapptest5.ServerStatusView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.ServerStatusView
	*/ 
	getControllerName : function() {
		return "mymobapptest5.ServerStatusView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.ServerStatusView
	*/ 
	createContent : function(oController) {
		
		var oTable = new sap.ui.table.Table({
			tableId: "mytable",
			title: "Server Status",
			//visibleRowCount: 5,
			editable: false
		});
		
		var oControl = new sap.ui.commons.TextView({text: "{ServerName}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text: "Server Name"}),
			visible: true,
			template: oControl
			
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{Status}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Status"}),
			visible: true,
			template: oControl
		}));
		
		oTable.bindRows("/");
		
		return new sap.m.Page({
			title: "CG_DashBoard",
			showNavButton: true,  
             navButtonTap:function(){   
           	  app.back();
                           
             },
			content: [
			
			          oTable     
			]
		});
		
		//return oTable;
		
	}

});