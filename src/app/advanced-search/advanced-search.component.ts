import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})

@Injectable({providedIn:'root'})
export class AdvancedSearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  searchedRequests:any = [{id:1, fieldName:'name',value:'' , operator:'AND', phrased:false}];
  cnt:number=1
  advancedSearchResults:any = [];

  ngOnInit(): void {
  }

  removeRequest(r: any){
    for (var i = 0; i < this.searchedRequests.length; i++) {
      if (this.searchedRequests[i].id == r.id) {
        this.searchedRequests.splice(i, 1);
        break;
      }
    }
  }

  addRequest(){
    this.cnt++;
    this.searchedRequests.push({id:this.cnt, fieldName:'name',value:'' , operator:'AND', phrased:false})
  }

  advancedSearch(){
    this.http.post('http://localhost:8080/api/applicants/advanced-search',this.searchedRequests).subscribe(res => {
      console.log(res)
      this.advancedSearchResults = res;
    });
  }
}
