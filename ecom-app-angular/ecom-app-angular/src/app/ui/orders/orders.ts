import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  public orders : any;

  constructor(private http : HttpClient, private router : Router) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8084/api/orders").subscribe({
      next : orders => {
        this.orders = orders;
      },
      error : err => {
        console.log(err);
      }
    })
  }

  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/"+o.id);
  }
}
