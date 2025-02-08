// Реализуйте описанную иерархию классов: класс Character является
// родительским для всех остальных, 6 дочерних классов Bowrman,
// Swordsman, Magician, Daemon, Undead, Zombie от него наследуются,
// сами задавая свои характеристики.

// Свойства, которые должны быть у объектов класса Character:
// name - имя
// type - тип
// health - уровень жизни
// level - уровень персонажа
// attack - атака
// defence - защита

// Конструктор класса должен соответствовать следующим требованиям:
// name - строка, min - 2 символа, max - 10
// type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie
// В случае, если передаются некорректные значения,
//  должна выбрасываться ошибка (throw new Error(...)).

// В вашей функции автоматически должны устанавливаться значения следующих полей:
// health: 100
// level: 1
// Атака/защита:
//     Bowman: 25/25
//     Swordsman: 40/10
//     Magician: 10/40
//     Undead: 25/25
//     Zombie: 40/10
//     Daemon: 10/40

/* РЕЦЕНЗИЯ */
// В методах levelUp и damage условные конструкции лучше инвертировать.
// То есть, в случае невалидного значения сразу выбрасывать ошибку.
// В таком случае, остальные действия получится реализовать после условной конструкции.
// Так получится меньше вложенности…
// В дочерних классах переопределять эти методы (levelUp и damage) не нужно.
// Вы можете их полностью удалить, чтобы реализация полностью бралась из родителя…
// А так же, в конструкторах, вызов super(name,type,health,level,attack=40,defence=10);
// не совсем корректный. В JavaScript нет именованных параметров. Вам следовало просто 
// передавать значения: super(name,type,health,level,40,10);,
// да и в параметрах конструктора атака и защита не используются, так что, их стоит удалить.



export default class Character {
    constructor(name,type,health=100,level=1,attack,defence){
        this.name=name;
        this.type=type;
        this.health=health;
        this.level=level;
        this.attack=attack;
        this.defence=defence;

    const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if ( this.name.length>10 || this.name.length<2) {
        throw new Error(" Имя должно содержать от 2 до 10 символов "); // (*)
        };

    if (!typeList.includes(this.type)){
        throw new Error("Неверный тип героя");
        }   
    }

    // Реализуйте в классе Character метод levelUp, 
    // который работает следующим образом:

    // На 1 повышает поле level;
    // На 20% повышает показатели attack и defence;
    // Приводит показатель health к значению 100.

    // Метод должен работать только если показатель жизни
    //  не равен 0. В противном случае генерируется ошибка
    // (нельзя повысить левел умершего).

    /* РЕЦЕНЗИЯ */
    // В методах levelUp и damage условные конструкции лучше инвертировать.
    // То есть, в случае невалидного значения сразу выбрасывать ошибку.
    // В таком случае, остальные действия получится реализовать после условной конструкции.
    // Так получится меньше вложенности…

    levelUp(){
        // console.log('Работает метод levelUp');
        if (this.health>0){
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else{
        throw new Error("Нельзя повысить уровень умершего героя");
        }
    }

    // Реализуйте в класса Character метод damage(points),
    // который меняет внутреннее состояние объекта 
    // (points - это урон, наносимый персонажу). 
    // Метод damage(points) ничего не возвращает и рассчитывает
    // итоговое изменение жизни персонажа (health)
    // по формуле: health -= points * (1 - defence / 100),
    // учитывая, что значение health >= 0.

    damage(points){
        if(this.health>0){
            // console.log(`Рассчитываем показатель жизни героя `);
            // console.log(`Начальный уровень жизни героя - ${this.health},  урон - ${points}`);
            this.health -= points * (1 - this.defence / 100);
            // console.log(`Новый показатель жизни героя составляет ${this.health}`);
            if (this.health<=0) console.log ('Герой умер')
        } 
        else{
            throw new Error("Нельзя нанести урон умершему герою");
            }
    }

}

// ПРОВЕРКА:
// let hero = new Character ('SuperHero','Magician',100,8,80,90)
// console.log(hero)

// let warrior = new Character('Bowman','Bowman', 100 , 1, 40, 50);
// console.log(warrior);
//  warrior.levelUp();
// console.log(warrior);
// warrior.damage(30)
// console.log(warrior);
// let hero = new Character ('SuperHeroXXX','Magician',100,8,80,90)
