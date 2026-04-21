import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Target, Microscope, BarChart3, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">회사 소개</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            (주)유성메디칼은 혁신적인 진단 솔루션과 차별화된 서비스를 통해 의료 현장의 가치를 높이는 헬스케어 전문 기업입니다.
          </p>
        </div>

        {/* Info Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-32">
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <Calendar className="text-brand-point mb-4" size={32} />
            <h4 className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">설립일</h4>
            <p className="text-2xl font-bold">2022. 09. 07</p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <Users className="text-brand-point mb-4" size={32} />
            <h4 className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">대표이사</h4>
            <p className="text-2xl font-bold">노태섭</p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <Target className="text-brand-point mb-4" size={32} />
            <h4 className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">주요 거래처</h4>
            <p className="text-2xl font-bold">40여 곳 이상</p>
          </div>
        </section>

        {/* Business Pillars */}
        <section className="mb-12">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">사업의 핵심 축</h2>
            <p className="text-gray-500">유성메디칼을 지탱하는 세 가지 전문 비즈니스 영역입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: '진단 기술의 혁신', 
                desc: '글로벌 선두 기업들의 최첨단 체외진단 장비를 선별하여 국내 의료 현장에 신속하게 도입합니다.',
                icon: Microscope 
              },
              { 
                title: '공급망의 최적화', 
                desc: '데이터 기반의 체계적인 재고 관리 시스템을 통해 필수 의료 소모품의 안정적인 공급을 보장합니다.',
                icon: BarChart3 
              },
              { 
                title: '서비스의 전문화', 
                desc: '제조사 및 전문 기술진과의 긴밀한 파트너십을 통해 현장의 기술적 요구사항을 신속하게 조율하며, 검증된 전문가 네트워크로 차별화된 사후 관리를 제공합니다.',
                icon: ShieldCheck 
              },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-point mb-8 group-hover:bg-brand-point group-hover:text-white transition-all duration-300">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
