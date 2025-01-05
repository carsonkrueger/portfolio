import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [NgClass],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css'
})
export class PopoverComponent {
  @Input() popoverClass: string = "";
}
