/**
 * MADADENI & NPH HOSPITAL DIGITAL ROSTER - CORE LOGIC
 */

// 1. THEME MANAGEMENT (Dark/Light Mode)
function toggleDarkMode() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('hospital-theme', newTheme);
    updateToggleIcon(newTheme);
}

function updateToggleIcon(theme) {
    const icon = document.querySelector('#darkModeToggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// 2. SEARCH FILTER (Index Page)
function filterDepts() {
    const input = document.getElementById('deptSearch');
    if (!input) return; // Exit if not on the index page
    
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('dept-card');
    
    Array.from(cards).forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(filter) ? "flex" : "none";
    });
}

// 3. ROSTER HIGHLIGHTING (Department Pages)
function highlightCurrentDay() {
    const today = new Date().getDate().toString();
    const table = document.getElementById('roster-table');
    if (!table) return; // Exit if not on a roster page

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const dateCell = row.cells[0].textContent.trim();
        
        // Match current day (ignoring "Prev. Month" tags)
        if (dateCell === today) {
            row.classList.add('highlight-today');
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// 4. INITIALIZATION (Runs on every page load)
window.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    const savedTheme = localStorage.getItem('hospital-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);

    // Run roster highlighting
    highlightCurrentDay();
});