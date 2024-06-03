import React from 'react';
import './musicsPage.css';
import { Link } from 'react-router-dom';
import { musics } from './musicListPage';

function groupMusicsByCategory(musics) {
  return musics.reduce((grouped, music) => {
    const { category } = music;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(music);
    return grouped;
  }, {});
}

function MusicPage({ searchTerm }) {
  const groupedMusics = groupMusicsByCategory(musics);

  // Função para filtrar as músicas com base no termo de pesquisa
  const filteredMusics = Object.keys(groupedMusics).reduce((acc, category) => {
    const filteredCategory = groupedMusics[category].filter(music =>
      music.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      music.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredCategory.length > 0) {
      acc[category] = filteredCategory;
    }
    return acc;
  }, {});

  return (
    <div className="MusicPage">
      {Object.entries(filteredMusics).map(([category, musics]) => (
        <div key={category} className="music-category">
          <h2>{category}</h2>
          <div className="music-row">
            {musics.map(music => (
              <div key={music.id} className="music-item-page">
                <div className="thumbnailContainerMusicPage">
                  <img className="thumbnail" id='thumbMusic' src={music.image} alt={music.title} />
                </div>
                <div className="descriptionsMusicPage">
                  <p className="title">{music.title}</p>
                  <p className="category">{music.category}</p>
                </div>
                <div className='contentMusicPage'>
                  <audio src={music.audio} controls controlsList="nodownload nofullscreen noplaybackrate" disableRemotePlayback></audio>
                  <Link to={`/item/music/${music.id}`}>
                    <p>See more</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MusicPage;
