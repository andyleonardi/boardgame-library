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
import { MatCardModule } from '@angular/material/card';

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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { CheckoutStatsComponent } from './checkout-stats/checkout-stats.component';

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
    AdminLoginComponent,
    AdminSettingsComponent,
    CheckoutStatsComponent,
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
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'games', component: GamesListComponent },
      { path: 'games/:id', component: GamePageComponent },
      { path: 'form/:formType', component: FormPageComponent },
      { path: 'borrowed/:id', component: BorrowPageComponent },
      { path: 'returned/:id', component: ReturnPageComponent },
      // Admin paths
      { path: 'admin/login', component: AdminLoginComponent },
      { path: 'admin/settings', component: AdminSettingsComponent },
      { path: 'admin/stats', component: CheckoutStatsComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
