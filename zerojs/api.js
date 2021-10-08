const API_URL = 'https://maadhav-ytdl.herokuapp.com';
const videoURL = 'https://www.youtube.com/watch?v=Hkg_j7Hvldg';

async function getVideoUrl(videoURL) {
  try{
    const res = await fetch('https://yt-mp4.vitoorfranca.repl.co/download',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        yt_url: videoURL,
      })
    });

    res.ok
    ? new Error('Error')
    : null;

    const { video_url } = await res.json();
    return video_url
  } catch(error) {
    console.log(error);
  }
};