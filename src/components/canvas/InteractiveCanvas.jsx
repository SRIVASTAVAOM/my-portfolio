import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InteractiveCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 2. Monochromatic / Chrome 3D Kinetic Structure
    const coreGroup = new THREE.Group();

    // Outer Chrome Ring
    const ring1Geo = new THREE.TorusGeometry(8.2, 0.04, 32, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    coreGroup.add(ring1);

    // Middle Ring
    const ring2Geo = new THREE.TorusGeometry(6.4, 0.035, 32, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xcccccc,
      transparent: true,
      opacity: 0.22,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    coreGroup.add(ring2);

    // Inner Ring
    const ring3Geo = new THREE.TorusGeometry(4.8, 0.03, 32, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x999999,
      transparent: true,
      opacity: 0.28,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    coreGroup.add(ring3);

    // Central Wireframe Icosahedron
    const centerGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const centerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    coreGroup.add(centerMesh);

    // Coordinate Grid in Stark Monochrome
    const gridHelper = new THREE.GridHelper(50, 40, 0x555555, 0x1c1c1c);
    gridHelper.position.y = -12;
    gridHelper.rotation.x = 0.2;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.2;
    scene.add(gridHelper);

    coreGroup.position.set(11, 2, -4);
    scene.add(coreGroup);

    // 3. Subtle Ambient Silver Star Nodes
    const nodesCount = 50;
    const nodePositions = new Float32Array(nodesCount * 3);
    for (let i = 0; i < nodesCount * 3; i += 3) {
      nodePositions[i] = (Math.random() - 0.5) * 50;
      nodePositions[i + 1] = (Math.random() - 0.5) * 40;
      nodePositions[i + 2] = (Math.random() - 0.5) * 25;
    }
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    const nodeMat = new THREE.PointsMaterial({
      size: 0.2,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodes);

    // 4. Mouse Tracking Parallax
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (window.innerWidth < 768) {
        coreGroup.position.set(0, 4, -8);
        coreGroup.scale.set(0.65, 0.65, 0.65);
      } else {
        coreGroup.position.set(11, 2, -4);
        coreGroup.scale.set(1, 1, 1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // 5. Render Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getElapsedTime();

      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      ring1.rotation.z = delta * 0.18;
      ring1.rotation.x = delta * 0.12;

      ring2.rotation.y = -delta * 0.22;
      ring2.rotation.z = delta * 0.1;

      ring3.rotation.x = delta * 0.26;
      ring3.rotation.y = delta * 0.18;

      centerMesh.rotation.x = delta * 0.08;
      centerMesh.rotation.y = delta * 0.12;

      coreGroup.rotation.y = currentX * 0.35;
      coreGroup.rotation.x = -currentY * 0.35;

      nodes.rotation.y = delta * 0.015 + currentX * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      centerGeo.dispose();
      centerMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      gridHelper.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}
