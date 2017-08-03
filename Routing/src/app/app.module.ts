import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { FormComponent } from './form-add-component';
import { CityService }   from './city.service';
import { FormDetailComponent } from './form.detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot([
    {
      path  : 'addInfo',
      component : FormComponent
      },
      {
       path : 'userInfo',
       component : FormDetailComponent
      }
    ])
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
