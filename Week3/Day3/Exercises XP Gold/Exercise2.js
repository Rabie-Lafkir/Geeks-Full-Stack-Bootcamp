/**
 * abbrevName
 * @param {*} name 
 * @returns 
 */
function abbrevName(name) {
    let parts = name.split(" ");
    if (parts.length > 1) {
        return `${parts[0]} ${parts[1][0]}.`;
    }
    return name;
}

console.log(abbrevName("Robin Singh")); // "Robin S."
console.log(abbrevName("Rabie Lafkir")); // "Robin S."