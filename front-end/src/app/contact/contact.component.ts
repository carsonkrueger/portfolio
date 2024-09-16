import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

type EmailBody = {
  from: string;
  body: string;
};

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  from: string = "";
  body: string = "";
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  async sendEmail() {
    if (this.loading) return;

    const body: EmailBody = {
      from: this.from,
      body: this.body,
    };

    try {
      this.loading = true;
      this.http.post("http://localhost:3000/email/", body).subscribe((res) => {
        this.from = "";
        this.body = "";
      });
    } catch (e) {
      // report err
    } finally {
      this.loading = false;
    }
  }
}
