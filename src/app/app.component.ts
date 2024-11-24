import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var WOW: any;
declare var $: any;  // Declare jQuery globally for TypeScript

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ApanaTime_E-Learning';

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize WOW.js if it's available
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    } else {
      console.error("WOW.js is not defined");
    }

    // Subscribe to Router events to re-initialize the carousel on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.initializeOwlCarousel();
    });
  }

  ngAfterViewInit() {
    // Initialize the Owl Carousel after the view has been initialized
    this.initializeOwlCarousel();
  }

  initializeOwlCarousel() {
    // Delay to ensure the DOM is fully rendered and ready for Owl Carousel initialization
    setTimeout(() => {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
      });
    }, 100);  // Delay in milliseconds to make sure DOM is ready
  }
}
