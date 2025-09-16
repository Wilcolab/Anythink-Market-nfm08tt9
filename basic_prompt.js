function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(/[\s-_]+/)
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

// Example usage:
console.log(toCamelCase('first name')); // "firstName"
console.log(toCamelCase('First-Name')); // "firstName"
console.log(toCamelCase('first_name')); // "firstName"