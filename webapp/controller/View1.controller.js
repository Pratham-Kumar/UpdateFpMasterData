sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.updatefpmasterdata.controller.View1", {
            onInit: function () {
                let dDropdown = [
                    {
                        "text": "FINANCE"
                    },
                    {
                        "text": "HR"
                    },
                    {
                        "text": "PURCHASE"
                    }];

                let uDropdown = [
                    {
                        "text": "ORG DIR1"
                    },
                    {
                        "text": "ORG DIR2"
                    },
                    {
                        "text": "ORG DIR3"
                    }];

                let selectModel = [
                    {
                        "text": "Primary"
                    },
                    {
                        "text": "Secondary"
                    }]

                let oldModel = [
                    
                ]    

                let dModel = new JSONModel(dDropdown);
                let uModel = new JSONModel(uDropdown);
                let sModel = new JSONModel(selectModel);
                let oModel = new JSONModel(oldModel);


                this.getView().setModel(dModel, "dModel");
                this.getView().setModel(uModel, "uModel");
                this.getView().setModel(sModel, "sModel");
                this.getView().setModel(oModel, "oModel");

                var oSelect1 = this.byId("_IDGenComboBox1");
                var oSelect2 = this.byId("_IDGenComboBox13");
                var oSelect3 = this.byId("Select12");


                oSelect1.setSelectedKey("FINANCE");
                oSelect2.setSelectedKey("FINANCE");
                oSelect3.setSelectedKey("Secondary");
                
                this._autoselect("Secondary")

                this._fp("Secondary")


            },
            onSelectChange: function (oEvent) {
                var selectedKey = oEvent.getParameter("selectedItem").getKey();
                this.getView().byId("Select112").setSelectedKey(selectedKey);
                var oModel = this.getView().getModel("oModel");
                var oldData = oModel.getProperty("/0"); // Old data at index 0
                var newData = oModel.getProperty("/1"); // New data at index 1
            this._fp(selectedKey)
              
            },
            
            _autoselect(key){
                var oSelect = this.byId("Select112");
                oSelect.setSelectedKey(key);  
            },
            _fp(selectedKey){
                var oModel = this.getView().getModel("oModel");

                if (selectedKey === "Primary") {
                    oModel.setProperty("/0", {
                        focalPointname: "Rinat",
                        emailAddress: "rinat@kpo.kz"
                    });
                    oModel.setProperty("/1", {
                        focalPointname: "Ilyas",
                        emailAddress: "ilyas@kpo.kz"
                    });
                } else if (selectedKey === "Secondary") {
                    oModel.setProperty("/0", {
                        focalPointname: "Danara",
                        emailAddress: "danara@kpo.kz"
                    });
                    oModel.setProperty("/1", {
                        focalPointname: "Dmitry",
                        emailAddress: "dmitry@kpo.kz"
                    });
                }
            },
           
        });
    });
