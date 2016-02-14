function namespace(ns, fn) {
  var g = (typeof arguments[2] !== "undefined") ? arguments[2] :
    (typeof global !== "undefined") ? global :
    (typeof window !== "undefined") ? window :
    null;

  if (!g) {
    throw new Error("The global scope could now be found, tried `global` and `window`.");
  }

  ns = ns.trim();
  processed = ["global"];
  if (ns === "") {
    return define(processed, g, fn);
  }

  ns.split(".").reduce(function(current, key, index, all){
    key = key.trim();
    if (!current || typeof current !== "object") {
      throw new Error("The current scope is not valid, an object was expected.");
    }

    if (!current[key]) {
      current[key] = {};
    }

    if (index < all.length - 1) {
      processed.push(key);
      return current[key];
    }

    define(processed, current[key], fn);
  }, g);
}

function define(ns, scope, fn) {
  var items = fn();

  if (typeof items !== "object") {
    throw new Error("Your namespace callback should return an object, got: " + (typeof items));
  }

  Object.keys(items).forEach(function(key){
    if (typeof scope[key] !== "undefined") {
      throw new Error("Trying to replace existing object at namespace \"" + ns.join(".") + "\"");
    }
    scope[key] = items[key];
  });
}

// Define the namespace function using the namespace function
namespace("", function() {
  return {
    namespace: namespace,
  };
});
