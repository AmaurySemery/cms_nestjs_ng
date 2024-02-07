import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<any[]> | null = null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.articles$ = this.httpClient.get<any[]>('')
  }

}
