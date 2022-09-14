import { Component, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  anim: any;
  animationSpeed: number = 1;
  options: AnimationOptions = {
    path: '/assets/data.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    this.anim = animationItem;
  }

  onLoopComplete(): void {
    NgZone.assertNotInAngularZone();
    console.log(NgZone.isInAngularZone()); // false
    this.anim.stop();
  }
}
