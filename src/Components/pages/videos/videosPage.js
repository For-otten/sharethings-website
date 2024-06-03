import React from 'react';
import './videosPage.css';
import { Link } from 'react-router-dom'; // Importe Link
import { videos } from './videoListPage';

function groupVideosByCategory(videos) {
  return videos.reduce((grouped, video) => {
    const { category } = video;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(video);
    return grouped;
  }, {});
}

function VideoPage({ searchTerm }) {
  const groupedVideos = groupVideosByCategory(videos);

  const filteredGroupedVideos = Object.keys(groupedVideos).reduce((acc, category) => {
    const filteredVideos = groupedVideos[category].filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredVideos.length > 0) {
      acc[category] = filteredVideos;
    }
    return acc;
  }, {});

  return (
    <div className="videosPage">
      {Object.entries(filteredGroupedVideos).map(([category, videos]) => (
        <div key={category} className="video-category">
          <h2>{category}</h2>
          <div className="video-row">
            {videos.map(video => (
              <Link to={`/item/video/${video.id}`}>
              <div key={video.id} className="video-item-page">
                
                  <div className="thumbnailContainer">
                    <img className="thumbnail" id='videoPage' src={video.image} alt={video.title} />
                  </div>
                  <div className="descriptions">
                    <p className="title">{video.title}</p>
                  </div>
                
              </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoPage;
