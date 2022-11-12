import React from 'react';

const Detail = () => {

        // Tuples Type
        // let a  = ["mah", 5, {p: 3}];
        // a[0] = false; // boolean does not exist withing array
        // let f:[number, string, boolean] = [5, " mah", true];
        // f[0] = "majh"; // its take only number 
        // f[0] = 5;
        
        // enum  Type
        // enum ResponseType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };
        // interface ApiResponse<T> {
        //     name: string,
        //     data: T,
        //     type: ResponseType,
        // }
        // let ResponseData:ApiResponse<object> = {
        //     name: "mah",
        //     data: [1,3],
        //     type: ResponseType.SUCCESS
        // }

    // Generic in Typescript
    // const  addId = <T extends string| number>(obj: T) => {
    //     return {obj, id: 1}
    // }
    // addId("mah");

    // Generic and interface in Typescript
    // interface ApiResponse<T> {
    //     name: string,
    //     data: T
    // }
    // let ResponseData:ApiResponse<object> = {
    //     name: "mah",
    //     data: [1,3]
    // }

    // Interface
    // interface isPlayer {
    //     name: string;
    //     age: number;
    //     play(): void;
    // }
    // interface gamer{
    //     name: string,
    //     age: number,
    // }
    // class Player  implements isPlayer {
    //     public name: string;
    //     readonly age: number;
    //     constructor(val1 : string, val2 : number) {
    //         this.name = val1;
    //         this.age = val2;
    //     }
    //     play(){
    //         console.log(`${this.name} and ${this.age}`);
    //     }
    // }
    // let res: gamer;
    // res = new Player("mah", 4);

    // let resCollection:gamer[] = [];
    // resCollection.push(res);

    // Function Signatures
    // let handleFunc : ( a:  (string  | number), b:  string  ) => string; 
    
    // handleFunc = (a:  (string  | number), b:  string ): string => {
    //     return "ok";
    // }
    // working class and access modifiers
    // class Player {
    //     public name: string;
    //     readonly age: number;
    //     constructor(val1 : string, val2 : number) {
    //         this.name = val1;
    //         this.age = val2;
    //     }
    //     play(){
    //         console.log(`${this.name} and ${this.age}`);
    //     }
    // }

    // let res = new Player("mah", "4");
    // res = new Player("mah", 4);

    // let resCollection:Player[] = [];
    // resCollection.push(1);
    // resCollection.push(res);
    
    
    // handleFunc = ("1","3")   

    // // Type Aliases
    // type objType = {
    //     id: number,
    //     name: string,
    // }
    // type newNum = string | number;

    // let handleFunc : Function; 
    // handleFunc = (a: newNum  ): newNum => {
    //     return a;
    // }
    // handleFunc("mah", "taz", "5");
    // const handle = (c: objType ): object=> {
    //     return c;
    // }
    // handle({id: 5, name:"mahi"});


    // Function Type
    // let handleFunc : Function; 

    // handleFunc = (a:  string, b:  string ): string => {
    //     return a;
    // }
    // handleFunc("mah", "taz", "5");
    // // default value and condition and set return type
    // const handle = (c: string = 'default', d?: string ): string => {
    //     return c;
    // }
    // handle("mah", "taz");





    // // Any Type
    // let val : any; 
    // let obj : any; 
    // let arr : any[]; 
    //   // variable
    // val = 1;   val = "ok"; val = false; 
    //   // Object
    // obj = { id:2 }; obj = 2; obj = "2"; 
    //   // Array
    // arr = ["FXY"]; arr = [ 1]; arr = [false]; 


    // // Union     
    // let val : number | string; 
    // let obj : object | number; 
    // let arr : (string | number)[]; 
    // let objTemp: {
    //     id: number,
    //     name: string,
    // }

    // // variable
    // val = 1;   val = "ok"; val = false; 
    // // Object
    // obj = { id:2 }; obj = 2; obj = "2"; 
    // // Array
    // arr = ["FXY"]; arr = [ 1]; arr = [false]; 
    // // fixed template
    // objTemp = { id:3, name: "mah" }; 
    // objTemp = { id:"mah", val: false } 


    // Explicit 
    // let val : number; 
    // let obj : object; 
    // let arr : string[]; 

    // val = 1;   val = "ok"; // variable
    // obj = {id:2, name:"food" }; obj = 2; // Object
    // arr = ["FXY", "FLY"]; arr = ["FXY", 1]; // Array
    return (
        <div>
            Checking
        </div>
    );
};

export default Detail;