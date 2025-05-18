document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const floatingIconsContainer = document.querySelector('.floating-icons');
    const iconSources = [
        'images/icons/book-icon-png.png', // Replace with actual paths
        'images/icons/guitar-icon-png.png',
        'images/icons/tech-icon-png.png'
    ];
    const numberOfIcons = 10; // Adjust the number of icons
    const containerWidth = 100; // Container width percentage
    const containerHeight = 100; // Container height percentage
    const gridRows = 10; // Number of rows
    const gridCols = 10; // Number of columns
    const cellWidth = containerWidth / gridCols;
    const cellHeight = containerHeight / gridRows;

    const usedCells = new Set(); // Track used cells to avoid overlaps

    const random = (min, max) => Math.random() * (max - min) + min;

    for (let i = 0; i < numberOfIcons; i++) {
        let cell;
        do {
            const row = Math.floor(random(0, gridRows));
            const col = Math.floor(random(0, gridCols));
            cell = `${row}-${col}`;
        } while (usedCells.has(cell));
        usedCells.add(cell);

        const top = random(cellHeight * (parseInt(cell.split('-')[0])), cellHeight * (parseInt(cell.split('-')[0]) + 1));
        const left = random(cellWidth * (parseInt(cell.split('-')[1])), cellWidth * (parseInt(cell.split('-')[1]) + 1));

        const icon = document.createElement('img');
        icon.src = iconSources[Math.floor(Math.random() * iconSources.length)];
        icon.style.top = `${top}%`;
        icon.style.left = `${left}%`;
        icon.style.animationDuration = `${random(5, 15)}s`;
        icon.style.setProperty('--dx', `${random(-50, 50)}px`);
        icon.style.setProperty('--dy', `${random(-50, 50)}px`);
        floatingIconsContainer.appendChild(icon);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });

    observer.observe(aboutSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });

    testimonialCards.forEach(card => observer.observe(card));
});


document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.sponsors-carousel');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -200, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 200, behavior: 'smooth' });
    });
});
