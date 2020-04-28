(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */
  qx.Class.define("qx.test.ui.list.fixture.ItemMock", {
    extend: qx.core.Object,
    properties: {
      name: {
        event: "changeName"
      },
      group: {
        event: "changeGroup"
      }
    }
  });
  qx.test.ui.list.fixture.ItemMock.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ItemMock.js.map?dt=1588102277161