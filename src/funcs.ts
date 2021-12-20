import { Mark, Color } from "./enums";
import { Deck } from "./types";

export function createDeck():Deck{
    const deck: Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color)
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m
            })
        }
    }    
    return deck;
}

export function printDeck(deck:Deck){
    let res:string = '\n';
    for (let i = 0; i < deck.length; i++) {
        let temMark: string;
        if(i % 6 === 0){
            temMark = '\n'
        }else{
            temMark = '\t'
        }
        res += deck[i].mark + deck[i].color + temMark
    }
    console.log(res)
}