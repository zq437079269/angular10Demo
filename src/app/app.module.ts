import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TextComponent } from './demos/text/text.component';
import { DialogComponent } from './demos/components/dialog/dialog.component';
import { PseudoClassComponent } from './demos/pseudo-class/pseudo-class.component';
import { SizerComponent } from './demos/components/sizer/sizer.component';
import { NgmoduleComponent } from './demos/components/ngmodule/ngmodule.component';
import { IfComponent } from './demos/components/if/if.component';
import { NgSwitchComponent } from './demos/components/ng-switch/ng-switch.component';
import { NgNgForComponent } from './demos/components/ng-ng-for/ng-ng-for.component';
import { TplComponent } from './demos/components/tpl/tpl.component';
import { TplOperatorsComponent } from './demos/components/tpl-operators/tpl-operators.component';
import { TransferPanelComponent } from './demos/components/transfer-panel/transfer-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    DialogComponent,
    PseudoClassComponent,
    SizerComponent,
    NgmoduleComponent,
    IfComponent,
    NgSwitchComponent,
    NgNgForComponent,
    TplComponent,
    TplOperatorsComponent,
    TransferPanelComponent
  ],
    imports: [
        BrowserModule, //内置了angular指令
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
