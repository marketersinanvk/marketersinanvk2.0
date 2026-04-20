import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err: any) {
      setError('Invalid credentials. Access denied.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center grainy px-6">
      <SEO title="Admin Login | Elite Agency" description="Secure access to the Marketer Sinan VK management suite." />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-12 space-y-4">
          <div className="w-16 h-16 bg-vibrant-indigo/10 border border-vibrant-indigo/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <Lock className="text-vibrant-indigo w-6 h-6" />
          </div>
          <h1 className="text-4xl font-serif italic text-white tracking-tight">Master Admin <span className="text-vibrant-indigo not-italic font-sans font-black">OS</span></h1>
          <p className="text-silver/40 text-[10px] font-bold uppercase tracking-[0.4em]">Neural Link Required</p>
        </div>

        <form onSubmit={handleLogin} className="glass-2 p-10 rounded-[40px] border border-vibrant-indigo/10 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-vibrant-indigo/30 to-transparent" />
          
          <div className="space-y-2">
            <label className="text-silver/40 text-[9px] font-bold uppercase tracking-widest ml-4">Access ID</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-vibrant-indigo/40" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="marketersinanvk@gmail.com"
                className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full pl-14 pr-8 py-5 text-xs text-white placeholder:text-silver/20 focus:outline-none focus:border-vibrant-indigo/30 transition-all duration-700"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-silver/40 text-[9px] font-bold uppercase tracking-widest ml-4">Encryption Key</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-vibrant-indigo/40" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full pl-14 pr-8 py-5 text-xs text-white placeholder:text-silver/20 focus:outline-none focus:border-vibrant-indigo/30 transition-all duration-700"
                required
              />
            </div>
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-[10px] text-center font-bold uppercase tracking-wider"
            >
              {error}
            </motion.p>
          )}

          <button 
            disabled={loading}
            className="w-full group relative px-10 py-5 bg-vibrant-indigo text-white font-bold rounded-full overflow-hidden transition-all duration-700 hover:scale-[1.02] shadow-[0_0_40px_rgba(99,102,241,0.3)] disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px]">
              {loading ? 'Decrypting...' : 'Establish Link'} 
              {!loading && <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />}
            </span>
          </button>
        </form>
      </motion.div>
    </div>
  );
}
