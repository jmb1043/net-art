document.addEventListener('mousemove', function(e) {
    const body = document.body;
    body.classList.add('scanner-active');

    const truthElements = document.querySelectorAll('.truth');

    truthElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty('--x', x + 'px');
        el.style.setProperty('--y', y + 'px');
    });
});
