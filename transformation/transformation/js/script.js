document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;

    document.addEventListener('mousedown', function() {
        body.classList.remove('legal-mode');
        body.classList.add('honest-mode');
    });

    document.addEventListener('mouseup', function() {
        body.classList.remove('honest-mode');
        body.classList.add('legal-mode');
    });

    document.addEventListener('mouseleave', function() {
        body.classList.remove('honest-mode');
        body.classList.add('legal-mode');
    });
});