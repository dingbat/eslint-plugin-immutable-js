/**
 * @fileoverview Prefer getIn to chaining gets
 * @author Dan Hassin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-get-get");
const RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-get-get", rule, {
  valid: [
    "map.getIn([\"a\", \"b\"])",
    "x.get(\"a\").func(x).get(\"b\")",
  ],

  invalid: [
    {
      code: "map.get(\"a\").get(\"b\")",
      errors: [{
        message: "Unexpected chained `get`",
        type: "CallExpression"
      }]
    },
    {
      code: "map.get(\"a\").get(\"b\").get(\"c\")",
      errors: [{
        message: "Unexpected chained `get`",
        type: "CallExpression"
      }]
    },
    {
      code: "map.get(\"a\").get(func(func(0))).get(x)",
      errors: [{
        message: "Unexpected chained `get`",
        type: "CallExpression"
      }]
    },
    {
      code: "map.get(other.get(\"a\").get(2))",
      errors: [{
        message: "Unexpected chained `get`",
        type: "CallExpression"
      }]
    },
  ],
});
