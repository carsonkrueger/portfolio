import { Component } from "@angular/core";
import { NavItemComponent } from "../nav-item/nav-item.component";

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.css",
})
export class NavComponent {
  log(e: Event) {
    console.log(e);
  }
}
