//---------------------- typeof ---------------------
const a: string = 'asss'
const b: typeof a = 's'

class User {
    loginId: string
    loginPwd: string
}

// typeof User 也就是User构造函数 如果直接写User代表User的实例
function createUser(cls: typeof User): User{
    return new cls()
}

const u = createUser(User);

//---------------------- keyof ---------------------

interface Information {
    loginId: string,
    loginPwd: string,
    age: number
}

function printUserInformation(obj: Information, prop: keyof Information){
    console.log(obj[prop])
}
const user: Information = {
    loginId: '23',
    loginPwd:'34',
    age: 14
}
printUserInformation(user,'age');

//---------------------- keyof ---------------------
type Obj = {
    readonly [p in keyof Information]: Information[p]
}

type Obj2<T> = {
    readonly [p in keyof T]: T[p]
}

const u1: Obj = {
    loginId: '23',
    loginPwd:'34',
    age: 14
} 
const u2: Obj2<Information> = {
    loginId: '23',
    loginPwd:'34',
    age: 14
} 


