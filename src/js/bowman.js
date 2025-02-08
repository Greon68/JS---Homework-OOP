import Character from "./character"
export default class Bowman extends Character {
    constructor(name,type,health,level,attack,defence){
    super(name,type,health,level,attack=25,defence=25);
    
    }

    levelUp(){
        super.levelUp()
    }

    damage(points){
        super.damage(points)
    }
}



