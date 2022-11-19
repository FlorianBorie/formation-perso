import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            createdDate: new Date(),
            snaps: 0,
            location: 'Bordeaux'
        } ,
        {
            id: 2,
            title: 'Three rock mountain',
            description: 'Un endroit magnifqiue pour les radandonées !',
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
            createdDate: new Date(),
            snaps: 0,
            location: 'Toulouse'
        },
        {
            id: 3,
            title: 'Un bon repas',
            description: 'Hummmm! que c\'est bon',
            imageUrl: "https://cdn.radiofrance.fr/s3/cruiser-production/2015/09/81ba4279-42b5-454b-a1a8-47053fa7ee28/870x489_fotolia_55910119_subscription_monthly_m.jpg",
            createdDate: new Date(),
            snaps: 0,
        },
        {
            id: 4,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            createdDate: new Date(),
            snaps: 0,
            location: 'Bordeaux'
        } ,
        {
            id: 5,
            title: 'Three rock mountain',
            description: 'Un endroit magnifqiue pour les radandonées !',
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
            createdDate: new Date(),
            snaps: 0,
            location: 'Toulouse'
        },
        {
            id: 6,
            title: 'Un bon repas',
            description: 'Hummmm! que c\'est bon',
            imageUrl: "https://cdn.radiofrance.fr/s3/cruiser-production/2015/09/81ba4279-42b5-454b-a1a8-47053fa7ee28/870x489_fotolia_55910119_subscription_monthly_m.jpg",
            createdDate: new Date(),
            snaps: 0,
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: "snap" | "unsnap"): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}