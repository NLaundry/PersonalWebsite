import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { FirebaseService } from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) {} 
  
  //create local array of Articles
  articles: Article[] = []; 
  
  readCollection() :  void {
    this.firebaseService.readArticles().then(items => {
      console.log(items);
      items.forEach(item => {
        console.log(item);
        // this.articles.push(new Article(item.Author, item.Title, item.Date.toDate(), item.Summary))
      })
      //this.articles = items.concat(this.articles);
    });
  }

  ngOnInit() {
    this.readCollection();
    //gotta be a better way of waiting for this to resolve
    setTimeout(() => {
      console.log(this.articles);
    }, 1000)
  }
  
}
