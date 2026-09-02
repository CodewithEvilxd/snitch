"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.agree) {
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full gap-2 rounded-xl border border-border/50 bg-card p-6 sm:p-8 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
          <Check className="size-6" />
        </div>
        <h2 className="mb-2 text-2xl font-bold">Thank you</h2>
        <p className="text-muted-foreground text-sm">
          Your inquiry has been received. We'll get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Full name *</label>
        <Input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="First and last name"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Email address *</label>
        <Input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Company (optional)</label>
        <Input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Your company or studio"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Your message *</label>
        <Textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we help?"
          className="resize-none"
        />
      </div>

      <label className="flex items-center gap-2 cursor-pointer pt-1">
        <input
          type="checkbox"
          required
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          className="rounded border-border"
        />
        <span className="text-xs text-muted-foreground">
          I agree to the privacy policy and terms.
        </span>
      </label>

      <div className="flex w-full items-center justify-end pt-2">
        <Button type="submit" className="rounded-lg px-6" size="sm">
          Send Message
        </Button>
      </div>
    </form>
  );
}
