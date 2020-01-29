import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroesSlidesComponent } from './heroes-slides/heroes-slides.component';
import { WarriorSlideComponent } from './slides/warrior-slide/warrior-slide.component';
import { SlideDirective } from './heroes-slides/slide.directive';
import { SlidesArrowsComponent } from './slides-arrows/slides-arrows.component';
import { ArcherSlideComponent } from './slides/archer-slide/archer-slide.component';
import { MageSlideComponent } from './slides/mage-slide/mage-slide.component';
import { AssassinSlideComponent } from './slides/assassin-slide/assassin-slide.component';
import { PriestSlideComponent } from './slides/priest-slide/priest-slide.component';
import { SlideComponent } from './slides/slide/slide.component';
import { GetClassPipe } from './get-class.pipe';
import { HeroesAddReactiveComponent } from './heroes-add-reactive/heroes-add-reactive.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { HeroDynamicComponent } from './hero-dynamic/hero-dynamic.component';
import { SkillFormComponent } from './skill-form/skill-form.component';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
         InMemoryDataService, { dataEncapsulation: false })
   ],
   declarations: [
      AppComponent,
      DashboardComponent,
      HeroesComponent,
      HeroDetailComponent,
      MessagesComponent,
      HeroSearchComponent,
      HeroesSlidesComponent,
      WarriorSlideComponent,
      ArcherSlideComponent,
      MageSlideComponent,
      AssassinSlideComponent,
      PriestSlideComponent,
      SlideComponent,
      SlideDirective,
      SlidesArrowsComponent,
      GetClassPipe,
      HeroesAddReactiveComponent,
      DynamicFormComponent,
      DynamicFormQuestionComponent,
      HeroDynamicComponent,
      SkillFormComponent
   ],
   entryComponents: [
      WarriorSlideComponent,
      ArcherSlideComponent,
      MageSlideComponent,
      AssassinSlideComponent,
      PriestSlideComponent
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
