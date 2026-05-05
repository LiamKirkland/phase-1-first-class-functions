const callback = () => console.log("Hello world!");

function receivesAFunction(cb) {
  cb();
  return "Callback Function was called!";
}

function returnsANamedFunction() {
  return function returnedFunction() { return "I was returned!"; };
}

function returnsAnAnonymousFunction() {
    return function () { return "Shhhh, I'm undercover." }
}
