import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    Building2,
    Filter,
    Download,
    Users,
    CheckCircle2,
    AlertTriangle,
    PlusSquare,
    TrendingUp,
    MapPin,
    ArrowUpRight,
    Activity,
    Shield,
    Check,
} from 'lucide-react';

export default function FacilityMonitoringPage() {
    // Selected Facility State
    const [selectedFacility, setSelectedFacility] = useState('Puskesmas Rambipuji');

    // Facilities List (Matching Fasilitas_dinkes.png)
    const facilityList = [
        { name: 'Puskesmas Rambipuji', status: 'STABIL', patients: 482, artAdherence: 94, doctor: 'Dr. Siti Aminah', riskScore: 'STABIL (94/100)' },
        { name: 'Puskesmas Sumbersari', status: 'PERINGATAN', patients: 612, artAdherence: 88, doctor: 'Dr. Hendra Wijaya', riskScore: 'PERINGATAN (78/100)' },
        { name: 'Puskesmas Patrang', status: 'STABIL', patients: 325, artAdherence: 96, doctor: 'Dr. Amelia', riskScore: 'STABIL (96/100)' },
        { name: 'Puskesmas Kaliwates', status: 'RISIKO TINGGI', patients: 554, artAdherence: 72, doctor: 'dr. Bambang Sp.PD', riskScore: 'RISIKO TINGGI (52/100)' },
        { name: 'Puskesmas Arjasa', status: 'STABIL', patients: 198, artAdherence: 91, doctor: 'Dr. Faisal', riskScore: 'STABIL (91/100)' },
        { name: 'Puskesmas Ajung', status: 'STABIL', patients: 243, artAdherence: 93, doctor: 'Ns. Maya', riskScore: 'STABIL (93/100)' },
    ];

    const currentFacilityData = facilityList.find((f) => f.name === selectedFacility) || facilityList[0];

    return (
        <div className="space-y-6 pb-20">
            <Head title="Monitoring Fasilitas Kesehatan - Dinkes HIVCare360" />

            {/* Page Header (Matching Fasilitas_dinkes.png) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2.5xl font-black text-[#0F2942] tracking-tight">
                        Monitoring Fasilitas Kesehatan
                    </h1>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                        Metrik kinerja waktu nyata untuk fasilitas kesehatan kabupaten Jember
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => alert('Filter Berdasarkan Wilayah')}
                        className="flex items-center gap-2 rounded-xl border border-[#0F2942] bg-white px-5 py-2.5 text-xs font-black text-[#0F2942] hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
                    >
                        <Filter className="h-4 w-4" />
                        <span>Filter Wilayah</span>
                    </button>

                    <button
                        onClick={() => alert('Ekspor Laporan Fasilitas CSV')}
                        className="flex items-center gap-2 rounded-xl bg-[#0F2942] px-5 py-2.5 text-xs font-black text-white hover:bg-[#0284C7] transition-all shadow-md cursor-pointer"
                    >
                        <Download className="h-4 w-4" />
                        <span>Ekspor CSV</span>
                    </button>
                </div>
            </div>

            {/* Main Content Split Layout (Left 1/3 vs Right 2/3) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Left Column (1/3 Width): Facilities Sidebar List (Matching Fasilitas_dinkes.png) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-black text-[#0F2942]">Fasilitas (32)</h3>
                        <Filter className="h-4 w-4 text-slate-400 cursor-pointer" />
                    </div>

                    <div className="space-y-3">
                        {facilityList.map((item) => {
                            const isSelected = item.name === selectedFacility;
                            return (
                                <div
                                    key={item.name}
                                    onClick={() => setSelectedFacility(item.name)}
                                    className={`rounded-xl p-4 transition-all cursor-pointer border ${
                                        isSelected
                                            ? 'border-2 border-[#0284C7] bg-[#E0F2FE]/40 shadow-xs'
                                            : 'border-slate-200 bg-white hover:bg-slate-50'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-black text-[#0F2942] text-sm">{item.name}</h4>
                                        {item.status === 'STABIL' && (
                                            <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[9px] font-black text-emerald-800 uppercase">
                                                STABIL
                                            </span>
                                        )}
                                        {item.status === 'PERINGATAN' && (
                                            <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[9px] font-black text-amber-800 uppercase">
                                                PERINGATAN
                                            </span>
                                        )}
                                        {item.status === 'RISIKO TINGGI' && (
                                            <span className="rounded-md bg-red-100 px-2 py-0.5 text-[9px] font-black text-red-800 uppercase">
                                                RISIKO TINGGI
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mt-2">
                                        <span className="flex items-center gap-1">
                                            <Users className="h-3.5 w-3.5 text-slate-400" />
                                            {item.patients} Pasien
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                                            {item.artAdherence}% ART
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column (2/3 Width): Facility Details Panel (Matching Fasilitas_dinkes.png) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Top Metadata Row (2 Cards) */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* Card Left: Facility Details Metadata */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-3.5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7] shrink-0 border border-sky-200">
                                    <PlusSquare className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-[#0F2942]">{currentFacilityData.name}</h3>
                                    <span className="text-xs text-slate-400 font-semibold block">
                                        Kec. {currentFacilityData.name.replace('Puskesmas ', '')}, Kabupaten Jember
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-1.5 text-xs pt-1">
                                <div className="flex justify-between">
                                    <span className="text-slate-500 font-medium">Kepala Fasilitas:</span>
                                    <span className="font-extrabold text-slate-900">{currentFacilityData.doctor}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500 font-medium">Penilaian Terakhir:</span>
                                    <span className="font-bold text-slate-800">12 Okt 2023</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500 font-medium">Peringkat Risiko:</span>
                                    <span className="font-black text-emerald-600">{currentFacilityData.riskScore}</span>
                                </div>
                            </div>
                        </div>

                        {/* Card Right: Konteks Lokasi Mini Map Card */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs relative flex flex-col justify-between overflow-hidden bg-[#CBE6F3]/50">
                            <div className="relative h-28 w-full rounded-xl bg-[#CBE6F3] overflow-hidden border border-slate-200 flex items-center justify-center">
                                <svg className="w-full h-full object-cover" viewBox="0 0 300 120">
                                    <path d="M 0,60 Q 150,30 300,70" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                    <circle cx="150" cy="60" r="10" fill="#DC2626" stroke="#FFFFFF" strokeWidth="3" />
                                </svg>
                                <MapPin className="absolute h-8 w-8 text-red-600 fill-red-600 animate-bounce" />
                            </div>

                            <div className="pt-2 text-right">
                                <span className="inline-block rounded-lg bg-white/90 backdrop-blur-xs px-3 py-1 text-[10px] font-black text-[#0F2942] shadow-2xs border border-slate-200 uppercase tracking-wider">
                                    KONTEKS LOKASI
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 6 Operational Metrics Grid (Matching Fasilitas_dinkes.png) */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs">
                        {/* Metric 1 */}
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">TOTAL PASIEN</span>
                            <span className="text-2.5xl font-black text-[#0F2942] block leading-none">{currentFacilityData.patients}</span>
                            <span className="text-[11px] font-bold text-emerald-600 block pt-1">↗ +12% vs thn lalu</span>
                        </div>

                        {/* Metric 2 */}
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">PASIEN ART</span>
                            <span className="text-2.5xl font-black text-[#0F2942] block leading-none">453</span>
                            <span className="text-[11px] font-semibold text-slate-500 block pt-1">94% Cakupan pengobatan</span>
                        </div>

                        {/* Metric 3 */}
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">PASIEN LTFU</span>
                            <span className="text-2.5xl font-black text-[#0F2942] block leading-none">8</span>
                            <span className="text-[11px] font-extrabold text-red-600 block pt-1">⚠️ Tindakan Diperlukan</span>
                        </div>

                        {/* Metric 4 */}
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">SKRINING BULANAN</span>
                            <span className="text-2.5xl font-black text-[#0F2942] block leading-none">124</span>
                            <span className="text-[11px] font-semibold text-slate-500 block pt-1">Target: 150/bln</span>
                        </div>

                        {/* Metric 5 */}
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">KEPATUHAN ART</span>
                            <span className="text-2.5xl font-black text-emerald-600 block leading-none">{currentFacilityData.artAdherence}.2%</span>
                            <span className="text-[11px] font-bold text-emerald-600 block pt-1">Rentang optimal</span>
                        </div>

                        {/* Metric 6 */}
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1">
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">RUJUKAN</span>
                            <span className="text-2.5xl font-black text-[#0F2942] block leading-none">15</span>
                            <span className="text-[11px] font-semibold text-slate-500 block pt-1">Ke RSUD Dr. Soebandi</span>
                        </div>
                    </div>

                    {/* Chart Card: Tren Skrining & Retensi ART (Matching Fasilitas_dinkes.png) */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <div>
                                <h3 className="text-base font-black text-[#0F2942]">Tren Skrining &amp; Retensi ART</h3>
                                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                                    Perbandingan data selama 12 bulan terakhir
                                </p>
                            </div>

                            <div className="flex items-center gap-4 text-xs font-bold">
                                <div className="flex items-center gap-1.5 text-slate-700">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#0F2942]" />
                                    <span>Skrining</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-700">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                                    <span>Retensi</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-44 w-full bg-slate-50/70 rounded-xl border border-slate-100 p-4 flex items-end justify-between gap-6">
                            {['JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV'].map((month, idx) => (
                                <div key={month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                    <div className="w-full bg-[#0F2942]/20 rounded-t-md h-full relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 w-1/2 bg-[#0F2942] rounded-t-md" style={{ height: `${60 + idx * 5}%` }} />
                                        <div className="absolute bottom-0 right-0 w-1/2 bg-emerald-600 rounded-t-md" style={{ height: `${70 + idx * 4}%` }} />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 mt-1">{month}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Feed Log: Peringatan Fasilitas Terbaru (Matching Fasilitas_dinkes.png) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="text-base font-black text-[#0F2942]">Peringatan Fasilitas Terbaru</h3>
                    <button onClick={() => alert('Melihat seluruh log peringatan fasilitas')} className="text-xs font-bold text-[#0284C7] hover:underline">
                        Lihat Semua Peringatan
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                            <tr>
                                <th className="px-5 py-3.5">KEPARAHAN</th>
                                <th className="px-5 py-3.5">FASILITAS</th>
                                <th className="px-5 py-3.5">JENIS PERINGATAN</th>
                                <th className="px-5 py-3.5">TANGGAL</th>
                                <th className="px-5 py-3.5 text-center">TINDAKAN</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="px-5 py-4">
                                    <span className="inline-block rounded-md bg-[#DC2626] px-3 py-1 text-[10px] font-black text-white uppercase shadow-2xs">
                                        TINGGI
                                    </span>
                                </td>
                                <td className="px-5 py-4 font-black text-slate-900">Puskesmas Kaliwates</td>
                                <td className="px-5 py-4 text-slate-800 font-semibold">Stok Suplai ART Rendah (tersisa 10%)</td>
                                <td className="px-5 py-4 text-slate-600">24 Okt 2023</td>
                                <td className="px-5 py-4 text-center">
                                    <button onClick={() => alert('Konfirmasi Tindakan Peringatan Stok')} className="text-xs font-black text-[#0284C7] hover:underline cursor-pointer">
                                        Konfirmasi
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="px-5 py-4">
                                    <span className="inline-block rounded-md bg-[#D97706] px-3 py-1 text-[10px] font-black text-white uppercase shadow-2xs">
                                        SEDANG
                                    </span>
                                </td>
                                <td className="px-5 py-4 font-black text-slate-900">Puskesmas Sumbersari</td>
                                <td className="px-5 py-4 text-slate-800 font-semibold">3 Pasien LTFU teridentifikasi dalam 48 jam terakhir</td>
                                <td className="px-5 py-4 text-slate-600">23 Okt 2023</td>
                                <td className="px-5 py-4 text-center">
                                    <button onClick={() => alert('Konfirmasi Tindakan LTFU')} className="text-xs font-black text-[#0284C7] hover:underline cursor-pointer">
                                        Konfirmasi
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="px-5 py-4">
                                    <span className="inline-block rounded-md bg-[#16A34A] px-3 py-1 text-[10px] font-black text-white uppercase shadow-2xs">
                                        RENDAH
                                    </span>
                                </td>
                                <td className="px-5 py-4 font-black text-slate-900">Puskesmas Rambipuji</td>
                                <td className="px-5 py-4 text-slate-800 font-semibold">Penyelesaian peninjauan Q3 yang sukses</td>
                                <td className="px-5 py-4 text-slate-600">22 Okt 2023</td>
                                <td className="px-5 py-4 text-center">
                                    <button onClick={() => alert('Lihat Detail Peninjauan Q3')} className="text-xs font-black text-[#0284C7] hover:underline cursor-pointer">
                                        Lihat
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
