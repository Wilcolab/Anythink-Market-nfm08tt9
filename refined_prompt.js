/**
 * Converts a string to dot.case format.
 *
 * This function transforms the input string into dot.case, where all words are
 * separated by a single dot ('.'). It treats spaces, hyphens, and underscores as word
 * separators, preserves numbers, and removes special characters except for letters and numbers.
 * CamelCase boundaries are also detected and separated by a dot.
 *
 * @function toDotCase
 * @param {string} str - The input string to be converted. Must be a non-null string.
 * @throws {Error} Throws an error if the input is not a string, or is null or undefined.
 * @returns {string} The dot.case formatted string, with all words in lowercase and separated by dots.
 *
 * @example
 * toDotCase('first name'); // 'first.name'
 * toDotCase('user_id'); // 'user.id'
 * toDotCase('user-id'); // 'user.id'
 * toDotCase('user 123_name'); // 'user.123.name'
 * toDotCase('alreadyCamelCase'); // 'already.camel.case'
 */

/**
 * Converts a string to camelCase format.
 *
 * This function transforms the input string into camelCase, where the first word is in lowercase
 * and each subsequent word starts with an uppercase letter. It treats spaces, hyphens, and underscores
 * as word separators, preserves numbers, and removes special characters except for letters and numbers.
 *
 * @function toCamelCase
 * @param {string} str - The input string to be converted. Must be a non-null string.
 * @throws {Error} Throws an error if the input is not a string, or is null or undefined.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('first name'); // 'firstName'
 * toCamelCase('user_id'); // 'userId'
 * toCamelCase('user-id'); // 'userId'
 * toCamelCase('user 123_name'); // 'user123Name'
 * toCamelCase('alreadyCamelCase'); // 'alreadycamelcase'
 */
/*
 * Handles spaces, hyphens, underscores as word separators.
 * Preserves numbers, removes special characters except numbers and letters.
 * Throws an error for non-string, undefined, or null inputs.
 * @param {string} str
 * @returns {string}
 */
function toDotCase(str) {
    if (typeof str !== 'string' || str === undefined || str === null) {
        throw new Error('Input must be a non-null string');
    }

    // Remove leading/trailing whitespace and special characters except letters, numbers, space, hyphen, underscore
    str = str.trim();

    // Replace all non-word separators (except space, hyphen, underscore) with empty string
    str = str.replace(/[^\w\s-_]/g, '');

    // Insert dot between camelCase boundaries
    str = str.replace(/([a-z])([A-Z])/g, '$1.$2');

    // Split by space, hyphen, or underscore, then join with dot
    return str.split(/[\s-_]+/).filter(Boolean).join('.').toLowerCase();
}

/**
 * Converts a string to camelCase.
 * Handles spaces, hyphens, underscores as word separators.
 * Preserves numbers, removes special characters except numbers and letters.
 * Throws an error for non-string, undefined, or null inputs.
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
    if (typeof str !== 'string' || str === undefined || str === null) {
        throw new Error('Input must be a non-null string');
    }

    // Remove leading/trailing whitespace and special characters except letters, numbers, space, hyphen, underscore
    str = str.trim();

    // Replace all non-word separators (except space, hyphen, underscore) with empty string
    str = str.replace(/[^\w\s-_]/g, '');

    // Split by space, hyphen, or underscore
    const words = str.split(/[\s-_]+/);

    // Lowercase the first word, capitalize the rest
    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('user-id')); // userId
// console.log(toCamelCase('user 123_name')); // user123Name
// console.log(toCamelCase('  special@# chars! ')); // specialChars
// console.log(toCamelCase('alreadyCamelCase')); // alreadycamelcase

