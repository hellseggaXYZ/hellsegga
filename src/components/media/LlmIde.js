import React from 'react';

export default function LlmIde() {
  const aspectRatioPadding = (650 / 950) * 100; // Aspect ratio calculation

  return (
    <div style={{
      backgroundColor: 'black',
      maxWidth: '950px',
      width: '100%',
      margin: '0 auto',
      position: 'relative',
      paddingTop: `${aspectRatioPadding}%`, // Maintain aspect ratio
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50px',
    }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
        src="/llm.mp4"
        alt="Hist of Comp"
      />
    </div>
  );
}
