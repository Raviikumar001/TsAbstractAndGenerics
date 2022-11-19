
interface TakePhoto{

  cameraMode:string,
  filter:string,
  burst:number
}

interface story{
    createStory(): void
}


class Instagram implements TakePhoto, story{

    constructor(
        public cameraMode: string,
        public filter:string,
        public burst: number 
    ){}

    createStory(): void {
        console.log('hello')
    }
}

class Youtube implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter:string,
        public burst: number ,
        public shorts: string
    ){}
}

