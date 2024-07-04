import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { PostEntityModel } from "./models/IPost.model";

@Injectable({
    providedIn: "root"
})
export class AppService{
    constructor(private httpClient: HttpClient) { }

    private readonly $_posts = new Subject<PostEntityModel[]>();
    public readonly _posts$ = this.$_posts.asObservable();

    public getListPosts(){
        return this.httpClient.get<PostEntityModel[]>('https://jsonplaceholder.typicode.com/posts');
    }
}