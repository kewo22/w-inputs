import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { InputTestComponent } from "./input-test/input-test.component";

const routes: Routes = [
   {path: 'input' , component: InputTestComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, HelloComponent, InputTestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
