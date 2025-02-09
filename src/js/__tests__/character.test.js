import Character from "../character"


test('создание экземпляра класса Character', ()=>{
    const hero = {
        name: 'SuperHero',
         type: 'Magician', 
         health: 100,
        level: 1,
        attack: 80,
        defence: 90,
        };
    const result = new Character ('SuperHero','Magician',80,90);
    expect(result).toEqual(hero)

})   

test('тест метода levelUp', ()=>{

    const warrior = new Character('Bowman','Bowman', 40, 50);
    warrior.levelUp();

    const warriorImproved = {
        name: "Bowman",
        type: "Bowman",
        health: 100,
        level: 2,
        attack: 48,
        defence: 60   
    };
    
    expect(warrior).toEqual(warriorImproved)

})

test ('тест метода damage', ()=>{

    const warrior = new Character('Bowman','Bowman',  40, 50);
    warrior.damage(30);

    const warriorWounded = {
        name: "Bowman",
        type: "Bowman",
        health: 85,
        level: 1,
        attack: 40,
        defence: 50
    };
    expect(warrior).toEqual(warriorWounded)

});

