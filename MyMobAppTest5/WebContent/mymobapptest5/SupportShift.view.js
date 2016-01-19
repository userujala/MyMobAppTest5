sap.ui.jsview("mymobapptest5.SupportShift", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.SupportShift
	*/ 
	getControllerName : function() {
		return "mymobapptest5.SupportShift";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.SupportShift
	*/ 
	createContent : function(oController) {
		
		var oTableSu = new sap.ui.table.Table({
			tableId: "supportshiftid",
			title: "Support Shift Details",
			//visibleRowCount: 5,
			editable: false
		});
		
		var oControl = new sap.ui.commons.TextView({text: "{C_id_s}"})
		
		oTableSu.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "C-User ID"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{EmpName_S}"})
		
		oTableSu.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Emp Name"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{ShiftDetails_S}"})
		
		oTableSu.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Assigned Shift"}),
			visible: true,
			template: oControl
		}));

		var oControl = new sap.ui.commons.TextView({text: "{Date_S}"})

		oTableSu.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Date"}),
			visible: true,
			template: oControl
		}));
		
		oTableSu.bindRows("/");
		
		return new sap.m.Page({
			title: "CG_DashBoard",
			showNavButton: true,  
             navButtonTap:function(){   
           	  app.back();
                           
             },
			content: [
			
			          oTableSu     
			]
		});
		
		//sap.ui.getCore().byView("idMobileView12").refresh();
		
		//return oTableSu;
		
	}

});