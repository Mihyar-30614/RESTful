import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TEXTBOXComponent } from './text-box/text-box.component';
import { LISTBOXComponent } from './listbox/listbox.component';
import { CHECKBOXComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    TEXTBOXComponent,
    LISTBOXComponent,
    CHECKBOXComponent
  ],
  entryComponents: [
    TEXTBOXComponent, 
    LISTBOXComponent,
    CHECKBOXComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
