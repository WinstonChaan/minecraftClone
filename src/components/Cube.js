import React from "react";
import { useBox } from "@react-three/cannon";
import * as textures from "../textures";

export const Cube = ({ position, type, ...props }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    ...props,
  }));

  return (
    <mesh castShadow ref={ref}>
      {[...Array(5)].map((_, index) => (
        <meshStandardMaterial
          attachArray='material'
          map={textures[type]}
          key={index}
        />
      ))}
      <boxBufferGeometry attach='geometry' />
    </mesh>
  );
};