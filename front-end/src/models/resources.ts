import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BASE_URL } from "../util/http-client";

export function getStaticResource(
    http: HttpClient,
    name: string,
): Observable<Blob> {
    return http.get<Blob>(`${BASE_URL}/resources/${name}`, {
        responseType: "blob" as any,
    });
}
