import { Component, OnInit, EventEmitter } from "@angular/core";
import { UploadListComponent } from "./../upload-list/upload-list.component";

import { UploadService } from "./../services/upload.service";

import * as $ from "jquery";

@Component({
  selector: "uploader",
  templateUrl: "./upload.component.html",
  providers: [UploadService]
})
export class UploaderComponent implements OnInit {
  protected _uploadService: UploadService;
  public totalSize: number = 0;
  public progressFile: EventEmitter<any>;

  constructor(_uploadService: UploadService) {
    this._uploadService = _uploadService;
  }

  ngOnInit() {
    this.progressFile = this._uploadService.uploader.response;
    console.log(this.progressFile);
  }

  onFileSelected() {
    this.totalSize = this._uploadService.sum();
  }

  selectFiles() {
    $("#selectFiles").trigger("click");
  }

  upload() {
    console.log("Sending...");
    this._uploadService.send();
  }
}
