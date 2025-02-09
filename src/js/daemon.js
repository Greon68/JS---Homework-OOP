import Character from "./character"
/* РЕЦЕНЗИЯ */
// В дочерних классах переопределять эти методы (levelUp и damage) не нужно.
// Вы можете их полностью удалить, чтобы реализация полностью бралась из родителя…
// А так же, в конструкторах, вызов super(name,type,health,level,attack=40,defence=10);
// не совсем корректный. В JavaScript нет именованных параметров. Вам следовало просто 
// передавать значения: super(name,type,health,level,40,10);,
// да и в параметрах конструктора атака и защита не используются, так что, их стоит удалить

export default class  Daemon extends Character {
    constructor(name,type){
    super(name,type,10,40);
    
    }

   
}