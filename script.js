const btn = document.querySelector("button")
btn.addEventListener('click', () => {
    const audio = new Audio();
    audio.src = "1.mp3"
    audio.play();
})