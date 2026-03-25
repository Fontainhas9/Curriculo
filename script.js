// Theme management with performance optimizations
(function() {
    'use strict';
    
    // Cache DOM elements
    const btn = document.getElementById("toggle-theme");
    if (!btn) return;
    
    // Initialize theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark");
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
    
    // Theme toggle with debounce to prevent rapid clicks
    let isToggling = false;
    btn.addEventListener("click", () => {
        if (isToggling) return;
        isToggling = true;
        
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        btn.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
        
        setTimeout(() => {
            isToggling = false;
        }, 100);
    });
    
    // Optional: Add loading="lazy" to all images
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
    
    // Optional: Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();