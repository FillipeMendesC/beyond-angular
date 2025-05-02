import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent() {
            return import("./home/home.component").then(
                m => m.HomeComponent
            )
        },
        
    },
    {
        path: 'tendencias',
        pathMatch: 'full',
        loadComponent() {
            return import("./tendencias/tendencias.component").then(
                m => m.TendenciasComponent
            )
        },
        
    },
    {
        path: 'organizacao',
        pathMatch: 'full',
        loadComponent() {
            return import("./organizacao/organizacao.component").then(
                m => m.OrganizacaoComponent
            )
        },
    }
];
