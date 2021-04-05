/////////////////////////////////////////////////////////////////////////    initiateThree()




const resetVizInitiateThree = (direction) => {

    if (direction === "up") {

    d3.selectAll("#threeBoxPlot").remove();

    initiateThree();

}

}





function initiateThree() {

let scene, camera, renderer;

let cubeGroup;

//let controls;

init();
animate();

function init() {

  const data = [
    [49, 33, 30],
    [27, 17, 13],
    [9, 8, 5, 2]
  ]


//   const data = [
//     [49, 33, 30, 27, 17, 13, 9, 8, 5, 2]
// ]

  var i = 1;

  width = 500
  height = 500
  fov = 9
  //aspect = width / height
  //aspect = 500 / 500
  aspect = 1/5
  near = .1
  far = 1000
  color = 0x828282  
  density = 0.1

  loader = new THREE.TextureLoader()

  //loaderTwo = new THREE.TextureLoader()


  scene = new THREE.Scene(); // ADDED

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  //camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.position.set(50, 30, 50);
  camera.lookAt( scene.position );
    
   // add controls for the camera
  //var controls = new THREE.OrbitControls(camera);
  //controls = new THREE.OrbitControls (camera, renderer.domElement);   



  cubeGeometries = data.map(row => {
    return row.map(c => {
      //return new THREE.BoxGeometry( 0.2, c/max, 0.2 );
      return new THREE.BoxBufferGeometry(0.2, c / 8, 0.2);
    })
  })


  var materialArray = [];

  const cubeMaterialEight = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/ridgway.jpg')
  });
  cubeMaterialEight.color.convertSRGBToLinear();

  const cubeMaterialThree = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/gacy.jpg')
  });
  cubeMaterialThree.color.convertSRGBToLinear();

  const cubeMaterialTwo = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/bundy.jpg')
  });
  cubeMaterialTwo.color.convertSRGBToLinear();

  const cubeMaterialSeven = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/holmes.jpg')
  });
  cubeMaterialSeven.color.convertSRGBToLinear();

  const cubeMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/dahmer.jpg')
  });
  cubeMaterial.color.convertSRGBToLinear();

  const cubeMaterialTen = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/ramirez.jpg')
  });
  cubeMaterialTen.color.convertSRGBToLinear();

  const cubeMaterialNine = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/manson.jpg')
  });
  cubeMaterialNine.color.convertSRGBToLinear();

  const cubeMaterialFive = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/fish.jpg')
  });
  cubeMaterialFive.color.convertSRGBToLinear();

  const cubeMaterialFour = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/zodiac.jpg')
  });
  cubeMaterialFour.color.convertSRGBToLinear();

  const cubeMaterialSix = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../static/data/serial_killers_final/assets/images/gein.jpg')
  });
  cubeMaterialSix.color.convertSRGBToLinear();


 materialArray.push(cubeMaterialEight, cubeMaterialThree, cubeMaterialTwo, cubeMaterialSeven, cubeMaterial, cubeMaterialTen, cubeMaterialNine, cubeMaterialFour, cubeMaterialFive, cubeMaterialSix); 

  materialIndex = -1;

  const cubeMeshes = cubeGeometries.map(row => {
   return row.map((cubeGeometry, index) => {
     materialIndex += 1;
     return new THREE.Mesh(cubeGeometry, materialArray[materialIndex]); 
   
    }
 
      )
      });


  cubeGroup = new THREE.Group();
  data.forEach((row, i, iarr) => {
    row.forEach((d, j, jarr) => {
      cubeMeshes[i][j].position.set(
        i / iarr.length - 0.5, 
        //d/max*0.5-0.6,
        d / 8 * 0.5 - 0.6,
        j / jarr.length - 0.5);

      //cubeMeshes[i][j].scale.set(1,4,1);
      cubeGroup.add(cubeMeshes[i][j]);
    })
  })


const mainLight = new THREE.DirectionalLight(0xffffff, 5.0);
  mainLight.position.set(10, 10, 10);

mainLight.castShadow = true;
mainLight.shadowCameraVisible = true;
mainLight.shadow.radius = 8;

const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 3);
  
var material = new THREE.LineBasicMaterial({
  color: 0x0000ff
});


  scene.add(cubeGroup);
  scene.add(mainLight);
  scene.add(ambientLight);

  scene.fog = new THREE.Fog(color, near, far);
  //scene.fog = new THREE.FogExp2(color, density);

  scene.background = new THREE.Color( 0x000000 );

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(1000, 1000);
  // renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.physicallyCorrectLights = true;

  renderer.domElement.id = 'threeBoxPlot';

  document.body.appendChild(renderer.domElement); //ADDED 

}

function animate() {

  // if (resizeRendererToDisplaySize(renderer)) {
  //     const canvas = renderer.domElement;
  //     camera.aspect = canvas.clientWidth / canvas.clientHeight;
  //     camera.updateProjectionMatrix();
  // }

  requestAnimationFrame( animate );
  //cubeGroup.rotation.y += 0.005;
  cubeGroup.rotation.y += 0.01;
  renderer.setClearColor( 0xffffff );
  //controls.update();                    Add Back In ? 
  renderer.render( scene, camera );

}



  // function resizeRendererToDisplaySize(renderer) {
  //   const canvas = renderer.domElement;
  //   const pixelRatio = window.devicePixelRatio;
  //   const width  = canvas.clientWidth  * pixelRatio | 0;
  //   const height = canvas.clientHeight * pixelRatio | 0;
  //   const needResize = canvas.width !== width || canvas.height !== height;
  //   if (needResize) {
  //     renderer.setSize(width, height, false);
  //   }
  //   return needResize;
  // }



}






// window.addEventListener( 'resize', onWindowResize, false );

// function onWindowResize() {
//     // Update camera
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     // Update renderer
//     renderer.setSize( window.innerWidth, window.innerHeight );
// }
