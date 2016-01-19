sap.ui.jsview("mymobapptest5.P2View", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.P2View
	*/ 
	getControllerName : function() {
		return "mymobapptest5.P2View";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.P2View
	*/ 
	createContent : function(oController) {
		
		var oTableS2 = new sap.ui.table.Table({
			tableId: "mytablep2",
			title: "ServiceNow Status",
			//visibleRowCount: 5,
			editable: false
		});
		
		var oControl = new sap.ui.commons.TextView({text: "{Number_p2}"})
		
		oTableS2.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "INC Number"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{Priority_p2}"})
		
		oTableS2.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Priority"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{AssignedTo_p2}"})
		
		oTableS2.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Assigned Person"}),
			visible: true,
			template: oControl
		}));

		var oControl = new sap.ui.commons.TextView({text: "{Description_p2}"})

		oTableS2.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Short Description"}),
			visible: true,
			template: oControl
		}));
		
		oTableS2.bindRows("/");
		
		return new sap.m.Page({
			title: "CG_DashBoard",
			showNavButton: true,  
             navButtonTap:function(){   
           	  app.back();
                           
             },
			content: [
			
			          oTableS2     
			]
		});
		
	}

});