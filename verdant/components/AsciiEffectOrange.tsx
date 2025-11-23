import { forwardRef, useMemo } from 'react';
import { Effect } from 'postprocessing';
import { Uniform, Texture, Color } from 'three';
import { Vector2 } from 'three';

// ASCII shader with custom color support
const fragmentShader = `
uniform float uCharacterSize;
uniform vec2 uResolution;
uniform sampler2D uGlyphTexture;
uniform float uGlyphCount;
uniform vec3 uColor;

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
  
  // Apply custom color based on brightness
  vec3 finalColor = glyph.rgb * uColor * brightness * glyph.a;
  
  // Force complete replacement by using glyph alpha as mask
  outputColor = vec4(finalColor, 1.0);
}
`;

// Custom ASCII Effect class with color support
class AsciiOrangeEffectImpl extends Effect {
  constructor({ characterSize = 8, glyphTexture, glyphCount = 12, color = '#ff8c42' }: { 
    characterSize?: number;
    glyphTexture: Texture;
    glyphCount?: number;
    color?: string;
  }) {
    super('AsciiOrangeEffect', fragmentShader, {
      uniforms: new Map([
        ['uCharacterSize', new Uniform(characterSize)],
        ['uResolution', new Uniform(new Vector2(1, 1))],
        ['uGlyphTexture', new Uniform(glyphTexture)],
        ['uGlyphCount', new Uniform(glyphCount)],
        ['uColor', new Uniform(new Color(color))],
      ] as any),
    });
  }

  update(renderer: any) {
    const size = renderer.getSize(new Vector2());
    this.uniforms.get('uResolution')!.value = size;
  }
}

// React component wrapper
export const AsciiOrangeEffect = forwardRef<
  Effect,
  { characterSize?: number; glyphTexture: Texture; glyphCount?: number; color?: string }
>(({ characterSize = 8, glyphTexture, glyphCount = 12, color = '#ff8c42' }, ref) => {
  const effect = useMemo(
    () => new AsciiOrangeEffectImpl({ characterSize, glyphTexture, glyphCount, color }),
    [characterSize, glyphTexture, glyphCount, color]
  );
  return <primitive ref={ref} object={effect} />;
});

AsciiOrangeEffect.displayName = 'AsciiOrangeEffect';
