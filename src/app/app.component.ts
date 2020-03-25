import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @HostListener("mouseleave", ["$event.target"])
  onClick(btn) {
    console.log("TEST HostListener " + btn.nativeElement);
  }

  title = "directives";
}
