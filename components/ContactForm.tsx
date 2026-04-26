"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-surface-border bg-surface-elevated px-3 py-2.5 text-ink shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-lg border border-surface-border bg-surface-elevated px-3 py-2.5 text-ink shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink">
          Company / org <span className="text-ink-subtle">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-1.5 w-full rounded-lg border border-surface-border bg-surface-elevated px-3 py-2.5 text-ink shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink">
          Subject <span className="text-red-600">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="e.g. Collaboration on platform work"
          className="mt-1.5 w-full rounded-lg border border-surface-border bg-surface-elevated px-3 py-2.5 text-ink shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={10}
          placeholder="Tell me about your goals, timeline, and how I can help."
          className="mt-1.5 w-full resize-y rounded-lg border border-surface-border bg-surface-elevated px-3 py-2.5 text-ink shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {errorMessage}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
          Thanks—your message was sent. I&apos;ll get back to you by email.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
