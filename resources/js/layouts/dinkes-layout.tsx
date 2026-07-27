import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    LayoutDashboard,
    MapPin,
    Users,
    ClipboardCheck,
    Building2,
    BarChart3,
    Search,
    Bell,
    LogOut,
    ChevronDown,
    Shield,
    Menu,
    X,
    Activity,
} from 'lucide-react';

interface DinkesLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function DinkesLayout({ children, title }: DinkesLayoutProps) {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    // Navigation items for Portal Dinas Kesehatan (Role 1: Admin Dinkes)
    const navItems = [
        {
            name: 'Dashboard Operasional',
            href: '/dinkes/dashboard',
            icon: LayoutDashboard,
            active: url.startsWith('/dinkes/dashboard'),
        },
        {
            name: 'Peta Wilayah GIS',
            href: '/dinkes/gis',
            icon: MapPin,
            active: url.startsWith('/dinkes/gis'),
        },
        {
            name: 'Pemantauan Pasien',
            href: '/dinkes/patients',
            icon: Users,
            active: url.startsWith('/dinkes/patients'),
        },
        {
            name: 'Pelacakan Skrining',
            href: '/dinkes/screenings',
            icon: ClipboardCheck,
            active: url.startsWith('/dinkes/screenings'),
        },
        {
            name: 'Monitoring Faskes',
            href: '/dinkes/facilities',
            icon: Building2,
            active: url.startsWith('/dinkes/facilities'),
        },
        {
            name: 'Laporan & Analisis',
            href: '/dinkes/reports',
            icon: BarChart3,
            active: url.startsWith('/dinkes/reports'),
        },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 antialiased">
            {/* Overlay Mobile */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar (Fixed 256px / w-64) */}
            <aside
                className={`fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col bg-[#0F2942] text-white shadow-xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Brand Header */}
                <div className="flex h-16 items-center justify-between border-b border-slate-700/60 px-6">
                    <Link href="/dinkes/dashboard" className="flex items-center gap-3 group">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0284C7] to-[#1E3A8A] text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                            <Activity className="h-6 w-6" />
                        </div>
                        <div>
                            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                                HIVCare<span className="text-[#38BDF8]">360</span>
                            </span>
                            <span className="block text-[10px] font-semibold tracking-wider text-sky-300 uppercase">
                                Portal Dinas Kesehatan
                            </span>
                        </div>
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Scope Badge */}
                <div className="mx-4 my-3 rounded-lg bg-slate-800/80 p-2.5 border border-slate-700/50">
                    <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-[#38BDF8]" />
                        <span className="text-xs font-semibold text-slate-200">Kabupaten Jember</span>
                    </div>
                    <p className="mt-0.5 text-[11px] text-slate-400 pl-6">Wilayah Kerja Dinkes</p>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 space-y-1.5 px-3 py-2 overflow-y-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                                    item.active
                                        ? 'bg-[#0284C7] text-white shadow-md shadow-sky-600/30'
                                        : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                                }`}
                            >
                                <Icon
                                    className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                                        item.active ? 'text-white' : 'text-sky-400 group-hover:text-white'
                                    }`}
                                />
                                <span className="flex-1">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Footer User Info */}
                <div className="border-t border-slate-700/60 p-4">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-800/50 p-2.5 border border-slate-700/40">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-sm font-bold text-white shadow-xs">
                            AD
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <h4 className="truncate text-xs font-semibold text-white">Admin Dinkes Jember</h4>
                            <p className="truncate text-[10px] text-sky-300">dinkes@jemberkab.go.id</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Topbar (Fixed 64px / h-16) & Main Content */}
            <div className="flex flex-1 flex-col lg:pl-64">
                {/* Topbar Header */}
                <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 sm:px-6 backdrop-blur-md shadow-xs">
                    {/* Mobile Toggle & Page Title */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                            aria-label="Open sidebar"
                        >
                            <Menu className="h-5 w-5" />
                        </button>

                        <div className="hidden sm:block">
                            <h1 className="text-base font-bold text-slate-900 tracking-tight">
                                {title || 'Portal Administrasi Dinas Kesehatan'}
                            </h1>
                            <p className="text-[11px] text-slate-500">Kabupaten Jember - Smart Governance AI</p>
                        </div>
                    </div>

                    {/* Search & Actions Bar */}
                    <div className="flex items-center gap-3">
                        {/* Search Input Bar */}
                        <div className="relative hidden md:block w-64 lg:w-80">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Cari data wilayah, faskes, atau laporan..."
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-1.5 pl-9 pr-4 text-xs font-medium text-slate-700 placeholder-slate-400 transition-all focus:border-[#0284C7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                            />
                        </div>

                        {/* Notification Bell Icon */}
                        <button
                            type="button"
                            className="relative rounded-xl border border-slate-200/80 bg-white p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                            title="Pemberitahuan Peringatan AI"
                        >
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                            </span>
                        </button>

                        <div className="h-6 w-px bg-slate-200" />

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-100 transition-colors"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F2942] text-xs font-bold text-white">
                                    AD
                                </div>
                                <div className="hidden text-left sm:block">
                                    <span className="block text-xs font-bold text-slate-800 leading-none">
                                        Admin Dinkes
                                    </span>
                                    <span className="text-[10px] font-semibold text-sky-600">Supervisor</span>
                                </div>
                                <ChevronDown className="h-4 w-4 text-slate-400" />
                            </button>

                            {/* Dropdown Menu */}
                            {userDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg ring-1 ring-black/5 animate-in fade-in-50 zoom-in-95">
                                    <div className="border-b border-slate-100 px-3 py-2">
                                        <p className="text-xs font-bold text-slate-900">Admin Dinkes Jember</p>
                                        <p className="text-[11px] text-slate-500 truncate">dinkes@jemberkab.go.id</p>
                                    </div>
                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="flex w-full items-center gap-2 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Keluar Akun
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page Content Container (Padding 24px / p-6) */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>

                {/* Footer */}
                <footer className="border-t border-slate-200/80 bg-white py-3 px-6 text-center text-xs text-slate-500">
                    HIVCare360 Ecosystem © 2026 - Smart Governance Berbasis Random Forest AI Kabupaten Jember.
                </footer>
            </div>
        </div>
    );
}
