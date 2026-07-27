import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

export interface MetricCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon?: LucideIcon;
    trend?: {
        value: string | number;
        isUpward: boolean;
        label?: string;
    };
    status?: 'KRITIS' | 'PERINGATAN' | 'STABIL' | 'INFO';
    iconColor?: string;
    className?: string;
}

export default function MetricCard({
    title,
    value,
    subtitle,
    icon: Icon,
    trend,
    status,
    iconColor = 'bg-sky-50 text-[#0284C7]',
    className = '',
}: MetricCardProps) {
    // Status border tint styling
    const statusBorderMap = {
        KRITIS: 'border-l-4 border-l-red-500',
        PERINGATAN: 'border-l-4 border-l-amber-500',
        STABIL: 'border-l-4 border-l-emerald-500',
        INFO: 'border-l-4 border-l-sky-500',
    };

    return (
        <div
            className={`group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs hover:shadow-md transition-all duration-200 ${
                status ? statusBorderMap[status] : ''
            } ${className}`}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">{title}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2.5xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                            {value}
                        </span>
                        {trend && (
                            <span
                                className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                                    trend.isUpward
                                        ? 'bg-emerald-50 text-emerald-700'
                                        : 'bg-rose-50 text-rose-700'
                                }`}
                            >
                                {trend.isUpward ? (
                                    <TrendingUp className="h-3 w-3" />
                                ) : (
                                    <TrendingDown className="h-3 w-3" />
                                )}
                                {trend.value}
                            </span>
                        )}
                    </div>
                    {subtitle && (
                        <p className="mt-1 text-xs text-slate-500 truncate">{subtitle}</p>
                    )}
                </div>

                {Icon && (
                    <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl p-2.5 shadow-xs transition-transform group-hover:scale-105 ${iconColor}`}
                    >
                        <Icon className="h-6 w-6" />
                    </div>
                )}
            </div>
        </div>
    );
}
