import {AppRoutingModule, routingComponents} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatIconModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderComponent} from './components/header/header.component';
import {PartsServiceComponent} from './components/parts-service/parts-service.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    PartsServiceComponent,
    AboutUsComponent,
    LoginComponent,
    BookServiceComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  exports: [
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatIconModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
