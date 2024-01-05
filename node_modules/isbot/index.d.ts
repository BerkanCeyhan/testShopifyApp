/**
 * A pattern that matches bot identifiers in user agent strings.
 */
export declare const pattern: RegExp;
/**
 * A list of bot identifiers to be used in a regular expression against user agent strings.
 */
export declare const list: string[];
/**
 * Check if the given user agent includes a bot pattern.
 */
export declare const isbot: (userAgent?: string | null) => boolean;
/**
 * Create a custom isbot function with a custom pattern.
 */
export declare const createIsbot: (customPattern: RegExp) => (userAgent?: string | null) => boolean;
/**
 * Create a custom isbot function with a custom pattern.
 */
export declare const createIsbotFromList: (list: string[]) => (userAgent: string) => boolean;
/**
 * Find the first part of the user agent that matches a bot pattern.
 */
export declare const isbotMatch: (userAgent?: string | null) => string | null;
/**
 * Find all parts of the user agent that match a bot pattern.
 */
export declare const isbotMatches: (userAgent?: string | null) => string[];
/**
 * Find the first bot patterns that match the given user agent.
 */
export declare const isbotPattern: (userAgent?: string | null) => string | null;
/**
 * Find all bot patterns that match the given user agent.
 */
export declare const isbotPatterns: (userAgent?: string | null) => string[];
