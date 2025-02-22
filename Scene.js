import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterSpot" position={[0.07, 0.24, -0.57]} rotation={[-Math.PI, 0.42, -Math.PI]} />
        <group name="Desk" position={[-0.07, 0, -1.52]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh name="Plane001_Plane002_BlackWood001" geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={materials['BlackWood.001']} />
          <mesh name="Plane001_Plane002_BlackWood001_1" geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry} material={materials['BlackCoatSteel.001']} />
          <mesh name="Plane001_Plane002_BlackWood001_2" geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry} material={materials['GrayPlastic.001']} />
          <mesh name="Plane001_Plane002_BlackWood001_3" geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry} material={materials['WhiteSteelScrew.001']} />
          <mesh name="Plane001_Plane002_BlackWood001_4" geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry} material={materials['BlackPlastic.001']} />
        </group>
        <group name="SM_ShelfSM_Shelf1" position={[-0.87, 1.69, -2.04]}>
          <mesh name="SM_ShelfSM_Shelf1_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={materials.lambert2SG} />
          <mesh name="SM_ShelfSM_Shelf1_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={materials['795548.001']} />
        </group>
        <group name="LavaLamp" position={[-1.3, 2.07, -1.99]}>
          <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={materials.lambert4SG} />
          <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={materials['lambert2SG.001']} />
          <mesh name="Node-Mesh001_2" geometry={nodes['Node-Mesh001_2'].geometry} material={materials['lambert3SG.002']} />
        </group>
        <mesh name="WawaRug" geometry={nodes.WawaRug.geometry} material={materials.Rug} position={[-0.28, 0.01, 0.76]} />
        <group name="salameche" position={[-0.61, 2.04, -1.96]} rotation={[-Math.PI, 0.73, -Math.PI]}>
          <mesh name="mesh434900071" geometry={nodes.mesh434900071.geometry} material={materials.mat14} />
          <mesh name="mesh434900071_1" geometry={nodes.mesh434900071_1.geometry} material={materials.mat13} />
          <mesh name="mesh434900071_2" geometry={nodes.mesh434900071_2.geometry} material={materials['mat12.001']} />
          <mesh name="mesh434900071_3" geometry={nodes.mesh434900071_3.geometry} material={materials['mat21.003']} />
          <mesh name="mesh434900071_4" geometry={nodes.mesh434900071_4.geometry} material={materials['mat23.001']} />
          <mesh name="mesh434900071_5" geometry={nodes.mesh434900071_5.geometry} material={materials.mat11} />
        </group>
        <group name="keyboard" position={[0.21, 0.98, -1.21]} rotation={[0, -0.22, 0]} scale={0.63}>
          <mesh name="mesh425587018" geometry={nodes.mesh425587018.geometry} material={materials['mat21.004']} />
          <mesh name="mesh425587018_1" geometry={nodes.mesh425587018_1.geometry} material={materials['mat22.001']} />
          <mesh name="mesh425587018_2" geometry={nodes.mesh425587018_2.geometry} material={materials['mat9.002']} />
          <mesh name="mesh425587018_3" geometry={nodes.mesh425587018_3.geometry} material={materials['mat16.001']} />
        </group>
        <group name="iMac" position={[0.45, 0.94, -1.72]} rotation={[Math.PI, -1.1, Math.PI]}>
          <mesh name="iMac_1" geometry={nodes.iMac_1.geometry} material={materials.Screen} />
          <mesh name="iMac_1_1" geometry={nodes.iMac_1_1.geometry} material={materials.ScreenBlack} />
          <mesh name="iMac_1_2" geometry={nodes.iMac_1_2.geometry} material={materials.iMacBody} />
        </group>
        <mesh name="Comp_Mouse" geometry={nodes.Comp_Mouse.geometry} material={materials['lambert3SG.003']} position={[-0.01, 0, 0.08]} />
        <group name="plant" position={[-0.78, 1.07, -1.61]}>
          <mesh name="mesh24448074" geometry={nodes.mesh24448074.geometry} material={materials['mat9.003']} />
          <mesh name="mesh24448074_1" geometry={nodes.mesh24448074_1.geometry} material={materials['mat20.001']} />
          <mesh name="mesh24448074_2" geometry={nodes.mesh24448074_2.geometry} material={materials['mat21.005']} />
        </group>
        <group name="Houseplant_7" position={[-2.02, -0.04, -1.53]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="Houseplant_7_1" geometry={nodes.Houseplant_7_1.geometry} material={materials['Black.001']} />
          <mesh name="Houseplant_7_2" geometry={nodes.Houseplant_7_2.geometry} material={materials['Brown.001']} />
          <mesh name="Houseplant_7_3" geometry={nodes.Houseplant_7_3.geometry} material={materials['Plant_Green.001']} />
        </group>
        <group name="palm_tree_01" position={[2.13, -0.08, -1.06]} rotation={[-Math.PI, 0.67, -Math.PI]}>
          <mesh name="palm_tree_01-Mesh" geometry={nodes['palm_tree_01-Mesh'].geometry} material={materials['795548.001']} />
          <mesh name="palm_tree_01-Mesh_1" geometry={nodes['palm_tree_01-Mesh_1'].geometry} material={materials['8BC34A.001']} />
          <mesh name="palm_tree_01-Mesh_2" geometry={nodes['palm_tree_01-Mesh_2'].geometry} material={materials['DD9944.001']} />
        </group>
        <group name="Chair" position={[0.09, 0, -0.66]} rotation={[0, -0.35, 0]}>
          <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={materials.Office_Cha} />
          <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={materials.Office_Cha_1} />
        </group>
        <mesh name="Screen" geometry={nodes.Screen.geometry} material={materials.Screen} position={[0.45, 0.94, -1.72]} rotation={[Math.PI, -1.1, Math.PI]} />
        <group name="Plane">
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials.Floor} />
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials.White} />
          <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={materials.Wall} />
          <mesh name="Plane001_3" geometry={nodes.Plane001_3.geometry} material={materials.Glass} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
