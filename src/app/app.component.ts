import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { PostEntityModel } from './models/IPost.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit{

  constructor(private service: AppService){}

  title = 'unit-test';
  myProperty: boolean = false;

  _posts: PostEntityModel[] = [];

  ngOnInit(): void {
    this.onSubscribeGetListPost();
    this.handleGetListPost();
  }

  public handleGetListPost(): void{
    this.service.getListPosts();
  }

  public onSubscribeGetListPost(): void{
    this.service._posts$.subscribe(data=> this._posts = data);
  }
}
