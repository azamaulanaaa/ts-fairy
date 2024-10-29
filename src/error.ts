/**
 * Create a custom error class that extends the built-in Error class.
 */
export function createErrorClass<T extends any[]>(
  name: string,
  message: string | ((...args: [...args: T, cause?: Error]) => string),
) {
  return class CustomError extends Error {
    constructor(...args: [...args: T, cause?: Error]) {
      // Extract cause if provided
      const cause = args.at(-1) instanceof Error
        ? (args.pop() as Error)
        : undefined;

      // Determine the final message
      const finalMessage = typeof message === "function"
        ? message(...args)
        : message;

      super(finalMessage, { cause }); // Set the error message
      this.name = name; // Store the custom error name
    }
  };
}
