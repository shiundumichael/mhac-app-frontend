import { Component, OnInit } from '@angular/core';
import { songList } from '../lyrics/songs/song-list';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songList = songList;

  constructor() { }

  ngOnInit(): void {
  }

}
