import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarEventEmit: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  toggleSideBar() {
    this.toggleSideBarEventEmit.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }
}
