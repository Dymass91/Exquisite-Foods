import { Plus } from 'lucide-react';
import { gbp, type PriceTier } from '../data/products';

export default function VolumePricing({ tiers, quantity = 0 }: { tiers: PriceTier[]; quantity?: number }) {
  const current = [...tiers].reverse().find((t) => quantity >= t.min);
  return (
    <details className="volume">
      <summary>Volume pricing <Plus size={16} /></summary>
      <ol>
        {tiers.map((t) => (
          <li key={t.min} className={current === t ? 'is-current' : ''}>
            <b>{t.min}+</b><i /><span>{gbp(t.price)}</span>
          </li>
        ))}
      </ol>
      <p>Unit price drops automatically as your quantity increases.</p>
    </details>
  );
}
