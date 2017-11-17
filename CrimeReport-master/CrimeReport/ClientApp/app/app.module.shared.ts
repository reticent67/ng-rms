import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
import { AppRoutes } from './app.routes';

import { AppComponent } from './components/app/app.component';
import { MainMenuComponent } from './components/mainmenu/mainmenu.component';
import { NewCRStartComponent } from './components/newCrimeReport/newCR.start.component';
import { NewCRProgBarComponent } from './components/newCrimeReport/newCR.progBar.component';
import { NewCRDetailsComponent } from './components/newCrimeReport/newCR.details.component';
import { NewCRPeopleComponent } from './components/newCrimeReport/newCR.people.component';
import { PersonRoleDialog  } from "./models/reportDialogs.model";





@NgModule({
    providers:[
        {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
    ],
    
    declarations: [
        AppComponent,
        MainMenuComponent,
        NewCRStartComponent,
        NewCRProgBarComponent,
        NewCRDetailsComponent,
        NewCRPeopleComponent,  
        PersonRoleDialog    
        
    ],
    entryComponents: [
        PersonRoleDialog
    ],

    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule, 
        MaterialModule,
        AppRoutes
    ]

})
export class AppModuleShared {
}
