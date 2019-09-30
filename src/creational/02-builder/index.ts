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
 *        主要的区别是建造者模式着重于一步步构造一个复杂对象
 *     -- 组合模式通常是用建造者模式生成的
 */

abstract class Builder {
    abstract buildPartA(): void;

    abstract buildPartB(): void;

    abstract buildPartC(): void;
}

class Product {

}
