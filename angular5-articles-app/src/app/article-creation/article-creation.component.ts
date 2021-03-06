import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ArticleService} from "../services/article.service";
import {CreatedArticle} from "../models/createdArticle";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  constructor(private fb: FormBuilder, private articleService : ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

  createArticle(){
    const formModel = this.articleForm.value;
    const newArticle : CreatedArticle = {
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    }
    this.articleService.add(newArticle).subscribe();
  }
}
