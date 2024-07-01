const rainContainer = document.querySelector('.rain');
const numDrops = 100; // Number of raindrops

for (let i = 0; i < numDrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 0.5}s`; // Random speed
    raindrop.style.opacity = `${Math.random() + 0.1}`; // Random opacity
    rainContainer.appendChild(raindrop);
}
