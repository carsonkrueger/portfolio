import { Component, Input } from "@angular/core";
import { ExperienceItemModel } from "../../models/experience-item";

@Component({
    selector: "app-experience-item",
    standalone: true,
    imports: [],
    templateUrl: "./experience-item.component.html",
    styleUrl: "./experience-item.component.css",
})
export class ExperienceItemComponent {
    @Input({ required: true }) item!: ExperienceItemModel;
}
