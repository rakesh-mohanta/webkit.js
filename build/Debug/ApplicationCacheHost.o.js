// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20ApplicationCacheHostC1EPNS_14DocumentLoaderE;
var __ZN7WebCore20ApplicationCacheHostD1Ev;
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20ApplicationCacheHost16fillResourceListEPN3WTF6VectorINS0_12ResourceInfoELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (!(__ZNK7WebCore16ApplicationCache10isCompleteEv(i5) | 0)) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 + 8 >> 2] | 0;
 i6 = HEAP32[i5 + 12 >> 2] | 0;
 i7 = i1 + (i6 << 3) | 0;
 if ((HEAP32[i5 + 20 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L10 : do {
  if ((i6 | 0) == 0) {
   i8 = i1;
  } else {
   i5 = i1;
   while (1) {
    i9 = HEAP32[i5 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i8 = i5;
     break L10;
    }
    i5 = i5 + 8 | 0;
    if ((i5 | 0) == (i7 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i8 | 0) == (i7 | 0)) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 i6 = i4 + 4 | 0;
 i5 = i4 + 8 | 0;
 i9 = i4 + 12 | 0;
 i10 = i4 + 16 | 0;
 i11 = i4 + 20 | 0;
 i12 = i4 + 24 | 0;
 i13 = i4 + 28 | 0;
 i14 = i4 + 32 | 0;
 i15 = i4 + 36 | 0;
 i16 = i4 + 40 | 0;
 i17 = i4 + 44 | 0;
 i18 = i4 + 48 | 0;
 i19 = i4 + 49 | 0;
 i20 = i4 + 50 | 0;
 i21 = i4 + 51 | 0;
 i22 = i4 + 52 | 0;
 i23 = i4 + 56 | 0;
 i24 = i2 + 8 | 0;
 i25 = i2 + 4 | 0;
 i26 = i2 | 0;
 i27 = i8;
 L19 : while (1) {
  i8 = HEAP32[i27 + 4 >> 2] | 0;
  i28 = (i8 | 0) != 0;
  if (i28) {
   i29 = i8 + 4 | 0;
   HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
  }
  i29 = HEAP32[i8 + 228 >> 2] | 0;
  i30 = __ZN7WebCore24ApplicationCacheResource22estimatedSizeInStorageEv(i8) | 0;
  i31 = HEAP32[i8 + 8 >> 2] | 0;
  HEAP32[i1 >> 2] = i31;
  if ((i31 | 0) != 0) {
   i32 = i31 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
  }
  i32 = i8 + 12 | 0;
  i31 = HEAP8[i6] & -2 | HEAP8[i32] & 1;
  HEAP8[i6] = i31;
  HEAP8[i6] = i31 & -3 | HEAP8[i32] & 2;
  HEAP32[i5 >> 2] = HEAP32[i8 + 16 >> 2];
  HEAP32[i9 >> 2] = HEAP32[i8 + 20 >> 2];
  HEAP32[i10 >> 2] = HEAP32[i8 + 24 >> 2];
  HEAP32[i11 >> 2] = HEAP32[i8 + 28 >> 2];
  HEAP32[i12 >> 2] = HEAP32[i8 + 32 >> 2];
  HEAP32[i13 >> 2] = HEAP32[i8 + 36 >> 2];
  HEAP32[i14 >> 2] = HEAP32[i8 + 40 >> 2];
  HEAP32[i15 >> 2] = HEAP32[i8 + 44 >> 2];
  HEAP32[i16 >> 2] = HEAP32[i8 + 48 >> 2];
  HEAP32[i17 >> 2] = HEAP32[i8 + 52 >> 2];
  HEAP8[i18] = i29 & 1;
  HEAP8[i19] = i29 >>> 1 & 1;
  HEAP8[i20] = i29 >>> 4 & 1;
  HEAP8[i21] = i29 >>> 3 & 1;
  HEAP8[i22] = i29 >>> 2 & 1;
  HEAP32[i23 >> 2] = i30;
  HEAP32[i23 + 4 >> 2] = tempRet0;
  i30 = HEAP32[i24 >> 2] | 0;
  if ((i30 | 0) == (HEAP32[i25 >> 2] | 0)) {
   __ZN3WTF6VectorIN7WebCore20ApplicationCacheHost12ResourceInfoELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i2, i4);
  } else {
   i29 = HEAP32[i26 >> 2] | 0;
   i32 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[i29 + (i30 << 6) >> 2] = i32;
   i32 = i29 + (i30 << 6) + 4 | 0;
   i31 = HEAP8[i32] & -2 | HEAP8[i6] & 1;
   HEAP8[i32] = i31;
   HEAP8[i32] = i31 & -3 | HEAP8[i6] & 2;
   HEAP32[i29 + (i30 << 6) + 8 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i29 + (i30 << 6) + 12 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i29 + (i30 << 6) + 16 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i29 + (i30 << 6) + 20 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i29 + (i30 << 6) + 24 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i29 + (i30 << 6) + 28 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i29 + (i30 << 6) + 32 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i29 + (i30 << 6) + 36 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i29 + (i30 << 6) + 40 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i29 + (i30 << 6) + 44 >> 2] = HEAP32[i17 >> 2];
   HEAP8[i29 + (i30 << 6) + 48 | 0] = HEAP8[i18] & 1;
   HEAP8[i29 + (i30 << 6) + 49 | 0] = HEAP8[i19] & 1;
   HEAP8[i29 + (i30 << 6) + 50 | 0] = HEAP8[i20] & 1;
   HEAP8[i29 + (i30 << 6) + 51 | 0] = HEAP8[i21] & 1;
   HEAP8[i29 + (i30 << 6) + 52 | 0] = HEAP8[i22] & 1;
   i31 = i29 + (i30 << 6) + 56 | 0;
   i30 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i31 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i31 + 4 >> 2] = i30;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
  }
  i30 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i30 | 0) != 0) {
    i31 = i30 | 0;
    i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
    if ((i29 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i30);
     break;
    } else {
     HEAP32[i31 >> 2] = i29;
     break;
    }
   }
  } while (0);
  do {
   if (i28) {
    i30 = i8 + 4 | 0;
    i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
     break;
    } else {
     HEAP32[i30 >> 2] = i29;
     break;
    }
   }
  } while (0);
  i8 = i27 + 8 | 0;
  if ((i8 | 0) == (i7 | 0)) {
   i33 = 31;
   break;
  } else {
   i34 = i8;
  }
  while (1) {
   i8 = HEAP32[i34 >> 2] | 0;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    break;
   }
   i8 = i34 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    i33 = 30;
    break L19;
   } else {
    i34 = i8;
   }
  }
  if ((i34 | 0) == (i7 | 0)) {
   i33 = 33;
   break;
  } else {
   i27 = i34;
  }
 }
 if ((i33 | 0) == 30) {
  STACKTOP = i3;
  return;
 } else if ((i33 | 0) == 31) {
  STACKTOP = i3;
  return;
 } else if ((i33 | 0) == 33) {
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEENS_12KeyValuePairIS4_NS1_INS2_18SubstituteResourceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSE_IS7_EEEESF_E6expandEPS8_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i18 & i17;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L11 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 8;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L11;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 8;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 8) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i20 >> 2] = i19;
      break;
     }
     i19 = i13 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 3](i19);
    }
   } while (0);
   i17 = i30 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i13 = i19 + 4 | 0;
     i20 = i13 | 0;
     i14 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i20 >> 2] = i14;
      break;
     }
     i14 = i13 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 3](i14);
    }
   } while (0);
   i19 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i19;
   i19 = i7 + (i10 << 3) + 4 | 0;
   i14 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i16 >> 2] = i14;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i11;
  }
  i14 = i10 + 1 | 0;
  if ((i14 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i14;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i36 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i30 = i10 | 0;
      i2 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i30 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 + 4 | 0;
    i11 = i2 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i11 >> 2] = i10;
     break;
    }
    i10 = i2 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 3](i10);
   }
  } while (0);
  i1 = i36 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i36 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore20ResourceResponseBaseaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 4 | 0;
 i4 = i1 + 4 | 0;
 i3 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i3;
 HEAP8[i4] = i3 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 i5 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = i2 + 56 | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i5 = i1 + 56 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 i3 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 64 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i2 + 68 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 68 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 i3 = HEAP32[i2 + 76 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 76 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_(i1 + 80 | 0, i2 + 80 | 0) | 0;
 i4 = i1 + 100 | 0;
 HEAP8[i4] = HEAP8[i4] & -2 | HEAP8[i2 + 100 | 0] & 1;
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 i4 = i1 + 108 | 0;
 HEAP8[i4] = HEAP8[i4] & -2 | HEAP8[i2 + 108 | 0] & 1;
 i4 = HEAP32[i2 + 112 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 112 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = i2 + 116 | 0;
 i5 = i1 + 116 | 0;
 i4 = HEAP8[i5] & -2 | HEAP8[i3] & 1;
 HEAP8[i5] = i4;
 i6 = i4 & -3 | HEAP8[i3] & 2;
 HEAP8[i5] = i6;
 i4 = i6 & -5 | HEAP8[i3] & 4;
 HEAP8[i5] = i4;
 i6 = i4 & -9 | HEAP8[i3] & 8;
 HEAP8[i5] = i6;
 i4 = i6 & -17 | HEAP8[i3] & 16;
 HEAP8[i5] = i4;
 i6 = i4 & -33 | HEAP8[i3] & 32;
 HEAP8[i5] = i6;
 i4 = i6 & -65 | HEAP8[i3] & 64;
 HEAP8[i5] = i4;
 HEAP8[i5] = i4 & 127 | HEAP8[i3] & -128;
 i3 = i1 + 117 | 0;
 HEAP8[i3] = HEAP8[i3] & -2 | HEAP8[i2 + 117 | 0] & 1;
 HEAPF64[i1 + 120 >> 3] = +HEAPF64[i2 + 120 >> 3];
 HEAPF64[i1 + 128 >> 3] = +HEAPF64[i2 + 128 >> 3];
 HEAPF64[i1 + 136 >> 3] = +HEAPF64[i2 + 136 >> 3];
 HEAPF64[i1 + 144 >> 3] = +HEAPF64[i2 + 144 >> 3];
 HEAPF64[i1 + 152 >> 3] = +HEAPF64[i2 + 152 >> 3];
 return i1 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEENS_12KeyValuePairIS4_NS1_INS2_18SubstituteResourceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSE_IS7_EEEESF_E3addINS_17HashMapTranslatorISH_SC_EERPS3_RPNS2_24ApplicationCacheResourceEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SH_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEENS_12KeyValuePairIS4_NS1_INS2_18SubstituteResourceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSE_IS7_EEEESF_E6expandEPS8_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = i10 & i6;
 i11 = i7 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 6;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i7 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 8;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 8) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) != 0) {
  i3 = i14 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i13 | 0;
 i22 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i14;
 do {
  if ((i22 | 0) != 0) {
   i14 = i22 + 4 | 0;
   i3 = i14 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i14 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
  }
 } while (0);
 i22 = HEAP32[i4 >> 2] | 0;
 if ((i22 | 0) != 0) {
  i4 = i22 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i22;
 do {
  if ((i8 | 0) != 0) {
   i22 = i8 + 4 | 0;
   i4 = i22 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i4 >> 2] = i14;
    break;
   }
   i14 = i22 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 3](i14);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i14 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i14;
 i8 = i2 + 4 | 0;
 i22 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i22 | 0)) {
  i27 = i13;
  i28 = i22;
 } else {
  i22 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEENS_12KeyValuePairIS4_NS1_INS2_18SubstituteResourceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSE_IS7_EEEESF_E6expandEPS8_(i2, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i10 = i9 << 12 ^ i9;
 i9 = i10 >>> 7 ^ i10;
 i10 = i9 << 2 ^ i9;
 i9 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i11 = i3;
 i3 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   i15 = HEAP32[i8 >> 2] | 0;
   if ((i14 | 0) == (i15 | 0)) {
    i17 = 7;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, i15) | 0) {
    i17 = 7;
    break;
   } else {
    i16 = i10;
   }
  }
  i15 = (i3 | 0) == 0 ? i9 : i3;
  i10 = i16;
  i11 = i15 + i12 | 0;
  i3 = i15;
 }
 if ((i17 | 0) == 7) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i10;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i10;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i10;
 do {
  if ((i17 | 0) != 0) {
   i10 = i17 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i4 = i17 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i17;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i17 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i19 = i18;
  i20 = i17;
 } else {
  i17 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 << 3) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i4, i5, i12 | 0, i12);
    i10 = i12 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = i1 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i12;
 i8 = i1 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i13;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 if ((i13 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = i12 + (i4 << 3) | 0;
   do {
    if ((HEAP32[i8 >> 2] | 0) != -1) {
     i9 = HEAP32[i12 + (i4 << 3) + 4 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i5 = i9 | 0;
       i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i5 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i6 = i9 | 0;
     i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i6 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore20ApplicationCacheHost22maybeLoadSynchronouslyERNS_15ResourceRequestERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENS7_15CrashOnOverflowEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 if (!(__ZN7WebCore20ApplicationCacheHost38shouldLoadResourceFromApplicationCacheERKNS_15ResourceRequestERPNS_24ApplicationCacheResourceE(i1, i2, i7) | 0)) {
  i9 = 0;
  STACKTOP = i6;
  return i9 | 0;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore20ResourceResponseBaseaSERKS0_(i4 | 0, i10 + 56 | 0) | 0;
  HEAP8[i4 + 160 | 0] = HEAP8[i10 + 216 | 0] & 1;
  i4 = i10 + 224 | 0;
  i10 = __ZNK7WebCore12SharedBuffer4dataEv(HEAP32[i4 >> 2] | 0) | 0;
  __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i5, i10, __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i4 >> 2] | 0) | 0);
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 i4 = HEAP32[(__ZNK7WebCore14DocumentLoader11frameLoaderEv(HEAP32[i1 + 4 >> 2] | 0) | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 304 >> 2] & 1](i8, i4, i2);
 i2 = i8 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i1 = i3 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 HEAP32[i3 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 i10 = i8 + 8 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i4 = i3 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i8 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i3 + 12 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 HEAP8[i3 + 16 | 0] = HEAP8[i8 + 16 | 0] & 1;
 HEAP8[i3 + 17 | 0] = HEAP8[i8 + 17 | 0] & 1;
 HEAP8[i3 + 18 | 0] = HEAP8[i8 + 18 | 0] & 1;
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i5 = i8 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 i2 = i8 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 } else {
  HEAP32[i2 >> 2] = i3;
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore14SubstituteDataaSEOS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = i2 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 12 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = i2 + 16 | 0;
 i3 = i1 + 16 | 0;
 i4 = HEAP8[i3] & -2 | HEAP8[i5] & 1;
 HEAP8[i3] = i4;
 HEAP8[i3] = i4 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 56 >> 2];
 i5 = i2 + 60 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 60 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = i2 + 64 | 0;
 i5 = i1 + 64 | 0;
 i4 = HEAP8[i5] & -2 | HEAP8[i3] & 1;
 HEAP8[i5] = i4;
 HEAP8[i5] = i4 & -3 | HEAP8[i3] & 2;
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 88 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 92 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 100 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 HEAP8[i1 + 108 | 0] = HEAP8[i2 + 108 | 0] & 1;
 return i1 | 0;
}
function __ZN7WebCore20ApplicationCacheHost21maybeLoadMainResourceERNS_15ResourceRequestERNS_14SubstituteDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
 i5 = i4 | 0;
 i6 = i4 + 112 | 0;
 i7 = i4 + 120 | 0;
 i8 = i4 + 168 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i10 = HEAP32[i9 + 12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[(HEAP32[i10 + 36 >> 2] | 0) + 188 | 0] & 2) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = __ZN7WebCore21ApplicationCacheGroup19cacheForMainRequestERKNS_15ResourceRequestEPNS_14DocumentLoaderE(i2, i9) | 0;
 if ((i10 | 0) != 0) {
  i9 = i10 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i1 + 32 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i1 | 0) == 0) {
  i11 = i10;
 } else {
  i10 = i1 | 0;
  i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore16ApplicationCacheD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
  } else {
   HEAP32[i10 >> 2] = i12;
  }
  i11 = HEAP32[i9 >> 2] | 0;
 }
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = __ZN7WebCore16ApplicationCache18resourceForRequestERKNS_15ResourceRequestE(i11, i2) | 0;
 i2 = HEAP32[i9 + 224 >> 2] | 0;
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i12 = i2 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i9 + 56 | 0;
 i9 = __ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i12) | 0;
 i2 = __ZNK7WebCore20ResourceResponseBase16textEncodingNameEv(i12) | 0;
 i12 = i7 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i7);
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i8);
 __ZN7WebCore14SubstituteDataC2EN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringES7_RKNS_3URLESA_b(i5, i6, i9, i2, i7, i8, 1);
 __ZN7WebCore14SubstituteDataaSEOS0_(i3, i5) | 0;
 __ZN7WebCore14SubstituteDataD2Ev(i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i12 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i5 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore20ApplicationCacheHost20applicationCacheInfoEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if (!(__ZNK7WebCore16ApplicationCache10isCompleteEv(i5) | 0)) {
    break;
   }
   i2 = HEAP32[i5 + 28 >> 2] | 0;
   i6 = i5 + 64 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = HEAP32[i6 + 4 >> 2] | 0;
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) != 0) {
    i9 = i6 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i2 + 12 | 0;
   i6 = i1 + 4 | 0;
   i10 = HEAP8[i6] & -2 | HEAP8[i9] & 1;
   HEAP8[i6] = i10;
   HEAP8[i6] = i10 & -3 | HEAP8[i9] & 2;
   HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 16 >> 2];
   HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 20 >> 2];
   HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 24 >> 2];
   HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 28 >> 2];
   HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 32 >> 2];
   HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 36 >> 2];
   HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 40 >> 2];
   HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 44 >> 2];
   HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 48 >> 2];
   HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 52 >> 2];
   i2 = i1 + 64 | 0;
   _memset(i1 + 48 | 0, 0, 16) | 0;
   HEAP32[i2 >> 2] = i7;
   HEAP32[i2 + 4 >> 2] = i8;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i11 = 0;
 } else {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  i11 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP8[i4 + 4 | 0] | 0;
 i2 = i1 + 4 | 0;
 HEAP8[i2] = HEAP8[i2] & -4 | i5 & 1 | i5 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
 _memset(i1 + 48 | 0, 0, 24) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i11 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore20ApplicationCacheHost38shouldLoadResourceFromApplicationCacheERKNS_15ResourceRequestERPNS_24ApplicationCacheResourceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if (!(__ZNK7WebCore16ApplicationCache10isCompleteEv(i7) | 0)) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if (!(__ZN7WebCore16ApplicationCache23requestIsHTTPOrHTTPSGetERKNS_15ResourceRequestE(i2) | 0)) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i1 = i2 | 0;
 __ZNK7WebCore3URL8protocolEv(i5, __ZNK7WebCore19ResourceRequestBase3urlEv(i1) | 0);
 __ZNK7WebCore3URL8protocolEv(i6, (HEAP32[i7 + 28 >> 2] | 0) + 8 | 0);
 i2 = i5 | 0;
 i5 = i6 | 0;
 i6 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   if (i6) {
    break;
   } else {
    i8 = 0;
   }
   STACKTOP = i4;
   return i8 | 0;
  } else {
   i2 = i9 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    if (i6) {
     break;
    } else {
     i8 = 0;
    }
    STACKTOP = i4;
    return i8 | 0;
   } else {
    HEAP32[i2 >> 2] = i10;
    if (i6) {
     break;
    } else {
     i8 = 0;
    }
    STACKTOP = i4;
    return i8 | 0;
   }
  }
 } while (0);
 i6 = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(i7, __ZNK7WebCore19ResourceRequestBase3urlEv(i1) | 0) | 0;
 HEAP32[i3 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   if ((HEAP8[i7 + 32 | 0] & 1) != 0) {
    i8 = 0;
    STACKTOP = i4;
    return i8 | 0;
   }
   if (__ZN7WebCore16ApplicationCache27urlMatchesFallbackNamespaceERKNS_3URLEPS1_(i7, __ZNK7WebCore19ResourceRequestBase3urlEv(i1) | 0, 0) | 0) {
    i8 = 0;
    STACKTOP = i4;
    return i8 | 0;
   }
   if (__ZN7WebCore16ApplicationCache22isURLInOnlineWhitelistERKNS_3URLE(i7, __ZNK7WebCore19ResourceRequestBase3urlEv(i1) | 0) | 0) {
    i8 = 0;
   } else {
    break;
   }
   STACKTOP = i4;
   return i8 | 0;
  }
 } while (0);
 i8 = 1;
 STACKTOP = i4;
 return i8 | 0;
}
function __ZN3WTF6VectorIN7WebCore20ApplicationCacheHost12ResourceInfoELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 6) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore20ApplicationCacheHost12ResourceInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 6 << 6) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore20ApplicationCacheHost12ResourceInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = i11 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 << 6) >> 2] = i5;
 i5 = i11 + 4 | 0;
 i2 = i12 + (i6 << 6) + 4 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i5] & 2;
 HEAP32[i12 + (i6 << 6) + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i12 + (i6 << 6) + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i12 + (i6 << 6) + 16 >> 2] = HEAP32[i11 + 16 >> 2];
 HEAP32[i12 + (i6 << 6) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 << 6) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 << 6) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i12 + (i6 << 6) + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i12 + (i6 << 6) + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i12 + (i6 << 6) + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i12 + (i6 << 6) + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 HEAP8[i12 + (i6 << 6) + 48 | 0] = HEAP8[i11 + 48 | 0] & 1;
 HEAP8[i12 + (i6 << 6) + 49 | 0] = HEAP8[i11 + 49 | 0] & 1;
 HEAP8[i12 + (i6 << 6) + 50 | 0] = HEAP8[i11 + 50 | 0] & 1;
 HEAP8[i12 + (i6 << 6) + 51 | 0] = HEAP8[i11 + 51 | 0] & 1;
 HEAP8[i12 + (i6 << 6) + 52 | 0] = HEAP8[i11 + 52 | 0] & 1;
 i5 = i12 + (i6 << 6) + 56 | 0;
 i6 = i11 + 56 | 0;
 i11 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i11;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 HEAP32[i1 + 8 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
   i12 = i11;
  } else {
   i4 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i5) | 0;
   i12 = (i5 | 0) == (i2 | 0) ? i4 : i11;
  }
  i4 = i10 + 1 | 0;
  if ((i4 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i4;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i2 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i2;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF6VectorIN7WebCore20ApplicationCacheHost12ResourceInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 6) | 0;
 if (i2 >>> 0 > 67108863 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 6) | 0;
 HEAP32[i3 >> 2] = i7 >>> 6;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i9 = i7 + 4 | 0;
   i10 = HEAP8[i9] & -2 | HEAP8[i8] & 1;
   HEAP8[i9] = i10;
   HEAP8[i9] = i10 & -3 | HEAP8[i8] & 2;
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i7 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i7 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i7 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i7 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i7 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i7 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i7 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   HEAP8[i7 + 48 | 0] = HEAP8[i6 + 48 | 0] & 1;
   HEAP8[i7 + 49 | 0] = HEAP8[i6 + 49 | 0] & 1;
   HEAP8[i7 + 50 | 0] = HEAP8[i6 + 50 | 0] & 1;
   HEAP8[i7 + 51 | 0] = HEAP8[i6 + 51 | 0] & 1;
   HEAP8[i7 + 52 | 0] = HEAP8[i6 + 52 | 0] & 1;
   i8 = i7 + 56 | 0;
   i10 = i6 + 56 | 0;
   i9 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i2 = i9 | 0;
     i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i2 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = i6 + 64 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 64 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore20ApplicationCacheHost25notifyDOMApplicationCacheENS0_7EventIDEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 do {
  if ((i2 | 0) != 4) {
   i7 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] | 0;
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i7 | 0) == 0) {
    break;
   }
   i8 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i7 + 32 >> 2] | 0) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation32updateApplicationCacheStatusImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i8, i7);
  }
 } while (0);
 if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
  __ZN7WebCore20ApplicationCacheHost16dispatchDOMEventENS0_7EventIDEii(i1, i2, i3, i4);
  STACKTOP = i5;
  return;
 }
 i7 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = i3;
 HEAP32[i6 + 8 >> 2] = i4;
 i4 = i1 + 20 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i1 + 16 >> 2] | 0)) {
  i1 = (HEAP32[i7 >> 2] | 0) + (i3 * 12 & -1) | 0;
  i2 = i6;
  HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  STACKTOP = i5;
  return;
 }
 i2 = i3 + 1 | 0;
 i1 = i7 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i6 >>> 0) {
   i9 = 10;
  } else {
   if ((i8 + (i3 * 12 & -1) | 0) >>> 0 <= i6 >>> 0) {
    i9 = 10;
    break;
   }
   __ZN3WTF6VectorIN7WebCore20ApplicationCacheHost13DeferredEventELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i2);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (((i6 - i8 | 0) / 12 & -1) * 12 & -1) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 10) {
  __ZN3WTF6VectorIN7WebCore20ApplicationCacheHost13DeferredEventELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i2);
  i11 = i6;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i12 + ((HEAP32[i4 >> 2] | 0) * 12 & -1) | 0;
 i12 = i11;
 HEAP32[i1 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20ApplicationCacheHost17maybeLoadResourceEPNS_14ResourceLoaderERNS_15ResourceRequestERKNS_3URLE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i1 + 4 | 0;
 i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 if ((HEAP8[(HEAP32[i10 + 36 >> 2] | 0) + 188 | 0] & 2) == 0) {
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 i10 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(i3 | 0) | 0) >> 2] | 0;
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(i10, HEAP32[i4 >> 2] | 0) | 0)) {
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 if (!(__ZN7WebCore20ApplicationCacheHost38shouldLoadResourceFromApplicationCacheERKNS_15ResourceRequestERPNS_24ApplicationCacheResourceE(i1, i3, i7) | 0)) {
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEENS_12KeyValuePairIS4_NS1_INS2_18SubstituteResourceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSE_IS7_EEEESF_E3addINS_17HashMapTranslatorISH_SC_EERPS3_RPNS2_24ApplicationCacheResourceEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SH_SF_EEEEOT0_OT1_(i8, i3 + 1384 | 0, i6, i7);
 do {
  if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
   i6 = HEAP32[i8 >> 2] | 0;
   i3 = HEAP32[i7 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i2 = i3 + 4 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   }
   i2 = i6 + 4 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i6 | 0) == 0) {
    break;
   }
   i3 = i6 + 4 | 0;
   i6 = i3 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i3 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
  }
 } while (0);
 __ZN7WebCore14DocumentLoader36deliverSubstituteResourcesAfterDelayEv(HEAP32[i9 >> 2] | 0);
 i11 = 1;
 STACKTOP = i5;
 return i11 | 0;
}
function __ZN7WebCore20ApplicationCacheHost48scheduleLoadFallbackResourceFromApplicationCacheEPNS_14ResourceLoaderEPNS_16ApplicationCacheE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 + 4 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 if ((HEAP8[(HEAP32[i9 + 36 >> 2] | 0) + 188 | 0] & 2) == 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 if (!(__ZN7WebCore20ApplicationCacheHost35getApplicationCacheFallbackResourceERKNS_15ResourceRequestERPNS_24ApplicationCacheResourceEPNS_16ApplicationCacheE(i1, i2 + 192 | 0, i6, i3) | 0)) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEENS_12KeyValuePairIS4_NS1_INS2_18SubstituteResourceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSE_IS7_EEEESF_E3addINS_17HashMapTranslatorISH_SC_EERPS3_RPNS2_24ApplicationCacheResourceEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SH_SF_EEEEOT0_OT1_(i7, i3 + 1384 | 0, i5, i6);
 do {
  if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
   i5 = HEAP32[i7 >> 2] | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i1 = i3 + 4 | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   }
   i1 = i5 + 4 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i3;
   if ((i5 | 0) == 0) {
    break;
   }
   i3 = i5 + 4 | 0;
   i5 = i3 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i5 >> 2] = i1;
    break;
   }
   i1 = i3 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
  }
 } while (0);
 __ZN7WebCore14DocumentLoader36deliverSubstituteResourcesAfterDelayEv(HEAP32[i8 >> 2] | 0);
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 3](i8);
 i10 = 1;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCore14SubstituteDataC2EN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringES7_RKNS_3URLESA_b(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i5 + 4 | 0;
 i4 = i1 + 16 | 0;
 i2 = HEAP8[i4] & -2 | HEAP8[i3] & 1;
 HEAP8[i4] = i2;
 HEAP8[i4] = i2 & -3 | HEAP8[i3] & 2;
 HEAP32[i1 + 20 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i5 + 44 >> 2];
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 60 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i6 + 4 | 0;
 i5 = i1 + 64 | 0;
 i2 = HEAP8[i5] & -2 | HEAP8[i3] & 1;
 HEAP8[i5] = i2;
 HEAP8[i5] = i2 & -3 | HEAP8[i3] & 2;
 HEAP32[i1 + 68 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i6 + 16 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i6 + 20 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i6 + 24 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i6 + 28 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i6 + 32 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i6 + 36 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i6 + 40 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i6 + 44 >> 2];
 HEAP8[i1 + 108 | 0] = i7 & 1;
 return;
}
function __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = -1640531527;
  i7 = i3 + 4 | 0;
  HEAP8[i7] = 0;
  i8 = i3 + 6 | 0;
  HEAP16[i8 >> 1] = 0;
  __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i3, i4, i5);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((HEAP8[i7] & 1) == 0) {
   i9 = i5;
  } else {
   i7 = (HEAPU16[i8 >> 1] | 0) + i5 | 0;
   i5 = i7 << 11 ^ i7;
   i9 = (i5 >>> 17) + i5 | 0;
  }
  i5 = i9 << 3 ^ i9;
  i9 = (i5 >>> 5) + i5 | 0;
  i5 = i9 << 2 ^ i9;
  i9 = (i5 >>> 15) + i5 | 0;
  i5 = (i9 << 10 ^ i9) & 16777215;
  i10 = (i5 | 0) == 0 ? 8388608 : i5;
  STACKTOP = i2;
  return i10 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = (i9 & 1 | 0) == 0;
 i7 = i9 >>> 1;
 if ((i7 | 0) == 0) {
  i11 = i5;
  i12 = -1640531527;
 } else {
  i9 = i7;
  i8 = i5;
  i6 = -1640531527;
  while (1) {
   i4 = i9 - 1 | 0;
   i3 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8] | 0) << 1) >> 1] | 0) + i6 | 0;
   i13 = i3 << 16 ^ i3 ^ (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8 + 1 | 0] | 0) << 1) >> 1] | 0) << 11;
   i14 = (i13 >>> 11) + i13 | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i9 = i4;
    i8 = i8 + 2 | 0;
    i6 = i14;
   }
  }
  i11 = i5 + (i7 << 1) | 0;
  i12 = i14;
 }
 if (i1) {
  i15 = i12;
 } else {
  i1 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i11] | 0) << 1) >> 1] | 0) + i12 | 0;
  i12 = i1 << 11 ^ i1;
  i15 = (i12 >>> 17) + i12 | 0;
 }
 i12 = i15 << 3 ^ i15;
 i15 = (i12 >>> 5) + i12 | 0;
 i12 = i15 << 2 ^ i15;
 i15 = (i12 >>> 15) + i12 | 0;
 i12 = (i15 << 10 ^ i15) & 16777215;
 i10 = (i12 | 0) == 0 ? 8388608 : i12;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i1 >> 2] | 0) | 0;
 i6 = (i5 >>> 23) + ~i5 | 0;
 i7 = i6 << 12 ^ i6;
 i6 = i7 >>> 7 ^ i7;
 i7 = i6 << 2 ^ i6;
 i6 = i7 >>> 20 ^ i7 | 1;
 i7 = i5;
 i5 = 0;
 i8 = 0;
 while (1) {
  i9 = i7 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 3;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i11 | 0) == (i12 | 0)) {
    i15 = i10;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i11, i12) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i12 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i12 + i9 | 0;
  i5 = i12;
  i8 = i14;
 }
 if ((i13 | 0) == 3) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i14;
 i14 = i2 + 4 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN7WebCore20ApplicationCacheHost30maybeLoadFallbackSynchronouslyERKNS_15ResourceRequestERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENS8_15CrashOnOverflowEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 if ((HEAP8[i3 + 16 | 0] & 1) == 0) {
  if ((HEAP8[i3 + 17 | 0] & 1) != 0) {
   i8 = 3;
  }
 } else {
  i8 = 3;
 }
 do {
  if ((i8 | 0) == 3) {
   i3 = i4 | 0;
   if (((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i3) | 0) - 400 | 0) >>> 0 < 100 >>> 0) {
    break;
   }
   if (((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i3) | 0) - 500 | 0) >>> 0 < 100 >>> 0) {
    break;
   }
   i9 = __ZNK7WebCore19ResourceRequestBase3urlEv(i2 | 0) | 0;
   if (!(__ZN7WebCore27protocolHostAndPortAreEqualERKNS_3URLES2_(i9, __ZNK7WebCore20ResourceResponseBase3urlEv(i3) | 0) | 0)) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 if (!(__ZN7WebCore20ApplicationCacheHost35getApplicationCacheFallbackResourceERKNS_15ResourceRequestERPNS_24ApplicationCacheResourceEPNS_16ApplicationCacheE(i1, i2, i7, 0) | 0)) {
  STACKTOP = i6;
  return;
 }
 i2 = HEAP32[i7 >> 2] | 0;
 __ZN7WebCore20ResourceResponseBaseaSERKS0_(i4 | 0, i2 + 56 | 0) | 0;
 HEAP8[i4 + 160 | 0] = HEAP8[i2 + 216 | 0] & 1;
 i4 = i5 + 4 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   i7 = i5 + 8 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i5 | 0;
   i1 = HEAP32[i7 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 i4 = i2 + 224 | 0;
 i2 = __ZNK7WebCore12SharedBuffer4dataEv(HEAP32[i4 >> 2] | 0) | 0;
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i5, i2, __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i4 >> 2] | 0) | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20ApplicationCacheHost16dispatchDOMEventENS0_7EventIDEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i1 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = __ZN7WebCore19DOMApplicationCache11toEventTypeENS_20ApplicationCacheHost7EventIDE(i2) | 0;
 if ((i2 | 0) == 4) {
  i2 = __ZN3WTF10fastMallocEj(72) | 0;
  __ZN7WebCore13ProgressEventC1ERKN3WTF12AtomicStringEbyy(i2, i1, 1, i4, (i4 | 0) < 0 | 0 ? -1 : 0, i3, (i3 | 0) < 0 | 0 ? -1 : 0);
  i8 = i2;
 } else {
  i2 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i2, i1, 0, 0);
  i8 = i2;
 }
 i2 = HEAP32[i7 >> 2] | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i8;
 i1 = (i8 | 0) == 0;
 if (!i1) {
  i3 = i8 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i5 + 8 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i2, i6, i3) | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 8 | 0;
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i7 - 8 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
  }
 } while (0);
 if (i1) {
  STACKTOP = i5;
  return;
 }
 i1 = i8 + 8 | 0;
 i8 = i1 | 0;
 i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i8 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
 i3 = i1 - 8 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20ApplicationCacheHost35getApplicationCacheFallbackResourceERKNS_15ResourceRequestERPNS_24ApplicationCacheResourceEPNS_16ApplicationCacheE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 do {
  if ((i4 | 0) == 0) {
   i7 = HEAP32[i1 + 24 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
   } else {
    i9 = i7;
    break;
   }
   STACKTOP = i5;
   return i8 | 0;
  } else {
   i9 = i4;
  }
 } while (0);
 if (!(__ZNK7WebCore16ApplicationCache10isCompleteEv(i9) | 0)) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 if (!(__ZN7WebCore16ApplicationCache23requestIsHTTPOrHTTPSGetERKNS_15ResourceRequestE(i2) | 0)) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 i1 = i2 | 0;
 do {
  if (__ZN7WebCore16ApplicationCache22isURLInOnlineWhitelistERKNS_3URLE(i9, __ZNK7WebCore19ResourceRequestBase3urlEv(i1) | 0) | 0) {
   i10 = 0;
  } else {
   if (!(__ZN7WebCore16ApplicationCache27urlMatchesFallbackNamespaceERKNS_3URLEPS1_(i9, __ZNK7WebCore19ResourceRequestBase3urlEv(i1) | 0, i6) | 0)) {
    i10 = 0;
    break;
   }
   HEAP32[i3 >> 2] = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(i9, i6 | 0) | 0;
   i10 = 1;
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = i10;
  STACKTOP = i5;
  return i8 | 0;
 }
 i4 = i6 | 0;
 i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i8 = i10;
  STACKTOP = i5;
  return i8 | 0;
 } else {
  HEAP32[i4 >> 2] = i9;
  i8 = i10;
  STACKTOP = i5;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore20ApplicationCacheHost32maybeLoadFallbackForMainResponseERKNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i3 | 0;
 if (((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i4) | 0) - 400 | 0) >>> 0 < 100 >>> 0) {
  i5 = 3;
 } else {
  if (((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i4) | 0) - 500 | 0) >>> 0 < 100 >>> 0) {
   i5 = 3;
  }
 }
 do {
  if ((i5 | 0) == 3) {
   i4 = i1 + 4 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   i6 = HEAP32[i3 + 12 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP8[(HEAP32[i6 + 36 >> 2] | 0) + 188 | 0] & 2) == 0) {
    break;
   }
   i6 = __ZN7WebCore21ApplicationCacheGroup27fallbackCacheForMainRequestERKNS_15ResourceRequestEPNS_14DocumentLoaderE(i2, i3) | 0;
   if ((i6 | 0) != 0) {
    i3 = i6 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   }
   i3 = i1 + 32 | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore16ApplicationCacheD1Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i7 = __ZNK7WebCore14DocumentLoader18mainResourceLoaderEv(HEAP32[i4 >> 2] | 0) | 0;
   if (__ZN7WebCore20ApplicationCacheHost48scheduleLoadFallbackResourceFromApplicationCacheEPNS_14ResourceLoaderEPNS_16ApplicationCacheE(i1, i7, HEAP32[i3 >> 2] | 0) | 0) {
    i9 = 1;
   } else {
    break;
   }
   return i9 | 0;
  }
 } while (0);
 i9 = 0;
 return i9 | 0;
}
function __ZN7WebCore20ApplicationCacheHost9swapCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 if ((HEAP8[i5 + 168 | 0] & 1) != 0) {
  __ZN7WebCore21ApplicationCacheGroup26disassociateDocumentLoaderEPNS_14DocumentLoaderE(i5, HEAP32[i1 + 4 >> 2] | 0);
  i4 = 1;
  return i4 | 0;
 }
 i6 = HEAP32[i5 + 60 >> 2] | 0;
 if ((i3 | 0) == (i6 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 28 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i1 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i3 + 32 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 __ZN7WebCore24InspectorInstrumentation32updateApplicationCacheStatusImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i1, i3);
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore20ApplicationCacheHost29maybeLoadFallbackForMainErrorERKNS_15ResourceRequestERKNS_13ResourceErrorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 do {
  if ((HEAP8[i3 + 17 | 0] & 1) == 0) {
   i4 = i1 + 4 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = HEAP32[i5 + 12 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP8[(HEAP32[i6 + 36 >> 2] | 0) + 188 | 0] & 2) == 0) {
    break;
   }
   i6 = __ZN7WebCore21ApplicationCacheGroup27fallbackCacheForMainRequestERKNS_15ResourceRequestEPNS_14DocumentLoaderE(i2, i5) | 0;
   if ((i6 | 0) != 0) {
    i5 = i6 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   }
   i5 = i1 + 32 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore16ApplicationCacheD1Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i7 = __ZNK7WebCore14DocumentLoader18mainResourceLoaderEv(HEAP32[i4 >> 2] | 0) | 0;
   if (__ZN7WebCore20ApplicationCacheHost48scheduleLoadFallbackResourceFromApplicationCacheEPNS_14ResourceLoaderEPNS_16ApplicationCacheE(i1, i7, HEAP32[i5 >> 2] | 0) | 0) {
    i9 = 1;
   } else {
    break;
   }
   return i9 | 0;
  }
 } while (0);
 i9 = 0;
 return i9 | 0;
}
function __ZN7WebCore14SubstituteDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20ApplicationCacheHost19stopDeferringEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = (i2 | 0) != 0;
 if (i3) {
  i4 = i2 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 12 | 0;
 i5 = i1 + 20 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 0;
 } else {
  i7 = i4 | 0;
  i8 = 0;
  while (1) {
   i9 = HEAP32[i7 >> 2] | 0;
   __ZN7WebCore20ApplicationCacheHost16dispatchDOMEventENS0_7EventIDEii(i1, HEAP32[i9 + (i8 * 12 & -1) >> 2] | 0, HEAP32[i9 + (i8 * 12 & -1) + 4 >> 2] | 0, HEAP32[i9 + (i8 * 12 & -1) + 8 >> 2] | 0);
   i9 = i8 + 1 | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 < i10 >>> 0) {
    i8 = i9;
   } else {
    i6 = i10;
    break;
   }
  }
 }
 i8 = i1 + 16 | 0;
 do {
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i7 = i4 | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 HEAP8[i1 + 8 | 0] = 0;
 if (!i3) {
  return;
 }
 i3 = i2 + 4 | 0;
 i2 = i3 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore20ApplicationCacheHostD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore21ApplicationCacheGroup26disassociateDocumentLoaderEPNS_14DocumentLoaderE(i4, HEAP32[i1 + 4 >> 2] | 0);
  } else {
   __ZN7WebCore21ApplicationCacheGroup26disassociateDocumentLoaderEPNS_14DocumentLoaderE(HEAP32[i3 + 4 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 12 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore20ApplicationCacheHostD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore21ApplicationCacheGroup26disassociateDocumentLoaderEPNS_14DocumentLoaderE(i4, HEAP32[i1 + 4 >> 2] | 0);
  } else {
   __ZN7WebCore21ApplicationCacheGroup26disassociateDocumentLoaderEPNS_14DocumentLoaderE(HEAP32[i3 + 4 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 12 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + i3 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if (i6 >>> 0 > i8 >>> 0) {
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i10 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   i9 = i10 >>> 0 > i6 >>> 0 ? i10 : i6;
   if (i8 >>> 0 >= i9 >>> 0) {
    break;
   }
   i10 = i1 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = __ZN3WTF18fastMallocGoodSizeEj(i9) | 0;
   HEAP32[i7 >> 2] = i12;
   i9 = __ZN3WTF10fastMallocEj(i12) | 0;
   HEAP32[i10 >> 2] = i9;
   _memcpy(i9 | 0, i11 | 0, i5) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if ((HEAP32[i10 >> 2] | 0) == (i11 | 0)) {
    HEAP32[i10 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 if (i6 >>> 0 < i7 >>> 0) {
  _WTFCrash();
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = i6;
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  HEAP8[i5 + (i13 + i7) | 0] = HEAP8[i2 + i13 | 0] | 0;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i6;
 return;
}
function __ZN3WTF6VectorIN7WebCore20ApplicationCacheHost13DeferredEventELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 * 12 & -1) | 0;
 if (i5 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 12 & -1;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7;
   i8 = i6;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   i8 = i6 + 12 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 12 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = (i3 & 1 | 0) == 0;
 i5 = i3 >>> 1;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i3 = i1 | 0;
  i7 = i5 << 1;
  i8 = i5;
  i5 = i2;
  while (1) {
   i9 = i8 - 1 | 0;
   i10 = _u_foldCase(HEAPU16[i5 >> 1] | 0, 0) | 0;
   i11 = _u_foldCase(HEAPU16[i5 + 2 >> 1] | 0, 0) | 0;
   i12 = (HEAP32[i3 >> 2] | 0) + (i10 & 65535) | 0;
   i10 = i12 ^ i11 << 11 & 134215680 ^ i12 << 16;
   HEAP32[i3 >> 2] = (i10 >>> 11) + i10;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i8 = i9;
    i5 = i5 + 4 | 0;
   }
  }
  i6 = i2 + (i7 << 1) | 0;
 }
 if (i4) {
  return;
 }
 i4 = _u_foldCase(HEAPU16[i6 >> 1] | 0, 0) | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP16[i1 + 6 >> 1] = i4;
  HEAP8[i6] = 1;
  return;
 } else {
  HEAP8[i6] = 0;
  i6 = i1 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) + (HEAPU16[i1 + 6 >> 1] | 0) | 0;
  i1 = i7 ^ i4 << 11 & 134215680 ^ i7 << 16;
  HEAP32[i6 >> 2] = (i1 >>> 11) + i1;
  return;
 }
}
function __ZN7WebCore20ApplicationCacheHost25maybeLoadFallbackForErrorEPNS_14ResourceLoaderERKNS_13ResourceErrorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 do {
  if ((HEAP8[i3 + 17 | 0] & 1) == 0) {
   if ((__ZNK7WebCore14DocumentLoader18mainResourceLoaderEv(HEAP32[i1 + 4 >> 2] | 0) | 0) == (i2 | 0)) {
    i4 = __ZN7WebCore20ApplicationCacheHost29maybeLoadFallbackForMainErrorERKNS_15ResourceRequestERKNS_13ResourceErrorE(i1, i2 + 192 | 0, i3) | 0;
    return i4 | 0;
   } else {
    if (__ZN7WebCore20ApplicationCacheHost48scheduleLoadFallbackResourceFromApplicationCacheEPNS_14ResourceLoaderEPNS_16ApplicationCacheE(i1, i2, 0) | 0) {
     i4 = 1;
    } else {
     break;
    }
    return i4 | 0;
   }
  }
 } while (0);
 i4 = 0;
 return i4 | 0;
}
function __ZN7WebCore20ApplicationCacheHost28maybeLoadFallbackForResponseEPNS_14ResourceLoaderERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i3 | 0;
 if (((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i4) | 0) - 400 | 0) >>> 0 < 100 >>> 0) {
  i5 = 3;
 } else {
  if (((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i4) | 0) - 500 | 0) >>> 0 < 100 >>> 0) {
   i5 = 3;
  }
 }
 do {
  if ((i5 | 0) == 3) {
   if (__ZN7WebCore20ApplicationCacheHost48scheduleLoadFallbackResourceFromApplicationCacheEPNS_14ResourceLoaderEPNS_16ApplicationCacheE(i1, i2, 0) | 0) {
    i6 = 1;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i6 = 0;
 return i6 | 0;
}
function __ZN7WebCore20ApplicationCacheHost28maybeLoadFallbackForRedirectEPNS_14ResourceLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 do {
  if ((HEAP8[i4 + 116 | 0] & 1) == 0) {
   i5 = __ZNK7WebCore19ResourceRequestBase3urlEv(i3 | 0) | 0;
   if (__ZN7WebCore27protocolHostAndPortAreEqualERKNS_3URLES2_(i5, __ZNK7WebCore20ResourceResponseBase3urlEv(i4 | 0) | 0) | 0) {
    break;
   }
   if (__ZN7WebCore20ApplicationCacheHost48scheduleLoadFallbackResourceFromApplicationCacheEPNS_14ResourceLoaderEPNS_16ApplicationCacheE(i1, i2, 0) | 0) {
    i6 = 1;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i6 = 0;
 return i6 | 0;
}
function __ZN7WebCore20ApplicationCacheHost19setApplicationCacheEN3WTF10PassRefPtrINS_16ApplicationCacheEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 28 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 24 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore16ApplicationCacheD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore20ApplicationCacheHost6statusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i1 = HEAP32[i2 + 4 >> 2] | 0;
   i4 = HEAP32[i1 + 56 >> 2] | 0;
   if ((i4 | 0) == 1) {
    i3 = 2;
    break;
   } else if ((i4 | 0) == 0) {
    if ((HEAP8[i1 + 168 | 0] & 1) != 0) {
     i3 = 5;
     break;
    }
    i3 = (i2 | 0) == (HEAP32[i1 + 60 >> 2] | 0) ? 1 : 4;
    break;
   } else if ((i4 | 0) == 2) {
    i3 = 3;
    break;
   } else {
    i3 = 0;
    break;
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore20ApplicationCacheHost27finishedLoadingMainResourceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i1 + 24 >> 2] | 0;
   if ((i3 | 0) == 0) {
    return;
   }
   if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
    return;
   }
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i5 = i4;
    break;
   }
   return;
  } else {
   i5 = i2;
  }
 } while (0);
 __ZN7WebCore21ApplicationCacheGroup27finishedLoadingMainResourceEPNS_14DocumentLoaderE(i5, HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore20ApplicationCacheHost25failedLoadingMainResourceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i1 + 24 >> 2] | 0;
   if ((i3 | 0) == 0) {
    return;
   }
   if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
    return;
   }
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i5 = i4;
    break;
   }
   return;
  } else {
   i5 = i2;
  }
 } while (0);
 __ZN7WebCore21ApplicationCacheGroup25failedLoadingMainResourceEPNS_14DocumentLoaderE(i5, HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZN7WebCore20ApplicationCacheHost5abortEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21ApplicationCacheGroup5abortEPNS_5FrameE(i2, HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] | 0);
  return;
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore21ApplicationCacheGroup5abortEPNS_5FrameE(HEAP32[i2 + 4 >> 2] | 0, HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore20ApplicationCacheHost18stopLoadingInFrameEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore21ApplicationCacheGroup18stopLoadingInFrameEPNS_5FrameE(i3, i2);
  return;
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore21ApplicationCacheGroup18stopLoadingInFrameEPNS_5FrameE(HEAP32[i3 + 4 >> 2] | 0, i2);
 return;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore20ApplicationCacheHost6updateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore21ApplicationCacheGroup6updateEPNS_5FrameENS_28ApplicationCacheUpdateOptionE(HEAP32[i2 + 4 >> 2] | 0, HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] | 0, 1);
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore20ApplicationCacheHost32maybeLoadMainResourceForRedirectERNS_15ResourceRequestERNS_14SubstituteDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20ApplicationCacheHost21maybeLoadMainResourceERNS_15ResourceRequestERNS_14SubstituteDataE(i1, i2, i3);
 return;
}
function __ZN7WebCore20ApplicationCacheHost25isApplicationCacheEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 188 | 0] & 2) != 0;
 return i3 | 0;
}
function __ZN7WebCore20ApplicationCacheHost23selectCacheWithManifestERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore21ApplicationCacheGroup11selectCacheEPNS_5FrameERKNS_3URLE(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore20ApplicationCacheHost26selectCacheWithoutManifestEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21ApplicationCacheGroup29selectCacheWithoutManifestURLEPNS_5FrameE(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore20ApplicationCacheHost19canCacheInPageCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 24 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 28 >> 2] | 0) == 0;
 return i2 | 0;
}
function __ZN7WebCore20ApplicationCacheHostC2EPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP8[i1 + 8 | 0] = 1;
 _memset(i1 + 12 | 0, 0, 24) | 0;
 return;
}
function __ZN7WebCore20ApplicationCacheHostC1EPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP8[i1 + 8 | 0] = 1;
 _memset(i1 + 12 | 0, 0, 24) | 0;
 return;
}
function __ZN7WebCore20ApplicationCacheHost24mainResourceDataReceivedEPKcixb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return;
}
function __ZN7WebCore20ApplicationCacheHost33setCandidateApplicationCacheGroupEPNS_21ApplicationCacheGroupE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 28 >> 2] = i2;
 return;
}
function __ZN7WebCore20ApplicationCacheHost22setDOMApplicationCacheEPNS_19DOMApplicationCacheE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore20ApplicationCacheHostD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore20ApplicationCacheHostC2EPNS_14DocumentLoaderE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF6VectorIN7WebCore20ApplicationCacheHost12ResourceInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore20ApplicationCacheHost22maybeLoadSynchronouslyERNS_15ResourceRequestERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENS7_15CrashOnOverflowEEE","__ZN7WebCore20ApplicationCacheHost18stopLoadingInFrameEPNS_5FrameE","__ZN7WebCore20ApplicationCacheHost28maybeLoadFallbackForRedirectEPNS_14ResourceLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE","__ZN7WebCore20ApplicationCacheHost5abortEv","__ZN7WebCore20ApplicationCacheHost17maybeLoadResourceEPNS_14ResourceLoaderERNS_15ResourceRequestERKNS_3URLE","__ZN7WebCore20ApplicationCacheHost35getApplicationCacheFallbackResourceERKNS_15ResourceRequestERPNS_24ApplicationCacheResourceEPNS_16ApplicationCacheE","__ZN7WebCore20ApplicationCacheHost19canCacheInPageCacheEv","__ZN7WebCore20ApplicationCacheHost9swapCacheEv","__ZN3WTF6VectorIN7WebCore20ApplicationCacheHost12ResourceInfoELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_","__ZN7WebCore20ApplicationCacheHost48scheduleLoadFallbackResourceFromApplicationCacheEPNS_14ResourceLoaderEPNS_16ApplicationCacheE","__ZN7WebCore20ApplicationCacheHost20applicationCacheInfoEv","__ZN7WebCore20ApplicationCacheHost16fillResourceListEPN3WTF6VectorINS0_12ResourceInfoELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore20ApplicationCacheHost19stopDeferringEventsEv","__ZNK7WebCore20ApplicationCacheHost6statusEv","__ZN7WebCore20ApplicationCacheHost27finishedLoadingMainResourceEv","__ZN7WebCore20ApplicationCacheHost19setApplicationCacheEN3WTF10PassRefPtrINS_16ApplicationCacheEEE","__ZN7WebCore20ApplicationCacheHost32maybeLoadFallbackForMainResponseERKNS_15ResourceRequestERKNS_16ResourceResponseE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_","__ZN7WebCore20ResourceResponseBaseaSERKS0_","__ZN7WebCore20ApplicationCacheHost6updateEv","__ZN7WebCore20ApplicationCacheHost25maybeLoadFallbackForErrorEPNS_14ResourceLoaderERKNS_13ResourceErrorE","__ZN7WebCore20ApplicationCacheHost21maybeLoadMainResourceERNS_15ResourceRequestERNS_14SubstituteDataE","__ZN7WebCore20ApplicationCacheHost24mainResourceDataReceivedEPKcixb","__ZN7WebCore20ApplicationCacheHost30maybeLoadFallbackSynchronouslyERKNS_15ResourceRequestERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENS8_15CrashOnOverflowEEE","_memset","__ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","__ZN3WTF6VectorIN7WebCore20ApplicationCacheHost13DeferredEventELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","_memcpy","__ZN7WebCore20ApplicationCacheHost32maybeLoadMainResourceForRedirectERNS_15ResourceRequestERNS_14SubstituteDataE","__ZN7WebCore14SubstituteDataC2EN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringES7_RKNS_3URLESA_b","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEENS_12KeyValuePairIS4_NS1_INS2_18SubstituteResourceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSE_IS7_EEEESF_E6expandEPS8_","__ZN7WebCore20ApplicationCacheHost33setCandidateApplicationCacheGroupEPNS_21ApplicationCacheGroupE","__ZN7WebCore14SubstituteDataD2Ev","__ZN7WebCore14SubstituteDataaSEOS0_","__ZN7WebCore20ApplicationCacheHost16dispatchDOMEventENS0_7EventIDEii","__ZN7WebCore20ApplicationCacheHost23selectCacheWithManifestERKNS_3URLE","__ZN7WebCore20ApplicationCacheHost25isApplicationCacheEnabledEv","__ZN7WebCore20ApplicationCacheHostD2Ev","__ZN7WebCore20ApplicationCacheHost26selectCacheWithoutManifestEv","__ZN7WebCore20ApplicationCacheHost28maybeLoadFallbackForResponseEPNS_14ResourceLoaderERKNS_16ResourceResponseE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_","_strlen","__ZN7WebCore20ApplicationCacheHost25failedLoadingMainResourceEv","__ZN7WebCore20ApplicationCacheHost25notifyDOMApplicationCacheENS0_7EventIDEii","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14ResourceLoaderEEENS_12KeyValuePairIS4_NS1_INS2_18SubstituteResourceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSE_IS7_EEEESF_E3addINS_17HashMapTranslatorISH_SC_EERPS3_RPNS2_24ApplicationCacheResourceEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SH_SF_EEEEOT0_OT1_","__ZN7WebCore20ApplicationCacheHost38shouldLoadResourceFromApplicationCacheERKNS_15ResourceRequestERPNS_24ApplicationCacheResourceE","__ZN7WebCore20ApplicationCacheHostC2EPNS_14DocumentLoaderE","__ZN7WebCore20ApplicationCacheHost29maybeLoadFallbackForMainErrorERKNS_15ResourceRequestERKNS_13ResourceErrorE","__ZN7WebCore20ApplicationCacheHost22setDOMApplicationCacheEPNS_19DOMApplicationCacheE"]
