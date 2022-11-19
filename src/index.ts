

 class User{


    public _coursecount =1
    readonly city: string = 'Jaipur';


    constructor(
        public email: string,
        public name: string,
        private userId: string
    ){}

    private deleteToken(){
        console.log('Token deleted');
    }

    get getAppleEmail():string{
        return `apple${this.name}`
    }

    get courseCount(): number{
        return this._coursecount
    }

    set courseCount(courseNum)
    {
        if(courseNum <=1)
        {
            throw new Error("course count should be more than 1")
        }
        this._coursecount = courseNum;
    }
 }

const ravi = new User('ravi@ravi.com', 'ravi', 'slll');


// ravi.deleteToken();


class subUser extends User{
    isFamily: boolean = true

    changeCourseCount(){
        this._coursecount = 4
    }

}