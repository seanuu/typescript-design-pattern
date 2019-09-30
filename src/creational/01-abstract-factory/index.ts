/**
 * 抽象工厂（Abstract factory）
 * 定义：提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类
 * 结构：
 *     -- AbstractFactory：抽象工厂
 *     -- ConcreteFactory：具体工厂
 *     -- AbstractProduct：抽象产品
 *     -- Product：具体产品
 * 适用场景：
 *     -- 一系列相关的产品对象
 *     -- 系统要由多个产品系列进行配置
 *     -- 系统要独立于具体的产品
 * 优点：
 *     -- 分离了具体的类
 *     -- 有利于产品的一致性
 * 缺点：
 *     -- 难以支持新种类的产品
 * 相关模式：
 *     -- 抽象工厂模式通常用工厂方法实现，也可以用原型模式实现
 *     -- 一个具体的工厂通常是一个单例模式
 */
abstract class AbstractProductA {
    abstract methodA(): string;
}

abstract class AbstractProductB {
    abstract methodB(): string;
}

abstract class AbstractFactory {
    abstract createProductA(): AbstractProductA;

    abstract createProductB(): AbstractProductB;
}

class ProductA1 extends AbstractProductA {
    methodA(): string {
        return 'this is methodA of ProductA1';
    }
}

class ProductA2 extends AbstractProductA {
    methodA(): string {
        return 'this is methodA of ProductA2';
    }
}

class ProductB1 extends AbstractProductB {
    methodB(): string {
        return 'this is methodB of ProductB1';
    }
}

class ProductB2 extends AbstractProductB {
    methodB(): string {
        return 'this is methodB of ProductB2';
    }
}

class ConcreteFactory1 extends AbstractFactory {
    createProductA(): AbstractProductA {
        return new ProductA1();
    }

    createProductB(): AbstractProductB {
        return new ProductB1();
    }
}

class ConcreteFactory2 extends AbstractFactory {
    createProductA(): AbstractProductA {
        return new ProductA2();
    }

    createProductB(): AbstractProductB {
        return new ProductB2();
    }
}

class Tester {
    private productA: AbstractProductA;
    private productB: AbstractProductB;

    constructor(factory: AbstractFactory) {
        this.productA = factory.createProductA();
        this.productB = factory.createProductB();
    }

    test() {
        console.log(this.productA.methodA());
        console.log(this.productB.methodB());
    }
}
