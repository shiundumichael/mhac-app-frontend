import { Component, OnInit } from '@angular/core';
import { Ay_Gazoomba, oh_ram_sam_sam, Zum_Gali_Gali } from './songs';


@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {

  currentSong = oh_ram_sam_sam;

  currentTime: number = 0;

  currentLyricLines: string[] = [];

  constructor() {

  }

  ngOnInit(): void {
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
