import { HttpClient } from "@angular/common/http";
import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from "@angular/core";
import { ExperienceItemModel } from "../../models/experience-item";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { ExperienceItemComponent } from "../experience-item/experience-item.component";
import { NavService } from "../../services/nav.service";

@Component({
    selector: "app-experiences",
    standalone: true,
    imports: [CommonModule, ExperienceItemComponent],
    templateUrl: "./experiences.component.html",
    styleUrl: "./experiences.component.css",
})
export class ExperiencesComponent implements OnInit, AfterViewInit {
    items$?: Observable<ExperienceItemModel[]>;
    @ViewChild("experiencesRef") experiencesRef!: ElementRef;

    constructor(
        private http: HttpClient,
        private navService: NavService,
    ) {}

    ngOnInit(): void {
        this.items$ = ExperienceItemModel.getAllExperienceItems(this.http);
    }

    ngAfterViewInit(): void {
        this.navService.experiencesRef = this.experiencesRef;
    }
}
