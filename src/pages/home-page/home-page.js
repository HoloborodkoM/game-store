import React from 'react';
import './home-page.css';
import { GameItem } from '../../components/game-item';
import { GAMES } from '../../components/game-list'

export const HomePage = () => {
   return (
      <div className="home-page">
         { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
      </div>
   )
} 