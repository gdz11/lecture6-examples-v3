import { Routes } from '@angular/router';
import { StaticExample } from './static-example/static-example';
import { ParamsExample } from './params-example/params-example';
import { PageNotFound } from './page-not-found/page-not-found';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: Dashboard },
    { path: 'static', component: StaticExample },
    { path: 'parameters-example/:id/sort/:order', component: ParamsExample, data: { mode: 'create'} },
    { path: 'parameters-example-edit/:id/sort/:order', component: ParamsExample, data: { mode: 'edit'} },
    { path: "**", component: PageNotFound }
];
