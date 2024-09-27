import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ExperienceItemModel } from "../../models/experience-item";

@Component({
    selector: "app-experiences",
    standalone: true,
    imports: [],
    templateUrl: "./experiences.component.html",
    styleUrl: "./experiences.component.css",
})
export class ExperiencesComponent implements OnInit {
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        ExperienceItemModel.getAllExperienceItems(this.http).subscribe(
            (res) => {
                console.log(res);
            },
        );
    }
}
