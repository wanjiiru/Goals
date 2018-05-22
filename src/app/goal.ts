// // export class Goal {
// // }

// export class Goal {
//     constructor(public id:number, public name:string){}
// }
// export class Goal {
//     constructor(public id:number, public name:string,public description:string){}
// }


// export class Goal {
//     public showDescription:boolean;
//     constructor(public id:number, public name:string,public description:string){
//         this.showDescription=false

//     }
// }

export class Goal {
    public showDescription:boolean
    constructor(public id:number, public name:string,public description:string,public completeDate:Date){
        this.showDescription=false

    }
}
