import { Head } from '@inertiajs/react';
import React from 'react';
import {
    AlertTriangle,
    Users,
    UserPlus,
    PlusSquare,
    CheckCircle2,
    UserX,
    Microscope,
    Building,
    Building2,
    Calendar,
    Download,
    TrendingUp,
    TrendingDown,
    MoreVertical,
    ArrowRight,
} from 'lucide-react';

export default function DinkesDashboardPage() {
    // Table data matching Dasboard-dinkes.png
    const faskesPriorityList = [
        {
            name: 'Puskesmas Puger',
            kritis: '18 KRITIS',
            peringatan: '27 PERINGATAN',
            stabil: '64 STABIL',
            trend: '+15%',
            trendDir: 'up',
        },
        {
            name: 'Puskesmas Sumbersari',
            kritis: '12 KRITIS',
            peringatan: '31 PERINGATAN',
            stabil: '82 STABIL',
            trend: '-2%',
            trendDir: 'down',
        },
        {
            name: 'Puskesmas Ambulu',
            kritis: '24 KRITIS',
            peringatan: '19 PERINGATAN',
            stabil: '45 STABIL',
            trend: '0%',
            trendDir: 'neutral',
        },
        {
            name: 'RSUD dr. Soebandi',
            kritis: '5 KRITIS',
            peringatan: '14 PERINGATAN',
            stabil: '112 STABIL',
            trend: '-5%',
            trendDir: 'down',
        },
    ];

    return (
        <div className="space-y-6 pb-16">
            <Head title="Executive Dashboard Operasional - Dinkes HIVCare360" />

            {/* Page Header Bar (Matching Dasboard-dinkes.png) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <span className="text-[11px] font-black tracking-wider text-[#0284C7] uppercase block">
                        DASBOR OPERASIONAL
                    </span>
                    <h1 className="text-2xl font-black text-[#0F2942] tracking-tight mt-0.5">
                        Gambaran Umum Administrasi
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-xl border border-[#0F2942] bg-white px-4 py-2.5 text-xs font-black text-[#0F2942] hover:bg-slate-50 shadow-2xs transition-all">
                        <Calendar className="h-4 w-4 text-[#0F2942]" />
                        <span>30 Hari Terakhir</span>
                    </button>
                    <button className="flex items-center gap-2 rounded-xl border border-[#0F2942] bg-white px-4 py-2.5 text-xs font-black text-[#0F2942] hover:bg-slate-50 shadow-2xs transition-all">
                        <Download className="h-4 w-4 text-[#0F2942]" />
                        <span>Ekspor PDF</span>
                    </button>
                </div>
            </div>

            {/* Red Risk AI Banner Alert Box (Matching Dasboard-dinkes.png) */}
            <div className="rounded-2xl border border-red-200 bg-[#FEE2E2] p-5 text-red-900 shadow-2xs flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-2xs mt-0.5">
                        <AlertTriangle className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-sm font-black text-red-950">
                            Peringatan Deteksi Risiko AI
                        </h3>
                        <p className="text-xs font-semibold leading-relaxed text-red-900 italic max-w-3xl">
                            Kecamatan Puger mengalami kenaikan 15% pada pasien berisiko putus ART dibanding bulan lalu. Validasi lapangan segera direkomendasikan untuk penjangkauan kepatuhan.
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => alert('Navigasi ke Peta GIS Risiko Kecamatan Puger')}
                    className="shrink-0 rounded-xl bg-[#991B1B] px-5 py-3 text-xs font-black text-white shadow-md hover:bg-red-800 transition-all cursor-pointer text-center"
                >
                    Lihat Detail Risiko
                </button>
            </div>

            {/* 8 Metric Summary Cards Grid (2 Rows of 4 Cards) (Matching Dasboard-dinkes.png) */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {/* Card 1: TOTAL ODHIV AKTIF */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex items-start justify-between">
                    <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
                            TOTAL ODHIV AKTIF
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2.5xl font-black text-[#0F2942]">4.281</span>
                            <span className="text-xs font-extrabold text-emerald-600">↑2,4%</span>
                        </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                        <Users className="h-5 w-5" />
                    </div>
                </div>

                {/* Card 2: KASUS BARU (BULAN INI) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex items-start justify-between">
                    <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
                            KASUS BARU (BULAN INI)
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2.5xl font-black text-[#0F2942]">64</span>
                            <span className="text-xs font-extrabold text-red-600">↑12%</span>
                        </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                        <UserPlus className="h-5 w-5" />
                    </div>
                </div>

                {/* Card 3: TOTAL PASIEN ART */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex items-start justify-between">
                    <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
                            TOTAL PASIEN ART
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2.5xl font-black text-[#0F2942]">3.892</span>
                            <span className="text-xs font-bold text-slate-500">91% Cakupan</span>
                        </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                        <PlusSquare className="h-5 w-5" />
                    </div>
                </div>

                {/* Card 4: KEPATUHAN ART % */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex items-start justify-between">
                    <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
                            KEPATUHAN ART %
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2.5xl font-black text-[#0F2942]">84,2%</span>
                            <span className="text-xs font-extrabold text-red-600">↓0,5%</span>
                        </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <CheckCircle2 className="h-5 w-5" />
                    </div>
                </div>

                {/* Card 5: PASIEN LTFU */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex items-start justify-between">
                    <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
                            PASIEN LTFU
                        </span>
                        <div className="space-y-0.5">
                            <span className="text-2.5xl font-black text-[#0F2942] block">218</span>
                            <span className="text-[11px] font-extrabold text-red-600 block">
                                Mangkir (Lost to Follow-up)
                            </span>
                        </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-600">
                        <UserX className="h-5 w-5" />
                    </div>
                </div>

                {/* Card 6: SKRINING (BULAN) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex items-start justify-between">
                    <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
                            SKRINING (BULAN)
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2.5xl font-black text-[#0F2942]">1.450</span>
                            <span className="text-xs font-bold text-slate-500">Target: 2rb</span>
                        </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                        <Microscope className="h-5 w-5" />
                    </div>
                </div>

                {/* Card 7: PUSKESMAS HIV */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex items-start justify-between">
                    <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
                            PUSKESMAS HIV
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2.5xl font-black text-[#0F2942]">50</span>
                            <span className="text-xs font-bold text-slate-500">Fasilitas Aktif</span>
                        </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                        <Building className="h-5 w-5" />
                    </div>
                </div>

                {/* Card 8: RUMAH SAKIT HIV */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex items-start justify-between">
                    <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
                            RUMAH SAKIT HIV
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2.5xl font-black text-[#0F2942]">12</span>
                            <span className="text-xs font-bold text-slate-500">Pusat Rujukan</span>
                        </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                        <Building2 className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Charts Grid (2 Columns) (Matching Dasboard-dinkes.png) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Card Left: Tren Kasus HIV (Bulanan) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-black text-[#0F2942]">Tren Kasus HIV (Bulanan)</h3>
                        <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg">
                            <MoreVertical className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Bar Chart Graphics Representation */}
                    <div className="h-52 w-full bg-slate-50/70 rounded-xl border border-slate-100 p-5 flex items-end justify-between gap-4">
                        {[
                            { month: 'Jan', val: 40 },
                            { month: 'Feb', val: 60 },
                            { month: 'Mar', val: 45 },
                            { month: 'Apr', val: 90 },
                            { month: 'Mei', val: 120 },
                            { month: 'Jun', val: 75 },
                        ].map((bar) => (
                            <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                <div
                                    className="w-full bg-[#0F2942] rounded-t-md transition-all"
                                    style={{ height: `${bar.val}px` }}
                                />
                                <span className="text-xs font-bold text-slate-600 mt-1">{bar.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card Right: Tren Kepatuhan ART vs LTFU */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-black text-[#0F2942]">Tren Kepatuhan ART vs LTFU</h3>

                        <div className="flex items-center gap-4 text-xs font-bold">
                            <div className="flex items-center gap-1.5 text-slate-700">
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                                <span>ART</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-700">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                                <span>LTFU</span>
                            </div>
                        </div>
                    </div>

                    {/* Wave Line Chart SVG */}
                    <div className="h-52 w-full bg-slate-50/70 rounded-xl border border-slate-100 p-5 relative flex flex-col justify-between">
                        <svg className="w-full h-36" viewBox="0 0 400 120" preserveAspectRatio="none">
                            {/* Dotted Red Line (LTFU) */}
                            <path
                                d="M 0,30 Q 100,10 200,60 T 400,20"
                                fill="none"
                                stroke="#DC2626"
                                strokeWidth="3"
                                strokeDasharray="6,6"
                            />
                            {/* Solid Green Line (ART) */}
                            <path
                                d="M 0,90 Q 100,80 200,40 T 400,70"
                                fill="none"
                                stroke="#16A34A"
                                strokeWidth="3"
                            />
                        </svg>

                        <div className="flex justify-between text-xs font-bold text-slate-600 pt-2 border-t border-slate-200">
                            <span>Minggu 1</span>
                            <span>Minggu 2</span>
                            <span>Minggu 3</span>
                            <span>Minggu 4</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Card Section: Pasien Prioritas Pendampingan (Matching Dasboard-dinkes.png) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                {/* Header Banner */}
                <div className="bg-[#E0F2FE]/60 border-b border-[#BAE6FD] p-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-base font-black text-[#0F2942]">Pasien Prioritas Pendampingan</h3>
                        <p className="text-xs text-slate-600 font-semibold mt-0.5">
                            Tingkat risiko berdasarkan riwayat pengambilan ART &amp; laboratorium klinis yang dihitung AI.
                        </p>
                    </div>

                    <a
                        href="/dinkes/patients"
                        className="text-xs font-black text-[#0284C7] hover:underline flex items-center gap-1.5 shrink-0"
                    >
                        <span>Lihat Analisis Lengkap</span>
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                {/* Table Data */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#E0F2FE]/40 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">PUSKESMAS / FASILITAS</th>
                                <th className="px-6 py-4">RISIKO TINGGI (MERAH)</th>
                                <th className="px-6 py-4">RISIKO SEDANG (KUNING)</th>
                                <th className="px-6 py-4">RISIKO RENDAH (HIJAU)</th>
                                <th className="px-6 py-4 text-center">TREN</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            {faskesPriorityList.map((row) => (
                                <tr key={row.name} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-6 py-4 font-black text-slate-900 text-sm">
                                        {row.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-block rounded-md bg-[#DC2626] px-3 py-1 text-[10px] font-black text-white uppercase shadow-2xs">
                                            {row.kritis}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-block rounded-md bg-[#D97706] px-3 py-1 text-[10px] font-black text-white uppercase shadow-2xs">
                                            {row.peringatan}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-block rounded-md bg-[#16A34A] px-3 py-1 text-[10px] font-black text-white uppercase shadow-2xs">
                                            {row.stabil}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center font-black">
                                        {row.trendDir === 'up' && (
                                            <span className="text-red-600 flex items-center justify-center gap-1">
                                                📈 {row.trend}
                                            </span>
                                        )}
                                        {row.trendDir === 'down' && (
                                            <span className="text-emerald-600 flex items-center justify-center gap-1">
                                                📉 {row.trend}
                                            </span>
                                        )}
                                        {row.trendDir === 'neutral' && (
                                            <span className="text-slate-500">
                                                〰 {row.trend}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-100 text-center text-xs text-slate-500 font-semibold">
                    Menampilkan 4 dari 62 Fasilitas. <button onClick={() => alert('Menampilkan seluruh 62 faskes')} className="text-[#0284C7] font-bold hover:underline cursor-pointer">Lihat semua.</button>
                </div>
            </div>
        </div>
    );
}
