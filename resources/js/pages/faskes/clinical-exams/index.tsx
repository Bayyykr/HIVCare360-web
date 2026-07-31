import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    User,
    Activity,
    Pill,
    Search,
    Calendar,
    Save,
    ShieldCheck,
    CheckCircle2,
    Package,
    ArrowUpRight,
    TrendingDown,
} from 'lucide-react';

export default function ClinicalExamPage() {
    // Patient header state
    const patient = {
        name: 'Budi Santoso',
        nik: '3275010908850001',
        age: 38,
        gender: 'Laki-laki',
        artAdherence: 94,
        currentRegimen: 'TLE',
        pharmacyStock: 4520,
    };

    // Form inputs state matching Pemrriksaan.png
    const [cd4Count, setCd4Count] = useState('');
    const [viralLoad, setViralLoad] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [whoStage, setWhoStage] = useState('Stadium 1 - Asimtomatik');
    const [doctorNotes, setDoctorNotes] = useState('');

    const [regimenSearch, setRegimenSearch] = useState('TDF + 3TC + DTG');
    const [doseFrequency, setDoseFrequency] = useState('1 Tablet / 24 Jam (Malam)');
    const [dispenseDate, setDispenseDate] = useState('2026-07-31');
    const [nextRefillDate, setNextRefillDate] = useState('2026-08-31');

    const handleSaveClinicalData = (e: React.FormEvent) => {
        e.preventDefault();
        alert('✅ Data Pemeriksaan Klinis Pasien & Pengobatan ART Berhasil Disimpan!');
    };

    return (
        <div className="space-y-6 pb-20">
            <Head title="Form Entry Data Klinis - HIVCare360" />

            {/* Patient Header Row (Matching Pemrriksaan.png) */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {/* Patient Profile Card (2/3 width) */}
                <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F2942] text-white shadow-2xs shrink-0">
                        <User className="h-7 w-7" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-black text-[#0F2942]">{patient.name}</h2>
                            <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-[10px] font-black text-emerald-800 uppercase">
                                Aktif ART
                            </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                            NIK: {patient.nik} • {patient.age} Tahun • {patient.gender}
                        </p>
                    </div>
                </div>

                {/* Patient Adherence Metric Card (1/3 width) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <span>Kepatuhan ART</span>
                        <span className="text-lg font-black text-[#0F2942]">{patient.artAdherence}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${patient.artAdherence}%` }} />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Sangat Baik (30 hari terakhir)</span>
                    </div>
                </div>
            </div>

            {/* Main Form Entry Grid (2 Panels) */}
            <form onSubmit={handleSaveClinicalData} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Panel Left: Pemeriksaan Klinis */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-5">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                                    <Activity className="h-4 w-4" />
                                </div>
                                <h3 className="text-base font-black text-[#0F2942]">Pemeriksaan Klinis</h3>
                            </div>
                            <span className="text-xs text-slate-400 font-semibold">Terakhir: 12 Okt 2023</span>
                        </div>

                        <div className="space-y-4 text-xs">
                            {/* CD4 Count & Viral Load */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">CD4 Count (sel/mm³)</label>
                                    <input
                                        type="number"
                                        value={cd4Count}
                                        onChange={(e) => setCd4Count(e.target.value)}
                                        placeholder="Contoh: 450"
                                        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">Viral Load (copies/mL)</label>
                                    <input
                                        type="number"
                                        value={viralLoad}
                                        onChange={(e) => setViralLoad(e.target.value)}
                                        placeholder="Contoh: 20"
                                        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>
                            </div>

                            {/* Weight & Height */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">Berat Badan (kg)</label>
                                    <input
                                        type="text"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        placeholder="00.0"
                                        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">Tinggi Badan (cm)</label>
                                    <input
                                        type="text"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        placeholder="170"
                                        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>
                            </div>

                            {/* Stadium WHO Dropdown */}
                            <div className="space-y-1">
                                <label className="block font-bold text-slate-700">Status Klinis (Stadium WHO)</label>
                                <select
                                    value={whoStage}
                                    onChange={(e) => setWhoStage(e.target.value)}
                                    className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-semibold text-slate-800 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                >
                                    <option value="Stadium 1 - Asimtomatik">Stadium 1 - Asimtomatik</option>
                                    <option value="Stadium 2 - Ringan">Stadium 2 - Ringan</option>
                                    <option value="Stadium 3 - Sedang">Stadium 3 - Sedang</option>
                                    <option value="Stadium 4 - Berat">Stadium 4 - Berat</option>
                                </select>
                            </div>

                            {/* Doctor Notes */}
                            <div className="space-y-1">
                                <label className="block font-bold text-slate-700">Catatan Dokter</label>
                                <textarea
                                    rows={4}
                                    value={doctorNotes}
                                    onChange={(e) => setDoctorNotes(e.target.value)}
                                    placeholder="Masukkan observasi klinis tambahan..."
                                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Panel Right: Pengobatan ART */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-5">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
                                    <Pill className="h-4 w-4" />
                                </div>
                                <h3 className="text-base font-black text-[#0F2942]">Pengobatan ART</h3>
                            </div>
                            <span className="text-xs text-slate-400 font-semibold">Regimen Saat Ini: {patient.currentRegimen}</span>
                        </div>

                        <div className="space-y-4 text-xs">
                            {/* Regimen Search & Quick Choices */}
                            <div className="space-y-2">
                                <label className="block font-bold text-slate-700">Jenis ART / Regimen</label>
                                <div className="relative">
                                    <Search className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        value={regimenSearch}
                                        onChange={(e) => setRegimenSearch(e.target.value)}
                                        placeholder="Cari obat (TDF, 3TC, EFV...)"
                                        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-10 text-xs font-semibold text-slate-800 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>
                                {/* QuickChoice Chips */}
                                <div className="flex items-center gap-2 pt-1">
                                    <button
                                        type="button"
                                        onClick={() => setRegimenSearch('TDF + 3TC + DTG')}
                                        className="rounded-lg border border-sky-200 bg-[#E0F2FE] px-3 py-1 text-[11px] font-black text-[#0284C7] hover:bg-sky-100 transition-colors"
                                    >
                                        TDF + 3TC + DTG
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setRegimenSearch('AZT + 3TC + NVP')}
                                        className="rounded-lg border border-sky-200 bg-[#E0F2FE] px-3 py-1 text-[11px] font-black text-[#0284C7] hover:bg-sky-100 transition-colors"
                                    >
                                        AZT + 3TC + NVP
                                    </button>
                                </div>
                            </div>

                            {/* Dosis & Frekuensi */}
                            <div className="space-y-1">
                                <label className="block font-bold text-slate-700">Dosis &amp; Frekuensi</label>
                                <input
                                    type="text"
                                    value={doseFrequency}
                                    onChange={(e) => setDoseFrequency(e.target.value)}
                                    placeholder="Contoh: 1 Tablet / 24 Jam (Malam)"
                                    className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                />
                            </div>

                            {/* Dispense Date & Next Refill Date */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">Tanggal Pemberian</label>
                                    <input
                                        type="date"
                                        value={dispenseDate}
                                        onChange={(e) => setDispenseDate(e.target.value)}
                                        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-medium text-slate-800 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">Jadwal Berikutnya (Refill)</label>
                                    <input
                                        type="date"
                                        value={nextRefillDate}
                                        onChange={(e) => setNextRefillDate(e.target.value)}
                                        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-medium text-slate-800 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                    />
                                </div>
                            </div>

                            {/* Pharmacy Stock Card */}
                            <div className="rounded-xl border border-[#BAE6FD] bg-[#E0F2FE]/70 p-4 flex items-center gap-3.5">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0284C7] text-white shadow-2xs">
                                    <Package className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-[#0F2942]">Stok Apotek Tersedia</h4>
                                    <p className="text-[11px] font-semibold text-slate-600">
                                        Sisa Stok: <span className="font-extrabold text-[#0284C7]">{patient.pharmacyStock.toLocaleString()} Tablet</span> (Cukup untuk 3 bulan)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Action Buttons (Matching Pemrriksaan.png) */}
                <div className="flex items-center justify-end gap-4 pt-2">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="rounded-xl border border-[#0284C7] bg-white px-8 py-2.5 text-xs font-bold text-[#0284C7] hover:bg-sky-50 transition-colors cursor-pointer"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-xl bg-[#0F2942] px-8 py-2.5 text-xs font-black text-white hover:bg-[#0284C7] transition-all shadow-md cursor-pointer"
                    >
                        <Save className="h-4 w-4" />
                        <span>Simpan Data Klinis</span>
                    </button>
                </div>
            </form>

            {/* Bottom Grid: Viral Load Trend & Supresi Status Card (Matching Pemrriksaan.png) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Left Bottom Card (2/3 width): Tren Viral Load Bar Chart */}
                <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-black text-[#0F2942]">Tren Viral Load</h3>
                        <a href="/faskes/patients/P-882/emr" className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1">
                            <span>Lihat Detail Riwayat</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                    </div>

                    {/* Bar Chart Representation */}
                    <div className="h-48 w-full bg-slate-50/70 rounded-xl border border-slate-100 p-5 flex items-end justify-between gap-6">
                        {[
                            { month: 'JAN', val: 90, color: 'bg-slate-300' },
                            { month: 'MAR', val: 60, color: 'bg-slate-400' },
                            { month: 'MEI', val: 35, color: 'bg-[#0284C7]/60' },
                            { month: 'JUL', val: 20, color: 'bg-[#0284C7]' },
                            { month: 'SEP', val: 10, color: 'bg-[#0F2942]' },
                            { month: 'NOV', val: 4, color: 'bg-emerald-600' },
                        ].map((bar) => (
                            <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                <div
                                    className={`w-full ${bar.color} rounded-t-lg transition-all`}
                                    style={{ height: `${bar.val}%` }}
                                />
                                <span className="text-[10px] font-bold text-slate-500 mt-1">{bar.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Bottom Card (1/3 width): Status Supresi Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs flex flex-col items-center justify-center text-center space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                        <ShieldCheck className="h-8 w-8 stroke-[2.5]" />
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-xl font-black text-[#0F2942]">Status Supresi</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                            Viral Load di bawah ambang deteksi (&lt;20 copies/mL).
                        </p>
                    </div>

                    <span className="inline-block rounded-xl border border-emerald-500 bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-800 uppercase tracking-wider">
                        RESIKO TRANSMISI RENDAH
                    </span>
                </div>
            </div>
        </div>
    );
}
