type Deck = NormalCard[]
type Color = '♠' | '♥' | '♣' | '♦'
type NormalCard = {
    color:Color,
    mark:number
}

function createDeck():Deck{
    const deck: Deck = [];
    for (let i = 1; i <= 13; i++) {
        deck.push({
            color: '♠',
            mark: i
        })
        deck.push({
            color: '♥',
            mark: i
        })
        deck.push({
            color: '♣',
            mark: i
        })
        deck.push({
            color: '♦',
            mark: i
        })
    }
    return deck;
}

function printDeck(deck:Deck){
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

const deck = createDeck();
printDeck(deck)