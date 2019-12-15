class Track{
    constructor(length, artist, name){
        this.artist = artist;
        this.name = name;
        const hours = () => {
            return String(Math.floor(length/60)) 
        };
        const minutes = () =>{
            if (length%60 < 10)
                return '0' + String(length%60)
            return String(length%60)
        }
        this.length = hours() + ': ' + minutes();
    }
}

/*
 EXAMPLE USAGE:
const t = new Track(65, 'Justin Beiber', 'Despacito');
console.log(t.length); //prints "1: 05"
console.log(t.artist)
console.log(t.name)
*/
