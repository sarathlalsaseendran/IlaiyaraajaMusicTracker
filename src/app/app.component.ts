import { Component, OnInit } from '@angular/core';
import { Movie, Song } from './models';
import { DataService } from './data.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IlaiyaraajaMusicTracker';

  safeSrc: SafeResourceUrl;

  selectedLanguage: string;
  selectedDirector: string;
  selectedYear: string;
  selectedMovie: string;
  selectedSong: string;
  selectedMovieLanguage: string;
  selectedSingers: string;

  All: string;

  groupedLanguages: any;
  groupedDirectors: any;
  groupedYears: any;

  movies: Array<Movie>;
  selectedMovies: Array<Movie>;

  selectedSongs: Array<Song>;

  constructor(private service: DataService, private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.service.getMovies();
    this.selectedMovies = this.movies;
    this.selectedLanguage = undefined;
    this.selectedDirector = undefined;
    this.selectedYear = undefined;

    this.groupedLanguages = this.movies.reduce((p, c) => {
      var name = c.Language;
      if (!p.hasOwnProperty(name)) {
        p[name] = 0;
      }
      p[name]++;
      return p;
    }, {});

    this.groupedDirectors = this.movies.reduce((p, c) => {
      var name = c.Director;
      if (!p.hasOwnProperty(name)) {
        p[name] = 0;
      }
      p[name]++;
      return p;
    }, {});

    this.groupedYears = this.movies.reduce((p, c) => {
      var name = c.Year;
      if (!p.hasOwnProperty(name)) {
        p[name] = 0;
      }
      p[name]++;
      return p;
    }, {});

  }

  onLanguageSelected() {
    this.safeSrc = '';
    this.selectedSong = undefined;
    this.selectedSongs = undefined;
    this.selectedDirector = undefined;
    this.selectedYear = undefined;
    if (this.selectedLanguage != "undefined") {
      this.selectedMovies = this.movies.filter(x => x.Language == this.selectedLanguage);
    }
    else {
      this.selectedMovies = this.movies;
    }

  }

  onDirectorSelected() {
    this.safeSrc = '';
    this.selectedSong = undefined;
    this.selectedSongs = undefined;
    this.selectedLanguage = undefined;
    this.selectedYear = undefined;
    if (this.selectedDirector != "undefined") {
      this.selectedMovies = this.movies.filter(x => x.Director == this.selectedDirector);
    }
    else {
      this.selectedMovies = this.movies;
    }
  }

  onYearSelected() {
    this.safeSrc = '';
    this.selectedSong = undefined;
    this.selectedSongs = undefined;
    this.selectedLanguage = undefined;
    this.selectedDirector = undefined;
    if (this.selectedYear != "undefined") {
      this.selectedMovies = this.movies.filter(x => x.Year == +this.selectedYear);
    }
    else {
      this.selectedMovies = this.movies;
    }
  }

  selectSongs(filmID: number) {
    this.safeSrc = '';
    this.selectedSong = undefined;
    this.selectedSingers = undefined;
    let movie = this.movies.find(x => x.FilmID == filmID);
    this.selectedSongs = movie.Songs;
    this.selectedMovie = movie.Film;
    this.selectedMovieLanguage = movie.Language;
  }

  playYoutube(youtubeLink: string, songName: string, singers: string) {
    this.selectedSong = songName;
    this.selectedSingers = singers;
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youtubeLink}?autoplay=1`)
  }
}
