import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CORE_BUSINESS } from '../constants';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light/20 -skew-x-12 translate-x-1/4 z-0" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-point/5 rounded-full blur-3xl z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-brand-point/10 text-brand-dark text-xs font-bold tracking-widest uppercase rounded-full mb-6"
            >
              Medical Device Specialist
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8"
            >
              신뢰와 정직으로<br />
              <span className="text-brand-point">동반 성장</span>을 꿈꿉니다
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl"
            >
              (주)유성메디칼은 의료기기 및 진단 시약 유통의 선두주자로서 
              최고의 제품과 서비스를 통해 의료 현장의 가치를 높입니다.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/business" 
                className="px-8 py-4 bg-brand-point text-white font-bold rounded-xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-point/20"
              >
                사업 분야 보기 <ArrowRight size={20} />
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 hover:border-brand-point transition-all flex items-center justify-center"
              >
                회사 소개
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero Image Decoration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[500px] h-[600px]"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <img 
                src="hero-main.jpg" 
                alt="Yousung Medical Hero"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-white/80 text-sm font-medium mb-1">Total Partners</p>
                  <p className="text-white text-3xl font-bold">40+ Hospitals</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-point rounded-2xl -z-10 opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-brand-point/20 rounded-full -z-10" />
          </div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">유성메디칼의 핵심 가치</h2>
            <p className="text-gray-500">우리는 세 가지 원칙을 바탕으로 의료 환경의 혁신을 지원합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '신뢰 (Trust)', desc: '검증된 품질의 제품만을 공급하여 의료진과 환자 모두가 안심할 수 있는 환경을 만듭니다.', icon: ShieldCheck },
              { title: '정직 (Integrity)', desc: '투명한 유통 과정과 정직한 비즈니스 파트너십을 통해 지속 가능한 성장을 추구합니다.', icon: Heart },
              { title: '성실 (Sincerity)', desc: '고객의 요구에 신속하고 정확하게 대응하며, 최상의 서비스를 제공하기 위해 끊임없이 노력합니다.', icon: TrendingUp },
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-brand-point/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-brand-point/10 rounded-xl flex items-center justify-center text-brand-point mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">전문적인 비즈니스 솔루션</h2>
              <p className="text-gray-500">유성메디칼이 제공하는 전문적인 의료 솔루션입니다.</p>
            </div>
            <Link to="/business" className="text-brand-point font-bold flex items-center gap-2 hover:gap-4 transition-all">
              전체 보기 <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_BUSINESS.slice(0, 3).map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-point">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">함께 성장할 파트너를 기다립니다</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            (주)유성메디칼은 단순한 납품을 넘어 고객사의 성공을 위한 최적의 솔루션을 제안합니다.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 bg-white text-brand-point font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-xl"
          >
            지금 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
