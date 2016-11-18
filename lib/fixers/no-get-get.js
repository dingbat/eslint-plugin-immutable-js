module.exports = function(code) {
  var newCode = code.replace(/get\(([^)]+)/, "getIn([$1");
  newCode = newCode.replace(/\).get\(([^)]+)/g, ", $1");
  newCode = newCode.replace(/\)$/, "])");
  return newCode;
};
