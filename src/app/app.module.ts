import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {Routes,Router,RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LaunchingComponent } from './launching/launching.component';
import { ContactComponent } from './launching/contact/contact.component';
import { PlacementdetailsComponent } from './launching/placementdetails/placementdetails.component';
import { CsitComponent } from './launching/placementdetails/csit/csit.component';
import { EceComponent } from './launching/placementdetails/ece/ece.component';
import { EeeComponent } from './launching/placementdetails/eee/eee.component';
import { MechComponent } from './launching/placementdetails/mech/mech.component';
import { HclComponent } from './launching/placementdetails/hcl/hcl.component';
import { TechmahindraComponent } from './launching/placementdetails/techmahindra/techmahindra.component';
import { CaComponent } from './launching/placementdetails/csit/ca/ca.component';
import { EpamComponent } from './launching/placementdetails/csit/epam/epam.component';
import { CapgeminiComponent } from './launching/placementdetails/csit/capgemini/capgemini.component';
import { OpentextComponent } from './launching/placementdetails/csit/opentext/opentext.component';
import { PersistentComponent } from './launching/placementdetails/csit/persistent/persistent.component';
import { TcsComponent } from './launching/placementdetails/csit/tcs/tcs.component';
import { VirtusaComponent } from './launching/placementdetails/csit/virtusa/virtusa.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AboutComponent } from './launching/about/about.component';
import { LoginService } from './login.service';



const app: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'launching',
    component: LaunchingComponent
  },
  {
    path: 'placementdetails',
    component: PlacementdetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'csit',
    component: CsitComponent
  },
  {
    path: 'eee',
    component: EeeComponent
  },
  {
    path: 'ece',
    component: EceComponent
  },
  {
    path: 'mech',
    component: MechComponent
  },
  {
    path: 'hcl',
    component: HclComponent
  },
  {
    path: 'techmahindra',
    component: TechmahindraComponent
  },
  {
    path: 'ca',
    component: CaComponent
  },
  {
    path: 'capgemini',
    component: CapgeminiComponent
  },
  {
    path: 'epam',
    component: EpamComponent
  },
  {
    path: 'opentext',
    component: OpentextComponent
  },
  {
    path: 'tcs',
    component: TcsComponent
  },
  {
    path: 'virtusa',
    component: VirtusaComponent
  }
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LaunchingComponent,
    PlacementdetailsComponent,
    ContactComponent,
    CsitComponent,
    EceComponent,
    EeeComponent,
    MechComponent,
    HclComponent,
    TechmahindraComponent,
    CaComponent,
    EpamComponent,
    CapgeminiComponent,
    OpentextComponent,
    PersistentComponent,
    TcsComponent,
    VirtusaComponent,
    LoginComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(app)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
 

})
export class AppModule { }
