import { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

// LEATHERBACK
interface ViewportSize {
  width: number
  height: number
}

// camera={{ fov: 30, position: [30, Math.PI / 2, Math.PI / 0.09] }}
export function LeatherbackModel({ ...props }) {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [scale, setScale] = useState(100)
  const group = useRef()
  const { nodes, materials, animations }: any = useGLTF('/assets/Leatherback/scene.gltf')
  const { actions, names }: any = useAnimations(animations, group)

  useEffect(() => {
    if (actions && names) {
      actions[names[0]].reset().fadeIn(0.1).play()
    }
  }, [actions])

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    console.log('viewportSize.width', viewportSize.width)
    if (viewportSize.width <= 450) {
      console.log('viewportSize mobile')
      setScale(80)
    }
    if (viewportSize.width > 450 && viewportSize.width <= 900) {
      console.log('viewportSize desktop')
      setScale(100)
    }
    if (viewportSize.width > 900) {
      console.log('viewportSize desktop')
      setScale(130)
    }
  }, [viewportSize])

  return (
    <group ref={group as any} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='8b6bdf9bbc4a49a0a2aa14c21b891ee8fbx' rotation={[Math.PI / 2, 0, 0]}>
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='leatherbackjuv_body' position={[0.04, -0.02, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={scale} />
                <group name='leatherbackjuv_eye' position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={scale} />
                <group name='leatherbackjuv_membrane' position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={scale} />
                <group name='leatherbackjuv_armature' rotation={[-Math.PI / 2, 0, 0]} scale={scale}>
                  <group name='Object_8'>
                    <primitive object={nodes._rootJoint} />
                    <group name='Object_10' position={[0.04, -0.02, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={scale} />
                    <group name='Object_12' position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={scale} />
                    <group name='Object_15' position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={scale} />
                    <skinnedMesh name='Object_11' geometry={nodes.Object_11.geometry} material={materials.leatherbackjuv_body} skeleton={nodes.Object_11.skeleton} />
                    <skinnedMesh name='Object_13' geometry={nodes.Object_13.geometry} material={materials.leatherbackjuv_eye} skeleton={nodes.Object_13.skeleton} />
                    <skinnedMesh name='Object_14' geometry={nodes.Object_14.geometry} material={materials.leatherbackjuv_body} skeleton={nodes.Object_14.skeleton} />
                    <skinnedMesh name='Object_16' geometry={nodes.Object_16.geometry} material={materials.leatherbackjuv_membrane} skeleton={nodes.Object_16.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/Leatherback/scene.gltf')
