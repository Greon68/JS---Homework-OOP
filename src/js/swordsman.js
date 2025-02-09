import Character from "./character"
export default class Swordsman extends Character {
    constructor(name,type,){
    super(name,type,40,10);  
    }

    levelUp(){
        super.levelUp()
    }

    damage(points){
        super.damage(points)
    }
}