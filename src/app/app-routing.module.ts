import { DetailSummaryComponent } from './students/student-details/detail-summary/detail-summary.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'structuraldirectives', component: StructuraldirectivesComponent},
  {path: 'pipes', component: PipesComponent},
  // students
  {
    path: 'students',
    children: [
      { path: '', component: StudentsComponent },
      {
          path: 'student-detail',
          children: [
            { path: '', component: StudentDetailsComponent },
            { path: 'student-detail-summary', component: DetailSummaryComponent },
          ]
        },
      { path: 'student-list', component: StudentListComponent },
    ]
  },

  // wildcard
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
