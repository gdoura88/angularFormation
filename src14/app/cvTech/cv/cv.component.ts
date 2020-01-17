import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne : Personne;
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'mohamed', 'gdoura', 30, 'as.jpg', 0o61, 'developper'),
      new Personne(2, 'ayamen', 'gdoura', 31, 'as.jpg', 123, 'teacher')
    ]
  }
  selectPersonne(personne){
    this.selectedPersonne = personne;
  }

}
