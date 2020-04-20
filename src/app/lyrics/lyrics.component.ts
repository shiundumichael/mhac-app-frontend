import { Component, OnInit, ViewChild } from '@angular/core';
import { Ay_Gazoomba, Oh_Ram_Sam_Sam, Zum_Gali_Gali, Baba_La_Gumbala, Bella_Mama } from './songs';
import { Ay_Ga_Zoomba_Instructions } from './songs/ay_ga_zoomba_with_instructions';
import { Baba_La_Gumbala_Instructions } from './songs/baba_la_gumbala_instructions';


@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {

  currentSong = Baba_La_Gumbala_Instructions;

  currentTime: number = 0;

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
      var startTimeSec: number = parseFloat(lyric.startTimeMinute) * 60 + parseInt(lyric.startTimeSecond);
      var endTimeSec: number = parseFloat(lyric.endTimeMinute) * 60 + parseInt(lyric.endTimeSecond);
      if (audioCurrentTimeSec >= startTimeSec && audioCurrentTimeSec <= endTimeSec) {
        if (lyric.person.trim() === "2") {
          this.lyricLinesPerson2 = lyric.lyric.split("\n");
        } else {
          this.lyricLinesPerson1 = lyric.lyric.split("\n");
        }
      }
    }
  }

}
