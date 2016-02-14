[![Travis branch](https://img.shields.io/travis/txgruppi/meteor-namespace/master.svg?style=flat-square)](https://travis-ci.org/txgruppi/meteor-namespace/builds) [![GitHub tag](https://img.shields.io/github/tag/txgruppi/meteor-namespace.svg?style=flat-square)](https://github.com/txgruppi/meteor-namespace) [![GitHub license](https://img.shields.io/github/license/txgruppi/meteor-namespace.svg?style=flat-square)](https://github.com/txgruppi/meteor-namespace)

## meteor-namespace
A namespace helper for meteor. It allows you to define namespaces in meteor using the well-known dot notation.

## Installation
```
$ meteor add txgruppi:namespace
```

## Usage

### ES5

```JS
namespace('MyBlog.Models', function() {
  var Posts = new Mongo.Collection('posts');
  return {
    Posts: Posts
  };
});
```

### ES6
```JS
namespace('MyBlog.Models', () => {
  let Posts = new Mongo.Collection('posts');
  return {
    Posts
  };
});
```

### CoffeeScript
```Coffee
namespace 'MyBlog.Models', ->
  Posts = new Mongo.Collection 'posts'
  return { Posts }
```

## License

GPLv3
