// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';

// Components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamePageComponent } from './game-page/game-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { ReturnPageComponent } from './return-page/return-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    GamesListComponent,
    GamePageComponent,
    FormPageComponent,
    BorrowPageComponent,
    ReturnPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'games', component: GamesListComponent },
      { path: 'games/:id', component: GamePageComponent },
      { path: 'form/:formType', component: FormPageComponent },
      { path: 'borrowed/:id', component: BorrowPageComponent },
      { path: 'returned/:id', component: ReturnPageComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
