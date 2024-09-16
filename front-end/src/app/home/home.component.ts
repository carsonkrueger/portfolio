import { Component } from "@angular/core";
import { SkillsComponent } from "../skills/skills.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [SkillsComponent, AboutComponent, ContactComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  secondaryColorClass: string = "bg-blue-500";
  imgSize: number = 25;
}
