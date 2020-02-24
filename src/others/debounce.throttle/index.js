// 一段时间内只会触发一次函数
function debounce(func, wait, immediate) {
  let timeout = null;
  return function _debounce(...args) {
    const invoking = immediate && !timeout;
    if (timeout) { clearTimeout(timeout); }
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) { return func.apply(this, args); }
      return null;
    }, wait);
    if (invoking) { return func.apply(this, args); }
    return true;
  };
}

function say(name) {
  console.log(name);
}


const _say = debounce(say, 1000, false);
_say('Christian');
_say('JiaMei');
_say('HuanXin');
_say('YuPei');

// 每次函数的触发都有最低时间间隔，低于这个时间间隔的函数调用将被视为无效
function throttle(func, wait) {
  let timeout = null;
  return function _throttle(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(this, args);
        timeout = null;
      }, wait);
    }
  };
}


const __say = throttle(say, 1000);

__say('Christian');
__say('JiaMei');
__say('HuanXin');
__say('YuPei');
