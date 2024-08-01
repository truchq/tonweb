module.exports = function (babel) {
    const { types: t } = babel;
  
    return {
      visitor: {
        BigIntLiteral(path) {
          const value = path.node.value;
          path.replaceWith(t.callExpression(t.identifier('BigInt'), [t.numericLiteral(Number(value))]));
        }
      }
    };
  };