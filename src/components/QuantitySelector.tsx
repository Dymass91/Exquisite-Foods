import { Minus, Plus } from 'lucide-react';

interface Props { value: number; onChange: (n: number) => void; label?: string; small?: boolean; min?: number }

export default function QuantitySelector({ value, onChange, label = 'Quantity', small, min = 1 }: Props) {
  return (
    <div className={`qty${small ? ' sm' : ''}`} role="group" aria-label={label}>
      <button type="button" aria-label="Decrease quantity" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}>
        <Minus size={15} />
      </button>
      <input
        type="number" inputMode="numeric" min={min} value={value} aria-label={label}
        onChange={(e) => onChange(Math.max(min, parseInt(e.target.value, 10) || min))}
      />
      <button type="button" aria-label="Increase quantity" onClick={() => onChange(value + 1)}>
        <Plus size={15} />
      </button>
    </div>
  );
}
