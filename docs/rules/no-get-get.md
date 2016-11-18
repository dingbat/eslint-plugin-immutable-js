# Prefer `getIn` to chaining `get`s (no-get-get)

- Doing this may cause errors due to parts of the chain returning undefined
- Doing this takes up a lot of room and does not seem idiomatic

This rule encourages use of `getIn` instead of chaining `get`s.

## Rule Details

The following patterns are considered warnings:

```js
map.get("a").get("b")
map.get("a").get("b").get("c")
map.get("a").get(func(func(0))).get(x)
map.get(other.get("a").get(2))
```

The following patterns are not warnings:

```js
map.getIn(["a", "b"])
x.get("a").func(x).get("b")
```
