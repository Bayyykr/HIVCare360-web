import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, X, AlertCircle } from 'lucide-react';

export interface FileDropzoneProps {
    onFileSelected: (file: File | null) => void;
    maxSizeMB?: number;
    accept?: string;
    label?: string;
    sublabel?: string;
    className?: string;
}

export default function FileDropzone({
    onFileSelected,
    maxSizeMB = 5,
    accept = '.pdf,.jpg,.jpeg,.png',
    label = 'Unggah Lampiran Hasil Lab / Foto Thorax',
    sublabel = 'Format PDF, JPG, PNG (Maksimal 5MB)',
    className = '',
}: FileDropzoneProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validateAndSelectFile = (file: File) => {
        setErrorMessage(null);

        // Validate size (max 5MB)
        const maxSizeBytes = maxSizeMB * 1024 * 1024;
        if (file.size > maxSizeBytes) {
            setErrorMessage(`Ukuran file melebihi batas maksimal ${maxSizeMB}MB.`);
            return;
        }

        setSelectedFile(file);
        onFileSelected(file);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndSelectFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            validateAndSelectFile(e.target.files[0]);
        }
    };

    const handleRemove = () => {
        setSelectedFile(null);
        setErrorMessage(null);
        onFileSelected(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(1)} KB`;
        }
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept={accept}
                className="hidden"
            />

            {!selectedFile ? (
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition-all duration-200 ${
                        isDragging
                            ? 'border-[#0284C7] bg-sky-50/70 scale-[1.01]'
                            : 'border-slate-300 bg-slate-50/50 hover:border-[#0284C7] hover:bg-sky-50/30'
                    }`}
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-[#0284C7] shadow-xs">
                        <UploadCloud className="h-6 w-6" />
                    </div>
                    <p className="mt-3 text-xs font-bold text-slate-800">{label}</p>
                    <p className="mt-1 text-[11px] text-slate-500">{sublabel}</p>
                    <span className="mt-3 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50">
                        Pilih Berkas File
                    </span>
                </div>
            ) : (
                <div className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/50 p-3.5 shadow-2xs">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
                            <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="truncate text-xs font-bold text-slate-900">{selectedFile.name}</p>
                            <p className="text-[11px] font-medium text-emerald-700">
                                {formatFileSize(selectedFile.size)} - Siap Diunggah
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-emerald-100 hover:text-red-600 transition-colors"
                        title="Hapus Berkas"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}

            {errorMessage && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-red-600">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}
        </div>
    );
}
