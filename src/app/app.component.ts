import {
  Component,
  ChangeDetectionStrategy,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  visible = false;
  private animationItem: AnimationItem;
  animationSpeed: number = 1;
  options: AnimationOptions = {
    path: '/assets/data.json',
    loop: false,
  };
  options2: AnimationOptions = {
    path: '/assets/data2.json',
    loop: true,
  };
  constructor(private ref: ChangeDetectorRef) {}
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  onLoopComplete(): void {
    this.visible = true;
    this.ref.detectChanges();
    NgZone.assertNotInAngularZone();
  }
}
