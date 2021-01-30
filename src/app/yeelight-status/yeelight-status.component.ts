import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { YeelightStatusModel } from './yeelight-status.model';

@Component({
  selector: 'app-yeelight-status',
  templateUrl: './yeelight-status.component.html',
  styleUrls: ['./yeelight-status.component.less'],
})
export class YeelightStatusComponent implements OnInit {
  status$: Observable<YeelightStatusModel>;
  toggleFront$ = new Subject();
  toggleBack$ = new Subject();
  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private httpService: HttpClient) {
    this.status$ = this.httpService.get<YeelightStatusModel>(
      'https://localhost:5001/Status',
      this.optionRequete
    );
  }

  ngOnInit(): void {
    combineLatest([this.status$, this.toggleFront$])
      .pipe(
        switchMap(([status]) => {
          const method = status.params.power ? 'PowerOff' : 'PowerOn';
          return this.httpService.get<YeelightStatusModel>(
            `https://localhost:5001/${method}`,
            this.optionRequete
          );
        })
      )
      .subscribe();
  }
}
