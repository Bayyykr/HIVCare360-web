import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    LayoutDashboard,
    User,
    Stethoscope,
    HeartPulse,
    Pill,
    Share2,
    Search,
    Bell,
    LogOut,
    Settings,
    HelpCircle,
    Menu,
    X,
} from 'lucide-react';

interface FaskesLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function FaskesLayout({ children, title }: FaskesLayoutProps) {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Sidebar navigation items matching Puskesmas.png exactly
    const navItems = [
        {
            name: 'Dashboard',
            href: '/faskes/dashboard',
            icon: LayoutDashboard,
            active: url === '/faskes/dashboard' || url.startsWith('/faskes/dashboard'),
        },
        {
            name: 'Data Pasien',
            href: '/faskes/patients',
            icon: User,
            active: url.startsWith('/faskes/patients'),
        },
        {
            name: 'Skrining HIV',
            href: '/faskes/screenings',
            icon: Stethoscope,
            active: url.startsWith('/faskes/screenings'),
        },
        {
            name: 'Pemeriksaan',
            href: '/faskes/clinical-exams',
            icon: HeartPulse,
            active: url.startsWith('/faskes/clinical-exams'),
        },
        {
            name: 'Pengobatan ART',
            href: '/faskes/pharmacy',
            icon: Pill,
            active: url.startsWith('/faskes/pharmacy'),
        },
        {
            name: 'Rujukan',
            href: '/faskes/referrals',
            icon: Share2,
            active: url.startsWith('/faskes/referrals'),
        },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 antialiased flex">
            {/* Mobile Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Left Sidebar (Pure White #FFFFFF matching Puskesmas.png) */}
            <aside
                className={`fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col bg-white border-r border-slate-200 shadow-2xs transition-transform duration-300 ease-in-out lg:translate-x-0 ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Brand Header */}
                <div className="flex h-20 items-center justify-between px-6 border-b border-slate-100">
                    <Link href="/faskes/dashboard" className="flex flex-col">
                        <span className="text-xl font-black tracking-tight text-[#0F2942]">
                            HIVCare360
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                            Clinical Portal
                        </span>
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 lg:hidden"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Vertical Navigation Items */}
                <nav className="flex-1 space-y-1.5 px-3 py-6 overflow-y-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-3.5 rounded-xl px-4 py-3 text-xs font-bold transition-all relative ${
                                    item.active
                                        ? 'bg-[#E0F2FE] text-[#0284C7]'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                            >
                                {item.active && (
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-[#0284C7]" />
                                )}
                                <Icon className={`h-4 w-4 ${item.active ? 'text-[#0284C7]' : 'text-slate-400'}`} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Sidebar Settings & Logout */}
                <div className="border-t border-slate-100 p-4 space-y-1">
                    <Link
                        href="/settings"
                        className="flex items-center gap-3.5 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50"
                    >
                        <Settings className="h-4 w-4 text-slate-400" />
                        <span>Settings</span>
                    </Link>
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex w-full items-center gap-3.5 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-red-50 hover:text-red-600"
                    >
                        <LogOut className="h-4 w-4 text-slate-400" />
                        <span>Logout</span>
                    </Link>
                </div>
            </aside>

            {/* Main Area (pl-64 for fixed sidebar, header stays at the top of content column) */}
            <div className="flex flex-1 flex-col lg:pl-64 min-w-0">
                {/* Header Bar (Fixed at top of screen / sticky top-0) */}
                <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/95 backdrop-blur-md px-6 shadow-2xs shrink-0">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </button>

                        <h2 className="text-base font-extrabold text-[#0F2942] tracking-tight">
                            HIV Management Platform
                        </h2>
                    </div>

                    {/* Center Search Input (Matching Puskesmas.png) */}
                    <div className="relative hidden md:block w-72 lg:w-96">
                        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Cari ID Pasien atau Rekam Medis..."
                            className="w-full rounded-xl border-none bg-[#E0F2FE]/50 py-2 pl-10 pr-4 text-xs font-medium text-slate-700 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30"
                        />
                    </div>

                    {/* Right Utilities */}
                    <div className="flex items-center gap-5">
                        {/* Notification Bell with red dot */}
                        <button
                            type="button"
                            className="relative text-slate-500 hover:text-slate-900 transition-colors"
                            title="Notifications"
                        >
                            <Bell className="h-5 w-5 text-slate-600" />
                            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
                        </button>

                        {/* Help Icon */}
                        <button
                            type="button"
                            className="text-slate-500 hover:text-slate-900 transition-colors"
                            title="Help & Info"
                        >
                            <HelpCircle className="h-5 w-5 text-slate-600" />
                        </button>

                        {/* User Profile Avatar Circle */}
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F2942] text-xs font-bold text-white shadow-xs overflow-hidden border border-slate-200">
                                <span className="text-white font-extrabold text-[11px]">SA</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content Container */}
                <main className="flex-1 p-6 lg:p-8">{children}</main>
            </div>
        </div>
    );
}
