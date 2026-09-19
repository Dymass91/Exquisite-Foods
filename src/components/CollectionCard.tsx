import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Props { to: string; index: string; kicker: string; title: string; image: string; alt: string; className: string; position?: string }

/** Large editorial photographic tile. */
export default function CollectionCard({ to, index, kicker, title, image, alt, className, position }: Props) {
  return (
    <Link to={to} className={`tile ${className}`}>
      <div className="frame"><img src={image} alt={alt} loading="lazy" style={{ objectPosition: position }} /></div>
      <span className="tile-num">{index}</span>
      <div className="tile-body">
        <div className="tile-title">
          <small>{kicker}</small>
          <span className="h3" style={{ fontSize: 'clamp(2.2rem, 4.4vw, 4.2rem)' }}>{title}</span>
        </div>
        <span className="tile-arrow" aria-hidden="true"><ArrowRight size={22} /></span>
      </div>
    </Link>
  );
}
