import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Orb() {
  const ref = useRef<Mesh>(null)
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.06
    ref.current.rotation.y += delta * 0.1
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.08
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.55, 2]} />
      <meshStandardMaterial color="#c7ff3d" wireframe roughness={0.5} />
    </mesh>
  )
}

export default function ClosingScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 1.35]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[2, 2, 3]} intensity={5} color="#c7ff3d" />
      <Orb />
    </Canvas>
  )
}
