document.addEventListener('mousemove', function(e) {
    const truthLayer = document.getElementById('truth-layer');

    truthLayer.style.setProperty('--x', e.clientX + 'px');
    truthLayer.style.setProperty('--y', e.clientY + 'px');
});

console.log("Forensic Interface: System Online.");
