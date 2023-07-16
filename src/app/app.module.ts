import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirdsComponent } from './pages/birds/birds.component';
import { EnvironmentalConditionComponent } from './pages/environmental-condition/environmental-condition.component';
import { BirdsListComponent } from './pages/birds-list/birds-list.component';
import { BirdDetailComponent } from './pages/bird-detail/bird-detail.component';
import { BirdUpdateComponent } from './pages/bird-update/bird-update.component';
// import { BirdDeleteComponent } from './pages/bird-delete/bird-delete.component';
import { BirdSearchComponent } from './pages/bird-search/bird-search.component';
import { FeedConsumptionComponent } from './pages/feed-consumption/feed-consumption.component';
import { WaterIntakeComponent } from './pages/water-intake/water-intake.component';
import { HealthRecordComponent } from './pages/health-record/health-record.component';
import { HealthRecordListComponent } from './pages/health-record-list/health-record-list.component';
import { HealthRecordDetailsComponent } from './pages/health-record-details/health-record-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { GrowthMeasurementComponent } from './pages/growth-measurement/growth-measurement.component';
import { MortalityComponent } from './pages/mortality/mortality.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdsComponent,
    EnvironmentalConditionComponent,
    BirdsListComponent,
    BirdDetailComponent,
    BirdUpdateComponent,
    // BirdDeleteComponent,
    BirdSearchComponent,
    FeedConsumptionComponent,
    WaterIntakeComponent,
    HealthRecordComponent,
    HealthRecordListComponent,
    HealthRecordDetailsComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    AnalyticsComponent,
    ReportsComponent,
    ExpensesComponent,
    GrowthMeasurementComponent,
    MortalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatIconModule ,
    MatOptionModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Time duration for the toastr message to display
      positionClass: 'toast-top-right', // Position of the toastr message
      preventDuplicates: true, // Prevent duplicate messages
      progressBar: true, // Show progress bar
      closeButton: true, // Show close button
      enableHtml: true, // Enable HTML content in the message
      toastClass: 'toast', // CSS class for the toastr message
      titleClass: 'toast-title', // CSS class for the toastr title
      messageClass: 'toast-message', // CSS class for the toastr message content
      tapToDismiss: false, // Disable auto-dismiss on click
      extendedTimeOut: 2000, // Additional time duration for the toastr message
      toastComponent: BirdsComponent, // Your custom component for the toastr message
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
