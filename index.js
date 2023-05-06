/*
 * @Date: 2023-05-06 18:37:29
 * @LastEditTime: 2023-05-06 20:29:28
 * @Description:
 */
import * as T3 from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const width = 800;
const height = 500;
/**  创建一个三维场景 */
const scene = new T3.Scene();
window.scene = scene;
/** 创建三维坐标系 */
const axesHelper = new T3.AxesHelper(150);
/**添加到三维场景 */
scene.add(axesHelper);
/** 创建 */
const box = new T3.BoxGeometry(100, 100, 100);
/** 创建材质 */
const material = new T3.MeshBasicMaterial({
  color: "#00ff00", //设置材质颜色
  transparent: true, //开启透明
  opacity: 0.5, //设置透明度
});
/** 创建一个网格模型 */
const mesh = new T3.Mesh(box, material);
// 集合体位置设置
mesh.position.set(1, 1, 0);
// 将模型添加到场景中
scene.add(mesh);

/** 创建透视相机 */
const camera = new T3.PerspectiveCamera(30, width / height, 1, 3000);
// 相机位置
camera.position.set(600, 600, 600);

// 相机视线方向
// camera.lookAt(0, 0, 0);
camera.lookAt(mesh.position);
/** 创建渲染器 */
const render = new T3.WebGLRenderer();
render.setSize(width, height);
render.render(scene, camera);
const webgl = document.getElementById("webgl");
webgl.appendChild(render.domElement);
