import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';

import { SimpleHttpComponent } from './components/SimpleHTTPComponent';

@Component({
  selector: 'http-app',
  template: `
  <div class="container">
    <simple-http></simple-http>
  </div>
  `
})
class HttpApp {
}

@NgModule({
  declarations: [
    HttpApp,
    SimpleHttpComponent
    /*MoreHttpRequests,
    YoutubeSearchComponent,
    SearchBox,
    SearchResultComponent*/
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [ HttpApp ],
  providers: [
    /*youtubeServiceInjectables*/
  ]
})
class HttpAppModule {}

platformBrowserDynamic().bootstrapModule(HttpAppModule)
  .catch((err: any) => console.error(err));
  