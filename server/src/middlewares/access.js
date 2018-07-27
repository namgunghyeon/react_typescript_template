
const accessLog = (ctx, next) => {
  const {
    method,
    url,
  } = ctx.request;

  console.log(method, url);

  return next();
}

export {
  accessLog,
}