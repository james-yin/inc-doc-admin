import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocDetailComponent } from './doc-detail/doc-detail.component';

const appRoutes: Routes = [
  {
    path: 'docs/:id',
    component: DocDetailComponent
  },
  {
    path: 'docs',
    component: DocListComponent,
    data: { title: 'Inh Docs List' }
  },
  { path: '', redirectTo: '/docs', pathMatch: 'full' },
  { path: '**', redirectTo: '/docs' }
];

@NgModule({
  declarations: [AppComponent, DocListComponent, DocDetailComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
