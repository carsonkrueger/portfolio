import { HttpClient } from "@angular/common/http";
import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from "@angular/core";
import { NavService } from "../../services/nav.service";

@Component({
    selector: "app-about",
    standalone: true,
    imports: [],
    templateUrl: "./about.component.html",
    styleUrl: "./about.component.css",
})
export class AboutComponent implements AfterViewInit {
    @ViewChild("aboutRef") aboutRef!: ElementRef;

    constructor(protected navService: NavService) {}

    ngAfterViewInit(): void {
        this.navService.aboutRef = this.aboutRef;
    }

    onContactClick = () => {
        this.navService.onRefClick(this.navService.contactRef);
    };
}
