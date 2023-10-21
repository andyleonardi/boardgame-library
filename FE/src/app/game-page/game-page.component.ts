import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Game, games } from 'src/games';
import { GamesFilterService } from '../services/games-filter.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
})
export class GamePageComponent implements OnInit {
  game: Game | undefined;
  gameId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesFilterService: GamesFilterService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = Number(routeParams.get('id'));
    this.gameId = gameIdFromRoute;
    this.game = games.find((game) => game.id === gameIdFromRoute);
  }

  onClick(checkType: string) {
    this.gamesFilterService.storeGameId(this.gameId);
    this.router.navigate(['/form/', checkType]);
  }
}
