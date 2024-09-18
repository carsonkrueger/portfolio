import { Component, Input } from "@angular/core";

export type ProjectItem = {
  index: number;
  link: string;
  linkText: string;
  imgSrc: string;
  bodyText: string;
};

@Component({
  selector: "app-project-item",
  standalone: true,
  imports: [],
  templateUrl: "./project-item.component.html",
  styleUrl: "./project-item.component.css",
})
export class ProjectItemComponent {
  private _item?: ProjectItem;
  // @Input({ required: true }) item?: ProjectItem = undefined;
  @Input()
  set item(value: ProjectItem | undefined) {
    this._item = value;
    this.zeroRemainder = (this._item?.index ?? 0) % 2 === 0;
  }

  get item(): ProjectItem | undefined {
    return this._item;
  }

  zeroRemainder: boolean = false;
}
