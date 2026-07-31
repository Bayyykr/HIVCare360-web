import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    Zap,
    PlusCircle,
    Filter,
    Download,
    Search,
    X,
    Building2,
    UserCheck,
    FileText,
    CheckCircle2,
    AlertTriangle,
    Save,
} from 'lucide-react';

export default function ScreeningIndexPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Form inputs state matching Tambah skrining.png
    const [patientQuery, setPatientQuery] = useState('');
    const [screeningType, setScreeningType] = useState('Rapid Test');
    const [faskesLocation, setFaskesLocation] = useState('Puskesmas Sumbersari');
    const [healthOfficer, setHealthOfficer] = useState('dr. Siti Aminah');
    const [screeningResult, setScreeningResult] = useState<'REAKTIF' | 'NON-REAKTIF'>('NON-REAKTIF');
    const [clinicalNotes, setClinicalNotes] = useState('');

    // Table data matching Skrining HIV.png
    const [screenings, setScreenings] = useState([
        {
            id: 1,
            date: '24 Okt 2023',
            patientName: 'Budi Santoso',
            type: 'Rapid Test',
            location: 'RSUD Harapan',
            result: 'NON-REAKTIF',
            officer: 'Dr. Amelia',
        },
        {
            id: 2,
            date: '23 Okt 2023',
            patientName: 'Siti Rahma',
            type: 'Rapid Test',
            location: 'Puskesmas Melati',
            result: 'REAKTIF',
            officer: 'Ns. Rudi',
        },
        {
            id: 3,
            date: '23 Okt 2023',
            patientName: 'Andi Wijaya',
            type: 'Viral Load',
            location: 'Lab Sentral HIV',
            result: 'NON-REAKTIF',
            officer: 'Dr. Faisal',
        },
        {
            id: 4,
            date: '22 Okt 2023',
            patientName: 'Dewi Lestari',
            type: 'Rapid Test',
            location: 'Klinik Sehat',
            result: 'NON-REAKTIF',
            officer: 'Ns. Maya',
        },
        {
            id: 5,
            date: '21 Okt 2023',
            patientName: 'Raka Pratama',
            type: 'EIA/ELISA',
            location: 'RSUD Harapan',
            result: 'REAKTIF',
            officer: 'Dr. Amelia',
        },
    ]);

    const handleSaveScreening = (e: React.FormEvent) => {
        e.preventDefault();
        if (!patientQuery) {
            alert('Silakan masukkan nama atau No. RM pasien.');
            return;
        }

        const newRecord = {
            id: Date.now(),
            date: '31 Jul 2026',
            patientName: patientQuery,
            type: screeningType,
            location: faskesLocation,
            result: screeningResult,
            officer: healthOfficer,
        };

        setScreenings([newRecord, ...screenings]);
        setIsAddModalOpen(false);

        if (screeningResult === 'REAKTIF') {
            alert('⚠️ PERINGATAN BUKAN REAKTIF!\nData berhasil disimpan. Hasil REAKTIF otomatis memicu alert Konseling VCT & Rujukan Poli ART <24 Jam.');
        } else {
            alert('✅ Data skrining Non-Reaktif berhasil disimpan!');
        }

        // Reset form
        setPatientQuery('');
        setClinicalNotes('');
    };

    const filteredScreenings = screenings.filter(
        (s) =>
            s.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 pb-16">
            <Head title="Manajemen Skrining HIV - HIVCare360" />

            {/* Top AI INSIGHT Alert Banner (Matching Skrining HIV.png) */}
            <div className="rounded-2xl border border-[#BAE6FD] bg-[#E0F2FE] p-4 text-[#0F2942] shadow-2xs flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0284C7] text-white shadow-2xs">
                    <Zap className="h-5 w-5 fill-white" />
                </div>
                <div>
                    <span className="text-[11px] font-black tracking-wider text-[#0284C7] uppercase block">
                        AI INSIGHT
                    </span>
                    <p className="text-xs font-bold leading-relaxed text-slate-800">
                        Pastikan semua data hasil Reaktif segera dilanjutkan dengan konseling VCT dan rujukan ke poli ART dalam kurun waktu 24 jam.
                    </p>
                </div>
            </div>

            {/* Page Header (Matching Skrining HIV.png) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-black text-[#0F2942] tracking-tight">
                        Manajemen Skrining HIV
                    </h1>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                        Portal administratif untuk pencatatan dan pemantauan hasil skrining pasien.
                    </p>
                </div>

                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#0F2942] px-5 py-3 text-xs font-black text-white shadow-md hover:bg-[#0284C7] transition-all cursor-pointer"
                >
                    <PlusCircle className="h-4 w-4" />
                    <span>+ Tambah Skrining</span>
                </button>
            </div>

            {/* Table Card (Matching Skrining HIV.png) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-5">
                {/* Header & Utilities */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-black text-[#0F2942]">
                        Riwayat Skrining Terakhir
                    </h3>

                    <div className="flex items-center gap-3">
                        <div className="relative w-64">
                            <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Cari nama atau data skrining..."
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-3 text-xs font-medium text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                            />
                        </div>

                        <button className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50">
                            <Filter className="h-3.5 w-3.5 text-slate-500" />
                            <span>Filter</span>
                        </button>
                        <button
                            onClick={() => alert('Exporting data skrining PDF/Excel...')}
                            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50"
                        >
                            <Download className="h-3.5 w-3.5 text-slate-500" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                {/* Table Data */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-5 py-3.5">TANGGAL</th>
                                <th className="px-5 py-3.5">NAMA PASIEN</th>
                                <th className="px-5 py-3.5">JENIS</th>
                                <th className="px-5 py-3.5">LOKASI</th>
                                <th className="px-5 py-3.5">HASIL</th>
                                <th className="px-5 py-3.5">PETUGAS</th>
                                <th className="px-5 py-3.5 text-center">AKSI</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            {filteredScreenings.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-5 py-4 font-bold text-slate-800">
                                        {item.date}
                                    </td>
                                    <td className="px-5 py-4 font-black text-[#0F2942]">
                                        {item.patientName}
                                    </td>
                                    <td className="px-5 py-4 text-slate-700">
                                        {item.type}
                                    </td>
                                    <td className="px-5 py-4 text-slate-700">
                                        {item.location}
                                    </td>
                                    <td className="px-5 py-4">
                                        {item.result === 'REAKTIF' ? (
                                            <span className="inline-block rounded-lg bg-[#DC2626] px-3.5 py-1 text-[10px] font-black text-white uppercase tracking-wider shadow-2xs">
                                                REAKTIF
                                            </span>
                                        ) : (
                                            <span className="inline-block rounded-lg bg-emerald-600 px-3.5 py-1 text-[10px] font-black text-white uppercase tracking-wider shadow-2xs">
                                                NON-REAKTIF
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-5 py-4 text-slate-700 font-semibold">
                                        {item.officer}
                                    </td>
                                    <td className="px-5 py-4 text-center">
                                        <button
                                            onClick={() => alert(`Detail Skrining Pasien: ${item.patientName}`)}
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

                {/* Footer Pagination */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                    <span>Menampilkan {filteredScreenings.length} dari 1,240 entri</span>
                    <div className="flex items-center gap-2">
                        <span className="cursor-pointer hover:text-slate-900">Sebelumnya</span>
                        <button className="h-7 w-7 rounded-lg bg-[#0F2942] text-white font-bold flex items-center justify-center">
                            1
                        </button>
                        <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">
                            2
                        </button>
                        <span className="cursor-pointer hover:text-slate-900">Selanjutnya</span>
                    </div>
                </div>
            </div>

            {/* MODAL DIALOG: TAMBAH DATA SKRINING BARU (Matching Tambah skrining.png) */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in-50">
                    <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 p-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7] border border-sky-200">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-black text-[#0F2942]">
                                    Tambah Data Skrining Baru
                                </h3>
                            </div>

                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Modal Body Form */}
                        <form onSubmit={handleSaveScreening} className="p-6 space-y-5 text-xs">
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                {/* Field 1: Nama Pasien */}
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">
                                        Nama Pasien
                                    </label>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            value={patientQuery}
                                            onChange={(e) => setPatientQuery(e.target.value)}
                                            placeholder="Ketik nama atau No. RM..."
                                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                            required
                                        />
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-medium block">
                                        Masukkan minimal 3 karakter untuk mencari.
                                    </span>
                                </div>

                                {/* Field 2: Jenis Skrining */}
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">
                                        Jenis Skrining
                                    </label>
                                    <select
                                        value={screeningType}
                                        onChange={(e) => setScreeningType(e.target.value)}
                                        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-semibold text-slate-800 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                    >
                                        <option value="Rapid Test">Rapid Test (R1/R2/R3)</option>
                                        <option value="EIA/ELISA">EIA / ELISA</option>
                                        <option value="Viral Load">Viral Load (HIV-1 RNA)</option>
                                        <option value="CD4 Count">CD4 Count</option>
                                    </select>
                                </div>

                                {/* Field 3: Lokasi Fasilitas Kesehatan */}
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">
                                        Lokasi Fasilitas Kesehatan
                                    </label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            value={faskesLocation}
                                            onChange={(e) => setFaskesLocation(e.target.value)}
                                            placeholder="Nama RS / Puskesmas"
                                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Field 4: Petugas Kesehatan */}
                                <div className="space-y-1">
                                    <label className="block font-bold text-slate-700">
                                        Petugas Kesehatan
                                    </label>
                                    <div className="relative">
                                        <UserCheck className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            value={healthOfficer}
                                            onChange={(e) => setHealthOfficer(e.target.value)}
                                            placeholder="Nama dokter / perawat"
                                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Field 5: Hasil Skrining (Radio Buttons Grid) */}
                            <div className="space-y-2 pt-1">
                                <label className="block font-bold text-slate-700">
                                    Hasil Skrining
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Reaktif Card */}
                                    <div
                                        onClick={() => setScreeningResult('REAKTIF')}
                                        className={`flex items-center justify-between rounded-xl border-2 p-4 cursor-pointer transition-all ${
                                            screeningResult === 'REAKTIF'
                                                ? 'border-red-600 bg-red-50/60 shadow-xs'
                                                : 'border-slate-200 bg-white hover:bg-slate-50'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                                                    screeningResult === 'REAKTIF'
                                                        ? 'border-red-600 bg-red-600'
                                                        : 'border-slate-300'
                                                }`}
                                            >
                                                {screeningResult === 'REAKTIF' && (
                                                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                                                )}
                                            </div>
                                            <span className="font-extrabold text-slate-900 text-sm">
                                                Reaktif
                                            </span>
                                        </div>
                                    </div>

                                    {/* Non-Reaktif Card */}
                                    <div
                                        onClick={() => setScreeningResult('NON-REAKTIF')}
                                        className={`flex items-center justify-between rounded-xl border-2 p-4 cursor-pointer transition-all ${
                                            screeningResult === 'NON-REAKTIF'
                                                ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                                                : 'border-slate-200 bg-white hover:bg-slate-50'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                                                    screeningResult === 'NON-REAKTIF'
                                                        ? 'border-emerald-600 bg-emerald-600'
                                                        : 'border-slate-300'
                                                }`}
                                            >
                                                {screeningResult === 'NON-REAKTIF' && (
                                                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                                                )}
                                            </div>
                                            <span className="font-extrabold text-slate-900 text-sm">
                                                Non-Reaktif
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {screeningResult === 'REAKTIF' && (
                                    <div className="flex items-center gap-2 rounded-xl bg-red-100/80 p-3 text-red-800 text-[11px] font-bold mt-2">
                                        <AlertTriangle className="h-4 w-4 shrink-0 text-red-600" />
                                        <span>Peringatan: Hasil Reaktif akan memicu alert Konseling VCT &amp; Rujukan Poli ART &lt;24 Jam!</span>
                                    </div>
                                )}
                            </div>

                            {/* Field 6: Catatan Medis Opsional */}
                            <div className="space-y-1 pt-1">
                                <label className="block font-bold text-slate-700">
                                    Catatan Medis (Opsional)
                                </label>
                                <textarea
                                    rows={3}
                                    value={clinicalNotes}
                                    onChange={(e) => setClinicalNotes(e.target.value)}
                                    placeholder="Tambahkan instruksi lanjutan atau observasi klinis..."
                                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                />
                            </div>

                            {/* Modal Footer Buttons */}
                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 rounded-xl bg-[#0F2942] px-6 py-2.5 text-xs font-black text-white hover:bg-[#0284C7] transition-all shadow-md cursor-pointer"
                                >
                                    <Save className="h-4 w-4" />
                                    <span>Simpan Data</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
