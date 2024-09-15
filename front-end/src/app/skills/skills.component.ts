import { Component, inject, OnInit } from "@angular/core";
import { SkillItemComponent } from "../skill-item/skill-item.component";
import { HttpClient } from "@angular/common/http";

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
  numFeaturedSkills: number = 3;

  getSkills() {
    this.http.get("http://localhost:3000/skills/").subscribe((res) => {
      this.skills = res as Skill[];
    });
  }

  ngOnInit() {
    this.getSkills();
  }
}
