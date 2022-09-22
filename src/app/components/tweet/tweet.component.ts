import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/service/tweet.service';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor(private tweet: TweetService) { }
  get: any;
  ngOnInit() {
    this.tweet.getAllTweets().subscribe(
      (response) => {
        this.get = response;
        // console.log(response);
        // console.log(JSON.stringify(this.get));
      },
      (error) => { console.log(error); });
  }

}
