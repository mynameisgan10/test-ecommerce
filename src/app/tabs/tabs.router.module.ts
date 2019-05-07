import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },  
      {
        path: 'home', // Product Page 
        children: [
          {
            path: '',
            loadChildren: '../home/home.module'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule' 
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: '../tab5/tab5.module#Tab5PageModule'
          }
        ]
      }, 
      {
        path: 'payment',
        children: [
          {
            path: '',
            loadChildren: '../payment/payment.module#PaymentPageModule'
          }
        ]
      },
      {
        path: 'google-login',
        children: [
          {
            path: '',
            loadChildren: '../google-login/google-login.module#GoogleLoginPageModule'
          }
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            loadChildren: '../category/category.module#CategoryPageModule' 
          }
        ]
      },
      {
        path: 'category/:a',
        children: [
          {
            path: '',
            loadChildren: '../category/category-details/category-details.module#CategoryDetailsPageModule' 
          }
        ]
      },
      {
        path: 'home/:b',
        children: [
          {
            path: '',
            loadChildren: '../home/product-details/product-details.module#ProductDetailsPageModule'
          }
        ]
      },
      { 
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
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