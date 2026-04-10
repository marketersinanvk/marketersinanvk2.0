import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, addDoc, deleteDoc, doc, updateDoc, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, handleFirestoreError, OperationType } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Save, Image as ImageIcon, X, LayoutDashboard, Briefcase, FileText, MessageSquare, LogOut, ChevronRight, Activity, Zap, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

type Tab = 'portfolio' | 'services' | 'posts' | 'testimonials';

export default function AdminDashboard() {
  const { user, loading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('portfolio');
  const [data, setData] = useState<any[]>([]);
  const [allData, setAllData] = useState<Record<string, any[]>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/login');
    }
  }, [user, loading, isAdmin, navigate]);

  // Fetch all data for stats
  useEffect(() => {
    if (!user || !isAdmin) return;

    const tabs: Tab[] = ['portfolio', 'services', 'posts', 'testimonials'];
    const unsubscribes = tabs.map(tab => {
      const q = query(collection(db, tab));
      return onSnapshot(q, (snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllData(prev => ({ ...prev, [tab]: items }));
        if (tab === activeTab) setData(items);
      });
    });

    return () => unsubscribes.forEach(unsub => unsub());
  }, [activeTab, user, isAdmin]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const storageRef = ref(storage, `${activeTab}/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFormData({ ...formData, image: url });
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await updateDoc(doc(db, activeTab, editingItem.id), formData);
      } else {
        await addDoc(collection(db, activeTab), { ...formData, createdAt: new Date().toISOString() });
      }
      setIsModalOpen(false);
      setEditingItem(null);
      setFormData({});
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, activeTab);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      await deleteDoc(doc(db, activeTab, id));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, activeTab);
    }
  };

  if (loading || !user || !isAdmin) return null;

  const stats = [
    { label: 'Active Projects', value: allData.portfolio?.length || 0, icon: Briefcase, color: 'text-neon-blue' },
    { label: 'Core Services', value: allData.services?.length || 0, icon: Zap, color: 'text-yellow-400' },
    { label: 'Journal Entries', value: allData.posts?.length || 0, icon: FileText, color: 'text-purple-400' },
    { label: 'Global Reach', value: '12+', icon: Globe, color: 'text-green-400' },
  ];

  return (
    <div className="min-h-screen bg-midnight flex flex-col md:flex-row font-sans">
      <SEO title="Master Admin OS | Elite Agency" description="Neural interface for agency content management." />
      
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-black/60 border-r border-neon-blue/10 p-8 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent" />
        
        <div className="space-y-12 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-neon-blue/10 border border-neon-blue/20 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.1)]">
              <Activity className="text-neon-blue w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="text-white font-serif tracking-widest text-sm uppercase">Admin <span className="text-neon-blue font-sans font-black">OS</span></p>
              <p className="text-silver/20 text-[8px] font-bold uppercase tracking-[0.3em]">System.Active // MSVK-2026</p>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
              { id: 'services', label: 'Services', icon: LayoutDashboard },
              { id: 'posts', label: 'Journal', icon: FileText },
              { id: 'testimonials', label: 'Verdicts', icon: MessageSquare },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500 group relative ${
                  activeTab === tab.id ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20' : 'text-silver/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTab" className="absolute left-0 w-1 h-6 bg-neon-blue rounded-full" />
                )}
                <tab.icon size={18} className={activeTab === tab.id ? 'text-neon-blue' : 'text-silver/20 group-hover:text-neon-blue/40'} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{tab.label}</span>
                {activeTab === tab.id && <ChevronRight size={14} className="ml-auto opacity-40" />}
              </button>
            ))}
          </nav>
        </div>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-4 px-6 py-4 text-red-400/40 hover:text-red-400 transition-all group relative z-10"
        >
          <LogOut size={18} className="group-hover:rotate-180 transition-transform duration-700" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Terminate Link</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-16 overflow-y-auto relative">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Quick Stats */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-2 p-6 rounded-[30px] border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <stat.icon size={40} className={stat.color} />
                </div>
                <p className="text-silver/30 text-[8px] font-bold uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                <p className={`text-3xl font-serif italic ${stat.color}`}>{stat.value}</p>
              </motion.div>
            ))}
          </section>

          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-4">
              <p className="text-neon-blue text-[9px] font-bold uppercase tracking-[0.5em]">Neural Interface</p>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tighter text-white leading-tight">
                Refining <span className="italic text-neon-blue">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
              </h1>
            </div>
            <button 
              onClick={() => {
                setEditingItem(null);
                setFormData({});
                setIsModalOpen(true);
              }}
              className="px-10 py-5 bg-neon-blue text-midnight font-bold rounded-full flex items-center gap-3 shadow-[0_0_40px_rgba(0,243,255,0.3)] hover:scale-105 transition-all uppercase tracking-widest text-[10px]"
            >
              <Plus size={16} /> New Entry
            </button>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {data.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-2 p-8 rounded-[40px] border border-white/5 group relative overflow-hidden"
                >
                  {item.image && (
                    <div className="aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5 bg-black/40">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  )}
                  <h3 className="text-white text-xl font-serif italic mb-2">{item.title || item.name}</h3>
                  <p className="text-silver/40 text-xs font-light line-clamp-2 mb-6">{item.description || item.review || item.excerpt}</p>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={() => {
                        setEditingItem(item);
                        setFormData(item);
                        setIsModalOpen(true);
                      }}
                      className="flex-1 py-3 glass-2 border border-neon-blue/20 text-neon-blue text-[9px] font-bold uppercase tracking-widest rounded-full hover:bg-neon-blue hover:text-midnight transition-all"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="w-12 h-12 flex items-center justify-center glass-2 border border-red-500/20 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-midnight/90 backdrop-blur-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-2 p-10 md:p-16 rounded-[60px] border border-neon-blue/20 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-10 right-10 text-silver/20 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-4xl font-serif italic text-white mb-12">
                {editingItem ? 'Modify' : 'Initialize'} <span className="text-neon-blue not-italic font-sans font-black uppercase tracking-tighter">{activeTab.slice(0, -1)}</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  {/* Common Fields */}
                  <div className="space-y-2">
                    <label className="text-silver/40 text-[9px] font-bold uppercase tracking-widest ml-4">Identifier</label>
                    <input 
                      type="text" 
                      value={formData.title || formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, [activeTab === 'testimonials' ? 'name' : 'title']: e.target.value })}
                      className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full px-8 py-5 text-xs text-white focus:outline-none focus:border-neon-blue/30 transition-all"
                      required
                    />
                  </div>

                  {activeTab === 'portfolio' && (
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-silver/40 text-[9px] font-bold uppercase tracking-widest ml-4">Category</label>
                        <input 
                          type="text" 
                          value={formData.category || ''}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full px-8 py-5 text-xs text-white focus:outline-none focus:border-neon-blue/30 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-silver/40 text-[9px] font-bold uppercase tracking-widest ml-4">Client</label>
                        <input 
                          type="text" 
                          value={formData.client || ''}
                          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                          className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full px-8 py-5 text-xs text-white focus:outline-none focus:border-neon-blue/30 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-silver/40 text-[9px] font-bold uppercase tracking-widest ml-4">Core Content</label>
                    <textarea 
                      value={formData.description || formData.review || formData.excerpt || ''}
                      onChange={(e) => setFormData({ ...formData, [activeTab === 'testimonials' ? 'review' : activeTab === 'posts' ? 'excerpt' : 'description']: e.target.value })}
                      className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-[30px] px-8 py-5 text-xs text-white focus:outline-none focus:border-neon-blue/30 transition-all min-h-[120px]"
                      required
                    />
                  </div>

                  {/* Image URL Input (Requested) */}
                  <div className="space-y-2">
                    <label className="text-silver/40 text-[9px] font-bold uppercase tracking-widest ml-4">Visual Asset URL</label>
                    <div className="relative">
                      <ImageIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-neon-blue/40" />
                      <input 
                        type="url" 
                        value={formData.image || ''}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="https://external-hosting.com/image.webp"
                        className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full pl-14 pr-8 py-5 text-xs text-white focus:outline-none focus:border-neon-blue/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Optional File Upload */}
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] flex-1 bg-white/5" />
                    <span className="text-[8px] text-silver/20 font-bold uppercase tracking-widest">OR UPLOAD</span>
                    <div className="h-[1px] flex-1 bg-white/5" />
                  </div>

                  <div className="flex gap-6 items-center">
                    <div className="w-24 h-24 glass-2 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden shrink-0 bg-black/40">
                      {formData.image ? (
                        <img src={formData.image} className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon className="text-silver/10 w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <input 
                        type="file" 
                        id="file-upload" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                      <label 
                        htmlFor="file-upload"
                        className="inline-flex items-center gap-3 px-6 py-3 glass-2 border border-neon-blue/20 text-neon-blue text-[8px] font-bold uppercase tracking-widest rounded-full cursor-pointer hover:bg-neon-blue/10 transition-all"
                      >
                        {uploading ? 'Processing...' : 'Direct Upload'}
                      </label>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={uploading}
                  className="w-full py-6 bg-neon-blue text-midnight font-bold rounded-full uppercase tracking-[0.2em] text-[10px] shadow-[0_0_40px_rgba(0,243,255,0.3)] hover:scale-[1.02] transition-all disabled:opacity-50"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Save size={14} /> {editingItem ? 'Update Neural Link' : 'Commit to Database'}
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
