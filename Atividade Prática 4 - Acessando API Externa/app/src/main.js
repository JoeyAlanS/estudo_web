import { searchTracksByArtist } from './api/spotify';

async function displayTracks(artistName) {
  const tracks = await searchTracksByArtist(artistName);  

  const trackList = document.getElementById('track-list');
  trackList.innerHTML = '';  

  if (tracks.length === 0) {
    const noResults = document.createElement('li');
    noResults.textContent = 'Nenhuma música encontrada para esse artista.';
    trackList.appendChild(noResults);
    return;
  }

  tracks.forEach((track) => {
    const li = document.createElement('li');
    li.textContent = `${track.name} by ${track.artists.map(artist => artist.name).join(', ')}`;
    trackList.appendChild(li);
  });
}

function handleSearch(event) {
  event.preventDefault(); 

  const artistName = document.getElementById('artist-input').value;  
  if (artistName) {
    displayTracks(artistName);  
  }
}

document.getElementById('search-form').addEventListener('submit', handleSearch);
