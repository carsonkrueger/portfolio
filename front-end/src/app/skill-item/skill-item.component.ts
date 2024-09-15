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
  @Input({ required: true, transform: (v: number) => `${v}%` })
  progress: string = "0%";
  @Input() featured: boolean = false;
}
