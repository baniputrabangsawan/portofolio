import { Canvas } from '@react-three/fiber'
import { AutomationCore } from '../models/AutomationCore'

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.8], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-label="Abstract automation network — an interactive 3D visualization"
    >
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 5, 5]} intensity={4.2} color="#f4f3ed" />
      <pointLight position={[-4, -2, 2]} intensity={7} color="#c7ff3d" />
      <AutomationCore />
    </Canvas>
  )
}
