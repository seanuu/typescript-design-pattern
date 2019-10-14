/**
 * 工厂方法（Factory Method）
 * 定义：定义一个用于创建对象的接口，让子类决定实例化哪个类。
 *      工厂方法使一个类的实例化延迟到其子类。
 * 结构：
 *     -- Product：抽象产品
 *     -- ConcreteProduct：具体产品
 *     -- Factory：抽象工厂
 *     -- ConcreteFactory：具体工厂
 * 适用场景：
 *     -- 当创建复杂对象的算法应该独立于该对象的组成部分以及他们的装配方式时
 *     -- 当构造过程必须允许被构造的对象有不同的表示时
 * 优点：
 *     -- 用工厂方法在一个类的内部创建对象通常比直接创建对象更灵活
 * 相关模式：
 *     -- 抽象工厂经常用工厂方法来实现
 *     -- 工厂方法通常在模板方法模式中被调用
 *     -- 原型模式不需要创建子类，但是通常要求一个针对产品类的初始化操作
 *        而工厂方法不需要这样的操作。
 */

abstract class Product {
    abstract use(): void;
}

abstract class Factory {
    abstract factoryMethod(type?: string): Product;
}

class ConcreteProduct extends Product {
    use(): void {
        console.log('use ConcreteProduct');
    }
}

class ConcreteFactory extends Factory {
    factoryMethod(): Product {
        return new ConcreteProduct();
    }
}

/**
 * example：子类决定实例化具体产品
 */
const factory = new ConcreteFactory();
const product = factory.factoryMethod();

/**
 * example：参数化工厂方法
 */
class Product2 extends Product{
    use(): void {
        console.log('use Product2');
    }
}

class ConcreteFactory2 extends Factory{
    factoryMethod(type: string): Product {
        if (type === 'product2') return new Product2();

        return new ConcreteProduct();
    }
}

const factory2 = new ConcreteFactory2();
const product2 = factory2.factoryMethod('product2');
