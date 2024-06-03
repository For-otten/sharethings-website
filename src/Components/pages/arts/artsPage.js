import React from 'react';
import './artsPage.css';
import { Link } from 'react-router-dom'; 
import { arts } from './artList';

function ArtsPage({ searchTerm }) {
  const filteredArts = arts.filter(art =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ArtPage">
      {filteredArts.map(art => (
        <Link key={art.id} to={`/item/art/${art.id}`}>
          <div className="art-item-page">
            <div className="thumbnailContainer" id='thumbArt'>
              <img className="arts" src={art.image} alt={art.title} />
            </div>
            <div className="descriptionsPage">
              <p className="category">By: {art.author}</p>
              <p className="title">{art.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ArtsPage;
