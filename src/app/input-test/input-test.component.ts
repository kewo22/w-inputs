import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-input-test",
  templateUrl: "./input-test.component.html",
  styleUrls: ["./input-test.component.css"]
})
export class InputTestComponent implements OnInit {
  @Input("inputControlName") inputControlName: string;
  contactForm: FormGroup;

  constructor() {}

  ngOnInit() {
    console.log(this.inputControlName)
    this.contactForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      [this.inputControlName]: new FormControl("", Validators.required)
    });
  }

  onSubmit() {}
}
