/**
 * 享元（Flyweight）
 * 定义： 运用共享技术有效地支持大量细粒度的对象。
 * 结构：
 *     -- Flyweight（抽象享元类）：通常是一个接口或抽象类，在抽象享元类中声明了具体享元类公共的方法，这些方法可以向外界提
 *        供享元对象的内部数据（内部状态），同时也可以通过这些方法来设置外部数据（外部状态）。
 *     -- ConcreteFlyweight（具体享元类）：它实现了抽象享元类，其实例称为享元对象；在具体享元类中为内部状态提供了存储空间。
 *        通常我们可以结合单例模式来设计具体享元类，为每一个具体享元类提供唯一的享元对象。
 *     -- UnsharedConcreteFlyweight（非共享具体享元类）：并不是所有的抽象享元类的子类都需要被共享，不能被共享的子
 *        类可设计为非共享具体享元类；当需要一个非共享具体享元类的对象时可以直接通过实例化创建。
 *     -- FlyweightFactory（享元工厂类）：享元工厂类用于创建并管理享元对象，它针对抽象享元类编程，将各种类型的具体享元
 *        对象存储在一个享元池中，享元池一般设计为一个存储“键值对”的集合（也可以是其他类型的集合），可以结合工厂模式进
 *        行设计；当用户请求一个具体享元对象时，享元工厂提供一个存储在享元池中已创建的实例或者创建一个新的实例（如果不存在的话），
 *        返回新创建的实例并将其存储在享元池中。
 * 适用场景：
 *     -- 客户程序与抽象类的实现部分之间存在着很大的依赖性。外观模式分离子系统，提高子系统的独立性和可移植性。
 *     -- 当你需要构建一个层次结构的子系统时，使用外观模式定义子系统的入口点。
 *        让子系统间通过外观进行通讯，简化互相之间的依赖关系。
 */
export class IphoneFlyweight {
    constructor(model: string, screen: number, memory: number) {}
}

export class Iphone {
    constructor(flyweight: IphoneFlyweight, sn: number) {}
}

export class FlyweightFactory {
    private phonesMap: { [s: string]: IphoneFlyweight } = <any>{};

    public get(model: string, screen: number, memory: number): IphoneFlyweight {
        const key = model + screen + memory;
        if (!this.phonesMap[key]) {
            this.phonesMap[key] = new IphoneFlyweight(model, screen, memory);
        }
        return this.phonesMap[key];
    }
}

export class IphoneFactory {
    private static flyweightFactory: FlyweightFactory = new FlyweightFactory();

    public getIphone(
        model: string,
        screen: number,
        memory: number,
        sn: number
    ) {
        const flyweight: IphoneFlyweight = IphoneFactory.flyweightFactory.get(
            model,
            screen,
            memory
        );
        return new Iphone(flyweight, sn);
    }
}
