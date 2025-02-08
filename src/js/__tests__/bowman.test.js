
import Bowman from "../bowman"

test('создание экземпляра класса Bowman', ()=>{
    const hero = {
        name: 'Goga',
         type: 'Bowman', 
         health: 100,
        level: 1,
        attack: 25,
        defence: 25,
        };
    const result = new Bowman ('Goga','Bowman');
    expect(result).toEqual(hero)

}) 

test('тест метода levelUp', ()=>{

    const warrior = new Bowman('Bowman','Bowman');
    warrior.levelUp();

    const warriorImproved = {
        name: "Bowman",
        type: "Bowman",
        health: 100,
        level: 2,
        attack: 30,
        defence: 30   
    };
    
    expect(warrior).toEqual(warriorImproved)

})

test ('тест метода damage', ()=>{

    const warrior = new Bowman('Bowman','Bowman');
    warrior.damage(100);

    const warriorWounded = {
        name: "Bowman",
        type: "Bowman",
        health: 25,
        level: 1,
        attack: 25,
        defence: 25
    };
    expect(warrior).toEqual(warriorWounded)

});



