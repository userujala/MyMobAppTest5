sap.ui.jsview("mymobapptest5.DeploymentShift", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest5.DeploymentShift
	*/ 
	getControllerName : function() {
		return "mymobapptest5.DeploymentShift";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest5.DeploymentShift
	*/ 
	createContent : function(oController) {
		
		var oTableD = new sap.ui.table.Table({
			tableId: "deploymentshiftid",
			title: "Deployment Shift Details",
			//visibleRowCount: 5,
			editable: false
		});
		
		var oControl = new sap.ui.commons.TextView({text: "{C_id_d}"})
		
		oTableD.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "C-User ID"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{EmpName_D}"})
		
		oTableD.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Emp Name"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text: "{ShiftDetails_D}"})
		
		oTableD.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Assigned Shift"}),
			visible: true,
			template: oControl
		}));

		var oControl = new sap.ui.commons.TextView({text: "{Date_D}"})

		oTableD.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Date"}),
			visible: true,
			template: oControl
		}));
		
		oTableD.bindRows("/");
		
		return new sap.m.Page({
			title: "CG_DashBoard",
			showNavButton: true,  
             navButtonTap:function(){   
              //var r = new sap.ui.getCore().byId("idMobileView11");
              //r.destroy();
            	// var r = new sap.ui.getCore().getModel(oModel1);
            	// oModel1.destroy();
           	  app.back();
            
            	// oController.onExit;
            	 
                           
             },
			content: [
			
			          oTableD 
			]
		});
		
		//return oTableD;
		
	}

});