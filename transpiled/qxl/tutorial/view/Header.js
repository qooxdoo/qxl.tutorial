(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Canvas": {
        "construct": true
      },
      "qx.ui.basic.Label": {
        "construct": true
      },
      "qx.ui.form.Button": {
        "construct": true
      },
      "qxl.versionlabel.VersionLabel": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * The Application's header
   */
  qx.Class.define("qxl.tutorial.view.Header", {
    extend: qx.ui.container.Composite,
    events: {
      "selectTutorial": "qx.event.type.Event"
    },

    /**
     * @ignore(qxc)
     */
    construct: function construct() {
      qx.ui.container.Composite.constructor.call(this);
      this.setLayout(new qx.ui.layout.Canvas());
      this.setAppearance("app-header");
      var title = new qx.ui.basic.Label("Live Tutorial");
      var select = new qx.ui.form.Button("Select Tutorial");
      select.setToolTipText("Choose another tutorial");
      select.setFont("default");
      select.setTextColor("black");
      select.addListener("execute", function () {
        this.fireEvent("selectTutorial");
      }, this);
      var version = new qxl.versionlabel.VersionLabel();
      version.setFont("default");
      this.add(title, {
        left: 10,
        top: 5
      });
      this.add(select, {
        left: "40%",
        right: "40%"
      });
      this.add(version, {
        right: 10,
        top: 3
      });
    }
  });
  qxl.tutorial.view.Header.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Header.js.map?dt=1588102305724