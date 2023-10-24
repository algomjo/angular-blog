import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	photoCover: string = "https://img.olhardigital.com.br/wp-content/uploads/2023/03/Star-Wars.jpg"
	contentTitle:string ="MINHA NOTÍCIA"
	contentDescription:string = "Olá Mundo!"

constructor(
	private route:ActivatedRoute
) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe (value =>
			console.log(value.get("Id"))
		)
	}

}
