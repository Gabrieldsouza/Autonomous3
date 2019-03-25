import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'autonomos', loadChildren: './autonomos/autonomos.module#AutonomosPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'auto01', loadChildren: './auto01/auto01.module#Auto01PageModule' },
  { path: 'auto02', loadChildren: './auto02/auto02.module#Auto02PageModule' },
  { path: 'auto03', loadChildren: './auto03/auto03.module#Auto03PageModule' },
  { path: 'auto04', loadChildren: './auto04/auto04.module#Auto04PageModule' },
  { path: 'auto05', loadChildren: './auto05/auto05.module#Auto05PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
