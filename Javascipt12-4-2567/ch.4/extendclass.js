//Parent class
class Media {
    constructor(info){
        this.publishData = info.publishData;
        this.name = info.name;
        this.album = info.album
    }
}
//Child class
class song extends Media{
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
        this.album = songData.album;
    }
}
const mySong = new song ({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishData:1975,
    album:"heaven"
});

console.log(mySong);