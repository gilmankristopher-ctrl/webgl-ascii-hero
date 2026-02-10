# WebGL ASCII Shader Effect

A beautiful WebGL demo featuring a 3D GLTF model rendered with React Three Fiber and post-processed into an animated ASCII art effect using custom shaders.

## Features

- 🎨 **Real-time ASCII conversion** - Custom GLSL shader converts 3D scene to ASCII art
- 🦆 **Interactive 3D model** - Drag to rotate, hover to zoom
- ✨ **Post-processing effects** - CRT-style scanlines, vignette, and glow effects
- 🎯 **Mouse-reactive** - Mouse position affects glow and visual effects
- 📱 **Responsive** - Works on desktop and mobile devices

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Three.js](https://threejs.org/) - 3D graphics library
- [Postprocessing](https://github.com/pmndrs/postprocessing) - Post-processing effects
- [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for R3F
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd webgl-demo

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the effect.

## Project Structure

```
webgl-demo/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── hero.tsx        # Hero component (main page)
│   ├── effect-scene.tsx # 3D scene setup
│   └── ascii-effect.tsx # ASCII post-processing shader
└── public/
    └── models/
        └── Duck.glb    # 3D model (GLTF format)
```

## Customization

### Change the 3D Model

Replace `public/models/Duck.glb` with your own GLTF/GLB model and update the path in `components/effect-scene.tsx`:

```tsx
const { scene } = useGLTF("/models/YourModel.glb")
```

### Adjust ASCII Effect

Modify the `AsciiEffect` props in `components/effect-scene.tsx`:

```tsx
<AsciiEffect
  cellSize={9}              // Size of ASCII cells
  invert={true}             // Invert brightness
  color={true}              // Enable color
  characterSet="terminal"   // Character set
  volumeShading={true}      // 3D depth effect
  tintColor="#917AFF"       // Tint color
  postfx={{
    contrastAdjust: 1.8,    // Contrast
    brightnessAdjust: 0,   // Brightness
  }}
/>
```

### Modify Scene Lighting

Edit lighting in `components/effect-scene.tsx`:

```tsx
<ambientLight intensity={0.08} />
<directionalLight position={[2, 3.5, 6]} intensity={6} />
<directionalLight position={[-2, 1.5, 4]} intensity={0.35} />
```

## Building for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this project for your own purposes.

## Credits

- Duck model: [Three.js examples](https://threejs.org/examples/models/gltf/Duck/) - **Note:** The Duck.glb model included in this repository is copyrighted by Sony Computer Entertainment Inc. (2006) and licensed under the [SCEA Shared Source License, Version 1.0](https://web.archive.org/web/20160320123355/http://research.scea.com/scea_shared_source_license.html). This license has restrictions on distribution. For unrestricted distribution, consider replacing it with a CC0/public domain model.
- ASCII shader inspiration: Classic terminal art and CRT displays

## Model Licensing Note

⚠️ **Important:** The included `Duck.glb` model is subject to the SCEA Shared Source License, Version 1.0, which may restrict redistribution. If you plan to distribute this repository publicly, consider:

1. **Replacing the model** with a freely licensed alternative (CC0, MIT, or public domain)
2. **Removing the model** and instructing users to provide their own GLTF/GLB file
3. **Reviewing the SCEA license** to ensure your use case complies with its terms

Some free alternatives:
- [glTF Sample Models](https://github.com/KhronosGroup/glTF-Sample-Models) (check individual model licenses)
- [Sketchfab CC0 models](https://sketchfab.com/3d-models?features=downloadable&sort_by=-likeCount&q=cc0)
- [Poly Haven](https://polyhaven.com/models) (CC0 models)
