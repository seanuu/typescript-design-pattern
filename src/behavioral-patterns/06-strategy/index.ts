/**
 * 策略模式（Strategy）
 * 定义：定义一系列的算法，把它们一个个封装起来，并且使它们可相互替换。
 *      本模式使得算法可独立于使用它的客户而变化。
 * 结构：
 *     -- Context（环境类）：环境类是使用算法的角色，它在解决某个问题（即实现某个方法）时可以
 *        采用多种策略。在环境类中维持一个对抽象策略类的引用实例，用于定义所采用的策略。
 *     -- Strategy（抽象策略类）：它为所支持的算法声明了抽象方法，是所有策略类的父类，它可以是抽
 *        象类或具体类，也可以是接口。环境类通过抽象策略类中声明的方法在运行时调用具体策略类中实现的算法。
 *     -- ConcreteStrategy（具体策略类）：它实现了在抽象策略类中声明的算法，在运行时，具体
 *        策略类将覆盖在环境类中定义的抽象策略类对象，使用一种具体的算法实现某个业务处理。
 * 适用场景：
 *     -- 许多相关的类仅仅是行为有异。“策略”提供了一种用多个行为中的一个行为来配置一个类的方法。
 *     -- 需要使用一个算法的不同变体。
 *     -- 算法使用客户不应该知道的数据。可使用策略模式以避免暴露复杂的、与算法有关的数据结构。
 *     -- 一个类定义了多种行为，并且这些行为在这个类的操作中以多个条件语句的形式出现。
 * 优点：
 *     -- 提供了对“开闭原则”的完美支持
 *     -- 提供了管理相关的算法族的办法。
 *     -- 使用策略模式可以避免多重条件选择语句。
 * 缺点：
 *     -- 难以支持新种类的产品
 * 相关模式：
 *     -- 抽象工厂模式通常用工厂方法实现，也可以用原型模式实现
 *     -- 一个具体的工厂通常是一个单例模式
 */
export interface Strategy {
    execute(): void;
}

export class ConcreteStrategyA implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy1 is being called");
    }
}

export class ConcreteStrategyB implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy2 is being called");
    }
}

export class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public executeStrategy(): void {
        this.strategy.execute();
    }
}
