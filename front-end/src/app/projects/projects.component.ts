import { Component } from "@angular/core";
import {
  ProjectItem,
  ProjectItemComponent,
} from "../project-item/project-item.component";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [ProjectItemComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.css",
})
export class ProjectsComponent {
  items: ProjectItem[] = [
    {
      bodyText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgSrc: "",
      index: 0,
      link: "https://youtube.com",
      linkText: "youtube",
    },
    {
      bodyText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgSrc: "",
      index: 1,
      link: "https://youtube.com",
      linkText: "youtube",
    },
    {
      bodyText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgSrc: "",
      index: 2,
      link: "https://youtube.com",
      linkText: "youtube",
    },
    {
      bodyText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgSrc: "",
      index: 3,
      link: "https://youtube.com",
      linkText: "youtube",
    },
  ];
}
