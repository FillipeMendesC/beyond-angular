import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent() {
            return import('./home/home.component').then(
                m => m.HomeComponent
            )
        },
    },
    {
        path: 'historico',
        pathMatch: 'full',
        loadComponent() {
            return import('./painel-de-controle-historico/painel-de-controle-historico.component').then(
                m => m.PainelDeControleHistoricoComponent
            );
        },
    }
   
];


  

