import { HttpClient } from "@angular/common/http";
import { ElementRef, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class NavService {
    private blob?: Blob;

    public aboutRef?: ElementRef;
    public skillsRef?: ElementRef;
    public projectsRef?: ElementRef;
    public experiencesRef?: ElementRef;
    public contactRef?: ElementRef;

    constructor(private http: HttpClient) {}

    public onRefClick(ref?: ElementRef) {
        ref?.nativeElement.scrollIntoView({ behavior: "smooth" });
    }

    public downloadResume = () => {
        if (this.blob === undefined) {
            this.http
                .get("/resources/Resume.pdf", { responseType: "blob" })
                .subscribe((res) => {
                    this.blob = new Blob([res as any], {
                        type: "application/pdf",
                    });
                    this.clickDownload();
                });
        } else if (this.blob !== undefined) {
            this.clickDownload();
        }
    };

    private clickDownload = () => {
        if (this.blob === undefined) return;
        const url = window.URL.createObjectURL(this.blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "resume-carson-krueger.pdf";
        link.click();
    };
}
