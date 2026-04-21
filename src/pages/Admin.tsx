import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Trash2, Calendar, User, Building2, Phone, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Consultation {
  id: string;
  name: string;
  organization: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ id: '', password: '' });
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.id === 'heetae6119' && loginForm.password === '77Nts0306^^') {
      setIsLoggedIn(true);
      fetchConsultations();
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  const fetchConsultations = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('consultations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setConsultations(data || []);
    } catch (err: any) {
      console.error('Error fetching consultations:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteConsultation = async (id: string) => {
    // 확인창 없이 즉시 삭제 시도 (브라우저 차단 방지)
    try {
      console.log('삭제 명령 전송 시작 - ID:', id);
      
      // 로딩 상태 표시
      setLoading(true);

      const { error, status } = await supabase
        .from('consultations')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('삭제 중 에러 발생:', error);
        alert('삭제 실패: ' + error.message);
      } else {
        console.log('삭제 성공 - 상태 코드:', status);
        // 화면에서 즉시 제거
        setConsultations(prev => prev.filter(c => c.id !== id));
        alert('삭제되었습니다.');
      }
    } catch (err: any) {
      console.error('시스템 오류:', err);
      alert('오류 발생: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="w-16 h-16 bg-brand-point/10 rounded-2xl flex items-center justify-center text-brand-point mx-auto mb-8">
              <ShieldAlert size={32} />
            </div>
            <h1 className="text-2xl font-bold text-center mb-8">관리자 로그인</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Admin ID</label>
                <input 
                  type="text" 
                  value={loginForm.id}
                  onChange={(e) => setLoginForm({...loginForm, id: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
                  placeholder="아이디를 입력하세요"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Password</label>
                <input 
                  type="password" 
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>
              <button className="w-full py-5 bg-brand-point text-white font-bold rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-brand-point/20 mt-4">
                로그인
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">관리자 대시보드</h1>
            <p className="text-gray-500">접수된 문의 내역을 관리합니다.</p>
          </div>
          <button 
            onClick={fetchConsultations}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all"
          >
            새로고침
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-brand-point mb-4" size={40} />
            <p className="text-gray-500">데이터를 불러오는 중...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-100 p-8 rounded-2xl text-center">
            <ShieldAlert className="text-red-500 mx-auto mb-4" size={40} />
            <h3 className="text-lg font-bold text-red-900 mb-2">오류 발생</h3>
            <p className="text-red-600 mb-6">{error}</p>
            <p className="text-sm text-red-500">Supabase 테이블 'consultations'가 생성되었는지 확인해주세요.</p>
          </div>
        ) : consultations.length === 0 ? (
          <div className="bg-white border border-gray-100 p-20 rounded-3xl text-center">
            <p className="text-gray-400">접수된 문의가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {consultations.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-grow space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-full">
                        <User size={14} className="text-brand-point" />
                        {item.name}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                        <Building2 size={14} className="text-brand-point" />
                        {item.organization}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={14} />
                        {new Date(item.created_at).toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-gray-400" />
                        {item.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-gray-400" />
                        {item.email}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                        <MessageSquare size={16} className="text-gray-400 mt-1 shrink-0" />
                        <p className="whitespace-pre-wrap">{item.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col justify-end gap-2">
                    <button 
                      onClick={() => deleteConsultation(item.id)}
                      className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                      title="삭제"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
