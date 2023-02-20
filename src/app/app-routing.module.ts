import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SearchComponent } from './search/search.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path: '', component:SearchComponent},
  {path: 'advanced', component:AdvancedSearchComponent},
  {path: 'statistics', component:StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
