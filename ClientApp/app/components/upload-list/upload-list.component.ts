import { Component, Input, OnInit } from "@angular/core";
import { useAnimation } from "@angular/core/src/animation/dsl";
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: "upload-list",
  templateUrl: "./upload-list.component.html",
  styleUrls: ["./upload-list.component.css"]
})
export class UploadListComponent implements OnInit {
  @Input() files: FileUploader;
  @Input() totalSize: number = 0;

  constructor() {}

  ngOnInit() {}
}
