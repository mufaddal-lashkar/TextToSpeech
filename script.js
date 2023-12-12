let button = document.querySelector('.speak-btn');
let text = document.querySelector('.text-area');

button.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(text.value)
    console.log(utterance)
    speechSynthesis.speak(utterance)
})