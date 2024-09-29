import { ElementRef, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class NavService {
    public aboutRef?: ElementRef;
    public skillsRef?: ElementRef;
    // aboutRef?: ElementRef;
    // aboutRef?: ElementRef;

    constructor() {}

    public onRefClick(ref?: ElementRef) {
        ref?.nativeElement.scrollIntoView({ behavior: "smooth" });
    }
}
