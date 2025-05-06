export default function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return "Data saved with the key: " + key;
}
    
export function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
    
export function deleteFromLocalStorage(key) {
    localStorage.removeItem(key);
    return "the element with the key: " + key + " has been removed";
}
