 const cat = {
    name: "penny",
    age: 88,
    whatName(){
        return this.name;
    },
 };

 console.log(cat.whatName());
 cat.name = "huh";
 console.log(cat.whatName());