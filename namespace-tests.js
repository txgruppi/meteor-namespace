Tinytest.add("define keys to global scope", function (test) {
  var scope = {};
  var value = r();
  test.isUndefined(scope.testKey);
  namespace("", function(){
    return {
      testKey: value,
    };
  }, scope);
  test.equal(scope.testKey, value);
});

Tinytest.add("define nested namespace", function(test) {
  var scope = {};
  var value = r();
  test.isUndefined(scope.testKey);
  namespace("a.b.c.d.e.f", function(){
    return {
      testKey: value,
    };
  }, scope);
  test.equal(scope.a.b.c.d.e.f.testKey, value);
});

Tinytest.add("define in the real global scope", function(test) {
  // Server reruns tests without cleaning the global scope.
  var g = (typeof global !== "undefined") ? global :
    (typeof window !== "undefined") ? window :
    null;
  if (g.a) {
    delete g.a;
  }
  var value = r();
  test.throws(function(){
    a.b.c.d.e.f.testKey;
  });
  namespace("a.b.c.d.e.f", function(){
    return {
      testKey: value,
    };
  });
  test.equal(a.b.c.d.e.f.testKey, value);
});

function r() {
  return Math.random().toString(36).substr(2);
}
