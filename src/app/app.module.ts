import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/children-data/parent-data.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { IfComponentComponent } from './components/if-component/if-component.component';
import { EventosComponent } from './eventos/eventos.component';
import { EmitterFilhoComponent } from './components/emitter-filho/emitter-filho.component';
import { HostPaiComponent } from './components/host-pai/host-pai.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipeOperatorComponent } from './components/pipe-operator/pipe-operator.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectiveComponent,
    IfComponentComponent,
    EventosComponent,
    EmitterFilhoComponent,
    HostPaiComponent,
    ListRenderComponent,
    PipeOperatorComponent,
    TwoWayBindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
