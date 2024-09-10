import { OrbitControls, useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";

import * as THREE from "three";

export function Office(props) {
  const { section } = props;
  const { nodes, materials } = useGLTF("models/scene.gltf");
  const texture = useTexture("textures/baked.jpg");
  const textureVSCode = useVideoTexture("textures/vscode.mp4");

  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  const textureOpacity = useMotionValue(0);
  const glassTextureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0, {
      duration:0.8,
    });
    animate(glassTextureOpacity, section === 0 ? 0.42 : 0, {
     duration:0.8, 
    });
  }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
    textureGlassMaterial.opacity = glassTextureOpacity.get();
  });

  return (
    <group {...props} dispose={null}>
     
      <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <meshBasicMaterial map={textureVSCode} toneMapped={false} />
      </mesh>
      <group
        name="Desk"
        position={[-0.07, 0, -1.52]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Plane001_Plane002_BlackWood001"
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_1"
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_2"
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_3"
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_4"
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group name="SM_ShelfSM_Shelf1" position={[-0.87, 1.69, -2.04]}>
        <mesh
          name="SM_ShelfSM_Shelf1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="SM_ShelfSM_Shelf1_1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={textureMaterial}
        />
      </group>
      <motion.group
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="LavaLamp"
        position={[-1.3, 2.07, -1.99]}
      >
        <mesh
          name="Node-Mesh001"
          geometry={nodes["Node-Mesh001"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_1"
          geometry={nodes["Node-Mesh001_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_2"
          geometry={nodes["Node-Mesh001_2"].geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.mesh
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="WawaRug"
        geometry={nodes.WawaRug.geometry}
        material={textureMaterial}
        position={[-0.28, 0.01, 0.76]}
      />
      <motion.group
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="salameche"
        position={[-0.61, 2.04, -1.96]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
      >
        <mesh
          name="mesh434900071"
          geometry={nodes.mesh434900071.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_1"
          geometry={nodes.mesh434900071_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_2"
          geometry={nodes.mesh434900071_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_3"
          geometry={nodes.mesh434900071_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_4"
          geometry={nodes.mesh434900071_4.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_5"
          geometry={nodes.mesh434900071_5.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <group
        name="keyboard"
        position={[0.21, 0.98, -1.21]}
        rotation={[0, -0.22, 0]}
        scale={0.63}
      >
        <mesh
          name="mesh425587018"
          geometry={nodes.mesh425587018.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_1"
          geometry={nodes.mesh425587018_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_2"
          geometry={nodes.mesh425587018_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_3"
          geometry={nodes.mesh425587018_3.geometry}
          material={textureMaterial}
        />
      </group>
      <motion.group
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="iMac"
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <mesh
          name="iMac_1_1"
          geometry={nodes.iMac_1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_2"
          geometry={nodes.iMac_1_2.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <mesh
        name="Comp_Mouse"
        geometry={nodes.Comp_Mouse.geometry}
        material={textureMaterial}
        position={[-0.01, 0, 0.08]}
      />
      <motion.group
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="plant"
        position={[-0.78, 1.07, -1.61]}
      >
        <mesh
          name="mesh24448074"
          geometry={nodes.mesh24448074.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_1"
          geometry={nodes.mesh24448074_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_2"
          geometry={nodes.mesh24448074_2.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="Houseplant_7"
        position={[-2.02, -0.04, -1.53]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Houseplant_7_1"
          geometry={nodes.Houseplant_7_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_2"
          geometry={nodes.Houseplant_7_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_3"
          geometry={nodes.Houseplant_7_3.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="palm_tree_01"
        position={[2.13, -0.08, -1.06]}
        rotation={[-Math.PI, 0.67, -Math.PI]}
      >
        <mesh
          name="palm_tree_01-Mesh"
          geometry={nodes["palm_tree_01-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_1"
          geometry={nodes["palm_tree_01-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_2"
          geometry={nodes["palm_tree_01-Mesh_2"].geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="Chair"
        position={[0.09, 0, -0.66]}
        rotation={[0, -0.35, 0]}
      >
        <mesh
          name="Node-Mesh"
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
      </motion.group>
      <mesh
        name="Plane001"
        geometry={nodes.Plane001.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_1"
        geometry={nodes.Plane001_1.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_2"
        geometry={nodes.Plane001_2.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_3"
        geometry={nodes.Plane001_3.geometry}
        material={textureGlassMaterial}
      />
    </group>
  );
}

useGLTF.preload("models/scene.gltf");
useTexture.preload("textures/baked.jpg");
