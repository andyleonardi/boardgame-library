import { Component, Input, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { games } from 'src/games';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css'],
})
export class TableDisplayComponent {
  @Input() selectedType: string = '';

  types: Type[] = [
    { value: 'Two Player', viewValue: '2-Player' },
    { value: 'Light', viewValue: 'Light' },
    { value: 'Next Step', viewValue: 'Next Step' },
    { value: 'Heavy', viewValue: 'Heavy' },
    { value: 'Abstract', viewValue: 'Abstract' },
    { value: 'Escape Games', viewValue: 'Escape Room Games' },
    { value: 'Co-op', viewValue: 'Co-op' },
    { value: 'Party', viewValue: 'Party' },
    { value: 'Small Games', viewValue: 'Small Games' },
  ];

  displayedColumns: string[] = ['thumbnail', 'game'];
  games = new MatTableDataSource(
    games.filter((game) => game.status !== 'Removed')
  );

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit() {
    this.games.filter = this.selectedType;
  }

  ngAfterViewInit() {
    this.games.paginator = this.paginator;
  }

  applyTypeFilter(event: any) {
    this.games.filter = this.selectedType;
  }
}
