import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'autonomos',
        children: [
          {
            path: '',
            loadChildren: '../autonomos/autonomos.module#AutonomosPageModule'
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: '../info/info.module#InfoPageModule'
          }
        ]
      },
      {
        path: 'auto01',
        children: [
          {
            path: '',
            loadChildren: '../auto01/auto01.module#Auto01PageModule'
          }
        ]
      },
      {
        path: 'auto02',
        children: [
          {
            path: '',
            loadChildren: '../auto02/auto02.module#Auto02PageModule'
          }
        ]
      },
      {
        path: 'auto03',
        children: [
          {
            path: '',
            loadChildren: '../auto03/auto03.module#Auto03PageModule'
          }
        ]
      },
      {
        path: 'auto04',
        children: [
          {
            path: '',
            loadChildren: '../auto04/auto04.module#Auto04PageModule'
          }
        ]
      },
      {
        path: 'auto05',
        children: [
          {
            path: '',
            loadChildren: '../auto05/auto05.module#Auto05PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
