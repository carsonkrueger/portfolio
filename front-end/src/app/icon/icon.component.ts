import { Component, Input } from "@angular/core";

@Component({
  selector: "app-icon",
  standalone: true,
  imports: [],
  templateUrl: "./icon.component.html",
  styleUrl: "./icon.component.css",
})
export class IconComponent {
  @Input() inputClass: string = "";
  @Input() click: ((e: Event) => {}) | undefined;
  @Input() href: string | undefined;
  @Input() target: string | undefined = "_blank";
}
