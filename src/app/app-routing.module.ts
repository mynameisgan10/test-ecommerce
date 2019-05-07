import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'home/:b', loadChildren: './home/product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'google-login', loadChildren: './google-login/google-login.module#GoogleLoginPageModule' },
  { path: 'category/:a', loadChildren: './category/category-details/category-details.module#CategoryDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}