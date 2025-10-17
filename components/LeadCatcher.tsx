'use client';

import { useState } from 'react';
import { InlineWidget } from 'react-calendly';

type LeadCatcherProps = {
  className?: string;
  bookingUrl?: string; // e.g., Calendly/SavvyCal link
  variant?: 'creator' | 'brand'; // optional for styling/CTA tone
};

export function LeadCatcher({
  className = '',
  bookingUrl = 'https://calendly.com/your-link',
  variant,
}: LeadCatcherProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showCalendly, setShowCalendly] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus('loading');
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: variant }), // 'creator' | 'brand'
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isCreator = variant === 'creator';

  return (
    <section className={`space-y-6 ${className}`}>
      <div className="bg-sub-background p-6 rounded-lg">
        <h3 className="text-xl font-baloo2 font-bold text-white mb-2">
          Want more info?
        </h3>
        <p className="text-text-gray mb-4">
          Drop your email and we’ll send the details straight to your inbox.
        </p>
        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-primary-orange"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`btn-primary ${
              isCreator
                ? 'bg-primary-orange hover:bg-primary-orange/90'
                : 'bg-secondary-green hover:bg-secondary-green/90'
            }`}
          >
            {status === 'loading' ? 'Sending...' : 'Send me info'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-2 text-sm text-secondary-green">Sent! Check your inbox.</p>
        )}
        {status === 'error' && (
          <p className="mt-2 text-sm text-red-400">Something went wrong. Try again.</p>
        )}
      </div>

      <div className="bg-sub-background p-6 rounded-lg text-center">
        <h3 className="text-xl font-baloo2 font-bold text-white mb-2">
          Prefer to talk?
        </h3>
        <p className="text-text-gray mb-4">
          Book a call and we’ll walk you through the next steps.
        </p>

        {!showCalendly ? (
          <button
            onClick={() => setShowCalendly(true)}
            className={`btn-primary inline-block ${
              isCreator
                ? 'bg-primary-orange hover:bg-primary-orange/90'
                : 'bg-secondary-green hover:bg-secondary-green/90'
            }`}
          >
            Book a call
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow p-4">
            <InlineWidget url={bookingUrl} />
          </div>
        )}
      </div>
    </section>
  );
}
