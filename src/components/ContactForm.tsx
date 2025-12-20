import { useState, useEffect } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { API_ENDPOINTS } from '@/config/api';

interface ContactFormProps {
  initialSubject?: string;
  className?: string;
}

export function ContactForm({ initialSubject = '', className = '' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    subject: initialSubject,
    message: '',
  });
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(API_ENDPOINTS.SEND_EMAIL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ firstName: '', email: '', phone: '', subject: '', message: '' });
        setMessageCount(0);
      }, 3000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("Failed to send message. Please ensure the backend server is running.");
    }
  };

  return (
    <form className={`space-y-5 ${className}`} onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            First Name
          </label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            placeholder="Enter your first name"
            disabled={isSubmitting || isSubmitted}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Email Address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            placeholder="name@example.com"
            disabled={isSubmitting || isSubmitted}
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
          Subject / Product
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          placeholder="General Inquiry"
          disabled={isSubmitting || isSubmitted}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          placeholder="+91 ..."
          disabled={isSubmitting || isSubmitted}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Enter your message...
          </label>
          <span className="text-[10px] text-slate-400">{messageCount} / 180</span>
        </div>
        <textarea
          rows={4}
          maxLength={180}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            setMessageCount(e.target.value.length);
          }}
          className="resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          placeholder="Tell us about your project or requirements (max 180 characters)."
          disabled={isSubmitting || isSubmitted}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed min-h-[48px]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle2 className="h-4 w-4" />
            Message Sent!
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
