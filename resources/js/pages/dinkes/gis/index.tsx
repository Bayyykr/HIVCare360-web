import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    Flame,
    MapPin,
    BarChart3,
    Filter,
    Layers,
    Search,
    ChevronDown,
    Building2,
    Users,
    AlertTriangle,
    CheckCircle2,
    Compass,
    Star,
    ArrowRight,
} from 'lucide-react';

export default function GisRegionalPage() {
    // Filter State matching GIS Wilayah_dinkes.png
    const [selectedYear, setSelectedYear] = useState('2024');
    const [selectedKecamatan, setSelectedKecamatan] = useState('Patrang');
    const [selectedPuskesmas, setSelectedPuskesmas] = useState('Semua Puskesmas');
    const [mapMode, setMapMode] = useState<'heatmap' | 'penanda' | 'statistik'>('heatmap');

    // Selected District Overlay Data
    const [districtDetail, setDistrictDetail] = useState({
        name: 'Patrang',
        totalCases: 186,
        adherence: 92,
        artPatients: 171,
        ltfuCases: 12,
        recentScreenings: 563,
        riskLevel: 'SEDANG',
    });

    const kecamatanList = [
        { name: 'Patrang', cases: 186, adherence: 92, ltfu: 12, risk: 'SEDANG', x: '52%', y: '35%' },
        { name: 'Puger', cases: 284, adherence: 74, ltfu: 38, risk: 'TINGGI', x: '30%', y: '65%' },
        { name: 'Sumbersari', cases: 210, adherence: 88, ltfu: 18, risk: 'TINGGI', x: '24%', y: '42%' },
        { name: 'Ambulu', cases: 142, adherence: 95, ltfu: 5, risk: 'RENDAH', x: '42%', y: '72%' },
        { name: 'Tangul', cases: 98, adherence: 91, ltfu: 8, risk: 'RENDAH', x: '18%', y: '28%' },
    ];

    const handleSelectDistrict = (dist: typeof kecamatanList[0]) => {
        setSelectedKecamatan(dist.name);
        setDistrictDetail({
            name: dist.name,
            totalCases: dist.cases,
            adherence: dist.adherence,
            artPatients: Math.round(dist.cases * 0.9),
            ltfuCases: dist.ltfu,
            recentScreenings: dist.cases * 3,
            riskLevel: dist.risk,
        });
    };

    return (
        <div className="space-y-4 pb-12">
            <Head title="Peta Wilayah GIS Regional - Dinkes HIVCare360" />

            {/* Main Map Container Box */}
            <div className="relative rounded-3xl border border-slate-200 bg-slate-900 overflow-hidden shadow-xl min-h-[640px] flex flex-col justify-between p-4 sm:p-6">
                {/* SVG/Canvas Simulated GIS Map Background */}
                <div className="absolute inset-0 z-0 bg-[#CBE6F3] overflow-hidden">
                    {/* Landmass Outlines & Topography SVG */}
                    <svg className="w-full h-full object-cover opacity-90" viewBox="0 0 1000 650" preserveAspectRatio="xMidYMid slice">
                        {/* Sea/Ocean Accent */}
                        <path d="M 0,480 Q 250,450 500,520 T 1000,490 L 1000,650 L 0,650 Z" fill="#91C9E8" />

                        {/* District Boundaries (Polygons) */}
                        {/* Puger District (Hotspot 1) */}
                        <path d="M 220,380 L 320,360 L 360,460 L 260,500 Z" fill="#B2D8EC" stroke="#68A5C2" strokeWidth="1.5" />
                        {/* Sumbersari District (Hotspot 2) */}
                        <path d="M 180,240 L 280,220 L 310,340 L 210,360 Z" fill="#BCE0F2" stroke="#68A5C2" strokeWidth="1.5" />
                        {/* Patrang District */}
                        <path d="M 450,180 L 580,160 L 610,300 L 480,320 Z" fill="#C3E4F5" stroke="#68A5C2" strokeWidth="1.5" />
                        {/* Ambulu District */}
                        <path d="M 360,460 L 480,440 L 510,540 L 390,560 Z" fill="#BCE0F2" stroke="#68A5C2" strokeWidth="1.5" />
                        {/* Kencong / Tempurejo / Silo */}
                        <path d="M 580,160 L 750,140 L 790,320 L 610,300 Z" fill="#B2D8EC" stroke="#68A5C2" strokeWidth="1.5" />
                        <path d="M 510,320 L 790,320 L 820,510 L 540,530 Z" fill="#C3E4F5" stroke="#68A5C2" strokeWidth="1.5" />

                        {/* District Labels */}
                        <text x="240" y="300" fontSize="11" fontWeight="bold" fill="#0F2942" opacity="0.6">Kaliwates</text>
                        <text x="250" y="440" fontSize="11" fontWeight="bold" fill="#0F2942" opacity="0.6">Puger</text>
                        <text x="500" y="240" fontSize="11" fontWeight="bold" fill="#0F2942" opacity="0.6">Patrang</text>
                        <text x="420" y="500" fontSize="11" fontWeight="bold" fill="#0F2942" opacity="0.6">Ambulu</text>
                        <text x="650" y="220" fontSize="11" fontWeight="bold" fill="#0F2942" opacity="0.6">Silo</text>
                        <text x="670" y="420" fontSize="11" fontWeight="bold" fill="#0F2942" opacity="0.6">Tempurejo</text>
                        <text x="750" y="550" fontSize="11" fontWeight="bold" fill="#0F2942" opacity="0.6">Nusa Barung</text>

                        {/* Heatmap Red Glowing Gradients */}
                        {mapMode === 'heatmap' && (
                            <>
                                <defs>
                                    <radialGradient id="heat-puger" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#DC2626" stopOpacity="0.75" />
                                        <stop offset="60%" stopColor="#EF4444" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
                                    </radialGradient>
                                    <radialGradient id="heat-sumbersari" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#EA580C" stopOpacity="0.7" />
                                        <stop offset="70%" stopColor="#F97316" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                                    </radialGradient>
                                </defs>

                                {/* Red Heatmap Circle 1 (Puger Hotspot) */}
                                <circle cx="280" cy="440" r="95" fill="url(#heat-puger)" />
                                {/* Orange Heatmap Circle 2 (Sumbersari Hotspot) */}
                                <circle cx="250" cy="300" r="75" fill="url(#heat-sumbersari)" />
                            </>
                        )}

                        {/* Pin Markers */}
                        {kecamatanList.map((dist) => (
                            <g
                                key={dist.name}
                                className="cursor-pointer transition-transform hover:scale-125"
                                onClick={() => handleSelectDistrict(dist)}
                            >
                                <circle cx={dist.x} cy={dist.y} r="8" fill={dist.risk === 'TINGGI' ? '#DC2626' : '#0284C7'} stroke="#FFFFFF" strokeWidth="2.5" />
                                {dist.risk === 'TINGGI' && (
                                    <circle cx={dist.x} cy={dist.y} r="14" fill="#DC2626" opacity="0.3" className="animate-ping" />
                                )}
                            </g>
                        ))}
                    </svg>
                </div>

                {/* Floating Top Control Bar (Matching GIS Wilayah_dinkes.png) */}
                <div className="relative z-10 rounded-2xl bg-white/95 backdrop-blur-md p-3 shadow-lg border border-slate-200 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left Dropdown Selectors Group */}
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                        <div className="flex items-center gap-2">
                            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">TAHUN</span>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="rounded-xl border border-slate-200 bg-slate-50 py-1.5 px-3 text-xs font-bold text-slate-800 focus:bg-white focus:outline-none"
                            >
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>

                        <div className="h-4 w-px bg-slate-200 hidden sm:block" />

                        <div className="flex items-center gap-2">
                            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">KECAMATAN</span>
                            <select
                                value={selectedKecamatan}
                                onChange={(e) => {
                                    const match = kecamatanList.find((k) => k.name === e.target.value);
                                    if (match) handleSelectDistrict(match);
                                }}
                                className="rounded-xl border border-slate-200 bg-slate-50 py-1.5 px-3 text-xs font-bold text-[#0F2942] focus:bg-white focus:outline-none"
                            >
                                {kecamatanList.map((k) => (
                                    <option key={k.name} value={k.name}>{k.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="h-4 w-px bg-slate-200 hidden sm:block" />

                        <div className="flex items-center gap-2">
                            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">PUSKESMAS</span>
                            <select
                                value={selectedPuskesmas}
                                onChange={(e) => setSelectedPuskesmas(e.target.value)}
                                className="rounded-xl border border-slate-200 bg-slate-50 py-1.5 px-3 text-xs font-bold text-slate-800 focus:bg-white focus:outline-none"
                            >
                                <option value="Semua Puskesmas">Semua Puskesmas</option>
                                <option value="Puskesmas Patrang">Puskesmas Patrang</option>
                                <option value="Puskesmas Puger">Puskesmas Puger</option>
                                <option value="Puskesmas Sumbersari">Puskesmas Sumbersari</option>
                            </select>
                        </div>
                    </div>

                    {/* Right Map Mode Toggles */}
                    <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                        <button
                            onClick={() => setMapMode('heatmap')}
                            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                                mapMode === 'heatmap'
                                    ? 'bg-white text-[#0284C7] shadow-xs border border-slate-200'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <Layers className="h-3.5 w-3.5" />
                            <span>Heatmap</span>
                        </button>
                        <button
                            onClick={() => setMapMode('penanda')}
                            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                                mapMode === 'penanda'
                                    ? 'bg-white text-[#0284C7] shadow-xs border border-slate-200'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <MapPin className="h-3.5 w-3.5" />
                            <span>Penanda</span>
                        </button>
                        <button
                            onClick={() => setMapMode('statistik')}
                            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                                mapMode === 'statistik'
                                    ? 'bg-white text-[#0284C7] shadow-xs border border-slate-200'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <BarChart3 className="h-3.5 w-3.5" />
                            <span>Statistik</span>
                        </button>
                    </div>
                </div>

                {/* Floating Selected District Overlay Card (Center Overlay matching GIS Wilayah_dinkes.png) */}
                <div className="relative z-10 my-auto mx-auto w-full max-w-xs sm:max-w-sm rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-2xl border border-slate-200 space-y-3.5 animate-in fade-in-50 zoom-in-95">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                            KECAMATAN {districtDetail.name.toUpperCase()}
                        </span>
                        <span
                            className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                                districtDetail.riskLevel === 'TINGGI'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-amber-100 text-amber-800'
                            }`}
                        >
                            RISIKO {districtDetail.riskLevel}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">TOTAL KASUS</span>
                            <span className="text-2.5xl font-black text-[#0F2942] block leading-none">
                                {districtDetail.totalCases}
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">KEPATUHAN</span>
                            <span className="text-2.5xl font-black text-emerald-600 block leading-none flex items-center justify-end gap-1">
                                {districtDetail.adherence}% <span className="text-xs">📈</span>
                            </span>
                        </div>
                    </div>

                    {/* ART Progress Bar */}
                    <div className="space-y-1">
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#0F2942] rounded-full" style={{ width: `${districtDetail.adherence}%` }} />
                        </div>
                    </div>

                    {/* Breakdown List */}
                    <div className="space-y-2 text-xs font-semibold pt-1">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-600">Pasien ART</span>
                            <span className="font-black text-[#0F2942]">{districtDetail.artPatients}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-slate-600">Kasus LTFU</span>
                            <span className="font-black text-red-600">{districtDetail.ltfuCases}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-slate-600">Skrining Terbaru</span>
                            <span className="font-black text-slate-900">{districtDetail.recentScreenings}</span>
                        </div>
                    </div>

                    {/* Detail Action Button */}
                    <button
                        onClick={() => alert(`Membuka analisis terperinci Kecamatan ${districtDetail.name}`)}
                        className="w-full rounded-xl border border-[#0F2942] bg-white py-2.5 px-4 text-xs font-black text-[#0F2942] hover:bg-[#0F2942] hover:text-white transition-all cursor-pointer text-center mt-2"
                    >
                        Lihat Detail Wilayah
                    </button>
                </div>

                {/* Floating Bottom Map Legend Bar (Matching GIS Wilayah_dinkes.png) */}
                <div className="relative z-10 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-700">
                    <div className="flex flex-wrap items-center gap-5">
                        <div className="flex items-center gap-1.5">
                            <span className="h-0.5 w-4 bg-[#68A5C2]" />
                            <span className="text-[11px] text-slate-600">Boundary</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="h-0.5 w-4 bg-amber-500" />
                            <span className="text-[11px] text-slate-600">Roads</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="h-3 w-3 rounded bg-slate-300" />
                            <span className="text-[11px] text-slate-600">Topography</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="h-3 w-3 rounded bg-[#91C9E8]" />
                            <span className="text-[11px] text-slate-600">Water Bodies</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[11px] text-slate-600 font-extrabold">HIV Case Density</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Star className="h-4 w-4 fill-red-600 text-red-600" />
                            <span className="text-[11px] text-slate-900 font-extrabold">High Risk Area</span>
                        </div>
                    </div>

                    {/* Scale & Compass */}
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
                        <Compass className="h-4 w-4 text-[#0F2942]" />
                        <span>Scale Bar: 1:50.000</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
