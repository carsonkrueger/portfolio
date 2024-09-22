import { Component, Input } from "@angular/core";
import { ProjectItemModel } from "../../models/project-item";

@Component({
    selector: "app-project-item",
    standalone: true,
    imports: [],
    templateUrl: "./project-item.component.html",
    styleUrl: "./project-item.component.css",
})
export class ProjectItemComponent {
    private _item?: ProjectItemModel;
    @Input({ required: true }) index: number = 0;

    @Input()
    set item(value: ProjectItemModel | undefined) {
        this._item = value;
        this.zeroRemainder = this.index % 2 === 0;
    }

    get item(): ProjectItemModel | undefined {
        return this._item;
    }

    zeroRemainder: boolean = false;
}
