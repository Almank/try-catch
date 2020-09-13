import test from "ava";
import { tryCatch, tryCatchPromise } from "../dist"

const mockThrowingError = () => {
    throw new Error();
}

const mockGetResult = (...args) => {
    return args;
}

const mockGetResultAsyncResolved = (...args) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(args)
        }, 1);
    });
}

const mockGetResultAsyncRejected = (...args) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(args)
        }, 1);
    });
}

test("should return error if type of function is not a function", t => {
    const [result, error] = tryCatch(mockThrowingError);
    t.truthy(error);
    t.falsy(result);
});

test("should return result", t => {
    const [result, error] = tryCatch(mockGetResult, "test", "successful");
    
    t.falsy(error);
    t.truthy(result);
});

test("should return result from promise", async t => {
    const [result, error] = await tryCatchPromise(mockGetResultAsyncResolved, "test", "successful");
    
    t.falsy(error);
    t.truthy(result);
});

test("should return error from promise", async t => {
    const [result, error] = await tryCatchPromise(mockGetResultAsyncRejected, "test", "successful");
    
    t.falsy(result);
    t.truthy(error);
});




