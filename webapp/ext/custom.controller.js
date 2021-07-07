sap.ui.controller("com.sap.fiori.fioverview.ext.custom",{

    onInit: function(){
        this.getView().byId("ovpGlobalFilter").setFilterData({"FinancialYear": "2018"})
    }
   
})