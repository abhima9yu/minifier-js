Package.describe({
  name: 'abernix:minifier-js',
  summary: "JavaScript minifier",
  version: "2.1.0"
});

Npm.depends({
  "source-map": "0.5.6",
  "uglify-es": "3.0.18",
});

Package.onUse(function (api) {
  api.use('babel-compiler@7.0.0');
  api.export(['meteorJsMinify']);
  api.addFiles(['minifier.js'], 'server');
});
