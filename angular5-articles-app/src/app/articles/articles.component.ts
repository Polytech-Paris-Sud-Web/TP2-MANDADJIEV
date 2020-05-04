import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles : Article[];

  constructor(private articleService: ArticleService) {
  }

  getAllArticles(){
    this.articleService.getAll().subscribe((articles) =>{
      this.articles = articles
    });
  }

  ngOnInit() {
    this.getAllArticles();
  }

  delete(article: Article){
    this.articleService.delete(article.id).subscribe(()=>{
      this.getAllArticles()
    });
  }

  newArticle(article: Article){
    this.getAllArticles();
  }

  searchArticles(search: string){
    this.articleService.getArticles(search).subscribe((articles: Article[])=>{
      this.articles = articles;
    })
  }
}
