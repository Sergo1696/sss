import { Module } from '../core/module';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const newBackGroundColor = '#' + Math.random().toString(16).substring(2, 8).toUpperCase();
    document.body.style.backgroundColor = newBackGroundColor;
    setTimeout(() => (document.body.style.backgroundColor = '#eee'), 3 * 1000);
  }
}
