import { Component, OnInit } from '@angular/core';
import { RedditAPI } from '../services/RedditAPI.service';
import { Listing } from '../model/Listing';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  pageShow:number = 10;
  start:number = 0;
  end:number = 9;
  totalPage:number = 0;
  currentPage = 1;
  loading:boolean = true;
  listings:Listing[] = []
  error:boolean = false;
  errorMessage = ""
  constructor(public api:RedditAPI) {

  }
  ngOnInit(): void {
    this.error = false;
    this.api.getListing().subscribe(result=>{
      this.loading = false;
      result.data.children.forEach(l=>{
        console.log(l.data.id)
        this.listings.push(
          {
            title: l.data.title,
            selftext: l.data.selftext,
            id: l.data.id
          }
        );
      });
      this.totalPage = Math.floor(this.listings.length / this.pageShow) + 1;
      this.currentPage = 1;
      this.start = 0;
      this.end = 9;
    },
    (error)=> {
      this.error = true;
      this.errorMessage = error;
    }
    );
  }

  back(): void {
    this.start -= this.pageShow;
    this.end -= this.pageShow;
    this.currentPage--;
  }

  next(): void {
    this.start += this.pageShow;
    this.end += this.pageShow;
    this.currentPage++;
  }
}
