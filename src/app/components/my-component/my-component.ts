import {Component} from '@angular/core'

@Component({
    selector:'app-my-component',
    standalone:true,
    templateUrl:'./my-component.html',
    styleUrl:'./my-component.ts'
})

export class myComponent{

    name:string='shubham';
}