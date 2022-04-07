/**
 * TODO (Estudar e testar):
 * 1. Tipos de câmeras
 * 2. Tipos de objetos geométricos
 * 3. Tipos de renderer
 * 4. Eixos X, Y e Z
 */

// Importa Three.js
import * as THREE from 'https://unpkg.com/three@0.139.2/build/three.module.js';

console.log(THREE);

const scene = new THREE.Scene();

/**
 * Documentation: https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
 * PerspectiveCamera(fov : Number, aspect: Number, near: Number, far: Number)
 * fov — (field of view) Campo de visão, a extensão da cena que é vista na tela em um determinado momento. O valor está em graus.
 * aspect ratio — A proporção de uma imagem é a proporção entre a largura e a altura, para evitar achatar ou esticar os objetos.
 * near — Plano de corte próximo, objetos posicionados mais próximos do que este valor não serão exibidos.
 * far — Plano de corte longe, objetos posicionados mais longe do que este valor não serão exibidos.
 */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

/**
 * Renderer WebGL é o renderizador da cena.
 */
const renderer = new THREE.WebGLRenderer();

/**
 * Define a largura e altura da área que será utilizada pela aplicação.
 * Pode-se definir a largura e altura do browser ou um valor reduzido para otimizar a exibição/carregamento da aplicação
 * Ex.: setSize(window.innerWidth/2, window.innerHeight/2)
 *
 * Pode-se manter o tamanho da aplicação mas renderizar em uma resolução mais baixa passando o parâmetro updateStyle como falso.
 * Ex. baixa resolução: setSize(window.innerWidth/2, window.innerHeight/2, false)
 */
renderer.setSize(window.innerWidth, window.innerHeight);

/**
 * Adiciona um novo elemento canvas na página HTML.
 * O renderer utilizará este novo elemento para exibir o conteúdo da cena.
 */
document.body.appendChild(renderer.domElement);

/**
 * BoxGeometry é um tipo de objeto geométrico que contém vértices e faces de um cubo.
 */
const geometry = new THREE.BoxGeometry();

/**
 * Material to add color to object geometry.
 */
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

/**
 * Mesh é um objeto que unifica o objeto geométrico com as características e estilos contidos no objeto material criando um encapsulamento para os dois objetos.
 */
const cube = new THREE.Mesh(geometry, material);


/**
 * Adiciona o objeto geométrico na cena.
 */
scene.add(cube);

/**
 * É preciso mudar a posição da câmera para o objeto aparecer, pois a coordenada padrão do objeto adicionado na cena é (0,0,0), a mesma coordenada da câmera.
 * Isto causa o efeito de como se o objeto estiver dentro da câmera e vice-versa.
 */
camera.position.z = 5;

function animate() {
  /**
   * Chama recursivamente a função de animação.
   * A cada loop incrementa o valor da rotação nos eixos abaixo.
   */
  
  requestAnimationFrame(animate);

  // Inclui rotação no eixo X.
  cube.rotation.x += 0.0;
  // Inclui rotação no eixo Y.
  cube.rotation.y += 0.0;
  // Inclui rotação no eixo Z.
  cube.rotation.z += 0.01;

  // Renderiza a cena com a câmera escolhida.
  renderer.render(scene, camera);
};

animate();