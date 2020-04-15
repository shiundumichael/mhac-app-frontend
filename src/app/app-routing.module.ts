import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HandWashingComponent } from './hand-washing/hand-washing.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { LyricsComponent } from './lyrics/lyrics.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'hand-washing',
    component: HandWashingComponent
  },
  {
    path: 'scan-qr',
    component: ScanQrComponent
  },
  {
    path: 'lyrics',
    component: LyricsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
