// Helper function to safely extract an error message (consistent with service methods)
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
