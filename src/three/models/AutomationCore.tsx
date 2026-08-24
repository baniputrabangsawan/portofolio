import { Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useMouseParallax } from '../hooks/use-mouse-parallax'

function Network() {
  const points = useMemo(() => {
    const output: number[] = []
    for (let index = 0; index < 84; index += 1) {
      const phi = Math.acos(-1 + (2 * index) / 84)
      const theta = Math.sqrt(84 * Math.PI) * phi
      const radius = 2.15 + Math.sin(index * 2.4) * 0.14
      output.push(radius * Math.cos(theta) * Math.sin(phi), radius * Math.sin(theta) * Math.sin(phi), radius * Math.cos(phi))
    }
    return new Float32Array(output)
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c7ff3d" size={0.045} sizeAttenuation transparent opacity={0.95} />
    </points>
  )
}

export function AutomationCore() {
  const parallaxRef = useMouseParallax(0.24)
  const rotatingRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (rotatingRef.current) {
      rotatingRef.current.rotation.y += delta * 0.09
      rotatingRef.current.rotation.z -= delta * 0.025
    }
  })

  return (
    <group ref={parallaxRef}>
      <Float speed={1.25} rotationIntensity={0.12} floatIntensity={0.18}>
        <group ref={rotatingRef} rotation={[0.2, -0.3, 0.1]}>
          <mesh>
            <icosahedronGeometry args={[1.9, 3]} />
            <meshStandardMaterial color="#11120f" roughness={0.42} metalness={0.8} wireframe />
          </mesh>
          <mesh rotation={[0.3, 0.8, 0.2]}>
            <torusKnotGeometry args={[1.08, 0.28, 180, 20, 2, 3]} />
            <meshStandardMaterial color="#171914" roughness={0.18} metalness={0.92} />
          </mesh>
          <mesh scale={0.42}>
            <icosahedronGeometry args={[1, 2]} />
            <meshStandardMaterial color="#c7ff3d" roughness={0.35} emissive="#769d12" emissiveIntensity={0.55} />
          </mesh>
          <Network />
        </group>
      </Float>
    </group>
  )
}
