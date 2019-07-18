import { ActivatedRoute } from '@angular/router';
import { RedditAPI } from '../services/RedditAPI.service';
import { OnInit, Component } from '@angular/core';
import { Comment } from '../model/Comment'
@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  comments:Comment[] = []
  error:boolean = false;
  errorMessage = ""
  loading:boolean = false;
  constructor(public api:RedditAPI,
              private route: ActivatedRoute,) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params['id']);
      this.error = false;
      this.loading = true;
      this.api.getComments(params['id']).subscribe(
        (result)=>{
          this.loading = false;
          this.comments = [];
          result[1].data.children.forEach(cm=>{
            console.log(cm)
            this.comments.push(
            {
              body: cm.data.body,
              author: cm.data.author
            });
          })
        },
        (error)=> {
          this.error = true;
          this.errorMessage = error;
        }
      );
    });
  }

}
