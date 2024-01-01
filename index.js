const main = document.getElementById("mainheading")
main.textContent = "SplitVerse"
function handleMouseHover() {
    if (main.textContent === 'SV') {
        main.textContent = 'SplitVerse';
    } else {
        main.textContent = 'SV';
    };
}
// Add an event listener for the 'mouseover' event
main.addEventListener('mouseover', handleMouseHover);

