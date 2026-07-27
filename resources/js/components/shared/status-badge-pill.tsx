import React from 'react';

export type StatusLevel =
    | 'KRITIS'
    | 'RISIKO_TINGGI'
    | 'HIGH_RISK'
    | 'PERINGATAN'
    | 'MEDIUM_RISK'
    | 'STABIL'
    | 'LOW_RISK'
    | 'OPTIMAL'
    | 'SANGAT_BAIK'
    | 'INFO'
    | 'TERJADWAL'
    | 'REAKTIF'
    | 'NON_REAKTIF';

export interface StatusBadgePillProps {
    status: StatusLevel | string;
    label?: string;
    showDot?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function StatusBadgePill({
    status,
    label,
    showDot = true,
    size = 'md',
    className = '',
}: StatusBadgePillProps) {
    const normalizedStatus = status.toString().toUpperCase();

    // Map status types to design tokens
    const configMap: Record<
        string,
        { bg: string; text: string; border: string; dot: string; defaultLabel: string }
    > = {
        KRITIS: {
            bg: 'bg-red-50',
            text: 'text-red-800',
            border: 'border-red-200',
            dot: 'bg-red-600',
            defaultLabel: 'Kritis / High Risk',
        },
        RISIKO_TINGGI: {
            bg: 'bg-red-50',
            text: 'text-red-800',
            border: 'border-red-200',
            dot: 'bg-red-600',
            defaultLabel: 'Risiko Tinggi',
        },
        HIGH_RISK: {
            bg: 'bg-red-50',
            text: 'text-red-800',
            border: 'border-red-200',
            dot: 'bg-red-600',
            defaultLabel: 'High Risk',
        },
        REAKTIF: {
            bg: 'bg-red-50',
            text: 'text-red-800',
            border: 'border-red-300',
            dot: 'bg-red-600',
            defaultLabel: 'REAKTIF',
        },
        PERINGATAN: {
            bg: 'bg-amber-50',
            text: 'text-amber-800',
            border: 'border-amber-200',
            dot: 'bg-amber-500',
            defaultLabel: 'Peringatan',
        },
        MEDIUM_RISK: {
            bg: 'bg-amber-50',
            text: 'text-amber-800',
            border: 'border-amber-200',
            dot: 'bg-amber-500',
            defaultLabel: 'Medium Risk',
        },
        STABIL: {
            bg: 'bg-emerald-50',
            text: 'text-emerald-800',
            border: 'border-emerald-200',
            dot: 'bg-emerald-600',
            defaultLabel: 'Stabil',
        },
        LOW_RISK: {
            bg: 'bg-emerald-50',
            text: 'text-emerald-800',
            border: 'border-emerald-200',
            dot: 'bg-emerald-600',
            defaultLabel: 'Low Risk',
        },
        OPTIMAL: {
            bg: 'bg-emerald-50',
            text: 'text-emerald-800',
            border: 'border-emerald-200',
            dot: 'bg-emerald-600',
            defaultLabel: 'Optimal',
        },
        SANGAT_BAIK: {
            bg: 'bg-emerald-50',
            text: 'text-emerald-800',
            border: 'border-emerald-200',
            dot: 'bg-emerald-600',
            defaultLabel: 'Sangat Baik',
        },
        NON_REAKTIF: {
            bg: 'bg-emerald-50',
            text: 'text-emerald-800',
            border: 'border-emerald-300',
            dot: 'bg-emerald-600',
            defaultLabel: 'NON-REAKTIF',
        },
        INFO: {
            bg: 'bg-sky-50',
            text: 'text-sky-800',
            border: 'border-sky-200',
            dot: 'bg-sky-600',
            defaultLabel: 'Info',
        },
        TERJADWAL: {
            bg: 'bg-sky-50',
            text: 'text-sky-800',
            border: 'border-sky-200',
            dot: 'bg-sky-600',
            defaultLabel: 'Terjadwal',
        },
    };

    const config = configMap[normalizedStatus] || {
        bg: 'bg-slate-100',
        text: 'text-slate-700',
        border: 'border-slate-300',
        dot: 'bg-slate-500',
        defaultLabel: status,
    };

    const sizeMap = {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-2.5 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full border font-bold uppercase tracking-wider shadow-2xs ${config.bg} ${config.text} ${config.border} ${sizeMap[size]} ${className}`}
        >
            {showDot && (
                <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
            )}
            <span>{label || config.defaultLabel}</span>
        </span>
    );
}
