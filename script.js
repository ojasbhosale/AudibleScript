let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the height of the fixed navbar

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight - navbarHeight, // Offset the scroll position by navbar height
            behavior: 'smooth'
        });
    });
});
