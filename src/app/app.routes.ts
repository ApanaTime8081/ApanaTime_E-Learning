import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { CoursesComponent } from './Component/courses/courses.component';
import { TeamComponent } from './Component/team/team.component';
import { ContactComponent } from './Component/contact/contact.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { InstructerComponent } from './Component/instructer/instructer.component';
import { EnrollcourseComponent } from './Component/enrollcourse/enrollcourse.component';
import { TestimonialComponent } from './Component/testnominal/testimonial.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'about',component: AboutComponent},
  { path:'course',component: CoursesComponent},
  { path:'team',component: TeamComponent},
  { path:'testimonial',component: TestimonialComponent},
  { path:'contact',component: ContactComponent},
  { path:'login',component: LoginComponent},
  { path:'signup',component: SignupComponent},
  { path:'instructor',component: InstructerComponent},
  { path:'enrollcourse',component: EnrollcourseComponent},
];
