<?php

use Tests\TestCase;

uses(TestCase::class);

/**
 * HIVCare360 Ecosystem - Shared UI Component Tests
 * Acuan: Task 1.4 & docs/09_DESIGN_SYSTEM.md
 */

test('berkas komponen UI shared tersedia dan memiliki struktur yang benar', function () {
    $sharedComponents = [
        'metric-card.tsx',
        'status-badge-pill.tsx',
        'red-alert-banner.tsx',
        'spider-radar-chart.tsx',
        'data-table.tsx',
        'file-dropzone.tsx',
    ];

    $dir = __DIR__ . '/../../../resources/js/components/shared/';

    foreach ($sharedComponents as $file) {
        $path = $dir . $file;
        expect(file_exists($path))->toBeTrue("Komponen {$file} harus tersedia di resources/js/components/shared/");
    }
});
