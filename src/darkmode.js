export function initDarkMode() {
    let rootElm = document.documentElement;
    let switchElm = document.querySelector("#switch") // The switch that toggles dark mode

    // Read the user's preference from localStorage (if it exists)
    let userDark = readFromLocalStorage("isDarkMode")
    // Check the user's dark mode preference in the browser (as a fallback)
    let browserDark = window.matchMedia("prefers-color-scheme: dark").matches;

    // Check if user has a saved preference in localStorage, if not, use browser's preference
    if (userDark !== null) {
        if (userDark) {
            switchElm.checked = true;
            rootElm.setAttribute("data-dark", "true");
        } else {
            switchElm.checked = false;
            rootElm.setAttribute("data-dark", "false");
        }
    } else {
        // Fallback to browser's dark mode preference
        if (browserDark) {
            console.log("Browser preference: Dark Mode");
            switchElm.checked = true;
            rootElm.setAttribute("data-dark", "true");
        } else {
            console.log("Browser preference: Light Mode");
            switchElm.checked = false;
            rootElm.setAttribute("data-dark", "false");
        }
    }

    switchElm.addEventListener("change", function() {
        saveToLocalStorage("isDarkMode", switchElm.checked);
        
        if (switchElm.checked) {
            rootElm.setAttribute("data-dark", "true");
        } else {
            rootElm.setAttribute("data-dark", "false");
        }
    });
}
