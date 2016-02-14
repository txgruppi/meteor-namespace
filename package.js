Package.describe({
  name: "txgruppi:namespace",
  version: "0.0.2",
  summary: "Namespace helper for Meteor",
  git: "https://github.com/txgruppi/meteor-namespace",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.1");
  api.addFiles("namespace.js");
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("txgruppi:namespace");
  api.addFiles("namespace-tests.js");
});
