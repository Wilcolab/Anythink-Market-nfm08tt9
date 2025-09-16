function toKebabCase(str) {
    // Step 1 & 2: Replace spaces with hyphens, handle camelCase
    let kebab = str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // insert hyphen before uppercase
        .replace(/\s+/g, '-') // replace spaces with hyphens

    // Step 3: Replace non-alphanumeric (excluding hyphens) with hyphen
    kebab = kebab.replace(/[^a-zA-Z0-9-]+/g, '-');

    // Convert to lowercase
    kebab = kebab.toLowerCase();

    // Remove consecutive hyphens
    kebab = kebab.replace(/-+/g, '-');

    // Remove leading/trailing hyphens
    kebab = kebab.replace(/^-+|-+$/g, '');

    return kebab;
}

// Example usage:
// console.log(toKebabCase('Hello World! ThisIsCamelCase--test'));
// Output: 'hello-world-this-is-camel-case-test'