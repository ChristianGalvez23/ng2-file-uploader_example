import { Injectable, OnInit } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs/Observable";

const URL = "upload/savefiles";

@Injectable()
export class UploadService implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL });

  constructor() {}

  ngOnInit() {}

  send() {
    this.uploader.uploadAll();
  }

  public sum() {
    let totalSize = 0;
    for (let f of this.uploader.queue) {
      totalSize += f.file.size;
    }
    return totalSize;
  }
}
