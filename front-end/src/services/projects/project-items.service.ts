import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../../util/http-client";
import { lastValueFrom } from "rxjs";
import { ProjectItemModel } from "../../models/project-item";

@Injectable({
    providedIn: "root",
})
export class ProjectItemsService {
    constructor() {}

    async getAllProjectItems() {}
}
