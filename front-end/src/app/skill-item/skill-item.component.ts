import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-skill-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skill-item.component.html",
  styleUrl: "./skill-item.component.css",
})
export class SkillItemComponent {
  @Input({ required: true }) name: string = "";
  @Input({ required: true }) progress: string = "0%";
}
