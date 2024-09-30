import { Component } from "@angular/core";
import { NavItemComponent } from "../nav-item/nav-item.component";
import { NavService } from "../../../services/nav.service";

@Component({
    selector: "app-nav",
    standalone: true,
    imports: [NavItemComponent],
    templateUrl: "./nav.component.html",
    styleUrl: "./nav.component.css",
})
export class NavComponent {
    constructor(protected navService: NavService) {}

    onAboutClick = (e: Event) => {
        this.navService.onRefClick(this.navService.aboutRef);
    };

    onSkillsClick = (e: Event) => {
        this.navService.onRefClick(this.navService.skillsRef);
    };

    onProjectsClick = (e: Event) => {
        this.navService.onRefClick(this.navService.projectsRef);
    };

    onExperiencesClick = (e: Event) => {
        this.navService.onRefClick(this.navService.experiencesRef);
    };

    onContactClick = (e: Event) => {
        this.navService.onRefClick(this.navService.contactRef);
    };
}
