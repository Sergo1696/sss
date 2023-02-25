import { Module } from '../core/module';
import { createVideo } from '../utils';

export class VideoModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    createVideo();
  }
}
