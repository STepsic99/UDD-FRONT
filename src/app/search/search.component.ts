import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

@Injectable({providedIn:'root'})
export class SearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  basicQuery:string = '';
  basicSearchResults:any = [];
  city:string = '';
  radius:number | undefined;
  geolocationSearchResults:any = [];

  ngOnInit(): void {
  }

  simpleSearch(){
    this.http.get('http://localhost:8080/api/applicants/basic-search?searchedText='+ this.basicQuery).subscribe(res => {
      console.log(res)
      this.basicSearchResults = res;
    });
  }

  geolocationSearch(){
    this.http.get('http://localhost:8080/api/applicants/geolocation-search?city='+this.city+'&radius='+ this.radius).subscribe(res => {
      console.log(res)
      this.geolocationSearchResults = res;
    });
  }
}
