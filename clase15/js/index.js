// index.js
/* function myDecorator(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
        console.log('Ejecutando antes del método');
        const result = originalMethod.apply(this, args);
        console.log('Ejecutando después del método');
        return result;
    };
    return descriptor;
}

class MyClass {
    @myDecorator
    myMethod() {
        console.log('Dentro de myMethod');
    }
}

const instance = new MyClass();
instance.myMethod(); */
