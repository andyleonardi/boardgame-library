import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game, games } from 'src/games';

@Component({
  selector: 'app-return-page',
  templateUrl: './return-page.component.html',
  styleUrls: ['./return-page.component.css'],
})
export class ReturnPageComponent implements OnInit, AfterViewInit {
  game: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = Number(routeParams.get('id'));

    this.game = games.find((game) => game.id === gameIdFromRoute);
  }

  ngAfterViewInit() {
    if (this.game?.type === 'Two Player') {
      const element = this.el.nativeElement.querySelector('#twoplayer');
      if (element) {
        this.renderer.addClass(element, 'activated');
      }
    } else if (this.game?.type === 'Abstract') {
      const element = this.el.nativeElement.querySelector('#abstract');
      if (element) {
        this.renderer.addClass(element, 'activated');
      }
    } else if (this.game?.type === 'Escape Games') {
      const element = this.el.nativeElement.querySelector('#escape');
      if (element) {
        this.renderer.addClass(element, 'activated');
      }
    } else if (this.game?.type === 'Light') {
      const element = this.el.nativeElement.querySelector('#light');
      if (element) {
        this.renderer.addClass(element, 'activated');
      }
    } else if (this.game?.type === 'Next Step') {
      const element = this.el.nativeElement.querySelector('#nextstep');
      if (element) {
        this.renderer.addClass(element, 'activated');
      }
    } else if (this.game?.type === 'Heavy') {
      const element = this.el.nativeElement.querySelector('#heavy');
      if (element) {
        this.renderer.addClass(element, 'activated');
      }
    } else if (this.game?.type === 'Co-op') {
      const element = this.el.nativeElement.querySelector('#coop');
      console.log("this is activated", this.game.type, "id", element);
      if (element) {
        this.renderer.addClass(element, 'activated');
      }
    } else if (this.game?.type === 'Party') {
      const element = this.el.nativeElement.querySelector('#party');
      console.log("this is activated partyayy");
      if (element) {
        this.renderer.addClass(element, 'activated');
      }
    } else if (this.game?.type === 'Small Games') {
      const element = this.el.nativeElement.querySelector('#smallgames');
      if (element) {
        this.renderer.addClass(element, 'activated');
      }
    }
  }
}
