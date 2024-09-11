import { Component } from "@angular/core";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [IconComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  secondaryColorClass: string = "bg-blue-500";
  imgSize: number = 25;
}
