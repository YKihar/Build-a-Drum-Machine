document.addEventListener('DOMContentLoaded', () => {
    const drumPads = document.querySelectorAll('.drum-pad');
    const display = document.getElementById('display');

    drumPads.forEach(pad => {
        const audio = pad.querySelector('audio');
        const key = pad.id;

        pad.addEventListener('click', () => {
            playSound(audio, key);
        });

        document.addEventListener('keydown', (event) => {
            if (event.key.toUpperCase() === key) {
                playSound(audio, key);
            }
        });
    });

    function playSound(audio, key) {
        audio.currentTime = 0;
        audio.play();
        const soundName = document.getElementById(key).getAttribute('data-sound');
        display.textContent = soundName;
    }
});
