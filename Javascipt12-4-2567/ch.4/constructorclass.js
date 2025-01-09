class Song{
    constructor(title,artist){
        this.title = title;
        this.artist = artist;
    }
}

const mySong = new Song("slow dancing in the dark ", "joji");
console.log(mySong.title);