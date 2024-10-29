/**
 * Result type is Rust-like Result
 *
 * This type represents the outcome of an operation that can either succeed with a value
 * or fail with an error. The type is designed to be used similarly to Rust's `Result` enum.
 *
 * @example
 * // Example of a successful result
 * const successResult: Result<string, Error> = Ok("Operation succeeded");
 *
 * // Example of an error result
 * const errorResult: Result<string, Error> = Err(new Error("Operation failed"));
 */
export type Result<Ok extends unknown, Err extends Error> =
  | { ok: Ok; err?: undefined }
  | { ok?: undefined; err: Err };

/**
 * Generate Ok Result
 *
 * This function creates a successful result containing a value.
 *
 * @param value - The value that indicates a successful operation.
 * @returns A Result type indicating success.
 *
 * @example
 * const result = Ok("Data loaded successfully");
 * // result is of type Result<string, Error>
 */
export function Ok<Ok extends unknown, Err extends Error>(
  value: Ok,
): Result<Ok, Err> {
  return { ok: value };
}

/**
 * Generate Error Result
 *
 * This function creates a result representing an error.
 *
 * @param error - The error to be used in the result.
 * @returns A Result type indicating failure.
 *
 * @example
 * const result = Err(new Error("Failed to load data"));
 * // result is of type Result<unknown, Error>
 */
export function Err<Ok extends unknown, Err extends Error>(
  error: Err,
): Result<Ok, Err> {
  return { err: error };
}
