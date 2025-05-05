import { useEffect, useRef } from 'react';

export default function TrakteerEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ext = document.createElement('script');
    ext.src = 'https://edge-cdn.trakteer.id/js/trbtn-overlay.min.js?v=24-01-2025';
    ext.async = true;
    ext.className = 'troverlay';
    container.appendChild(ext);

    ext.onload = () => {
      const idx = 0; // kalau ini satu-satunya embed, index-nya pasti 0
      const inline = document.createElement('script');
      inline.className = 'troverlay';
      inline.innerHTML = `
        (function(){
          var trbtnId = trbtnOverlay.init(
            'Subscription',
            '#005CC6',
            'https://trakteer.id/BoedTrial/tip/embed/modal',
            'https://edge-cdn.trakteer.id/images/embed/trbtn-icon.png?v=24-01-2025',
            '70',
            'inline'
          );
          trbtnOverlay.draw(trbtnId);
        })();
      `;
      container.appendChild(inline);
    };

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} />;
}
