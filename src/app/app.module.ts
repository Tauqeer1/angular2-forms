import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JurinameDirective } from './directives/juriname.directive';
import { EmptySpaceValidator } from './directives/emptyspace/emptyspace.directive';

@NgModule({
  declarations: [
    AppComponent,
    JurinameDirective,
    EmptySpaceValidator
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
