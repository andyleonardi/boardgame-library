import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { gameEndpoints } from 'src/endpoints';

@Injectable({
  providedIn: 'root',
})
export class GamesFilterService {
  gamesType: string = '';
  gameId: number = 0;

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get(gameEndpoints.getAllGames());
  }

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
