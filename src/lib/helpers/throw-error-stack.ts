// Helper function to safely extract an error message (consistent with service methods)
import { BadRequestException } from "@nestjs/common";

export const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === 'string') {
        return error;
    }
    if (error && typeof error === 'object' && 'message' in error) {
        return String(error.message);
    }
    return 'An unknown error occurred';
};


// Helper function to safely extract error stack
export const getErrorStack = (error: unknown): string | undefined => {
    if (error instanceof Error && error.stack) {
        return error.stack;
    }
    if (error && typeof error === 'object' && 'stack' in error) {
        return String(error.stack);
    }
    return undefined;
};

// Helper function to check if error is MongoDB error
export const isMongoError = (error: unknown): error is any => {
    return error && typeof error === 'object' && 'name' in error;
};

export const throwErrorStack = (error: unknown, message: string): void => {
    if (error instanceof Error) {
        throw new BadRequestException(message, {
            description: error.message,
        });
    } else {
        throw new BadRequestException(`${message} : ${error}`);
    }
};
