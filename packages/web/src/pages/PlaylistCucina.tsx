import React, { useState } from 'react';

const PlaylistCucina: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const playlists = [
    {
      id: 1,
      nome: 'Tarantella in Cucina',
      regione: 'Campania',
      brani: 24,
      durata: '1h 42min',
      cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
      descrizione: 'Musica tradizionale napoletana per cucinare con allegria'
    },
    {
      id: 2,
      nome: 'Sicilian Vibes',
      regione: 'Sicilia',
      brani: 18,
      durata: '1h 15min',
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
      descrizione: 'Dalla pizzica al folk siciliano'
    },
    {
      id: 3,
      nome: 'Cucina Toscana Classica',
      regione: 'Toscana',
      brani: 31,
      durata: '2h 8min',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      descrizione: 'Opera e musica classica italiana'
    }
  ];

  const tracksInEvidenza = [
    { titolo: 'O Sole Mio', artista: 'Luciano Pavarotti', durata: '3:24', regione: 'Campania' },
    { titolo: 'Volare', artista: 'Domenico Modugno', durata: '3:32', regione: 'Puglia' },
    { titolo: 'Bella Ciao', artista: 'Modena City Ramblers', durata: '4:12', regione: 'Emilia-Romagna' },
    { titolo: 'La Pasta', artista: 'Renato Carosone', durata: '2:48', regione: 'Campania' }
  ];

  const podcasts = [
    { nome: 'Storie di Cucina Italiana', episodi: 47, cover: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200' },
    { nome: 'Il Gusto della Storia', episodi: 32, cover: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200' },
    { nome: 'Sapori & Territori', episodi: 28, cover: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200' }
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        marginBottom: '40px',
        boxShadow: '0 10px 30px rgba(233, 30, 99, 0.3)'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🎵 Playlist Cucina Regionale</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '800px' }}>
          Musica tradizionale italiana per ogni regione. Cucina con la colonna sonora perfetta.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>🎼 Playlist Regionali</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {playlists.map((playlist) => (
              <div key={playlist.id} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: '25px',
                cursor: 'pointer'
              }}>
                <img src={playlist.cover} alt={playlist.nome} style={{
                  width: '180px',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }} />
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: '#e91e63',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    marginBottom: '10px'
                  }}>
                    {playlist.regione}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{playlist.nome}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '15px' }}>
                    {playlist.descrizione}
                  </p>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '15px', fontSize: '0.9rem', color: '#666' }}>
                    <span>🎵 {playlist.brani} brani</span>
                    <span>⏱️ {playlist.durata}</span>
                  </div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      background: '#e91e63',
                      color: 'white',
                      border: 'none',
                      padding: '12px 30px',
                      borderRadius: '25px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                  >
                    {isPlaying ? '⏸️ Pausa' : '▶️ Play'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>🔥 Brani in Evidenza</h2>
            <div style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'grid', gap: '15px' }}>
                {tracksInEvidenza.map((track, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '15px',
                      background: currentTrack === idx ? '#FFF0F5' : 'transparent',
                      borderRadius: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      borderLeft: currentTrack === idx ? '4px solid #e91e63' : '4px solid transparent'
                    }}
                    onClick={() => setCurrentTrack(idx)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: currentTrack === idx ? '#e91e63' : '#F8F9FA',
                        color: currentTrack === idx ? 'white' : '#212529',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700
                      }}>
                        {currentTrack === idx ? '▶️' : idx + 1}
                      </div>
                      <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '3px' }}>
                          {track.titolo}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>
                          {track.artista} • {track.regione}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                      {track.durata}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>🎧 Player</h3>
            {isPlaying ? (
              <div>
                <img
                  src={playlists[0].cover}
                  alt="Now Playing"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '15px'
                  }}
                />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>
                  {tracksInEvidenza[currentTrack].titolo}
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '15px' }}>
                  {tracksInEvidenza[currentTrack].artista}
                </p>
                <div style={{ width: '100%', height: '6px', background: '#E9ECEF', borderRadius: '3px', marginBottom: '15px' }}>
                  <div style={{ width: '45%', height: '100%', background: '#e91e63', borderRadius: '3px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <button style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '2rem',
                    cursor: 'pointer'
                  }}>
                    ⏮️
                  </button>
                  <button style={{
                    background: '#e91e63',
                    color: 'white',
                    border: 'none',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                  }}>
                    ⏸️
                  </button>
                  <button style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '2rem',
                    cursor: 'pointer'
                  }}>
                    ⏭️
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 20px', background: '#F8F9FA', borderRadius: '12px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '15px' }}>🎵</div>
                <p style={{ color: '#999' }}>Seleziona una playlist per iniziare</p>
              </div>
            )}
          </div>

          <div style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>🎙️ Podcast</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              {podcasts.map((podcast, idx) => (
                <div key={idx} style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  gap: '12px',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}>
                  <img src={podcast.cover} alt={podcast.nome} style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }} />
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '3px' }}>
                      {podcast.nome}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>
                      {podcast.episodi} episodi
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCucina;
