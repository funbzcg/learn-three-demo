# three.js 三要素

## 三维场景 scene

### 集合体 Geometry

### 材质 Material

    构造器传入一个 option

### 网格模型 Mesh

    构造器传入两个参数（几何体实例，材质实例）

### 坐标系 AxesHelper

坐标轴颜色红 R、绿 G、蓝 B 分别对应坐标系的 x、y、z 轴，对于 three.js 的 3D 坐标系默认 y 轴朝上。

## 照相机 camera

    传入四个参数（视锥体上下角度，宽高比，近景切面，远景切面）

## 渲染器 Renderer

    构造器传入两个参数（网格模型，照相机）
