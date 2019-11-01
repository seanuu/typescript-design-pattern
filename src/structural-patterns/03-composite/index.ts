/**
 * 组合（Composite）
 * 定义：将对象组合成树形结构以表示“部分-整体”的层次结构。Composite使得用户对单个对象和组合对象的使用具有一致性。
 * 结构：
 *     -- Component（抽象构件）：它可以是接口或抽象类，为叶子构件和容器构件对象声明接口，在该角色中可以包含所有子类共有行为的声明和实现。
 *        在抽象构件中定义了访问及管理它的子构件的方法，如增加子构件、删除子构件、获取子构件等。
 *     -- Leaf（叶子构件）：它在组合结构中表示叶子节点对象，叶子节点没有子节点，它实现了在抽象构件中定义的行为。
 *        对于那些访问及管理子构件的方法，可以通过异常等方式进行处理。
 *     -- Composite（容器构件）：它在组合结构中表示容器节点对象，容器节点包含子节点，其子节点可以是叶子节点，
 *        也可以是容器节点，它提供一个集合用于存储子节点，实现了在抽象构件中定义的行为，包括那些访问及管理子构件的方法，
 *        在其业务方法中可以递归调用其子节点的业务方法。
 * 适用场景：
 *     -- 想表示对象的部分-整体层次结构；
 *     -- 希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象；
 * 优点：
 *     -- 简化客户代码。客户不需要关心处理的是一个叶节点还是枝节点；
 *     -- 定义了包含基本对象和组合对象的类层次结构。基本对象可以被组合成更复杂的组合对象，而这个组合对象又可以被组合，不断递归下去。
 *        客户代码中，任何用到基本对象的地方都可以使用组合对象；
 *     -- 更容易增加新类型的组件；
 * 缺点：
 *     -- 在增加新构件时很难对容器中的构件类型进行限制。
 * 相关模式：
 *     -- 部件-父部件连接用于职责链模式。
 *     -- 装饰器模式经常与组合模式一起使用。当装饰和组合一起使用时，他们通常有一个公共的父类。
 *     -- 享元模式让你共享组件，但不能再引用他们的父部件。
 *     -- 访问者将本来应该分布在枝类和叶子类中的操作和行为局部化。
 */