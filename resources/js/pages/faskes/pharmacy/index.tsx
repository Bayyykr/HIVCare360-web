import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    Users,
    CheckCircle2,
    AlertTriangle,
    TrendingUp,
    Plus,
    Edit3,
    Filter,
    Download,
    Search,
    Package,
    Pill,
    X,
    Save,
    RotateCcw,
} from 'lucide-react';

export default function PharmacyInventoryPage() {
    // Modals state
    const [isRecordDispenseModalOpen, setIsRecordDispenseModalOpen] = useState(false);
    const [isUpdateStockModalOpen, setIsUpdateStockModalOpen] = useState(false);

    // Form inputs state
    const [patientSearch, setPatientSearch] = useState('');
    const [selectedRegimen, setSelectedRegimen] = useState('TLD (TDF/3TC/DTG)');
    const [quantityDispensed, setQuantityDispensed] = useState('30');
    const [dispenseDate, setDispenseDate] = useState('2026-07-31');

    const [stockRegimen, setStockRegimen] = useState('TLE (TDF/3TC/EFV)');
    const [newStockAmount, setNewStockAmount] = useState('500');
    const [stockUpdateReason, setStockUpdateReason] = useState('Penerimaan Distribusi Dinkes');

    // Monitoring Patients Data (Matching Pengobatan ART.png)
    const [patientMonitoring, setPatientMonitoring] = useState([
        {
            id: '00293481',
            initials: 'BP',
            name: 'Budi Pratama',
            regimen: 'TLD (Daily)',
            startDate: '12 Jan 2023',
            adherence: 98,
            nextRefill: '15 Okt 2024',
            status: 'Lancar',
        },
        {
            id: '00311244',
            initials: 'AS',
            name: 'Ani Sulastri',
            regimen: 'TLD (Daily)',
            startDate: '05 Mar 2024',
            adherence: 72,
            nextRefill: 'Terlewat (12 Hari)',
            status: 'Mangkir',
        },
        {
            id: '00422119',
            initials: 'RK',
            name: 'Rudi Kurnia',
            regimen: 'TLE (Lini 1)',
            startDate: '20 Agu 2022',
            adherence: 95,
            nextRefill: '02 Okt 2024',
            status: 'Lancar',
        },
        {
            id: '00551102',
            initials: 'DW',
            name: 'Dewi Wijaya',
            regimen: 'TLD (Daily)',
            startDate: '11 Jun 2024',
            adherence: 99,
            nextRefill: '18 Okt 2024',
            status: 'Lancar',
        },
        {
            id: '00122998',
            initials: 'HS',
            name: 'Hendro Susanto',
            regimen: 'ZDV/3TC+NVP',
            startDate: '30 Sep 2023',
            adherence: 85,
            nextRefill: '12 Okt 2024',
            status: 'Lancar',
        },
    ]);

    const handleDispenseSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('✅ Data Pengambilan Obat Berhasil Dicatat & Stok Berhasil Dipotong!');
        setIsRecordDispenseModalOpen(false);
    };

    const handleStockUpdateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('✅ Stok Inventoris Apotek Berhasil Diperbarui!');
        setIsUpdateStockModalOpen(false);
    };

    return (
        <div className="space-y-6 pb-20">
            <Head title="Farmasi & Inventory Stok ART - HIVCare360" />

            {/* Page Header (Matching Pengobatan ART.png) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-black text-[#0F2942] tracking-tight">
                        Manajemen Pengobatan ART
                    </h1>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                        Monitoring kepatuhan pasien dan ketersediaan stok antiretroviral harian.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <button
                        onClick={() => setIsRecordDispenseModalOpen(true)}
                        className="flex items-center gap-2 rounded-xl bg-[#0F2942] px-5 py-3 text-xs font-black text-white shadow-md hover:bg-[#0284C7] transition-all cursor-pointer"
                    >
                        <Plus className="h-4 w-4" />
                        <span>INPUT PENGAMBILAN OBAT</span>
                    </button>
                    <button
                        onClick={() => setIsUpdateStockModalOpen(true)}
                        className="flex items-center gap-2 rounded-xl border border-[#0F2942] bg-white px-5 py-3 text-xs font-black text-[#0F2942] hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
                    >
                        <Edit3 className="h-4 w-4" />
                        <span>UPDATE STOK OBAT</span>
                    </button>
                </div>
            </div>

            {/* 4 Top Metric Cards Grid (Matching Pengobatan ART.png) */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {/* Card 1: PASIEN ART AKTIF */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs flex justify-between items-start">
                    <div className="space-y-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                            <Users className="h-5 w-5" />
                        </div>
                        <div>
                            <span className="text-3.5xl font-black text-[#0F2942] block leading-none">
                                1,284
                            </span>
                            <span className="text-xs text-emerald-600 font-bold block mt-1">
                                ↗ +12% vs bulan lalu
                            </span>
                        </div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                        PASIEN ART AKTIF
                    </span>
                </div>

                {/* Card 2: TINGKAT KEPATUHAN */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs flex justify-between items-start">
                    <div className="space-y-3 w-full">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                            <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                            <span className="text-3.5xl font-black text-[#0F2942] block leading-none">
                                94.2%
                            </span>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-2">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '94.2%' }} />
                            </div>
                        </div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase shrink-0">
                        TINGKAT KEPATUHAN
                    </span>
                </div>

                {/* Card 3: STATUS FARMASI */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs flex justify-between items-start">
                    <div className="space-y-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                            <AlertTriangle className="h-5 w-5" />
                        </div>
                        <div>
                            <span className="text-xl font-black text-[#0F2942] block leading-snug">
                                Stok Menipis
                            </span>
                            <span className="text-xs text-red-600 font-bold block mt-1">
                                2 Regimen (TLD, NVP)
                            </span>
                        </div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase shrink-0">
                        STATUS FARMASI
                    </span>
                </div>

                {/* Card 4: TREN KEPATUHAN (6 BLN) */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs flex justify-between items-start">
                    <div className="space-y-3 w-full">
                        <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">
                            TREN KEPATUHAN (6 BLN)
                        </span>
                        <div className="h-12 w-full flex items-end justify-between gap-1.5 pt-2">
                            <div className="h-6 w-full bg-sky-200 rounded-t" />
                            <div className="h-8 w-full bg-sky-300 rounded-t" />
                            <div className="h-9 w-full bg-sky-400 rounded-t" />
                            <div className="h-10 w-full bg-[#0284C7] rounded-t" />
                            <div className="h-11 w-full bg-[#0F2942] rounded-t" />
                            <div className="h-12 w-full bg-[#0F2942] rounded-t" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Split Section (Matching Pengobatan ART.png) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Left Column (1/3 Width): Inventory ART */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-black text-[#0F2942]">Inventory ART</h3>
                        <button
                            onClick={() => alert('Detail seluruh stok apotek')}
                            className="text-xs font-bold text-[#0284C7] hover:underline"
                        >
                            LIHAT DETAIL
                        </button>
                    </div>

                    <div className="space-y-3.5 text-xs">
                        {/* Item 1: TLD */}
                        <div className="rounded-xl border border-slate-200 bg-white p-3.5 border-l-4 border-l-emerald-500 shadow-2xs flex items-center justify-between">
                            <div className="space-y-0.5">
                                <h4 className="font-black text-slate-900 text-sm">TLD (TDF/3TC/DTG)</h4>
                                <p className="text-[11px] text-slate-500 font-medium">Dewasa - Fixed Dose</p>
                            </div>
                            <div className="text-right space-y-1">
                                <div className="font-black text-[#0F2942] text-sm">1,420 Btl</div>
                                <span className="inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-[9px] font-black text-emerald-800 uppercase">
                                    STABIL
                                </span>
                            </div>
                        </div>

                        {/* Item 2: TLE (Kritis) */}
                        <div className="rounded-xl border border-slate-200 bg-white p-3.5 border-l-4 border-l-red-500 shadow-2xs flex items-center justify-between">
                            <div className="space-y-0.5">
                                <h4 className="font-black text-slate-900 text-sm">TLE (TDF/3TC/EFV)</h4>
                                <p className="text-[11px] text-slate-500 font-medium">Dewasa - Lini Pertama</p>
                            </div>
                            <div className="text-right space-y-1">
                                <div className="font-black text-red-600 text-sm">124 Btl</div>
                                <span className="inline-block rounded-md bg-red-100 px-2 py-0.5 text-[9px] font-black text-red-800 uppercase">
                                    KRITIS
                                </span>
                            </div>
                        </div>

                        {/* Item 3: ZDV/3TC + NVP (Re-order) */}
                        <div className="rounded-xl border border-slate-200 bg-white p-3.5 border-l-4 border-l-[#0284C7] shadow-2xs flex items-center justify-between">
                            <div className="space-y-0.5">
                                <h4 className="font-black text-slate-900 text-sm">ZDV/3TC + NVP</h4>
                                <p className="text-[11px] text-slate-500 font-medium">Pediatrik - Sirup</p>
                            </div>
                            <div className="text-right space-y-1">
                                <div className="font-black text-[#0284C7] text-sm">45 Unit</div>
                                <span className="inline-block rounded-md bg-sky-100 px-2 py-0.5 text-[9px] font-black text-sky-800 uppercase">
                                    RE-ORDER
                                </span>
                            </div>
                        </div>

                        {/* Item 4: Lopinavir/Ritonavir */}
                        <div className="rounded-xl border border-slate-200 bg-white p-3.5 border-l-4 border-l-emerald-500 shadow-2xs flex items-center justify-between">
                            <div className="space-y-0.5">
                                <h4 className="font-black text-slate-900 text-sm">Lopinavir/Ritonavir</h4>
                                <p className="text-[11px] text-slate-500 font-medium">Lini Kedua - Tablet</p>
                            </div>
                            <div className="text-right space-y-1">
                                <div className="font-black text-[#0F2942] text-sm">850 Btl</div>
                                <span className="inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-[9px] font-black text-emerald-800 uppercase">
                                    STABIL
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (2/3 Width): Monitoring Pasien ART */}
                <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-black text-[#0F2942]">Monitoring Pasien ART</h3>

                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50">
                                <Filter className="h-3.5 w-3.5 text-slate-500" />
                            </button>
                            <button className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50">
                                <Download className="h-3.5 w-3.5 text-slate-500" />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                <tr>
                                    <th className="px-4 py-3.5">PASIEN</th>
                                    <th className="px-4 py-3.5">REGIMEN</th>
                                    <th className="px-4 py-3.5">MULAI ART</th>
                                    <th className="px-4 py-3.5">KEPATUHAN</th>
                                    <th className="px-4 py-3.5">NEXT REFILL</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-medium">
                                {patientMonitoring.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-700 font-extrabold text-xs">
                                                    {item.initials}
                                                </div>
                                                <div>
                                                    <div className="font-extrabold text-slate-900">{item.name}</div>
                                                    <div className="text-[10px] text-slate-400 font-mono">ID: {item.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3.5 font-bold text-slate-800">{item.regimen}</td>
                                        <td className="px-4 py-3.5 text-slate-600">{item.startDate}</td>
                                        <td className="px-4 py-3.5">
                                            <span
                                                className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-black ${
                                                    item.adherence >= 95
                                                        ? 'bg-emerald-100 text-emerald-800'
                                                        : item.adherence >= 80
                                                        ? 'bg-slate-100 text-slate-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {item.adherence}%
                                            </span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            {item.nextRefill.includes('Terlewat') ? (
                                                <span className="font-black text-red-600">
                                                    {item.nextRefill}
                                                </span>
                                            ) : (
                                                <span className="font-bold text-slate-700">{item.nextRefill}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                        <span>Menampilkan 1-5 dari 1,284 pasien aktif</span>
                        <div className="flex items-center gap-1">
                            <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">&lt;</button>
                            <button className="h-7 w-7 rounded-lg bg-[#0F2942] text-white font-bold flex items-center justify-center">1</button>
                            <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
                            <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">3</button>
                            <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">&gt;</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Card: Tren Kepatuhan Bulanan (Matching Pengobatan ART.png) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-base font-black text-[#0F2942]">Tren Kepatuhan Bulanan</h3>
                        <p className="text-xs text-slate-500 font-medium">
                            Rata-rata kepatuhan pasien lintas fasilitas kesehatan (Apr - Sep 2024)
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold">
                        <div className="flex items-center gap-1.5 text-slate-700">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#0F2942]" />
                            <span>Kepatuhan &gt; 95%</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-700">
                            <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
                            <span>Rata-rata Fasilitas</span>
                        </div>
                    </div>
                </div>

                {/* Grouped Double Bar Chart Representation */}
                <div className="h-48 w-full bg-slate-50/70 rounded-xl border border-slate-100 p-5 flex items-end justify-between gap-6">
                    {[
                        { month: 'APR', dark: 70, light: 65 },
                        { month: 'MEI', dark: 75, light: 70 },
                        { month: 'JUN', dark: 85, light: 80 },
                        { month: 'JUL', dark: 90, light: 82 },
                        { month: 'AGU', dark: 92, light: 85 },
                        { month: 'SEP', dark: 95, light: 88 },
                    ].map((bar) => (
                        <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                            <div className="flex items-end gap-1.5 w-full justify-center h-full">
                                <div className="w-4 bg-[#0F2942] rounded-t-md transition-all" style={{ height: `${bar.dark}%` }} />
                                <div className="w-4 bg-sky-200 rounded-t-md transition-all" style={{ height: `${bar.light}%` }} />
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 mt-1">{bar.month}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL 1: INPUT PENGAMBILAN OBAT */}
            {isRecordDispenseModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4 border border-slate-200">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h3 className="text-base font-black text-[#0F2942]">+ Input Pengambilan Obat ART</h3>
                            <button onClick={() => setIsRecordDispenseModalOpen(false)} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleDispenseSubmit} className="space-y-4 text-xs">
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Cari Pasien (Nama / ID)</label>
                                <input type="text" value={patientSearch} onChange={(e) => setPatientSearch(e.target.value)} placeholder="Contoh: Budi Pratama (00293481)" className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Pilih Regimen Obat</label>
                                <select value={selectedRegimen} onChange={(e) => setSelectedRegimen(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold focus:border-[#0284C7] focus:outline-none">
                                    <option value="TLD (TDF/3TC/DTG)">TLD (TDF/3TC/DTG)</option>
                                    <option value="TLE (TDF/3TC/EFV)">TLE (TDF/3TC/EFV)</option>
                                    <option value="ZDV/3TC + NVP">ZDV/3TC + NVP (Pediatrik)</option>
                                    <option value="Lopinavir/Ritonavir">Lopinavir/Ritonavir</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block font-bold text-slate-700 mb-1">Jumlah Botol/Tablet</label>
                                    <input type="number" value={quantityDispensed} onChange={(e) => setQuantityDispensed(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700 mb-1">Tanggal Pengambilan</label>
                                    <input type="date" value={dispenseDate} onChange={(e) => setDispenseDate(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                                <button type="button" onClick={() => setIsRecordDispenseModalOpen(false)} className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50">Batal</button>
                                <button type="submit" className="rounded-xl bg-[#0F2942] px-5 py-2 text-xs font-bold text-white hover:bg-[#0284C7]">Simpan Data</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL 2: UPDATE STOK OBAT */}
            {isUpdateStockModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4 border border-slate-200">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h3 className="text-base font-black text-[#0F2942]">Update Stok Apotek</h3>
                            <button onClick={() => setIsUpdateStockModalOpen(false)} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleStockUpdateSubmit} className="space-y-4 text-xs">
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Regimen Obat</label>
                                <select value={stockRegimen} onChange={(e) => setStockRegimen(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold focus:border-[#0284C7] focus:outline-none">
                                    <option value="TLE (TDF/3TC/EFV)">TLE (TDF/3TC/EFV) - Stok Kritis</option>
                                    <option value="TLD (TDF/3TC/DTG)">TLD (TDF/3TC/DTG)</option>
                                    <option value="ZDV/3TC + NVP">ZDV/3TC + NVP (Re-order)</option>
                                    <option value="Lopinavir/Ritonavir">Lopinavir/Ritonavir</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Jumlah Stok Masuk (Botol)</label>
                                <input type="number" value={newStockAmount} onChange={(e) => setNewStockAmount(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 mb-1">Keterangan Sumber / Alasan</label>
                                <input type="text" value={stockUpdateReason} onChange={(e) => setStockUpdateReason(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-[#0284C7] focus:outline-none" required />
                            </div>
                            <div className="flex justify-end gap-2 pt-2">
                                <button type="button" onClick={() => setIsUpdateStockModalOpen(false)} className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50">Batal</button>
                                <button type="submit" className="rounded-xl bg-[#0F2942] px-5 py-2 text-xs font-bold text-white hover:bg-[#0284C7]">Update Stok</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
