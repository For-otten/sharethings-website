import React from 'react';
import { useParams } from 'react-router-dom';
import { games } from "./games/gamesListPage";
import { arts } from "./arts/artList";
import { videos } from "./videos/videoListPage";
import { musics } from "./musics/musicListPage";
import './openedPage.css'
import Rating from '../stars';

const data = {
  game: games,
  video: videos,
  art: arts,
  music: musics
};

function OpenedPage() {
  const { type, id } = useParams();
  const item = data[type]?.find((item) => item.id.toString() === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="opened-page">
      <div className="mediaContainer">
        {type === 'video' && item.embedVideo ? (
          <iframe
            width="560"
            height="315"
            src={item.embedVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : type === 'music' ? (
          <div className="music-player">
            {item.audio && <audio src={item.audio} controls></audio>}
          </div>
        ) : (
          <img className="thumbnailOpened" src={item.image} alt={item.title} />
        )}
      </div>
      <div className="descriptions">
        <p className="title">{item.title}</p>
        {item.category && <p className="category">{item.category}</p>}
        {item.author && <p className="author">By: {item.author}</p>}
        {item.description && <p className="descriptionItem">{item.description}</p>}
      </div>
      <div className='commentSession'>
        {item.comments && item.comments.map((comment, index) => (
          <div className='commentary' key={index}>
            <div className='description'>
              <p>@{comment.user}</p>
              <Rating initialRating={comment.rating} readonly={true} />
            </div> 
            <div className='comment'> 
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenedPage;
