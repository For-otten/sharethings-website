import React from "react";
import { useNavigate } from 'react-router-dom';
import "./homePage.css";
import { games } from "../games/gamesListPage";
import { arts } from "../arts/artList";
import { videos } from "../videos/videoListPage";
import { musics } from "../musics/musicListPage";
import videoLogo from "./lists/images/videos/play.png";
import gameLogo from "./lists/images/games/games.png";
import musicLogo from "./lists/images/musics/music1.png";
import artworkLogo from "./lists/images/arts/art.png";

function HomePage({ searchTerm }) {
  const navigate = useNavigate();


  const handleItemClick = (type, id) => {
    navigate(`/item/${type}/${id}`);
  };

  const filterItems = (items) => {
    if (!searchTerm) return items;
    
    return items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const limitedVideos = filterItems(videos).slice(0, 6);
  const limitedGames = filterItems(games).slice(0, 6);
  const limitedArts = filterItems(arts).slice(0, 6);
  const limitedMusics = filterItems(musics).slice(0, 6);

  return (
    <div className="container">
      {limitedVideos.length > 0 && (
        <div className="videos">
          <div className="contentTitle">
            <img src={videoLogo} className="contentTitleImage" alt="Videos" />
            <h1>Videos</h1>
          </div>
          {limitedVideos.map((video) => (
            <div key={video.id} className="video-item" onClick={() => handleItemClick('video', video.id)}>
              <div className="thumbnailContainer">
                <img className="thumbnail" src={video.image} alt={video.title} />
              </div>
              <div className="descriptions">
                <p className="category">{video.category}</p>
                <p className="title">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {limitedGames.length > 0 && (
        <div className="Games">
          <div className="contentTitle">
            <img src={gameLogo} className="contentTitleImage" alt="Games" />
            <h1>Games</h1>
          </div>
          {limitedGames.map((game) => (
            <div key={game.id} className="game-item" onClick={() => handleItemClick('game', game.id)}>
              <div className="thumbnailContainer">
                <img className="thumbnail" src={game.image} alt={game.title} />
              </div>
              <div className="descriptions">
                <p className="category">{game.category}</p>
                <p className="title">{game.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {limitedArts.length > 0 && (
        <div className="Art">
          <div className="contentTitle">
            <img src={artworkLogo} className="contentTitleImage" alt="Art" />
            <h1>Artwork</h1>
          </div>
          {limitedArts.map((art) => (
            <div key={art.id} className="art-item" onClick={() => handleItemClick('art', art.id)}>
              <div className="thumbnailContainer">
                <img className="thumbnail" src={art.image} alt={art.title} />
              </div>
              <div className="descriptions">
                <p className="category">By: {art.author}</p>
                <p className="title">{art.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {limitedMusics.length > 0 && (
        <div className="Music">
          <div className="contentTitle">
            <img src={musicLogo} className="contentTitleImage" alt="Music" />
            <h1>Music</h1>
          </div>
          {limitedMusics.map((music) => (
            <div key={music.id} className="music-item" onClick={() => handleItemClick('music', music.id)}>
              <div className="thumbnailContainer">
                <img className="thumbnail" src={music.image} alt={music.title} />
              </div>
              <div className="descriptions">
                <p className="category">{music.category}</p>
                <p className="title">{music.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
