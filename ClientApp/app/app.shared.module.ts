import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { UploaderComponent } from "./components/upload/upload.component";
import { UploadListComponent } from "./components/upload-list/upload-list.component";
import { FileUploadModule } from "ng2-file-upload";

import { UploadService } from "./components/services/upload.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploaderComponent,
    UploadListComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    FileUploadModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "**", redirectTo: "home" }
    ])
  ],
  providers: [UploadService]
})
export class AppModuleShared {}
