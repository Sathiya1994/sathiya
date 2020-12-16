import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MessageComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
