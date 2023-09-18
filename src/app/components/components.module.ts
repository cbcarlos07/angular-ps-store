import { NgModule } from "@angular/core";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { CardLabelComponent } from './card/card-label/card-label.component';
import { CardPricingComponent } from './card/card-pricing/card-pricing.component';
import { MenuBarItemComponent } from './menu-bar/menu-bar-item/menu-bar-item.component';

@NgModule({
    declarations: [
        MenuBarComponent,
        CardComponent,
        CardLabelComponent,
        CardPricingComponent,
        MenuBarItemComponent
    ],
    exports: [
        MenuBarComponent,
        CardComponent,
        CardLabelComponent,
        CardPricingComponent
    ],
    imports:[
        CommonModule
    ]
})

export class ComponentsModule{}