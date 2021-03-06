/* ==========================================================================
   Atom

   Atom Atomic Component

   ========================================================================== */

'use strict';

const AtomicComponent = require( './AtomicComponent' );
const TYPES = require( '../utilities/config' ).TYPES;

const Atom = AtomicComponent.extend( {
  TYPE: TYPES.ATOM,
  CHILD_TYPES: []
} );

module.exports = Atom;
