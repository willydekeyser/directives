import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges
} from "@angular/core";

@Directive({
  selector: "[appCustom]"
})
export class CustomDirective implements OnInit, OnChanges {
  @Input() textColor: string;
  @Input() achtergrondColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.elementRef.nativeElement.style.color = null;
    this.elementRef.nativeElement.style.backgroundColor = null;
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.elementRef.nativeElement.style.color = this.textColor;
    this.elementRef.nativeElement.style.backgroundColor = this.achtergrondColor;
  }

  @HostBinding("style.color") color: string;
  @HostBinding("style.border") borderColor: string;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = this.textColor;
    this.elementRef.nativeElement.style.backgroundColor = this.achtergrondColor;
    this.elementRef.nativeElement.innerHTML =
      "<i>Een test met Custom directives</i>";
    this.color = "white";
    this.borderColor = "1px solid blue";
  }
}
