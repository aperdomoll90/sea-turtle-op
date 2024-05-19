'use client'
import React, { useRef } from 'react'
import './styles.css'
import { CameraControls } from '@react-three/drei'
import { Canvas } from 'react-three-fiber'
const logoRing = '/assets/ringtext.png'
import { LeatherbackModel } from '@/components/LoadLeatherback'
import AboutUs from '@/components/aboutUs/AboutUs'
import OurBeginning from '@/components/ourBeginning/ourBeginning'
import OurSupporters from '@/components/ourSupporters/ourSupporters'
import HomeSectionContactUs from '@/components/homeSectionContactUs/homeSectionContactUs'
import { Footer } from '@/layout/footer/Footer'

const Model = () => {
  const meshRef = useRef<any>()

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        {/* <GreenTurtleModel /> */}
        <LeatherbackModel />
      </mesh>
    </group>
  )
}

export default function Home() {
  const cameraRef = useRef() as React.RefObject<CameraControls>
  const scrollArea = React.useRef<any>()
  return (
    <div id='home-wrapper'>
      <img id='home-canvas-logo-ring' src={logoRing} />
      <div id='home-canvas-container'>
        <Canvas id='home-canvas' camera={{ fov: 25, position: [0, 60, -40] }} className='section-ensemble-flex-container' legacy>
          {/* <CameraControls ref={cameraRef} /> */}
          <ambientLight intensity={0.2} />
          <directionalLight castShadow position={[10, 10, 0]} intensity={1.5} shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10} />
          <spotLight intensity={0.5} position={[100, 0, 0]} castShadow />
          <Model />
        </Canvas>
      </div>

      <div ref={scrollArea} className='home-content-wrapper'>
        <AboutUs />
        <OurBeginning />
        {/* <OurSupporters /> */}
        <HomeSectionContactUs />
        <Footer />
      </div>
    </div>
  )
}
