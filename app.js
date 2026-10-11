
let str = prompt("Enter a sentence");

// 1. Trimmed
console.log("Trimmed:", str.trim());

// 2. Uppercase
console.log("Uppercase:", str.toUpperCase());

// 3. Lowercase
console.log("Lowercase:", str.toLowerCase());

// 4. Capitalize Every Word
let words = str.trim().toLowerCase().split(" ");
let result = "";

for (let word of words) {
    result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}

console.log("Capitalize:", result.trim());

// 5. Character Count
console.log("Character Count:", str.trim().length);

// 6. Word Count
console.log("Word Count:", str.trim() === "" ? 0 : str.trim().split(/\s+/).length);
