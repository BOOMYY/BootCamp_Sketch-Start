import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { SketchListComponent } from "./sketch-list/sketch-list.component";
import { SharedModule } from "../shared/shared.module";
import { CreateSketchComponent } from './create-sketch/create-sketch.component';
import { SketchInfoComponent } from './sketch-info/sketch-info.component';
import { MySketchListComponent } from './my-sketch-list/my-sketch-list.component';

@NgModule({
  declarations: [MainComponent, SketchListComponent, CreateSketchComponent, SketchInfoComponent, MySketchListComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
