document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.add('highlight');
        setTimeout(() => box.classList.remove('highlight'), 500);
    });
});
