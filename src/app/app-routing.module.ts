import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BirdsComponent } from './pages/birds/birds.component';
import { BirdDetailComponent } from './pages/bird-detail/bird-detail.component';
import { FeedConsumptionComponent } from './pages/feed-consumption/feed-consumption.component';
import { WaterIntakeComponent } from './pages/water-intake/water-intake.component';
import { HealthRecordComponent } from './pages/health-record/health-record.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { LoginComponent } from './pages/login/login.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { EnvironmentalConditionComponent } from './pages/environmental-condition/environmental-condition.component';
import { GrowthMeasurementComponent } from './pages/growth-measurement/growth-measurement.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
      {
        path: '',
        component: NavbarComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect '/navbar' to '/navbar/dashboard'
          { path: 'dashboard', component: DashboardComponent },
          { path: 'birds', component: BirdsComponent },
          { path: 'detail', component: BirdDetailComponent },
          { path: 'feed-consumption', component: FeedConsumptionComponent },
          { path: 'water-intake', component: WaterIntakeComponent },
          { path: 'environmental-condition', component: EnvironmentalConditionComponent },
          { path: 'health-record', component: HealthRecordComponent },
          { path: 'growth-measurement', component: GrowthMeasurementComponent },
          { path: 'analytics', component: AnalyticsComponent },
          { path: 'expenses', component: ExpensesComponent },
          { path: 'reports', component: ReportsComponent },
        ],
      },
    ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
