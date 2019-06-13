import { Component, OnInit } from '@angular/core';
import { Oferta } from './oferta';

@Component({
  selector: 'app-cmp-ofertas-trabajo',
  templateUrl: './cmp-ofertas-trabajo.component.html',
  styleUrls: ['./cmp-ofertas-trabajo.component.css']
})
export class CmpOfertasTrabajoComponent implements OnInit {

  ofertas: Array<Oferta> = [
    new Oferta(23, 'Full Stack Backend Developer en Madrid', 'We are currently looking for a full stack backend developer to join our talented tech team.', 'https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/1/4/3/1434_100_100_original.png', true),
    new Oferta(99, 'Fullstack Developer en Madrid', 'Our stack and requirements are complex. In particular, our engineering team must combine specialists such as frontend, backend or data engineers with more flexible developers. We know "full-stack" is a controversial term, we simply mean people who like developing new features or fixing bugs from top to bottom, from the user interface down to the database or beyond.', 'https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/2/1/9/2194_100_100.jpeg'),
    new Oferta(13, 'Internationalization Software Engineer en Madrid', 'Electronic Arts Inc. is a leading global interactive entertainment software company. EA delivers games, content and online services for Internet-connected consoles, personal computers, mobile phones and tablets.', 'https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/2/9/3/2931_180_88.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

  cambiarInscrito(event) {
    console.log('Se ha inscrito');
    let ofertaInsc = this.ofertas.find(oferta => oferta.id == event);
    ofertaInsc.inscrito = !ofertaInsc.inscrito;
  }

}
