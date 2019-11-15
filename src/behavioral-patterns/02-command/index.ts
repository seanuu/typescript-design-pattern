/**
 * 命令（Command）
 * 定义：将同一种类型请求封装为一个对象，暴露一个方法来执行请求；
 * 结构：
 *     -- Command（抽象命令类）：抽象命令类一般是一个抽象类或接口，在其中声明了用于执行
 *        请求的execute()等方法，通过这些方法可以调用请求接收者的相关操作。
 *     -- ConcreteCommand（具体命令类）：具体命令类是抽象命令类的子类，实现了在抽象命令类中声明的方法，它对应具体的接收者对象，
 *        将接收者对象的动作绑定其中。在实现execute()方法时，将调用接收者对象的相关操作(Action)。
 *     -- Invoker（调用者）：调用者即请求发送者，它通过命令对象来执行请求。一个调用者并不需要在设
 *        计时确定其接收者，因此它只与抽象命令类之间存在关联关系。在程序运行时可以将一个具体命令对象
 *        注入其中，再调用具体命令对象的execute()方法，从而实现间接调用请求接收者的相关操作。
 *     -- Receiver（接收者）：接收者执行与请求相关的操作，它具体实现对请求的业务处理。
 * 适用场景：
 *     -- 一在不同的时刻指定、排列和执行请求。
 *     -- 支持取消操作。
 *     -- 菜单场景。
 */
