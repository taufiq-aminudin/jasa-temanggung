import React, { useState, useEffect } from 'react';
import { INITIAL_LEADS, SITE_CONFIG } from '../data/siteData';
import { LeadItem } from '../types';
import { 
  Layers, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  Phone, 
  Mail, 
  Building2, 
  MapPin, 
  Edit3, 
  Trash2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AdminLeadPortalPageProps {
  navigate: (path: string) => void;
}

const STORAGE_KEY = 'futech_leads';

export const AdminLeadPortalPage: React.FC<AdminLeadPortalPageProps> = ({ navigate }) => {
  const [leads, setLeads] = useState<LeadItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_LEADS;
  });

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Lead Form
  const [newName, setNewName] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newCity, setNewCity] = useState('Temanggung');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBudget, setNewBudget] = useState('Rp 10 - 25 Juta / bulan');
  const [newService, setNewService] = useState('Google Ads & PMax');
  const [newNotes, setNewNotes] = useState('');

  // Save to localStorage when changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    } catch (e) {
      console.error(e);
    }
  }, [leads]);

  // Status badge colors
  const getStatusBadge = (status: LeadItem['status']) => {
    switch (status) {
      case 'Baru Masuk':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Sedang Dianalisis':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Proposal Terkirim':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Deal / Aktif':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Arsip':
        return 'bg-slate-700/40 text-slate-400 border-slate-700';
      default:
        return 'bg-slate-800 text-slate-300';
    }
  };

  // Change status
  const handleStatusChange = (id: string, newStatus: LeadItem['status']) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  // Delete lead
  const handleDelete = (id: string) => {
    if (confirm('Hapus prospek ini dari antrean?')) {
      setLeads(prev => prev.filter(l => l.id !== id));
    }
  };

  // Add new lead manual
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newPhone) return;

    const item: LeadItem = {
      id: `LEAD-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) + ' WIB',
      name: newName,
      company: newCompany || 'Bisnis ' + newName,
      city: newCity,
      phone: newPhone,
      email: newEmail || `${newName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      monthlyBudget: newBudget,
      targetService: newService,
      status: 'Baru Masuk',
      notes: newNotes || 'Ditambahkan via manual lead form.'
    };

    setLeads([item, ...leads]);
    setShowAddModal(false);
    // Reset form
    setNewName('');
    setNewCompany('');
    setNewPhone('');
    setNewEmail('');
    setNewNotes('');
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['ID', 'Waktu Masuk', 'Nama', 'Perusahaan', 'Kota', 'WhatsApp', 'Email', 'Budget', 'Layanan', 'Status', 'Catatan'];
    const rows = leads.map(l => [
      l.id,
      `"${l.createdAt}"`,
      `"${l.name}"`,
      `"${l.company}"`,
      `"${l.city}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.monthlyBudget}"`,
      `"${l.targetService}"`,
      `"${l.status}"`,
      `"${l.notes.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `futech_leads_indonesia_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reset to initial leads
  const handleResetDemo = () => {
    if (confirm('Kembalikan antrean ke data awal demo?')) {
      setLeads(INITIAL_LEADS);
    }
  };

  // Filtered list
  const filtered = leads.filter(l => {
    const matchStatus = statusFilter === 'all' || l.status === statusFilter;
    const matchSearch = !search ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.company.toLowerCase().includes(search.toLowerCase()) ||
      l.city.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search);
    return matchStatus && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Admin Workflow & Lead Pipeline Simulator</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Portal Manajemen Prospek Masuk
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Lihat secara real-time calon klien yang mengirimkan form audit, kalkulator ROAS, atau konsultasi di platform FUTech Indonesia.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-blue-600/20"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Prospek</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-medium flex items-center gap-1.5"
            title="Download CSV"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={handleResetDemo}
            className="px-2.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-mono"
            title="Reset Data Demo"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Metrics Counter Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="glass-panel p-3.5 rounded-xl">
          <span className="text-[10px] text-slate-400 font-mono">TOTAL PROSPEK</span>
          <div className="text-xl font-black text-white font-mono mt-0.5">{leads.length}</div>
        </div>
        <div className="glass-panel p-3.5 rounded-xl border-blue-500/30">
          <span className="text-[10px] text-blue-400 font-mono">BARU MASUK</span>
          <div className="text-xl font-black text-blue-400 font-mono mt-0.5">
            {leads.filter(l => l.status === 'Baru Masuk').length}
          </div>
        </div>
        <div className="glass-panel p-3.5 rounded-xl border-amber-500/30">
          <span className="text-[10px] text-amber-400 font-mono">SEDANG DIANALISIS</span>
          <div className="text-xl font-black text-amber-400 font-mono mt-0.5">
            {leads.filter(l => l.status === 'Sedang Dianalisis').length}
          </div>
        </div>
        <div className="glass-panel p-3.5 rounded-xl border-purple-500/30">
          <span className="text-[10px] text-purple-400 font-mono">PROPOSAL TERKIRIM</span>
          <div className="text-xl font-black text-purple-400 font-mono mt-0.5">
            {leads.filter(l => l.status === 'Proposal Terkirim').length}
          </div>
        </div>
        <div className="glass-panel p-3.5 rounded-xl border-emerald-500/30 col-span-2 sm:col-span-1">
          <span className="text-[10px] text-emerald-400 font-mono">DEAL / AKTIF</span>
          <div className="text-xl font-black text-emerald-400 font-mono mt-0.5">
            {leads.filter(l => l.status === 'Deal / Aktif').length}
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="glass-panel p-3.5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama, PT, kota, atau nomor HP..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400 font-mono shrink-0">Filter Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-white rounded-xl px-2.5 py-1.5 text-xs focus:outline-none focus:border-blue-500"
          >
            <option value="all">Semua Status ({leads.length})</option>
            <option value="Baru Masuk">Baru Masuk</option>
            <option value="Sedang Dianalisis">Sedang Dianalisis</option>
            <option value="Proposal Terkirim">Proposal Terkirim</option>
            <option value="Deal / Aktif">Deal / Aktif</option>
            <option value="Arsip">Arsip</option>
          </select>
        </div>
      </div>

      {/* Leads Table / Card List */}
      <div className="space-y-3">
        {filtered.map((lead) => (
          <div 
            key={lead.id}
            className="glass-panel p-4 sm:p-5 rounded-2xl border-slate-700/70 hover:border-blue-500/40 transition-colors space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10">
                  {lead.id}
                </span>
                <span className="text-sm font-bold text-white">{lead.name}</span>
                <span className="text-xs text-slate-400 font-medium">({lead.company})</span>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-[11px] font-mono text-slate-500">
                  {lead.createdAt}
                </span>
                {/* Status Switcher Select */}
                <select
                  value={lead.status}
                  onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                  className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border focus:outline-none cursor-pointer ${getStatusBadge(lead.status)}`}
                >
                  <option value="Baru Masuk">Baru Masuk</option>
                  <option value="Sedang Dianalisis">Sedang Dianalisis</option>
                  <option value="Proposal Terkirim">Proposal Terkirim</option>
                  <option value="Deal / Aktif">Deal / Aktif</option>
                  <option value="Arsip">Arsip</option>
                </select>

                <button
                  onClick={() => handleDelete(lead.id)}
                  className="p-1 rounded text-slate-500 hover:text-rose-400 transition-colors"
                  title="Hapus"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Lead Details Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{lead.city}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '').replace(/^0/, '62')}?text=Halo%20${encodeURIComponent(lead.name)},%20kami%20dari%20FUTech%20Digital%20Indonesia%20menindaklanjuti%20inquiry%20Anda`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 underline font-mono"
                >
                  {lead.phone}
                </a>
              </div>

              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{lead.email}</span>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-cyan-300">
                <span>Budget: {lead.monthlyBudget}</span>
              </div>
            </div>

            {/* Notes & Service target */}
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <strong className="text-slate-400 font-mono text-[11px] block sm:inline mr-2">Target Solusi:</strong>
                <span className="text-slate-200 font-medium">{lead.targetService}</span>
                <p className="text-slate-400 text-[11px] mt-0.5">{lead.notes}</p>
              </div>

              <a
                href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '').replace(/^0/, '62')}?text=Halo%20${encodeURIComponent(lead.name)},%20kami%20dari%20tim%20strategist%20FUTech%20Digital%20Indonesia`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 shrink-0 self-end sm:self-auto border border-emerald-500/30"
              >
                <MessageSquare className="w-3 h-3" />
                <span>Follow-Up WA</span>
              </a>
            </div>

          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl space-y-2">
            <div className="text-2xl">📋</div>
            <div className="text-sm font-bold text-white">Tidak Ada Prospek Ditemukan</div>
            <p className="text-xs text-slate-400">Gunakan tombol "Tambah Prospek" atau lakukan simulasi form di halaman depan.</p>
          </div>
        )}
      </div>

      {/* Manual Add Lead Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="glass-panel w-full max-w-lg rounded-2xl border border-blue-500/40 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-blue-400" />
                <span>Input Prospek Baru ke Pipeline</span>
              </h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 block mb-1">Nama Klien *</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Nama Lengkap"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Perusahaan / Brand</label>
                  <input
                    type="text"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    placeholder="PT / CV / Brand"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 block mb-1">WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Kota</label>
                  <input
                    type="text"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="Temanggung, dll"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 block mb-1">Budget Media</label>
                  <select
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none"
                  >
                    <option value="Rp 5 - 10 Juta / bulan">Rp 5 - 10 Juta / bulan</option>
                    <option value="Rp 10 - 25 Juta / bulan">Rp 10 - 25 Juta / bulan</option>
                    <option value="Rp 25 - 50 Juta / bulan">Rp 25 - 50 Juta / bulan</option>
                    <option value="Rp 50 Juta+ / bulan">Rp 50 Juta+ / bulan</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Target Layanan</label>
                  <select
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none"
                  >
                    <option value="Google Ads & PMax">Google Ads & PMax</option>
                    <option value="Meta Ads (FB/IG)">Meta Ads (FB/IG)</option>
                    <option value="TikTok Ads Management">TikTok Ads Management</option>
                    <option value="SEO & Topical Authority">SEO & Topical Authority</option>
                    <option value="Lead Gen B2B">Lead Gen B2B</option>
                    <option value="Desain Landing Page CRO">Desain Landing Page CRO</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Catatan Tambahan</label>
                <textarea
                  rows={2}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Kebutuhan khusus atau masalah yang dihadapi klien..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold"
                >
                  Simpan Prospek
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
