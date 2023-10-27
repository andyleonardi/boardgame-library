import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { Game, games } from 'src/games';
import { GamesFilterService } from '../services/public/games-filter.service';

@Component({
  selector: 'app-borrow-page',
  templateUrl: './borrow-page.component.html',
  styleUrls: ['./borrow-page.component.css'],
})
export class BorrowPageComponent implements OnInit {
  game: Game | undefined;
  games = [...games];
  users: string[] | undefined = [];
  recList: any[] | undefined = [];
  displayedColumns: string[] = ['thumbnail', 'game'];
  dataSource: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesFilterService: GamesFilterService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = Number(routeParams.get('id'));

    this.game = games.find((game) => game.id === gameIdFromRoute);
    this.users = this.game?.checkouts.map((c) => c.ldap);

    // find users who borrowed this game [array of users]
    // for each user, find games they've borrowed / played previously
    // store them in an array
    // aggregate this array into [name, type, checkout_count]
    // display top 5 games

    const gamesList = this.users?.map((user) => {
      const filteredGames = games.filter((game) =>
        game.checkouts.some((c) => c.ldap === user)
        &&
        game.status !== 'Removed'
      );
      return filteredGames;
    });
    const unique = new Set();
    gamesList?.flat().map((game) => {
      unique.add(game);
    });
    const uniqueGames: any[] = [...unique];
    const recListFull = uniqueGames.map((obj) => {
      return {
        id: obj.id,
        name: obj.name,
        imgThumb: obj.imgThumb,
        count: obj.checkouts.length,
      };
    });
    this.recList = recListFull.sort((a, b) => b.count - a.count).slice(0, 5);
    this.dataSource = this.recList;
  }
}
