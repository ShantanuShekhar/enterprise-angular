import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'emailing',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  data = {
    to: "",
    subject: "",
    message: ""
  }
  flag = false;
  constructor(private email: EmailService, private snack: MatSnackBar) { }
  

  doSubmitForm() {
    console.log("form is submitted data is " + this.data);
    console.log("form is submitted to is " + this.data.to);
    this.flag = true;
    if (this.data.to == "" || this.data.subject == "" || this.data.message == "") {
      this.snack.open("field should note be empty!!", "OK");
      return;
    }

    this.email.sendEmail(this.data).subscribe(

    response => {
      console.log("getting SUCCESS response is "+response);
        this.flag = false;
        this.snack.open("Email sent successfully", "OK");

    }, error=>{
      console.log("getting ERROR response is "+error);
        this.flag = false;
        this.snack.open("Error Sending Email", "OK");
      }
    )
    

    
  }

}
