import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

// GREEN SEA TURTLE
// camera={{ fov: 5, position: [-40, 40, Math.PI / 0.09] }}
// camera={{ fov: 5, position: [-40, 40, 0] }} // side view
// camera={{ fov: 5, position: [-90, 40, 0] }} // side view
export function GreenTurtleModel({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations }: any = useGLTF('/assets/greenseaturtle/scene.gltf')
  const { actions, names }: any = useAnimations(animations, group)
  if (actions && names) {
    useEffect(() => {
      actions[names[0]].reset().fadeIn(0.5).play()
    }, [actions])
  }

  return (
    <group ref={group as any} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]} scale={0.08}>
          <group name='green_016_round5changes_johnsonfbx' rotation={[Math.PI / 2, 0, 0]}>
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='green_juvenilearmature' position={[-2.27, 2.99, -2.19]} rotation={[-Math.PI / 2, 0, -3.12]} scale={100}>
                  <group name='Object_5'>
                    <primitive object={nodes._rootJoint} />
                    <group name='Object_39' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name='Object_42' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name='Object_40' geometry={nodes.Object_40.geometry} material={materials.greeneye} skeleton={nodes.Object_40.skeleton} />
                    <skinnedMesh name='Object_41' geometry={nodes.Object_41.geometry} material={materials.greeneyeouter} skeleton={nodes.Object_41.skeleton} />
                    <skinnedMesh name='Object_43' geometry={nodes.Object_43.geometry} material={materials.greenbody} skeleton={nodes.Object_43.skeleton} />
                  </group>
                </group>
                <group name='green_juvenileeye' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name='green_juvenilemesh' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/greenseaturtle/scene.gltf')
