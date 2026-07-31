import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    User,
    Calendar,
    Pill,
    Activity,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    Plus,
    Printer,
    Edit,
    ArrowLeft,
    Search,
    Filter,
    Download,
    Eye,
    RotateCcw,
    Clock,
    FileText,
    History,
    TrendingUp,
    ShieldAlert,
    ChevronLeft,
    ChevronRight,
    X,
} from 'lucide-react';

export default function PatientEmrPage() {
    const [activeTab, setActiveTab] = useState<'biodata' | 'visits' | 'art' | 'lab' | 'ai'>('biodata');

    // Modals visibility state
    const [isAddVisitModalOpen, setIsAddVisitModalOpen] = useState(false);
    const [isRecordArtModalOpen, setIsRecordArtModalOpen] = useState(false);
    const [isAddLabModalOpen, setIsAddLabModalOpen] = useState(false);

    // Form inputs state
    const [newVisitDate, setNewVisitDate] = useState('');
    const [newVisitFaskes, setNewVisitFaskes] = useState('Puskesmas Sumbersari');
    const [newVisitDoctor, setNewVisitDoctor] = useState('dr. Siti Aminah');
    const [newVisitComplaint, setNewVisitComplaint] = useState('');

    const [newArtDate, setNewArtDate] = useState('');
    const [newArtDrug, setNewArtDrug] = useState('TLD (TDF+3TC+DTG)');
    const [newArtDose, setNewArtDose] = useState('1 x 1 Tablet');
    const [newArtAdherence, setNewArtAdherence] = useState('98');
    const [newArtNote, setNewArtNote] = useState('');

    const [newLabDate, setNewLabDate] = useState('');
    const [newLabParameter, setNewLabParameter] = useState('Viral Load');
    const [newLabResult, setNewLabResult] = useState('TND');

    // Patient master data
    const patient = {
        id: 'P-882',
        name: 'Budi Santoso',
        gender: 'Laki-laki',
        age: 42,
        birthDate: '12 Mei 1988 (35 th)',
        birthPlaceDate: 'Jakarta, 21 Mar 1985',
        nik: '3271041205880003',
        address: 'Jl. Melati No. 45, Kebon Jeruk, Jakarta Barat',
        phone: '0812-3456-7890',
        emergencyContact: 'Siti Aminah (Istri)',
        emergencyPhone: '0857-1122-3344',
        faskes: 'Puskesmas Sumbersari Jember',
        statusArt: 'STABLE',
        adherenceRate: 98,
        riskLevel: 'RISIKO TINGGI (AI ANALYSIS)',
        lastUpdated: '24 Okt 2023, 09:45',
        cd4Count: 520,
        lastViralLoad: 'TND (Undetectable)',
    };

    return (
        <div className="space-y-6 pb-20 relative">
            <Head title={`EMR Pasien ${patient.name} (${patient.id}) - HIVCare360`} />

            {/* Back Navigation Bar */}
            <div className="flex items-center justify-between">
                <Link
                    href="/faskes/patients"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#0284C7] transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span>&larr; KEMBALI KE DAFTAR PASIEN</span>
                </Link>
                <div className="text-xs text-slate-400 font-semibold">
                    Terakhir diperbarui: {patient.lastUpdated}
                </div>
            </div>

            {/* Header Card Pasien (Matching Data Pasien_*.png) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    {/* Left: Avatar & Main Profile */}
                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0284C7] shadow-2xs font-extrabold text-2xl border border-[#BAE6FD]">
                            <User className="h-8 w-8 text-[#0284C7]" />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-black text-[#0F2942] tracking-tight">
                                    {patient.name}
                                </h1>
                                <span className="rounded-md bg-slate-100 px-2.5 py-0.5 font-mono text-xs font-bold text-slate-700">
                                    ID Pasien: {patient.id}
                                </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                                <span>{patient.gender}, {patient.age} Tahun</span>
                                <span>•</span>
                                <span>NIK: {patient.nik}</span>
                                <span>•</span>
                                <span>{patient.faskes}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: AI Risk Badge, Adherence Metric & Buttons */}
                    <div className="flex flex-col items-start gap-3 md:items-end">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#DC2626] px-3.5 py-1.5 text-xs font-black text-white uppercase tracking-wider shadow-2xs">
                                <AlertTriangle className="h-4 w-4" />
                                {patient.riskLevel}
                            </span>
                            <div className="text-right">
                                <span className="text-[10px] text-slate-400 font-bold uppercase block">STATUS KEPATUHAN</span>
                                <span className="text-sm font-black text-emerald-600">
                                    {patient.adherenceRate}% (Sangat Baik)
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => alert('Form Edit Data Pasien')}
                                className="flex items-center gap-1.5 rounded-xl bg-[#0F2942] px-4 py-2 text-xs font-bold text-white hover:bg-[#0284C7] transition-colors shadow-2xs cursor-pointer"
                            >
                                <Edit className="h-3.5 w-3.5" />
                                <span>EDIT DATA</span>
                            </button>
                            <button
                                onClick={() => window.print()}
                                className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs cursor-pointer"
                            >
                                <Printer className="h-3.5 w-3.5 text-slate-500" />
                                <span>CETAK KARTU</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5 Tab Navigation Bar (Matching Data Pasien_*.png) */}
            <div className="border-b border-slate-200 bg-white rounded-xl px-2 shadow-2xs">
                <nav className="flex space-x-1 overflow-x-auto py-1" aria-label="Tabs">
                    <button
                        onClick={() => setActiveTab('biodata')}
                        className={`flex items-center gap-2 border-b-2 py-3.5 px-4 text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
                            activeTab === 'biodata'
                                ? 'border-[#0284C7] text-[#0284C7]'
                                : 'border-transparent text-slate-500 hover:text-slate-900'
                        }`}
                    >
                        <span>1. BIODATA</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('visits')}
                        className={`flex items-center gap-2 border-b-2 py-3.5 px-4 text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
                            activeTab === 'visits'
                                ? 'border-[#0284C7] text-[#0284C7]'
                                : 'border-transparent text-slate-500 hover:text-slate-900'
                        }`}
                    >
                        <span>2. RIWAYAT KUNJUNGAN</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('art')}
                        className={`flex items-center gap-2 border-b-2 py-3.5 px-4 text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
                            activeTab === 'art'
                                ? 'border-[#0284C7] text-[#0284C7]'
                                : 'border-transparent text-slate-500 hover:text-slate-900'
                        }`}
                    >
                        <span>3. RIWAYAT ART</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('lab')}
                        className={`flex items-center gap-2 border-b-2 py-3.5 px-4 text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
                            activeTab === 'lab'
                                ? 'border-[#0284C7] text-[#0284C7]'
                                : 'border-transparent text-slate-500 hover:text-slate-900'
                        }`}
                    >
                        <span>4. PEMERIKSAAN</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('ai')}
                        className={`flex items-center gap-2 border-b-2 py-3.5 px-4 text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
                            activeTab === 'ai'
                                ? 'border-[#0284C7] text-[#0284C7]'
                                : 'border-transparent text-slate-500 hover:text-slate-900'
                        }`}
                    >
                        <Sparkles className="h-4 w-4 text-amber-500 fill-amber-400" />
                        <span>5. AI ANALYSIS</span>
                    </button>
                </nav>
            </div>

            {/* TAB CONTENTS */}

            {/* TAB 1: BIODATA (Matching Data Pasien_biodata.png) */}
            {activeTab === 'biodata' && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Card 1: Informasi Personal */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                        <h3 className="text-base font-extrabold text-[#0F2942] border-b border-slate-100 pb-3">
                            Informasi Personal
                        </h3>
                        <div className="space-y-4 text-xs">
                            <div className="flex justify-between border-b border-slate-100 pb-3">
                                <span className="font-bold text-slate-400 uppercase tracking-wider">NAMA LENGKAP</span>
                                <span className="font-black text-slate-900">{patient.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-3">
                                <span className="font-bold text-slate-400 uppercase tracking-wider">NIK</span>
                                <span className="font-mono font-black text-slate-900">{patient.nik}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-3">
                                <span className="font-bold text-slate-400 uppercase tracking-wider">TANGGAL LAHIR</span>
                                <span className="font-black text-slate-900">{patient.birthDate}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-3">
                                <span className="font-bold text-slate-400 uppercase tracking-wider">ALAMAT</span>
                                <span className="font-extrabold text-slate-800 text-right max-w-xs">{patient.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Kontak Darurat */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                        <h3 className="text-base font-extrabold text-[#0F2942] border-b border-slate-100 pb-3">
                            Kontak Darurat
                        </h3>
                        <div className="space-y-4 text-xs">
                            <div className="flex justify-between border-b border-slate-100 pb-3">
                                <span className="font-bold text-slate-400 uppercase tracking-wider">NO. HP</span>
                                <span className="font-mono font-black text-slate-900">{patient.phone}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-3">
                                <span className="font-bold text-slate-400 uppercase tracking-wider">KONTAK KELUARGA</span>
                                <span className="font-black text-slate-900">{patient.emergencyContact}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-3">
                                <span className="font-bold text-slate-400 uppercase tracking-wider">HP KELUARGA</span>
                                <span className="font-mono font-black text-slate-900">{patient.emergencyPhone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 2: RIWAYAT KUNJUNGAN (Matching Data Pasien_riwayat kunjungan.png) */}
            {activeTab === 'visits' && (
                <div className="space-y-6">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-base font-black text-[#0F2942]">
                                Riwayat Kunjungan
                            </h3>

                            <div className="flex flex-wrap items-center gap-3">
                                <div className="relative w-60">
                                    <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Cari kunjungan..."
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-3 text-xs font-medium text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                                    />
                                </div>
                                <button className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50">
                                    <Filter className="h-3.5 w-3.5 text-slate-500" />
                                    <span>Filter</span>
                                </button>
                                <button
                                    onClick={() => setIsAddVisitModalOpen(true)}
                                    className="flex items-center gap-2 rounded-xl bg-[#0F2942] px-4 py-2 text-xs font-bold text-white hover:bg-[#0284C7] transition-colors shadow-2xs cursor-pointer"
                                >
                                    <Plus className="h-4 w-4" />
                                    <span>+ Tambah Kunjungan</span>
                                </button>
                            </div>
                        </div>

                        {/* Visits Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                    <tr>
                                        <th className="px-5 py-3.5">TANGGAL</th>
                                        <th className="px-5 py-3.5">FASILITAS KESEHATAN</th>
                                        <th className="px-5 py-3.5">TENAGA MEDIS</th>
                                        <th className="px-5 py-3.5">KELUHAN</th>
                                        <th className="px-5 py-3.5">STATUS</th>
                                        <th className="px-5 py-3.5 text-center">AKSI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 font-medium">
                                    <tr className="hover:bg-slate-50/80">
                                        <td className="px-5 py-4">
                                            <div className="font-extrabold text-slate-900">12 Oct 2023</div>
                                            <div className="text-[10px] text-slate-400">09:15 WIB</div>
                                        </td>
                                        <td className="px-5 py-4 font-black text-slate-900">RSUD Dr. Soetomo</td>
                                        <td className="px-5 py-4">
                                            <div className="font-bold text-slate-800">dr. Bambang Irawan Sp.PD</div>
                                            <div className="text-[10px] text-slate-400 font-mono">ID: D-2093</div>
                                        </td>
                                        <td className="px-5 py-4 text-slate-700">Demam ringan dan pusing</td>
                                        <td className="px-5 py-4">
                                            <span className="inline-block rounded-md bg-emerald-600 px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider">
                                                SELESAI
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <button className="text-xs font-black text-[#0284C7] hover:underline cursor-pointer">
                                                DETAIL
                                            </button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50/80">
                                        <td className="px-5 py-4">
                                            <div className="font-extrabold text-slate-900">25 Sep 2023</div>
                                            <div className="text-[10px] text-slate-400">11:00 WIB</div>
                                        </td>
                                        <td className="px-5 py-4 font-black text-slate-900">Puskesmas Genteng</td>
                                        <td className="px-5 py-4">
                                            <div className="font-bold text-slate-800">dr. Siti Aminah</div>
                                            <div className="text-[10px] text-slate-400 font-mono">ID: D-1120</div>
                                        </td>
                                        <td className="px-5 py-4 text-slate-700">Kontrol rutin ART bulan ke-3</td>
                                        <td className="px-5 py-4">
                                            <span className="inline-block rounded-md bg-emerald-600 px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider">
                                                SELESAI
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <button className="text-xs font-black text-[#0284C7] hover:underline cursor-pointer">
                                                DETAIL
                                            </button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50/80">
                                        <td className="px-5 py-4">
                                            <div className="font-extrabold text-slate-900">15 Nov 2023</div>
                                            <div className="text-[10px] text-slate-400">08:00 WIB</div>
                                        </td>
                                        <td className="px-5 py-4 font-black text-slate-900">RSUD Dr. Soetomo</td>
                                        <td className="px-5 py-4">
                                            <div className="font-bold text-slate-800">dr. Bambang Irawan Sp.PD</div>
                                            <div className="text-[10px] text-slate-400 font-mono">ID: D-2093</div>
                                        </td>
                                        <td className="px-5 py-4 text-slate-700">Cek Viral Load & CD4</td>
                                        <td className="px-5 py-4">
                                            <span className="inline-block rounded-md bg-amber-500 px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider">
                                                TERJADWAL
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <button className="text-xs font-black text-[#0284C7] hover:underline cursor-pointer">
                                                RESCHEDULE
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                            <span>Menampilkan 4 dari 12 kunjungan</span>
                            <div className="flex items-center gap-1">
                                <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">&lt;</button>
                                <button className="h-7 w-7 rounded-lg bg-[#0F2942] text-white font-bold flex items-center justify-center">1</button>
                                <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
                                <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">3</button>
                                <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">&gt;</button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Summary Cards Grid */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        <div className="rounded-2xl bg-[#0F2942] p-5 text-white shadow-2xs space-y-2">
                            <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider">KUNJUNGAN TERAKHIR</span>
                            <div className="text-2xl font-black text-white">12 Oct 2023</div>
                            <p className="text-xs text-sky-100 italic">"Kondisi fisik menurun, disarankan istirahat total."</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-[#E0F2FE]/50 p-5 shadow-2xs space-y-2">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">JADWAL BERIKUTNYA</span>
                            <div className="text-2xl font-black text-[#0F2942]">15 Nov 2023</div>
                            <p className="text-xs text-slate-600 font-semibold">RSUD Dr. Soetomo (08:00 WIB)</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">FASILITAS UTAMA</span>
                            <div className="text-xl font-black text-[#0F2942]">RSUD Dr. Soetomo</div>
                            <p className="text-xs text-slate-500">Terintegrasi dengan sistem rujukan pusat.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 3: RIWAYAT ART (Matching Data Pasien_riwayat ART.png) */}
            {activeTab === 'art' && (
                <div className="space-y-6">
                    {/* Top Metric Grid */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {/* Regimen Card */}
                        <div className="rounded-2xl bg-[#0F2942] p-6 text-white shadow-2xs space-y-3">
                            <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider">REGIMEN SAAT INI</span>
                            <h3 className="text-xl font-black text-white leading-tight">
                                TLD (Tenofovir + Lamivudine + Dolutegravir)
                            </h3>
                            <div className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-extrabold text-white">
                                <Pill className="h-4 w-4" />
                                <span>Dosis: 1×1 Tablet</span>
                            </div>
                        </div>

                        {/* Duration Card */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TOTAL DURASI PENGOBATAN</span>
                            <div className="text-4xl font-black text-[#0F2942]">
                                14 <span className="text-base font-bold text-slate-500">Bulan</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                <Clock className="h-3.5 w-3.5 text-slate-400" />
                                <span>Dimulai sejak 01 Jan 2023</span>
                            </div>
                        </div>

                        {/* Adherence Card */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">STATUS KEPATUHAN TERAKHIR</span>
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-black text-[#0F2942]">98%</span>
                                <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-black text-white uppercase">
                                    Sangat Baik
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                <span>Terakhir ambil obat: 02 Feb 2024</span>
                            </div>
                        </div>
                    </div>

                    {/* Table Card */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-2">
                                <RotateCcw className="h-5 w-5 text-[#0F2942]" />
                                <h3 className="text-base font-black text-[#0F2942]">Riwayat Penggunaan ART</h3>
                            </div>

                            <button
                                onClick={() => setIsRecordArtModalOpen(true)}
                                className="flex items-center gap-2 rounded-xl bg-[#0F2942] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#0284C7] transition-colors shadow-2xs cursor-pointer"
                            >
                                <Plus className="h-4 w-4" />
                                <span>+ CATAT PENGAMBILAN OBAT</span>
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                    <tr>
                                        <th className="px-5 py-3.5">TANGGAL MULAI</th>
                                        <th className="px-5 py-3.5">JENIS OBAT</th>
                                        <th className="px-5 py-3.5">DOSIS</th>
                                        <th className="px-5 py-3.5">STATUS KEPATUHAN</th>
                                        <th className="px-5 py-3.5">CATATAN</th>
                                        <th className="px-5 py-3.5 text-center">AKSI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 font-medium">
                                    <tr className="hover:bg-slate-50/80">
                                        <td className="px-5 py-4 font-extrabold text-slate-900">01 Feb 2024</td>
                                        <td className="px-5 py-4 font-black text-[#0284C7]">TLD (TDF+3TC+DTG)</td>
                                        <td className="px-5 py-4 font-bold text-slate-700">1 × 1 Tablet</td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-20 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '98%' }} />
                                                </div>
                                                <span className="font-bold text-emerald-600">98% (Sangat Baik)</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-slate-600">Pasien rutin mengambil obat.</td>
                                        <td className="px-5 py-4 text-center">
                                            <Eye className="h-4 w-4 text-slate-500 hover:text-[#0284C7] cursor-pointer inline" />
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50/80">
                                        <td className="px-5 py-4 font-extrabold text-slate-900">02 Jan 2024</td>
                                        <td className="px-5 py-4 font-black text-[#0284C7]">TLD (TDF+3TC+DTG)</td>
                                        <td className="px-5 py-4 font-bold text-slate-700">1 × 1 Tablet</td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-20 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '95%' }} />
                                                </div>
                                                <span className="font-bold text-emerald-600">95% (Baik)</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-slate-600">Tidak ada keluhan efek samping.</td>
                                        <td className="px-5 py-4 text-center">
                                            <Eye className="h-4 w-4 text-slate-500 hover:text-[#0284C7] cursor-pointer inline" />
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50/80">
                                        <td className="px-5 py-4 font-extrabold text-slate-900">05 Des 2023</td>
                                        <td className="px-5 py-4 font-black text-[#0284C7]">TLD (TDF+3TC+DTG)</td>
                                        <td className="px-5 py-4 font-bold text-slate-700">1 × 1 Tablet</td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-20 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-red-600 rounded-full" style={{ width: '85%' }} />
                                                </div>
                                                <span className="font-bold text-red-600">85% (Cukup)</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-slate-600">Pasien sempat lupa dosis 2 hari.</td>
                                        <td className="px-5 py-4 text-center">
                                            <Eye className="h-4 w-4 text-slate-500 hover:text-[#0284C7] cursor-pointer inline" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bottom Trend Chart Card */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-black text-[#0F2942]">
                                Tren Kepatuhan Pengobatan (6 Bulan Terakhir)
                            </h3>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#0284C7]" />
                                <span>% Kepatuhan</span>
                            </div>
                        </div>

                        {/* Visual Bar Chart */}
                        <div className="h-44 w-full flex items-end justify-between gap-6 px-6 pt-6 pb-2 bg-slate-50/60 rounded-xl border border-slate-100">
                            {[
                                { month: 'SEP 23', val: 92 },
                                { month: 'OKT 23', val: 96 },
                                { month: 'NOV 23', val: 100 },
                                { month: 'DES 23', val: 85 },
                                { month: 'JAN 24', val: 95 },
                                { month: 'FEB 24', val: 98 },
                            ].map((item) => (
                                <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                    <span className="text-[10px] font-extrabold text-slate-600">{item.val}%</span>
                                    <div
                                        className="w-full bg-[#0284C7] rounded-t-lg transition-all"
                                        style={{ height: `${item.val}%` }}
                                    />
                                    <span className="text-[10px] font-bold text-slate-400 mt-1">{item.month}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 4: PEMERIKSAAN / HASIL LAB (Matching Data Pasien_pemeriksaan.png) */}
            {activeTab === 'lab' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Viral Load Card (Left 2/3) */}
                        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                <div>
                                    <h3 className="text-lg font-black text-[#0F2942]">Viral Load (HIV-1 RNA)</h3>
                                    <p className="text-xs text-slate-500 font-semibold">Targeted suppressed monitoring</p>
                                </div>
                                <span className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800 uppercase">
                                    UNDETECTABLE (TND on 12 Sep 2023)
                                </span>
                            </div>

                            {/* Line Chart Representation */}
                            <div className="h-52 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 flex flex-col justify-between">
                                <div className="flex justify-between text-xs font-bold text-slate-500">
                                    <span>2,450 copies/mL</span>
                                    <span>120 copies/mL</span>
                                    <span className="text-emerald-600 font-extrabold">TND</span>
                                </div>
                                <div className="relative flex items-center justify-between px-6">
                                    <div className="h-1 bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 w-full rounded-full" />
                                    <div className="absolute left-6 h-4 w-4 rounded-full bg-red-600 border-2 border-white shadow-xs" />
                                    <div className="absolute left-1/3 h-4 w-4 rounded-full bg-amber-500 border-2 border-white shadow-xs" />
                                    <div className="absolute right-6 h-4 w-4 rounded-full bg-emerald-600 border-2 border-white shadow-xs" />
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                                    <span>12 MAR 2022</span>
                                    <span>15 SEP 2022</span>
                                    <span>10 MAR 2023 (TND)</span>
                                    <span>12 SEP 2023 (TND Recent)</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: CD4 & LFT Cards */}
                        <div className="space-y-6">
                            {/* CD4 Count Card */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CD4 COUNT</span>
                                    <Activity className="h-4 w-4 text-[#0284C7]" />
                                </div>
                                <div className="text-4xl font-black text-[#0F2942]">
                                    520 <span className="text-xs font-bold text-slate-500">cells/mm³</span>
                                </div>
                                <p className="text-xs text-slate-500 font-medium">Last checked: 15 Jun 2023</p>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#0F2942] rounded-full" style={{ width: '65%' }} />
                                </div>
                                <span className="text-[10px] text-slate-400 block font-semibold">Reference: 500 - 1500 cells/mm³</span>
                            </div>

                            {/* Liver Function (LFT) Card */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">LIVER FUNCTION (LFT)</span>
                                <div className="space-y-2 text-xs font-bold">
                                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                                        <span className="text-slate-600">SGOT (AST):</span>
                                        <span className="text-emerald-600 font-black">24 U/L ●</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                                        <span className="text-slate-600">SGPT (ALT):</span>
                                        <span className="text-emerald-600 font-black">28 U/L ●</span>
                                    </div>
                                </div>
                                <button className="text-xs font-extrabold text-[#0284C7] hover:underline cursor-pointer block pt-1">
                                    View Full Biochemistry
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Split Section: CD4 Trend & Riwayat Lab Table */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* CD4 Trend Analysis */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-black text-[#0F2942]">CD4 Trend Analysis</h3>
                                <div className="flex items-center gap-2">
                                    <Filter className="h-4 w-4 text-slate-400 cursor-pointer" />
                                    <Download className="h-4 w-4 text-slate-400 cursor-pointer" />
                                </div>
                            </div>

                            <div className="h-44 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 flex flex-col justify-between">
                                <div className="flex justify-between text-xs font-bold text-emerald-600">
                                    <span>300 (Mar 22)</span>
                                    <span>400 (Dec 22)</span>
                                    <span>520 (Jun 23)</span>
                                </div>
                                <div className="h-1 border-t-2 border-dashed border-emerald-500 w-full my-auto" />
                                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                                    <span>MAR 22</span>
                                    <span>JUN 22</span>
                                    <span>SEP 22</span>
                                    <span>DEC 22</span>
                                    <span>MAR 23</span>
                                    <span>JUN 23</span>
                                </div>
                            </div>
                        </div>

                        {/* Riwayat Laboratorium Table */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-black text-[#0F2942]">Riwayat Laboratorium</h3>
                                <button
                                    onClick={() => setIsAddLabModalOpen(true)}
                                    className="text-xs font-bold text-[#0284C7] hover:underline cursor-pointer"
                                >
                                    + Tambah Data
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                        <tr>
                                            <th className="px-4 py-2.5">Tanggal</th>
                                            <th className="px-4 py-2.5">Parameter</th>
                                            <th className="px-4 py-2.5">Hasil</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 font-medium">
                                        <tr className="hover:bg-slate-50">
                                            <td className="px-4 py-3 font-bold text-slate-900">12 Sep 23</td>
                                            <td className="px-4 py-3 text-slate-700">Viral Load</td>
                                            <td className="px-4 py-3 font-black text-emerald-600">TND</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50">
                                            <td className="px-4 py-3 font-bold text-slate-900">15 Jun 23</td>
                                            <td className="px-4 py-3 text-slate-700">CD4 Count</td>
                                            <td className="px-4 py-3 font-black text-slate-900">520</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50">
                                            <td className="px-4 py-3 font-bold text-slate-900">10 Mar 23</td>
                                            <td className="px-4 py-3 text-slate-700">Viral Load</td>
                                            <td className="px-4 py-3 font-black text-emerald-600">TND</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 5: AI ANALYSIS & SPIDER RADAR (Matching Data Pasien_AI analysis.png) */}
            {activeTab === 'ai' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* Left Column: Risk Assessment & Spider Radar Chart */}
                        <div className="space-y-6">
                            {/* Card 1: Risk Assessment */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-6">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-5 w-5 text-amber-500 fill-amber-400" />
                                        <h3 className="text-lg font-black text-[#0F2942]">Risk Assessment</h3>
                                    </div>
                                    <span className="rounded-lg bg-red-600 px-3 py-1 text-xs font-black text-white uppercase tracking-wider">
                                        HIGH RISK
                                    </span>
                                </div>

                                {/* 4D SVG Spider Radar Chart */}
                                <div className="flex flex-col items-center justify-center p-4">
                                    <svg className="h-64 w-64" viewBox="0 0 200 200">
                                        <polygon points="100,20 180,100 100,180 20,100" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                                        <polygon points="100,40 160,100 100,160 40,100" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                                        <polygon points="100,60 140,100 100,140 60,100" fill="none" stroke="#E2E8F0" strokeWidth="1" />

                                        <line x1="100" y1="20" x2="100" y2="180" stroke="#CBD5E1" strokeWidth="1" />
                                        <line x1="20" y1="100" x2="180" y2="100" stroke="#CBD5E1" strokeWidth="1" />

                                        <polygon
                                            points="100,35 155,100 100,145 45,100"
                                            fill="rgba(2, 132, 199, 0.25)"
                                            stroke="#0284C7"
                                            strokeWidth="2.5"
                                        />

                                        <text x="100" y="14" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">CD4</text>
                                        <text x="186" y="104" textAnchor="start" className="text-[10px] font-bold fill-slate-700">Symptoms</text>
                                        <text x="100" y="194" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">Viral Load</text>
                                        <text x="14" y="104" textAnchor="end" className="text-[10px] font-bold fill-slate-700">Adherence</text>
                                    </svg>
                                </div>

                                {/* Metrics Bars */}
                                <div className="space-y-3 text-xs">
                                    <div>
                                        <div className="flex justify-between font-bold mb-1">
                                            <span className="text-slate-600">Opportunistic Infection Probability:</span>
                                            <span className="text-red-600 font-extrabold">68%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-600 rounded-full" style={{ width: '68%' }} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between font-bold mb-1">
                                            <span className="text-slate-600">Drug Resistance Index:</span>
                                            <span className="text-emerald-600 font-extrabold">Low (12%)</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-600 rounded-full" style={{ width: '12%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Predicted Progression */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                                <h3 className="text-base font-extrabold text-[#0F2942]">Predicted Progression</h3>
                                <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-3.5 flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#0284C7] shadow-2xs font-bold">
                                        &rarr;
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase block">CURRENT TREND</span>
                                        <span className="text-sm font-black text-[#0F2942]">Stabilizing</span>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                    Based on the last 3 clinical cycles, CD4 counts are showing a plateau with minor upward oscillation. Viral load suppression is nearing threshold.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Clinical Insights, AI Recommendation, Prescriptive Table */}
                        <div className="space-y-6">
                            {/* Clinical Insights */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                                <h3 className="text-base font-extrabold text-[#0F2942]">Clinical Insights</h3>

                                <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 space-y-1">
                                    <div className="flex items-center gap-2 font-bold text-emerald-800 text-xs">
                                        <CheckCircle2 className="h-4 w-4" />
                                        <span>ADHERENCE STRENGTH</span>
                                    </div>
                                    <p className="text-xs text-emerald-900 leading-relaxed font-medium pl-6">
                                        High Adherence Detected: Pharmacy refill records and blood plasma levels indicate &gt;95% adherence to current ART regimen over the last 180 days.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-red-200 bg-red-50/80 p-4 space-y-1">
                                    <div className="flex items-center gap-2 font-bold text-red-800 text-xs">
                                        <AlertTriangle className="h-4 w-4" />
                                        <span>EARLY WARNING</span>
                                    </div>
                                    <p className="text-xs text-red-900 leading-relaxed font-medium pl-6">
                                        Secondary Symptoms Flagged: AI pattern matching suggests early-stage dermatological symptoms correlating with CD4 levels below 350. Recommend targeted skin examination.
                                    </p>
                                </div>
                            </div>

                            {/* AI Recommendation Summary Box */}
                            <div className="rounded-2xl bg-[#0F2942] p-6 text-white shadow-md space-y-3">
                                <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider">AI RECOMMENDATION SUMMARY</span>
                                <h4 className="text-lg font-black text-white">
                                    Maintain current Tenofovir-based ART regimen.
                                </h4>
                                <p className="text-xs text-sky-100 leading-relaxed font-medium">
                                    Switching is not advised as current drug efficacy remains high. Potential for full suppression within next two quarters if adherence persists.
                                </p>
                            </div>

                            {/* Prescriptive Recommendations Table */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                    <h3 className="text-base font-extrabold text-[#0F2942]">Prescriptive Recommendations</h3>
                                    <button className="flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:underline cursor-pointer">
                                        <History className="h-3.5 w-3.5" />
                                        <span>History</span>
                                    </button>
                                </div>

                                <div className="space-y-3 text-xs">
                                    <div className="flex items-start justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                                        <div>
                                            <div className="font-extrabold text-slate-900">Scheduled Viral Load Test</div>
                                            <p className="text-slate-500 text-[11px] mt-0.5">Follow-up test required in 3 months (Expected: Oct 2024) to verify suppression trend.</p>
                                        </div>
                                        <span className="rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-black text-sky-800 uppercase">PRIORITY: MED</span>
                                    </div>

                                    <div className="flex items-start justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                                        <div>
                                            <div className="font-extrabold text-slate-900">Metabolic Screening</div>
                                            <p className="text-slate-500 text-[11px] mt-0.5">Recommend checking lipid profile due to potential ART-induced metabolic changes.</p>
                                        </div>
                                        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-800 uppercase">PREVENTATIVE</span>
                                    </div>
                                </div>
                            </div>

                            {/* Button Generate PDF Summary */}
                            <button
                                onClick={() => alert('Mencetak Laporan PDF Ringkasan Pasien AI...')}
                                className="w-full rounded-2xl bg-[#0284C7] py-3.5 text-xs font-black text-white shadow-md shadow-sky-600/20 hover:bg-[#0369A1] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Download className="h-4 w-4" />
                                <span>Generate Patient Summary Document (PDF)</span>
                            </button>

                            <p className="text-[10px] text-center text-slate-400 font-semibold">
                                Analysis generated by MediHIV AI v2.4.1 • Data Current as of July 15, 2024
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL 1: TAMBAH KUNJUNGAN */}
            {isAddVisitModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h3 className="text-base font-black text-[#0F2942]">+ Tambah Kunjungan Medis</h3>
                            <button onClick={() => setIsAddVisitModalOpen(false)} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); setIsAddVisitModalOpen(false); alert('Kunjungan berhasil ditambahkan!'); }} className="space-y-4 text-xs">
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Tanggal Kunjungan</label>
                                <input type="date" value={newVisitDate} onChange={(e) => setNewVisitDate(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Fasilitas Kesehatan</label>
                                <input type="text" value={newVisitFaskes} onChange={(e) => setNewVisitFaskes(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Tenaga Medis</label>
                                <input type="text" value={newVisitDoctor} onChange={(e) => setNewVisitDoctor(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Keluhan / Catatan Medis</label>
                                <textarea rows={3} value={newVisitComplaint} onChange={(e) => setNewVisitComplaint(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                                <button type="button" onClick={() => setIsAddVisitModalOpen(false)} className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50">Batal</button>
                                <button type="submit" className="rounded-xl bg-[#0F2942] px-4 py-2 text-xs font-bold text-white hover:bg-[#0284C7]">Simpan Kunjungan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL 2: CATAT PENGAMBILAN OBAT */}
            {isRecordArtModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h3 className="text-base font-black text-[#0F2942]">+ Catat Pengambilan Obat ART</h3>
                            <button onClick={() => setIsRecordArtModalOpen(false)} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); setIsRecordArtModalOpen(false); alert('Pengambilan obat berhasil dicatat!'); }} className="space-y-4 text-xs">
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Tanggal Pengambilan</label>
                                <input type="date" value={newArtDate} onChange={(e) => setNewArtDate(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Jenis Regimen Obat</label>
                                <input type="text" value={newArtDrug} onChange={(e) => setNewArtDrug(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Dosis (Misal: 1x1 Tablet)</label>
                                <input type="text" value={newArtDose} onChange={(e) => setNewArtDose(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Persentase Kepatuhan (%)</label>
                                <input type="number" min="0" max="100" value={newArtAdherence} onChange={(e) => setNewArtAdherence(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Catatan Apoteker</label>
                                <textarea rows={2} value={newArtNote} onChange={(e) => setNewArtNote(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" />
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                                <button type="button" onClick={() => setIsRecordArtModalOpen(false)} className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50">Batal</button>
                                <button type="submit" className="rounded-xl bg-[#0F2942] px-4 py-2 text-xs font-bold text-white hover:bg-[#0284C7]">Simpan Catatan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL 3: TAMBAH DATA LAB */}
            {isAddLabModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h3 className="text-base font-black text-[#0F2942]">+ Tambah Hasil Laboratorium</h3>
                            <button onClick={() => setIsAddLabModalOpen(false)} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); setIsAddLabModalOpen(false); alert('Data lab berhasil ditambahkan!'); }} className="space-y-4 text-xs">
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Tanggal Pemeriksaan</label>
                                <input type="date" value={newLabDate} onChange={(e) => setNewLabDate(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Parameter Test (Misal: Viral Load / CD4)</label>
                                <input type="text" value={newLabParameter} onChange={(e) => setNewLabParameter(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Hasil Test (Misal: TND / 520 / 24 U/L)</label>
                                <input type="text" value={newLabResult} onChange={(e) => setNewLabResult(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                                <button type="button" onClick={() => setIsAddLabModalOpen(false)} className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50">Batal</button>
                                <button type="submit" className="rounded-xl bg-[#0F2942] px-4 py-2 text-xs font-bold text-white hover:bg-[#0284C7]">Simpan Hasil Lab</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
