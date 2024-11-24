import { Component } from '@angular/core';
import { CategoriesComponent } from "../home/categories/categories.component";
import { PopularCoursesComponent } from "../home/popular-courses/popular-courses.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule, CategoriesComponent, PopularCoursesComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
