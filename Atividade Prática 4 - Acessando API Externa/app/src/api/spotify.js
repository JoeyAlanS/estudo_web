const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export async function getAccessToken() {
  const auth = 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': auth,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
  });

  const data = await response.json();
  return data.access_token;
}


export async function searchTracksByArtist(artistName) {
  const token = await getAccessToken();  

  const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=track&limit=10`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,  
    },
  });

  const data = await response.json();
  return data.tracks.items;  
}
