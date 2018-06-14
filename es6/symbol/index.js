// 不可以被实例化，怎么实现？
// ObjectFactory instanceof函数-判断是否是一个实例
function ClassCannotInstance()
{
    if(this instanceof ClassCannotInstance)
    ClassCannotInstance()//可以执行
    new ClassCannotInstance()//不可以被执行
    throw new Error('不能被实例化');
}

const instance=new ClassCannotInstance();