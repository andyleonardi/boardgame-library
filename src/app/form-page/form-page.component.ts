import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Game, games } from 'src/games';
import { GamesFilterService } from '../services/games-filter.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  formType: string | null = '';
  gameId = this.gamesFilterService.getGameId();

  formInputs = this.formBuilder.group({
    username: '',
    borrowAck: false,
    damageAck: false,
    returnAck: false,
    checkoutType: '',
    checkDate: new Date().toISOString().split('T')[0],
    recommended: null,
  }, Validators.required);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private gamesFilterService: GamesFilterService
  ) {}

  onSubmit(): void {
    this.formInputs.value.checkoutType = this.formType;

    if(this.formInputs.valid) {
      console.log(this.formInputs.value);
      console.log(this.gameId);
      // TODO: on submit, fetch PUT endpoints to push form inputs to checkouts in the database
      if(this.formType === 'play') {
        this.router.navigate(['/']);
      } else if (this.formType === 'borrow') {
        this.router.navigate(['/borrowed/',this.gameId]);
      } else {
        this.router.navigate(['/returned/',this.gameId]);
      }
    } else {
      alert("Please input all required fields");
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const formTypeFromRoute = routeParams.get('formType');

    this.formType = formTypeFromRoute;
  }
}
