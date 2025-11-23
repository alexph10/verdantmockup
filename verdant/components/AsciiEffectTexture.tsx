import { forwardRef, useMemo } from 'react';
import { Effect } from 'postprocessing';
import { Uniform, Texture } from 'three';
import { Vector2 } from 'three';

// Improved ASCII shader using texture atlas
const fragmentShader = `
uniform float uCharacterSize;
uniform vec2 uResolution;
uniform sampler2D uGlyphTexture;
uniform float uGlyphCount;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // Create grid
  vec2 grid = uResolution / uCharacterSize;
  vec2 gridUV = floor(uv * grid) / grid;
  
  // Sample render at grid position for color
  vec4 renderColor = texture2D(inputBuffer, gridUV);
  
  // Calculate brightness with boost
  float brightness = dot(renderColor.rgb, vec3(0.299, 0.587, 0.114));
  brightness = pow(brightness, 0.65);
  brightness = clamp(brightness * 1.8, 0.0, 1.0);
  
  // Get glyph index based on brightness
  float glyphIndex = floor(brightness * (uGlyphCount - 0.001));
  
  // Calculate UV for glyph texture
  vec2 cellUV = fract(uv * grid);
  cellUV.x /= uGlyphCount;
  vec2 glyphOffset = vec2(glyphIndex / uGlyphCount, 0.0);
  
  // Sample glyph texture
  vec4 glyph = texture2D(uGlyphTexture, cellUV + glyphOffset);
  
  // Apply color with saturation boost
  vec3 color = renderColor.rgb * 2.0;
  float luminance = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(luminance), color, 1.8);
  
  // Combine glyph with color - ensure full replacement
  vec3 finalColor = glyph.rgb * color * glyph.a;
  
  // Force complete replacement by using glyph alpha as mask
  outputColor = vec4(finalColor, 1.0);
}
`;

// Custom ASCII Effect class using texture
class AsciiTextureEffectImpl extends Effect {
  constructor({ characterSize = 8, glyphTexture, glyphCount = 12 }: { 
    characterSize?: number;
    glyphTexture: Texture;
    glyphCount?: number;
  }) {
    super('AsciiTextureEffect', fragmentShader, {
      uniforms: new Map([
        ['uCharacterSize', new Uniform(characterSize)],
        ['uResolution', new Uniform(new Vector2(1, 1))],
        ['uGlyphTexture', new Uniform(glyphTexture)],
        ['uGlyphCount', new Uniform(glyphCount)],
      ] as any),
    });
  }

  update(renderer: any) {
    const size = renderer.getSize(new Vector2());
    this.uniforms.get('uResolution')!.value = size;
  }
}

// React component wrapper
export const AsciiTextureEffect = forwardRef<
  Effect,
  { characterSize?: number; glyphTexture: Texture; glyphCount?: number }
>(({ characterSize = 8, glyphTexture, glyphCount = 12 }, ref) => {
  const effect = useMemo(
    () => new AsciiTextureEffectImpl({ characterSize, glyphTexture, glyphCount }),
    [characterSize, glyphTexture, glyphCount]
  );
  return <primitive ref={ref} object={effect} />;
});

AsciiTextureEffect.displayName = 'AsciiTextureEffect';

