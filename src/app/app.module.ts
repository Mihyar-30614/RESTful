import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TEXTBOXComponent } from './text-box/text-box.component';
import { LISTBOXComponent } from './listbox/listbox.component';
import { CHECKBOXComponent } from './checkbox/checkbox.component';
import { TEXTAREAComponent } from './textarea/textarea.component';


@NgModule({
  declarations: [
    AppComponent,
    TEXTBOXComponent,
    LISTBOXComponent,
    CHECKBOXComponent,
    TEXTAREAComponent
  ],
  entryComponents: [
    TEXTBOXComponent, 
    LISTBOXComponent,
    CHECKBOXComponent,
    TEXTAREAComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
