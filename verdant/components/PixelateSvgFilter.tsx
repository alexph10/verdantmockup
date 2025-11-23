'use client';

interface PixelateSvgFilterProps {
  id?: string;
  size?: number;
  crossLayers?: boolean;
}

export function PixelateSvgFilter({ 
  id = 'pixelate-filter',
  size = 16,
  crossLayers = false
}: PixelateSvgFilterProps) {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter id={id} x="0%" y="0%" width="100%" height="100%">
          <feFlood x="0" y="0" width={size} height={size} />
          <feComposite width={size} height={size} />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" result="b" />
          <feMorphology operator="dilate" radius={size} />
          <feTile result="c" />
          <feComposite in="b" in2="c" operator="in" />
        </filter>

        {crossLayers && (
          <>
            <filter id={`${id}-cross-1`} x="0%" y="0%" width="100%" height="100%">
              <feFlood x="0" y="0" width={size / 2} height={size} />
              <feComposite width={size / 2} height={size} />
              <feTile result="a" />
              <feComposite in="SourceGraphic" in2="a" operator="in" result="b" />
              <feMorphology operator="dilate" radius={size / 2} />
              <feTile result="c" />
              <feComposite in="b" in2="c" operator="in" />
            </filter>

            <filter id={`${id}-cross-2`} x="0%" y="0%" width="100%" height="100%">
              <feFlood x="0" y="0" width={size} height={size / 2} />
              <feComposite width={size} height={size / 2} />
              <feTile result="a" />
              <feComposite in="SourceGraphic" in2="a" operator="in" result="b" />
              <feMorphology operator="dilate" radius={size / 2} />
              <feTile result="c" />
              <feComposite in="b" in2="c" operator="in" />
            </filter>
          </>
        )}
      </defs>
    </svg>
  );
}
