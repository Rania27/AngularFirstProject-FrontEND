import {Component , OnChanges, Input} from '@angular/core';


@Component({
selector : 'ai-star',
templateUrl:'./Star.Component.html',

})
export class StarComponent {
@Input() rating : number ;
starWidth : number;

ngOnChanges(): void {
    this.starWidth = this.rating *86 /5
}


}