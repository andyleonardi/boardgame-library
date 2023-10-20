import { Component, AfterViewInit, ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';

// import { games } from 'src/games';
import { GamesFilterService } from '../services/games-filter.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent /*implements AfterViewInit*/ {
  gamesType = this.gamesFilterService.getGameType();
  // displayedColumns: string[] = ['thumbnail', 'game'];
  // games = new MatTableDataSource(
  //   games.filter(
  //     (game) => game.status !== 'Removed'&& this.gamesType ? game.type === this.gamesType : game.type !== this.gamesType
  //   )
  // );

  constructor(private gamesFilterService: GamesFilterService) {}

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.games.paginator = this.paginator;
  // }
}
