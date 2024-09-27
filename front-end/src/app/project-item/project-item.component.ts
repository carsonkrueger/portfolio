import { Component, Input, OnInit } from "@angular/core";
import { ProjectItemModel } from "../../models/project-item";
import { HttpClient } from "@angular/common/http";
import { getStaticResource } from "../../models/resources";

@Component({
    selector: "app-project-item",
    standalone: true,
    imports: [],
    templateUrl: "./project-item.component.html",
    styleUrl: "./project-item.component.css",
})
export class ProjectItemComponent implements OnInit {
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
    imgBlob?: string;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        if (this._item && this._item.imgUrl) {
            try {
                getStaticResource(this.http, this._item.imgUrl).subscribe(
                    (res) => {
                        this.imgBlob = window.URL.createObjectURL(res);
                    },
                );
            } catch (e) {
                // report err
            }
        }
    }
}
