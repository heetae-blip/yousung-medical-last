import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('consultations')
        .insert([
          {
            name: formData.name,
            organization: formData.organization,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setShowSuccess(true);
      setFormData({
        name: '',
        organization: '',
        phone: '',
        email: '',
        message: ''
      });
      
      // 3초 후 성공 메시지 숨김
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert('문의 접수 중 오류가 발생했습니다: ' + (error.message || '알 수 없는 오류'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">문의하기</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            제품 상담 및 파트너십 문의는 언제든 환영합니다. 전문가가 신속하게 답변해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-brand-point/10 rounded-2xl flex items-center justify-center text-brand-point shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">본사 위치</h4>
                <p className="text-gray-500 leading-relaxed">
                  부산광역시 남구 황령대로319번가길 158-4, 1층 101호 (대연동,LS빌딩)<br />
                  Yousung Medical HQ, Busan, Korea
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-brand-point/10 rounded-2xl flex items-center justify-center text-brand-point shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">전화 번호</h4>
                <p className="text-gray-500 leading-relaxed">T. 051-715-3387<br />F. 051-715-3387</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-brand-point/10 rounded-2xl flex items-center justify-center text-brand-point shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">이메일</h4>
                <p className="text-gray-500 leading-relaxed">yousungmedical@naver.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50"
          >
            <h3 className="text-2xl font-bold mb-8">문의 양식</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="성함 / 담당자"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
                />
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  placeholder="기관명"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="연락처"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="이메일"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="문의하실 내용을 입력해주세요."
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all resize-none"
              />
              <button 
                disabled={isSubmitting}
                className={`w-full py-5 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed ${showSuccess ? 'bg-green-500 shadow-green-500/20' : 'bg-brand-point shadow-brand-point/20 hover:bg-brand-dark'}`}
              >
                {isSubmitting ? (
                  <>접수 중... <Loader2 size={20} className="animate-spin" /></>
                ) : showSuccess ? (
                  <>문의 보내기 완료! <CheckCircle2 size={20} /></>
                ) : (
                  <>문의 보내기 <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
