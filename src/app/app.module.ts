import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { YeelightStatusComponent } from "./yeelight-status/yeelight-status.component";
import { SimpleStatusComponent } from "./simple-status/simple-status.component";
import { hexPipe } from "./pipe/hexPipe";
import { ColorComponent } from './color/color.component';
import { onOffPipe } from "./pipe/onOffPipe";

@NgModule({
  declarations: [AppComponent, YeelightStatusComponent, SimpleStatusComponent,hexPipe,onOffPipe, ColorComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
