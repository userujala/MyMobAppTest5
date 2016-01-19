sap.ui.jsview("mymobapptest5.PIView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.PIView
	*/ 
	getControllerName : function() {
		return "mymobapptest5.PIView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.PIView
	*/ 
	createContent : function(oController) {
		
		var oTablePi = new sap.ui.table.Table({
			tableId: "pishiftid",
			title: "PI Shift Details",
			//visibleRowCount: 5,
			editable: false
		});
		
		var oControl = new sap.ui.commons.TextView({text: "{C_id_p}"})
		
		oTablePi.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "C-User ID"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{EmpName_P}"})
		
		oTablePi.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Emp Name"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{ShiftDetails_P}"})
		
		oTablePi.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Assigned Shift"}),
			visible: true,
			template: oControl
		}));

		var oControl = new sap.ui.commons.TextView({text: "{Date_P}"})

		oTablePi.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Date"}),
			visible: true,
			template: oControl
		}));
		
		oTablePi.bindRows("/");
		
		return new sap.m.Page({
			title: "CG_DashBoard",
			showNavButton: true,  
             navButtonTap:function(){   
           	  app.back();
                           
             },
			content: [
			
			          oTablePi     
			]
		});
		
		//return oTablePi;
		
	}

});