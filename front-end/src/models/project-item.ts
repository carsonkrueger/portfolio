import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../util/http-client";
import { lastValueFrom, Observable } from "rxjs";

export class ProjectItemModel {
    constructor(
        private http: HttpClient,
        public body: string,
        public linkText?: string,
        public linkUrl?: string,
        public sourceUrl?: string,
        public imgUrl?: string,
    ) {}

    static async getAllProjectItems(
        http: HttpClient,
    ): Promise<ProjectItemModel[]> {
        const req = http.get(`${BASE_URL}/projects`);
        return await lastValueFrom<ProjectItemModel[]>(
            req as Observable<ProjectItemModel[]>,
        );
    }
}
