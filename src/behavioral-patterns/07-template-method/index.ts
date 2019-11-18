/**
 * 模板方法（Template Method）
 * 定义：定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。
 *      模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。
 * 结构：
 *     -- AbstractClass（抽象类）：在抽象类中定义了一系列基本操作(PrimitiveOperations)，
 *        这些基本操作可以是具体的，也可以是抽象的，每一个基本操作对应算法的一个步骤，在其
 *        子类中可以重定义或实现这些步骤。
 *     -- ConcreteClass（具体子类）：它是抽象类的子类，用于实现在父类中声明的抽象基本操
 *        作以完成子类特定算法的步骤，也可以覆盖在父类中已经实现的具体基本操作。
 * 适用场景：
 *     -- 需要控制流程的逻辑顺序时。模板方法模式广泛应用于框架设计中，以确保通过父类来
 *        控制处理流程的逻辑顺序（如框架的初始化，测试流程的设置等）
 * 优点：
 *     -- 在父类中形式化地定义一个算法，而由它的子类来实现细节的处理，在子类实现详细的处理
 *        算法时并不会改变算法中步骤的执行次序。
 *     -- 模板方法模式是一种代码复用技术，它在类库设计中尤为重要，它提取了类库中的公共行为，
 *        将公共行为放在父类中，而通过其子类来实现不同的行为
 * 缺点：
 *     -- 需要为每一个基本方法的不同实现提供一个子类，如果父类中可变的基本方法太多，
 *        将会导致类的个数增加，系统更加庞大，设计也更加抽象，此时，可结合桥接模式来进行设计。
 * 相关模式：
 *     -- 工厂方法: 常被模板方法调用。
 *     -- 策略模式：模板方法使用继承来改变算法的一部分。策略模式使用委托来改变整个算法。
 */
abstract class Beverage {
    boilWater() {
        console.log("把水煮沸");
    }

    abstract brew(): void;
    abstract pourInCup(): void;
    abstract addCondiments(): void;

    makeBeverage() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
}

export class Coffee extends Beverage {
    brew(): void {
        console.log("用沸水冲泡咖啡");
    }
    pourInCup(): void {
        console.log("把咖啡倒进杯子");
    }
    addCondiments(): void {
        console.log("加糖和牛奶");
    }
}

export class Tea extends Beverage {
    brew(): void {
        console.log("用沸水浸泡茶叶");
    }
    pourInCup(): void {
        console.log("把茶倒进杯子");
    }
    addCondiments(): void {
        console.log("加柠檬");
    }
}
