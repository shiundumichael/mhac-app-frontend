import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Ay_Gazoomba } from './songs';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {

  currentSong = Ay_Gazoomba;

  currentTime: number = 0;

  currentLyricLines: string[] = [];

  @ViewChild("audioElem") audioVC: { nativeElement: HTMLAudioElement};

  paused: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  toggleAudio() {
    if (this.paused) {
      this.audioVC.nativeElement.play();
      this.paused = false;
    } else {
      this.audioVC.nativeElement.pause();
      this.paused = true;
    }
  }

  onAudioTimeUpdate(elem: HTMLAudioElement) {
    var audioCurrentTimeSec = elem.currentTime;
    for (var lyric of this.currentSong.lyrics) {
      var startTimeSec: number = parseInt(lyric.startTimeMinute) * 60 + parseInt(lyric.startTimeSecond);
      var endTimeSec: number = parseInt(lyric.endTimeMinute) * 60 + parseInt(lyric.endTimeSecond);
      if (audioCurrentTimeSec >= startTimeSec && audioCurrentTimeSec <= endTimeSec) {
        this.currentLyricLines = lyric.lyric.split("\n");
      }
    }
  }

}
