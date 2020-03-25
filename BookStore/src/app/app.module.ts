import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
import { RouterModule, Router, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component'

const routes:Routes = [
  {
  path:'owner', component:OwnerComponent
  },
  {
    path:'list' , component:ListComponent
  },
  {
    path:'edit:/id' , component:EditComponent 
  }
];
@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
