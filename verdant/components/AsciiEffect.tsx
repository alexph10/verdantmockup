import { forwardRef, useMemo } from 'react';
import { Effect } from 'postprocessing';
import { Uniform } from 'three';

// ASCII shader fragment code
const fragmentShader = `
uniform float uCharacterSize;
uniform vec2 uResolution;

const vec3 asciiChars = vec3(32.0, 46.0, 58.0); // Space, dot, colon for density
const float numChars = 12.0;

float character(float n, vec2 p) {
  p = floor(p * vec2(4.0, 4.0) + 2.5);
  if (clamp(p.x, 0.0, 4.0) == p.x) {
    if (clamp(p.y, 0.0, 4.0) == p.y) {
      float a = mod(n / exp2(p.x + 5.0 * p.y), 2.0);
      return floor(a);
    }
  }
  return 0.0;
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec2 pix = uv * uResolution;
  vec2 pixelSize = vec2(uCharacterSize);
  
  vec2 co = floor(pix / pixelSize);
  vec2 pos = mod(pix, pixelSize) / pixelSize;
  
  // Sample the input color at cell position
  vec2 sampleUv = (co * pixelSize + pixelSize * 0.5) / uResolution;
  vec4 tex = texture2D(inputBuffer, sampleUv);
  
  // Calculate grayscale with moderate brightness
  float gray = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
  
  // Balanced contrast and brightness
  gray = pow(gray, 0.65); // Moderate gamma correction
  gray = clamp(gray * 1.8, 0.0, 1.0); // Moderate brightness boost
  
  // Map to ASCII character set
  float charIndex = floor(gray * numChars);
  
  // Alphanumeric character set for better 3D rendering
  float n = 0.0;
  if (charIndex < 1.0) n = 0.0;              // space (darkest)
  else if (charIndex < 2.0) n = 4096.0;      // . (very light)
  else if (charIndex < 3.0) n = 31280.0;     // 1 (thin number)
  else if (charIndex < 4.0) n = 15255.0;     // i (thin letter)
  else if (charIndex < 5.0) n = 31183.0;     // o (circular)
  else if (charIndex < 6.0) n = 23524.0;     // 3 (medium number)
  else if (charIndex < 7.0) n = 31207.0;     // x (cross letter)
  else if (charIndex < 8.0) n = 31599.0;     // 8 (dense number)
  else if (charIndex < 9.0) n = 31727.0;     // B (dense letter)
  else if (charIndex < 10.0) n = 32639.0;    // A (heavy letter)
  else if (charIndex < 11.0) n = 32871.0;    // M (very heavy)
  else n = 33023.0;                          // W (brightest/heaviest)
  
  float c = character(n, pos);
  
  // Use original model colors with moderate brightness and saturation
  vec3 originalColor = tex.rgb * 2.0; // Moderate brightness boost
  
  // High saturation increase
  float luminance = dot(originalColor, vec3(0.299, 0.587, 0.114));
  originalColor = mix(vec3(luminance), originalColor, 1.8); // Strong saturation boost
  
  vec3 color = mix(vec3(0.0), originalColor, c);
  
  outputColor = vec4(color, tex.a);
}
`;

// Need to import Vector2
import { Vector2 } from 'three';

// Custom ASCII Effect class
class AsciiEffectImpl extends Effect {
  constructor({ characterSize = 8 } = {}) {
    super('AsciiEffect', fragmentShader, {
      uniforms: new Map([
        ['uCharacterSize', new Uniform(characterSize)],
        ['uResolution', new Uniform(new Vector2(1, 1))],
      ] as any),
    });
  }

  update(renderer: any) {
    const size = renderer.getSize(new Vector2());
    this.uniforms.get('uResolution')!.value = size;
  }
}

// React component wrapper
export const AsciiEffect = forwardRef(({ characterSize = 8 }: { characterSize?: number }, ref) => {
  const effect = useMemo(() => new AsciiEffectImpl({ characterSize }), [characterSize]);
  return <primitive ref={ref} object={effect} />;
});

AsciiEffect.displayName = 'AsciiEffect';

