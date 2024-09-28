import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ExperienceItemModel } from "../../models/experience-item";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { ExperienceItemComponent } from "../experience-item/experience-item.component";

@Component({
    selector: "app-experiences",
    standalone: true,
    imports: [CommonModule, ExperienceItemComponent],
    templateUrl: "./experiences.component.html",
    styleUrl: "./experiences.component.css",
})
export class ExperiencesComponent implements OnInit {
    items$?: Observable<ExperienceItemModel[]>;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.items$ = ExperienceItemModel.getAllExperienceItems(this.http);
    }
}
