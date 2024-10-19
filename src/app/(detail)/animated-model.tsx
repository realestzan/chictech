import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { Model } from './man';

export default function AnimatedModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.y = Math.sin(t / 4) / 8
      group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    }
  })

  return (
    <group ref={group} {...props}>
      <Model />
    </group>
  )
}
// 