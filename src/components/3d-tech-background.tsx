"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text, Sphere, Box } from "@react-three/drei"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import * as THREE from "three"

// Floating Binary Numbers
function BinaryRain() {
    const binaryNumbers = ["0", "1", "01", "10", "101", "110", "001", "111"]
    const elements = []

    for (let i = 0; i < 20; i++) {
        const randomBinary = binaryNumbers[Math.floor(Math.random() * binaryNumbers.length)]
        elements.push(
            <Float key={i} speed={0.5 + Math.random()} rotationIntensity={0.2} floatIntensity={1}>
                <Text
                    position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10]}
                    fontSize={0.5}
                    color="#10b981"
                    anchorX="center"
                    anchorY="middle"
                    font="/fonts/GeistMono-Regular.ttf"
                >
                    {randomBinary}
                </Text>
            </Float>,
        )
    }

    return <>{elements}</>
}

// Wireframe Cubes
function TechCubes() {
    const cubes = []

    for (let i = 0; i < 6; i++) {
        cubes.push(
            <Float key={i} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={2}>
                <Box
                    args={[1.5, 1.5, 1.5]}
                    position={[(Math.random() - 0.5) * 18, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8]}
                >
                    <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.3} />
                </Box>
            </Float>,
        )
    }

    return <>{cubes}</>
}

// Simple Network Nodes
function NetworkNodes() {
    const nodes = []

    for (let i = 0; i < 8; i++) {
        nodes.push(
            <Float key={i} speed={0.8 + Math.random() * 0.4} rotationIntensity={0.1} floatIntensity={1}>
                <Sphere
                    args={[0.15, 8, 8]}
                    position={[(Math.random() - 0.5) * 16, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6]}
                >
                    <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
                </Sphere>
            </Float>,
        )
    }

    return <>{nodes}</>
}

// Rotating Tech Symbols
function TechSymbols() {
    const symbols = ["<>", "{}", "[]", "/>", "&&", "||", "!=", "=="]
    const elements = []

    for (let i = 0; i < 10; i++) {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
        elements.push(
            <Float key={i} speed={0.8 + Math.random() * 0.5} rotationIntensity={1} floatIntensity={1.5}>
                <Text
                    position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10]}
                    fontSize={0.8}
                    color="#f59e0b"
                    anchorX="center"
                    anchorY="middle"
                    font="/fonts/GeistMono-Bold.ttf"
                >
                    {randomSymbol}
                </Text>
            </Float>,
        )
    }

    return <>{elements}</>
}

// Animated Grid
function TechGrid() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, -8]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[25, 25, 15, 15]} />
            <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.1} />
        </mesh>
    )
}

// Holographic Displays
function HolographicDisplays() {
    const displays = []

    for (let i = 0; i < 4; i++) {
        displays.push(
            <Float key={i} speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
                <mesh
                    position={[(Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5]}
                    rotation={[0, Math.random() * Math.PI, 0]}
                >
                    <planeGeometry args={[2, 1.2]} />
                    <meshBasicMaterial color="#10b981" transparent opacity={0.15} side={THREE.DoubleSide} />
                </mesh>
            </Float>,
        )
    }

    return <>{displays}</>
}

// Floating Particles
function TechParticles() {
    const particles = []

    for (let i = 0; i < 25; i++) {
        particles.push(
            <Float key={i} speed={0.5 + Math.random()} rotationIntensity={0.1} floatIntensity={0.8}>
                <Sphere
                    args={[0.05, 6, 6]}
                    position={[(Math.random() - 0.5) * 22, (Math.random() - 0.5) * 16, (Math.random() - 0.5) * 12]}
                >
                    <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
                </Sphere>
            </Float>,
        )
    }

    return <>{particles}</>
}

export default function TechBackground3D() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = theme === "dark"

    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
                {/* Lighting */}
                <ambientLight intensity={isDark ? 0.2 : 0.4} />
                <directionalLight position={[10, 10, 5]} intensity={isDark ? 0.3 : 0.6} />
                <pointLight position={[-8, -8, -4]} color="#8b5cf6" intensity={0.4} />
                <pointLight position={[8, 8, 4]} color="#06b6d4" intensity={0.3} />

                {/* Tech Elements */}
                <TechGrid />
                <BinaryRain />
                <TechCubes />
                <NetworkNodes />
                <TechSymbols />
                <HolographicDisplays />
                <TechParticles />
            </Canvas>
        </div>
    )
}
