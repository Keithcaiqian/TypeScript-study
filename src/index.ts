//类装饰器

function test(target: new (...args:any[]) => object){
    console.log('test')
}

function test2(){
    console.log('test2')
    return function(target: new (...args:any[]) => object){
        console.log('test3')
    }
}

@test
@test2()
class B {

}

// 成员装饰器和属性装饰器
function enumerable(target: any, key: string, descriptor: PropertyDescriptor) {
    // console.log(target, key, descriptor);
    descriptor.enumerable = true;
}

function useless(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.value = function () {
        console.warn(key + "方法已过期");
    }
}

function member(target:any, key: string){
    console.log(target,key)
}

class A {
    @member
    a:string;

    @member
    static b:string;

    @enumerable
    @useless
    method1() {
        console.log("method1");
    }

    @enumerable
    method2() {

    }
}

const a = new A();
a.method1();

