import { Component, OnInit } from "@angular/core";
import { ProjectItemComponent } from "../project-item/project-item.component";
import { ProjectItemModel } from "../../models/project-item";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-projects",
    standalone: true,
    imports: [ProjectItemComponent, CommonModule],
    templateUrl: "./projects.component.html",
    styleUrl: "./projects.component.css",
})
export class ProjectsComponent implements OnInit {
    items$!: Observable<ProjectItemModel[]>;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.items$ = ProjectItemModel.getAllProjectItems(this.http);
    }
}
