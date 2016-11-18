/**
 * @fileoverview Prefer getIn to chaining gets
 * @author Dan Hassin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Prefer getIn to chaining gets",
      category: "Best Practices",
      recommended: false
    },
  },

  create: function(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    const isGet = (node) => {
      return (node &&
              node.type === "CallExpression" &&
              node.callee.type === "MemberExpression" &&
              node.callee.property.name === "get");
    };

    const precedingGetOfGet = (node) => {
      if (isGet(node.parent.parent)) {
        return node.parent.parent;
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      CallExpression: (node) => {
        if (isGet(node)) {
          const precedingGet = precedingGetOfGet(node);
          if (precedingGet && !precedingGetOfGet(precedingGet)) {
            context.report({
              node: node,
              message: "Unexpected chained `get`"
            });
          }
        }
      },
    };
  }
};
