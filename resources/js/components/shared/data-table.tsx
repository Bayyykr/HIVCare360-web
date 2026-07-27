import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

export interface Column<T> {
    header: string;
    accessorKey?: keyof T;
    cell?: (row: T) => React.ReactNode;
    className?: string;
}

export interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    searchPlaceholder?: string;
    searchableKey?: keyof T;
    statusFilterOptions?: { label: string; value: string }[];
    statusKey?: keyof T;
    pageSize?: number;
    title?: string;
    actionButton?: React.ReactNode;
    emptyText?: string;
}

export default function DataTable<T extends Record<string, any>>({
    columns,
    data,
    searchPlaceholder = 'Cari data...',
    searchableKey,
    statusFilterOptions,
    statusKey,
    pageSize = 5,
    title,
    actionButton,
    emptyText = 'Tidak ada data ditemukan.',
}: DataTableProps<T>) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('ALL');
    const [currentPage, setCurrentPage] = useState(1);

    // Filter logic
    const filteredData = data.filter((row) => {
        // Search filter
        let matchesSearch = true;
        if (searchQuery.trim() && searchableKey) {
            const val = String(row[searchableKey] || '').toLowerCase();
            matchesSearch = val.includes(searchQuery.toLowerCase());
        }

        // Status filter
        let matchesStatus = true;
        if (selectedStatus !== 'ALL' && statusKey) {
            matchesStatus = String(row[statusKey]).toUpperCase() === selectedStatus.toUpperCase();
        }

        return matchesSearch && matchesStatus;
    });

    // Pagination logic
    const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

    return (
        <div className="flex flex-col rounded-xl border border-slate-200/80 bg-white shadow-xs">
            {/* Header & Controls */}
            {(title || searchableKey || statusFilterOptions || actionButton) && (
                <div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
                    {title && (
                        <h3 className="text-base font-bold text-slate-900 tracking-tight">{title}</h3>
                    )}

                    <div className="flex flex-wrap items-center gap-2">
                        {/* Search Input */}
                        {searchableKey && (
                            <div className="relative min-w-[200px] flex-1 sm:flex-none">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    placeholder={searchPlaceholder}
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-1.5 pl-9 pr-3 text-xs font-medium text-slate-700 placeholder-slate-400 transition-all focus:border-[#0284C7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                />
                            </div>
                        )}

                        {/* Status Filter Dropdown */}
                        {statusFilterOptions && statusKey && (
                            <div className="relative">
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => {
                                        setSelectedStatus(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="appearance-none rounded-xl border border-slate-200 bg-slate-50/70 py-1.5 pl-3 pr-8 text-xs font-semibold text-slate-700 focus:border-[#0284C7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                                >
                                    <option value="ALL">Semua Status</option>
                                    {statusFilterOptions.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                                <Filter className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                            </div>
                        )}

                        {/* Custom Action Button */}
                        {actionButton}
                    </div>
                </div>
            )}

            {/* Table Area */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                    <thead className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx} className={`px-4 py-3 ${col.className || ''}`}>
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, rowIdx) => (
                                <tr
                                    key={rowIdx}
                                    className="hover:bg-sky-50/30 transition-colors"
                                >
                                    {columns.map((col, colIdx) => (
                                        <td key={colIdx} className={`px-4 py-3.5 ${col.className || ''}`}>
                                            {col.cell
                                                ? col.cell(row)
                                                : col.accessorKey
                                                ? String(row[col.accessorKey] ?? '')
                                                : null}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-4 py-8 text-center text-xs text-slate-400 font-medium"
                                >
                                    {emptyText}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-xs text-slate-500">
                    <div>
                        Menampilkan <span className="font-bold text-slate-900">{startIndex + 1}</span> hingga{' '}
                        <span className="font-bold text-slate-900">
                            {Math.min(startIndex + pageSize, filteredData.length)}
                        </span>{' '}
                        dari <span className="font-bold text-slate-900">{filteredData.length}</span> data
                    </div>

                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="rounded-lg border border-slate-200 p-1.5 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                            aria-label="Previous Page"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span className="px-3 font-semibold text-slate-700">
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="rounded-lg border border-slate-200 p-1.5 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                            aria-label="Next Page"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
