const rainContainer = document.querySelector('.rain');
const numDropsInput = document.getElementById('raindropRange');
const audio = document.getElementById('backgroundMusic');
const raindropSound = document.getElementById('raindropSound');
let isPlaying = false;
let nightMode = false;

function createRaindrops(numDrops) {
    rainContainer.innerHTML = '';
    for (let i = 0; i < numDrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        
        const colorClass = getRandomColorClass();
        raindrop.classList.add(colorClass);
        
        raindrop.style.left = `${Math.random() * 100}vw`;
        raindrop.style.animationDuration = `${Math.random() * 2 + 0.5}s`; // Random speed
        raindrop.style.opacity = `${Math.random() + 0.1}`; // Random opacity
        raindrop.style.height = `${Math.random() * 40 + 20}px`; // Random height
        raindrop.style.width = `${Math.random() * 2 + 1}px`; // Random width
        rainContainer.appendChild(raindrop);

        raindrop.addEventListener('animationend', resetRaindrop);
        raindrop.addEventListener('click', () => {
            raindrop.classList.add('splash');
            raindropSound.currentTime = 0;  // Reset sound to start
            raindropSound.play();
            setTimeout(() => resetRaindrop(raindrop), 300);
        });
    }
}

function getRandomColorClass() {
    const colors = ['raindrop-blue', 'raindrop-green', 'raindrop-yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}

function toggleNightMode() {
    nightMode = !nightMode;
    if (nightMode) {
        rainContainer.classList.add('night-mode');
    } else {
        rainContainer.classList.remove('night-mode');
    }
}

function resetRaindrop(raindrop) {
    raindrop.classList.remove('splash');
    raindrop.style.bottom = '100%';
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 0.5}s`; // Random speed
    raindrop.style.opacity = `${Math.random() + 0.1}`; // Random opacity
    raindrop.style.height = `${Math.random() * 40 + 20}px`; // Random height
    raindrop.style.width = `${Math.random() * 2 + 1}px`; // Random width
    raindrop.style.animationName = 'fall';
}

numDropsInput.addEventListener('input', (e) => {
    const numDrops = e.target.value;
    createRaindrops(numDrops);
});

// Initial load
createRaindrops(numDropsInput.value);