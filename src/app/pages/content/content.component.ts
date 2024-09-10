import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = 'https://miro.medium.com/v2/resize:fit:1200/1*tZZ3MQW4lYa3WwiPYxiUkA.png'
  contentTitle:string = 'Saiu a nova versão do Angular'
  contentDescription = 'Uma nova versão do Angular cheia de novidades acaba de chegar, venha conferir.'

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))
    )
  }

}
