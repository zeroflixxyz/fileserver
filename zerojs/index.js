const form = document.querySelector('form');
const btnDownload = document.getElementById('btn-download');
const inputURL = document.getElementById('input-video-url');
const videoElement = document.querySelector('section#section-video-player video');
const dtnDownload = document.querySelector('section#section-video-player a');

async function videoDownload(videoURL) {
  try {
    const videoUrl = await getVideoUrl(videoURL);
    loadVideo(videoUrl);
  } catch (error) {
    console.log(error);
  };
};

function loadVideo(videoURL) {
  videoElement.setAttribute('src', videoURL);
  
  videoElement.addEventListener('loadedmetadata', () => {
    videoElement.style.display = 'block';
    videoElement.style.width = videoElement.videoWidth;
    videoElement.style.height = videoElement.videoHeight;

    dtnDownload.setAttribute('href', videoURL);

    videoElement.play();
  });
};

btnDownload.addEventListener('click', async event => {
  event.preventDefault();
  const videoURL = inputURL.value;
  if (!videoURL) return error('Please enter a valid URL');

  videoDownload(videoURL)
    .then(_ => console.log('Success'))
    .catch(error => {
      console.log('Error: ', error);
      error('Something went wrong');
    });
});