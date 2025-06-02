import React from 'react';
import '../../styles/index.css';

export default {
  title: 'Foundations/Colors/Gradients & Overlays',
};

export const GradientsAndOverlay = () => (
  <div className="grid gap-sm">
    <div style={{
      background: 'var(--gradient-primary)',
      padding: '2rem',
      color: 'white',
      borderRadius: 'var(--radius-md)',
      fontWeight: 'bold',
      fontSize: '1rem',
      textAlign: 'center',
    }}>
      --gradient-primary
    </div>

    <div style={{
      position: 'relative',
      height: '150px',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'url(https://picsum.photos/400) center/cover no-repeat',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'var(--overlay-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 600,
        fontSize: '1rem'
      }}>
        --overlay-color
      </div>
    </div>
  </div>
);
