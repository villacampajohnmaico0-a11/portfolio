// src/components/sections/Contact.jsx
import { AlertCircle, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { site } from "../../data/site";
import { submitInquiry } from "../../lib/submitInquiry";
import { projectTypeOptions, validateInquiry } from "../../lib/validation";
import Reveal from "../ui/Reveal";

const initialState = {
  fullName: "",
  email: "",
  businessName: "",
  projectType: "",
  budget: "",
  description: "",
  preferredContact: "",
  honeypot: "",
};

const inputClass =
  "w-full rounded-[12px] border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-[#8EA0FF] focus:bg-white/[0.07]";
const labelClass =
  "mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55";
const errorClass = "mt-2 text-sm text-[#FF8A73]";

/* Shared background: same glows and guide lines as Industries / Solutions / Pricing */
function Backdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#2f4bff]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-[#C9B8FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-[#FF6B4A]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />
        <div className="absolute left-6 top-0 hidden h-full w-px bg-white/[0.03] lg:block" />
        <div className="absolute right-6 top-0 hidden h-full w-px bg-white/[0.03] lg:block" />
      </div>
    </>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(() => ({
    ...initialState,
    projectType: searchParams.get("projectType") || "",
    description: searchParams.get("description") || "",
  }));
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState("");

  const descriptionChars = useMemo(
    () => form.description.length,
    [form.description],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const nextErrors = validateInquiry({ ...form, [name]: value });
    setErrors((current) => ({ ...current, [name]: nextErrors[name] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.honeypot) {
      setErrors({ honeypot: "Spam protection triggered." });
      return;
    }

    const nextErrors = validateInquiry(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);
    setSendError("");

    try {
      const result = await submitInquiry(form);
      if (result.mode === "mailto") {
        const mailto = `mailto:${site.email}?subject=${encodeURIComponent(result.subject)}&body=${encodeURIComponent(result.body)}`;
        window.location.href = mailto;
        setSent(true);
      } else {
        setSent(true);
      }
    } catch {
      setSendError(
        "We could not send the message automatically. Please email hello@northstarstudio.example.",
      );
      setSent(false);
    } finally {
      setLoading(false);
    }
  };

  const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry from ${form.fullName || "New inquiry"}`)}&body=${encodeURIComponent(
    [
      `Full name: ${form.fullName || ""}`,
      `Email: ${form.email || ""}`,
      `Business name: ${form.businessName || "Not provided"}`,
      `Project type: ${form.projectType || ""}`,
      `Estimated budget: ${form.budget || ""}`,
      `Preferred contact: ${form.preferredContact || ""}`,
      "",
      form.description || "",
    ].join("\n"),
  )}`;

  /* ---------- Success state ---------- */
  if (sent) {
    return (
      <section
        id="contact"
        className="relative overflow-x-clip bg-[#080808] py-24 text-white md:py-32">
        <Backdrop />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[14px] bg-[linear-gradient(150deg,#2f4bff,#1a2aa8)] p-8 text-center sm:p-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none text-[clamp(5rem,16vw,11rem)] font-bold uppercase leading-none tracking-[-0.04em]"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              }}>
              Sent
            </span>

            <div className="relative pb-20 sm:pb-28">
              <h2 className="mx-auto max-w-[18ch] text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                Thanks! Your inquiry is{" "}
                <span className="font-serif italic text-white/75">in.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[44ch] text-base text-white/80">
                I’ll review your request and follow up with the next steps.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm({
                    ...initialState,
                    projectType: searchParams.get("projectType") || "",
                  });
                }}
                className="group/btn mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#14151A] transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f4bff]">
                Send another inquiry
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Main ---------- */
  return (
    <section
      id="contact"
      className="relative overflow-x-clip bg-[#080808] py-24 text-white md:py-32">
      <Backdrop />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-5">
          {/* ---------- Left: info card ---------- */}
          <Reveal className="min-w-0">
            <div className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[14px] bg-[linear-gradient(150deg,#2f4bff,#1a2aa8)] p-6 pb-28 sm:p-9 sm:pb-32">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#C9B8FF]/30 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 left-4 select-none text-[clamp(4.5rem,9vw,8rem)] font-bold uppercase leading-none tracking-[-0.04em]"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                }}>
                Hello
              </span>

              <div className="relative">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                  Contact
                </span>

                <h2 className="mt-5 max-w-[16ch] text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.04] tracking-[-0.04em]">
                  Have a business idea? Let’s bring it{" "}
                  <span className="font-serif italic text-white/75">
                    online.
                  </span>
                </h2>

                <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-white/80 sm:text-base">
                  Tell me what you're planning to build. Whether you need a
                  business website, an online store, a booking platform, or a
                  custom system, let's discuss how we can make it happen.
                </p>

                {/* contact details: plain rows, no icons */}
                <dl className="mt-8 divide-y divide-white/20 border-y border-white/20">
                  <div className="py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/60">
                      Email
                    </dt>
                    <dd className="mt-1 min-w-0">
                      <a
                        href={`mailto:${site.email}`}
                        className="break-all text-base text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
                        {site.email}
                      </a>
                    </dd>
                  </div>

                  {/^https?:\/\//i.test(site.linkedIn) && (
                    <div className="py-3">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/60">
                        LinkedIn
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={site.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
                          Visit profile
                        </a>
                      </dd>
                    </div>
                  )}

                  <div className="py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/60">
                      Phone
                    </dt>
                    <dd className="mt-1 text-base text-white">{site.phone}</dd>
                  </div>
                </dl>

                {/* what happens next */}
                <div className="mt-8">
                  <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                    What happens next
                  </h3>
                  <ol className="mt-4 space-y-3">
                    {[
                      "I review your inquiry and requirements.",
                      "We align on the right solution and next steps.",
                      "We move into planning and build.",
                    ].map((step, i) => (
                      <li
                        key={step}
                        className="flex items-baseline gap-3 text-sm text-white/85">
                        <span className="w-4 shrink-0 font-serif text-lg italic text-white/60">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ---------- Right: form ---------- */}
          <Reveal className="min-w-0" delay={0.08}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative h-full min-w-0 overflow-hidden rounded-[14px] bg-[#101116] p-6 ring-1 ring-inset ring-white/10 sm:p-9">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#2f4bff]/20 blur-3xl"
              />

              <div className="relative grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={
                      errors.fullName ? "fullName-error" : undefined
                    }
                    className={inputClass}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className={errorClass}>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p id="email-error" className={errorClass}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="businessName" className={labelClass}>
                    Business name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className={labelClass}>
                    Type of project
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={
                      errors.projectType ? "projectType-error" : undefined
                    }
                    className={inputClass}>
                    <option value="" className="bg-[#101116] text-white">
                      Select project type
                    </option>
                    {projectTypeOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#101116] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" className={errorClass}>
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Estimated budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.budget)}
                    aria-describedby={
                      errors.budget ? "budget-error" : undefined
                    }
                    className={inputClass}>
                    <option value="" className="bg-[#101116] text-white">
                      Select budget
                    </option>
                    {[
                      "Under $2,000",
                      "$2,000 - $5,000",
                      "$5,000 - $10,000",
                      "$10,000 - $25,000",
                      "$25,000+",
                      "Not sure yet",
                    ].map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#101116] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p id="budget-error" className={errorClass}>
                      {errors.budget}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="description" className={labelClass}>
                    Project description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={6}
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={
                      errors.description ? "description-error" : undefined
                    }
                    className={`${inputClass} resize-y`}
                  />
                  <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    <span>{descriptionChars}/20 minimum</span>
                    <span>Character count</span>
                  </div>
                  {errors.description && (
                    <p id="description-error" className={errorClass}>
                      {errors.description}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <p className={labelClass}>Preferred contact method</p>
                  <div className="flex flex-wrap gap-2.5">
                    {["Email", "Phone / Messaging app", "Video call"].map(
                      (option) => {
                        const checked = form.preferredContact === option;
                        return (
                          <label
                            key={option}
                            className={`relative inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-[#8EA0FF] ${
                              checked
                                ? "border-[#2f4bff] bg-[#2f4bff] text-white"
                                : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"
                            }`}>
                            <input
                              type="radio"
                              name="preferredContact"
                              value={option}
                              checked={checked}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {option}
                          </label>
                        );
                      },
                    )}
                  </div>
                  {errors.preferredContact && (
                    <p className={errorClass}>{errors.preferredContact}</p>
                  )}
                </div>

                <div className="hidden">
                  <label htmlFor="honeypot">Leave empty</label>
                  <input
                    id="honeypot"
                    name="honeypot"
                    value={form.honeypot}
                    onChange={handleChange}
                    className="sr-only"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
              </div>

              {sendError && (
                <div className="relative mt-6 flex items-start gap-3 rounded-[12px] border border-[#FF6B4A]/40 bg-[#FF6B4A]/10 p-4 text-sm text-[#FFB3A3]">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <p>{sendError}</p>
                    <a
                      href={mailtoLink}
                      className="mt-2 inline-block font-semibold text-white underline underline-offset-4">
                      Open email draft
                    </a>
                  </div>
                </div>
              )}

              <div className="relative mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="group/btn inline-flex items-center gap-3 rounded-full bg-[#2f4bff] px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101116] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100">
                  {loading
                    ? "Sending…"
                    : sendError
                      ? "Try again"
                      : "Send inquiry"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
                <span className="max-w-[34ch] text-sm text-white/50">
                  No fake promises. I’ll reply with next steps if it makes
                  sense.
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
