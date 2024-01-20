document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlist');

    playlist.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const songSrc = event.target.getAttribute('data-src');
            audioPlayer.src = songSrc;
            audioPlayer.play();
        }
    });
});
