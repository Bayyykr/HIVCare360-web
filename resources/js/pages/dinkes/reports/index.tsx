import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    FileSpreadsheet,
    FileText,
    ShieldCheck,
    CheckCircle2,
    TrendingUp,
    BarChart3,
    Activity,
    Layers,
    Download,
} from 'lucide-react';

export default function UnaidsReportPage() {
    const [period, setPeriod] = useState<'bulanan' | 'triwulan' | 'tahunan'>('bulanan');

    // Table Data (Matching Laporan_dinkes.png)
    const facilityCases = [
        {
            name: 'Puskesmas Sumbersari',
            activeCases: 142,
            artCount: '138 (97%)',
            ltfu: 4,
            riskStatus: 'STABIL',
        },
        {
            name: 'RSUD Dr. Soebandi',
            activeCases: 385,
            artCount: '350 (91%)',
            ltfu: 35,
            riskStatus: 'RISIKO TINGGI',
        },
        {
            name: 'Puskesmas Patrang',
            activeCases: 88,
            artCount: '86 (98%)',
            ltfu: 2,
            riskStatus: 'STABIL',
        },
        {
            name: 'Puskesmas Kaliwates',
            activeCases: 112,
            artCount: '92 (82%)',
            ltfu: 20,
            riskStatus: 'PERINGATAN',
        },
    ];

    return (
        <div className="space-y-6 pb-20">
            <Head title="Laporan Kaskade UNAIDS 95-95-95 - Dinkes HIVCare360" />

            {/* Page Header (Matching Laporan_dinkes.png) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2.5xl font-black text-[#0F2942] tracking-tight">
                        Laporan &amp; Analisis Data
                    </h1>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                        Hasilkan wawasan klinis dan ekspor data administrasi kesehatan.
                    </p>
                </div>

                {/* Right Period Toggle Buttons Group */}
                <div className="flex items-center rounded-xl bg-white p-1 border border-slate-200 shadow-2xs">
                    <button
                        onClick={() => setPeriod('bulanan')}
                        className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                            period === 'bulanan'
                                ? 'bg-[#0F2942] text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        Bulanan
                    </button>
                    <button
                        onClick={() => setPeriod('triwulan')}
                        className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                            period === 'triwulan'
                                ? 'bg-[#0F2942] text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        Triwulan
                    </button>
                    <button
                        onClick={() => setPeriod('tahunan')}
                        className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                            period === 'tahunan'
                                ? 'bg-[#0F2942] text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        Tahunan
                    </button>
                </div>
            </div>

            {/* Sub-Header Export Buttons Row (Matching Laporan_dinkes.png) */}
            <div className="flex items-center justify-end gap-3">
                <button
                    onClick={() => alert('Ekspor Laporan ke Excel (.xlsx)')}
                    className="flex items-center gap-2 rounded-xl border border-[#0F2942] bg-white px-5 py-2.5 text-xs font-black text-[#0F2942] hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
                >
                    <FileSpreadsheet className="h-4 w-4 text-[#0F2942]" />
                    <span>Ekspor ke Excel</span>
                </button>

                <button
                    onClick={() => alert('Ekspor Laporan Resmi UNAIDS ke PDF (.pdf)')}
                    className="flex items-center gap-2 rounded-xl bg-[#0F2942] px-5 py-2.5 text-xs font-black text-white hover:bg-[#0284C7] transition-all shadow-md cursor-pointer"
                >
                    <FileText className="h-4 w-4" />
                    <span>Ekspor ke PDF</span>
                </button>
            </div>

            {/* Main Document Paper Container Box (Matching Laporan_dinkes.png) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md space-y-6">
                {/* Document Header Row */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between border-b border-slate-100 pb-5">
                    <div>
                        <h2 className="text-xl font-black text-[#0F2942]">
                            Laporan Kemajuan HIV Bulanan
                        </h2>
                        <p className="text-xs font-semibold text-slate-500 mt-1">
                            Dinas Kesehatan Kabupaten Jember • Periode Pelaporan: Oktober 2023
                        </p>
                    </div>

                    <div className="text-right space-y-1">
                        <span className="inline-block rounded-md bg-emerald-100 px-3 py-1 text-[10px] font-black text-emerald-800 uppercase tracking-wider">
                            SELESAI
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 block">
                            Dibuat: 02 Nov 2023
                        </span>
                    </div>
                </div>

                {/* 4 Summary Metric Cards Grid (Matching Laporan_dinkes.png) */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1: TOTAL SKRINING */}
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            TOTAL SKRINING
                        </span>
                        <span className="text-2.5xl font-black text-[#0F2942] block leading-none">
                            1,248
                        </span>
                        <span className="text-[11px] font-bold text-emerald-600 block pt-1">
                            ↗ +12% vs bulan lalu
                        </span>
                    </div>

                    {/* Card 2: KASUS BARU */}
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            KASUS BARU
                        </span>
                        <span className="text-2.5xl font-black text-red-600 block leading-none">
                            42
                        </span>
                        <span className="text-[11px] font-bold text-red-600 block pt-1">
                            ↗ 4.2% Positivitas
                        </span>
                    </div>

                    {/* Card 3: INISIASI ART */}
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            INISIASI ART
                        </span>
                        <span className="text-2.5xl font-black text-[#0F2942] block leading-none">
                            98%
                        </span>
                        <span className="text-[11px] font-bold text-emerald-600 block pt-1">
                            ✔ Target Terpenuhi
                        </span>
                    </div>

                    {/* Card 4: SUPRESI VIRAL */}
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            SUPRESI VIRAL
                        </span>
                        <span className="text-2.5xl font-black text-[#0F2942] block leading-none">
                            89.4%
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 block pt-1">
                            92% Target Wilayah
                        </span>
                    </div>
                </div>

                {/* Middle Analysis Split Section (2 Columns Grid) */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 pt-2">
                    {/* Column 1: Gambaran Epidemiologis (Histogram Age Groups) */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
                        <h3 className="text-base font-black text-[#0F2942]">Gambaran Epidemiologis</h3>

                        {/* Age Groups Histogram Bar Chart */}
                        <div className="h-52 w-full bg-slate-50/70 rounded-xl border border-slate-100 p-4 flex flex-col justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">
                                Patient Age Distribution at Screening (%)
                            </span>

                            <div className="flex items-end justify-between gap-2 h-36 pt-2">
                                {[
                                    { age: '<19', val: 8 },
                                    { age: '20-24', val: 27 },
                                    { age: '25-29', val: 35 },
                                    { age: '30-34', val: 18 },
                                    { age: '35-39', val: 12 },
                                    { age: '40-44', val: 7 },
                                    { age: '45-54', val: 5 },
                                    { age: '>55', val: 4 },
                                ].map((bar) => (
                                    <div key={bar.age} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                        <span className="text-[9px] font-black text-slate-700">{bar.val}%</span>
                                        <div
                                            className={`w-full rounded-t-md transition-all ${
                                                bar.val >= 25 ? 'bg-red-600' : 'bg-red-400/80'
                                            }`}
                                            style={{ height: `${bar.val * 2.2}%` }}
                                        />
                                        <span className="text-[9px] font-bold text-slate-500 mt-1">{bar.age}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-[11px] italic font-medium text-slate-500 text-center">
                            Gbr 1: Tren deteksi baru berdasarkan kelompok umur (Kabupaten Jember).
                        </p>
                    </div>

                    {/* Column 2: Kaskade Perawatan (95-95-95 Progress Bars) (Matching Laporan_dinkes.png) */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-5">
                        <h3 className="text-base font-black text-[#0F2942]">Kaskade Perawatan (95-95-95)</h3>

                        <div className="space-y-6 pt-2">
                            {/* Bar 1 */}
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-slate-800">Orang yang mengetahui status</span>
                                    <span className="text-[#0F2942] font-black">92%</span>
                                </div>
                                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#0F2942] rounded-full" style={{ width: '92%' }} />
                                </div>
                            </div>

                            {/* Bar 2 */}
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-slate-800">Dalam pengobatan ART</span>
                                    <span className="text-[#0F2942] font-black">84%</span>
                                </div>
                                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#0F2942] rounded-full" style={{ width: '84%' }} />
                                </div>
                            </div>

                            {/* Bar 3 */}
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-slate-800">Tertekan secara viral</span>
                                    <span className="text-[#0F2942] font-black">71%</span>
                                </div>
                                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#0F2942] rounded-full" style={{ width: '71%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Table: Rincian Fasilitas (Kasus Aktif) (Matching Laporan_dinkes.png) */}
                <div className="space-y-3 pt-2">
                    <h3 className="text-base font-black text-[#0F2942]">Rincian Fasilitas (Kasus Aktif)</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                                <tr>
                                    <th className="px-5 py-3.5">FASILITAS KESEHATAN</th>
                                    <th className="px-5 py-3.5">KASUS AKTIF</th>
                                    <th className="px-5 py-3.5">DALAM ART</th>
                                    <th className="px-5 py-3.5">LTFU*</th>
                                    <th className="px-5 py-3.5 text-center">TINGKAT RISIKO</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-medium">
                                {facilityCases.map((row) => (
                                    <tr key={row.name} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="px-5 py-4 font-black text-slate-900">{row.name}</td>
                                        <td className="px-5 py-4 text-slate-800 font-bold">{row.activeCases}</td>
                                        <td className="px-5 py-4 font-bold text-emerald-600">{row.artCount}</td>
                                        <td className="px-5 py-4 font-bold text-red-600">{row.ltfu}</td>
                                        <td className="px-5 py-4 text-center">
                                            {row.riskStatus === 'STABIL' && (
                                                <span className="inline-block rounded-md bg-[#16A34A] px-3 py-1 text-[10px] font-black text-white uppercase">
                                                    STABIL
                                                </span>
                                            )}
                                            {row.riskStatus === 'RISIKO TINGGI' && (
                                                <span className="inline-block rounded-md bg-[#DC2626] px-3 py-1 text-[10px] font-black text-white uppercase">
                                                    RISIKO TINGGI
                                                </span>
                                            )}
                                            {row.riskStatus === 'PERINGATAN' && (
                                                <span className="inline-block rounded-md bg-[#D97706] px-3 py-1 text-[10px] font-black text-white uppercase">
                                                    PERINGATAN
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="text-[11px] italic font-semibold text-slate-400 text-right">
                        * LTFU: Putus Berobat (Pasien tidak melakukan kunjungan klinis &gt;3 bulan)
                    </p>
                </div>

                {/* Report Footer Bar (Matching Laporan_dinkes.png) */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-slate-100 text-xs font-bold text-slate-600">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5 text-slate-700">
                            <ShieldCheck className="h-4 w-4 text-[#0284C7]" />
                            Integritas data terverifikasi
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-700">
                            <ShieldCheck className="h-4 w-4 text-emerald-600" />
                            Sesuai privasi/HIPAA
                        </span>
                    </div>

                    <span className="text-slate-400 font-semibold">Halaman 1 dari 12</span>
                </div>
            </div>
        </div>
    );
}
