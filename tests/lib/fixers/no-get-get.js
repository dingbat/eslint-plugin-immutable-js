/**
 * @fileoverview Fix chaining gets to getIn
 * @author Dan Hassin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert");
const fixer = require("../../../lib/fixers/no-get-get");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const examples = [
  [
    "map.get(\"a\").get(\"b\")",
    "map.getIn([\"a\", \"b\"])",
  ],
  [
    "map.get(\"a\").get(\"b\").get(\"c\")",
    "map.getIn([\"a\", \"b\", \"c\"])",
  ],
  [
    "map.get(\"a\").get(func(func(0))).get(x)",
    "map.getIn([\"a\", func(func(0)), x])",
  ],
];

describe("no-get-get", function() {
  describe("fixer", function() {
    examples.forEach(function(example) {
      it(example[0], function() {
        assert.equal(fixer(example[0]), example[1]);
      });
    });
  });
});
