import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink, X } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-16 lg:py-20 space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase tracking-widest block">
            05 / Continuous Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#211a18]">
            Certifications &amp; Learning
          </h2>
        </div>
        <p className="font-mono text-[11px] text-[#72384f] bg-[#f9ebe7] border border-[#d5c2c6]/35 px-3.5 py-1.5 rounded-full self-start md:self-auto font-medium">
          Always learning. Always building.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Certificate 1: Wadhwani Foundation */}
        <div
          id="cert-card-wadhwani"
          className="bg-[#fff1ed] p-6 lg:p-8 rounded-2xl shadow-xs border border-[#d5c2c6]/40 flex flex-col justify-between space-y-6 hover:shadow-md transition-all duration-200"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#8e4f67]/20 flex items-center justify-center text-[#72384f]">
              <Award className="w-6 h-6" />
            </div>

            <div>
              <span className="font-mono text-[11px] text-[#72384f] uppercase tracking-wider font-semibold">
                {CERTIFICATIONS[0].issuer}
              </span>
              <h3 className="text-2xl font-semibold text-[#211a18] mt-1">
                {CERTIFICATIONS[0].title}
              </h3>
            </div>

            <p className="text-[15px] text-[#514347] leading-relaxed">
              {CERTIFICATIONS[0].description}
            </p>
          </div>

          <div className="pt-4 border-t border-[#d5c2c6]/30 flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#295429] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#295429]" />
              Credential Verified
            </span>
            <span className="font-mono text-[11px] text-[#514347]">
              {CERTIFICATIONS[0].category}
            </span>
          </div>
        </div>

        {/* Certificate 2: IBM SkillsBuild */}
        <div
          id="cert-card-ibm"
          className="bg-[#fff1ed] p-6 lg:p-8 rounded-2xl shadow-xs border border-[#d5c2c6]/40 flex flex-col justify-between space-y-6 hover:shadow-md transition-all duration-200"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#8e4f67]/20 flex items-center justify-center text-[#72384f]">
              <Sparkles className="w-6 h-6" />
            </div>

            <div>
              <span className="font-mono text-[11px] text-[#72384f] uppercase tracking-wider font-semibold">
                {CERTIFICATIONS[1].issuer}
              </span>
              <h3 className="text-2xl font-semibold text-[#211a18] mt-1">
                {CERTIFICATIONS[1].title}
              </h3>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {CERTIFICATIONS[1].modules?.map((mod) => (
                <div
                  key={mod}
                  className="bg-[#ffffff] p-2.5 rounded-lg font-mono text-[12px] text-[#211a18] shadow-2xs border border-[#d5c2c6]/30 font-medium"
                >
                  • {mod}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#d5c2c6]/30 flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#295429] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#295429]" />
              Credential Verified
            </span>
            <span className="font-mono text-[11px] text-[#514347]">
              {CERTIFICATIONS[1].category}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
