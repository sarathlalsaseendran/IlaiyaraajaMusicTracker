export class Movie {
    FilmID: number;
    Language: string;
    Film: string;
    Director: string;
    Year: number;
    Songs: Array<Song>;
}

export class Song{
    Name: string;
    Singers: string;
    Lyricists:string;
    YoutubeLink: string;
}