import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  observable = new Observable((subscriber) => {
    subscriber.next(0);
    setInterval(() => {
      subscriber.next(1);
      subscriber.next(2);
    }, 1000);
    setTimeout(() => {
      subscriber.next(3);
    }, 1000);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 2000);
  });


  that() {
    console.log('just before subscribe');
    this.observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');
  }
}
