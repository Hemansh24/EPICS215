const dropdownButton = document.getElementById('contributors-dropdown-button');
const dropdownMenu = document.getElementById('contributors-dropdown');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});