import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap (
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      "https://cdn.radiofrance.fr/s3/cruiser-production/2015/09/81ba4279-42b5-454b-a1a8-47053fa7ee28/870x489_fotolia_55910119_subscription_monthly_m.jpg",
    ); 
    this.myOtherSnap = new FaceSnap (
      'Three rock mountain',
      'Un endroit magnifqiue pour les radandonées !',
      new Date(),
      0,
      "https://cdn.radiofrance.fr/s3/cruiser-production/2015/09/81ba4279-42b5-454b-a1a8-47053fa7ee28/870x489_fotolia_55910119_subscription_monthly_m.jpg",
    );
    this.myLastSnap = new FaceSnap (
      'Un bon repas',
      'Hummmm! que c\'est bon',
      new Date(),
      0,
      "https://cdn.radiofrance.fr/s3/cruiser-production/2015/09/81ba4279-42b5-454b-a1a8-47053fa7ee28/870x489_fotolia_55910119_subscription_monthly_m.jpg",
    );
  }
}
