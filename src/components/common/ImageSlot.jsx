import { useState } from 'react';
import { ImagePlus } from 'lucide-react';

export default function ImageSlot({ src, alt, label, assetName, className = '' }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className={`image-slot ${className}`}>
      {hasImage ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setHasImage(false)} />
      ) : (
        <div className="image-slot-placeholder" role="img" aria-label={`${label} image placeholder`}>
          <ImagePlus size={28} strokeWidth={1.5} aria-hidden="true" />
          <strong>{label}</strong>
          <span>Place <code>{assetName}</code> in <code>public/assets</code></span>
        </div>
      )}
      {hasImage && <span className="image-slot-caption">{label}</span>}
    </div>
  );
}
