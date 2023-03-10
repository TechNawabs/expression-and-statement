// async function sample with params
async function asyncFunctionWithoutParams() {
    console.log("async function without params");
}

// async function sample with params
async function asyncFunctionWithParams(param1, param2) {
    console.log("async function with params " + param1 + ", " + param2);
}

asyncFunctionWithoutParams();
asyncFunctionWithParams(4, 7);
