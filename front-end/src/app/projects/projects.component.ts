import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from "@angular/core";
import { ProjectItemComponent } from "../project-item/project-item.component";
import { ProjectItemModel } from "../../models/project-item";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { NavService } from "../../services/nav.service";

@Component({
    selector: "app-projects",
    standalone: true,
    imports: [ProjectItemComponent, CommonModule],
    templateUrl: "./projects.component.html",
    styleUrl: "./projects.component.css",
})
export class ProjectsComponent implements OnInit, AfterViewInit {
    items$!: Observable<ProjectItemModel[]>;
    @ViewChild("projectsRef") projectsRef!: ElementRef;

    constructor(
        private http: HttpClient,
        private navService: NavService,
    ) {}

    ngOnInit(): void {
        this.items$ = ProjectItemModel.getAllProjectItems(this.http);
    }

    ngAfterViewInit(): void {
        this.navService.projectsRef = this.projectsRef;
    }
}
