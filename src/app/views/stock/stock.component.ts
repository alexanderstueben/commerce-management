import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../../services/article/article.service';
import { Article } from '../../types/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  articles$!: Observable<Article[]>
  edited = false;
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
  }
}
