import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-nav-item",
    standalone: true,
    imports: [NavItemComponent, RouterLink],
    templateUrl: "./nav-item.component.html",
    styleUrl: "./nav-item.component.css",
})
export class NavItemComponent {
    @Input({ transform: trimText }) navText?: string = undefined;
    @Input({ transform: trimText }) navTo?: string = undefined;
    @Input() reversed: boolean = false;
    @Input() handleClick?: (e: Event) => void;
}

function trimText(s: string | undefined): string | undefined {
    return s?.trim();
}
