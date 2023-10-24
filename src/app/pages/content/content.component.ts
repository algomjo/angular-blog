import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	photoCover: string = "https://img.olhardigital.com.br/wp-content/uploads/2023/03/Star-Wars.jpg"
	contentTitle:string ="MINHA NOTÍCIA"
	contentDescription:string = "Olá Mundo!"

constructor() {}

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

}
