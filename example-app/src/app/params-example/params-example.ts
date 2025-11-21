import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params-example',
  imports: [JsonPipe],
  templateUrl: './params-example.html',
  styleUrl: './params-example.css',
})
export class ParamsExample implements OnInit {

  route = inject(ActivatedRoute);

  id?: number = undefined;
  order: string | null = null;
  page: number = 1;

  data: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(c => {
      this.id = +c.get('id')!;
      this.order = c.get('order');
    });

    this.route.queryParamMap.subscribe(c => {
      if (c.has('page')) {
        this.page = +c.get('page')!;
      }
    });

    this.route.data.subscribe(c => {
      this.data = c;
    });
  }

}
