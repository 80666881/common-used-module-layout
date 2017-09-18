# 常见js/css组件封装

>以下是本人在学习中，对常用的组件及布局的整理。所有代码可以直接在查看源码中看到。

## 布局
### 单栏布局
http://jsbin.com/xamower/edit?html,css,output
![](media/15055321001835/15055494502786.jpg)
### 两栏布局
>左侧宽度固定，右侧自适应

![](media/15055321001835/15057201974373.jpg)

http://jsbin.com/qolojey/edit?html,css,output

### 三栏布局

>左右两侧固定，中间自适应

![](media/15055321001835/15057203057528.jpg)



http://jsbin.com/kuxoxin/edit?html,css,output
### 双飞翼布局

> 双飞翼布局，属于main标签在前面的自适应三栏布局，
        解决了圣杯布局的main宽度必须大于aside的问题。
        
![](media/15055321001835/15057203697953.jpg)


http://jsbin.com/ragiduh/edit?html,css,output
### 圣杯布局

![](media/15055321001835/15057211025010.jpg)

http://jsbin.com/ziwimuf/edit?html,css,output

### 瀑布流布局

![](media/15055321001835/15057211798307.jpg)


[预览地址]()

## 其他UI效果

### 商品列表
http://jsbin.com/mehahowike/edit?html,output
![](media/15055321001835/15055496331935.jpg)
### 图片商品列表（可以加载）
http://jsbin.com/lixopo/edit?html,output
![](media/15055321001835/15055497053339.jpg)

### 渐变轮播
http://jsbin.com/weyove/edit?html,output
![](media/15055321001835/15055498239088.jpg)
### 图片懒加载
http://jsbin.com/fofoqeqoni/1/edit?html,output

### tab组件封装
![](media/15055321001835/15057208571568.jpg)

[预览地址]()

### 拖拽功能

[预览地址]
(http://jsbin.com/garayozika/edit?html,css,js,output)


## css3效果

### loading效果
![](media/15055321001835/15057206538189.jpg)
[预览地址]()
![](media/15055321001835/15057206834858.jpg)
[预览地址]()

### 卡片翻转
#### 重要属性
**backface-visibility**

给卡片加入下方代码，表示隐藏被旋转div元素的背面，这样旋转之后，第一张卡片是背面朝屏幕方向，看不到，第二张卡片旋转之后则是正面朝像屏幕，即形成了旋转的效果，主要用到这两个属性啦。

```
backface-visibility:hidden
```

**preserve-3d**
因为需要3d效果，所以在box这个div里要添加如下，表示3d透视
这个加上很关键！

```
transform-style: preserve-3d;
```
![](media/15055321001835/15057058117775.jpg)

[预览地址]()

### 遮罩层效果

![](media/15055321001835/15057209548753.jpg)

[预览地址]()


