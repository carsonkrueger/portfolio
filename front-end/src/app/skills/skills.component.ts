import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    OnInit,
    ViewChild,
} from "@angular/core";
import { SkillItemComponent } from "../skill-item/skill-item.component";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../../util/http-client";
import { NavService } from "../../services/nav.service";

export type Skill = {
    name: string;
    percentage: number;
};

@Component({
    selector: "app-skills",
    standalone: true,
    imports: [SkillItemComponent],
    templateUrl: "./skills.component.html",
    styleUrl: "./skills.component.css",
})
export class SkillsComponent implements OnInit, AfterViewInit {
    constructor(
        private http: HttpClient,
        private navService: NavService,
    ) {}

    skills: Skill[] = [];
    otherSkills: string[] = [];
    numFeaturedSkills: number = 3;
    @ViewChild("skillsRef") skillsRef!: ElementRef;

    getSkills() {
        this.http.get(`${BASE_URL}/resources/skills.json`).subscribe((res) => {
            this.skills = res as Skill[];
        });
    }

    getOtherSkills() {
        this.http
            .get(`${BASE_URL}/resources/other-skills.json`)
            .subscribe((res) => {
                this.otherSkills = res as string[];
            });
    }

    ngOnInit() {
        this.getSkills();
        this.getOtherSkills();
    }

    ngAfterViewInit(): void {
        this.navService.skillsRef = this.skillsRef;
    }
}
