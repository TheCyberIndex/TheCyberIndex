// main.js for Dropdown Menu Functionality
function toggleDropdownMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("open");
}

// Close the dropdown if clicked outside of it
document.addEventListener("click", function(event) {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("open");
    }
});