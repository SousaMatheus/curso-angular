import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/children-data/parent-data.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { IfComponentComponent } from './components/if-component/if-component.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  declarations: [AppComponent, FirstComponentComponent, ParentDataComponent, DirectiveComponent, IfComponentComponent, EventosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
