import { Head, Link } from '@inertiajs/react';
import React from 'react';
import {
    Calendar,
    Pill,
    UserPlus,
    ClipboardList,
    Flame,
    Eye,
    Sparkles,
    Plus,
} from 'lucide-react';

export default function FaskesDashboard() {
    // Exact data from Puskesmas.png
    const priorityAlertPatients = [
        {
            id: 'P-882',
            name: 'Tn. Agus Setiawan',
            riskLevel: 'TINGGI',
            riskColor: 'bg-[#DC2626]',
            reason: 'Missed ART 3 days',
            reasonColor: 'text-[#DC2626]',
        },
        {
            id: 'P-901',
            name: 'Ny. Siti Aminah',
            riskLevel: 'TINGGI',
            riskColor: 'bg-[#DC2626]',
            reason: 'Viral Load Elevated (>1000)',
            reasonColor: 'text-[#DC2626]',
        },
        {
            id: 'P-745',
            name: 'Sdr. Budi Raharjo',
            riskLevel: 'SEDANG',
            riskColor: 'bg-[#F59E0B]',
            reason: 'Comorbidity: TB Symptom',
            reasonColor: 'text-slate-700',
        },
        {
            id: 'P-112',
            name: 'Ny. Lilis Suryani',
            riskLevel: 'TINGGI',
            riskColor: 'bg-[#DC2626]',
            reason: 'Lost to Follow Up Risk',
            reasonColor: 'text-[#DC2626]',
        },
    ];

    return (
        <>
            <Head title="Operasional Hari Ini - HIVCare360" />

            <div className="space-y-6 relative pb-12">
                {/* Page Header (Matching Puskesmas.png) */}
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-black text-[#0F2942] tracking-tight">
                        Operasional Hari Ini
                    </h1>

                    <div className="flex items-center gap-2 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] px-3.5 py-1.5 text-xs font-bold text-[#0284C7]">
                        <Calendar className="h-4 w-4" />
                        <span>24 Mei 2024</span>
                    </div>
                </div>

                {/* 4 Summary Cards Grid (Exact match with Puskesmas.png) */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1: ANTREAN */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs flex justify-between items-start">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                    <Calendar className="h-5 w-5" />
                                </div>
                            </div>
                            <div>
                                <span className="text-3.5xl font-black text-[#0F2942] block leading-none">
                                    12
                                </span>
                                <span className="text-xs text-slate-500 font-semibold block mt-1">
                                    Pasien Kontrol
                                </span>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                            ANTREAN
                        </span>
                    </div>

                    {/* Card 2: REFILL */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs flex justify-between items-start">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                    <Pill className="h-5 w-5" />
                                </div>
                            </div>
                            <div>
                                <span className="text-3.5xl font-black text-[#0F2942] block leading-none">
                                    08
                                </span>
                                <span className="text-xs text-slate-500 font-semibold block mt-1">
                                    Ambil ART
                                </span>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                            REFILL
                        </span>
                    </div>

                    {/* Card 3: REGISTRASI */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs flex justify-between items-start">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                                    <UserPlus className="h-5 w-5" />
                                </div>
                            </div>
                            <div>
                                <span className="text-3.5xl font-black text-[#0F2942] block leading-none">
                                    02
                                </span>
                                <span className="text-xs text-slate-500 font-semibold block mt-1">
                                    Pasien Baru
                                </span>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                            REGISTRASI
                        </span>
                    </div>

                    {/* Card 4: LAB/KLINIS */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs flex justify-between items-start">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                    <ClipboardList className="h-5 w-5" />
                                </div>
                            </div>
                            <div>
                                <span className="text-3.5xl font-black text-[#0F2942] block leading-none">
                                    05
                                </span>
                                <span className="text-xs text-slate-500 font-semibold block mt-1">
                                    Jadwal Pemeriksaan
                                </span>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                            LAB/KLINIS
                        </span>
                    </div>
                </div>

                {/* Main Split Section (Exact match with Puskesmas.png) */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column (2/3 Width): Pasien Prioritas Hari Ini (AI Alert) */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                            {/* Card Header */}
                            <div className="flex items-center justify-between p-5 border-b border-slate-100">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-600">
                                        <Flame className="h-4 w-4 fill-red-600" />
                                    </div>
                                    <h3 className="text-base font-extrabold text-[#B91C1C]">
                                        Pasien Prioritas Hari Ini (AI Alert)
                                    </h3>
                                </div>

                                <Link
                                    href="/faskes/patients"
                                    className="text-xs font-extrabold text-[#0284C7] hover:underline"
                                >
                                    Lihat Semua Alerts
                                </Link>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                        <tr>
                                            <th className="px-5 py-3">ID PASIEN</th>
                                            <th className="px-5 py-3">NAMA PASIEN</th>
                                            <th className="px-5 py-3">RISIKO</th>
                                            <th className="px-5 py-3">PENYEBAB</th>
                                            <th className="px-5 py-3 text-center">AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 font-medium">
                                        {priorityAlertPatients.map((patient) => (
                                            <tr key={patient.id} className="hover:bg-slate-50/80 transition-colors">
                                                <td className="px-5 py-4 font-mono font-bold text-slate-700">
                                                    {patient.id}
                                                </td>
                                                <td className="px-5 py-4 font-bold text-slate-900">
                                                    {patient.name}
                                                </td>
                                                <td className="px-5 py-4">
                                                    <span
                                                        className={`inline-block rounded-md px-3 py-1 text-[10px] font-extrabold text-white uppercase tracking-wider shadow-2xs ${patient.riskColor}`}
                                                    >
                                                        {patient.riskLevel}
                                                    </span>
                                                </td>
                                                <td className={`px-5 py-4 font-semibold ${patient.reasonColor}`}>
                                                    {patient.reason}
                                                </td>
                                                <td className="px-5 py-4 text-center">
                                                    <Link
                                                        href={`/faskes/patients/${patient.id}/emr`}
                                                        className="inline-flex items-center justify-center text-slate-500 hover:text-[#0284C7] transition-colors"
                                                        title="Lihat EMR Pasien"
                                                    >
                                                        <Eye className="h-4 w-4 text-slate-500 hover:text-[#0284C7]" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (1/3 Width): 2 Cards */}
                    <div className="space-y-6">
                        {/* Card 1: AI INSIGHT (Dark Blue Solid Card) */}
                        <div className="rounded-2xl bg-[#0B2545] p-6 text-white shadow-md relative overflow-hidden flex flex-col justify-between min-h-[240px]">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider">
                                    <Sparkles className="h-4 w-4" />
                                    <span>AI INSIGHT</span>
                                </div>
                                <h3 className="text-xl font-extrabold text-white tracking-tight">
                                    Tingkat Kepatuhan Menurun
                                </h3>
                                <p className="text-xs text-sky-100/90 leading-relaxed">
                                    AI mendeteksi penurunan 15% kehadiran kontrol pada pasien usia produktif (20-35 thn) di wilayah kerja Anda bulan ini.
                                </p>
                            </div>

                            <div className="mt-6 pt-2">
                                <button
                                    onClick={() => alert('Membuka Analisis Mendalam AI...')}
                                    className="w-full rounded-xl bg-white py-2.5 text-xs font-extrabold text-[#0B2545] shadow-md hover:bg-slate-100 transition-colors"
                                >
                                    Analisis Mendalam
                                </button>
                            </div>
                        </div>

                        {/* Card 2: SEBARAN PASIEN LTFU (White Map Card) */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                                SEBARAN PASIEN LTFU
                            </h4>

                            {/* Map Graphic Box */}
                            <div className="relative h-44 w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                                {/* Map Background Image / Graphic */}
                                <div className="absolute inset-0 bg-[radial-gradient(#ef4444_2px,transparent_2px)] [background-size:16px_16px] opacity-25" />
                                
                                {/* Hotspot Circle Graphic */}
                                <div className="absolute left-1/3 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 animate-pulse border border-red-500/40" />
                                <div className="absolute left-1/3 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/40 border border-red-600" />
                                
                                <div className="absolute right-1/4 top-1/3 h-12 w-12 rounded-full bg-red-500/20 border border-red-500/40" />

                                {/* 4 Titik Hotspot Badge */}
                                <div className="absolute bottom-2.5 right-2.5 rounded-lg border border-red-300 bg-white px-2.5 py-1 text-[10px] font-bold text-red-600 shadow-2xs">
                                    4 Titik Hotspot
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Action Button (FAB) at Bottom Right */}
                <button
                    onClick={() => (window.location.href = '/faskes/screenings')}
                    className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B2545] text-white shadow-xl hover:scale-105 transition-transform cursor-pointer"
                    title="Tambah Data Baru"
                >
                    <Plus className="h-6 w-6 stroke-[3]" />
                </button>
            </div>
        </>
    );
}
