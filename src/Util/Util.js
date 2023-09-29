export const debounce = (func, delay = 500) => {
  let timer;
  return function () {
    const context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
};
