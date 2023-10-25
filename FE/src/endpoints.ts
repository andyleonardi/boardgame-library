const BACKEND_URL: string = 'http://localhost:8080';

export const userEndpoints = {
  login: (): string => `${BACKEND_URL}/sggamescafe/api/users/login`,
  editPwd: (ldap: string): string =>
    `${BACKEND_URL}/sggamescafe/api/users/${ldap}`,
};

export const gameEndpoints = {
  addNewGame: (): string => `${BACKEND_URL}/sggamescafe/api/games/new`,
  getAllGames: (): string => `${BACKEND_URL}/sggamescafe/api/games`,
  getOneGame: (id: string): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}`,
  editStatType: (id: string): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}`,
  deleteGame: (id: string): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}`,
  addCheckout: (id: string): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}/check`,
  addReturn: (id: string): string =>
    `${BACKEND_URL}/sggamescafe/api/games/${id}/return`,
};
