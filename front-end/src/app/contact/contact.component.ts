import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NavService } from "../../services/nav.service";

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
export class ContactComponent implements AfterViewInit {
    from: string = "";
    body: string = "";
    loading: boolean = false;
    @ViewChild("contactRef") contactRef!: ElementRef;

    constructor(
        private http: HttpClient,
        private navService: NavService,
    ) {}

    async sendEmail() {
        if (this.loading) return;

        const body: EmailBody = {
            from: this.from,
            body: this.body,
        };

        try {
            this.loading = true;
            this.http
                .post("http://localhost:3000/email/", body)
                .subscribe((res) => {
                    this.from = "";
                    this.body = "";
                });
        } catch (e) {
            // report err
        } finally {
            this.loading = false;
        }
    }

    ngAfterViewInit(): void {
        this.navService.contactRef = this.contactRef;
    }
}
