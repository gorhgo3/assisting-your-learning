import { YoutubeTranscript } from 'youtube-transcript'


/**
 * Fetches the transcript of a YouTube video based on the provided URL.
 * @param {string} url - The URL of the YouTube video.
 * @returns {Promise<string>} - A promise that resolves to the transcript of the video.
 */
export async function checkVideo(url:string) {
  const ENDPOINT = url;
  try {
    const data = await YoutubeTranscript.fetchTranscript(ENDPOINT);
    return data;
  } catch (err) {
    console.log('Transcript may be disabled for this video', err);
  }
}