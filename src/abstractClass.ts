abstract class TakePhotoo{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void
    getReelTime(): number{

        return 8;
    }
    
}


class Instagramm extends TakePhotoo{

    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number
    )
    {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia");
    }



}

const rk = new Instagramm ('test','test',9)

rk.getReelTime()


