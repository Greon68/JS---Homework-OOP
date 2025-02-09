import Character from "./character"
export default class Undead extends Character {
    constructor(name,type){
    super(name,type,25,25);
    
    }

    levelUp(){
        super.levelUp()
    }

    damage(points){
        super.damage(points)
    }
}