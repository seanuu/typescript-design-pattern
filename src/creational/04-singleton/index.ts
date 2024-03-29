/**
 * 单例（Singleton）
 * 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
 * 结构：
 *     -- Singleton：单例
 * 适用场景：
 *     -- 当类只能有一个实例
 *     -- 当这个唯一的实例应该是通过子类化可扩展的
 * 优点：
 *     -- 对唯一实例可以进行有效的受控访问
 *     -- 可以在实例化方法中改变具体使用的实例
 *     -- 允许可变数目的实例
 * 相关模式：
 *     -- 很多模式可以用单例实现，如抽象工厂，建造者，和原型
 */

class Singleton {
    private static instance: Singleton;

    private constructor() {}

    static getInstance(): Singleton {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
