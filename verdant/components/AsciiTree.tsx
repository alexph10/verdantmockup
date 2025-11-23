import React, { useEffect, useRef } from 'react';

const AsciiForestFlow: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = 65;
    let height = 65;
    let grid: string[][] = [];
    let time = 0;
    let animationFrameId: number;

    function initGrid() {
      grid = [];
      for (let y = 0; y < height; y++) {
        let row = [];
        for (let x = 0; x < width; x++) {
          row.push(' ');
        }
        grid.push(row);
      }
    }

    function render() {
      if (!canvas) return;
      let html = '';
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          html += grid[y][x];
        }
        html += '<br>';
      }
      canvas.innerHTML = html;
    }

    function update() {
      initGrid();

      const forestSize = 30;
      const forestX = Math.floor(width / 2 - forestSize / 2);
      const forestY = Math.floor(height / 2 - forestSize / 2);
      const t = time * 0.005;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if (x >= forestX && x < forestX + forestSize && y >= forestY && y < forestY + forestSize) {
            const innerDist = Math.min(
              x - forestX,
              forestX + forestSize - x,
              y - forestY,
              forestY + forestSize - y
            );
            const clearing = time * 0.0067;
            
            if (innerDist > clearing) {
              // Dense forest canopy
              const treeTypes = ['^', '*', 'Y', 'T', 'A', '‡'];
              const rand = Math.random();
              if (rand > 0.7) {
                grid[y][x] = treeTypes[Math.floor(Math.random() * treeTypes.length)];
              } else if (rand > 0.4) {
                grid[y][x] = '|';
              } else {
                grid[y][x] = '"';
              }
            } else {
              // Clearing edge with mixed vegetation
              const edgeVeg = ['^', '*', '"', ':', '|', '.'];
              grid[y][x] = edgeVeg[Math.floor(Math.random() * edgeVeg.length)];
            }
          } else {
            const dx = x - width / 2;
            const dy = y - height / 2;
            const angle = Math.atan2(dy, dx);
            const dist = Math.sqrt(dx * dx + dy * dy);
            const wave = Math.sin(dist * 0.2 - t + angle * 1.5);
            const flow = Math.sin(x * 0.08 + y * 0.04 + t * 0.4);

            if (flow + wave > 0.4) {
              // Sparse undergrowth
              const sparse = ['.', ',', ':', "'", ' ', ' '];
              grid[y][x] = sparse[Math.floor(Math.random() * sparse.length)];
            } else if (flow + wave < -0.4) {
              // Dense undergrowth and ferns
              const dense = ['"', ':', '*', '.', ','];
              grid[y][x] = dense[Math.floor(Math.random() * dense.length)];
            } else {
              // Occasional trees in the distance
              if (Math.random() > 0.95) {
                grid[y][x] = '^';
              }
            }
          }
        }
      }

      // Add paths/streams through the forest
      for (let i = 0; i < 5; i++) {
        const pathX = forestX + Math.floor(Math.random() * forestSize);
        const pathY = forestY + Math.floor(Math.random() * forestSize);
        const length = Math.floor(Math.random() * 10) + 5;
        let cx = Math.floor(pathX);
        let cy = Math.floor(pathY);

        for (let j = 0; j < length; j++) {
          if (cx >= 0 && cx < width && cy >= 0 && cy < height) {
            grid[cy][cx] = Math.random() > 0.5 ? '·' : '.';
          }
          cx += Math.floor(Math.random() * 3) - 1;
          cy += Math.floor(Math.random() * 3) - 1;
        }
      }

      // Add occasional birds
      for (let i = 0; i < 3; i++) {
        if (Math.random() > 0.7) {
          const birdX = Math.floor(Math.random() * width);
          const birdY = Math.floor(Math.random() * (height / 3));
          if (birdX >= 0 && birdX < width && birdY >= 0 && birdY < height) {
            grid[birdY][birdX] = 'º';
          }
        }
      }

      time += 0.15; // Slow down animation (lower = slower)
    }

    function animate() {
      update();
      render();
      animationFrameId = requestAnimationFrame(animate);
    }

    initGrid();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
      if (canvas) {
        canvas.innerHTML = '';
      }
      grid = [];
      time = 0;
    };
  }, []);

  return (
    <div
      style={{
        margin: 0,
        background: '#E8F4E0',
        overflow: 'hidden',
        fontFamily: 'monospace',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <div
        style={{
          padding: '30px',
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          ref={canvasRef}
          style={{
            fontSize: '8px',
            lineHeight: '0.85',
            letterSpacing: '0.05em',
            color: '#2A5A1F',
            userSelect: 'none',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '10%',
          }}
        />
      </div>
    </div>
  );
};

export default AsciiForestFlow;

