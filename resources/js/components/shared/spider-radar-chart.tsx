import React from 'react';
import StatusBadgePill from './status-badge-pill';

export interface SpiderRadarScores {
    cd4_score: number; // 0 - 100
    adherence_score: number; // 0 - 100
    symptoms_score: number; // 0 - 100
    viral_load_score: number; // 0 - 100
}

export interface SpiderRadarChartProps {
    scores: SpiderRadarScores;
    patientCode?: string;
    riskStatus?: 'KRITIS' | 'PERINGATAN' | 'STABIL';
    size?: number; // width & height in px, default 280
    className?: string;
}

export default function SpiderRadarChart({
    scores,
    patientCode = 'P-882',
    riskStatus = 'KRITIS',
    size = 280,
    className = '',
}: SpiderRadarChartProps) {
    const center = size / 2;
    const radius = center - 45; // Leave space for axis labels

    // Normalize scores between 0 and 100
    const cd4 = Math.min(100, Math.max(0, scores.cd4_score));
    const adherence = Math.min(100, Math.max(0, scores.adherence_score));
    const symptoms = Math.min(100, Math.max(0, scores.symptoms_score));
    const vl = Math.min(100, Math.max(0, scores.viral_load_score));

    // Calculate vertex positions on 4 axes (Top, Right, Bottom, Left)
    // Axis 0 (Top / CD4): angle -90 deg (-PI/2)
    // Axis 1 (Right / Adherence): angle 0 deg (0)
    // Axis 2 (Bottom / Symptoms): angle 90 deg (PI/2)
    // Axis 3 (Left / Viral Load): angle 180 deg (PI)

    const getCoordinates = (value: number, angleIndex: number) => {
        const angleMap = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];
        const angle = angleMap[angleIndex];
        const r = (value / 100) * radius;
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle),
        };
    };

    // Calculate points for patient scores
    const pt0 = getCoordinates(cd4, 0);
    const pt1 = getCoordinates(adherence, 1);
    const pt2 = getCoordinates(symptoms, 2);
    const pt3 = getCoordinates(vl, 3);

    const polygonPoints = `${pt0.x},${pt0.y} ${pt1.x},${pt1.y} ${pt2.x},${pt2.y} ${pt3.x},${pt3.y}`;

    // Concentric grid levels (25%, 50%, 75%, 100%)
    const gridLevels = [0.25, 0.5, 0.75, 1.0];

    // Color themes based on risk status
    const themeMap = {
        KRITIS: {
            stroke: '#DC2626',
            fill: 'rgba(220, 38, 38, 0.25)',
            dotFill: '#DC2626',
        },
        PERINGATAN: {
            stroke: '#D97706',
            fill: 'rgba(217, 119, 6, 0.25)',
            dotFill: '#D97706',
        },
        STABIL: {
            stroke: '#16A34A',
            fill: 'rgba(22, 163, 74, 0.25)',
            dotFill: '#16A34A',
        },
    };

    const theme = themeMap[riskStatus] || themeMap.KRITIS;

    return (
        <div className={`flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs ${className}`}>
            {/* Header */}
            <div className="flex w-full items-center justify-between border-b border-slate-100 pb-3">
                <div>
                    <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                        AI Assessment Radar Chart 4D
                    </h4>
                    <p className="text-sm font-extrabold text-slate-900">Pasien {patientCode}</p>
                </div>
                <StatusBadgePill status={riskStatus} size="sm" />
            </div>

            {/* SVG Spider Radar */}
            <div className="relative my-3 flex items-center justify-center">
                <svg width={size} height={size} className="overflow-visible">
                    {/* Concentric Web Grid Lines */}
                    {gridLevels.map((level, idx) => {
                        const r = radius * level;
                        const p0 = { x: center, y: center - r };
                        const p1 = { x: center + r, y: center };
                        const p2 = { x: center, y: center + r };
                        const p3 = { x: center - r, y: center };
                        const pointsStr = `${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`;
                        return (
                            <polygon
                                key={idx}
                                points={pointsStr}
                                fill="none"
                                stroke="#E2E8F0"
                                strokeWidth="1"
                                strokeDasharray={level < 1.0 ? '3 3' : 'none'}
                            />
                        );
                    })}

                    {/* Axis Lines */}
                    <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke="#CBD5E1" strokeWidth="1.5" />
                    <line x1={center - radius} y1={center} x2={center + radius} y2={center} stroke="#CBD5E1" strokeWidth="1.5" />

                    {/* Patient Score Polygon */}
                    <polygon
                        points={polygonPoints}
                        fill={theme.fill}
                        stroke={theme.stroke}
                        strokeWidth="2.5"
                        className="transition-all duration-500 ease-out"
                    />

                    {/* Data Vertices (Dots) */}
                    {[pt0, pt1, pt2, pt3].map((pt, i) => (
                        <circle
                            key={i}
                            cx={pt.x}
                            cy={pt.y}
                            r="4.5"
                            fill={theme.dotFill}
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            className="shadow-xs"
                        />
                    ))}

                    {/* Axis Labels */}
                    {/* Top: CD4 */}
                    <text x={center} y={center - radius - 12} textAnchor="middle" className="fill-slate-700 text-[11px] font-bold">
                        CD4 Count ({cd4})
                    </text>
                    {/* Right: Adherence */}
                    <text x={center + radius + 10} y={center + 4} textAnchor="start" className="fill-slate-700 text-[11px] font-bold">
                        Adherence ({adherence}%)
                    </text>
                    {/* Bottom: Symptoms */}
                    <text x={center} y={center + radius + 18} textAnchor="middle" className="fill-slate-700 text-[11px] font-bold">
                        Symptoms ({symptoms})
                    </text>
                    {/* Left: Viral Load */}
                    <text x={center - radius - 10} y={center + 4} textAnchor="end" className="fill-slate-700 text-[11px] font-bold">
                        Viral Load ({vl})
                    </text>
                </svg>
            </div>

            {/* Score Legend Grid */}
            <div className="grid w-full grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-xs">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="font-semibold text-slate-600">CD4 Score:</span>
                    <span className="font-extrabold text-slate-900">{cd4}/100</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="font-semibold text-slate-600">Kepatuhan ART:</span>
                    <span className="font-extrabold text-slate-900">{adherence}%</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="font-semibold text-slate-600">Symptoms Flag:</span>
                    <span className="font-extrabold text-slate-900">{symptoms}/100</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="font-semibold text-slate-600">Viral Load Index:</span>
                    <span className="font-extrabold text-slate-900">{vl}/100</span>
                </div>
            </div>
        </div>
    );
}
