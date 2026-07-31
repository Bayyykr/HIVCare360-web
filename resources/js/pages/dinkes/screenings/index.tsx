import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    TrendingUp,
    Download,
    Filter,
    BarChart2,
    Award,
    AlertCircle,
    CheckCircle2,
    Plus,
    ChevronDown,
    Search,
} from 'lucide-react';

export default function ScreeningTrackerPage() {
    const [selectedDistrict, setSelectedDistrict] = useState('Semua Kecamatan');

    // Table Data (Matching Skrining_dinkes.png)
    const regionalScreenings = [
        {
            kecamatan: 'Kaliwates',
            puskesmas: 'Puskesmas Kaliwates',
            target: 1200,
            realisasi: 1178,
            progres: 98.1,
            status: 'STABIL',
        },
        {
            kecamatan: 'Sumbersari',
            puskesmas: 'Gladak Pakem',
            target: 1500,
            realisasi: 1417,
            progres: 94.4,
            status: 'STABIL',
        },
        {
            kecamatan: 'Sukorambi',
            puskesmas: 'Sukorambi Pusat',
            target: 800,
            realisasi: 257,
            progres: 32.1,
            status: 'RISIKO TINGGI',
        },
        {
            kecamatan: 'Patrang',
            puskesmas: 'Puskesmas Patrang',
            target: 2100,
            realisasi: 877,
            progres: 41.7,
            status: 'RISIKO TINGGI',
        },
        {
            kecamatan: 'Ajung',
            puskesmas: 'Puskesmas Ajung',
            target: 950,
            realisasi: 720,
            progres: 75.8,
            status: 'PERINGATAN',
        },
    ];

    return (
        <div className="space-y-6 pb-20 relative">
            <Head title="Pelacak Skrining Wilayah - Dinkes HIVCare360" />

            {/* Page Header (Matching Skrining_dinkes.png) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2.5xl font-black text-[#0F2942] tracking-tight">
                        Monitoring Skrining
                    </h1>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                        Pelacakan waktu nyata performa skrining HIV di seluruh Kabupaten Jember.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <button
                        onClick={() => alert('Filter Berdasarkan Tanggal')}
                        className="flex items-center gap-2 rounded-xl border border-[#BAE6FD] bg-[#E0F2FE] px-5 py-3 text-xs font-bold text-[#0F2942] hover:bg-sky-100 transition-all cursor-pointer shadow-2xs"
                    >
                        <Filter className="h-4 w-4 text-[#0F2942]" />
                        <span>Filter Berdasarkan Tanggal</span>
                    </button>

                    <button
                        onClick={() => alert('Ekspor Laporan PDF Skrining Regional')}
                        className="flex items-center gap-2 rounded-xl bg-[#0F2942] px-5 py-3 text-xs font-black text-white hover:bg-[#0284C7] transition-all shadow-md cursor-pointer"
                    >
                        <Download className="h-4 w-4" />
                        <span>Ekspor PDF</span>
                    </button>
                </div>
            </div>

            {/* Top Analytics Row (3 Columns Grid) (Matching Skrining_dinkes.png) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Column 1: Card Tren Skrining Bulanan */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-black text-[#0F2942]">Tren Skrining Bulanan</h3>
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                    </div>

                    {/* Bar Chart Representation */}
                    <div className="h-40 w-full bg-slate-50/70 rounded-xl border border-slate-100 p-4 flex items-end justify-between gap-3">
                        {[
                            { month: 'Jan', val: 40, isPeak: false },
                            { month: 'Feb', val: 65, isPeak: false },
                            { month: 'Mar', val: 50, isPeak: false },
                            { month: 'Apr', val: 75, isPeak: false },
                            { month: 'Mei', val: 100, isPeak: true },
                            { month: 'Jun', val: 35, isPeak: false },
                        ].map((bar) => (
                            <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end relative">
                                {bar.isPeak && (
                                    <span className="text-[10px] font-black text-[#0F2942] mb-0.5">Mei</span>
                                )}
                                <div
                                    className={`w-full rounded-t-md transition-all ${
                                        bar.isPeak ? 'bg-[#0F2942]' : 'bg-slate-300'
                                    }`}
                                    style={{ height: `${bar.val}%` }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>12% Peningkatan dari bulan lalu</span>
                    </div>
                </div>

                {/* Column 2: Card Realisasi Tahunan */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-black text-[#0F2942]">Realisasi Tahunan</h3>
                        <BarChart2 className="h-4 w-4 text-slate-400" />
                    </div>

                    {/* SVG Donut Gauge Ring */}
                    <div className="flex items-center justify-center py-2">
                        <div className="relative h-36 w-36 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                {/* Track Ring */}
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#E2E8F0"
                                    strokeWidth="3.8"
                                />
                                {/* Progress Donut */}
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#0F2942"
                                    strokeWidth="3.8"
                                    strokeDasharray="72, 100"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute text-center space-y-0.5">
                                <span className="text-2xl font-black text-[#0F2942] block leading-none">
                                    72%
                                </span>
                                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest block">
                                    TARGET
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100">
                        <span>Realisasi: <strong className="text-slate-900 font-bold">45.203</strong></span>
                        <span>Target: <strong className="text-slate-900 font-bold">62.000</strong></span>
                    </div>
                </div>

                {/* Column 3: Card Peringkat Puskesmas */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs flex flex-col justify-between space-y-4">
                    <h3 className="text-base font-black text-[#0F2942]">Peringkat Puskesmas</h3>

                    <div className="space-y-3.5 text-xs">
                        {/* Performa Terbaik */}
                        <div className="space-y-2">
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider block">
                                PERFORMA TERBAIK
                            </span>
                            <div className="rounded-xl border-l-4 border-l-emerald-500 bg-emerald-50/70 p-3 shadow-2xs flex items-center justify-between">
                                <div>
                                    <h4 className="font-extrabold text-slate-900">Puskesmas Kaliwates</h4>
                                    <span className="text-[11px] font-semibold text-slate-500">98.2% Diskrin</span>
                                </div>
                                <Award className="h-5 w-5 text-emerald-600" />
                            </div>
                            <div className="px-3 flex items-center justify-between">
                                <h4 className="font-bold text-slate-800">Puskesmas Sumbersari</h4>
                                <span className="text-[11px] font-medium text-slate-500">94.5% Diskrin</span>
                            </div>
                        </div>

                        {/* Perlu Perhatian */}
                        <div className="space-y-2 pt-1 border-t border-slate-100">
                            <span className="text-[10px] font-black text-red-600 uppercase tracking-wider block">
                                PERLU PERHATIAN
                            </span>
                            <div className="rounded-xl border-l-4 border-l-red-500 bg-red-50/70 p-3 shadow-2xs flex items-center justify-between">
                                <div>
                                    <h4 className="font-extrabold text-slate-900">Puskesmas Sukorambi</h4>
                                    <span className="text-[11px] font-semibold text-red-600">32.1% Diskrin</span>
                                </div>
                                <AlertCircle className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="px-3 flex items-center justify-between">
                                <h4 className="font-bold text-slate-800">Puskesmas Patrang</h4>
                                <span className="text-[11px] font-medium text-slate-500">41.8% Diskrin</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => alert('Melihat seluruh peringkat 50 Puskesmas')}
                        className="w-full rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-[#0F2942] hover:bg-slate-50 transition-colors text-center"
                    >
                        Lihat Peringkat Lengkap
                    </button>
                </div>
            </div>

            {/* Bottom Section: Tabel Rincian Wilayah (Matching Skrining_dinkes.png) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs space-y-4 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
                    <div>
                        <h3 className="text-base font-black text-[#0F2942]">Rincian Wilayah</h3>
                        <p className="text-xs text-slate-500 font-semibold mt-0.5">
                            Metrik performa komprehensif untuk seluruh klinik lokal.
                        </p>
                    </div>

                    <div className="relative">
                        <select
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            className="rounded-xl border border-slate-200 bg-slate-50 py-2 px-4 text-xs font-bold text-slate-800 focus:bg-white focus:outline-none"
                        >
                            <option value="Semua Kecamatan">Semua Kecamatan</option>
                            <option value="Kaliwates">Kaliwates</option>
                            <option value="Sumbersari">Sumbersari</option>
                            <option value="Sukorambi">Sukorambi</option>
                            <option value="Patrang">Patrang</option>
                            <option value="Ajung">Ajung</option>
                        </select>
                    </div>
                </div>

                {/* Table Data */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-5 py-3.5">Kecamatan</th>
                                <th className="px-5 py-3.5">Puskesmas</th>
                                <th className="px-5 py-3.5">Target</th>
                                <th className="px-5 py-3.5">Realisasi</th>
                                <th className="px-5 py-3.5">Progres</th>
                                <th className="px-5 py-3.5">Status Risiko</th>
                                <th className="px-5 py-3.5 text-center">Tindakan</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            {regionalScreenings.map((row) => (
                                <tr key={row.puskesmas} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-5 py-4 font-bold text-slate-800">{row.kecamatan}</td>
                                    <td className="px-5 py-4">
                                        <a href="#" className="font-extrabold text-[#0284C7] hover:underline">
                                            {row.puskesmas}
                                        </a>
                                    </td>
                                    <td className="px-5 py-4 text-slate-700">{row.target.toLocaleString()}</td>
                                    <td className="px-5 py-4 text-slate-700 font-semibold">{row.realisasi.toLocaleString()}</td>
                                    <td className="px-5 py-4 min-w-[140px]">
                                        <div className="space-y-1">
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${
                                                        row.progres >= 85
                                                            ? 'bg-emerald-600'
                                                            : row.progres >= 60
                                                            ? 'bg-amber-500'
                                                            : 'bg-red-600'
                                                    }`}
                                                    style={{ width: `${row.progres}%` }}
                                                />
                                            </div>
                                            <span className="text-[10px] font-extrabold text-slate-500 block">
                                                {row.progres}%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        {row.status === 'STABIL' && (
                                            <span className="inline-block rounded-md bg-[#16A34A] px-3 py-1 text-[10px] font-black text-white uppercase">
                                                STABIL
                                            </span>
                                        )}
                                        {row.status === 'RISIKO TINGGI' && (
                                            <span className="inline-block rounded-md bg-[#DC2626] px-3 py-1 text-[10px] font-black text-white uppercase">
                                                RISIKO TINGGI
                                            </span>
                                        )}
                                        {row.status === 'PERINGATAN' && (
                                            <span className="inline-block rounded-md bg-[#D97706] px-3 py-1 text-[10px] font-black text-white uppercase">
                                                PERINGATAN
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-5 py-4 text-center">
                                        <button
                                            onClick={() => alert(`Detail Skrining Puskesmas: ${row.puskesmas}`)}
                                            className="text-xs font-black text-[#0284C7] hover:underline cursor-pointer"
                                        >
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                    <span>Menampilkan 5 dari 32 fasilitas</span>
                    <div className="flex items-center gap-1">
                        <button className="h-7 w-7 rounded-lg bg-[#0F2942] text-white font-bold flex items-center justify-center">1</button>
                        <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
                        <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">3</button>
                    </div>
                </div>
            </div>

            {/* Bottom Right Floating Action Button */}
            <button className="fixed bottom-6 right-6 h-12 w-12 rounded-2xl bg-[#0F2942] text-white shadow-xl hover:bg-[#0284C7] transition-all flex items-center justify-center z-40 cursor-pointer">
                <Plus className="h-6 w-6" />
            </button>
        </div>
    );
}
