import { Routes } from '@angular/router';
import { CarbonFootprintComponent } from './carbon-footprint/carbon-footprint.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { pseudoGuard } from './pseudo.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponentComponent },
  { path: 'carbon', component: CarbonFootprintComponent },
  { path: 'profil/:username', component: ProfileComponent, canActivate: [pseudoGuard]  },
  { path: '**', component: NotFoundComponent },

];

