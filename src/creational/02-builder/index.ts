/**
 * 建造者（Builder）
 * 定义：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示
 * 结构：
 *     -- Builder：抽象建造者
 *     -- ConcreteBuilder：具体建造者
 *     -- Director：指挥者
 *     -- Product：产品
 * 适用场景：
 *     -- 当创建复杂对象的算法应该独立于该对象的组成部分以及他们的装配方式时
 *     -- 当构造过程必须允许被构造的对象有不同的表示时
 * 优点：
 *     -- 可以改变一个产品的内部表示
 *     -- 将构造代码和表示代码分开
 *     -- 可对构造过程进行更精细的控制
 * 相关模式：
 *     -- 抽象工厂与建造者模式相似，因为它也可以创建复杂对象
 *        主要的区别是建造者模式着重于一步步构造一个复杂对象，完成后才从建造者中取出产品
 *     -- 组合模式通常是用建造者模式生成的
 */

class Builder {
    buildPartA(arg: string): void {
    };

    buildPartB(arg: string): void {
    };

    buildPartC(arg: string): void {
    };

    getResult(): Product {
        return new Product();
    };
}

class Product {
    public partA: string;
    public partB: string;
    public partC: string;

    constructor() {
        this.partA = '';
        this.partB = '';
        this.partC = '';
    }
}

class ConcreteBuilder extends Builder {
    private product: Product;

    constructor() {
        super();
        this.product = new Product();
    }

    buildPartA(arg: string): void {
        this.product.partA = arg;
    }

    buildPartB(arg: string): void {
        this.product.partB = arg;
    }

    buildPartC(arg: string): void {
        this.product.partC = arg;
    }

    getResult(): Product {
        return this.product;
    }
}

/**
 * use example
 */
function createProduct(builder: Builder) {
    builder.buildPartA('arg1');
    builder.buildPartB('arg2');
    builder.buildPartC('arg3');

    return builder.getResult();
}

const productBuilder = new ConcreteBuilder();
const product = createProduct(productBuilder);
