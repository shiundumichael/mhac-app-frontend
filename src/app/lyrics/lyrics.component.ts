import { Component, OnInit, ViewChild } from '@angular/core';
import { Ay_Gazoomba, Oh_Ram_Sam_Sam, Zum_Gali_Gali, Baba_La_Gumbala, Bella_Mama } from './songs';
import { Ay_Ga_Zoomba_Instructions } from './songs/ay_ga_zoomba_with_instructions';
import { Song, Zum_Gali_Gali_Instructions } from './songs/zum_gali_gali_with_instructions';


@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {

  currentSong: Song = Zum_Gali_Gali_Instructions;

  currentTime: number = 0;

  lyricLinesInstructions: string[] = [];
  lyricLinesPerson1: string[] = [];
  lyricLinesPerson2: string[] = [];

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
        if (lyric.isInstructions.trim().toLowerCase() === "true") {
          this.lyricLinesInstructions = lyric.lyric.split("\n");
        } else
        if (lyric.person === "2") {
          this.lyricLinesPerson2 = lyric.lyric.split("\n");
        } else {
          this.lyricLinesPerson1 = lyric.lyric.split("\n");
        }
      }
    }
  }

}
