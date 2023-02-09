import React from 'react'
import { Canvas } from '@react-three/fiber';
import {useGLTF, Stage, PresentationControls} from '@react-three/drei';


function Model(props:any){
    const scene = useGLTF('../../../assets/assets3d/boba.gltf')
    return <primitive object={scene} scale={0.01} {...props}/>
}

export const Char3D = () => {
  return (
    <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute"}}>
        <color attach="background" args={['#101010']} />
    <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={undefined}>
            <Model scale ={0.01}></Model>
        </Stage>
    </PresentationControls>
    </Canvas>
  )
}
