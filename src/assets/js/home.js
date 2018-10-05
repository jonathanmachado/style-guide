const video = document.querySelector('.video');
const promise = video.play();
const juice = document.querySelector('.orange-juice');
const btn = document.getElementById('play-pause');

const togglePlayPause = () => {
  if (video.paused) {
    btn.className = 'pause';
    video.play();
  } else {
    btn.className = 'play';
    video.pause();
  }
};

btn.onclick = () => {
  togglePlayPause();
};

video.addEventListener('timeupdate', () => {
  // let juicePosition = video.currentTime / video.duration;
  let juicePosition = Math.floor((100 / video.duration) * video.currentTime);
  juice.style.width = juicePosition + '%';

  if (video.ended) {
    btn.className = 'play';
    juice.style.width = 0;
  }
});

video.addEventListener(
  'canplaythrough',
  () => {
    // Ready to play whole video?
    if (promise !== undefined) {
      promise
        .then(() => {
          // Autoplay started!
          $('.loading').hide();
        })
        .catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          togglePlayPause();
        });
    }
  },
  false
);
