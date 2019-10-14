import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  contactForm: FormGroup

  ngOnInit() {
    this.contactForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      [this.inputControlName]: new FormControl("", Validators.required)
    });
  }
}
