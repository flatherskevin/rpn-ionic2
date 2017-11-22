import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ZStackDirective } from './../components/stacks/zStack.directive';
import { YStackDirective } from './../components/stacks/yStack.directive';
import { XStackDirective } from './../components/stacks/xStack.directive';
import { PlusDirective } from './../components/buttons/operand/plus.directive';
import { MinusDirective } from './../components/buttons/operand/minus.directive';
import { EnterDirective } from './../components/buttons/operand/enter.directive';
import { MultiplyDirective } from './../components/buttons/operand/multiply.directive';
import { StackComponent } from './../components/stacks/stack.component';
import { NumericComponent } from './../components/buttons/numeric/numeric.component';
import { MembraneComponent } from './../components/membrane/membrane.component';
import { DivideDirective } from './../components/buttons/operand/divide.directive';
import { OperandComponent } from './../components/buttons/operand/operand.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MembraneComponent,
    OperandComponent,
    NumericComponent,
    StackComponent,
    DivideDirective,
    EnterDirective,
    MinusDirective,
    MultiplyDirective,
    PlusDirective,
    XStackDirective,
    YStackDirective,
    ZStackDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
