import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/service/tweet.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.css']
})
export class MyTweetsComponent implements OnInit {
  get: any
  del!: String
  tweetExist: boolean = false;
  message: String = "No tweet found";
  isTweetDeleted: boolean = false;

  constructor(private tweetService: TweetService, private router: Router) { }

  ngOnInit(): void {
    this.tweetService.getUserTweet().subscribe(
      (response) => {
        this.get = response;
        console.log(this.get);
        if (this.get === undefined) {
          this.tweetExist = true;
          this.message = "No tweet found"
        }
      },
      // (response) => { console.log(response); },
      (error) => {
        console.log(error);
        this.get = error;
        if (this.get.statusCode === 500)
          this.message = "No tweet found"
      });
  }
  delete(del: String) {
    this.tweetService.deleteTweet(del).subscribe(
      (response) => {
        this.get = response;
        if (this.get.statusCode = 200) {
          this.isTweetDeleted = true;
          setTimeout(() => {
            this.router.navigate(["/post"]);
            this.isTweetDeleted = false;
          }, 3000);
        }
      },
      // (response) => { console.log(response); },
      (error) => { console.log(error); });


  }

  getTweetPostedDateTime(date: Date) {
    if (date != null) {
      return moment(date).fromNow();
    }
    return null;
  }
}
