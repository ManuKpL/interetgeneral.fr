export const compose = (...functions: ((...args: any[]) => any)[]) => {
  const _compose = (acc: any, fns: ((...args: any[]) => any)[]) => {
    if (!fns.length) {
      return acc;
    }
    const [next] = fns.slice(-1);
    return _compose(next(acc), fns.slice(0, fns.length - 1));
  };

  return (accumulator = null) => _compose(accumulator, functions);
};
