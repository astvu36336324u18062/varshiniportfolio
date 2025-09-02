document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll('section, header, footer');
    sections.forEach(function (section) {
        section.classList.add('visible');
    });
});
