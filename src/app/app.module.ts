import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JurinameDirective } from './directives/juriname.directive';
import { EmptySpaceValidator } from './directives/emptyspace/emptyspace.directive';
import { CannotContainSpaceDirective } from './directives/cannot-contain-space/cannot-contain-space.directive';

@NgModule({
  declarations: [
    AppComponent,
    JurinameDirective,
    EmptySpaceValidator,
    CannotContainSpaceDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
