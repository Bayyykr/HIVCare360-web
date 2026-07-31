import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    PlusCircle,
    Download,
    UploadCloud,
    Send,
    MessageSquare,
    CheckCircle2,
    CheckCircle,
    Filter,
    MoreVertical,
    Clock,
    Building2,
    UserCheck,
    FileText,
    Asterisk,
} from 'lucide-react';

export default function ReferralPage() {
    // Form Rujukan State
    const [targetHospital, setTargetHospital] = useState('RSUP Dr. Sardjito');
    const [targetDoctor, setTargetDoctor] = useState('dr. Bambang Sp.PD-KPTI');
    const [referralReason, setReferralReason] = useState('');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    // List Rujukan Data (Matching Rujukan.png)
    const [referrals, setReferrals] = useState([
        {
            id: '#REF-2023-001',
            patientName: 'Budi Santoso',
            nik: '327500123...',
            targetHospital: 'RSUP Dr. Sardjito',
            sendDate: '24 Okt 2023',
            status: 'MENUNGGU',
        },
        {
            id: '#REF-2023-004',
            patientName: 'Siti Aminah',
            nik: '317100456...',
            targetHospital: 'RSUD Dr. Soetomo',
            sendDate: '23 Okt 2023',
            status: 'DITERIMA',
        },
        {
            id: '#REF-2023-009',
            patientName: 'Adi Wijaya',
            nik: '351500789...',
            targetHospital: 'RS Infeksi Sulianti Saroso',
            sendDate: '20 Okt 2023',
            status: 'SELESAI',
        },
        {
            id: '#REF-2023-012',
            patientName: 'Rini Kusuma',
            nik: '332400321...',
            targetHospital: 'RS Jantung Harapan Kita',
            sendDate: '19 Okt 2023',
            status: 'SELESAI',
        },
        {
            id: '#REF-2023-015',
            patientName: 'Eko Prasetyo',
            nik: '320100999...',
            targetHospital: 'RSUP Dr. Sardjito',
            sendDate: '18 Okt 2023',
            status: 'DIBATALKAN',
        },
    ]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setUploadedFile(e.target.files[0]);
        }
    };

    const handleSendReferral = (e: React.FormEvent) => {
        e.preventDefault();
        if (!referralReason) {
            alert('Silakan tuliskan deskripsi alasan rujukan.');
            return;
        }

        const newRef = {
            id: `#REF-2026-${Math.floor(100 + Math.random() * 900)}`,
            patientName: 'Budi Santoso',
            nik: '3275010908850001',
            targetHospital,
            sendDate: '31 Jul 2026',
            status: 'MENUNGGU',
        };

        setReferrals([newRef, ...referrals]);
        alert('🚀 Permintaan Rujukan Berhasil Terkirim ke Faskes Tujuan secara Real-Time!');
        setReferralReason('');
        setUploadedFile(null);
    };

    return (
        <div className="space-y-6 pb-24 relative">
            <Head title="Sistem Rujukan Terpadu RSUD - HIVCare360" />

            {/* Page Header (Matching Rujukan.png) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-black text-[#0F2942] tracking-tight">
                        Sistem Rujukan
                    </h1>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                        Kelola rujukan pasien antar fasilitas kesehatan secara real-time.
                    </p>
                </div>

                <button
                    onClick={() => alert('Exporting laporan rujukan terpadu...')}
                    className="flex items-center gap-2 rounded-xl border border-[#0F2942] bg-white px-5 py-2.5 text-xs font-black text-[#0F2942] hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
                >
                    <Download className="h-4 w-4" />
                    <span>Ekspor Laporan</span>
                </button>
            </div>

            {/* Main Split Section (Left 1/3 Form vs Right 2/3 List) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Left Panel: Form Buat Rujukan Baru (1/3 Width) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-5">
                    <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-[#0284C7]">
                            <PlusCircle className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-black text-[#0F2942]">Buat Rujukan Baru</h3>
                    </div>

                    <form onSubmit={handleSendReferral} className="space-y-4 text-xs">
                        {/* RS Tujuan Dropdown */}
                        <div className="space-y-1">
                            <label className="block font-bold text-slate-700">RS Tujuan</label>
                            <select
                                value={targetHospital}
                                onChange={(e) => setTargetHospital(e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs font-semibold text-slate-800 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                            >
                                <option value="RSUP Dr. Sardjito">RSUP Dr. Sardjito</option>
                                <option value="RSUD Dr. Soetomo">RSUD Dr. Soetomo</option>
                                <option value="RS Infeksi Sulianti Saroso">RS Infeksi Sulianti Saroso</option>
                                <option value="RS Jantung Harapan Kita">RS Jantung Harapan Kita</option>
                            </select>
                        </div>

                        {/* Dokter Tujuan Input */}
                        <div className="space-y-1">
                            <label className="block font-bold text-slate-700">Dokter Tujuan</label>
                            <div className="relative">
                                <UserCheck className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    value={targetDoctor}
                                    onChange={(e) => setTargetDoctor(e.target.value)}
                                    placeholder="Nama Dokter Spesialis"
                                    className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                />
                            </div>
                        </div>

                        {/* Alasan Rujukan Textarea */}
                        <div className="space-y-1">
                            <label className="block font-bold text-slate-700">Alasan Rujukan</label>
                            <textarea
                                rows={4}
                                value={referralReason}
                                onChange={(e) => setReferralReason(e.target.value)}
                                placeholder="Deskripsikan kondisi klinis dan alasan rujukan..."
                                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                required
                            />
                        </div>

                        {/* File Dropzone Box (Matching Rujukan.png) */}
                        <div className="space-y-1">
                            <label className="block font-bold text-slate-700">Lampiran (Hasil Lab/Foto)</label>
                            <label className="flex flex-col items-center justify-center w-full h-32 rounded-xl border-2 border-dashed border-[#BAE6FD] bg-[#E0F2FE]/40 hover:bg-[#E0F2FE]/70 cursor-pointer transition-colors p-4 text-center">
                                <FileText className="h-6 w-6 text-[#0284C7] mb-1" />
                                <span className="text-xs font-bold text-[#0F2942]">
                                    {uploadedFile ? uploadedFile.name : 'Klik atau drag file ke sini'}
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium">
                                    PDF, JPG (Max 5MB)
                                </span>
                                <input
                                    type="file"
                                    onChange={handleFileUpload}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Send Submit Button */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0F2942] py-3 px-4 text-xs font-black text-white hover:bg-[#0284C7] transition-all shadow-md cursor-pointer mt-2"
                        >
                            <Send className="h-4 w-4" />
                            <span>Kirim Permintaan Rujukan</span>
                        </button>
                    </form>
                </div>

                {/* Right Panel: Metric Summary & Table (2/3 Width) */}
                <div className="lg:col-span-2 space-y-5">
                    {/* Top 3 Status Summary Cards */}
                    <div className="grid grid-cols-3 gap-4">
                        {/* Menunggu Card */}
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs flex items-center gap-3.5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 block uppercase">Menunggu</span>
                                <span className="text-2xl font-black text-[#0F2942]">12</span>
                            </div>
                        </div>

                        {/* Diterima Card */}
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs flex items-center gap-3.5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#0284C7]">
                                <CheckCircle className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 block uppercase">Diterima</span>
                                <span className="text-2xl font-black text-[#0F2942]">45</span>
                            </div>
                        </div>

                        {/* Selesai Card */}
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs flex items-center gap-3.5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 block uppercase">Selesai</span>
                                <span className="text-2xl font-black text-[#0F2942]">128</span>
                            </div>
                        </div>
                    </div>

                    {/* Table Card */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h3 className="text-base font-black text-[#0F2942]">Daftar Rujukan Keluar/Masuk</h3>

                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50">
                                    <Filter className="h-3.5 w-3.5 text-slate-500" />
                                </button>
                                <button className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50">
                                    <MoreVertical className="h-3.5 w-3.5 text-slate-500" />
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className="bg-[#E0F2FE]/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3.5">ID RUJUKAN</th>
                                        <th className="px-4 py-3.5">PASIEN</th>
                                        <th className="px-4 py-3.5">RS TUJUAN</th>
                                        <th className="px-4 py-3.5">TGL. KIRIM</th>
                                        <th className="px-4 py-3.5">STATUS</th>
                                        <th className="px-4 py-3.5 text-center">AKSI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 font-medium">
                                    {referrals.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                                            <td className="px-4 py-3.5 font-bold text-slate-900">
                                                {item.id}
                                            </td>
                                            <td className="px-4 py-3.5">
                                                <div className="font-black text-slate-900">{item.patientName}</div>
                                                <div className="text-[10px] text-slate-400 font-mono">NIK: {item.nik}</div>
                                            </td>
                                            <td className="px-4 py-3.5 font-semibold text-slate-800">{item.targetHospital}</td>
                                            <td className="px-4 py-3.5 text-slate-600">{item.sendDate}</td>
                                            <td className="px-4 py-3.5">
                                                {item.status === 'MENUNGGU' && (
                                                    <span className="inline-block rounded-md bg-[#D97706] px-2.5 py-1 text-[10px] font-black text-white uppercase">
                                                        MENUNGGU
                                                    </span>
                                                )}
                                                {item.status === 'DITERIMA' && (
                                                    <span className="inline-block rounded-md bg-[#0F2942] px-2.5 py-1 text-[10px] font-black text-white uppercase">
                                                        DITERIMA
                                                    </span>
                                                )}
                                                {item.status === 'SELESAI' && (
                                                    <span className="inline-block rounded-md bg-emerald-600 px-2.5 py-1 text-[10px] font-black text-white uppercase">
                                                        SELESAI
                                                    </span>
                                                )}
                                                {item.status === 'DIBATALKAN' && (
                                                    <span className="inline-block rounded-md bg-red-600 px-2.5 py-1 text-[10px] font-black text-white uppercase">
                                                        DIBATALKAN
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3.5 text-center">
                                                <button
                                                    onClick={() => alert(`Detail rujukan ID: ${item.id}`)}
                                                    className="text-xs font-black text-[#0284C7] hover:underline cursor-pointer"
                                                >
                                                    Lihat Detail
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                            <span>Menampilkan 1-5 dari 24 rujukan</span>
                            <div className="flex items-center gap-1">
                                <button className="px-2 py-1 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">Sebelumnya</button>
                                <button className="h-7 w-7 rounded-lg bg-[#0F2942] text-white font-bold flex items-center justify-center">1</button>
                                <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
                                <button className="h-7 w-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">3</button>
                                <button className="px-2 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">Selanjutnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Grid: Kapasitas RS & Waktu Respon Card (Matching Rujukan.png) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Card Left: Kapasitas RS Tujuan (Real-Time Bed Availability) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
                    <div>
                        <h3 className="text-base font-black text-[#0F2942]">Kapasitas RS Tujuan</h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                            Real-time bed availability monitoring.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-2">
                        <div className="space-y-1">
                            <span className="text-4xl font-black text-[#0F2942] block">82%</span>
                            <span className="text-xs font-bold text-slate-700">RSUP Sardjito</span>
                        </div>

                        <div className="space-y-1">
                            <span className="text-4xl font-black text-[#0F2942] block">45%</span>
                            <span className="text-xs font-bold text-slate-700">RS Soetomo</span>
                        </div>
                    </div>
                </div>

                {/* Card Right: Waktu Respon Rujukan */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
                    <div>
                        <h3 className="text-base font-black text-[#0F2942]">Waktu Respon Rujukan</h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                            Rata-rata waktu persetujuan rujukan hari ini.
                        </p>
                    </div>

                    <div className="pt-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-[#0F2942]">14</span>
                            <span className="text-xl font-bold text-[#0F2942]">Menit</span>
                        </div>
                        <span className="text-xs font-bold text-emerald-600 block mt-2">
                            ↘ 22% lebih cepat dari kemarin
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Right FAB Floating Button */}
            <button className="fixed bottom-6 right-6 h-12 w-12 rounded-2xl bg-[#0F2942] text-white shadow-xl hover:bg-[#0284C7] transition-all flex items-center justify-center z-40 cursor-pointer">
                <Asterisk className="h-6 w-6" />
            </button>
        </div>
    );
}
