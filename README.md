# Namespace

Namespace helper for Meteor

## Usage

### ES5

```js
namespace("MyBlog.Models", function() {
  var Posts = new Mongo.Collection("posts");
  return {
    Posts: Posts,
  };
});
```

### ES6

```js
namespace("MyBlog.Models", () => {
  let Posts = new Mongo.Collection("posts");
  return { Posts };
});
```

### CoffeeScript

```coffee
namespace "MyBlog.Models", ->
  Posts = new Mongo.Collection("posts")
  return { Posts }
```
