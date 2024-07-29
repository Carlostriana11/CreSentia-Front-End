import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path:'home',
                title: 'Home',
                loadComponent: () => import('./dashboard/pages/home/home.component'),
            },
            {
                path:'products',
                title:'Products',
                loadComponent: () => import('./dashboard/pages/products/products.component'),
            },
            {
                path:'',redirectTo:'home', pathMatch:'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: 'dashboard',
        pathMatch:'full'
    }
];
