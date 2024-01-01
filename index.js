const main = document.getElementById("mainheading")
main.textContent = "Golden 888 Shop"
function handleMouseHover() {
    if (main.textContent === 'G8^3') {
        main.textContent = 'Golden 888 Shop';
    } else {
        main.textContent = 'G8^3';
    };
}
// Add an event listener for the 'mouseover' event
main.addEventListener('mouseover', handleMouseHover);
