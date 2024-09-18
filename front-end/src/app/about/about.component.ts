import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  blob: Blob | null = null;

  constructor(private http: HttpClient) {}

  downloadResume() {
    if (this.blob === null) {
      this.http.get("/resume", { responseType: "blob" }).subscribe((res) => {
        this.blob = new Blob([res as any], { type: "application/pdf" });
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
}
