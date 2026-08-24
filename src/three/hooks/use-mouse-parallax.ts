import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'
import { MathUtils } from 'three'

export function useMouseParallax(strength = 0.18) {
  const group = useRef<Group>(null)
  const pointer = useThree((state) => state.pointer)

  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, pointer.x * strength, 4, delta)
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, -pointer.y * strength, 4, delta)
  })

  return group
}
