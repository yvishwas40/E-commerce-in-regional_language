let gird, lis, ul, mic, search, li;

gird = document.querySelector('.gird');
lis = document.querySelector('.list');
ul = document.querySelector('ul');
mic = document.getElementById('voice-search');
search = document.querySelector('input');
li = document.getElementsByTagName('li');

// Switch between grid and list views
lis.onclick = e => {
    ul.classList.add('list-display');
    lis.classList.add('active');
    gird.classList.remove('active');
};
gird.onclick = () => {
    ul.classList.remove('list-display');
    lis.classList.remove('active');
    gird.classList.add('active');
};

// Search functionality
search.onkeyup = () => {
    const x = search.value.toLowerCase();
    showItem(x);
};

function showItem(x) {
    for (let list of li) {
        let product = list.querySelector('.detail h2').innerText; // Changed to use querySelector for better selection
        let name = product.toLowerCase();
        if (name.includes(x)) {
            list.style.display = "";
        } else {
            list.style.display = "none";
        }
    }
}

// Voice search
mic.onclick = () => {
    mic.classList.add('record');
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)(); // Added support for different browser implementations
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = (e) => {
        const m = search.value = e.results[0][0].transcript;
        showItem(m);
        mic.classList.remove('record');
    };
};
