(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.dev.unit.TestCase": {
        "require": true
      },
      "qx.dev.unit.MMock": {
        "require": true
      },
      "qx.util.Delegate": {}
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
  qx.Class.define("qx.test.util.Delegate", {
    extend: qx.dev.unit.TestCase,
    include: qx.dev.unit.MMock,
    members: {
      __delegate: null,
      setUp: function setUp() {
        this.__delegate = {
          STATIC: true,
          myMethod: function myMethod() {}
        };
      },
      tearDown: function tearDown() {
        this.__delegate = null;
      },
      testGetMethod: function testGetMethod() {
        this.assertNotNull(qx.util.Delegate.getMethod(this.__delegate, "myMethod"));
        this.assertFunction(qx.util.Delegate.getMethod(this.__delegate, "myMethod"));
        this.assertNull(qx.util.Delegate.getMethod(this.__delegate, "STATIC"));
        this.assertNull(qx.util.Delegate.getMethod(this.__delegate, "banana"));
      },
      testContainsMethod: function testContainsMethod() {
        this.assertTrue(qx.util.Delegate.containsMethod(this.__delegate, "myMethod"));
        this.assertFalse(qx.util.Delegate.containsMethod(this.__delegate, "STATIC"));
        this.assertFalse(qx.util.Delegate.containsMethod(this.__delegate, "banana"));
      },
      testMethodCall: function testMethodCall() {
        var spy = this.spy(this.__delegate, "myMethod");
        var myMethod = qx.util.Delegate.getMethod(this.__delegate, "myMethod");
        myMethod(99, 89, 99);
        this.assertCalled(spy);
        this.assertCalledWith(spy, 99, 89, 99);
        this.assertCalledOn(spy, this.__delegate);
      }
    }
  });
  qx.test.util.Delegate.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Delegate.js.map?dt=1588102280267