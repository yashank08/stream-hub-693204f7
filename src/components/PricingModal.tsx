import { Crown, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    description: 'Basic access with ads',
    features: [
      'Limited content library',
      'Ad-supported streaming',
      '1 device at a time',
      'SD quality',
    ],
    missing: ['No downloads', 'No live sports'],
    variant: 'outline' as const,
  },
  {
    name: 'Premium',
    price: '₹299',
    period: '/month',
    description: 'Full access, no ads',
    features: [
      'Entire content library',
      'Ad-free streaming',
      '2 devices at a time',
      'Full HD quality',
      'Download & watch offline',
    ],
    missing: ['No live sports'],
    variant: 'default' as const,
    popular: true,
  },
  {
    name: 'Super',
    price: '₹499',
    period: '/month',
    description: 'Everything + Live Sports',
    features: [
      'Entire content library',
      'Ad-free streaming',
      '4 devices at a time',
      '4K Ultra HD quality',
      'Download & watch offline',
      'Live sports & events',
    ],
    missing: [],
    variant: 'premium' as const,
  },
];

export const PricingModal = ({ open, onOpenChange }: PricingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-background border-border p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Crown className="w-6 h-6 text-accent" />
            Choose Your Plan
          </DialogTitle>
          <p className="text-muted-foreground text-center text-sm">
            Unlock premium content and features
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 pt-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-5 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? 'border-primary bg-primary/5 shadow-[0_0_20px_hsl(var(--primary)/0.15)]'
                  : 'border-border bg-secondary/30'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
              <div className="mt-2 mb-1">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <p className="text-muted-foreground text-xs mb-4">{plan.description}</p>

              <ul className="space-y-2 flex-1 mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-muted-foreground/50 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} className="w-full">
                {plan.name === 'Free' ? 'Current Plan' : 'Subscribe'}
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
