import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    User,
    Printer,
    Edit3,
    Zap,
    XCircle,
    PhoneCall,
    Calendar,
    Home,
    MapPin,
    FileText,
    FileCheck,
    CheckCircle2,
} from 'lucide-react';

export default function DinkesPatientMonitoringPage() {
    // EMR Active Tab State
    const [activeTab, setActiveTab] = useState<'skrining' | 'kontrol' | 'art' | 'lab'>('skrining');

    // Patient Data (Matching Pemantauan_dinkes.png)
    const patient = {
        id: 'P-99812-JK',
        riskLevel: 'Risiko Tinggi',
        updatedAt: '24 Okt 2023',
        ageGender: '34 Tahun / Laki-laki',
        district: 'Sumbersari',
        puskesmas: 'Puskesmas Sumbersari',
        maritalStatus: 'Menikah',
        phone: '+62 812-3456-7890',
        distance: '2.4km dari Puskesmas Sumbersari',
    };

    const handleDirectAction = (actionName: string) => {
        alert(`⚡ AKSI LANGSUNG AI: ${actionName} untuk Pasien ID ${patient.id} berhasil diinisiasi! Notifikasi dikirimkan ke Tim Konselor Puskesmas ${patient.puskesmas}.`);
    };

    return (
        <div className="space-y-6 pb-20">
            <Head title="Pemantauan Pasien Regional - Dinkes HIVCare360" />

            {/* Breadcrumb Header */}
            <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <span>Pemantauan</span>
                    <span>›</span>
                    <span className="text-[#0284C7] font-bold">Profil Pasien</span>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-1">
                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="text-2.5xl font-black text-[#0F2942] tracking-tight">
                            Detail Pasien: {patient.id}
                        </h1>
                        <span className="text-2.5xl font-black text-[#0F2942]">
                            {patient.riskLevel}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => alert(`Cetak Rekam Medis PDF Pasien ${patient.id}`)}
                            className="flex items-center gap-2 rounded-xl border border-[#0F2942] bg-white px-4 py-2.5 text-xs font-black text-[#0F2942] hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
                        >
                            <Printer className="h-4 w-4" />
                            <span>Ekspor Laporan</span>
                        </button>

                        <button
                            onClick={() => alert(`Edit catatan supervisi Dinas Kesehatan untuk ${patient.id}`)}
                            className="flex items-center gap-2 rounded-xl bg-[#0F2942] px-5 py-2.5 text-xs font-black text-white hover:bg-[#0284C7] transition-all shadow-md cursor-pointer"
                        >
                            <Edit3 className="h-4 w-4" />
                            <span>Edit Catatan</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Split (Left 2/3 vs Right 1/3) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Left Side (2/3 Width): Demografis Card & 4-Tab EMR */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Card 1: Informasi Demografis (Matching Pemantauan_dinkes.png) */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-5">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                                    <User className="h-4 w-4" />
                                </div>
                                <h3 className="text-base font-black text-[#0F2942]">Informasi Demografis</h3>
                            </div>
                            <span className="text-xs text-slate-400 font-semibold">
                                Terakhir Diperbarui: {patient.updatedAt}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs">
                            {/* Column 1 */}
                            <div className="space-y-3">
                                <div>
                                    <span className="text-slate-400 font-bold block text-[11px]">ID Pasien</span>
                                    <span className="font-black text-[#0F2942] text-sm">{patient.id}</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 font-bold block text-[11px]">Puskesmas</span>
                                    <span className="font-extrabold text-slate-800">{patient.puskesmas}</span>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-3">
                                <div>
                                    <span className="text-slate-400 font-bold block text-[11px]">Umur / Jenis Kelamin</span>
                                    <span className="font-extrabold text-slate-800">{patient.ageGender}</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 font-bold block text-[11px]">Status Pernikahan</span>
                                    <span className="font-extrabold text-slate-800">{patient.maritalStatus}</span>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-3">
                                <div>
                                    <span className="text-slate-400 font-bold block text-[11px]">Kecamatan</span>
                                    <span className="font-extrabold text-slate-800">{patient.district}</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 font-bold block text-[11px]">Kontak</span>
                                    <a href={`tel:${patient.phone}`} className="font-extrabold text-[#0284C7] underline">
                                        {patient.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: 4-Tab EMR Medical Records (Matching Pemantauan_dinkes.png) */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-5">
                        {/* Tab Headers */}
                        <div className="flex border-b border-slate-200 text-xs font-bold">
                            <button
                                onClick={() => setActiveTab('skrining')}
                                className={`pb-3 px-4 transition-all relative ${
                                    activeTab === 'skrining'
                                        ? 'text-[#0284C7] font-black border-b-2 border-[#0284C7]'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                Riwayat Skrining
                            </button>
                            <button
                                onClick={() => setActiveTab('kontrol')}
                                className={`pb-3 px-4 transition-all relative ${
                                    activeTab === 'kontrol'
                                        ? 'text-[#0284C7] font-black border-b-2 border-[#0284C7]'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                Riwayat Kontrol
                            </button>
                            <button
                                onClick={() => setActiveTab('art')}
                                className={`pb-3 px-4 transition-all relative ${
                                    activeTab === 'art'
                                        ? 'text-[#0284C7] font-black border-b-2 border-[#0284C7]'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                Riwayat ART
                            </button>
                            <button
                                onClick={() => setActiveTab('lab')}
                                className={`pb-3 px-4 transition-all relative ${
                                    activeTab === 'lab'
                                        ? 'text-[#0284C7] font-black border-b-2 border-[#0284C7]'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                Hasil Lab
                            </button>
                        </div>

                        {/* Tab Content 1: Riwayat Skrining */}
                        {activeTab === 'skrining' && (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                                        <tr>
                                            <th className="px-4 py-3.5">Tanggal</th>
                                            <th className="px-4 py-3.5">Jenis Tes</th>
                                            <th className="px-4 py-3.5">Hasil</th>
                                            <th className="px-4 py-3.5">Teknisi</th>
                                            <th className="px-4 py-3.5 text-center">Tindakan</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 font-medium">
                                        <tr className="hover:bg-slate-50/80 transition-colors">
                                            <td className="px-4 py-3.5 font-bold text-slate-800">12/05/2023</td>
                                            <td className="px-4 py-3.5 text-slate-800 font-semibold">Rapid Test R1/R2/R3</td>
                                            <td className="px-4 py-3.5 font-black text-red-600">Reaktif</td>
                                            <td className="px-4 py-3.5 text-slate-700">Siti Aminah</td>
                                            <td className="px-4 py-3.5 text-center">
                                                <button onClick={() => alert('PDF Result')} className="text-xs font-bold text-[#0284C7] hover:underline">
                                                    Lihat PDF
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/80 transition-colors">
                                            <td className="px-4 py-3.5 font-bold text-slate-800">10/01/2022</td>
                                            <td className="px-4 py-3.5 text-slate-800 font-semibold">Rapid Test Screening</td>
                                            <td className="px-4 py-3.5 font-bold text-slate-700">Non-Reaktif</td>
                                            <td className="px-4 py-3.5 text-slate-700">Budi Santoso</td>
                                            <td className="px-4 py-3.5 text-center">
                                                <button onClick={() => alert('PDF Result')} className="text-xs font-bold text-[#0284C7] hover:underline">
                                                    Lihat PDF
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Tab Content 2: Riwayat Kontrol */}
                        {activeTab === 'kontrol' && (
                            <div className="text-xs space-y-3 p-2">
                                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50 text-red-900 font-semibold">
                                    ⚠️ Peringatan: Pasien melewatkan jadwal kontrol tanggal 15 Juni, 15 Juli, &amp; 15 Agustus 2026.
                                </div>
                            </div>
                        )}

                        {/* Tab Content 3: Riwayat ART */}
                        {activeTab === 'art' && (
                            <div className="text-xs space-y-3 p-2">
                                <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 font-semibold">
                                    📦 Regimen Aktif: TLD (Tenofovir/Lamivudine/Dolutegravir) 1x1. Pengambilan obat terhenti 45 hari.
                                </div>
                            </div>
                        )}

                        {/* Tab Content 4: Hasil Lab */}
                        {activeTab === 'lab' && (
                            <div className="text-xs space-y-3 p-2">
                                <div className="p-3.5 rounded-xl border border-sky-200 bg-sky-50 text-slate-800 font-semibold flex justify-between">
                                    <span>CD4 Count Terakhir: <strong className="text-[#0F2942]">220 cells/mm³</strong></span>
                                    <span>Viral Load: <strong className="text-red-600">12,400 copies/mL</strong></span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side (1/3 Width): Red AI Alert & Location Map */}
                <div className="space-y-6">
                    {/* Card 1: Peringatan Analisis AI (Red Border Box matching Pemantauan_dinkes.png) */}
                    <div className="rounded-2xl border-2 border-red-500 bg-white p-5 shadow-sm space-y-4">
                        {/* Header Box */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white shadow-2xs shrink-0">
                                <Zap className="h-5 w-5 fill-white" />
                            </div>
                            <h3 className="text-base font-black text-red-600 leading-tight">
                                Peringatan Analisis AI
                            </h3>
                        </div>

                        {/* Status Box */}
                        <div className="rounded-xl bg-red-50/80 p-3.5 border border-red-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-600">Status Kepatuhan</span>
                            <span className="text-xs font-black text-red-600 tracking-wider">
                                RISIKO TINGGI
                            </span>
                        </div>

                        {/* Alasan Utama */}
                        <div className="space-y-2 text-xs">
                            <span className="font-extrabold text-slate-700 tracking-wider uppercase text-[11px] block">
                                ⚠ ALASAN UTAMA
                            </span>
                            <div className="space-y-1.5 font-semibold text-slate-700">
                                <div className="flex items-start gap-2">
                                    <XCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                                    <span>Melewatkan kontrol klinis rutin 3 kali berturut-turut.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <XCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                                    <span>Tidak ada catatan pengambilan obat ART selama 45 hari terakhir.</span>
                                </div>
                            </div>
                        </div>

                        {/* Rekomendasi Direct Action Buttons (Matching Pemantauan_dinkes.png) */}
                        <div className="space-y-2.5 pt-1">
                            <span className="font-extrabold text-slate-700 tracking-wider uppercase text-[11px] block">
                                ✔ REKOMENDASI
                            </span>

                            {/* Action Button 1 */}
                            <button
                                onClick={() => handleDirectAction('Hubungi Pasien Segera')}
                                className="w-full flex items-center gap-3 rounded-xl border border-[#BAE6FD] bg-[#E0F2FE] p-3 text-left hover:bg-sky-100 transition-all cursor-pointer group"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-200 text-[#0F2942] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                                    <PhoneCall className="h-4 w-4" />
                                </div>
                                <span className="text-xs font-black text-[#0F2942]">
                                    Hubungi Pasien Segera
                                </span>
                            </button>

                            {/* Action Button 2 */}
                            <button
                                onClick={() => handleDirectAction('Jadwalkan Konseling Mendesak')}
                                className="w-full flex items-center gap-3 rounded-xl border border-[#BAE6FD] bg-[#E0F2FE] p-3 text-left hover:bg-sky-100 transition-all cursor-pointer group"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-200 text-[#0F2942] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                                    <Calendar className="h-4 w-4" />
                                </div>
                                <span className="text-xs font-black text-[#0F2942]">
                                    Jadwalkan Konseling Mendesak
                                </span>
                            </button>

                            {/* Action Button 3 */}
                            <button
                                onClick={() => handleDirectAction('Prioritaskan Kunjungan Rumah (Level 1)')}
                                className="w-full flex items-center gap-3 rounded-xl border border-[#BAE6FD] bg-[#E0F2FE] p-3 text-left hover:bg-sky-100 transition-all cursor-pointer group"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-200 text-[#0F2942] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                                    <Home className="h-4 w-4" />
                                </div>
                                <span className="text-xs font-black text-[#0F2942]">
                                    Prioritaskan Kunjungan Rumah (Level 1)
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Konteks Lokasi Pasien (Matching Pemantauan_dinkes.png) */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-3">
                        <h3 className="text-sm font-black text-[#0F2942]">Konteks Lokasi Pasien</h3>

                        {/* Simulated Mini Map Display */}
                        <div className="relative h-44 w-full rounded-xl bg-[#CBE6F3] overflow-hidden border border-slate-200 flex items-center justify-center">
                            <svg className="w-full h-full object-cover" viewBox="0 0 300 180">
                                <path d="M 0,90 Q 150,60 300,100" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                <path d="M 120,0 Q 140,90 160,180" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                <circle cx="150" cy="90" r="10" fill="#0F2942" stroke="#FFFFFF" strokeWidth="3" />
                            </svg>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                                <MapPin className="h-8 w-8 text-[#0F2942] fill-[#0284C7] animate-bounce" />
                            </div>
                        </div>

                        <p className="text-[11px] italic font-medium text-slate-500 text-center">
                            Berlokasi {patient.distance}.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
