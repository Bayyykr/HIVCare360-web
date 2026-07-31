<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('faskes/dashboard', 'faskes/dashboard')->name('faskes.dashboard');
    Route::inertia('faskes/patients', 'faskes/patients/index')->name('faskes.patients.index');
    Route::inertia('faskes/patients/{id}/emr', 'faskes/patients/emr')->name('faskes.patients.emr');
    Route::inertia('faskes/screenings', 'faskes/screenings/index')->name('faskes.screenings.index');
    Route::inertia('faskes/clinical-exams', 'faskes/clinical-exams/index')->name('faskes.clinical-exams.index');
    Route::inertia('faskes/pharmacy', 'faskes/pharmacy/index')->name('faskes.pharmacy.index');
    Route::inertia('faskes/referrals', 'faskes/referrals/index')->name('faskes.referrals.index');
    Route::inertia('dinkes/dashboard', 'dinkes/dashboard')->name('dinkes.dashboard');
    Route::inertia('dinkes/gis', 'dinkes/gis/index')->name('dinkes.gis.index');
    Route::inertia('dinkes/patients', 'dinkes/patients/index')->name('dinkes.patients.index');
    Route::inertia('dinkes/screenings', 'dinkes/screenings/index')->name('dinkes.screenings.index');
    Route::inertia('dinkes/facilities', 'dinkes/facilities/index')->name('dinkes.facilities.index');
    Route::inertia('dinkes/reports', 'dinkes/reports/index')->name('dinkes.reports.index');
});

require __DIR__.'/settings.php';
