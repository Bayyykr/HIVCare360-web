import React from 'react';
import { AlertTriangle, ArrowRight, X } from 'lucide-react';

export interface RedAlertBannerProps {
    title: string;
    message: string;
    actionLabel?: string;
    onAction?: () => void;
    onDismiss?: () => void;
    className?: string;
}

export default function RedAlertBanner({
    title,
    message,
    actionLabel = 'Lihat Detail Risiko',
    onAction,
    onDismiss,
    className = '',
}: RedAlertBannerProps) {
    return (
        <div
            className={`relative overflow-hidden rounded-xl border border-red-300 bg-red-50 p-4 shadow-sm transition-all ${className}`}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-md shadow-red-500/20">
                        <AlertTriangle className="h-5 w-5 animate-pulse" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-red-900 tracking-tight flex items-center gap-2">
                            <span>{title}</span>
                            <span className="rounded-full bg-red-200 px-2 py-0.5 text-[10px] font-extrabold text-red-900 uppercase">
                                Red Alert AI
                            </span>
                        </h4>
                        <p className="mt-1 text-xs font-medium text-red-800 leading-relaxed">
                            {message}
                        </p>

                        {onAction && (
                            <button
                                onClick={onAction}
                                className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-red-700 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-red-800 transition-colors cursor-pointer"
                            >
                                <span>{actionLabel}</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                        )}
                    </div>
                </div>

                {onDismiss && (
                    <button
                        onClick={onDismiss}
                        className="rounded-lg p-1 text-red-400 hover:bg-red-100 hover:text-red-700 transition-colors"
                        aria-label="Tutup Peringatan"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
