import { HttpClient } from "@angular/common/http";
import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from "@angular/core";
import { NavService } from "../../services/nav.service";

@Component({
    selector: "app-about",
    standalone: true,
    imports: [],
    templateUrl: "./about.component.html",
    styleUrl: "./about.component.css",
})
export class AboutComponent implements AfterViewInit {
    blob: Blob | null = null;
    @ViewChild("aboutRef") aboutRef!: ElementRef;

    constructor(
        private http: HttpClient,
        private navService: NavService,
    ) {}

    downloadResume() {
        if (this.blob === null) {
            this.http
                .get("/resume", { responseType: "blob" })
                .subscribe((res) => {
                    this.blob = new Blob([res as any], {
                        type: "application/pdf",
                    });
                    this.clickDownload();
                });
        } else if (this.blob !== null) {
            this.clickDownload();
        }
    }

    clickDownload() {
        if (this.blob === null) return;
        const url = window.URL.createObjectURL(this.blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "resume-carson-krueger.pdf";
        link.click();
    }

    ngAfterViewInit(): void {
        console.log(this.aboutRef);
        this.navService.aboutRef = this.aboutRef;
    }

    onContactClick = () => {
        this.navService.onRefClick(this.navService.contactRef);
    };
}
