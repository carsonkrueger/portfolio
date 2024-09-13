import { Component } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { SkillsComponent } from "../skills/skills.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [IconComponent, SkillsComponent, AboutComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  secondaryColorClass: string = "bg-blue-500";
  imgSize: number = 25;
}
