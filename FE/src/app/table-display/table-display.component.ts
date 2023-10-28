import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// import { games } from 'src/games';
import { GamesFilterService } from '../services/public/games-filter.service';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css'],
})
export class TableDisplayComponent implements OnInit {
  @Input() selectedType: string = '';

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
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

  constructor(private gamesFilterService: GamesFilterService) {}

  

  ngOnInit() {
    // this.games.filter = this.selectedType;
    this.gamesFilterService.getGames().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.data.games);
      this.dataSource.paginator = this.paginator;
      // console.log('response', res.data.games);
      // console.log('data', this.dataSource);
    });
    
  }
  
  // games = new MatTableDataSource(
  //   this.data
  //   // this.data.filter((game: any) => game.status !== 'Removed')
  // );

  // ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator;
  // }

  applyTypeFilter(event: any) {
    this.dataSource.filter = this.selectedType;
  }
}
