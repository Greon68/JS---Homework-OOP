import Character from "./character"
export default class Magician extends Character {
    constructor(name,type,health,level,attack,defence){
    super(name,type,health,level,attack=10,defence=40);
    }

     levelUp(){
        super.levelUp()
    }

    damage(points){
        super.damage(points)
    }
}