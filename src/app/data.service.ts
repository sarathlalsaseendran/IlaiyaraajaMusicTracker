import { Injectable } from '@angular/core';
import { Movie } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private movies: Array<Movie> = [
    {
      "FilmID": 1,
      "Language": "Tamil",
      "Film": "Annakkili",
      "Director": "Devaraj Mohan",
      "Year": 1976,
      "Songs": [{ "Name": "Annakili Unnai", "Singers": "S. Janaki", "Lyricists": "Larry Grossman, Buz Kohan", "YoutubeLink": "NnCge4x-df0" },
      { "Name": "Machaana Pathingala", "Singers": "S. Janaki", "Lyricists": "Larry Grossman, Buz Kohan", "YoutubeLink": "GxC6yUK2tro" },
      { "Name": "Muththu Muththa Adi Raakayee", "Singers": "S. Janaki", "Lyricists": "Panchu Arunachalam", "YoutubeLink": "UPQ5oH1vao4" },
      { "Name": "Annakili Unnai", "Singers": "T. M. Soundararajan", "Lyricists": "Larry Grossman, Buz Kohan", "YoutubeLink": "cLk4Rv3yDHc" },
      { "Name": "Sontham Illai", "Singers": "P. Susheela", "Lyricists": "", "YoutubeLink": "ZGKC65dMmMo" }
      ]
    },
    {
      "FilmID": 2,
      "Language": "Tamil",
      "Film": "Paalooti Valartha Kili",
      "Director": "Devaraj Mohan",
      "Year": 1976,
      "Songs": [
        { "Name": "Naan Pesa Vanthen", "Singers": "S. Janaki, S. P. Balasubrahmanyam", "Lyricists": "", "YoutubeLink": "9ZNJncW2220" },
        { "Name": "Kola Kolaya Mundhirika", "Singers": "S. Janaki", "Lyricists": "", "YoutubeLink": "ylfCsR4GMx4" },
        { "Name": "Ettuvagai Thirumangalamum", "Singers": "S. P. Balasubrahmanyam, P. Susheela", "Lyricists": "", "YoutubeLink": "YYWup41EAz8" }
      ]
    },
    {
      "FilmID": 3,
      "Language": "Tamil",
      "Film": "Uravadum Nenjam",
      "Director": "Devaraj Mohan",
      "Year": 1976,
      "Songs": [
        { "Name": "Oru Naal Unnodu Oru Naal", "Singers": "S. P. Balasubrahmanyam, S. Janaki", "Lyricists": "", "YoutubeLink": "mMSvrjeC-yo" },
        { "Name": "Nenachethellaam Nadakkapora", "Singers": "S. P. Balasubrahmanyam, S. Janaki", "Lyricists": "", "YoutubeLink": "Lmlts-6Ozbk" },
        { "Name": "Dear Uncle", "Singers": "Malaysia Vasudevan", "Lyricists": "Panju Arunachalam", "YoutubeLink": "SolE9XuBPhE" }
      ]
    },
    {
      "FilmID": 4,
      "Language": "Tamil",
      "Film": "Bhadrakali",
      "Director": "A. C. Tirulokchandar",
      "Year": 1976,
      "Songs": [
        { "Name": "Kannan Oru Kai Kulanthai", "Singers": "K J Jesudas, P Susheela", "Lyricists": "", "YoutubeLink": "_GNXi6UgZEo" },
        { "Name": "Oththa Rooba", "Singers": "Malaysia Vasudevan, S Janaki", "Lyricists": "", "YoutubeLink": "hQg5qIFNXrw" },
        { "Name": "Kettele Ange", "Singers": "P Susheela, Gayatri", "Lyricists": "", "YoutubeLink": "xQOm58V0cpM" },
        { "Name": "Anandha Bhairavi", "Singers": "M.R Vijaya", "Lyricists": "", "YoutubeLink": "d7AT4GOLjnA" },
        { "Name": "Odugindraal", "Singers": "Sirkazhi Govindarajan", "Lyricists": "", "YoutubeLink": "kjkKYmlGKB4" }
      ]
    },
    {
      "FilmID": 5,
      "Language": "Tamil",
      "Film": "Dheepam",
      "Director": "K. Vijayan",
      "Year": 1977,
      "Songs": [
        { "Name": "Poovizhi vasalil yaradi vanthathu", "Singers": "K J Jesudas, S Janaki", "Lyricists": "", "YoutubeLink": "sXJNLCfsPAs" },
        { "Name": "Anthapurathil Oru Maharani", "Singers": "T. M. Soundararajan, S Janaki", "Lyricists": "", "YoutubeLink": "qrV_3zrCjg8" },
        { "Name": "Pesaathe ", "Singers": "T. M. Soundararajan", "Lyricists": "", "YoutubeLink": "uwbc6Guc25A" },
        { "Name": "Raja Yuvaraja", "Singers": "T. M. Soundararajan", "Lyricists": "", "YoutubeLink": "McsBBIf2dIw" }
      ]
    },
    {
      "FilmID": 6,
      "Language": "Tamil",
      "Film": "Aalukku Oru Aasai",
      "Director": "S.P. Muthuraman",
      "Year": 1977,
      "Songs": [
        { "Name": "Idhaya Mazhayil Naneitha Kiligal", "Singers": "K J Jesudas, P Susheela", "Lyricists": "", "YoutubeLink": "Uvyswt4UNGQ" },
        { "Name": "Kanakku Partthu", "Singers": "T. M. Soundararajan", "Lyricists": "", "YoutubeLink": "D6nc_IqCYaA" },
        { "Name": "Manjal Araikkum", "Singers": "Vani Jayaram", "Lyricists": "", "YoutubeLink": "qPo56oOmoYU" },
        { "Name": "Vazhvennum Sorgathil", "Singers": "S Janaki", "Lyricists": "", "YoutubeLink": "JJd5VemRUPM" }
      ]
    },
    {
      "FilmID": 7,
      "Language": "Tamil",
      "Film": "Avar Enakke Sontham",
      "Director": "Pattu",
      "Year": 1977,
      "Songs": [
        { "Name": "Devan Thiruchabai Malar Ithu", "Singers": "K J Jesudas", "Lyricists": "", "YoutubeLink": "iTMfK2nijBQ" },
        { "Name": "Devan Thiruchabai Malargale", "Singers": "Poorani, Indhira", "Lyricists": "", "YoutubeLink": "VTFSe7kqZME" },
        { "Name": "Kuthiraiyilee Naan", "Singers": "T. M. Soundararajan", "Lyricists": "", "YoutubeLink": "7s4przPf5_s" },
        { "Name": "Oru Veedu Iru Ullam", "Singers": "S. P. Balasubrahmanyam", "Lyricists": "", "YoutubeLink": "mODVjlLNFxs" },
        { "Name": "Surangani Surangani", "Singers": "Malaysia Vasudevan, Renuka", "Lyricists": "", "YoutubeLink": "AD4-DclIxWc" },
        { "Name": "Thaenil Aadum Roja", "Singers": "P Susheela", "Lyricists": "", "YoutubeLink": "aqE1VeSvfCw" }
      ]
    },
    {
      "FilmID": 8,
      "Language": "Telugu",
      "Film": "Bhadrakali",
      "Director": "A. C. Tirulokchandar",
      "Year": 1977,
      "Songs": [
        { "Name": "Chinni Chinni Kannaya", "Singers": "K J Jesudas, P Susheela", "Lyricists": "", "YoutubeLink": "h9orT_4wNvI" },
        { "Name": "Adigaave Akkada", "Singers": "P Susheela", "Lyricists": "", "YoutubeLink": "FMrbWp5bLo4" }
      ]
    },
    {
      "FilmID": 9,
      "Language": "Tamil",
      "Film": "Kavikkuyil",
      "Director": "Devaraj Mohan",
      "Year": 1977,
      "Songs": [
        { "Name": "Aayiram Kodi", "Singers": "Balamurali Krishna", "Lyricists": "", "YoutubeLink": "AuuzqjSZ8dI" },
        { "Name": "Chinna kannan azhaikiran", "Singers": "Balamurali Krishna", "Lyricists": "", "YoutubeLink": "tOdhWd5ZF2g" },
        { "Name": "Chinna kannan azhaikiran", "Singers": "S Janaki", "Lyricists": "", "YoutubeLink": "ch0HoisMS8g" },
        { "Name": "Kadhal Oviyam", "Singers": "Sujatha Mohan", "Lyricists": "", "YoutubeLink": "HfhEsKy9Tok" },
        { "Name": "Kuyile Kavikuyile", "Singers": "S Janaki", "Lyricists": "", "YoutubeLink": "w24ilXwGfWM" },
        { "Name": "Maanodum Padhaiyile", "Singers": "P Susheela", "Lyricists": "", "YoutubeLink": "DFZwlhVE3Rw" },
        { "Name": "Udhayam Varugindradhe", "Singers": "G. K. Venkatesh, S Janaki", "Lyricists": "", "YoutubeLink": "fdkhx8W7gM0" }
      ]
    },
    {
      "FilmID": 10,
      "Language": "Tamil",
      "Film": "Thunai Iruppal Meenakshi",
      "Director": "Valampuri Somanathan",
      "Year": 1977,
      "Songs": [
        { "Name": "Ammammaa Pasikkudhammaa", "Singers": "B.S Sasirekha, Poornima", "Lyricists": "", "YoutubeLink": "ZRgEh_Yiehc" },
        { "Name": "Saetril Oru Sengazhani ", "Singers": "T. M. Soundararajan, S Janaki", "Lyricists": "", "YoutubeLink": "8oadFh7qoio" },
        { "Name": "Sugamo Aayiram", "Singers": "P Susheela", "Lyricists": "", "YoutubeLink": "mg_zdfLY8q4" },
        { "Name": "Thaai Avalin", "Singers": "Ilaiyaraaja, Kovai Soundararajan, S. P. Sailaja", "Lyricists": "", "YoutubeLink": "" },
        { "Name": "Thanga Thamarai Thiruve", "Singers": "P Susheela", "Lyricists": "", "YoutubeLink": "" },
        { "Name": "Unmaiikke Pirappeduthaen", "Singers": "Malaysia Vasudevan, Poornima", "Lyricists": "", "YoutubeLink": "apVwnRHYZWo" },
        { "Name": "Vaarthai Illamal", "Singers": "P Susheela", "Lyricists": "", "YoutubeLink": "fxVlpVzwuOo" },
      ]
    },
    {
      "FilmID": 11,
      "Language": "Tamil",
      "Film": "Penn Jenmam",
      "Director": "A. C. Tirulokchandar",
      "Year": 1977,
      "Songs": [
        { "Name": "Oru Kovilil", "Singers": "P Susheela", "Lyricists": "", "YoutubeLink": "NzEDhUvja1o" },
        { "Name": "Oi Mama", "Singers": "S. P. Balasubrahmanyam, S Janaki", "Lyricists": "", "YoutubeLink": "X2csdZ9ZuGA" },
        { "Name": "Vanna Karunkuzhal", "Singers": "P Susheela", "Lyricists": "", "YoutubeLink": "5PVExRQqMn0" },
        { "Name": "Chella Pillai Saravanan", "Singers": "P. Jayachandhiran, P Susheela", "Lyricists": "", "YoutubeLink": "0xNs004UZ7c" }
      ]
    },
    {
      "FilmID": 12,
      "Language": "Tamil",
      "Film": "Bhuvana Oru Kelvi Kuri",
      "Director": "S. P. Muthuraman",
      "Year": 1977,
      "Songs": [
        { "Name": "Poo Thendrale", "Singers": "P. Jayachandhiran, Vani Jayaram", "Lyricists": "", "YoutubeLink": "loqY62gqMeo" },
        { "Name": "Raja Enbar", "Singers": "S. P. Balasubrahmanyam, S Janaki", "Lyricists": "", "YoutubeLink": "aoBCEV-faes" },
        { "Name": "Viliyile Malarnthathu", "Singers": "S. P. Balasubrahmanyam", "Lyricists": "", "YoutubeLink": "6KrG9aDqt3E" }
      ]
    },
    {
      "FilmID": 13,
      "Language": "Tamil",
      "Film": "16 Vayathinile",
      "Director": "P. Bharathiraja",
      "Year": 1977,
      "Songs": []
    },
    {
      "FilmID": 14,
      "Language": "Tamil",
      "Film": "Gaayathri",
      "Director": "R.Pattabhiraman",
      "Year": 1977,
      "Songs": []
    },
    {
      "FilmID": 15,
      "Language": "Tamil",
      "Film": "Odi Vilayaadu Thaatha",
      "Director": "T.N. Balu",
      "Year": 1977,
      "Songs": []
    },
    {
      "FilmID": 16,
      "Language": "Tamil",
      "Film": "Durga Devi",
      "Director": "Ra. Sankaran",
      "Year": 1977,
      "Songs": []
    },
    {
      "FilmID": 17,
      "Language": "Tamil",
      "Film": "Sainthadamma Sainthadu",
      "Director": "Devaraj Mohan",
      "Year": 1977,
      "Songs": []
    },
    {
      "FilmID": 18,
      "Language": "Tamil",
      "Film": "Kaatrinile Varum Geetham",
      "Director": "S. P. Muthuraman",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 19,
      "Language": "Tamil",
      "Film": "Vaazha Ninaiththaal Vaazhalaam",
      "Director": "Devaraj Mohan",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 20,
      "Language": "Tamil",
      "Film": "Maariyamman Thiruvizha",
      "Director": "N. Venkatesh",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 21,
      "Language": "Tamil",
      "Film": "Achchani",
      "Director": "Karaikudi Narayanan",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 22,
      "Language": "Tamil",
      "Film": "Thyagam",
      "Director": "K. Vijayan",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 23,
      "Language": "Kannada",
      "Film": "Maathu Tappada Maga",
      "Director": "Peketi Sivaram",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 24,
      "Language": "Tamil",
      "Film": "Thirukkalyanam",
      "Director": "K.Chandrabose",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 25,
      "Language": "Tamil",
      "Film": "Ithu Eppadi Irukku",
      "Director": "R Pattabiraman",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 26,
      "Language": "Malayalam",
      "Film": "Vyamoham",
      "Director": "K. G. George",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 27,
      "Language": "Tamil",
      "Film": "Tripura Sundari",
      "Director": "K. Chandrabose",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 28,
      "Language": "Tamil",
      "Film": "Bairavi",
      "Director": "M.Bhaskar",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 29,
      "Language": "Tamil",
      "Film": "Aval Oru Pachai Kuzhandhai",
      "Director": "S.C. Sekar",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 30,
      "Language": "Tamil",
      "Film": "Chittu Kuruvi",
      "Director": "Devaraj Mohan",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 31,
      "Language": "Tamil",
      "Film": "Ilamai Oonjal Aadukirathu",
      "Director": "C.V.Sridhar",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 32,
      "Language": "Tamil",
      "Film": "Sattam En Kaiyil",
      "Director": "T.N.Baalu",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 33,
      "Language": "Tamil",
      "Film": "Vatathukkul Chadhuram",
      "Director": "S. P. Muthuraman",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 34,
      "Language": "Tamil",
      "Film": "Kizhake Pogum Rail",
      "Director": "P. Bharathiraja",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 35,
      "Language": "Telugu",
      "Film": "Vayasu Pilichindi",
      "Director": "C. V. Sridhar",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 36,
      "Language": "Tamil",
      "Film": "Mullum Malarum",
      "Director": "J. Mahendran",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 37,
      "Language": "Tamil",
      "Film": "Kannan Oru Kai Kuzhandhai",
      "Director": "N. Venkatesh",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 38,
      "Language": "Tamil",
      "Film": "Sigappu Rojakkal",
      "Director": "P. Bharathiraja",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 39,
      "Language": "Tamil",
      "Film": "Aval Appadithan",
      "Director": "C. Rudhraiya",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 40,
      "Language": "Tamil",
      "Film": "Sonnadhu Nee Dhanaa",
      "Director": "C.N.Muthu",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 41,
      "Language": "Tamil",
      "Film": "Priya",
      "Director": "S. P. Muthuraman",
      "Year": 1978,
      "Songs": []
    },
    {
      "FilmID": 42,
      "Language": "Tamil",
      "Film": "Aarulirunthu Arubathuvarai",
      "Director": "S. P. Muthuraman",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 43,
      "Language": "Tamil",
      "Film": "Lakshmi",
      "Director": "T.K. Mohan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 44,
      "Language": "Tamil",
      "Film": "Agal Vilakku",
      "Director": "R. Selvaraj",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 45,
      "Language": "Tamil",
      "Film": "Pagalil Oru Iravu",
      "Director": "I.V. Sasi",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 46,
      "Language": "Tamil",
      "Film": "Anbe Sangeetha",
      "Director": "Karaikudi Narayanan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 47,
      "Language": "Telugu",
      "Film": "Amma Evarikkaina Amma",
      "Director": "R. Thyagarajan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 48,
      "Language": "Tamil",
      "Film": "Annai Oru Aalayam",
      "Director": "R. Thyagarajan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 49,
      "Language": "Tamil",
      "Film": "Dharma Yuddham",
      "Director": "R. C. Sakthi",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 50,
      "Language": "Tamil",
      "Film": "Sakkalaththi",
      "Director": "Devaraj Mohan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 51,
      "Language": "Tamil",
      "Film": "Kadavul Amaitha Medai",
      "Director": "S. P. Muthuraman",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 52,
      "Language": "Tamil",
      "Film": "Manipoor Mamiyaar",
      "Director": "V.C. Kuganathan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 53,
      "Language": "Tamil",
      "Film": "Kalyanaraman",
      "Director": "G. N. Rangarajan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 54,
      "Language": "Tamil",
      "Film": "Kavari Maan",
      "Director": "S. P. Muthuraman",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 55,
      "Language": "Tamil",
      "Film": "Mugaththil Mugam Paarkkalaam",
      "Director": "A. Jagannathan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 56,
      "Language": "Tamil",
      "Film": "Muthal Iravu",
      "Director": "A. Jagannathan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 57,
      "Language": "Tamil",
      "Film": "Naan Vazhavaippen",
      "Director": "Dasari Yoganand",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 58,
      "Language": "Kannada",
      "Film": "Priya",
      "Director": "S. P. Muthuraman",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 59,
      "Language": "Tamil",
      "Film": "Azhage Unnai Aarathikkiren",
      "Director": "C. V. Sridhar",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 60,
      "Language": "Telugu",
      "Film": "Pancha Bhoothalu",
      "Director": "P. Chandrasekar Reddy",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 61,
      "Language": "Telugu",
      "Film": "Yugandhar",
      "Director": "KSR Das",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 62,
      "Language": "Tamil",
      "Film": "Nallathoru Kudumbam",
      "Director": "K Vijayan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 63,
      "Language": "Tamil",
      "Film": "Niram Maaratha Pookkal",
      "Director": "Bharathiraja",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 64,
      "Language": "Tamil",
      "Film": "Pattaakathi Bairavan",
      "Director": "V. B. Rajendra Prasad",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 65,
      "Language": "Tamil",
      "Film": "Ponnu Oorukku Pudhusu",
      "Director": "R.Selvaraj",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 66,
      "Language": "Tamil",
      "Film": "Poonthalir",
      "Director": "Devaraj Mohan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 67,
      "Language": "Tamil",
      "Film": "Puthiya Vaarpugal",
      "Director": "Bharathiraja",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 68,
      "Language": "Tamil",
      "Film": "Rosappo Ravikaikaari",
      "Director": "Devaraj Mohan",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 69,
      "Language": "Kannada",
      "Film": "Urvashi Neene Nanna Preyasi",
      "Director": "C. V. Sridhar",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 70,
      "Language": "Telugu",
      "Film": "Urvasi Neeve Naa Preyasi",
      "Director": "C. V. Sridhar",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 71,
      "Language": "Tamil",
      "Film": "Uthiri Pookal",
      "Director": "J. Mahendran",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 72,
      "Language": "Tamil",
      "Film": "Vetrikku Oruvan",
      "Director": "S. P. Muthuraman",
      "Year": 1979,
      "Songs": []
    },
    {
      "FilmID": 73,
      "Language": "Tamil",
      "Film": "Orey Muththam",
      "Director": "C.A.Mugilan",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 74,
      "Language": "Tamil",
      "Film": "Shoolam",
      "Director": "M.Bhaskar",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 75,
      "Language": "Tamil",
      "Film": "Aayiram Vaasal Idhayam",
      "Director": "A. Jagannathan",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 76,
      "Language": "Tamil",
      "Film": "Ellam Un Kairasi",
      "Director": "M.A. Thirumugam",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 77,
      "Language": "Tamil",
      "Film": "Gramathu Athiyayam",
      "Director": "C. Rudhraiya",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 78,
      "Language": "Tamil",
      "Film": "Idhayaththil Ore Idam",
      "Director": "Prasath",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 79,
      "Language": "Tamil",
      "Film": "Kannil Theriyum Kathaikal",
      "Director": "Devaraj Mohan",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 80,
      "Language": "Tamil",
      "Film": "Nadhiyai Thedi Vandha Kadal",
      "Director": "B. Lenin",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 81,
      "Language": "Tamil",
      "Film": "Rishi Moolam",
      "Director": "S. P. Muthuraman",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 82,
      "Language": "Tamil",
      "Film": "Thai Pongal",
      "Director": "M.G. Vallaban",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 83,
      "Language": "Tamil",
      "Film": "Anbukku Naan Adimai",
      "Director": "R. Thiyagarajan",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 84,
      "Language": "Tamil",
      "Film": "Adhigaram",
      "Director": "Unknown",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 85,
      "Language": "Malayalam",
      "Film": "Dooram Arike",
      "Director": "Jeassy",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 86,
      "Language": "Tamil",
      "Film": "Guru",
      "Director": "I.V. Sasi",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 87,
      "Language": "Tamil",
      "Film": "Ilamai Kolam",
      "Director": "N. Venkatesh",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 88,
      "Language": "Kannada",
      "Film": "Janma Janmada Anubandha",
      "Director": "Shankar Nag",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 89,
      "Language": "Tamil",
      "Film": "Johnny",
      "Director": "J. Mahendran",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 90,
      "Language": "Tamil",
      "Film": "Kallukkul Eeram",
      "Director": "P. S. Nivas",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 91,
      "Language": "Telugu",
      "Film": "Kotha Jeevithalu",
      "Director": "Bharathiraja",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 92,
      "Language": "Telugu",
      "Film": "Mayadari Krishnudu",
      "Director": "R. Thiyagarajan",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 93,
      "Language": "Tamil",
      "Film": "Moodu Pani",
      "Director": "Balu Mahendra",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 94,
      "Language": "Tamil",
      "Film": "Murattu Kaalai",
      "Director": "S. P. Muthuraman",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 95,
      "Language": "Tamil",
      "Film": "Nizhalgal",
      "Director": "Bharathiraja",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 96,
      "Language": "Telugu",
      "Film": "Pasidi Moggalu",
      "Director": "Durga Nageswara Rao",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 97,
      "Language": "Tamil",
      "Film": "Rusi Kanda Poonai",
      "Director": "S. P. Muthuraman",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 98,
      "Language": "Tamil",
      "Film": "Ullasa Paravaigal",
      "Director": "C. V. Rajendran",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 99,
      "Language": "Tamil",
      "Film": "Puthiya Adimaigal",
      "Director": "R.Selvaraj",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 100,
      "Language": "Tamil",
      "Film": "Karumbu Vil",
      "Director": "Vijay",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 101,
      "Language": "Tamil",
      "Film": "Poottaatha Poottukkal",
      "Director": "J. Mahendran",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 102,
      "Language": "Tamil",
      "Film": "Naan Potta Savaal",
      "Director": "Puratshidasan",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 103,
      "Language": "Telugu",
      "Film": "Kaali",
      "Director": "I.V. Sasi",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 104,
      "Language": "Tamil",
      "Film": "Kaali",
      "Director": "I.V. Sasi",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 105,
      "Language": "Tamil",
      "Film": "Nenjathai Killathe",
      "Director": "J. Mahendran",
      "Year": 1980,
      "Songs": []
    },
    {
      "FilmID": 106,
      "Language": "Tamil",
      "Film": "Garjanai",
      "Director": "C. V. Rajendran",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 107,
      "Language": "Malayalam",
      "Film": "Garjanam",
      "Director": "C. V. Rajendran",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 108,
      "Language": "Kannada",
      "Film": "Garjane",
      "Director": "C. V. Rajendran",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 109,
      "Language": "Tamil",
      "Film": "Vidiyum Varai Kaathiru",
      "Director": "K. Bhagyaraj",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 110,
      "Language": "Tamil",
      "Film": "Oru Iravu Oru Paravai",
      "Director": "P.C. Reddy",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 111,
      "Language": "Telugu",
      "Film": "Kaala Rathri",
      "Director": "P.C. Reddy",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 112,
      "Language": "Tamil",
      "Film": "Raja Paarvai",
      "Director": "Singeetam Srinivasa Rao",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 113,
      "Language": "Tamil",
      "Film": "Kannitheevu",
      "Director": "Ramana",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 114,
      "Language": "Tamil",
      "Film": "Pattanam Pogalaam Vaa",
      "Director": "Sakthi Subramaniam",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 115,
      "Language": "Tamil",
      "Film": "Sankarlal",
      "Director": "T.N. Balu",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 116,
      "Language": "Telugu",
      "Film": "Chinnari Chitti Babu",
      "Director": "N. Gopalakrishna",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 117,
      "Language": "Tamil",
      "Film": "Arathanai",
      "Director": "Prasad",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 118,
      "Language": "Tamil",
      "Film": "Bala Nagamma",
      "Director": "K. Shankar",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 119,
      "Language": "Telugu",
      "Film": "Bala Nagamma",
      "Director": "K. Shankar",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 120,
      "Language": "Tamil",
      "Film": "Enakkaga Kaathiru",
      "Director": "P. S. Nivas",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 121,
      "Language": "Tamil",
      "Film": "Indru Poi Naalai Vaa",
      "Director": "K. Bhagyaraj",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 122,
      "Language": "Tamil",
      "Film": "Kadal Meengal",
      "Director": "G.N. Rangarajan",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 123,
      "Language": "Tamil",
      "Film": "Karaiyellam Shenbagapoo",
      "Director": "G.N. Rangarajan",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 124,
      "Language": "Tamil",
      "Film": "Nalladhu Nadandhe Theerum",
      "Director": "Karaikudi Narayanan",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 125,
      "Language": "Tamil",
      "Film": "Nandu",
      "Director": "J. Mahendran",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 126,
      "Language": "Tamil",
      "Film": "Oomai Ullangal",
      "Director": "Unknown",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 127,
      "Language": "Tamil",
      "Film": "Panchami",
      "Director": "Selvakumar",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 128,
      "Language": "Kannada",
      "Film": "Geetha",
      "Director": "Shankar Nag",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 129,
      "Language": "Kannada",
      "Film": "Nee Nanna Gellalare",
      "Director": "Vijay",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 130,
      "Language": "Tamil",
      "Film": "Tik Tik Tik",
      "Director": "P. Bharathiraja",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 131,
      "Language": "Tamil",
      "Film": "Ellam Inba Mayyam",
      "Director": "G.N. Rangarajan",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 132,
      "Language": "Tamil",
      "Film": "Netrikkan",
      "Director": "S. P. Muthuraman",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 133,
      "Language": "Telugu",
      "Film": "Seethakoka Chiluka",
      "Director": "Bharathiraja",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 134,
      "Language": "Tamil",
      "Film": "Panneer Pushpangal",
      "Director": "Santhana Bharathi, P. Vasu",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 135,
      "Language": "Tamil",
      "Film": "Alaigal Oivathillai",
      "Director": "Bharathiraja",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 136,
      "Language": "Tamil",
      "Film": "Ram Lakshman",
      "Director": "R. Thiyagarajan",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 137,
      "Language": "Kannada",
      "Film": "Shikari",
      "Director": "C. R. Simha",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 138,
      "Language": "Tamil",
      "Film": "Meendum Kokila",
      "Director": "G. N. Rangarajan",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 139,
      "Language": "Tamil",
      "Film": "Koyil Puraa",
      "Director": "K. Vijayan",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 140,
      "Language": "Tamil",
      "Film": "Kazhugu",
      "Director": "S. P. Muthuraman",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 141,
      "Language": "Kannada",
      "Film": "Bhaari Bharjari Bete",
      "Director": "Rajendra Singh Babu",
      "Year": 1981,
      "Songs": []
    },
    {
      "FilmID": 142,
      "Language": "Tamil",
      "Film": "Payanangal Mudivathillai",
      "Director": "R. Sundarrajan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 143,
      "Language": "Malayalam",
      "Film": "Olangal",
      "Director": "Balu Mahendra",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 144,
      "Language": "Telugu",
      "Film": "Andhagadu",
      "Director": "T.N. Balu",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 145,
      "Language": "Tamil",
      "Film": "Eera Vizhi Kaaviyangal",
      "Director": "B. R. Ravishankar",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 146,
      "Language": "Tamil",
      "Film": "Thai Moogambikai",
      "Director": "K. Shankar",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 147,
      "Language": "Tamil",
      "Film": "Thooral Ninnu Pochchu",
      "Director": "K. Bhagyaraj",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 148,
      "Language": "Tamil",
      "Film": "Valibamey Vaa Vaa",
      "Director": "Bharathiraja",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 149,
      "Language": "Tamil",
      "Film": "Moondram Pirai",
      "Director": "Balu Mahendra",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 150,
      "Language": "Tamil",
      "Film": "Sakalakala Vallavan",
      "Director": "S. P. Muthuraman",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 151,
      "Language": "Tamil",
      "Film": "Gopurangal Saivathillai",
      "Director": "Manivannan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 152,
      "Language": "Tamil",
      "Film": "Kanne Radha",
      "Director": "Rama Narayanan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 153,
      "Language": "Tamil",
      "Film": "Kavidhai Malar",
      "Director": "Devaraj Mohan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 154,
      "Language": "Tamil",
      "Film": "Kelviyum Naane Pathilum Naane",
      "Director": "N. Murugesh",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 155,
      "Language": "Tamil",
      "Film": "Kozhi Koovuthu",
      "Director": "Gangai Amaran",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 156,
      "Language": "Tamil",
      "Film": "Magane Magane",
      "Director": "K.N. Lakshmanan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 157,
      "Language": "Tamil",
      "Film": "Manjal Nila",
      "Director": "Ranjith Rangarajan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 158,
      "Language": "Tamil",
      "Film": "Nizhal Thedum Nenjangal",
      "Director": "P. S. Nivas",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 159,
      "Language": "Tamil",
      "Film": "Puthukavithai",
      "Director": "S. P. Muthuraman",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 160,
      "Language": "Tamil",
      "Film": "Rani Theni",
      "Director": "G.N. Rangarajan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 161,
      "Language": "Malayalam",
      "Film": "Alolam",
      "Director": "Mohan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 162,
      "Language": "Tamil",
      "Film": "Ninaivellam Nithya",
      "Director": "C. V. Sridhar",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 163,
      "Language": "Telugu",
      "Film": "Poola Pallaki",
      "Director": "C. Hemachandra Rao",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 164,
      "Language": "Tamil",
      "Film": "Anandha Ragam",
      "Director": "Bharani",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 165,
      "Language": "Tamil",
      "Film": "Archanai Pookal",
      "Director": "Gokulakrishna",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 166,
      "Language": "Tamil",
      "Film": "Auto Raja",
      "Director": "K. Vijayan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 167,
      "Language": "Tamil",
      "Film": "Echchil Iravugal",
      "Director": "A.S. Prakasam",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 168,
      "Language": "Tamil",
      "Film": "Metti",
      "Director": "J. Mahendran",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 169,
      "Language": "Tamil",
      "Film": "Thanikattu Raja",
      "Director": "V.C. Kuganathan",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 170,
      "Language": "Tamil",
      "Film": "Agaya Gangai",
      "Director": "Manobala",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 171,
      "Language": "Tamil",
      "Film": "Azhagiya Kanne",
      "Director": "J. Mahendran",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 172,
      "Language": "Tamil",
      "Film": "En Selvame",
      "Director": "S. P. Muthuraman",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 173,
      "Language": "Tamil",
      "Film": "Enkeyo Ketta Kural",
      "Director": "S. P. Muthuraman",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 174,
      "Language": "Tamil",
      "Film": "Ethanai Konam Ethanai Parvai",
      "Director": "B. Lenin",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 175,
      "Language": "Tamil",
      "Film": "Kaadhal Oviyam",
      "Director": "Bharathiraja",
      "Year": 1982,
      "Songs": []
    },
    {
      "FilmID": 176,
      "Language": "Tamil",
      "Film": "Aanandha Kummi",
      "Director": "Balakrishnan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 177,
      "Language": "Tamil",
      "Film": "Oppandham",
      "Director": "Vijaya Ganesh",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 178,
      "Language": "Tamil",
      "Film": "Urangatha Ninaivugal",
      "Director": "R. Baskaran",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 179,
      "Language": "Malayalam",
      "Film": "Aa Raathri",
      "Director": "Joshiy",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 180,
      "Language": "Tamil",
      "Film": "Jothi",
      "Director": "Manivannan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 181,
      "Language": "Tamil",
      "Film": "Man Vasanai",
      "Director": "Bharathiraja",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 182,
      "Language": "Tamil",
      "Film": "Paayum Puli",
      "Director": "S. P. Muthuraman",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 183,
      "Language": "Telugu",
      "Film": "Abhilasha",
      "Director": "A. Kodandarami Reddy",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 184,
      "Language": "Tamil",
      "Film": "Inimai Idho Idho",
      "Director": "R. Ramalingam",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 185,
      "Language": "Malayalam",
      "Film": "Sandhyakku Virinja Poovu",
      "Director": "P. G. Viswambharan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 186,
      "Language": "Tamil",
      "Film": "Indru Nee Nalai Naan",
      "Director": "Major Sundarrajan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 187,
      "Language": "Tamil",
      "Film": "Mundhanai Mudichu",
      "Director": "K. Bhagyaraj",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 188,
      "Language": "Telugu",
      "Film": "Manthrigari Viyyankudu",
      "Director": "Bapu",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 189,
      "Language": "Malayalam",
      "Film": "Oomakkuyil",
      "Director": "Balu Mahendra",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 190,
      "Language": "Kannada",
      "Film": "Pallavi Anupallavi",
      "Director": "Mani Ratnam",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 191,
      "Language": "Malayalam",
      "Film": "Pinnilavu",
      "Director": "P. G. Viswambharan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 192,
      "Language": "Tamil",
      "Film": "Aayiram Nilave Vaa",
      "Director": "A.S. Prakasam",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 193,
      "Language": "Tamil",
      "Film": "Bhagavathipuram Railway Gate",
      "Director": "R. Selvaraj",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 194,
      "Language": "Tamil",
      "Film": "Adutha Varisu",
      "Director": "S. P. Muthuraman",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 195,
      "Language": "Tamil",
      "Film": "Ennai Paar En Azhagai Paar",
      "Director": "N.S. Maniam",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 196,
      "Language": "Tamil",
      "Film": "Kann Sivanthaal Mann Sivakkum",
      "Director": "Sreedhar Rajan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 197,
      "Language": "Tamil",
      "Film": "Malaiyoor Mambattiyan",
      "Director": "Rajasekhar",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 198,
      "Language": "Tamil",
      "Film": "Vasanthame Varuga",
      "Director": "Balu Mahendra",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 199,
      "Language": "Tamil",
      "Film": "Malargal Nanaigindrana",
      "Director": "S. Chidambaram",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 200,
      "Language": "Tamil",
      "Film": "Manaivi Solle Manthiram",
      "Director": "Rama Narayanan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 201,
      "Language": "Tamil",
      "Film": "Mella Pesungal",
      "Director": "Bharathi Vasu",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 202,
      "Language": "Tamil",
      "Film": "Muthu Engal Sothu",
      "Director": "G.N. Rangarajan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 203,
      "Language": "Kannada",
      "Film": "Nagara Bayalu",
      "Director": "Unknown",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 204,
      "Language": "Kannada",
      "Film": "Nyaya Gedditu",
      "Director": "SM Joe Simon",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 205,
      "Language": "Tamil",
      "Film": "Oomai Veyyil",
      "Director": "Indhu",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 206,
      "Language": "Tamil",
      "Film": "Raagangal Maaruvathillai",
      "Director": "Sirumugai Ravi",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 207,
      "Language": "Telugu",
      "Film": "Rajkumar",
      "Director": "G. Raminaidu",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 208,
      "Language": "Tamil",
      "Film": "Saattai Illatha Pambaram",
      "Director": "N. Murugesh",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 209,
      "Language": "Tamil",
      "Film": "Andha Sila Naatkal",
      "Director": "Venkat",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 210,
      "Language": "Tamil",
      "Film": "Soorakottai Singakutti",
      "Director": "Rama Narayanan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 211,
      "Language": "Tamil",
      "Film": "Thanga Magan",
      "Director": "A. Jagannathan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 212,
      "Language": "Tamil",
      "Film": "Uyire Unakkaaga",
      "Director": "S. Kumar",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 213,
      "Language": "Tamil",
      "Film": "Veetula Raman Veliyila Krishnan",
      "Director": "Manivannan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 214,
      "Language": "Telugu",
      "Film": "Veerabhadrudu",
      "Director": "Ravi Raja",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 215,
      "Language": "Tamil",
      "Film": "Yuga Dharmam",
      "Director": "K.S. Gopalakrishnan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 216,
      "Language": "Telugu",
      "Film": "Saagara Sangamam",
      "Director": "K. Viswanath",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 217,
      "Language": "Tamil",
      "Film": "Kokkarakko",
      "Director": "Gangai Amaran",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 218,
      "Language": "Tamil",
      "Film": "Vellai Roja",
      "Director": "A. Jagannathan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 219,
      "Language": "Hindi",
      "Film": "Sadma",
      "Director": "Balu Mahendra",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 220,
      "Language": "Tamil",
      "Film": "Oru Odai Nadhiyagirathu",
      "Director": "C. V. Sridhar",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 221,
      "Language": "Tamil",
      "Film": "Anney Anney",
      "Director": "T. S. B. K. Mouli",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 222,
      "Language": "Tamil",
      "Film": "Thoongadhey Thambi Thoongadhey",
      "Director": "S. P. Muthuraman",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 223,
      "Language": "Tamil",
      "Film": "Ilamai Kaalangal",
      "Director": "Manivannan",
      "Year": 1983,
      "Songs": []
    },
    {
      "FilmID": 224,
      "Language": "Tamil",
      "Film": "Nooravathu Naal",
      "Director": "Manivannan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 225,
      "Language": "Telugu",
      "Film": "Idhe Naa Savaal",
      "Director": "Puratchidasan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 226,
      "Language": "Tamil",
      "Film": "Enakkul Oruvan",
      "Director": "S. P. Muthuraman",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 227,
      "Language": "Tamil",
      "Film": "Devi Sridevi",
      "Director": "Gangai Amaran",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 228,
      "Language": "Kannada",
      "Film": "Nagara Mahime",
      "Director": "Kallesh",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 229,
      "Language": "Kannada",
      "Film": "Accident",
      "Director": "Shankar Nag",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 230,
      "Language": "Tamil",
      "Film": "Pozhudhu Vidinjaachu",
      "Director": "Gangai Amaran",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 231,
      "Language": "Telugu",
      "Film": "Sitaara",
      "Director": "Vamsy",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 232,
      "Language": "Tamil",
      "Film": "Thangamadi Thangam",
      "Director": "Rama Narayanan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 233,
      "Language": "Tamil",
      "Film": "Ullam Urugudhadi",
      "Director": "N. Murugesh",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 234,
      "Language": "Tamil",
      "Film": "Ambigai Neril Vanthaal",
      "Director": "Manivannan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 235,
      "Language": "Tamil",
      "Film": "Anbe Odi Vaa",
      "Director": "R. Ranjith Kumar",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 236,
      "Language": "Tamil",
      "Film": "Anbulla Malare",
      "Director": "B.R. Ravishankar",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 237,
      "Language": "Tamil",
      "Film": "Anbulla Rajinikanth",
      "Director": "K. Natraj",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 238,
      "Language": "Tamil",
      "Film": "Dhavani Kanavugal",
      "Director": "K. Bhagyaraj",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 239,
      "Language": "Tamil",
      "Film": "Ezhuthatha Sattangal",
      "Director": "K. Shankar",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 240,
      "Language": "Tamil",
      "Film": "Ingeyum Oru Gangai",
      "Director": "Manivannan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 241,
      "Language": "Tamil",
      "Film": "1-Jan",
      "Director": "Manivannan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 242,
      "Language": "Tamil",
      "Film": "Komberi Mookan",
      "Director": "A. Jagannathan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 243,
      "Language": "Telugu",
      "Film": "Kala Rudrudu",
      "Director": "Katta Subba Rao",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 244,
      "Language": "Tamil",
      "Film": "Kai Kodukkum Kai",
      "Director": "J. Mahendran",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 245,
      "Language": "Tamil",
      "Film": "Kairasikkaran",
      "Director": "S.S.K. Shankar",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 246,
      "Language": "Tamil",
      "Film": "Kuva Kuva Vaathugal",
      "Director": "Manivannan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 247,
      "Language": "Tamil",
      "Film": "Magudi",
      "Director": "Chakki",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 248,
      "Language": "Tamil",
      "Film": "Naalai Unathu Naal",
      "Director": "A. Jagannathan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 249,
      "Language": "Tamil",
      "Film": "Naan Mahaan Alla",
      "Director": "S. P. Muthuraman",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 250,
      "Language": "Tamil",
      "Film": "Naan Paadum Paadal",
      "Director": "R. Sundarrajan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 251,
      "Language": "Tamil",
      "Film": "Nalla Naal",
      "Director": "R. Thyagarajan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 252,
      "Language": "Tamil",
      "Film": "Nallavanukku Nallavan",
      "Director": "S. P. Muthuraman",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 253,
      "Language": "Tamil",
      "Film": "Nee Thodum Bodhu",
      "Director": "V.C. Kuganathan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 254,
      "Language": "Tamil",
      "Film": "Neengal Kettavai",
      "Director": "Balu Mahendra",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 255,
      "Language": "Tamil",
      "Film": "Neram Nalla Neram",
      "Director": "N. Sambandham",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 256,
      "Language": "Tamil",
      "Film": "Nerupukkul Eeram",
      "Director": "R. Krishnamoorthy",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 257,
      "Language": "Tamil",
      "Film": "Nilavu Suduvathillai",
      "Director": "K. Rangaraj",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 258,
      "Language": "Tamil",
      "Film": "Niyayam",
      "Director": "R. Krishnamoorthy",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 259,
      "Language": "Tamil",
      "Film": "Oh Maane Maane",
      "Director": "A. Jagannathan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 260,
      "Language": "Tamil",
      "Film": "Poovilangu",
      "Director": "Amirjaan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 261,
      "Language": "Malayalam",
      "Film": "Onnanu Nammal",
      "Director": "PG Vishwambharan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 262,
      "Language": "Tamil",
      "Film": "Pudhumai Penn",
      "Director": "Bharathiraja",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 263,
      "Language": "Telugu",
      "Film": "Sahasame Jeevitham",
      "Director": "Vasu Bharathi",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 264,
      "Language": "Tamil",
      "Film": "Sanga Natham",
      "Director": "Ramineedu",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 265,
      "Language": "Tamil",
      "Film": "Thalaiyanai Mandhiram",
      "Director": "N. Venkatesh",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 266,
      "Language": "Tamil",
      "Film": "Thambikku Entha Ooru",
      "Director": "Rajasekhar",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 267,
      "Language": "Tamil",
      "Film": "Unnai Naan Santhithen",
      "Director": "K. Rangaraj",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 268,
      "Language": "Tamil",
      "Film": "Vaazhkai",
      "Director": "C. V. Rajendran",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 269,
      "Language": "Tamil",
      "Film": "Vaidehi Kathirunthal",
      "Director": "R. Sundarrajan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 270,
      "Language": "Tamil",
      "Film": "Vellai Pura Ondru",
      "Director": "Gangai Amaran",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 271,
      "Language": "Tamil",
      "Film": "24 Mani Neram",
      "Director": "Manivannan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 272,
      "Language": "Malayalam",
      "Film": "My Dear Kuttichathan",
      "Director": "Jijo Punnoose",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 273,
      "Language": "Telugu",
      "Film": "Challenge",
      "Director": "A. Kodandarami Reddy",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 274,
      "Language": "Malayalam",
      "Film": "Mangalam Nerunnu",
      "Director": "Mohan",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 275,
      "Language": "Telugu",
      "Film": "Merupu Daadi",
      "Director": "N. Ramachandra Rao",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 276,
      "Language": "Malayalam",
      "Film": "Unaru",
      "Director": "Mani Ratnam",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 277,
      "Language": "Tamil",
      "Film": "Mudivalla Arambam",
      "Director": "N.N. Mohideen",
      "Year": 1984,
      "Songs": []
    },
    {
      "FilmID": 278,
      "Language": "Telugu",
      "Film": "Aalaapana",
      "Director": "Vamsy",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 279,
      "Language": "Tamil",
      "Film": "Chinna Veedu",
      "Director": "K. Bhagyaraj",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 280,
      "Language": "Tamil",
      "Film": "Puthiya Theerppu",
      "Director": "C. V. Rajendran",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 281,
      "Language": "Tamil",
      "Film": "Muthal Mariyathai",
      "Director": "Bharathiraja",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 282,
      "Language": "Malayalam",
      "Film": "Yathra",
      "Director": "Balu Mahendra",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 283,
      "Language": "Telugu",
      "Film": "Preminchu Pelladu",
      "Director": "Vamsy",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 284,
      "Language": "Telugu",
      "Film": "Darja Donga",
      "Director": "Manivannan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 285,
      "Language": "Tamil",
      "Film": "Sindhu Bhairavi",
      "Director": "K. Balachander",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 286,
      "Language": "Tamil",
      "Film": "Udhaya Geetham",
      "Director": "K. Rangaraj",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 287,
      "Language": "Tamil",
      "Film": "Andha Oru Nimidam",
      "Director": "Major Sundarrajan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 288,
      "Language": "Tamil",
      "Film": "Kakki Sattai",
      "Director": "Rajasekhar",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 289,
      "Language": "Tamil",
      "Film": "Pillai Nila",
      "Director": "Manobala",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 290,
      "Language": "Tamil",
      "Film": "Meendum Oru Kaathal Kathai",
      "Director": "Prathap Pothan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 291,
      "Language": "Tamil",
      "Film": "Alai Osai",
      "Director": "Sirumugai Ravi",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 292,
      "Language": "Tamil",
      "Film": "Nalla Thambi",
      "Director": "S. P. Muthuraman",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 293,
      "Language": "Tamil",
      "Film": "Raaja Gopuram",
      "Director": "P.G. Pandian",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 294,
      "Language": "Tamil",
      "Film": "Aduthathu Albert",
      "Director": "G.N. Rangarajan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 295,
      "Language": "Tamil",
      "Film": "Amudha Gaanam",
      "Director": "K. Rangaraj",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 296,
      "Language": "Tamil",
      "Film": "Anbin Mugavari",
      "Director": "Manivannan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 297,
      "Language": "Tamil",
      "Film": "Aan Paavam",
      "Director": "Pandiarajan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 298,
      "Language": "Tamil",
      "Film": "Eetti",
      "Director": "Rajasekhar",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 299,
      "Language": "Tamil",
      "Film": "Geethanjali",
      "Director": "K. Rangaraj",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 300,
      "Language": "Tamil",
      "Film": "Hello Yaar Pesurathu",
      "Director": "Ramarajan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 301,
      "Language": "Tamil",
      "Film": "Pagal Nilavu",
      "Director": "Mani Ratnam",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 302,
      "Language": "Tamil",
      "Film": "Idhaya Kovil",
      "Director": "Mani Ratnam",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 303,
      "Language": "Tamil",
      "Film": "Japanil Kalyanaraman",
      "Director": "S. P. Muthuraman",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 304,
      "Language": "Telugu",
      "Film": "Jwala",
      "Director": "Ravi Raja Pinisetty",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 305,
      "Language": "Tamil",
      "Film": "Oru Kaidhiyin Diary",
      "Director": "Bharathiraja",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 306,
      "Language": "Tamil",
      "Film": "Kanni Rasi",
      "Director": "Pandiarajan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 307,
      "Language": "Tamil",
      "Film": "Ketti Melam",
      "Director": "Visu",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 308,
      "Language": "Telugu",
      "Film": "Khooni",
      "Director": "Manivannan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 309,
      "Language": "Tamil",
      "Film": "Kungumachimizh",
      "Director": "R. Sundarrajan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 310,
      "Language": "Telugu",
      "Film": "Mangalya Bandam",
      "Director": "Katta Subba Rao",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 311,
      "Language": "Tamil",
      "Film": "Meendum Parasakthi",
      "Director": "A. Jagannathan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 312,
      "Language": "Tamil",
      "Film": "Naan Sigappu Manidhan",
      "Director": "S. A. Chandrasekhar",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 313,
      "Language": "Tamil",
      "Film": "Naane Raja Naane Mandhiri",
      "Director": "Balu Anandh",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 314,
      "Language": "Tamil",
      "Film": "Neethiyin Marupakkam",
      "Director": "S. A. Chandrasekhar",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 315,
      "Language": "Tamil",
      "Film": "Padikkadhavan",
      "Director": "Rajasekhar",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 316,
      "Language": "Tamil",
      "Film": "Padikkadha Pannaiyar",
      "Director": "K. S. Gopalakrishnan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 317,
      "Language": "Tamil",
      "Film": "Raja Rishi",
      "Director": "K. Shankar",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 318,
      "Language": "Tamil",
      "Film": "Selvi",
      "Director": "K. Natraj",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 319,
      "Language": "Telugu",
      "Film": "Sri Shirdi Saibaba Mahathyam",
      "Director": "K. Vasu",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 320,
      "Language": "Tamil",
      "Film": "Un Kannil Neer Vazhindal",
      "Director": "Balu Mahendra",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 321,
      "Language": "Tamil",
      "Film": "Unnai Thedi Varuven",
      "Director": "C. V. Sridhar",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 322,
      "Language": "Tamil",
      "Film": "Urimai",
      "Director": "Rama Narayanan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 323,
      "Language": "Tamil",
      "Film": "Thendrale Ennai Thodu",
      "Director": "C. V. Sridhar",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 324,
      "Language": "Tamil",
      "Film": "Uyarndha Ullam",
      "Director": "S. P. Muthuraman",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 325,
      "Language": "Tamil",
      "Film": "Sri Raghavendrar",
      "Director": "S. P. Muthuraman",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 326,
      "Language": "Tamil",
      "Film": "Poove Poochudava",
      "Director": "Fazil",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 327,
      "Language": "Tamil",
      "Film": "Annai Bhoomi 3D",
      "Director": "R. Thiyagarajan",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 328,
      "Language": "Tamil",
      "Film": "Thanga Mama 3D",
      "Director": "K. Simon",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 329,
      "Language": "Kannada",
      "Film": "Ajeya",
      "Director": "S. Siddalingaiah",
      "Year": 1985,
      "Songs": []
    },
    {
      "FilmID": 330,
      "Language": "Tamil",
      "Film": "Africavil Appu",
      "Director": "Vijay Anand",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 331,
      "Language": "Tamil",
      "Film": "Amman Kovil Kizhakale",
      "Director": "R. Sundarrajan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 332,
      "Language": "Tamil",
      "Film": "Saadhanai",
      "Director": "A. S. Pragasam",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 333,
      "Language": "Tamil",
      "Film": "Aruvadai Naal",
      "Director": "G. M. Kumar",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 334,
      "Language": "Tamil",
      "Film": "December Pookal",
      "Director": "R. Boopathy",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 335,
      "Language": "Tamil",
      "Film": "Enakku Nane Needipathi",
      "Director": "S. A. Chandrasekhar",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 336,
      "Language": "Tamil",
      "Film": "Iravu Pookkal",
      "Director": "Sreedhar Rajan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 337,
      "Language": "Tamil",
      "Film": "Isai Paadum Thendral",
      "Director": "S. Devaraj",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 338,
      "Language": "Malayalam",
      "Film": "Kaveri",
      "Director": "Rajeevnath",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 339,
      "Language": "Tamil",
      "Film": "Kadalora Kavithaigal",
      "Director": "Bharathiraja",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 340,
      "Language": "Tamil",
      "Film": "Kannukku Mai Ezhuthu",
      "Director": "J. Mahendran",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 341,
      "Language": "Tamil",
      "Film": "Kodai Mazhai",
      "Director": "Muktha S. Sundar",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 342,
      "Language": "Telugu",
      "Film": "Ladies Tailor",
      "Director": "Vamsy",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 343,
      "Language": "Tamil",
      "Film": "Maaveeran",
      "Director": "Rajasekhar",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 344,
      "Language": "Telugu",
      "Film": "Manchi Manasulu",
      "Director": "Mohan Gandhi",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 345,
      "Language": "Tamil",
      "Film": "Manithanin Marupakkam",
      "Director": "K. Rangaraj",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 346,
      "Language": "Tamil",
      "Film": "Mandhira Punnagai",
      "Director": "V. Thamizhazhagan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 347,
      "Language": "Tamil",
      "Film": "Maragatha Veenai",
      "Director": "Gokulakrishna",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 348,
      "Language": "Telugu",
      "Film": "Mister Bharath",
      "Director": "Raja Chandra",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 349,
      "Language": "Tamil",
      "Film": "Mouna Ragam",
      "Director": "Mani Ratnam",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 350,
      "Language": "Tamil",
      "Film": "Muthal Vasantham",
      "Director": "Manivannan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 351,
      "Language": "Tamil",
      "Film": "Neethaana Andha Kuyil",
      "Director": "R. Selvaraj",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 352,
      "Language": "Telugu",
      "Film": "Nireekshana",
      "Director": "Balu Mahendra",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 353,
      "Language": "Telugu",
      "Film": "Oka Radha Iddaru Krishnulu",
      "Director": "A. Kodandarami Reddy",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 354,
      "Language": "Tamil",
      "Film": "Paalaivana Rojakkal",
      "Director": "Manivannan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 355,
      "Language": "Tamil",
      "Film": "Paaru Paaru Pattanam Paaru",
      "Director": "Manobala",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 356,
      "Language": "Kannada",
      "Film": "Sathya Jyothi",
      "Director": "K. Ranga Rao",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 357,
      "Language": "Tamil",
      "Film": "Thaaiku Oru Thaalaattu",
      "Director": "Balachandra Menon",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 358,
      "Language": "Tamil",
      "Film": "Thazhuvatha Kaigal",
      "Director": "R. Sundarrajan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 359,
      "Language": "Tamil",
      "Film": "Vidinja Kalyanam",
      "Director": "Manivannan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 360,
      "Language": "Malayalam",
      "Film": "Poomukhappadiyil Ninneyum Kaathu",
      "Director": "Bhadran",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 361,
      "Language": "Tamil",
      "Film": "Puthir",
      "Director": "Siddalingaiah",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 362,
      "Language": "Telugu",
      "Film": "Anveshana",
      "Director": "Vamsy",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 363,
      "Language": "Tamil",
      "Film": "Dharma Pathini",
      "Director": "Amirjaan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 364,
      "Language": "Tamil",
      "Film": "Kanna Thorakkanum Saami",
      "Director": "R. Govindraj",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 365,
      "Language": "Tamil",
      "Film": "Karimedu Karuvayan",
      "Director": "Rama Narayanan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 366,
      "Language": "Tamil",
      "Film": "Murattu Karangal",
      "Director": "Rajasekhar",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 367,
      "Language": "Tamil",
      "Film": "Naanum Oru Thozhilali",
      "Director": "C. V. Sridhar",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 368,
      "Language": "Kannada",
      "Film": "Sooryodaya",
      "Director": "C. V. Sridhar",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 369,
      "Language": "Telugu",
      "Film": "Sooryodayam",
      "Director": "C. V. Sridhar",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 370,
      "Language": "Tamil",
      "Film": "Natpu",
      "Director": "Amirjaan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 371,
      "Language": "Telugu",
      "Film": "Swathi Muthyam",
      "Director": "K. Viswanath",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 372,
      "Language": "Tamil",
      "Film": "Punnagai Mannan",
      "Director": "K. Balachander",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 373,
      "Language": "Tamil",
      "Film": "Mella Thirandhathu Kadhavu",
      "Director": "R. Sundarrajan",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 374,
      "Language": "Tamil",
      "Film": "Unakkaagave Vaazhgiren",
      "Director": "K. Rangaraj",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 375,
      "Language": "Telugu",
      "Film": "Kirathakudu",
      "Director": "A. Kodandarami Reddy",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 376,
      "Language": "Tamil",
      "Film": "Vikram",
      "Director": "Rajasekhar",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 377,
      "Language": "Telugu",
      "Film": "Rakshasudu",
      "Director": "A. Kodandarami Reddy",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 378,
      "Language": "Tamil",
      "Film": "Mr. Bharath",
      "Director": "S. P. Muthuraman",
      "Year": 1986,
      "Songs": []
    },
    {
      "FilmID": 379,
      "Language": "Tamil",
      "Film": "Nayakan",
      "Director": "Mani Ratnam",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 380,
      "Language": "Tamil",
      "Film": "Aala Piranthavan",
      "Director": "A.S. Prakasam",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 381,
      "Language": "Tamil",
      "Film": "Jallikattu",
      "Director": "Manivannan",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 382,
      "Language": "Tamil",
      "Film": "Iniya Uravu Poothathu",
      "Director": "C. V. Sridhar",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 383,
      "Language": "Tamil",
      "Film": "Kadhal Parisu",
      "Director": "A. Jagannathan",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 384,
      "Language": "Tamil",
      "Film": "Kalyana Kachcheri",
      "Director": "Manivannan",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 385,
      "Language": "Tamil",
      "Film": "Manaivi Ready",
      "Director": "Pandiarajan",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 386,
      "Language": "Tamil",
      "Film": "Poovizhi Vasalile",
      "Director": "Fazil",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 387,
      "Language": "Tamil",
      "Film": "Dhoorathu Pachai",
      "Director": "Manobala",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 388,
      "Language": "Tamil",
      "Film": "Anand",
      "Director": "C. V. Rajendran",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 389,
      "Language": "Tamil",
      "Film": "Chinna Kuyil Paaduthu",
      "Director": "P. Madhavan",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 390,
      "Language": "Telugu",
      "Film": "Andharikante Ghanudu",
      "Director": "C. V. Sridhar",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 391,
      "Language": "Tamil",
      "Film": "Chinna Thambi Periya Thambi",
      "Director": "Manivannan",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 392,
      "Language": "Tamil",
      "Film": "Gramatthu Minnal",
      "Director": "K. Rangaraj",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 393,
      "Language": "Tamil",
      "Film": "Kannukkoru Vannakkili",
      "Director": "Ravindhar",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 394,
      "Language": "Tamil",
      "Film": "Krishnan Vandhaan",
      "Director": "K. Vijayan",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 395,
      "Language": "Tamil",
      "Film": "Manathil Uruthi Vendum",
      "Director": "K. Balachander",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 396,
      "Language": "Tamil",
      "Film": "Ninaikka Therindha Maname",
      "Director": "Suresh",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 397,
      "Language": "Tamil",
      "Film": "Ninaive Oru Sangeetham",
      "Director": "K. Rangaraj",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 398,
      "Language": "Tamil",
      "Film": "Paadu Nilave",
      "Director": "K. Rangaraj",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 399,
      "Language": "Tamil",
      "Film": "Puyal Paadum Paattu",
      "Director": "Manivannan",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 400,
      "Language": "Tamil",
      "Film": "Ullam Kavarndha Kalvan",
      "Director": "Ashok Kumar",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 401,
      "Language": "Tamil",
      "Film": "Vaazhga Valarga",
      "Director": "Vijay Krishna Raj",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 402,
      "Language": "Tamil",
      "Film": "Velaikaran",
      "Director": "S. P. Muthuraman",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 403,
      "Language": "Telugu",
      "Film": "Aradhana",
      "Director": "Bharathiraja",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 404,
      "Language": "Tamil",
      "Film": "Kadamai Kanniyam Kattupaadu",
      "Director": "Santhana Bharathi",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 405,
      "Language": "Tamil",
      "Film": "Enga Ooru Pattukaran",
      "Director": "Gangai Amaran",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 406,
      "Language": "Tamil",
      "Film": "Per Sollum Pillai",
      "Director": "S. P. Muthuraman",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 407,
      "Language": "Telugu",
      "Film": "Sankeertana",
      "Director": "Geetha Krishna",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 408,
      "Language": "Telugu",
      "Film": "Maharshi",
      "Director": "Vamsy",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 409,
      "Language": "Tamil",
      "Film": "Rettai Vaal Kuruvi",
      "Director": "Balu Mahendra",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 410,
      "Language": "Hindi",
      "Film": "Kamagni",
      "Director": "Ashok Kumar",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 411,
      "Language": "Tamil",
      "Film": "Sirai Paravai",
      "Director": "Manobala",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 412,
      "Language": "Tamil",
      "Film": "Theertha Karaiyinile",
      "Director": "Manivannan",
      "Year": 1987,
      "Songs": []
    },
    {
      "FilmID": 413,
      "Language": "Tamil",
      "Film": "Sathya",
      "Director": "Suresh Krissna",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 414,
      "Language": "Tamil",
      "Film": "Soora Samhaaram",
      "Director": "Chitra Lakshmanan",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 415,
      "Language": "Tamil",
      "Film": "Guru Sishyan",
      "Director": "S. P. Muthuraman",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 416,
      "Language": "Malayalam",
      "Film": "Moonnam Pakkam",
      "Director": "Padmarajan",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 417,
      "Language": "Telugu",
      "Film": "Mena Mama",
      "Director": "Rajasekara Reddy",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 418,
      "Language": "Tamil",
      "Film": "Solla Thudikuthu Manasu",
      "Director": "B. Lenin",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 419,
      "Language": "Telugu",
      "Film": "Asthulu Anthasthulu",
      "Director": "B. Bhaskara Rao",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 420,
      "Language": "Tamil",
      "Film": "En Jeevan Paduthu",
      "Director": "R. Sundarrajan",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 421,
      "Language": "Tamil",
      "Film": "Ennai Vittu Pogaathe",
      "Director": "T.K. Bose",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 422,
      "Language": "Telugu",
      "Film": "Garjinchina Ganga",
      "Director": "Kommineni Seshagiri Rao",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 423,
      "Language": "Tamil",
      "Film": "Illam",
      "Director": "I.V. Sasi",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 424,
      "Language": "Tamil",
      "Film": "Irandil Ondru",
      "Director": "V. Azhagappan",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 425,
      "Language": "Telugu",
      "Film": "Jamadagni",
      "Director": "Bharathiraja",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 426,
      "Language": "Tamil",
      "Film": "Raasave Unnai Nambi",
      "Director": "T.K. Bose",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 427,
      "Language": "Tamil",
      "Film": "Shenbagamae Shenbagamae",
      "Director": "Gangai Amaran",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 428,
      "Language": "Tamil",
      "Film": "Therkathi Kallan",
      "Director": "P. Kalaimani",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 429,
      "Language": "English",
      "Film": "Bloodstone",
      "Director": "Dwight H. Little",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 430,
      "Language": "Tamil",
      "Film": "Dhayam Onnu",
      "Director": "Peter Selvakumar",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 431,
      "Language": "Tamil",
      "Film": "En Bommukutty Ammavukku",
      "Director": "Fazil",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 432,
      "Language": "Tamil",
      "Film": "En Uyir Kannamma",
      "Director": "Sivachandran",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 433,
      "Language": "Tamil",
      "Film": "Enga Ooru Kavalkaran",
      "Director": "T. P. Gajendran",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 434,
      "Language": "Tamil",
      "Film": "Ithu Engal Neethi",
      "Director": "S. A. Chandrasekhar",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 435,
      "Language": "Tamil",
      "Film": "Manamagale Vaa",
      "Director": "Panchu Arunchalam",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 436,
      "Language": "Tamil",
      "Film": "Naan Sonnathey Sattam",
      "Director": "Ramesh Raj",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 437,
      "Language": "Tamil",
      "Film": "Paadatha Thenikkal",
      "Director": "V.M.C. Haneefa",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 438,
      "Language": "Tamil",
      "Film": "Paarthal Pasu",
      "Director": "K. S. Gopalakrishnan",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 439,
      "Language": "Tamil",
      "Film": "Paasa Paravaigal",
      "Director": "V.M.C. Haneefa",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 440,
      "Language": "Tamil",
      "Film": "Poonthotta Kaavalkaaran",
      "Director": "Senthilnathan",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 441,
      "Language": "Telugu",
      "Film": "Raktabhishekam",
      "Director": "A. Kodandarami Reddy",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 442,
      "Language": "Tamil",
      "Film": "Sakkarai Pandhal",
      "Director": "Gangai Amaran",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 443,
      "Language": "Tamil",
      "Film": "Veedu",
      "Director": "Balu Mahendra",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 444,
      "Language": "Tamil",
      "Film": "Dharmathin Thalaivan",
      "Director": "S. P. Muthuraman",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 445,
      "Language": "Tamil",
      "Film": "Oruvar Vaazhum Aalayam",
      "Director": "Shanmugapriyan",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 446,
      "Language": "Telugu",
      "Film": "Abhinandana",
      "Director": "Ashok Kumar",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 447,
      "Language": "Tamil",
      "Film": "Agni Natchathiram",
      "Director": "Mani Ratnam",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 448,
      "Language": "Telugu",
      "Film": "Aakhari Poratam",
      "Director": "K. Raghavendra Rao",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 449,
      "Language": "Telugu",
      "Film": "Marana Mrudangam",
      "Director": "A. Kodandarami Reddy",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 450,
      "Language": "Telugu",
      "Film": "Sri Kanaka Mahalakshmi Recording Dance Troupe",
      "Director": "Vamsy",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 451,
      "Language": "Telugu",
      "Film": "Varasudochadu",
      "Director": "A.Mohan Gandhi",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 452,
      "Language": "Telugu",
      "Film": "Rudraveena",
      "Director": "K. Balachander",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 453,
      "Language": "Tamil",
      "Film": "Unnal Mudiyum Thambi",
      "Director": "K. Balachander",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 454,
      "Language": "Telugu",
      "Film": "Swarnakamalam",
      "Director": "K. Viswanath",
      "Year": 1988,
      "Songs": []
    },
    {
      "FilmID": 455,
      "Language": "Tamil",
      "Film": "Raajadhi Raaja",
      "Director": "R. Sundarrajan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 456,
      "Language": "Tamil",
      "Film": "Siva",
      "Director": "Ameerjan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 457,
      "Language": "Tamil",
      "Film": "Ore Oru Gramathiley",
      "Director": "K. Jyothi Pandiyan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 458,
      "Language": "Tamil",
      "Film": "Enne Petha Raasa",
      "Director": "Siraaj",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 459,
      "Language": "Telugu",
      "Film": "Tarzan Sundari",
      "Director": "Guna Parasad",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 460,
      "Language": "Tamil",
      "Film": "Varusham 16",
      "Director": "Fazil",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 461,
      "Language": "Tamil",
      "Film": "Anbu Kattalai",
      "Director": "Yaar Kannan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 462,
      "Language": "Tamil",
      "Film": "Chinnappadass",
      "Director": "C. V. Rajendran",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 463,
      "Language": "Tamil",
      "Film": "Dharmam Vellum",
      "Director": "K. Rangaraj",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 464,
      "Language": "Tamil",
      "Film": "Enga Ooru Mappillai",
      "Director": "T. P. Gajendran",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 465,
      "Language": "Telugu",
      "Film": "Ashoka Chakravarthy",
      "Director": "S.S. Ravichandra",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 466,
      "Language": "Malayalam",
      "Film": "Adharvam",
      "Director": "Dennis Joseph",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 467,
      "Language": "Telugu",
      "Film": "Indrudu Chandrudu",
      "Director": "Suresh Krissna",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 468,
      "Language": "Tamil",
      "Film": "Pudhu Pudhu Arthangal",
      "Director": "K. Balachander",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 469,
      "Language": "Tamil",
      "Film": "Maappillai",
      "Director": "Rajasekhar",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 470,
      "Language": "Malayalam",
      "Film": "Chaitram",
      "Director": "Unknown",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 471,
      "Language": "Telugu",
      "Film": "Chettu Kinda Pleader",
      "Director": "Vamsy",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 472,
      "Language": "Hindi",
      "Film": "Mahaadev",
      "Director": "Raj N. Sippy",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 473,
      "Language": "Malayalam",
      "Film": "Season",
      "Director": "Padmarajan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 474,
      "Language": "Telugu",
      "Film": "Geethanjali",
      "Director": "Mani Ratnam",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 475,
      "Language": "Tamil",
      "Film": "Kai Veesamma Kai Veesu",
      "Director": "Vinodh",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 476,
      "Language": "Kannada",
      "Film": "Namma Bhoomi",
      "Director": "R. Thyagarajan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 477,
      "Language": "Tamil",
      "Film": "Ninaivu Chinnam",
      "Director": "Anu Mohan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 478,
      "Language": "Tamil",
      "Film": "Paandi Nattu Thangam",
      "Director": "T. P. Gajendran",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 479,
      "Language": "Tamil",
      "Film": "Paasa Mazhai",
      "Director": "Aathavan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 480,
      "Language": "Tamil",
      "Film": "Paattukku Oru Thalaivan",
      "Director": "Liyakat Ali Khan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 481,
      "Language": "Tamil",
      "Film": "Padicha Pulla",
      "Director": "Senthilnathan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 482,
      "Language": "Tamil",
      "Film": "Pickpocket",
      "Director": "G. M. Kumar",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 483,
      "Language": "Tamil",
      "Film": "Pongi Varum Kaveri",
      "Director": "T.K. Bose",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 484,
      "Language": "Tamil",
      "Film": "Ponmana Selvan",
      "Director": "P. Vasu",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 485,
      "Language": "Tamil",
      "Film": "Poruthathu Pothum",
      "Director": "P. Kalaimani",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 486,
      "Language": "Tamil",
      "Film": "Raaja Raajathan",
      "Director": "Ramdass",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 487,
      "Language": "Telugu",
      "Film": "Siva",
      "Director": "Ram Gopal Varma",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 488,
      "Language": "Tamil",
      "Film": "Thangamana Raasa",
      "Director": "V. Azhagappan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 489,
      "Language": "Tamil",
      "Film": "Thendral Sudum",
      "Director": "Manobala",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 490,
      "Language": "Tamil",
      "Film": "Thiruppu Munai",
      "Director": "Kalaivanan Kannadasan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 491,
      "Language": "Tamil",
      "Film": "Vaathiyaar Veettu Pillai",
      "Director": "P. Vasu",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 492,
      "Language": "Telugu",
      "Film": "Gopala Rao Gari Abbayi",
      "Director": "Manivannan",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 493,
      "Language": "Tamil",
      "Film": "Apoorva Sagodharargal",
      "Director": "Singeetam Srinivasa Rao",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 494,
      "Language": "Tamil",
      "Film": "Vetri Vizha",
      "Director": "Prathap Pothen",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 495,
      "Language": "Telugu",
      "Film": "Prema",
      "Director": "Suresh Krissna",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 496,
      "Language": "Tamil",
      "Film": "Karagattakaran",
      "Director": "Gangai Amaran",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 497,
      "Language": "Telugu",
      "Film": "Rudranetra",
      "Director": "K. Raghavendra Rao",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 498,
      "Language": "Telugu",
      "Film": "Swathi Chinukulu",
      "Director": "Sri Chakravarthy",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 499,
      "Language": "Tamil",
      "Film": "Annanukku Jai",
      "Director": "Gangai Amaran",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 500,
      "Language": "Tamil",
      "Film": "En Purushanthaan Enakku Mattumthaan",
      "Director": "Manobala",
      "Year": 1989,
      "Songs": []
    },
    {
      "FilmID": 501,
      "Language": "Hindi",
      "Film": "Shiva",
      "Director": "Ram Gopal Varma",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 502,
      "Language": "Telugu",
      "Film": "Jagadeka Veerudu Athiloka Sundari",
      "Director": "K. Raghavendra Rao",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 503,
      "Language": "Telugu",
      "Film": "Bobbili Raja",
      "Director": "B. Gopal",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 504,
      "Language": "Tamil",
      "Film": "Adhisaya Piravi",
      "Director": "S. P. Muthuraman",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 505,
      "Language": "Telugu",
      "Film": "Idem Pellam Baboi",
      "Director": "Katragadda Raviteja",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 506,
      "Language": "Tamil",
      "Film": "Mallu Vetti Minor",
      "Director": "Manobala",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 507,
      "Language": "Tamil",
      "Film": "Anjali",
      "Director": "Mani Ratnam",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 508,
      "Language": "Telugu",
      "Film": "Kondaveeti Donga",
      "Director": "A. Kodandarami Reddy",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 509,
      "Language": "Tamil",
      "Film": "Chatriyan",
      "Director": "K. Subash",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 510,
      "Language": "Tamil",
      "Film": "Kavalukku Kettikaran",
      "Director": "Santhana Bharathi",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 511,
      "Language": "Telugu",
      "Film": "Kokila",
      "Director": "Geetha Krishna",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 512,
      "Language": "Telugu",
      "Film": "Preyasi",
      "Director": "Unknown",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 513,
      "Language": "Tamil",
      "Film": "Paattukku Naan Adimai",
      "Director": "Shanmugapriyan",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 514,
      "Language": "Tamil",
      "Film": "Pagalil Pournami",
      "Director": "Cochin Haneefa",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 515,
      "Language": "Tamil",
      "Film": "Pulan Visaranai",
      "Director": "R. K. Selvamani",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 516,
      "Language": "Tamil",
      "Film": "Amman Kovil Thiruvizha",
      "Director": "P. R. Somasundar",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 517,
      "Language": "Tamil",
      "Film": "En Uyir Thozhan",
      "Director": "Bharathiraja",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 518,
      "Language": "Tamil",
      "Film": "Enkitta Mothathe",
      "Director": "R. Sundarrajan",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 519,
      "Language": "Tamil",
      "Film": "Ethir Kaatru",
      "Director": "Mukta S. Sundar",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 520,
      "Language": "Tamil",
      "Film": "Kavidhai Paadum Alaigal",
      "Director": "T.K. Bose",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 521,
      "Language": "Tamil",
      "Film": "Keladi Kanmani",
      "Director": "Vasanth",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 522,
      "Language": "Tamil",
      "Film": "Panakkaran",
      "Director": "P. Vasu",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 523,
      "Language": "Tamil",
      "Film": "Kizhakku Vasal",
      "Director": "R. V. Udayakumar",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 524,
      "Language": "Tamil",
      "Film": "Arangetra Velai",
      "Director": "Fazil",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 525,
      "Language": "Telugu",
      "Film": "Guru Sishyulu",
      "Director": "S. P. Muthuraman",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 526,
      "Language": "Tamil",
      "Film": "Michael Madana Kama Rajan",
      "Director": "Singeetam Srinivasa Rao",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 527,
      "Language": "Tamil",
      "Film": "Madurai Veeran Enga Saami",
      "Director": "Shanmugapriyan",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 528,
      "Language": "Tamil",
      "Film": "Maruthu Pandi",
      "Director": "Manoj Kumar",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 529,
      "Language": "Tamil",
      "Film": "Mounam Sammadham",
      "Director": "K. Madhu",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 530,
      "Language": "Tamil",
      "Film": "My Dear Marthandan",
      "Director": "Prathap Pothan",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 531,
      "Language": "Tamil",
      "Film": "Nadigan",
      "Director": "P. Vasu",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 532,
      "Language": "Tamil",
      "Film": "Nee Sirithaal Deepavali",
      "Director": "Malaysia Vasudevan",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 533,
      "Language": "Tamil",
      "Film": "Ooru Vittu Ooru Vanthu",
      "Director": "Gangai Amaran",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 534,
      "Language": "Tamil",
      "Film": "Periya Veetu Pannakkaran",
      "Director": "N. K. Viswanathan",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 535,
      "Language": "Tamil",
      "Film": "Pondatti Thevai",
      "Director": "R. Parthiepan",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 536,
      "Language": "Tamil",
      "Film": "Puthu Paatu",
      "Director": "Panchu Arunachalam",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 537,
      "Language": "Tamil",
      "Film": "Raja Kaiya Vacha",
      "Director": "Suresh Krissna",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 538,
      "Language": "Tamil",
      "Film": "Sirayil Pootha Chinna Malar",
      "Director": "Amirtham",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 539,
      "Language": "Tamil",
      "Film": "Sirayil Sila Raagangal",
      "Director": "Rajendrakumar",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 540,
      "Language": "Tamil",
      "Film": "Thalattu Padava",
      "Director": "R. Sundarrajan",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 541,
      "Language": "Malayalam",
      "Film": "Samrajyam",
      "Director": "Jeomon",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 542,
      "Language": "Tamil",
      "Film": "Unnai Solli Kutramillai",
      "Director": "Ameerjan",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 543,
      "Language": "Tamil",
      "Film": "Urudhi Mozhi",
      "Director": "R. V. Udayakumar",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 544,
      "Language": "Tamil",
      "Film": "Vellaiya Thevan",
      "Director": "Manoj Kumar",
      "Year": 1990,
      "Songs": []
    },
    {
      "FilmID": 545,
      "Language": "Tamil",
      "Film": "Thalapathi",
      "Director": "Mani Ratnam",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 546,
      "Language": "Tamil",
      "Film": "Eeramana Rojave",
      "Director": "Keyaar",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 547,
      "Language": "Tamil",
      "Film": "Ennarukil Nee Irunthal",
      "Director": "Sundar K. Vijayan",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 548,
      "Language": "Tamil",
      "Film": "Gopura Vasalile",
      "Director": "Priyadarshan",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 549,
      "Language": "Tamil",
      "Film": "Irumbu Pookkal",
      "Director": "G. M. Kumar",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 550,
      "Language": "Tamil",
      "Film": "Kumbakarai Thangaiah",
      "Director": "Gangai Amaran",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 551,
      "Language": "Tamil",
      "Film": "Manitha Jaathi",
      "Director": "P. Kalaimani",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 552,
      "Language": "Tamil",
      "Film": "Pudhiya Raagam",
      "Director": "Jayachitra",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 553,
      "Language": "Tamil",
      "Film": "Sami Potta Mudichu",
      "Director": "R. Sundarrajan",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 554,
      "Language": "Tamil",
      "Film": "Sir...I Love You",
      "Director": "G. N. Rangarajan",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 555,
      "Language": "Telugu",
      "Film": "Pattudala",
      "Director": "GC Sekhar",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 556,
      "Language": "Malayalam",
      "Film": "Anaswaram",
      "Director": "Joemon",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 557,
      "Language": "Tamil",
      "Film": "Guna",
      "Director": "Santhana Bharathi",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 558,
      "Language": "Tamil",
      "Film": "Dharma Durai",
      "Director": "Rajasekar",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 559,
      "Language": "Tamil",
      "Film": "En Rasavin Manasile",
      "Director": "Kasthuri Raja",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 560,
      "Language": "Tamil",
      "Film": "Idhayam",
      "Director": "Kathir",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 561,
      "Language": "Tamil",
      "Film": "Chinna Thambi",
      "Director": "P. Vasu",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 562,
      "Language": "Tamil",
      "Film": "Thanthu Vitten Ennai",
      "Director": "C. V. Sridhar",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 563,
      "Language": "Tamil",
      "Film": "Uruvam",
      "Director": "G. M. Kumar",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 564,
      "Language": "Tamil",
      "Film": "Vetri Padigal",
      "Director": "Manobala",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 565,
      "Language": "Tamil",
      "Film": "Vetri Karangal",
      "Director": "R. Krishnamoorthy",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 566,
      "Language": "Telugu",
      "Film": "Chaitanya",
      "Director": "Prathap Pothan",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 567,
      "Language": "Tamil",
      "Film": "Karpoora Mullai",
      "Director": "Fazil",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 568,
      "Language": "Malayalam",
      "Film": "Ente Sooryaputhrikku",
      "Director": "Fazil",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 569,
      "Language": "Tamil",
      "Film": "Thanga Thamaraigal",
      "Director": "V. Azhagappan",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 570,
      "Language": "Tamil",
      "Film": "Bramma",
      "Director": "K. Subash",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 571,
      "Language": "Telugu",
      "Film": "Coolie No. 1",
      "Director": "K. Raghavendra Rao",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 572,
      "Language": "Tamil",
      "Film": "Thalattu Ketkuthamma",
      "Director": "Raj Kapoor",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 573,
      "Language": "Tamil",
      "Film": "Thambikki Oru Paattu",
      "Director": "Ashok Kumar",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 574,
      "Language": "Tamil",
      "Film": "Oorellaam Un Paattu",
      "Director": "Siraaj",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 575,
      "Language": "Tamil",
      "Film": "Pillai Paasam",
      "Director": "Cochin Haneefa",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 576,
      "Language": "Tamil",
      "Film": "Pudhu Nellu Pudhu Naathu",
      "Director": "Bharathiraja",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 577,
      "Language": "Tamil",
      "Film": "Thayamma",
      "Director": "Gopi Bhimsingh",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 578,
      "Language": "Telugu",
      "Film": "Aditya 369",
      "Director": "Singeetam Srinivasa Rao",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 579,
      "Language": "Telugu",
      "Film": "Sri Yedukondala Swamy",
      "Director": "Kamalakara Kameswara Rao",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 580,
      "Language": "Telugu",
      "Film": "Keechurallu",
      "Director": "Geetha Krishna",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 581,
      "Language": "Telugu",
      "Film": "Nirnayam",
      "Director": "Priyadarshan",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 582,
      "Language": "Telugu",
      "Film": "Stuartpuram Police Station",
      "Director": "Yandamuri Veerendranath",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 583,
      "Language": "Telugu",
      "Film": "April 1st Vidudhala",
      "Director": "Vamsy",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 584,
      "Language": "Telugu",
      "Film": "Surya IPS",
      "Director": "A. Kodandarami Reddy",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 585,
      "Language": "Tamil",
      "Film": "Captain Prabhakaran",
      "Director": "R. K. Selvamani",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 586,
      "Language": "Tamil",
      "Film": "Puthiya Swarangal",
      "Director": "Vijayan",
      "Year": 1991,
      "Songs": []
    },
    {
      "FilmID": 587,
      "Language": "Malayalam",
      "Film": "Pappayude Swantham Appoos",
      "Director": "Fazil",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 588,
      "Language": "Tamil",
      "Film": "Kaaval Geetham",
      "Director": "S. P. Muthuraman",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 589,
      "Language": "Tamil",
      "Film": "Pandithurai",
      "Director": "Manoj Kumar",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 590,
      "Language": "Tamil",
      "Film": "Periyamma",
      "Director": "Bhanumathi Ramakrishna",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 591,
      "Language": "Tamil",
      "Film": "Rickshaw Mama",
      "Director": "P. Vasu",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 592,
      "Language": "Tamil",
      "Film": "China Devan",
      "Director": "T.K. Bose",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 593,
      "Language": "Tamil",
      "Film": "Chinna Pasanga Naanga",
      "Director": "Raj Kapoor",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 594,
      "Language": "Tamil",
      "Film": "Vanna Vanna Pookkal",
      "Director": "Balu Mahendra",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 595,
      "Language": "Telugu",
      "Film": "Chanti",
      "Director": "Ravi Raja Pinisetty",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 596,
      "Language": "Telugu",
      "Film": "Prema Vijetha",
      "Director": "K. Sada Siva Rao",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 597,
      "Language": "Tamil",
      "Film": "Ponnuketha Purushan",
      "Director": "Gangai Amaran",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 598,
      "Language": "Telugu",
      "Film": "Killer",
      "Director": "Priyadarshan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 599,
      "Language": "Tamil",
      "Film": "Thambi Pondatti",
      "Director": "Panchu Arunachalam",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 600,
      "Language": "Tamil",
      "Film": "Pangali",
      "Director": "K. Subash",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 601,
      "Language": "Tamil",
      "Film": "Senthamizh Paattu",
      "Director": "P. Vasu",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 602,
      "Language": "Tamil",
      "Film": "Mannan",
      "Director": "P.Vasu",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 603,
      "Language": "Malayalam",
      "Film": "Aparatha",
      "Director": "I.V. Sasi",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 604,
      "Language": "Tamil",
      "Film": "Agni Paarvai",
      "Director": "P. Madhavan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 605,
      "Language": "Tamil",
      "Film": "Chembaruthi",
      "Director": "R. K. Selvamani",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 606,
      "Language": "Tamil",
      "Film": "Magudam",
      "Director": "Prathap Pothen",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 607,
      "Language": "Tamil",
      "Film": "Idhu Namma Bhoomi",
      "Director": "P. Vasu",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 608,
      "Language": "Tamil",
      "Film": "Chinnavar",
      "Director": "Gangai Amaran",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 609,
      "Language": "Tamil",
      "Film": "Pandiyan",
      "Director": "S. P. Muthuraman",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 610,
      "Language": "Tamil",
      "Film": "Villu Pattukaran",
      "Director": "Gangai Amaran",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 611,
      "Language": "Tamil",
      "Film": "Thirumathi Palanisamy",
      "Director": "R. Sundarrajan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 612,
      "Language": "Tamil",
      "Film": "Thanga Manasukkaran",
      "Director": "Raja Varman",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 613,
      "Language": "Tamil",
      "Film": "Raasukutti",
      "Director": "K. Bhagyaraj",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 614,
      "Language": "Tamil",
      "Film": "Chinna Thayee",
      "Director": "Ganesh Raj",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 615,
      "Language": "Tamil",
      "Film": "Maappillai Vandhaachu",
      "Director": "Sasi Mohan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 616,
      "Language": "Tamil",
      "Film": "Singaravelan",
      "Director": "R. V. Udayakumar",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 617,
      "Language": "Tamil",
      "Film": "Innisai Mazhai",
      "Director": "Shoba Chandrasekhar",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 618,
      "Language": "Tamil",
      "Film": "Kalikaalam",
      "Director": "Panchu Arunachalam",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 619,
      "Language": "Tamil",
      "Film": "Onna Irukka Kathukanum",
      "Director": "V. Sekhar",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 620,
      "Language": "Tamil",
      "Film": "Thai Mozhi",
      "Director": "R.R. Ilavarasan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 621,
      "Language": "Tamil",
      "Film": "Endrum Anbudan",
      "Director": "Bhagyanathan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 622,
      "Language": "Telugu",
      "Film": "Aa Okkati Adakku",
      "Director": "E. V. V. Satyanarayana",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 623,
      "Language": "Tamil",
      "Film": "Unnai Vaazhthi Paadugiren",
      "Director": "Sridev",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 624,
      "Language": "Telugu",
      "Film": "Aswamedham",
      "Director": "K. Raghavendra Rao",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 625,
      "Language": "Tamil",
      "Film": "Chinna Gounder",
      "Director": "R. V. Udayakumar",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 626,
      "Language": "Telugu",
      "Film": "Chinarayudu",
      "Director": "B. Gopal",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 627,
      "Language": "Tamil",
      "Film": "Bharathan",
      "Director": "Sabapathy Dekshinamurthy",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 628,
      "Language": "Telugu",
      "Film": "Detective Narada",
      "Director": "Vamsi",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 629,
      "Language": "Telugu",
      "Film": "Chakravyuham",
      "Director": "Balu Mahendra",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 630,
      "Language": "Tamil",
      "Film": "Aavarampoo",
      "Director": "Bharathan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 631,
      "Language": "Telugu",
      "Film": "Dharma Kshetram",
      "Director": "A. Kodandarami Reddy",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 632,
      "Language": "Tamil",
      "Film": "Thevar Magan",
      "Director": "Bharathan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 633,
      "Language": "Tamil",
      "Film": "Nadodi Pattukkaran",
      "Director": "N.K.Viswanathan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 634,
      "Language": "Tamil",
      "Film": "Nadodi Thendral",
      "Director": "Bharathiraja",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 635,
      "Language": "Tamil",
      "Film": "Unna Nenachen Pattu Padichen",
      "Director": "Guru Dhanapal",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 636,
      "Language": "Tamil",
      "Film": "Naangal",
      "Director": "Hassan",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 637,
      "Language": "Telugu",
      "Film": "Moratodu Naa Mogudu",
      "Director": "A. Kodandarami Reddy",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 638,
      "Language": "Tamil",
      "Film": "Meera",
      "Director": "P. C. Sreeram",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 639,
      "Language": "Tamil",
      "Film": "Vaa Vaa Vasanthame",
      "Director": "Pala Karuppiah",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 640,
      "Language": "Tamil",
      "Film": "Deiva Vaakku",
      "Director": "M.S.Madhu",
      "Year": 1992,
      "Songs": []
    },
    {
      "FilmID": 641,
      "Language": "Malayalam",
      "Film": "Jackpot",
      "Director": "Jomon",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 642,
      "Language": "Tamil",
      "Film": "Athma",
      "Director": "Prathap Pothan",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 643,
      "Language": "Tamil",
      "Film": "Thalattu",
      "Director": "T.K.Rajendran",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 644,
      "Language": "Tamil",
      "Film": "Maamiyar Veedu",
      "Director": "S. Ganesaraj",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 645,
      "Language": "Tamil",
      "Film": "Koyil Kaalai",
      "Director": "Gangai Amaran",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 646,
      "Language": "Tamil",
      "Film": "Dhuruva Natchathiram",
      "Director": "Raja",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 647,
      "Language": "Telugu",
      "Film": "Amma Koduku",
      "Director": "Kranthi Kumar",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 648,
      "Language": "Telugu",
      "Film": "Kunti Putrudu",
      "Director": "Dasari Narayana Rao",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 649,
      "Language": "Telugu",
      "Film": "Asadhyuralu",
      "Director": "Bhanumathi Ramakrishna",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 650,
      "Language": "Tamil",
      "Film": "Aranmanai Kili",
      "Director": "Rajkiran",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 651,
      "Language": "Telugu",
      "Film": "Tholi Muddhu",
      "Director": "K. Reddy",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 652,
      "Language": "Tamil",
      "Film": "Ejamaan",
      "Director": "R.V.Udhayakumar",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 653,
      "Language": "Tamil",
      "Film": "Kilipetchu Ketkava",
      "Director": "Fazil",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 654,
      "Language": "Tamil",
      "Film": "Kalaignan",
      "Director": "G. B. Vijay",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 655,
      "Language": "Tamil",
      "Film": "Marupadiyum",
      "Director": "Balu Mahendra",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 656,
      "Language": "Tamil",
      "Film": "Ponnumani",
      "Director": "R.V. Udhayakumar",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 657,
      "Language": "Tamil",
      "Film": "Pon Vilangu",
      "Director": "K. S. Rajkumar",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 658,
      "Language": "Tamil",
      "Film": "Rakkayi Koyil",
      "Director": "Manivasagam",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 659,
      "Language": "Tamil",
      "Film": "Valli",
      "Director": "Natraj",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 660,
      "Language": "Tamil",
      "Film": "Uzhaipaali",
      "Director": "P.Vasu",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 661,
      "Language": "Tamil",
      "Film": "Walter Vetrivel",
      "Director": "P.Vasu",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 662,
      "Language": "Tamil",
      "Film": "Dharma Seelan",
      "Director": "Seiyaru Ravi",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 663,
      "Language": "Tamil",
      "Film": "Chinna Jameen",
      "Director": "Raj Kapoor",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 664,
      "Language": "Tamil",
      "Film": "Chinna Kannamma",
      "Director": "R.Raghu",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 665,
      "Language": "Tamil",
      "Film": "Chinna Mapillai",
      "Director": "Santhana Bharathi",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 666,
      "Language": "Tamil",
      "Film": "Enga Muthalali",
      "Director": "Liyakat Ali Khan",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 667,
      "Language": "Tamil",
      "Film": "Enga Thambi",
      "Director": "S. D. Saba",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 668,
      "Language": "Tamil",
      "Film": "Ezhai Jaathi",
      "Director": "Liyakat Ali Khan",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 669,
      "Language": "Tamil",
      "Film": "Manikuyil",
      "Director": "Rajavarman",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 670,
      "Language": "Tamil",
      "Film": "I Love India",
      "Director": "Pavithran",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 671,
      "Language": "Tamil",
      "Film": "Kathirukka Neramillai",
      "Director": "Kulothungan",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 672,
      "Language": "Tamil",
      "Film": "Kattalai",
      "Director": "Liayakat Ali Khan",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 673,
      "Language": "Tamil",
      "Film": "Maharasan",
      "Director": "G. N. Rangarajan",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 674,
      "Language": "Tamil",
      "Film": "Naalai Engal Kalyanam",
      "Director": "V.M.C. Haneefa",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 675,
      "Language": "Tamil",
      "Film": "Parvathi Ennai Paradi",
      "Director": "V. Sekhar",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 676,
      "Language": "Tamil",
      "Film": "Porantha Veeda Puguntha Veeda",
      "Director": "V. Sekhar",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 677,
      "Language": "Telugu",
      "Film": "Repaty Rowdy",
      "Director": "K. Vasu",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 678,
      "Language": "Tamil",
      "Film": "Sakkarai Devan",
      "Director": "J. Panneer",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 679,
      "Language": "Tamil",
      "Film": "Thangakkili",
      "Director": "Rajavarman",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 680,
      "Language": "Tamil",
      "Film": "Udan Pirappu",
      "Director": "P. Vasu",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 681,
      "Language": "Tamil",
      "Film": "Ulle Veliye",
      "Director": "R. Parthiepan",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 682,
      "Language": "Tamil",
      "Film": "Uthama Raasa",
      "Director": "Raj Kapoor",
      "Year": 1993,
      "Songs": []
    },
    {
      "FilmID": 683,
      "Language": "Tamil",
      "Film": "Adharmam",
      "Director": "Ramesh",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 684,
      "Language": "Tamil",
      "Film": "Athiradi Padai",
      "Director": "R. K. Selvamani",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 685,
      "Language": "Tamil",
      "Film": "Amaidhi Padai",
      "Director": "Manivannan",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 686,
      "Language": "Telugu",
      "Film": "Allari Police",
      "Director": "Narayana Rao Uppalapatti",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 687,
      "Language": "Tamil",
      "Film": "Honest Raj",
      "Director": "K. S. Ravi",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 688,
      "Language": "Tamil",
      "Film": "Kanmani",
      "Director": "R. K. Selvamani",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 689,
      "Language": "Tamil",
      "Film": "Mahanadi",
      "Director": "Santhana Bharathi",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 690,
      "Language": "Tamil",
      "Film": "Magalir Mattum",
      "Director": "Singeetam Srinivasa Rao",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 691,
      "Language": "Tamil",
      "Film": "Periya Marudhu",
      "Director": "N.K. Viswanathan",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 692,
      "Language": "Tamil",
      "Film": "Sakthivel",
      "Director": "K. S. Ravikumar",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 693,
      "Language": "Tamil",
      "Film": "Sathyavan",
      "Director": "Raj Kapoor",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 694,
      "Language": "Tamil",
      "Film": "Thendral Varum Theru",
      "Director": "N.G. Gowri Manohar",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 695,
      "Language": "Malayalam",
      "Film": "Sammohanam",
      "Director": "C.P. Padmakumar",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 696,
      "Language": "Tamil",
      "Film": "Sethupathi IPS",
      "Director": "P.Vasu",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 697,
      "Language": "Tamil",
      "Film": "Sadhu",
      "Director": "P. Vasu",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 698,
      "Language": "Tamil",
      "Film": "Seeman",
      "Director": "Raj Kapoor",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 699,
      "Language": "Tamil",
      "Film": "Senthamizh Selvan",
      "Director": "Manoj Kumar",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 700,
      "Language": "Tamil",
      "Film": "Sevvanthi",
      "Director": "P. S. Nivas",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 701,
      "Language": "Tamil",
      "Film": "Thozhar Pandian",
      "Director": "Manivannan",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 702,
      "Language": "Tamil",
      "Film": "Veera",
      "Director": "Suresh Krishna",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 703,
      "Language": "Tamil",
      "Film": "Pudhupatti Ponnuthaayi",
      "Director": "N.K. Viswanathan",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 704,
      "Language": "Tamil",
      "Film": "Rasa Magan",
      "Director": "Manivannan",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 705,
      "Language": "Tamil",
      "Film": "Priyanka",
      "Director": "Neelakandan",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 706,
      "Language": "Tamil",
      "Film": "Rajakumaran",
      "Director": "R. V. Udayakumar",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 707,
      "Language": "Tamil",
      "Film": "Vanaja Girija",
      "Director": "Kothanda Ramaiah (KR)",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 708,
      "Language": "Tamil",
      "Film": "Veetla Visheshanga",
      "Director": "K. Bhagyaraj",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 709,
      "Language": "Tamil",
      "Film": "Vietnam Colony",
      "Director": "Santhana Bharathi",
      "Year": 1994,
      "Songs": []
    },
    {
      "FilmID": 710,
      "Language": "Tamil",
      "Film": "Aanazhagan",
      "Director": "Thiagarajan",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 711,
      "Language": "Tamil",
      "Film": "Makkal Aatchi",
      "Director": "R. K. Selvamani",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 712,
      "Language": "Tamil",
      "Film": "Kattumarakaran",
      "Director": "P. Vasu",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 713,
      "Language": "Tamil",
      "Film": "Mogamul",
      "Director": "Gnana Rajasekaran",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 714,
      "Language": "Tamil",
      "Film": "Chinna Vathiyar",
      "Director": "Singeetam Srinivasa Rao",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 715,
      "Language": "Tamil",
      "Film": "Chandralekha",
      "Director": "Nambi Rajan",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 716,
      "Language": "Tamil",
      "Film": "Ilaya Raagam",
      "Director": "P. R. Devaraj",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 717,
      "Language": "Tamil",
      "Film": "Muthu Kaalai",
      "Director": "Gokula Krishnan",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 718,
      "Language": "Tamil",
      "Film": "Avatharam",
      "Director": "Nazaar",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 719,
      "Language": "Tamil",
      "Film": "Oru Oorla Oru Rajakumari",
      "Director": "K. Bhagyaraj",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 720,
      "Language": "Tamil",
      "Film": "Paattu Vaathiyar",
      "Director": "T. P. Gajendran",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 721,
      "Language": "Tamil",
      "Film": "Periya Kudumbam",
      "Director": "K.S.Ravikumar",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 722,
      "Language": "Tamil",
      "Film": "Nandhavana Theru",
      "Director": "R. V. Udayakumar",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 723,
      "Language": "Tamil",
      "Film": "Raasaiyya",
      "Director": "Yaar Kannan",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 724,
      "Language": "Tamil",
      "Film": "Raja Enga Raja",
      "Director": "T. Vijayasingam",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 725,
      "Language": "Tamil",
      "Film": "Raja Muthirai",
      "Director": "R. K. Selvamani",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 726,
      "Language": "Tamil",
      "Film": "Rajavin Parvaiyile",
      "Director": "Janaki Soundar",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 727,
      "Language": "Tamil",
      "Film": "Paattu Padava",
      "Director": "B. R. Vijayalakshmi",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 728,
      "Language": "Tamil",
      "Film": "Kolangal",
      "Director": "I.V. Sasi",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 729,
      "Language": "Tamil",
      "Film": "Mayabazar",
      "Director": "Kothanda Ramaiah (KR)",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 730,
      "Language": "Tamil",
      "Film": "Ellame En Rasathan",
      "Director": "Rajkiran",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 731,
      "Language": "Tamil",
      "Film": "Sathi Leelavathi",
      "Director": "Balu Mahendra",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 732,
      "Language": "Tamil",
      "Film": "Thedi Vandha Raasa",
      "Director": "Bhoopathi Raja",
      "Year": 1995,
      "Songs": []
    },
    {
      "FilmID": 733,
      "Language": "Malayalam",
      "Film": "Kaalapani",
      "Director": "Priyadarshan",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 734,
      "Language": "Kannada",
      "Film": "Nammoora Mandara Hoove",
      "Director": "Sunil Kumar Desai",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 735,
      "Language": "Tamil",
      "Film": "Poomani",
      "Director": "Kalanjiyam",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 736,
      "Language": "Tamil",
      "Film": "Nattupura Pattu",
      "Director": "Kasthuri Raja",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 737,
      "Language": "Malayalam",
      "Film": "Man of the Match",
      "Director": "Joshy Mathew",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 738,
      "Language": "Tamil",
      "Film": "Irattai Roja",
      "Director": "Keyaar",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 739,
      "Language": "Kannada",
      "Film": "Shiva Sainya",
      "Director": "Shivamani",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 740,
      "Language": "Hindi",
      "Film": "Aur Ek Prem Kahani",
      "Director": "Balu Mahendra",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 741,
      "Language": "Kannada",
      "Film": "Gulabi",
      "Director": "S. Narayan",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 742,
      "Language": "Tamil",
      "Film": "Katta Panchayathu",
      "Director": "R. Raghu",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 743,
      "Language": "Tamil",
      "Film": "Poovarasan",
      "Director": "Gokula Krishna",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 744,
      "Language": "Telugu",
      "Film": "Sreekaram",
      "Director": "C. Umamaheswara Rao",
      "Year": 1996,
      "Songs": []
    },
    {
      "FilmID": 745,
      "Language": "Tamil",
      "Film": "Kadhalukku Mariyadhai",
      "Director": "Fazil",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 746,
      "Language": "Tamil",
      "Film": "Devathai",
      "Director": "Nassar",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 747,
      "Language": "Telugu",
      "Film": "Chinnabbayi",
      "Director": "K. Viswanath",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 748,
      "Language": "Malayalam",
      "Film": "Guru",
      "Director": "Rajiv Anchal",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 749,
      "Language": "Malayalam",
      "Film": "Kaliyoonjal",
      "Director": "Anil Babu",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 750,
      "Language": "Malayalam",
      "Film": "My Dear Kuttichathan",
      "Director": "Jijo Punnoose",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 751,
      "Language": "Malayalam",
      "Film": "Oru Yathramozhi",
      "Director": "Prathap Pothan",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 752,
      "Language": "Kannada",
      "Film": "Prema Raga Haadu Gelathi",
      "Director": "Sunil Kumar Desai",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 753,
      "Language": "Tamil",
      "Film": "Kadavul",
      "Director": "Velu Prabhakaran",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 754,
      "Language": "Tamil",
      "Film": "Raman Abdullah",
      "Director": "Balu Mahendra",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 755,
      "Language": "Tamil",
      "Film": "Thambi Durai",
      "Director": "Senthilnathan",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 756,
      "Language": "Tamil",
      "Film": "Themmangu Paattukaaran",
      "Director": "Gangai Amaran",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 757,
      "Language": "Tamil",
      "Film": "Vasuki",
      "Director": "Kasthuri Raja",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 758,
      "Language": "Telugu",
      "Film": "Pellikodukku Ammabadanu",
      "Director": "Kasthuri Raja",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 759,
      "Language": "Kannada",
      "Film": "Bhoomi Geethe",
      "Director": "Kesari Haravu",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 760,
      "Language": "Tamil",
      "Film": "Chinna Ramasamy Periya Ramasamy",
      "Director": "R. V. Udayakumar",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 761,
      "Language": "Tamil",
      "Film": "Kanmani Nee Varai",
      "Director": "Unknown",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 762,
      "Language": "Tamil",
      "Film": "Poonjolai",
      "Director": "Gangai Amaran",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 763,
      "Language": "Tamil",
      "Film": "Punniyavathi",
      "Director": "Subburaj",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 764,
      "Language": "Tamil",
      "Film": "Thenpandi Singam",
      "Director": "Ilaiyabharathy",
      "Year": 1997,
      "Songs": []
    },
    {
      "FilmID": 765,
      "Language": "Telugu",
      "Film": "Antahpuram",
      "Director": "Krishna Vamsi",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 766,
      "Language": "Tamil",
      "Film": "Kangalin Vaarthaigal",
      "Director": "Muktha S. Sundar",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 767,
      "Language": "Malayalam",
      "Film": "Anuragakottaram",
      "Director": "Vinayan",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 768,
      "Language": "Kannada",
      "Film": "Hoomale",
      "Director": "Nagathihalli Chandrashekar",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 769,
      "Language": "Malayalam",
      "Film": "Manjeeradhwani",
      "Director": "Bharathan",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 770,
      "Language": "Telugu",
      "Film": "Priyuralu",
      "Director": "Bharathan",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 771,
      "Language": "Tamil",
      "Film": "Kanmani Oru Kavidhai",
      "Director": "Bharathan",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 772,
      "Language": "Tamil",
      "Film": "Kadhal Kavithai",
      "Director": "Agathiyan",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 773,
      "Language": "Tamil",
      "Film": "Kizhakkum Merkkum",
      "Director": "Kalanjiyam",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 774,
      "Language": "Malayalam",
      "Film": "Kallu Kondoru Pennu",
      "Director": "Shyamaprasad",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 775,
      "Language": "Tamil",
      "Film": "Veera Thalattu",
      "Director": "Kasthuri Raja",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 776,
      "Language": "Tamil",
      "Film": "Dharma",
      "Director": "Keyaar",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 777,
      "Language": "Tamil",
      "Film": "Desiya Geetham",
      "Director": "Cheran",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 778,
      "Language": "Tamil",
      "Film": "Kannathal",
      "Director": "Bharathi Kannan",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 779,
      "Language": "Tamil",
      "Film": "Kumbakonam Gopalu",
      "Director": "Keyaar",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 780,
      "Language": "Tamil",
      "Film": "Kavalai Padathe Sagodhara",
      "Director": "Keyaar",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 781,
      "Language": "Tamil",
      "Film": "Poonthottam",
      "Director": "Kalanjiyam",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 782,
      "Language": "Tamil",
      "Film": "Senthooram",
      "Director": "Sangaman",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 783,
      "Language": "Tamil",
      "Film": "Thalaimurai",
      "Director": "Saravana Pandiyan",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 784,
      "Language": "Telugu",
      "Film": "Vinalani Vundi",
      "Director": "Ram Gopal Varma",
      "Year": 1998,
      "Songs": []
    },
    {
      "FilmID": 785,
      "Language": "Tamil",
      "Film": "Sethu",
      "Director": "Bala",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 786,
      "Language": "Tamil",
      "Film": "Bharani",
      "Director": "S. Ganeshraj",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 787,
      "Language": "Tamil",
      "Film": "Annan",
      "Director": "Anu Mohan",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 788,
      "Language": "Tamil",
      "Film": "Manam Virumbuthe Unnai",
      "Director": "M. Sivachandran",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 789,
      "Language": "Tamil",
      "Film": "Ponnu Veetukaran",
      "Director": "P. Vasu",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 790,
      "Language": "Tamil",
      "Film": "Thodarum",
      "Director": "Ramesh Khanna",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 791,
      "Language": "Tamil",
      "Film": "Anthapuram",
      "Director": "Krishna Vamsi",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 792,
      "Language": "Tamil",
      "Film": "Chinna Durai",
      "Director": "R. Chandra",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 793,
      "Language": "Tamil",
      "Film": "Housefull",
      "Director": "R. Parthiepan",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 794,
      "Language": "Tamil",
      "Film": "IPC 215 (Thuppu Koolikaran)",
      "Director": "Charuhasan",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 795,
      "Language": "Tamil",
      "Film": "Kummi Paattu",
      "Director": "Kasthuri Raja",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 796,
      "Language": "Telugu",
      "Film": "Preminchedi Endukamma",
      "Director": "Johnson",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 797,
      "Language": "Malayalam",
      "Film": "Friends",
      "Director": "Siddique",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 798,
      "Language": "Tamil",
      "Film": "Mugam",
      "Director": "Gnana Rajasekaran",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 799,
      "Language": "Tamil",
      "Film": "Nilave Mugam Kaattu",
      "Director": "Kalanjiyam",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 800,
      "Language": "Tamil",
      "Film": "Rajasthan",
      "Director": "R. K. Selvamani",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 801,
      "Language": "Tamil",
      "Film": "Time",
      "Director": "Geetha Krishna",
      "Year": 1999,
      "Songs": []
    },
    {
      "FilmID": 802,
      "Language": "Tamil",
      "Film": "Kadhal Rojavae",
      "Director": "Keyaar",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 803,
      "Language": "Tamil",
      "Film": "Kannukkul Nilavu",
      "Director": "Fazil",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 804,
      "Language": "Tamil",
      "Film": "Hey Ram",
      "Director": "Kamal Haasan",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 805,
      "Language": "Hindi",
      "Film": "Hey Ram",
      "Director": "Kamal Haasan",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 806,
      "Language": "Tamil",
      "Film": "Kakkai Siraginilae",
      "Director": "P. Vasu",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 807,
      "Language": "Tamil",
      "Film": "Karuvelam Pookkal",
      "Director": "Poomani",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 808,
      "Language": "Tamil",
      "Film": "Thirunelveli",
      "Director": "Bharathi Kannan",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 809,
      "Language": "Tamil",
      "Film": "Karisakattu Poove",
      "Director": "Kasthuri Raja",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 810,
      "Language": "Malayalam",
      "Film": "Kochu Kochu Santhoshangal",
      "Director": "Sathyan Anthikkad",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 811,
      "Language": "Tamil",
      "Film": "Bharathi",
      "Director": "Gnana Rajasekaran",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 812,
      "Language": "Tamil",
      "Film": "Ilayavan",
      "Director": "T. Babu",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 813,
      "Language": "English",
      "Film": "Pandavas: The Five Warriors",
      "Director": "Usha Ganesh Raja",
      "Year": 2000,
      "Songs": []
    },
    {
      "FilmID": 814,
      "Language": "Tamil",
      "Film": "Kutty",
      "Director": "Janaki Vishwanathan",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 815,
      "Language": "Tamil",
      "Film": "En Iniya Ponnilave",
      "Director": "Balu Mahendra",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 816,
      "Language": "Tamil",
      "Film": "Kasi",
      "Director": "Vinayan",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 817,
      "Language": "Tamil",
      "Film": "Friends",
      "Director": "Siddique",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 818,
      "Language": "Tamil",
      "Film": "Kanna Unnai Thedukiren",
      "Director": "Jeeva Selvaraj",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 819,
      "Language": "Tamil",
      "Film": "Aandan Adimai",
      "Director": "Manivannan",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 820,
      "Language": "Tamil",
      "Film": "Kadhal Jaathi",
      "Director": "Kasthuri Raja",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 821,
      "Language": "Tamil",
      "Film": "Kaatrukkenna Veli",
      "Director": "Pugazendhi Thangaraj",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 822,
      "Language": "Hindi",
      "Film": "Lajja",
      "Director": "Rajkumar Santoshi",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 823,
      "Language": "Kannada",
      "Film": "Usire",
      "Director": "A.X. Prabhu",
      "Year": 2001,
      "Songs": []
    },
    {
      "FilmID": 824,
      "Language": "Tamil",
      "Film": "Azhagi",
      "Director": "Thangar Bachan",
      "Year": 2002,
      "Songs": []
    },
    {
      "FilmID": 825,
      "Language": "Tamil",
      "Film": "Ivan",
      "Director": "R. Parthiepan",
      "Year": 2002,
      "Songs": []
    },
    {
      "FilmID": 826,
      "Language": "Tamil",
      "Film": "Devan",
      "Director": "C. Arunpandian",
      "Year": 2002,
      "Songs": []
    },
    {
      "FilmID": 827,
      "Language": "Tamil",
      "Film": "En Mana Vaanil",
      "Director": "Vinayan",
      "Year": 2002,
      "Songs": []
    },
    {
      "FilmID": 828,
      "Language": "Telugu",
      "Film": "Ninu Choodaka Nenundalenu",
      "Director": "R. Srinivas",
      "Year": 2002,
      "Songs": []
    },
    {
      "FilmID": 829,
      "Language": "Tamil",
      "Film": "Ramanaa",
      "Director": "A. R. Murugadoss",
      "Year": 2002,
      "Songs": []
    },
    {
      "FilmID": 830,
      "Language": "Tamil",
      "Film": "Solla Marandha Kadhai",
      "Director": "Thangar Bachan",
      "Year": 2002,
      "Songs": []
    },
    {
      "FilmID": 831,
      "Language": "Tamil",
      "Film": "Pithamagan",
      "Director": "Bala",
      "Year": 2003,
      "Songs": []
    },
    {
      "FilmID": 832,
      "Language": "Telugu",
      "Film": "Sambhu",
      "Director": "R Suresh Varma",
      "Year": 2003,
      "Songs": []
    },
    {
      "FilmID": 833,
      "Language": "Malayalam",
      "Film": "Manassinakkare",
      "Director": "Sathyan Anthikkad",
      "Year": 2003,
      "Songs": []
    },
    {
      "FilmID": 834,
      "Language": "Tamil",
      "Film": "Julie Ganapathy",
      "Director": "Balu Mahendra",
      "Year": 2003,
      "Songs": []
    },
    {
      "FilmID": 835,
      "Language": "Malayalam",
      "Film": "Nizhalkuthu",
      "Director": "Adoor Gopalakrishnan",
      "Year": 2003,
      "Songs": []
    },
    {
      "FilmID": 836,
      "Language": "Malayalam",
      "Film": "Mayamohithachandran",
      "Director": "Shibu",
      "Year": 2003,
      "Songs": []
    },
    {
      "FilmID": 837,
      "Language": "Tamil",
      "Film": "Konji Pesalaam",
      "Director": "R. Kaleeswaran",
      "Year": 2003,
      "Songs": []
    },
    {
      "FilmID": 838,
      "Language": "Tamil",
      "Film": "Manasellam",
      "Director": "Santhosh",
      "Year": 2003,
      "Songs": []
    },
    {
      "FilmID": 839,
      "Language": "Tamil",
      "Film": "Virumaandi",
      "Director": "Kamal Haasan",
      "Year": 2004,
      "Songs": []
    },
    {
      "FilmID": 840,
      "Language": "Kannada",
      "Film": "Namma Preethiya Ramu",
      "Director": "Sanjay-Vijay",
      "Year": 2004,
      "Songs": []
    },
    {
      "FilmID": 841,
      "Language": "Telugu",
      "Film": "Shiva Shankar",
      "Director": "Kapuganti Rajendra",
      "Year": 2004,
      "Songs": []
    },
    {
      "FilmID": 842,
      "Language": "Tamil",
      "Film": "Kamaraj",
      "Director": "A. Balakrishnan",
      "Year": 2004,
      "Songs": []
    },
    {
      "FilmID": 843,
      "Language": "Tamil",
      "Film": "Vishwa Thulasi",
      "Director": "Sumathy Ram",
      "Year": 2004,
      "Songs": []
    },
    {
      "FilmID": 844,
      "Language": "Tamil",
      "Film": "Adhu Oru Kana Kaalam",
      "Director": "Balu Mahendra",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 845,
      "Language": "Malayalam",
      "Film": "Achuvinte Amma",
      "Director": "Sathyan Anthikkad",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 846,
      "Language": "Tamil",
      "Film": "Chidambarathil Oru Appasamy",
      "Director": "Thangar Bachan",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 847,
      "Language": "Malayalam",
      "Film": "Ponmudipuzhayorathu",
      "Director": "Johnson Esthappan",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 848,
      "Language": "Malayalam",
      "Film": "Twinkle Twinkle Little Star",
      "Director": "Vayalar Madhavan Kutty",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 849,
      "Language": "Hindi",
      "Film": "Mumbai Xpress",
      "Director": "Singeetam Srinivasa Rao",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 850,
      "Language": "Tamil",
      "Film": "Mumbai Xpress",
      "Director": "Singeetam Srinivasa Rao",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 851,
      "Language": "Tamil",
      "Film": "Oru Naal Oru Kanavu",
      "Director": "Fazil",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 852,
      "Language": "Hindi",
      "Film": "Divorce: Not Between Husband and Wife",
      "Director": "M.J. Ramanan",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 853,
      "Language": "Tamil",
      "Film": "Kasthuri Maan",
      "Director": "A. K. Lohithadas",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 854,
      "Language": "Tamil",
      "Film": "Karakattakari",
      "Director": "Bharathi Kannan",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 855,
      "Language": "Tamil",
      "Film": "Pon Megalai",
      "Director": "Sakthi Chithran",
      "Year": 2005,
      "Songs": []
    },
    {
      "FilmID": 856,
      "Language": "Malayalam",
      "Film": "Rasathanthram",
      "Director": "Sathyan Anthikkad",
      "Year": 2006,
      "Songs": []
    },
    {
      "FilmID": 857,
      "Language": "Malayalam",
      "Film": "Pachakuthira",
      "Director": "Kamal",
      "Year": 2006,
      "Songs": []
    },
    {
      "FilmID": 858,
      "Language": "Hindi",
      "Film": "Shiva",
      "Director": "Ram Gopal Varma",
      "Year": 2006,
      "Songs": []
    },
    {
      "FilmID": 859,
      "Language": "Tamil",
      "Film": "Naan Oru Indhiyan",
      "Director": "Babu Ganesh",
      "Year": 2006,
      "Songs": []
    },
    {
      "FilmID": 860,
      "Language": "Tamil",
      "Film": "Uppu",
      "Director": "R. Selvaraj",
      "Year": 2006,
      "Songs": []
    },
    {
      "FilmID": 861,
      "Language": "Telugu",
      "Film": "Hope",
      "Director": "Satish Kasetty",
      "Year": 2006,
      "Songs": []
    },
    {
      "FilmID": 862,
      "Language": "Tamil",
      "Film": "Madhu",
      "Director": "K. Thennarasu",
      "Year": 2006,
      "Songs": []
    },
    {
      "FilmID": 863,
      "Language": "Kannada",
      "Film": "Aa Dinagalu",
      "Director": "K. M. Chaitanya",
      "Year": 2007,
      "Songs": []
    },
    {
      "FilmID": 864,
      "Language": "Tamil",
      "Film": "Kutra Pathirigai",
      "Director": "R. K. Selvamani",
      "Year": 2007,
      "Songs": []
    },
    {
      "FilmID": 865,
      "Language": "Telugu",
      "Film": "Anumanaspadam",
      "Director": "Vamsy",
      "Year": 2007,
      "Songs": []
    },
    {
      "FilmID": 866,
      "Language": "Hindi",
      "Film": "Cheeni Kum",
      "Director": "Balki",
      "Year": 2007,
      "Songs": []
    },
    {
      "FilmID": 867,
      "Language": "Tamil",
      "Film": "Inimey Nangathan",
      "Director": "S. Venkibabu",
      "Year": 2007,
      "Songs": []
    },
    {
      "FilmID": 868,
      "Language": "Malayalam",
      "Film": "Vinodayathra",
      "Director": "Sathyan Anthikkad",
      "Year": 2007,
      "Songs": []
    },
    {
      "FilmID": 869,
      "Language": "Malayalam",
      "Film": "Sooryan",
      "Director": "V. M. Vinu",
      "Year": 2007,
      "Songs": []
    },
    {
      "FilmID": 870,
      "Language": "Tamil",
      "Film": "Maya Kannadi",
      "Director": "Cheran",
      "Year": 2007,
      "Songs": []
    },
    {
      "FilmID": 871,
      "Language": "Telugu",
      "Film": "Sunny",
      "Director": "Kamalakar",
      "Year": 2007,
      "Songs": []
    },
    {
      "FilmID": 872,
      "Language": "Tamil",
      "Film": "Dhanam",
      "Director": "G. Siva",
      "Year": 2008,
      "Songs": []
    },
    {
      "FilmID": 873,
      "Language": "Malayalam",
      "Film": "Innathe Chintha Vishayam",
      "Director": "Sathyan Anthikkad",
      "Year": 2008,
      "Songs": []
    },
    {
      "FilmID": 874,
      "Language": "Malayalam",
      "Film": "SMS",
      "Director": "Surjulan",
      "Year": 2008,
      "Songs": []
    },
    {
      "FilmID": 875,
      "Language": "Telugu",
      "Film": "Oh My God",
      "Director": "Giridhar Gopal",
      "Year": 2008,
      "Songs": []
    },
    {
      "FilmID": 876,
      "Language": "Tamil",
      "Film": "Uliyin Osai",
      "Director": "Ilavenil",
      "Year": 2008,
      "Songs": []
    },
    {
      "FilmID": 877,
      "Language": "Tamil",
      "Film": "Kangalum Kavipaduthey",
      "Director": "K. Chandranath",
      "Year": 2008,
      "Songs": []
    },
    {
      "FilmID": 878,
      "Language": "Tamil",
      "Film": "Naan Kadavul",
      "Director": "Bala",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 879,
      "Language": "Telugu",
      "Film": "Mallepuvvu",
      "Director": "V. Samudra",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 880,
      "Language": "Malayalam",
      "Film": "Bhagyadevatha",
      "Director": "Sathyan Anthikkad",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 881,
      "Language": "Malayalam",
      "Film": "Kerala Varma Pazhassi Raja",
      "Director": "Hariharan",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 882,
      "Language": "Kannada",
      "Film": "Bhagyada Balegara",
      "Director": "Sai Prakash",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 883,
      "Language": "Tamil",
      "Film": "Azhagar Malai",
      "Director": "S.P. Rajkumar",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 884,
      "Language": "Kannada",
      "Film": "Prem Kahani",
      "Director": "R. Chandru",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 885,
      "Language": "Hindi",
      "Film": "Chal Chalein",
      "Director": "Ujjwal Singh",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 886,
      "Language": "Tamil",
      "Film": "Vaalmiki",
      "Director": "G. Anantha Narayanan",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 887,
      "Language": "Tamil",
      "Film": "Kadhal Kadhai",
      "Director": "Velu Prabhakaran",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 888,
      "Language": "Hindi",
      "Film": "Paa",
      "Director": "Balki",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 889,
      "Language": "Tamil",
      "Film": "Jaganmohini",
      "Director": "N.K. Viswanathan",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 890,
      "Language": "Tamil",
      "Film": "Kannukulle",
      "Director": "Lena Moovendhar",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 891,
      "Language": "Tamil",
      "Film": "Mathiya Chennai",
      "Director": "Vivekanand & Veerasingam",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 892,
      "Language": "Telugu",
      "Film": "Ajantha",
      "Director": "Kathaka Thirumavalavan",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 893,
      "Language": "Malayalam",
      "Film": "Ajantha",
      "Director": "Kathaka Thirumavalavan",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 894,
      "Language": "Kannada",
      "Film": "Ajantha",
      "Director": "Kathaka Thirumavalavan",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 895,
      "Language": "Tamil",
      "Film": "Ajantha",
      "Director": "Kathaka Thirumavalavan",
      "Year": 2009,
      "Songs": []
    },
    {
      "FilmID": 896,
      "Language": "Telugu",
      "Film": "Om Shanti",
      "Director": "Prakash Dantaluri",
      "Year": 2010,
      "Songs": []
    },
    {
      "FilmID": 897,
      "Language": "Kannada",
      "Film": "Suryakaanti",
      "Director": "K. M. Chaitanya",
      "Year": 2010,
      "Songs": []
    },
    {
      "FilmID": 898,
      "Language": "Malayalam",
      "Film": "Kadha Thudarunnu",
      "Director": "Sathyan Anthikkad",
      "Year": 2010,
      "Songs": []
    },
    {
      "FilmID": 899,
      "Language": "Kannada",
      "Film": "Nannavanu",
      "Director": "Srinivas Raju",
      "Year": 2010,
      "Songs": []
    },
    {
      "FilmID": 900,
      "Language": "Telugu",
      "Film": "Gaayam 2",
      "Director": "Praveen Sri",
      "Year": 2010,
      "Songs": []
    },
    {
      "FilmID": 901,
      "Language": "Tamil",
      "Film": "Nandalala",
      "Director": "Mysskin",
      "Year": 2010,
      "Songs": []
    },
    {
      "FilmID": 902,
      "Language": "Tamil",
      "Film": "Ayyan",
      "Director": "Kendiran Muniyaswamy",
      "Year": 2011,
      "Songs": []
    },
    {
      "FilmID": 903,
      "Language": "Tamil",
      "Film": "Ponnar Shankar",
      "Director": "Thiagarajan",
      "Year": 2011,
      "Songs": []
    },
    {
      "FilmID": 904,
      "Language": "Tamil",
      "Film": "Azhagarsamiyin Kudhirai",
      "Director": "Suseenthiran",
      "Year": 2011,
      "Songs": []
    },
    {
      "FilmID": 905,
      "Language": "Kannada",
      "Film": "Hare Rama Hare Krishna",
      "Director": "CV Ashok Kumar",
      "Year": 2011,
      "Songs": []
    },
    {
      "FilmID": 906,
      "Language": "Malayalam",
      "Film": "Snehaveedu",
      "Director": "Sathyan Anthikkad",
      "Year": 2011,
      "Songs": []
    },
    {
      "FilmID": 907,
      "Language": "Telugu",
      "Film": "Sri Rama Rajyam",
      "Director": "Bapu",
      "Year": 2011,
      "Songs": []
    },
    {
      "FilmID": 908,
      "Language": "Marathi",
      "Film": "HELLO Jai Hind!",
      "Director": "Gajendra Ahire",
      "Year": 2011,
      "Songs": []
    },
    {
      "FilmID": 909,
      "Language": "Tamil",
      "Film": "Sengathu Bhoomiyilae",
      "Director": "M. Rathnakumar",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 910,
      "Language": "Tamil",
      "Film": "Dhoni",
      "Director": "Prakash Raj",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 911,
      "Language": "Telugu",
      "Film": "Dhoni",
      "Director": "Prakash Raj",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 912,
      "Language": "Kannada",
      "Film": "Prasad",
      "Director": "Manoj Sati",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 913,
      "Language": "Tamil",
      "Film": "Mudhalvar Mahatma",
      "Director": "A.Balakrishnan",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 914,
      "Language": "Malayalam",
      "Film": "Ajantha",
      "Director": "Kataka Thirumavalan",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 915,
      "Language": "Malayalam",
      "Film": "Puthiya Theerangal",
      "Director": "Sathyan Anthikkad",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 916,
      "Language": "Tamil",
      "Film": "Mayilu",
      "Director": "Jeevan",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 917,
      "Language": "Telugu",
      "Film": "Yeto Vellipoyindhi Manasu",
      "Director": "Gautham Menon",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 918,
      "Language": "Tamil",
      "Film": "Neethaane En Ponvasantham",
      "Director": "Gautham Menon",
      "Year": 2012,
      "Songs": []
    },
    {
      "FilmID": 919,
      "Language": "Telugu",
      "Film": "Gundello Godari",
      "Director": "Kumar Nagendra",
      "Year": 2013,
      "Songs": []
    },
    {
      "FilmID": 920,
      "Language": "Tamil",
      "Film": "Maranthen Mannithen",
      "Director": "Kumar Nagendra",
      "Year": 2013,
      "Songs": []
    },
    {
      "FilmID": 921,
      "Language": "Marathi",
      "Film": "Touring Talkies",
      "Director": "Gajendra Ahire",
      "Year": 2013,
      "Songs": []
    },
    {
      "FilmID": 922,
      "Language": "Tamil",
      "Film": "Onaayum Aatukuttiyum",
      "Director": "Mysskin",
      "Year": 2013,
      "Songs": []
    },
    {
      "FilmID": 923,
      "Language": "Tamil",
      "Film": "Chithirayil Nilachoru",
      "Director": "R. Sundarrajan",
      "Year": 2013,
      "Songs": []
    },
    {
      "FilmID": 924,
      "Language": "Tamil",
      "Film": "Thalaimuraigal",
      "Director": "Balu Mahendra",
      "Year": 2013,
      "Songs": []
    },
    {
      "FilmID": 925,
      "Language": "Tamil",
      "Film": "Oru Oorla",
      "Director": "K.C.Vasanth Kumar",
      "Year": 2014,
      "Songs": []
    },
    {
      "FilmID": 926,
      "Language": "Kannada",
      "Film": "Oggarane",
      "Director": "Prakash Raj",
      "Year": 2014,
      "Songs": []
    },
    {
      "FilmID": 927,
      "Language": "Telugu",
      "Film": "Ulavacharu Biryani",
      "Director": "Prakash Raj",
      "Year": 2014,
      "Songs": []
    },
    {
      "FilmID": 928,
      "Language": "Tamil",
      "Film": "Un Samayal Arayil",
      "Director": "Prakash Raj",
      "Year": 2014,
      "Songs": []
    },
    {
      "FilmID": 929,
      "Language": "Kannada",
      "Film": "Drishya",
      "Director": "P.Vasu",
      "Year": 2014,
      "Songs": []
    },
    {
      "FilmID": 930,
      "Language": "Tamil",
      "Film": "Megha",
      "Director": "Karthik Rishi",
      "Year": 2014,
      "Songs": []
    },
    {
      "FilmID": 931,
      "Language": "Tamil",
      "Film": "Touring Talkies",
      "Director": "S. A. Chandrasekhar",
      "Year": 2015,
      "Songs": []
    },
    {
      "FilmID": 932,
      "Language": "Hindi",
      "Film": "Shamitabh",
      "Director": "R. Balki",
      "Year": 2015,
      "Songs": []
    },
    {
      "FilmID": 933,
      "Language": "Kannada",
      "Film": "Mythri",
      "Director": "B.M.Giriraj",
      "Year": 2015,
      "Songs": []
    },
    {
      "FilmID": 934,
      "Language": "Telugu",
      "Film": "Yevade Subramanyam",
      "Director": "Nag Ashwin",
      "Year": 2015,
      "Songs": []
    },
    {
      "FilmID": 935,
      "Language": "Malayalam",
      "Film": "Mythri",
      "Director": "B.M.Giriraj",
      "Year": 2015,
      "Songs": []
    },
    {
      "FilmID": 936,
      "Language": "Telugu",
      "Film": "Rudramadevi",
      "Director": "Gunasekhar",
      "Year": 2015,
      "Songs": []
    },
    {
      "FilmID": 937,
      "Language": "Telugu",
      "Film": "Abbayitho Ammayi",
      "Director": "Ramesh Varma",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 938,
      "Language": "Tamil",
      "Film": "Tharai Thappattai",
      "Director": "Bala",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 939,
      "Language": "Kannada",
      "Film": "Game",
      "Director": "A. M. R. Ramesh",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 940,
      "Language": "Hindi",
      "Film": "Ki & Ka",
      "Director": "R. Balki",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 941,
      "Language": "Tamil",
      "Film": "Oyee",
      "Director": "Francis Markus",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 942,
      "Language": "Tamil",
      "Film": "Kida Poosari Magudi",
      "Director": "J. Jayakumar",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 943,
      "Language": "Tamil",
      "Film": "Amma Kanakku",
      "Director": "Ashwini Iyer Tiwari",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 944,
      "Language": "Tamil",
      "Film": "Oru Melliya Kodu",
      "Director": "A. M. R. Ramesh",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 945,
      "Language": "Tamil",
      "Film": "Appa",
      "Director": "Samuthirakani",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 946,
      "Language": "Tamil",
      "Film": "Kutrame Thandanai",
      "Director": "M. Manikandan",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 947,
      "Language": "Telugu",
      "Film": "Mana Oori Ramayanam",
      "Director": "Prakash Raj",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 948,
      "Language": "Kannada",
      "Film": "Idolle Ramayana",
      "Director": "Prakash Raj",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 949,
      "Language": "Malayalam",
      "Film": "Daffadar",
      "Director": "Johnson Esthappan",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 950,
      "Language": "English",
      "Film": "Love & Love Only",
      "Director": "Julian Karikalan",
      "Year": 2016,
      "Songs": []
    },
    {
      "FilmID": 951,
      "Language": "Tamil",
      "Film": "Muthuramalingam",
      "Director": "Rajadurai",
      "Year": 2017,
      "Songs": []
    },
    {
      "FilmID": 952,
      "Language": "Tamil",
      "Film": "Enga Amma Rani",
      "Director": "S.Bani",
      "Year": 2017,
      "Songs": []
    },
    {
      "FilmID": 953,
      "Language": "Tamil",
      "Film": "Oru Iyakkunarin Kadhal Diary",
      "Director": "Velu Prabhakaran",
      "Year": 2017,
      "Songs": []
    },
    {
      "FilmID": 954,
      "Language": "Malayalam",
      "Film": "Clint",
      "Director": "Harikumar",
      "Year": 2017,
      "Songs": []
    },
    {
      "FilmID": 955,
      "Language": "Telugu",
      "Film": "Kathalo Rajakumari",
      "Director": "Mahesh Surapaneni",
      "Year": 2017,
      "Songs": []
    },
    {
      "FilmID": 956,
      "Language": "Tamil",
      "Film": "Kalathur Gramam",
      "Director": "Saran K Adwaithan",
      "Year": 2017,
      "Songs": []
    },
    {
      "FilmID": 957,
      "Language": "Tamil",
      "Film": "Naachiyaar",
      "Director": "Bala",
      "Year": 2018,
      "Songs": []
    },
    {
      "FilmID": 958,
      "Language": "Tamil",
      "Film": "Sometimes",
      "Director": "Priyadarshan",
      "Year": 2018,
      "Songs": []
    },
    {
      "FilmID": 959,
      "Language": "Tamil",
      "Film": "18.05.2009",
      "Director": "K Ganeshan",
      "Year": 2018,
      "Songs": []
    },
    {
      "FilmID": 960,
      "Language": "Tamil",
      "Film": "Merku Thodarchi Malai",
      "Director": "Lenin Bharathi",
      "Year": 2018,
      "Songs": []
    },
    {
      "FilmID": 961,
      "Language": "Tamil",
      "Film": "60 Vayadu Maaniram",
      "Director": "Radha Mohan",
      "Year": 2018,
      "Songs": []
    },
    {
      "FilmID": 962,
      "Language": "Hindi",
      "Film": "Happi",
      "Director": "Bhavna Talwar",
      "Year": 2019,
      "Songs": []
    }
  ];

  getMovies(): Array<Movie> {
    return this.movies;
  }

}
