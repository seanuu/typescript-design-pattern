/**
 * 状态（State）
 * 定义：允许一个对象在其内部状态改变时改变它的行为。
 * 结构：
 *     -- Context（环境类）：环境类又称为上下文类，它是拥有多种状态的对象。由于环境类的状态
 *        存在多样性且在不同状态下对象的行为有所不同，因此将状态独立出去形成单独的状态类。
 *        在环境类中维护一个抽象状态类State的实例，这个实例定义当前状态，在具体实现时，它是一个State子类的对象。
 *     -- State（抽象状态类）：它用于定义一个接口以封装与环境类的一个特定状态相关的行为，在抽象状
 *        态类中声明了各种不同状态对应的方法，而在其子类中实现类这些方法，由于不同状态下对象的行为
 *        可能不同，因此在不同子类中方法的实现可能存在不同，相同的方法可以写在抽象状态类中。
 *     -- ConcreteState（具体状态类）：它是抽象状态类的子类，每一个子类实现一个与环境类的一个状态
 *        相关的行为，每一个具体状态类对应环境的一个具体状态，不同的具体状态类其行为有所不同。
 * 适用场景：
 *     -- 一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为；
 *     -- 一个操作中含有庞大的多分支的条件语句，且这些分支依赖于该对象的状态。
 * 优点：
 *     -- 封装了状态的转换规则，在状态模式中可以将状态的转换代码封装在环境类或者具体状态类中，
 *        可以对状态转换代码进行集中管理，而不是分散在一个个业务方法中。
 *     -- 将所有与某个状态有关的行为放到一个类中，只需要注入一个不同的状态对象即可使环境
 *        对象拥有不同的行为。
 *     -- 允许状态转换逻辑与状态对象合成一体，而不是提供一个巨大的条件语句块，状态模式可以
 *        让我们避免使用庞大的条件语句来将业务方法和状态转换代码交织在一起。
 *     -- 可以让多个环境对象共享一个状态对象，从而减少系统中对象的个数。
 */
export interface State {
    handle(context: Context): void;
}

export class ConcreteStateA implements State {
    public handle(context: Context): void {
        console.log("`handle` method of ConcreteStateA is being called!");
        context.State = new ConcreteStateB();
    }
}

export class ConcreteStateB implements State {
    public handle(context: Context): void {
        console.log("`handle` method of ConcreteStateB is being called!");
        context.State = new ConcreteStateA();
    }
}

export class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    get State(): State {
        return this.state;
    }

    set State(state: State) {
        this.state = state;
    }

    public request(): void {
        console.log("request is being called!");
        this.state.handle(this);
    }
}
