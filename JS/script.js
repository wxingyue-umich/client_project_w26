document.getElementById("year").innerHTML = new Date().getFullYear();

document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.data, .library, .ux');
        card.classList.toggle('show-back');

        const isOpen = card.classList.contains('show-back');
        btn.textContent = isOpen ? 'Back to overview' : 'Click to view course info';
    });
});
