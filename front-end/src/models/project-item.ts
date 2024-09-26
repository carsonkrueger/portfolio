import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../util/http-client";
import { Observable } from "rxjs";

export class ProjectItemModel {
    constructor(
        public body: string,
        public linkText?: string,
        public linkUrl?: string,
        public sourceUrl?: string,
        public imgUrl?: string,
    ) {}

    static getAllProjectItems(
        http: HttpClient,
    ): Observable<ProjectItemModel[]> {
        return http.get<ProjectItemModel[]>(
            `${BASE_URL}/resources/projects.json`,
        );
    }
}
