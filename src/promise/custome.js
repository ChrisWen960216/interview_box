function _Promise(executor) {
  this.status = 'pending';
  this.value = null;
  this.reason = null;
  this.onFulfilledFunc = [];
  this.onRejectedFunc = [];

  const reject = (reason) => {
    setTimeout(
      () => {
        if (this.status === 'pending') {
          this.reason = reason;
          this.status = 'rejected';
          this.onRejectedFunc.forEach(item => item(this.reason));
        }
      },
    );
  };

  const resolve = (value) => {
    if (value instanceof _Promise) {
      return value.then(resolve, reject);
    }
    return setTimeout(() => {
      if (this.status === 'pending') {
        this.value = value;
        this.status = 'onfulfilled';
        this.onFulfilledFunc.forEach(item => item(this.value));
      }
    });
  };


  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

_Promise.prototype.then = function then(onfulfilled, onrejected) {
  const _onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : data => data;
  const _onrejected = typeof onrejected === 'function' ? onrejected : (error) => { throw error; };
  if (this.status === 'onfulfilled') {
    _onfulfilled(this.value);
  }
  if (this.status === 'onrejected') {
    _onrejected(this.reason);
  }
  if (this.status === 'pending') {
    this.onFulfilledFunc.push(_onfulfilled);
    this.onRejectedFunc.push(_onrejected);
  }
};

const promise = new _Promise((resolve) => {
  resolve('data');
});
promise.then((data) => {
  console.log(data);
});
console.log(1);
