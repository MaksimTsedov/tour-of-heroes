import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesAddReactiveComponent } from './heroes-add-reactive/heroes-add-reactive.component';
import { HeroDynamicComponent } from './hero-dynamic/hero-dynamic.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail', component: HeroDetailComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'reactive', component: HeroesAddReactiveComponent},
  { path: 'dynamic', component: HeroDynamicComponent}
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule {

}
