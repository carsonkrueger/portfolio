import { Component, inject, OnInit } from "@angular/core";
import { SkillItemComponent } from "../skill-item/skill-item.component";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../../util/http-client";

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
export class SkillsComponent implements OnInit {
    constructor(private http: HttpClient) {}

    skills: Skill[] = [];
    otherSkills: string[] = [];
    numFeaturedSkills: number = 3;

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
}
