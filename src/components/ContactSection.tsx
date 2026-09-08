import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code2, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering Internship Opportunity',
    message: '',
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      // open mailto as well for actual client delivery
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-16 lg:py-20 space-y-10"
    >
      <div className="space-y-1">
        <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase tracking-widest block">
          08 / Connection
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#211a18]">
          Let's build something.
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#514347] max-w-2xl">
          I'm always open to learning, collaborating, and connecting with engineers and teams working
          on interesting, ambitious challenges.
        </p>
      </div>

      {/* 4 Contact Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Email Card */}
        <div
          id="contact-card-email"
          className="bg-[#fff1ed] p-5 rounded-2xl shadow-xs border border-[#d5c2c6]/40 flex flex-col justify-between space-y-4 hover:shadow-md transition-all group"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#8e4f67]/15 flex items-center justify-center text-[#72384f] group-hover:bg-[#8e4f67]/25 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="text-[#837377] hover:text-[#72384f] p-1 rounded transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#295429]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#72384f] uppercase tracking-wider font-semibold block">
                DIRECT EMAIL
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[14px] font-mono text-[#211a18] hover:text-[#72384f] break-all transition-colors mt-0.5 block"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
          <div className="pt-2 border-t border-[#d5c2c6]/25">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[12px] font-mono text-[#72384f] font-medium flex items-center gap-1 hover:underline"
            >
              <span>{copiedEmail ? 'Copied to clipboard' : 'Send email'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <a
          id="contact-card-linkedin"
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fff1ed] p-5 rounded-2xl shadow-xs border border-[#d5c2c6]/40 flex flex-col justify-between space-y-4 hover:shadow-md transition-all group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#8e4f67]/15 flex items-center justify-center text-[#72384f] group-hover:bg-[#8e4f67]/25 transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#72384f] uppercase tracking-wider font-semibold block">
                LINKEDIN
              </span>
              <span className="text-[14px] font-mono text-[#211a18] group-hover:text-[#72384f] transition-colors mt-0.5 block">
                {PERSONAL_INFO.linkedinUsername}
              </span>
            </div>
          </div>
          <div className="pt-2 border-t border-[#d5c2c6]/25">
            <span className="text-[12px] font-mono text-[#72384f] font-medium flex items-center gap-1 group-hover:underline">
              <span>View Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          id="contact-card-github"
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fff1ed] p-5 rounded-2xl shadow-xs border border-[#d5c2c6]/40 flex flex-col justify-between space-y-4 hover:shadow-md transition-all group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#8e4f67]/15 flex items-center justify-center text-[#72384f] group-hover:bg-[#8e4f67]/25 transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#72384f] uppercase tracking-wider font-semibold block">
                GITHUB
              </span>
              <span className="text-[14px] font-mono text-[#211a18] group-hover:text-[#72384f] transition-colors mt-0.5 block">
                github.com/{PERSONAL_INFO.githubUsername}
              </span>
            </div>
          </div>
          <div className="pt-2 border-t border-[#d5c2c6]/25">
            <span className="text-[12px] font-mono text-[#72384f] font-medium flex items-center gap-1 group-hover:underline">
              <span>Explore Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>

        {/* LeetCode Card */}
        <a
          id="contact-card-leetcode"
          href={PERSONAL_INFO.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fff1ed] p-5 rounded-2xl shadow-xs border border-[#d5c2c6]/40 flex flex-col justify-between space-y-4 hover:shadow-md transition-all group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#8e4f67]/15 flex items-center justify-center text-[#72384f] group-hover:bg-[#8e4f67]/25 transition-colors">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#72384f] uppercase tracking-wider font-semibold block">
                LEETCODE
              </span>
              <span className="text-[14px] font-mono text-[#211a18] group-hover:text-[#72384f] transition-colors mt-0.5 block">
                {PERSONAL_INFO.leetcodeUsername}
              </span>
            </div>
          </div>
          <div className="pt-2 border-t border-[#d5c2c6]/25">
            <span className="text-[12px] font-mono text-[#72384f] font-medium flex items-center gap-1 group-hover:underline">
              <span>View Solutions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>
      </div>

      {/* Callout Action Banner */}
      <div
        id="internship-opportunity-banner"
        className="bg-[#fff1ed] rounded-2xl p-6 sm:p-8 border border-[#d5c2c6]/50 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs"
      >
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#211a18]">
            Ready to discuss internship opportunities?
          </h3>
          <p className="text-[15px] text-[#514347]">
            Available for in-person Bengaluru or remote software engineering roles.
          </p>
        </div>

        <button
          id="btn-get-in-touch"
          onClick={() => setShowMessageForm(!showMessageForm)}
          className="inline-flex items-center justify-center gap-2 bg-[#72384f] hover:bg-[#8e4f67] text-[#ffffff] font-mono text-[12px] font-medium uppercase tracking-wide px-6 py-3.5 rounded-lg shadow-sm transition-all hover:scale-[1.01] shrink-0 cursor-pointer"
        >
          <span>{showMessageForm ? 'Close Form' : 'Get in Touch'}</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Message Interactive Form (Expanded on click) */}
      {showMessageForm && (
        <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-8 border border-[#d5c2c6]/50 shadow-md space-y-6 animate-fadeIn">
          <div className="space-y-1">
            <h4 className="text-xl font-semibold text-[#211a18]">
              Send a Direct Message to Akriti
            </h4>
            <p className="text-sm text-[#514347]">
              Feel free to reach out regarding internships, mentorship, or collaborative projects.
            </p>
          </div>

          {formSent ? (
            <div className="p-6 bg-[#bdf0b6]/30 border border-[#295429]/30 rounded-xl text-center space-y-2">
              <Sparkles className="w-8 h-8 text-[#295429] mx-auto" />
              <p className="font-semibold text-[#211a18]">Message Ready!</p>
              <p className="text-sm text-[#514347]">
                Opening your email client to dispatch to{' '}
                <span className="font-mono text-[#72384f]">{PERSONAL_INFO.email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-semibold text-[#514347] uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff8f6] border border-[#d5c2c6]/60 text-[#211a18] text-sm focus:outline-none focus:ring-2 focus:ring-[#72384f]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono font-semibold text-[#514347] uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff8f6] border border-[#d5c2c6]/60 text-[#211a18] text-sm focus:outline-none focus:ring-2 focus:ring-[#72384f]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-semibold text-[#514347] uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff8f6] border border-[#d5c2c6]/60 text-[#211a18] text-sm focus:outline-none focus:ring-2 focus:ring-[#72384f]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-semibold text-[#514347] uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Akriti, we came across your portfolio and would love to speak with you regarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#fff8f6] border border-[#d5c2c6]/60 text-[#211a18] text-sm focus:outline-none focus:ring-2 focus:ring-[#72384f]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#72384f] hover:bg-[#8e4f67] text-white font-mono text-xs font-semibold uppercase px-5 py-3 rounded-lg shadow-xs transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      )}
    </section>
  );
};
