/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filled5dBy = require( '@stdlib/array-base-filled5d-by' );
var zeros5d = require( '@stdlib/array-base-zeros5d' );
var add = require( '@stdlib/number-float64-base-add5' );
var quinary5d = require( './../lib' );

var shape = [ 1, 1, 3, 3, 3 ];

var x = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

var z = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( z );

var w = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( w );

var v = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( v );

var out = zeros5d( shape );
console.log( out );

quinary5d( [ x, y, z, w, v, out ], shape, add );
console.log( out );
