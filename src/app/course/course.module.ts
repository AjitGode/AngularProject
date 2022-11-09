import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    ModalModule.forRoot(),
  ]
})
export class CourseModule { }
