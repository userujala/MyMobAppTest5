sap.ui.jsview("mymobapptest5.SOCView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.SOCView
	*/ 
	getControllerName : function() {
		return "mymobapptest5.SOCView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.SOCView
	*/ 
	createContent : function(oController) {
		
		var oTableSoc = new sap.ui.table.Table({
			tableId: "socshiftid",
			title: "SOC Shift Details",
			//visibleRowCount: 5,
			editable: false
		});
		
		var oControl = new sap.ui.commons.TextView({text: "{C_id_o}"})
		
		oTableSoc.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "C-User ID"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{EmpName_O}"})
		
		oTableSoc.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Emp Name"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{ShiftDetails_O}"})
		
		oTableSoc.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Assigned Shift"}),
			visible: true,
			template: oControl
		}));

		var oControl = new sap.ui.commons.TextView({text: "{Date_O}"})

		oTableSoc.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Date"}),
			visible: true,
			template: oControl
		}));
		
		oTableSoc.bindRows("/");
		
		return new sap.m.Page({
			title: "CG_DashBoard",
			showNavButton: true,  
             navButtonTap:function(){   
           	  app.back();
                           
             },
			content: [
			
			          oTableSoc     
			]
		});
		
		//return oTableSoc;
		
	}

});