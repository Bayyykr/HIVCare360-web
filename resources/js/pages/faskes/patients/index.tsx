import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    Search,
    Filter,
    UserPlus,
    Eye,
    AlertTriangle,
    CheckCircle2,
    Clock,
    FileSpreadsheet,
    ChevronRight,
} from 'lucide-react';

export default function PatientIndexPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('ALL');

    const patients = [
        {
            id: 'P-882',
            nik: '3271041205880003',
            name: 'Budi Santoso',
            age: 42,
            gender: 'Laki-laki',
            regimen: 'TLD (1x1)',
            adherence: 98,
            riskLevel: 'RISIKO TINGGI',
            lastVisit: '12 Oct 2023',
            status: 'Aktif ART',
        },
        {
            id: 'P-901',
            nik: '3509124409850002',
            name: 'Ny. Siti Aminah',
            age: 38,
            gender: 'Perempuan',
            regimen: 'TLD (1x1)',
            adherence: 45,
            riskLevel: 'RISIKO TINGGI',
            lastVisit: '25 Sep 2023',
            status: 'Mangkir 12 Hari',
        },
        {
            id: 'P-745',
            nik: '3509081203920005',
            name: 'Sdr. Agus Setiawan',
            age: 29,
            gender: 'Laki-laki',
            regimen: 'TLE (1x1)',
            adherence: 82,
            riskLevel: 'RISIKO SEDANG',
            lastVisit: '05 Aug 2023',
            status: 'Kontrol Rutin',
        },
        {
            id: 'P-112',
            nik: '3509156711900001',
            name: 'Ny. Lilis Suryani',
            age: 33,
            gender: 'Perempuan',
            regimen: 'TLD (1x1)',
            adherence: 95,
            riskLevel: 'RISIKO RENDAH',
            lastVisit: '01 Nov 2023',
            status: 'Aktif ART',
        },
    ];

    const filteredPatients = patients.filter((p) => {
        const matchesSearch =
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.nik.includes(searchTerm);
        if (filterCategory === 'HIGH_RISK') return matchesSearch && p.riskLevel.includes('TINGGI');
        if (filterCategory === 'NON_COMPLIANT') return matchesSearch && p.adherence < 80;
        return matchesSearch;
    });

    return (
        <div className="space-y-6 pb-12">
            <Head title="Data Pasien EMR - HIVCare360" />

            {/* Header Section */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-black text-[#0F2942] tracking-tight">
                        Database Rekam Medis (EMR) Pasien
                    </h1>
                    <p className="text-xs text-slate-500 font-semibold mt-1">
                        Manajemen data pasien ODHIV terdaftar di Puskesmas Sumbersari Jember.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => alert('Fitur Export Excel/PDF')}
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50"
                    >
                        <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
                        <span>Export Data</span>
                    </button>
                    <Link
                        href="/faskes/screenings"
                        className="flex items-center gap-2 rounded-xl bg-[#0284C7] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-sky-600/20 hover:bg-[#0369A1] transition-colors"
                    >
                        <UserPlus className="h-4 w-4" />
                        <span>+ Registrasi Pasien</span>
                    </Link>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
                {/* Search Input */}
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Cari ID Pasien, NIK, atau Nama..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-2 pl-10 pr-4 text-xs font-medium text-slate-700 placeholder-slate-400 focus:border-[#0284C7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                    <button
                        onClick={() => setFilterCategory('ALL')}
                        className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all ${
                            filterCategory === 'ALL'
                                ? 'bg-[#0F2942] text-white shadow-2xs'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        Semua Pasien ({patients.length})
                    </button>
                    <button
                        onClick={() => setFilterCategory('HIGH_RISK')}
                        className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all ${
                            filterCategory === 'HIGH_RISK'
                                ? 'bg-red-600 text-white shadow-2xs'
                                : 'bg-red-50 text-red-700 hover:bg-red-100'
                        }`}
                    >
                        Risiko Tinggi AI
                    </button>
                    <button
                        onClick={() => setFilterCategory('NON_COMPLIANT')}
                        className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all ${
                            filterCategory === 'NON_COMPLIANT'
                                ? 'bg-amber-600 text-white shadow-2xs'
                                : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                        }`}
                    >
                        Kepatuhan &lt; 80%
                    </button>
                </div>
            </div>

            {/* Patients Data Table */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-5 py-3.5">ID / NIK PASIEN</th>
                                <th className="px-5 py-3.5">NAMA PASIEN</th>
                                <th className="px-5 py-3.5">REGIMEN ART</th>
                                <th className="px-5 py-3.5">KEPATUHAN ART</th>
                                <th className="px-5 py-3.5">PREDIKSI RISIKO AI</th>
                                <th className="px-5 py-3.5">STATUS TERAKHIR</th>
                                <th className="px-5 py-3.5 text-center">AKSI EMR</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            {filteredPatients.map((patient) => (
                                <tr key={patient.id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-5 py-4">
                                        <div className="font-mono font-bold text-[#0F2942]">
                                            {patient.id}
                                        </div>
                                        <div className="text-[10px] text-slate-400 font-normal">
                                            NIK: {patient.nik}
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="font-extrabold text-slate-900">
                                            {patient.name}
                                        </div>
                                        <div className="text-[10px] text-slate-500">
                                            {patient.gender}, {patient.age} Thn
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <span className="inline-block rounded-md bg-sky-50 px-2.5 py-1 text-[10px] font-bold text-[#0284C7] border border-sky-200">
                                            {patient.regimen}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-20 bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${
                                                        patient.adherence >= 90
                                                            ? 'bg-emerald-500'
                                                            : patient.adherence >= 75
                                                            ? 'bg-amber-500'
                                                            : 'bg-red-500'
                                                    }`}
                                                    style={{ width: `${patient.adherence}%` }}
                                                />
                                            </div>
                                            <span className="font-bold text-slate-800">
                                                {patient.adherence}%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <span
                                            className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-extrabold text-white uppercase tracking-wider ${
                                                patient.riskLevel.includes('TINGGI')
                                                    ? 'bg-red-600'
                                                    : patient.riskLevel.includes('SEDANG')
                                                    ? 'bg-amber-500'
                                                    : 'bg-emerald-600'
                                            }`}
                                        >
                                            {patient.riskLevel}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 text-slate-600 font-semibold">
                                        {patient.status}
                                    </td>
                                    <td className="px-5 py-4 text-center">
                                        <Link
                                            href={`/faskes/patients/${patient.id}/emr`}
                                            className="inline-flex items-center gap-1.5 rounded-xl bg-[#0F2942] px-3 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-[#0284C7] transition-colors"
                                        >
                                            <Eye className="h-3.5 w-3.5" />
                                            <span>Buka EMR</span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
