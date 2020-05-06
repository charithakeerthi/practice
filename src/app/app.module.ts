import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { CustomstyleDirective } from './core/directives/customstyle.directive';
import { InputParentComponent } from './input-parent/input-parent.component';
import { InputChildComponent } from './input-child/input-child.component';
import { OutputChildComponent } from './output-child/output-child.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { BoldPipe } from './core/pipes/bold.pipe';
import { WelcomePipe } from './core/pipes/welcome.pipe';
import { ReversePipe } from './core/pipes/reverse.pipe';
import { HostComponent } from './host/host.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { DetailSummaryComponent } from './students/student-details/detail-summary/detail-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AddComponent,
    ListComponent,
    StructuraldirectivesComponent,
    CustomstyleDirective,
    InputParentComponent,
    InputChildComponent,
    OutputChildComponent,
    OutputParentComponent,
    PipesComponent,
    CustompipesComponent,
    BoldPipe,
    WelcomePipe,
    ReversePipe,
    HostComponent,
    HomeComponent,
    PagenotfoundComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentListComponent,
    DetailSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
