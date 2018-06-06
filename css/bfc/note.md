   BFC Block Formatting context 块级格式化上下文
=
* 约束规则
    同一个BFC的两个相邻的box的margin会重叠，与方向无关

    新建BFC破坏它，context上下文概念

* 如何创建BFC?重新划一块渲染区域(独立)
    块级(页面的基础box) 格式化(渲染)

    1. 根元素，天然是一个BFC
    2. overf:hidden 是一个BFC

    <!-- BFC Block Formatting context 块级格式化上下文
    文档 块 block 页面上占据自己的位置-->
    * 新的BFC overflow:hidden(不为visible)新的空间，
    告诉浏览器，外面的环境影响不到我了，我重新进行Block Formatting 布局和定位。
    * 核心是，新的BFC，给出了新的不受外界影响的块级格式化环境。

     定位 position
     =
    广义的定位 块级 垂直，行内元素，左右，内容负责

    float 在一行的左边或右边
    
    flex 弹性布局 position 

    BFC 重建一个上下文环境

     自适应的二栏式布局？
     =
    * float 离开了文档流
    *  aside main 统一bfc 根元素
    * bfc 布局规则3条 每个元素的左边，要与包含box的左边相接触 
    * bfc 布局规则第四条 bfc的区域不会与float box 重叠