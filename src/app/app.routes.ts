import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./components/template-driven/template-driven.component').then((m)=>m.TemplateDrivenComponent)},
    {path:'ReactiveForms',loadComponent:()=>import('./components/reactive-forms/reactive-forms.component').then((m)=>m.ReactiveFormsComponent)}
];



