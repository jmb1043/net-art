document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;
    const title = document.getElementById('title');
    const flower = document.getElementById('flower');

    document.addEventListener('dblclick', function() {
        
        if (body.classList.contains('zen-mode')) {
            body.classList.remove('zen-mode');
            body.classList.add('glitch-mode');
            
            title.textContent = "FATAL_ERROR: SYSTEM_OVERLOAD";
            flower.textContent = "010110";
        } else {
            body.classList.remove('glitch-mode');
            body.classList.add('zen-mode');
            
            title.textContent = "Breathe In.";
            subtext.textContent = "Double-click to find peace.";
            flower.textContent = "●";
        }
    });
});