import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ProfessionalGoalsComponent } from './professional-goals/professional-goals.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { FaqComponent } from './faq/faq.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProfessionalGoalsComponent,
    AboutUsComponent,
    CategoriesComponent,
    FaqComponent,
    PopularCoursesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
