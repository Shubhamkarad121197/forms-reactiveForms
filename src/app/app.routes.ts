import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./components/template-driven/template-driven.component').then((m)=>m.TemplateDrivenComponent)},
    {path:'ReactiveForms',loadComponent:()=>import('./components/reactive-forms/reactive-forms.component').then((m)=>m.ReactiveFormsComponent)},
    {path:'myComponent',loadComponent:()=>import('./components/my-component/my-component').then((m)=>m.myComponent) },
    {path:'myServiceCall',loadComponent:()=>import('./components/serviceCall/serviceCall').then((m)=>m.ServiceCallComponent)}
];



