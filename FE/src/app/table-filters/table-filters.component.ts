import { Component } from '@angular/core';

import { games } from 'src/games';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.css']
})
export class TableFiltersComponent {
  panelOpenState = false;
  selectedType: string = '';

  types: Type[] = [
    { value: 'Two Player', viewValue: '2-Player' },
    { value: 'Light', viewValue: 'Light' },
    { value: 'Next Step', viewValue: 'Next Step' },
    { value: 'Heavy', viewValue: 'Heavy' },
    { value: 'Abstract', viewValue: 'Abstract' },
    { value: 'Escape Games', viewValue: 'Escape Room' },
    { value: 'Co-op', viewValue: 'Co-op' },
    { value: 'Party', viewValue: 'Party' },
    { value: 'Small Games', viewValue: 'Small Games' },
  ];

  applyTypeFilter(event: any) {
    // this.games.filter = this.selectedType;
    console.log(this.selectedType);
  }
}
