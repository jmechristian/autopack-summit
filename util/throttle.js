export function throttle(f, delay) {
  let timer = 0;
  return function (fn, ...args) {
    clearTimeout(timer);
    timer = window.setTimeout(() => f.apply(fn, args), delay);
  };
}
