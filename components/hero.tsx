"use client";

import { EffectScene } from "./effect-scene";

export function Hero() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* H1 Section */}
      <section className="w-full py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            This is your rotating object
          </h1>
        </div>
      </section>

      {/* Content Section - Side by Side */}
      <section className="w-full px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Description - Left Side */}
          <div className="bg-zinc-900/95 backdrop-blur-md border-2 border-white/30 rounded-xl p-6 md:p-8 space-y-6 shadow-2xl">
            <p className="text-base md:text-lg leading-relaxed text-white/95 font-light">
              A 3D GLTF model rendered with React Three Fiber,
              post-processed into ASCII art using custom GLSL shaders.
            </p>
            
            <div className="space-y-4 pt-2">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Interact:</h2>
              <ul className="space-y-3 text-base md:text-lg text-white/90 list-disc list-inside ml-2">
                <li>Hover to increase rotation speed</li>
                <li>Click and drag to rotate manually</li>
                <li>Move mouse for reactive glow effects</li>
              </ul>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-white/20">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Customize:</h2>
              <ul className="space-y-3 text-base md:text-lg">
                <li className="text-white/90">
                  <span className="font-mono text-purple-400 font-semibold">Model path & material</span> →{" "}
                  <span className="font-mono text-cyan-400 font-semibold">components/effect-scene.tsx</span>{" "}
                  <span className="text-white/60 text-sm">(line 12, 17)</span>
                </li>
                <li className="text-white/90">
                  <span className="font-mono text-purple-400 font-semibold">ASCII shader settings</span> →{" "}
                  <span className="font-mono text-cyan-400 font-semibold">components/ascii-effect.tsx</span>{" "}
                  <span className="text-white/60 text-sm">(line 188-202)</span>
                </li>
                <li className="text-white/90">
                  <span className="font-mono text-purple-400 font-semibold">Colors, cell size, effects</span> →{" "}
                  <span className="font-mono text-cyan-400 font-semibold">components/ascii-effect.tsx</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Canvas - Right Side */}
          <div className="h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-2xl">
            <EffectScene className="h-full w-full" enableZoom={false} />
          </div>
        </div>
      </section>
    </div>
  );
}

