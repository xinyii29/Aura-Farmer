function selectLanguage(language) {
    const sounds = {
        'Mandarin':  'mandarin.mp3',
        'Malay':     'malay.mp3',
        'Cantonese': 'cantonese.mp3',
        'Russian':   'russian.mp3'
    };

    const pages = {
        'Mandarin':  'mandarin.html',
        'Malay':     'malay.html',
        'Cantonese': 'cantonese.html',
        'Russian':   'russian.html'
    };

    const audio = new Audio(sounds[language]);
    audio.play();

    audio.onended = function() {
        window.location.href = pages[language];
    };
}