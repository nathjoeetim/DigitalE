"use client";

import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Linkedin, Instagram, Twitter, 
  Send, CheckCircle, AlertCircle, RefreshCw, Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  org: string;
  phone: string;
  type: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    org: "",
    phone: "",
    type: "Digital Transformation",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "Full name is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    }

    if (!form.message.trim()) {
      tempErrors.message = "Please fill in your inquiry details.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate API delay
    setTimeout(() => {
      setStatus("success");
      // Reset form
      setForm({
        name: "",
        email: "",
        org: "",
        phone: "",
        type: "Digital Transformation",
        message: "",
      });
    }, 1800);
  };

  return (
    <div className="bg-deepspace relative min-h-screen py-16 flex items-center">
      <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 ambient-glow-blue opacity-30 pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-80 h-80 ambient-glow-cyan opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full">
        
        {/* Left Column: Contact Channels & Info (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-cyan-electric uppercase tracking-widest font-semibold">
              COMMUNICATION MATRIX
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Start a Conversation.
            </h1>
            <p className="text-muted-text text-sm md:text-base leading-relaxed">
              Have a digital roadmap in mind, or interested in deploying an AI training bootcamp in your state? Connect with our technical advisory team.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-slate-surface border border-white/5 flex items-center justify-center text-cyan-electric">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">EMAIL INQUIRIES</h4>
                <p className="text-white font-medium text-sm mt-0.5">
                  <a href="mailto:info@digitalequity.africa" className="hover:text-cyan-electric transition-colors">
                    info@digitalequity.africa
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-slate-surface border border-white/5 flex items-center justify-center text-cyan-electric">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">TELEPHONE ACCESS</h4>
                <p className="text-white font-medium text-sm mt-0.5">
                  <a href="tel:+2348028576034" className="hover:text-cyan-electric transition-colors">
                    +234 802 857 6034
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-slate-surface border border-white/5 flex items-center justify-center text-cyan-electric">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">OFFICE HEADQUARTERS</h4>
                <p className="text-white font-medium text-sm mt-0.5 leading-snug">
                  Lagos Hub: Lekki Phase 1, Lagos, Nigeria <br />
                  Regional Node: Kilimani, Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Social Communities */}
          <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">SOCIAL PATHWAYS</h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-3 rounded-xl bg-slate-surface hover:bg-primary/20 text-muted-text hover:text-white border border-white/5 transition-all flex items-center gap-2 text-xs"
              >
                <Linkedin className="w-4 h-4 text-cyan-electric" /> LinkedIn
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-slate-surface hover:bg-primary/20 text-muted-text hover:text-white border border-white/5 transition-all flex items-center gap-2 text-xs"
              >
                <Instagram className="w-4 h-4 text-cyan-electric" /> Instagram
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-slate-surface hover:bg-primary/20 text-muted-text hover:text-white border border-white/5 transition-all flex items-center gap-2 text-xs"
              >
                <Twitter className="w-4 h-4 text-cyan-electric" /> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form Card (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border-white/5 bg-slate-surface/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-primary to-cyan-electric" />

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-electric/15 border border-cyan-electric/30 flex items-center justify-center text-cyan-electric mb-6 animate-pulse">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-white font-extrabold text-2xl mb-3 tracking-tight">Transmission Complete.</h3>
                  <p className="text-muted-text text-sm max-w-sm leading-relaxed mb-8">
                    Your request details have been registered inside our communications pipeline. An advisor will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-2 transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-surface/40 border text-white text-sm outline-none glow-input ${
                          errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/5"
                        }`}
                        placeholder="Ada Lovelace"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-surface/40 border text-white text-sm outline-none glow-input ${
                          errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/5"
                        }`}
                        placeholder="ada@ecosystem.org"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Org Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="org" className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="org"
                        name="org"
                        value={form.org}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-surface/40 border border-white/5 text-white text-sm outline-none glow-input"
                        placeholder="Tech Hub / Ministry Name"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-surface/40 border text-white text-sm outline-none glow-input ${
                          errors.phone ? "border-red-500/50 focus:border-red-500" : "border-white/5"
                        }`}
                        placeholder="+234 ..."
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Inquiry Type Select */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="type" className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">
                      Inquiry Target
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-surface/80 border border-white/5 text-white text-sm outline-none glow-input select-none"
                    >
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="AI Readiness">AI Readiness</option>
                      <option value="AI Immersions">AI Immersions</option>
                      <option value="Education">Future Literacy & Education</option>
                      <option value="Partnerships">Ecosystem Partnerships</option>
                      <option value="Strategic Communications">Strategic Communications / PR</option>
                      <option value="Event Production">Tech Conferences & Event Production</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono text-cyan-electric uppercase tracking-widest">
                      Inquiry Scope & Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-surface/40 border text-white text-sm outline-none glow-input ${
                        errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/5"
                      }`}
                      placeholder="Outline your project timeline, state stakeholders, or digital infrastructure targets..."
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-cyan-electric text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75"
                    >
                      {status === "loading" ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Processing transmission...
                        </>
                      ) : (
                        <>
                          Transmit Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
