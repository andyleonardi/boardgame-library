import { Component } from '@angular/core';

import { games } from 'src/games';
import { GamesFilterService } from '../services/games-filter.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  games = [...games];
  gamesTypes = Array.from(new Set(games.map((g) => g.type)));

  constructor(
    private gamesFilterService: GamesFilterService
  ) {}

  filterGames(type: string) {
    this.gamesFilterService.filterGames(type);
  }
}
