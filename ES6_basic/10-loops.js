export default function appendToEachArrayValue(array, appendString) {
    let text = [];
    for (let idx of array) {
        text.push(appendString + idx)
    }

    return text;
}
