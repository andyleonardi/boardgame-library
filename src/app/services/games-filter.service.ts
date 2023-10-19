import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GamesFilterService {
  gamesType: string = "";
  gameId: number = 0;

  constructor() { }

  filterGames(type: string) {
    this.gamesType = type;
  }

  getGameType() {
    return this.gamesType;
  }

  storeGameId(id: number) {
    this.gameId = id;
  }

  getGameId() {
    return this.gameId;
  }
}
