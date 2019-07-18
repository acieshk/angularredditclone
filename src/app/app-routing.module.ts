import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './Listing/Listing.component';

const routes: Routes = [
  { path: '', component: ListingComponent},
  { path: 'thread/:id', component: ListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
