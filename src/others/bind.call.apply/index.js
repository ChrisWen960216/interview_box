Function.prototype._bind = function _bind(target, ...args) {
  const fn = this;
  return () => { fn.call(target, args); };
};

Function.prototype._call = function _call(context, ...args) {
  const _context = context || global; // 参数默认值并不会排除null，所以重新赋值
  _context.fn = this; // this是调用call的函数
  const result = _context.fn(...args);
  delete _context.fn; // 执行后删除新增属性
  return result;
};


Function.prototype._apply = function _apply(context, args = []) {
  const _context = context || global;
  _context.fn = this;
  const result = _context.fn(...args);
  delete _context.fn;
  return result;
};
