import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CaseComponent } from './case/case.component';
import { HelpDetailComponent } from './help-detail/help-detail.component';


const routes: Routes = [
  { path: '', component: HelpDetailComponent},
  { path: 'cases', component: CaseComponent, canActivate: [AuthGuard]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
