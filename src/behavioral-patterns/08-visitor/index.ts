/**
 * 访问者模式（Visitor）
 * 定义：提供一个作用于某对象结构中的各元素的操作表示，它使我们可以在不改变各元素的类的前提
 *      下定义作用于这些元素的新操作。(元素调用时将自身作为参数传递给访问者)
 * 结构：
 *     -- Visitor（抽象访问者）：抽象访问者为对象结构中每一个具体元素类ConcreteElement声明一个访问操作
 *     -- ConcreteVisitor（具体访问者）：具体访问者实现了每个由抽象访问者声明的操作，每一个
 *        操作用于访问对象结构中一种类型的元素。
 *     -- Element（抽象元素）：抽象元素一般是抽象类或者接口，它定义一个accept()方法，该方法
 *        通常以一个抽象访问者作为参数
 *     -- ConcreteElement（具体元素）：具体元素实现了accept()方法，在accept()方法中调用
 *        访问者的访问方法以便完成对一个元素的操作。
 *     -- ObjectStructure（对象结构）：对象结构是一个元素的集合，它用于存放元素对象，并且提供了遍历
 *        其内部元素的方法。它可以结合组合模式来实现，也可以是一个简单的集合对象，如一个List对象
 *        或一个Set对象。
 * 适用场景：
 *     -- 一个对象结构包含多个类型的对象，希望对这些对象实施一些依赖其具体类型的操作。
 *     -- 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作“污染”这些对象的类，也不希望在增加新操作时修改这些类。
 *     -- 对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作。
 * 优点：
 *     -- 增加新的访问操作很方便。
 *     -- 将有关元素对象的访问行为集中到一个访问者对象中，而不是分散在一个个的元素类中。
 *     -- 让用户能够在不修改现有元素类层次结构的情况下，定义作用于该层次结构的操作。
 * 缺点：
 *     -- 破坏封装。访问者模式要求访问者对象访问并调用每一个元素对象的操作，这意味着元素对象有时候
 *        必须暴露一些自己的内部操作和内部状态，否则无法供访问者访问。
 * 相关模式：
 *     -- 组合模式：访问者可以用于对一个由组合模式定义的对象结构进行操作；
 */
    // 员工接口
interface Employee {
    accept(handler: Department): void;
}

// 全职员工类
class FulltimeEmployee implements Employee {
    private name = '';
    // 全职员工按周薪计算薪酬
    private weeklyWage = 0;
    // 工作时长
    private workTime = 0;
    constructor(name: string, weeklyWage: number, workTime: number) {
        this.name = name;
        this.weeklyWage = weeklyWage;
        this.workTime = workTime;
    }
    getName(): string {
        return this.name;
    }
    getWeeklyWage(): number {
        return this.weeklyWage;
    }
    getWorkTime(): number {
        return this.workTime;
    }
    // 实现接口，调用访问者处理全职员工的方法
    accept(handler: Department) {
        handler.visitFulltime(this);
    }
}

// 临时员工类
class ParttimeEmployee implements Employee {
    private name = '';
    // 临时员工按时薪计算薪酬
    private hourWage = 0;
    // 工作时长
    private workTime = 0;
    constructor(name: string, hourWage: number, workTime: number) {
        this.name = name;
        this.hourWage = hourWage;
        this.workTime = workTime;
    }
    getName(): string {
        return this.name;
    }
    getHourWage(): number {
        return this.hourWage;
    }
    getWorkTime(): number {
        return this.workTime;
    }
    // 实现接口，调用访问者处理临时工的方法
    accept(handler: Department) {
        handler.visitParttime(this);
    }
}

// 部门接口
interface Department {
    visitFulltime(employee: FulltimeEmployee): void;
    visitParttime(employee: ParttimeEmployee): void;
}

// 具体访问者——财务部，结算薪酬实现部门接口
class FADepartment implements Department {
    // 全职员工薪酬计算方式
    visitFulltime(employee: FulltimeEmployee) {
        const name: string = employee.getName();
        let workTime: number = employee.getWorkTime();
        let weekWage: number = employee.getWeeklyWage();
        const WEEK_WORK_TIME = 40;
        if (workTime > WEEK_WORK_TIME) {
            // 计算加班工资
            const OVER_TIME_WAGE = 100;
            weekWage = weekWage + (workTime - WEEK_WORK_TIME) * OVER_TIME_WAGE;
        } else if (workTime < WEEK_WORK_TIME) {
            if (workTime < 0) {
                workTime = 0;
            }
            // 扣款
            const CUT_PAYMENT = 80;
            weekWage = weekWage - (WEEK_WORK_TIME - workTime) * CUT_PAYMENT;
        }
        console.log(`正式员工 ${name} 实际工资为：${weekWage}`);
    }
    // 临时工薪酬计算方式
    visitParttime(employee: ParttimeEmployee) {
        const name = employee.getName();
        const hourWage = employee.getHourWage();
        const workTime = employee.getWorkTime();
        console.log(`临时工 ${name} 实际工资为：${hourWage * workTime}`);
    }
}

// 具体访问者——人力资源部，结算工作时间，实现部门接口
class HRDepartment implements Department {
    // 全职员工工作时间报告
    visitFulltime(employee: FulltimeEmployee) {
        const name: string = employee.getName();
        let workTime: number = employee.getWorkTime();
        // 实际工作时间报告
        let report = `正式员工 ${name} 实际工作时间为 ${workTime} 小时`;
        const WEEK_WORK_TIME = 40;
        if (workTime > WEEK_WORK_TIME) {
            // 加班时间报告
            report = `${report}，加班 ${WEEK_WORK_TIME - workTime} 小时`;
        } else if (workTime < WEEK_WORK_TIME) {
            if (workTime < 0) {
                workTime = 0;
            }
            // 请假时间报告
            report = `${report}，请假 ${WEEK_WORK_TIME - workTime} 小时`;
        }
        console.log(report);
    }

    // 临时工工作时间报告
    visitParttime(employee: ParttimeEmployee) {
        const name: string = employee.getName();
        const workTime: number = employee.getWorkTime();
        console.log(`临时工 ${name} 实际工作时间为 ${workTime} 小时`);
    }
}

// 员工集合类
class EmployeeList {
    list: Array<Employee> = [];
    add(employee: Employee) {
        this.list.push(employee);
    }

    // 遍历员工集合中的每一个对象
    accept(handler: Department) {
        this.list.forEach((employee: Employee) => {
            employee.accept(handler);
        });
    }
}

function visitorDemo() {
    const list: EmployeeList = new EmployeeList();
    const full1 = new FulltimeEmployee('Bob', 3000, 45);
    const full2 = new FulltimeEmployee('Mikel', 2000, 35);
    const full3 = new FulltimeEmployee('Joe', 4000, 40);
    const part1 = new ParttimeEmployee('Lili', 80, 20);
    const part2 = new ParttimeEmployee('Lucy', 60, 15);

    list.add(full1);
    list.add(full2);
    list.add(full3);
    list.add(part1);
    list.add(part2);

    // 财务部计算薪酬
    const faHandler = new FADepartment();
    list.accept(faHandler);

    // 人力资源部出工作报告
    const hrHandler = new HRDepartment();
    list.accept(hrHandler);
}
