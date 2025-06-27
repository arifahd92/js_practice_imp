function change(param, cb1, cb2=cb1) {
  param += 10;
  if (Math.random() > 0.5) {
    cb1(null, param);
  } else {
    cb(new Error("sss"), param);
  }
}
change.promise = function (param) {
  return new Promise((res, rej) => {
    this(param, res,rej);
  });
};
change.promise(5).then((data)=>console.log(data));
