<?php

use Pest\Expectation;

/**
 * HIVCare360 Ecosystem - Architecture & Quality Gate Tests
 * Acuan: docs/08_ARCHITECTURE.md & docs/11_TESTING_GUIDE.md
 */

// Aturan 1: Controller WAJIB Slim (DILARANG memanggil Models Eloquent secara langsung)
arch('controllers must not use models directly')
    ->expect('App\Http\Controllers')
    ->not->toUse('App\Models');

// Aturan 2: Controller DILARANG melakukan Query Database mentah secara langsung
arch('controllers must not use raw DB facade directly')
    ->expect('App\Http\Controllers')
    ->not->toUse('Illuminate\Support\Facades\DB');

// Aturan 3: Action Class DILARANG memanggil Controllers
arch('actions must not use controllers')
    ->expect('App\Actions')
    ->not->toUse('App\Http\Controllers');
