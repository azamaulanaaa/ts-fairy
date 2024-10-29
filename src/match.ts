export type MatchPattern<T, R = unknown> =
  | [test: (value: T) => boolean, handler: (value: T) => R] // Handler with value
  | [test: "default", handler: (value: T) => R]; // Default case with value

export type EnsureSingleDefault<T extends MatchPattern<any, any>[]> = T extends
  [...infer Rest, infer Last]
  ? Last extends [test: "default", handler: (value: any) => any]
    ? Rest extends Array<infer U>
      ? U extends [test: "default", handler: any] ? never // Prevents multiple "default" cases
      : T // Valid if no multiple "default" cases
    : T // Valid if no "default" case at all
  : T // Valid if the last case is not "default"
  : T;

/**
 * Matches a value against a set of patterns and returns the result
 * of the corresponding handler. If no match is found, an error is thrown.
 *
 * @param value - The value to be matched against the patterns.
 * @param patterns - An array of patterns, each consisting of a test and a handler.
 * @returns The result from the matched handler.
 * @throws Error if no matching pattern is found.
 *
 * @example
 * // Example usage
 * const result = match(-5, [
 *   [value => value < 0, value => value * -1], // Negate negative values
 *   ["default", value => value] // Default case: return the value as is
 * ]);
 * console.log(result); // Output: 5
 */
export function match<T, R>(
  value: T,
  patterns: EnsureSingleDefault<MatchPattern<T, R>[]>,
): R {
  for (const [test, handler] of patterns) {
    if ((typeof test === "function" && test(value)) || test === "default") {
      return handler(value);
    }
  }

  // Enhanced error handling
  throw new Error(
    `No matching pattern found for value: ${JSON.stringify(value)}`,
  );
}
