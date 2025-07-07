sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("demo.controller.App", {
    onInit: function() {
      const oModel = new sap.ui.model.odata.v4.ODataModel({
        serviceUrl: "/sap/opu/odata4/your_namespace/Z_BOOK_SERVICE/",
        synchronizationMode: "None"
      });
      this.getView().setModel(oModel);
    }
  });
});