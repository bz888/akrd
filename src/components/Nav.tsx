import {MutableRefObject, useMemo, useRef} from "react";
import * as THREE from "three"
import {useFrame, useLoader} from "@react-three/fiber";

function Image({ i = 0, r = 0, url, ...rest }: any) {
    r = useMemo(() => r || Math.round(Math.random() * 100), [])
    const texture = useLoader(THREE.TextureLoader, url)
    // const invalidate = useFlexInvalidate()
    const groupRef = useRef<any>()
    useFrame(({ clock }) => {
        if (i > 0 && i % 10 === 0) {
            groupRef && groupRef.current.scale.x = 1 + Math.sin(clock.getElapsedTime()) * 0.8
            // Inform flexbox
            // invalidate()
        }
    })
    return (
        <group ref={groupRef} {...rest}>
            <mesh position={[0, 0, 10]} castShadow receiveShadow>
                <boxBufferGeometry args={[50 + r, 50, 50]} />
                {/*<meshStandardMaterial map={texture} roughness={0.5} />*/}
            </mesh>
        </group>
    )
}

// export default function Nav ( ) {
//
//     const scrollArea = useRef()
//
//     function onScroll(e: any) {
//         console.log(e.target.scrollTop)
//     }
//
//     return (
//         <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
//             <div style={{ height: `${state.pages * 100}vh` }} />
//         </div>
//     )
// }