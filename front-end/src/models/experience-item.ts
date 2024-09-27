import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../util/http-client";
import { Observable } from "rxjs";

export class ExperienceItemModel {
    constructor(
        public name: string,
        public role: string,
        public from: string,
        public to: string,
        public items: string[],
    ) {}

    static getAllExperienceItems(
        http: HttpClient,
    ): Observable<ExperienceItemModel[]> {
        return http.get<ExperienceItemModel[]>(
            `${BASE_URL}/resources/experiences.json`,
        );
    }
}
