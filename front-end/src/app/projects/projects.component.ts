import { Component, OnInit } from "@angular/core";
import { ProjectItemComponent } from "../project-item/project-item.component";
import { ProjectItemModel } from "../../models/project-item";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-projects",
    standalone: true,
    imports: [ProjectItemComponent],
    templateUrl: "./projects.component.html",
    styleUrl: "./projects.component.css",
})
export class ProjectsComponent implements OnInit {
    items: ProjectItemModel[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        ProjectItemModel.getAllProjectItems(this.http).then((items) => {
            this.items = items;
        });
    }
}
