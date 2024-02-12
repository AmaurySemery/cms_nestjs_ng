import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)},
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];
