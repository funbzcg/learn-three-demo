import * as T3 from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

const width = 800;
const height = 500;
/**  创建一个三维场景 */
const scene = new T3.Scene();
window.scene = scene;

/** 创建 */
const box = new T3.BoxGeometry(100, 100, 100);
/** 创建材质 */
const material = new T3.MeshBasicMaterial({
  color: "#00ff00"
})
/** 创建一个网格模型 */
const mesh = new T3.Mesh(box, material)
// 集合体位置设置
mesh.position.set(1, 1, 0)
// 将模型添加到场景中
scene.add(mesh);


/** 创建透视相机 */
const camera = new T3.PerspectiveCamera(30, width / height, 0.1, 3000);
// 相机位置
camera.position.set(600, 600, 600);

// 相机视线方向
// camera.lookAt(0, 0, 0);
camera.lookAt(mesh.position);
/** 创建渲染器 */
const render = new T3.WebGLRenderer();
render.setSize(width, height);
render.render(scene, camera);
document.body.appendChild(render.domElement)


