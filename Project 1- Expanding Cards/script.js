const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('panel')) {
        removeActiveClasses();
        e.target.classList.add('active');
    }
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}