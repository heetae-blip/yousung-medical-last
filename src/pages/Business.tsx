import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  CheckCircle2, 
  Activity, 
  Package, 
  BookOpen, 
  Settings, 
  Truck, 
  ClipboardList,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CORE_BUSINESS, BUSINESS_ITEMS } from '../constants';

const iconMap: Record<string, React.ElementType> = {
  activity: Activity,
  package: Package,
  'book-open': BookOpen,
  settings: Settings,
  truck: Truck,
  'clipboard-list': ClipboardList,
};

const Business = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-24 pb-24 overflow-hidden">
      {/* Hero Section with Background Decoration */}
      <section className="relative py-20 mb-20">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-point/5 rounded-l-[100px] blur-3xl opacity-50" />
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-point/10 text-brand-point text-xs font-bold mb-6">
              <ShieldCheck size={14} />
              <span>Professional Medical Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Core Business <span className="text-brand-point">Solutions</span>
            </h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">핵심 비즈니스 솔루션</h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              진단 장비의 도입부터 사후 관리까지, 의료 현장의 효율성을 극대화하는 <br className="hidden md:block" />
              통합 서비스를 통해 최상의 진단 환경을 구축합니다.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Core Business Grid */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_BUSINESS.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-10 bg-white border border-gray-100 rounded-3xl hover:border-brand-point/30 hover:shadow-2xl hover:shadow-brand-point/5 transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    {Icon && <Icon size={24} />}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-point/5 flex items-center justify-center mb-8 group-hover:bg-brand-point group-hover:text-white transition-colors">
                    {Icon && <Icon size={24} className="transition-colors" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Service Process Section */}
        <section className="mb-40 py-20 bg-gray-50 rounded-[40px] px-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Service Process</h2>
            <p className="text-gray-500">체계적이고 전문적인 서비스 프로세스를 통해 고객 만족을 실현합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "컨설팅 및 분석", desc: "고객사 환경 분석 및 최적 장비 제안", Icon: ClipboardList },
              { step: "02", title: "시스템 구축", desc: "전문 엔지니어의 정밀 설치 및 세팅", Icon: Settings },
              { step: "03", title: "학술 교육", desc: "장비 운용 및 임상 데이터 분석 교육", Icon: BookOpen },
              { step: "04", title: "유지보수 케어", desc: "정기 점검 및 실시간 기술 지원", Icon: ShieldCheck }
            ].map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-gray-200 -z-0">
                    <div className="w-0 h-full bg-brand-point group-hover:w-full transition-all duration-1000" />
                  </div>
                )}
                <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 relative z-10 border border-gray-100 group-hover:border-brand-point transition-colors">
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-point text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  <div className="text-brand-point">
                    <step.Icon size={32} />
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust & Experience Stats */}
        <section className="mb-40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years of Experience", value: "15+", desc: "업계 경력" },
              { label: "Global Partners", value: "20+", desc: "글로벌 파트너십" },
              { label: "Satisfied Clients", value: "300+", desc: "누적 고객사" },
              { label: "Technical Support", value: "24/7", desc: "기술 지원" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-white border border-gray-50 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-point mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brands Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-brand-point font-bold text-sm mb-4">
                <Globe size={16} />
                <span>Global Partners</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                주요 취급 브랜드 및 품목
              </h2>
            </div>
            <p className="text-gray-500 max-w-md">
              세계적인 진단 장비 브랜드들과의 파트너십을 통해 검증된 품질의 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all group flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden border-b border-gray-100 flex items-center justify-center p-0">
                  <img 
                    src={item.image} 
                    alt={item.brand} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-point/0 group-hover:bg-brand-point/5 transition-colors" />
                </div>
                <div className="p-10 flex-grow">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">{item.brand}</h3>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-point group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {item.items.map((sub: any, sIdx) => (
                      <li 
                        key={sIdx} 
                        className="flex items-center gap-4 text-gray-600 text-sm cursor-pointer hover:text-brand-point transition-all group/item p-1.5 rounded-xl hover:bg-gray-50"
                        onClick={() => window.open(sub.link, '_blank')}
                      >
                        <div className="w-12 h-12 rounded-lg bg-gray-50 overflow-hidden shrink-0 border border-gray-100 flex items-center justify-center group-hover/item:border-brand-point/30 transition-colors">
                          <img 
                            src={sub.image} 
                            alt={sub.name} 
                            className="w-full h-full object-contain p-1"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = item.image;
                            }}
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 group-hover/item:text-brand-point transition-colors">{sub.name}</span>
                          <span className="text-[10px] text-gray-400">자세히 보기</span>
                        </div>
                        <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                          <ArrowRight size={14} className="text-brand-point" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">최적의 진단 솔루션을 제안해 드립니다</h2>
            <p className="text-gray-500 mb-10">
              병원 및 검사실 환경에 맞는 맞춤형 장비 도입 상담이 필요하신가요? <br />
              전문 컨설턴트가 상세히 안내해 드립니다.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-brand-point text-white font-bold rounded-full hover:bg-brand-point/90 hover:shadow-xl hover:shadow-brand-point/20 transition-all flex items-center gap-2 mx-auto"
            >
              <Users size={18} />
              상담 문의하기
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Business;
