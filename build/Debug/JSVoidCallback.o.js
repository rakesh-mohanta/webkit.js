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
H_BASE = parentModule["_malloc"](120 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 120;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14JSVoidCallbackC1EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE;
var __ZN7WebCore14JSVoidCallbackD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore12VoidCallbackE=(H_BASE+96)|0;
  var __ZTVN7WebCore22DeleteCallbackDataTaskE=(H_BASE+8)|0;
  var __ZTVN7WebCore14JSVoidCallbackE=(H_BASE+40)|0;
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
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 2) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i4 << 2) >> 2] | 0;
   i8 = i1;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = i8 + ~(i8 << 15) | 0;
    i8 = (i11 >>> 10 ^ i11) * 9 & -1;
    i11 = i8 >>> 6 ^ i8;
    i8 = i11 + ~(i11 << 11) | 0;
    i11 = i8 >>> 16 ^ i8;
    i8 = i10 & i11;
    i12 = i9 + (i8 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L9 : do {
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = i12;
      i16 = 6;
     } else {
      i17 = (i11 >>> 23) + ~i11 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = 0;
      i20 = i8;
      i21 = i12;
      i22 = i13;
      while (1) {
       if ((i22 | 0) == (i1 | 0)) {
        i23 = i21;
        break L9;
       }
       i24 = (i22 | 0) == -1 ? i21 : i18;
       i25 = (i19 | 0) == 0 ? i17 : i19;
       i26 = i25 + i20 & i10;
       i27 = i9 + (i26 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i14 = i24;
        i15 = i27;
        i16 = 6;
        break;
       } else {
        i18 = i24;
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == 6) {
     i16 = 0;
     i23 = (i14 | 0) != 0 ? i14 : i15;
    }
    HEAP32[i23 >> 2] = i1;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore14JSCallbackDataC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i3;
 i8 = (i7 & -65536) + 1076 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 20544 >> 2] | 0;
 if ((HEAP32[i9 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i10 = i9 + 20440 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i9 + 20360 | 0);
  i12 = HEAP32[i10 >> 2] | 0;
 } else {
  i12 = i11;
 }
 i11 = i12 + 12 | 0;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + 4 >> 2] = -6;
 HEAP32[i12 >> 2] = 0;
 i10 = i12 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 i13 = i9 + 20420 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i10 >> 2] = i9 + 20408;
 HEAP32[i11 >> 2] = i14;
 HEAP32[i13 >> 2] = i12;
 HEAP32[i14 + 8 >> 2] = i12;
 i14 = i12 | 0;
 i13 = i1 | 0;
 HEAP32[i13 >> 2] = i14;
 HEAP32[i5 + 4 >> 2] = (i2 | 0) == 0 ? -6 : -5;
 HEAP32[i5 >> 2] = i2;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i12 & -4096) + 12 >> 2] | 0, i14, i5);
 i14 = i5 | 0;
 i5 = HEAP32[i14 + 4 >> 2] | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i12 + 4 >> 2] = i5;
 i5 = HEAP32[(HEAP32[i8 >> 2] | 0) + 20544 >> 2] | 0;
 if ((HEAP32[i5 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i8 = i5 + 20440 | 0;
 i12 = HEAP32[i8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i5 + 20360 | 0);
  i15 = HEAP32[i8 >> 2] | 0;
 } else {
  i15 = i12;
 }
 i12 = i15 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i15 + 4 >> 2] = -6;
 HEAP32[i15 >> 2] = 0;
 i8 = i15 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 i14 = i5 + 20420 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 HEAP32[i8 >> 2] = i5 + 20408;
 HEAP32[i12 >> 2] = i13;
 HEAP32[i14 >> 2] = i15;
 HEAP32[i13 + 8 >> 2] = i15;
 i13 = i15 | 0;
 i14 = i1 + 4 | 0;
 HEAP32[i14 >> 2] = i13;
 HEAP32[i6 + 4 >> 2] = (i3 | 0) == 0 ? -6 : -5;
 HEAP32[i6 >> 2] = i7;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i15 & -4096) + 12 >> 2] | 0, i13, i6);
 i13 = i6 | 0;
 i6 = HEAP32[i13 + 4 >> 2] | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i15 + 4 >> 2] = i6;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14JSVoidCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 8 >> 2] = H_BASE + 72;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 7](i4) | 0) {
    break;
   }
   i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0;
   i6 = HEAP32[i1 + 16 >> 2] | 0;
   i7 = __ZN3WTF10fastMallocEj(8) | 0;
   HEAP32[i7 >> 2] = H_BASE + 16;
   HEAP32[i7 + 4 >> 2] = i6;
   i6 = i3 | 0;
   HEAP32[i6 >> 2] = i7;
   FUNCTION_TABLE_vii[i5 & 3](i4, i3);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i8 = i1 + 8 | 0;
    __ZN7WebCore17ActiveDOMCallbackD2Ev(i8);
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
   i8 = i1 + 8 | 0;
   __ZN7WebCore17ActiveDOMCallbackD2Ev(i8);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 + 8 | 0;
  __ZN7WebCore17ActiveDOMCallbackD2Ev(i8);
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[(i5 & -4096) + 12 >> 2] | 0;
  i7 = i5;
  i9 = i6 + 84 | 0;
  i10 = i7 + 12 | 0;
  if ((i7 | 0) == (HEAP32[i9 >> 2] | 0)) {
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  }
  i9 = i5 + 8 | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i5 + 12 >> 2] = i11;
  HEAP32[i11 + 8 >> 2] = i5;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  i9 = i6 + 80 | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i9 >> 2] = i7;
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i7 = HEAP32[(i4 & -4096) + 12 >> 2] | 0;
  i9 = i4;
  i10 = i7 + 84 | 0;
  i6 = i9 + 12 | 0;
  if ((i9 | 0) == (HEAP32[i10 >> 2] | 0)) {
   HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
  }
  i10 = i4 + 8 | 0;
  i4 = HEAP32[i10 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i4 + 12 >> 2] = i5;
  HEAP32[i5 + 8 >> 2] = i4;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  i10 = i7 + 80 | 0;
  HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i10 >> 2] = i9;
 }
 __ZdlPv(i3);
 i8 = i1 + 8 | 0;
 __ZN7WebCore17ActiveDOMCallbackD2Ev(i8);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14JSVoidCallbackD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 8 >> 2] = H_BASE + 72;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 7](i4) | 0) {
    break;
   }
   i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0;
   i6 = HEAP32[i1 + 16 >> 2] | 0;
   i7 = __ZN3WTF10fastMallocEj(8) | 0;
   HEAP32[i7 >> 2] = H_BASE + 16;
   HEAP32[i7 + 4 >> 2] = i6;
   i6 = i3 | 0;
   HEAP32[i6 >> 2] = i7;
   FUNCTION_TABLE_vii[i5 & 3](i4, i3);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i8 = i1 + 8 | 0;
    __ZN7WebCore17ActiveDOMCallbackD2Ev(i8);
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
   i8 = i1 + 8 | 0;
   __ZN7WebCore17ActiveDOMCallbackD2Ev(i8);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 + 8 | 0;
  __ZN7WebCore17ActiveDOMCallbackD2Ev(i8);
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[(i5 & -4096) + 12 >> 2] | 0;
  i7 = i5;
  i9 = i6 + 84 | 0;
  i10 = i7 + 12 | 0;
  if ((i7 | 0) == (HEAP32[i9 >> 2] | 0)) {
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  }
  i9 = i5 + 8 | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i5 + 12 >> 2] = i11;
  HEAP32[i11 + 8 >> 2] = i5;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  i9 = i6 + 80 | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i9 >> 2] = i7;
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i7 = HEAP32[(i4 & -4096) + 12 >> 2] | 0;
  i9 = i4;
  i10 = i7 + 84 | 0;
  i6 = i9 + 12 | 0;
  if ((i9 | 0) == (HEAP32[i10 >> 2] | 0)) {
   HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
  }
  i10 = i4 + 8 | 0;
  i4 = HEAP32[i10 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i4 + 12 >> 2] = i5;
  HEAP32[i5 + 8 >> 2] = i4;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  i10 = i7 + 80 | 0;
  HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i10 >> 2] = i9;
 }
 __ZdlPv(i3);
 i8 = i1 + 8 | 0;
 __ZN7WebCore17ActiveDOMCallbackD2Ev(i8);
 STACKTOP = i2;
 return;
}
function __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore14JSVoidCallback11handleEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 96 | 0;
 if (!(__ZNK7WebCore17ActiveDOMCallback17canInvokeCallbackEv(i1 + 8 | 0) | 0)) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i1 + 16 | 0;
 __ZN3JSC12JSLockHolderC1ERNS_2VME(i4, HEAP32[(HEAP32[(HEAP32[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] >> 2] & -65536) + 1076 >> 2] | 0) + 20544 >> 2] | 0);
 HEAP32[i5 >> 2] = 0;
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = 8;
 i10 = i5 + 72 | 0;
 HEAP32[i10 >> 2] = i5 + 8;
 i11 = i5 + 76 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP8[i6] = 0;
 __ZN7WebCore14JSCallbackData14invokeCallbackERN3JSC20MarkedArgumentBufferEPb(i2 + 104 | 0, HEAP32[i8 >> 2] | 0, i5, i6);
 i8 = (HEAP8[i6] & 1) == 0;
 i6 = HEAP32[i11 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = i5;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i6, i3) | 0;
 }
 do {
  if ((HEAP32[i9 >> 2] | 0) != 8) {
   i3 = HEAP32[i10 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   __ZdaPv(i3);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i4);
 i4 = i1 + 4 | 0;
 i1 = i4 | 0;
 i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i1 >> 2] = i10;
  i7 = i8;
  STACKTOP = i2;
  return i7 | 0;
 }
 i10 = i4 - 4 | 0;
 if ((i10 | 0) == 0) {
  i7 = i8;
  STACKTOP = i2;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
 i7 = i8;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore22DeleteCallbackDataTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[(i3 & -4096) + 12 >> 2] | 0;
  i5 = i3;
  i6 = i4 + 84 | 0;
  i7 = i5 + 12 | 0;
  if ((i5 | 0) == (HEAP32[i6 >> 2] | 0)) {
   HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  }
  i6 = i3 + 8 | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i3 + 12 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i3;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i7 >> 2] = 0;
  i6 = i4 + 80 | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i6 >> 2] = i5;
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i5 = HEAP32[(i1 & -4096) + 12 >> 2] | 0;
  i6 = i1;
  i7 = i5 + 84 | 0;
  i4 = i6 + 12 | 0;
  if ((i6 | 0) == (HEAP32[i7 >> 2] | 0)) {
   HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
  }
  i7 = i1 + 8 | 0;
  i1 = HEAP32[i7 >> 2] | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  HEAP32[i1 + 12 >> 2] = i3;
  HEAP32[i3 + 8 >> 2] = i1;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
  i7 = i5 + 80 | 0;
  HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i7 >> 2] = i6;
 }
 __ZdlPv(i2);
 return;
}
function __ZN7WebCore14JSVoidCallbackC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 104;
 __ZN7WebCore17ActiveDOMCallbackC2EPNS_22ScriptExecutionContextE(i1 + 8 | 0, __ZNK7WebCore17JSDOMGlobalObject22scriptExecutionContextEv(i3) | 0);
 HEAP32[i4 >> 2] = H_BASE + 48;
 HEAP32[i1 + 8 >> 2] = H_BASE + 72;
 i4 = __Znwj(8) | 0;
 __ZN7WebCore14JSCallbackDataC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i4, i2, i3);
 HEAP32[i1 + 16 >> 2] = i4;
 return;
}
function __ZN7WebCore14JSVoidCallbackC1EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 104;
 __ZN7WebCore17ActiveDOMCallbackC2EPNS_22ScriptExecutionContextE(i1 + 8 | 0, __ZNK7WebCore17JSDOMGlobalObject22scriptExecutionContextEv(i3) | 0);
 HEAP32[i4 >> 2] = H_BASE + 48;
 HEAP32[i1 + 8 >> 2] = H_BASE + 72;
 i4 = __Znwj(8) | 0;
 __ZN7WebCore14JSCallbackDataC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i4, i2, i3);
 HEAP32[i1 + 16 >> 2] = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_v + 2;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZThn8_N7WebCore14JSVoidCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 20 + 12 | 0;
 __ZN7WebCore14JSVoidCallbackD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
}
function __ZN7WebCore22DeleteCallbackDataTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore14JSVoidCallbackD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14JSVoidCallbackD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22DeleteCallbackDataTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZThn8_N7WebCore14JSVoidCallbackD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14JSVoidCallbackD2Ev(i1 - 20 + 12 | 0);
 return;
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
function __ZNK7WebCore14JSVoidCallback22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore12VoidCallbackD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore22DeleteCallbackDataTask13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZN7WebCore12VoidCallbackD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZThn8_N7WebCore14JSVoidCallbackD0Ev,b0,vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper,b0,__ZN7WebCore14JSVoidCallbackD0Ev,b0,__ZN7WebCore14JSVoidCallbackD2Ev,b0,__ZN7WebCore12VoidCallbackD0Ev,b0,__ZThn8_N7WebCore14JSVoidCallbackD1Ev,b0,__ZN7WebCore22DeleteCallbackDataTaskD1Ev,b0,__ZN7WebCore12VoidCallbackD1Ev,b0,__ZN7WebCore22DeleteCallbackDataTaskD0Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore22DeleteCallbackDataTask11performTaskEPNS_22ScriptExecutionContextE,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore22DeleteCallbackDataTask13isCleanupTaskEv,b2,__ZN7WebCore14JSVoidCallback11handleEventEv,b2,__ZNK7WebCore14JSVoidCallback22scriptExecutionContextEv,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore14JSVoidCallbackC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_memset","_strlen","__ZNK7WebCore22DeleteCallbackDataTask13isCleanupTaskEv","_memcpy","__ZThn8_N7WebCore14JSVoidCallbackD0Ev","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore14JSVoidCallbackD0Ev","__ZN7WebCore14JSVoidCallback11handleEventEv","__ZN7WebCore12VoidCallbackD0Ev","__ZN7WebCore14JSCallbackDataC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE","__ZN7WebCore22DeleteCallbackDataTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore14JSVoidCallbackC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE","__ZThn8_N7WebCore14JSVoidCallbackD1Ev","__ZNK7WebCore14JSVoidCallback22scriptExecutionContextEv","__ZN7WebCore22DeleteCallbackDataTaskD1Ev","__ZN7WebCore12VoidCallbackD1Ev","__ZN7WebCore14JSVoidCallbackD2Ev","__ZN7WebCore22DeleteCallbackDataTaskD0Ev","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_"]
