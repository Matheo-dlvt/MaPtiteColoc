import { HTTPStatusCode } from "../types/errors";

export class CustomError extends Error {
    statusCode: HTTPStatusCode;
    errorCode: string;

    constructor(message: string, errorCode : string, statusCode: HTTPStatusCode) {
        super(message);
        this.name = "CustomError";
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        Error.captureStackTrace(this, this.constructor);
    }

}