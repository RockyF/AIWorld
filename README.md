Hughes
======

A web game framework<br/>
这是一个web游戏框架，适用于单位对象的游戏。
框架的结构很简单，core为核心代码，目前只有5个类：
*   TWorld.ts 游戏世界，用作所有数据对象的管理。
*   TDataObject.ts 数据对象，存储基本的数据。
*   TBehavior.ts 对象行为基类，每个数据对象会绑定一个行为对象，单位的所有行为都有行为对象来实现。
*   TInput.ts 外界输入类，比如鼠标和键盘的数据集中类
*   TInputDelegate.ts 为了解耦合，使用该委托类来分离输入动作的实现