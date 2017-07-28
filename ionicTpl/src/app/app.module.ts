import { NgModule, ErrorHandler }		                                      from '@angular/core';
import { HttpModule }                                                         from "@angular/http";
import { BrowserModule }                                                      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   								  from '@angular/forms';

import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig }           from 'ionic-angular';
import { StatusBar }                                                          from '@ionic-native/status-bar';
import { SuperTabsModule }                                                    from 'ionic2-super-tabs';
import { AgmCoreModule }                                                      from '@agm/core';
import { ChartsModule }                                                       from 'ng2-charts';


import { C8o }                                                                from "c8osdkangular";
import { C8oRouter } 			                                              from 'c8ocaf';

import { MyApp } 				                                              from './app.component';
/*=c8o_PagesImport*/


/**
 * Deep links to your pages so that the app can rout directly to the page url
 */
export const deepLinkConfig: DeepLinkConfig = {
  links: [/*=c8o_PagesLinks*/]
};

@NgModule({
  declarations: [
    MyApp,/*=c8o_PagesDeclarations*/
  ],
  imports: [
    BrowserModule,
    HttpModule,
	FormsModule,
	ReactiveFormsModule,
	ChartsModule,
	SuperTabsModule.forRoot(),
	AgmCoreModule.forRoot({
	      apiKey: 'AIzaSyB0Nl1dX0kEsB5QZaNf6m-tnb1N-U5dpXs'
	}),
    IonicModule.forRoot(MyApp, {}, deepLinkConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,/*=c8o_PagesDeclarations*/],
  providers: [
    StatusBar,
    C8o,
    C8oRouter,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}