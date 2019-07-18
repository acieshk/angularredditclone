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
  loading:boolean = true;
  listings:Listing[] = []
  constructor(public api:RedditAPI) {

  }
  ngOnInit(): void {
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
    });
  }
  back(): void {
    this.start -= this.pageShow;
    this.end -= this.pageShow;
  }
  next(): void {
    this.start += this.pageShow;
    this.end += this.pageShow;
  }
}
