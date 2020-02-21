Array.prototype._map = function _map(func) {
  const _array = this;
  return _array.reduce(
    (pre, current, index, array) => {
      pre.push(func(current, index, array));
      return pre;
    }, [],
  );
};
