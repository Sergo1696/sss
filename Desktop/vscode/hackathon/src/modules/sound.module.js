import { Module } from '../core/module';
import { random } from '../utils';

export class SoundModule extends Module {
  #sounds;

  constructor(type, text) {
    super(type, text);
    this.#sounds = [
      'https://lesfm.net/wp-content/uploads/2023/02/Mountain-road.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Sleep-my-love.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Valentine.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Pieces-of-Love.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/On-a-Date.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Productivity.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Miss-Summer.mp3',
      'https://lesfm.net/wp-content/uploads/2023/02/Time-for-Exercise.mp3',
      'https://lesfm.net/wp-content/uploads/2023/01/Strumming-on-the-guitar.mp3',
    ];
  }

  trigger() {
    const rnd = random(0, this.#sounds.length - 1);
    const audio = new Audio(this.#sounds[rnd]);

    audio.play();
    setTimeout(() => {
      audio.pause();
      audio.remove();
    }, 10 * 1000);
  }
}
