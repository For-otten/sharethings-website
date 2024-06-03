import React from 'react';
import './gamesPage.css';
import { Link } from 'react-router-dom'; // Importe Link
import { games } from './gamesListPage';

function groupGamesByCategory(games) {
  return games.reduce((grouped, game) => {
    const { category } = game;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(game);
    return grouped;
  }, {});
}

function GamesPage({ searchTerm }) {
  const groupedGames = groupGamesByCategory(games);

  const filteredGroupedGames = Object.keys(groupedGames).reduce((acc, category) => {
    const filteredGames = groupedGames[category].filter(game =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredGames.length > 0) {
      acc[category] = filteredGames;
    }
    return acc;
  }, {});

  return (
    <div className="GamesPage">
      {Object.entries(filteredGroupedGames).map(([category, games]) => (
        <div key={category} className="game-category">
          <h2>{category}</h2>
          <div className="game-row">
            {games.map(game => (
              <Link to={`/item/game/${game.id}`} key={game.id}>
                <div className="game-item-page">
                  <div className="thumbnailContainer">
                    <img className="thumbnail" id='thumbGames' src={game.image} alt={game.title} />
                  </div>
                  <div className="descriptions" id='descriptionsGame'>
                    <p className="title">{game.title}</p>
                    <p className="category">{game.category}</p>
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

export default GamesPage;
