import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTagComponent } from './components/first-tag/first-tag.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { FirstDirectivesComponent } from './components/first-directives/first-directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventHandlerComponent } from './components/event-handler/event-handler.component';
import { NumberGeneratorComponent } from './components/number-generator/number-generator.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTagComponent,
    ParentDataComponent,
    FirstDirectivesComponent,
    IfRenderComponent,
    EventHandlerComponent,
    NumberGeneratorComponent,
    ListRenderComponent,
    AnimalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
