import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { NavComponent } from "./nav/nav/nav.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "angular-test";
}
