import { Component, ViewChild}                              from '@angular/core';

import { Platform, Nav, App, LoadingController}             from 'ionic-angular';
import { StatusBar }                                        from '@ionic-native/status-bar';

// Convertigo CAF Imports
import { C8oRouter }                                        from 'c8ocaf';
import { C8oRoute, C8oRouteOptions, C8oRouteListener}       from 'c8ocaf'
import { C8oPage}                                           from "c8ocaf";
import { C8o, C8oSettings, C8oLogLevel,C8oProgress }        from "c8osdkangular";

/*
	You can customize your application class by writing code between the :

   		Begin_c8o_XXXX and
   		End_c8o_XXXX
   		
   	Comments.
   	
   	Any code placed outside these these comments will be lost when the application is generated
*/

/*Begin_c8o_AppImport*/
/*End_c8o_AppImport*/

/*=c8o_PagesImport*/ 


/**
 * Disable comments to run in prod mode
 */
/*import {enableProdMode} from '@angular/core';
 enableProdMode();*/


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage = /*=c8o_RootPage*/;
    pages : Array<{title: string, component: any, includedInAutoMenu?: boolean}>;
	
	/*Begin_c8o_AppDeclaration*/
	/*End_c8o_AppDeclaration*/

    constructor(platform: Platform, statusBar: StatusBar, private c8o: C8o, private router: C8oRouter, private loader: LoadingController, private app: App) {
        /**
         * declaring page to show in Menu
         */
        this.pages = [/*=c8o_PagesVariables*/]; 
        this.router.pagesArray = this.pages;


        /* ============================================================================================================
           Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================
         * Thanks to Convertigo CAF router we can manage call and navigation :
         *
         * Create a C8orouteOptions in order to define basic and repetitive routes options that will be used in C8oRoute
         * We can define actions such as beforeCall that allow us to run code before the C8o Call
         */

        let tableOptions = new C8oRouteOptions()
            .setBeforeCall(() => {
                //Do what ever has to be done...
            })
            .setAfterCall(()=>{
                //Do what ever has to be done...
            })
            .setDidEnter((page: C8oPage, c8o: C8o) => {
                c8o.log.trace("DidEnter was called from the new routing table and with page : " + page.constructor.name)
            })
            .setDidLeave((page: C8oPage, c8o: C8o) => {
                c8o.log.trace("DidLeave was called from the new routing table and with page : " + page.constructor.name)
            })
            .setTargetAnimate(true)
            .setTargetDuration(250);

        /**
         * The generated Routing Table
         */
         /*=c8o_RoutingTable*/ 
        

        /**
         *  Define a C8oSettings Object in order to declare settings to be used in the C8oInit method
         */
        let settings: C8oSettings = new C8oSettings();
        settings
            .setLogRemote(true)
            .setLogC8o(true)
            .setLogLevelLocal(C8oLogLevel.DEBUG);

        /**
         * Then we assign C8oSettings to our c8o Object with the init method
         */
        this.c8o.init(settings);

        
        /* ============================================================================================================
             End of Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================*/
		   
		/*Begin_c8o_AppConstructor*/
		/*End_c8o_AppConstructor*/
		   
        platform.ready().then(() => {
            statusBar.styleDefault();
            /**
             * Then we finalize initialization
             */
            this.c8o.finalizeInit();

            /*Begin_c8o_AppInitialization*/
            /*End_c8o_AppInitialization*/

        });

    }

    openPage(page) {
        this.app.getActiveNav().setRoot(page.component);
    }
	
    openPageWithName(name) {
        this.app.getActiveNav().setRoot(name);
    }
    
    getPagesIncludedInAutoMenu(){
        let arrayIncluded: Array<any> = [];
        for (let p of this.pages){
            if (p["includedInAutoMenu"]) {
                arrayIncluded.push(p);
            }
        }
        return arrayIncluded;
    }

	/*Begin_c8o_AppFunction*/
	/*End_c8o_AppFunction*/
}