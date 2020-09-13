/**
 * @returns ```[result, error]``` The first element is always the result, and the second is the error.
 */
type TTryCatch = [any, Error | null];

/**
 * A function to Try/Catch methods.
 * @param method the method you want to try/catch.
 * @param args parameters provided to the method.
 * @returns ```[result, error]``` The first element is always the result, and the second is the error.
 */

const tryCatch = (method: Function, ...args: any): TTryCatch => {
    try {
        verifyType(method);
        return [method(...args), null]
    } catch (err) {
        return [null, err]
    }
}

/**
 * A function to Try/Catch async methods.
 * @param method the method you want to try/catch.
 * @param args parameters provided to the method.
 * @returns ```[result, error]``` The first element is always the result, and the second is the error.
 */
const tryCatchPromise = async (method: Function, ...args: any): Promise<TTryCatch> => {
    try {
        verifyType(method);
        return [await method(...args), null];
    } catch (err) {
        return [null, err];
    }
}

/** @internal */
const verifyType = (method: Function): void => {
    if (typeof method !== "function") {
        const message = `Expected method to be a function. Received: ${typeof method}`;
        throw new TypeError(message);
    }
}

export { tryCatch, tryCatchPromise };
