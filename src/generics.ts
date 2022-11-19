//Generics

const score: Array<number> = []
const names: Array<string> = []



function identityTwo(val: any): any{
    return val;
}

function identityThree<Type>(val: Type) :Type {

    return val
}

// identityThree("three")

function identityFour<T>(value: T): T{
    return value;
}

interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>({})


//gernerics with arrays.

function getSearchProducts<T>(products: T[]): T{
  
    const myIndex = 3
    return products[myIndex];


}

//generic arrow function.


const getMoreSearchProducts = <T,> (products: T[]): T =>{

    //do some database operations.
    const myIndex = 4
    return products[myIndex]
}


interface Database{
    connection :string,
    username: string,
    password: string

}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {



    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3,{})


    

