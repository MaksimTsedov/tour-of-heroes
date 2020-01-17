import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { GetClassPipe } from './getClass.pipe';
import { HeroesAddReactiveComponent } from './heroes-add-reactive/heroes-add-reactive.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail', component: HeroDetailComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'reactive', component: HeroesAddReactiveComponent}
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
