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
H_BASE = parentModule["_malloc"](112 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 112;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14WheelEventInitC1Ev;
var __ZN7WebCore10WheelEventC1Ev;
var __ZN7WebCore10WheelEventC1ERKN3WTF12AtomicStringERKNS_14WheelEventInitE;
var __ZN7WebCore10WheelEventC1ERKNS_10FloatPointES3_jN3WTF10PassRefPtrINS_9DOMWindowEEERKNS_8IntPointESA_bbbbbd;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiiiiiiiiiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13) {
  try {
    Module["dynCall_viiiiiiiiiiiid"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13);
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
  var __ZTVN7WebCore10WheelEventE=(H_BASE+8)|0;
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
  var invoke_viiiiiiiiiiiid=env.invoke_viiiiiiiiiiiid;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore10WheelEventC2ERKNS_10FloatPointES3_jN3WTF10PassRefPtrINS_9DOMWindowEEERKNS_8IntPointESA_bbbbbd(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, d13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 d13 = +d13;
 var i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i15 = i14 | 0;
 i16 = i14 + 8 | 0;
 i17 = i14 + 16 | 0;
 i18 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 368 | 0;
 i19 = i15 | 0;
 i20 = i5 | 0;
 i5 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i19 >> 2] = i5;
 i5 = HEAP32[i6 >> 2] | 0;
 i20 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i21 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = i16 | 0;
 HEAP32[i7 >> 2] = 0;
 i22 = i17 | 0;
 HEAP32[i22 >> 2] = 0;
 __ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb(i1 | 0, i18, 1, 1, d13, i15, 0, i5, i20, i6, i21, i8, i9, i10, i11, 0, i16, i17, 0);
 i17 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i22 = i17 | 0;
   i16 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
    break;
   } else {
    HEAP32[i22 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i7 >> 2] | 0;
 if ((i17 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 60 >> 2] & 15](i17);
 }
 i17 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i19 = i17 + 36 | 0;
   i7 = i19 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i7 >> 2] = i16;
    break;
   }
   i16 = i19 - 36 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 44 >> 2] & 15](i16);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i17 = ~~(+HEAPF32[i2 + 4 >> 2] * +120);
 HEAP32[i1 + 128 >> 2] = ~~(+HEAPF32[i2 >> 2] * +120);
 HEAP32[i1 + 132 >> 2] = i17;
 HEAPF64[i1 + 136 >> 3] = +-0 - +HEAPF32[i3 >> 2];
 HEAPF64[i1 + 144 >> 3] = +-0 - +HEAPF32[i3 + 4 >> 2];
 HEAPF64[i1 + 152 >> 3] = +0;
 HEAP32[i1 + 160 >> 2] = i4;
 HEAP8[i1 + 164 | 0] = i12 & 1;
 STACKTOP = i14;
 return;
}
function __ZN7WebCore10WheelEventC1ERKNS_10FloatPointES3_jN3WTF10PassRefPtrINS_9DOMWindowEEERKNS_8IntPointESA_bbbbbd(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, d13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 d13 = +d13;
 var i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i15 = i14 | 0;
 i16 = i14 + 8 | 0;
 i17 = i14 + 16 | 0;
 i18 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 368 | 0;
 i19 = i15 | 0;
 i20 = i5 | 0;
 i5 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i19 >> 2] = i5;
 i5 = HEAP32[i6 >> 2] | 0;
 i20 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i21 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = i16 | 0;
 HEAP32[i7 >> 2] = 0;
 i22 = i17 | 0;
 HEAP32[i22 >> 2] = 0;
 __ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb(i1 | 0, i18, 1, 1, d13, i15, 0, i5, i20, i6, i21, i8, i9, i10, i11, 0, i16, i17, 0);
 i17 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i22 = i17 | 0;
   i16 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
    break;
   } else {
    HEAP32[i22 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i7 >> 2] | 0;
 if ((i17 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 60 >> 2] & 15](i17);
 }
 i17 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i19 = i17 + 36 | 0;
   i7 = i19 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i7 >> 2] = i16;
    break;
   }
   i16 = i19 - 36 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 44 >> 2] & 15](i16);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i17 = ~~(+HEAPF32[i2 + 4 >> 2] * +120);
 HEAP32[i1 + 128 >> 2] = ~~(+HEAPF32[i2 >> 2] * +120);
 HEAP32[i1 + 132 >> 2] = i17;
 HEAPF64[i1 + 136 >> 3] = +-0 - +HEAPF32[i3 >> 2];
 HEAPF64[i1 + 144 >> 3] = +-0 - +HEAPF32[i3 + 4 >> 2];
 HEAPF64[i1 + 152 >> 3] = +0;
 HEAP32[i1 + 160 >> 2] = i4;
 HEAP8[i1 + 164 | 0] = i12 & 1;
 STACKTOP = i14;
 return;
}
function __ZN7WebCore10WheelEvent14initWheelEventEiiN3WTF10PassRefPtrINS_9DOMWindowEEEiiiibbbb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13 + 8 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  STACKTOP = i13;
  return;
 }
 i16 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 368 | 0;
 i17 = i14 | 0;
 i18 = i4 | 0;
 i4 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i17 >> 2] = i4;
 __ZN7WebCore7UIEvent11initUIEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i16, 1, 1, i14, 0);
 i14 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i17 = i14 + 36 | 0;
   i16 = i17 | 0;
   i4 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i16 >> 2] = i4;
    break;
   }
   i4 = i17 - 36 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 15](i4);
  }
 } while (0);
 i14 = i1 + 64 | 0;
 HEAP32[i14 >> 2] = i5;
 HEAP32[i14 + 4 >> 2] = i6;
 i6 = i1 + 60 | 0;
 HEAP8[i6] = (i10 & 1) << 1 | i9 & 1 | (i11 & 1) << 2 | (i12 & 1) << 3 | HEAP8[i6] & -16;
 i6 = i1 + 128 | 0;
 HEAP32[i6 >> 2] = i2 * 120 & -1;
 HEAP32[i6 + 4 >> 2] = i3 * 120 & -1;
 HEAPF64[i1 + 136 >> 3] = +(-i2 | 0);
 HEAPF64[i1 + 144 >> 3] = +(-i3 | 0);
 HEAP32[i1 + 160 >> 2] = 0;
 HEAP8[i1 + 164 | 0] = 0;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i8;
 __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i1, i15);
 STACKTOP = i13;
 return;
}
function __ZN7WebCore10WheelEventC2ERKN3WTF12AtomicStringERKNS_14WheelEventInitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, d5 = +0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0;
 __ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringERKNS_14MouseEventInitE(i1 | 0, i2, i3 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i3 + 68 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d5 = +-0 - +HEAPF64[i3 + 40 >> 3];
 } else {
  d5 = +(i4 | 0);
 }
 i4 = i3 + 72 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  d7 = +-0 - +HEAPF64[i3 + 48 >> 3];
 } else {
  d7 = +(i6 | 0);
 }
 HEAP32[i1 + 128 >> 2] = ~~d5;
 HEAP32[i1 + 132 >> 2] = ~~d7;
 d7 = +HEAPF64[i3 + 40 >> 3];
 if (d7 != +0) {
  d8 = d7;
 } else {
  d8 = +(-(HEAP32[i2 >> 2] | 0) | 0);
 }
 HEAPF64[i1 + 136 >> 3] = d8;
 i2 = i1 + 144 | 0;
 d8 = +HEAPF64[i3 + 48 >> 3];
 if (d8 != +0) {
  d9 = d8;
  HEAPF64[i2 >> 3] = d9;
  i10 = i1 + 152 | 0;
  i11 = i3 + 56 | 0;
  d12 = +HEAPF64[i11 >> 3];
  HEAPF64[i10 >> 3] = d12;
  i13 = i1 + 160 | 0;
  i14 = i3 + 64 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  HEAP32[i13 >> 2] = i15;
  return;
 }
 d9 = +(-(HEAP32[i4 >> 2] | 0) | 0);
 HEAPF64[i2 >> 3] = d9;
 i10 = i1 + 152 | 0;
 i11 = i3 + 56 | 0;
 d12 = +HEAPF64[i11 >> 3];
 HEAPF64[i10 >> 3] = d12;
 i13 = i1 + 160 | 0;
 i14 = i3 + 64 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i13 >> 2] = i15;
 return;
}
function __ZN7WebCore10WheelEventC1ERKN3WTF12AtomicStringERKNS_14WheelEventInitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, d5 = +0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0;
 __ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringERKNS_14MouseEventInitE(i1 | 0, i2, i3 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i3 + 68 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d5 = +-0 - +HEAPF64[i3 + 40 >> 3];
 } else {
  d5 = +(i4 | 0);
 }
 i4 = i3 + 72 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  d7 = +-0 - +HEAPF64[i3 + 48 >> 3];
 } else {
  d7 = +(i6 | 0);
 }
 HEAP32[i1 + 128 >> 2] = ~~d5;
 HEAP32[i1 + 132 >> 2] = ~~d7;
 d7 = +HEAPF64[i3 + 40 >> 3];
 if (d7 != +0) {
  d8 = d7;
 } else {
  d8 = +(-(HEAP32[i2 >> 2] | 0) | 0);
 }
 HEAPF64[i1 + 136 >> 3] = d8;
 i2 = i1 + 144 | 0;
 d8 = +HEAPF64[i3 + 48 >> 3];
 if (d8 != +0) {
  d9 = d8;
  HEAPF64[i2 >> 3] = d9;
  i10 = i1 + 152 | 0;
  i11 = i3 + 56 | 0;
  d12 = +HEAPF64[i11 >> 3];
  HEAPF64[i10 >> 3] = d12;
  i13 = i1 + 160 | 0;
  i14 = i3 + 64 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  HEAP32[i13 >> 2] = i15;
  return;
 }
 d9 = +(-(HEAP32[i4 >> 2] | 0) | 0);
 HEAPF64[i2 >> 3] = d9;
 i10 = i1 + 152 | 0;
 i11 = i3 + 56 | 0;
 d12 = +HEAPF64[i11 >> 3];
 HEAPF64[i10 >> 3] = d12;
 i13 = i1 + 160 | 0;
 i14 = i3 + 64 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i13 >> 2] = i15;
 return;
}
function __ZN7WebCore10WheelEvent20initWebKitWheelEventEiiN3WTF10PassRefPtrINS_9DOMWindowEEEiiiibbbb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13 | 0;
 i15 = i14 | 0;
 i16 = i4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i15 >> 2] = i4;
 __ZN7WebCore10WheelEvent14initWheelEventEiiN3WTF10PassRefPtrINS_9DOMWindowEEEiiiibbbb(i1, i2, i3, i14, i5, i6, i7, i8, i9, i10, i11, i12);
 i12 = HEAP32[i15 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 i15 = i12 + 36 | 0;
 i12 = i15 | 0;
 i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i12 >> 2] = i11;
  STACKTOP = i13;
  return;
 }
 i11 = i15 - 36 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] & 15](i11);
 STACKTOP = i13;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 12;
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
function dynCall_viiiiiiiiiiiid(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, d14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 d14 = +d14;
 FUNCTION_TABLE_viiiiiiiiiiiid[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0, +d14);
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
function b1(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, d13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 d13 = +d13;
 abort(1);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function viii___ZNK7WebCore10MouseEvent8cloneForEPNS_17HTMLIFrameElementE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10MouseEvent8cloneForEPNS_17HTMLIFrameElementE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore10WheelEventC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10MouseEventC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 128 | 0, 0, 37) | 0;
 return;
}
function __ZN7WebCore10WheelEventC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10MouseEventC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 128 | 0, 0, 37) | 0;
 return;
}
function ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event25isBeforeTextInsertedEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore17MouseRelatedEvent12pageLocationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17MouseRelatedEvent12pageLocationEv(i1 | 0) | 0;
}
function vi___ZN7WebCore17MouseRelatedEvent14receivedTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17MouseRelatedEvent14receivedTargetEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event19isBeforeUnloadEventEv(i1 | 0) | 0;
}
function __ZN7WebCore14WheelEventInitC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14MouseEventInitC2Ev(i1 | 0);
 _memset(i1 + 40 | 0, 0, 36) | 0;
 return;
}
function __ZN7WebCore14WheelEventInitC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14MouseEventInitC2Ev(i1 | 0);
 _memset(i1 + 40 | 0, 0, 36) | 0;
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore17MouseRelatedEvent5pageYEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17MouseRelatedEvent5pageYEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore17MouseRelatedEvent5pageXEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17MouseRelatedEvent5pageXEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore10MouseEvent11isDragEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10MouseEvent11isDragEventEv(i1 | 0) | 0;
}
function ii___ZN7WebCore17MouseRelatedEvent6layerYEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore17MouseRelatedEvent6layerYEv(i1 | 0) | 0;
}
function ii___ZN7WebCore17MouseRelatedEvent6layerXEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore17MouseRelatedEvent6layerXEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event16isClipboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event15isKeyboardEventEv(i1 | 0) | 0;
}
function __ZN7WebCore10WheelEventD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10MouseEventD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function ii___ZNK7WebCore5Event12isTouchEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isTouchEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isFocusEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isFocusEventEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent9isUIEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore10MouseEvent5whichEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10MouseEvent5whichEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7UIEvent8charCodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent8charCodeEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore7UIEvent7keyCodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent7keyCodeEv(i1 | 0) | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZNK7WebCore10MouseEvent13relatedTargetEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 120 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function __ZN7WebCore10WheelEventD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10MouseEventD2Ev(i1 | 0);
 return;
}
function __ZNK7WebCore10MouseEvent9clipboardEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 124 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore10WheelEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 23;
}
function __ZNK7WebCore10WheelEvent12isMouseEventEv(i1) {
 i1 = i1 | 0;
 return 0;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore10WheelEventC2Ev,b0,vi___ZN7WebCore17MouseRelatedEvent14receivedTargetEv__wrapper,b0,__ZN7WebCore14WheelEventInitC2Ev,b0,__ZN7WebCore10WheelEventD0Ev,b0,__ZN7WebCore10WheelEventD1Ev,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiiiiid = [b1,b1,__ZN7WebCore10WheelEventC2ERKNS_10FloatPointES3_jN3WTF10PassRefPtrINS_9DOMWindowEEERKNS_8IntPointESA_bbbbbd,b1];
  var FUNCTION_TABLE_ii = [b2,b2,ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper,b2,ii___ZN7WebCore17MouseRelatedEvent6layerXEv__wrapper,b2,ii___ZNK7WebCore5Event12isTouchEventEv__wrapper,b2,ii___ZN7WebCore17MouseRelatedEvent6layerYEv__wrapper,b2,ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper,b2,ii___ZNK7WebCore17MouseRelatedEvent12pageLocationEv__wrapper,b2,ii___ZNK7WebCore7UIEvent7keyCodeEv__wrapper,b2,ii___ZNK7WebCore5Event12isFocusEventEv__wrapper,b2,__ZNK7WebCore10MouseEvent13relatedTargetEv,b2,__ZNK7WebCore10MouseEvent9clipboardEv,b2,ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper,b2,ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper,b2,ii___ZNK7WebCore17MouseRelatedEvent5pageXEv__wrapper,b2,__ZNK7WebCore10WheelEvent14eventInterfaceEv
  ,b2,ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper,b2,ii___ZNK7WebCore7UIEvent8charCodeEv__wrapper,b2,ii___ZNK7WebCore10MouseEvent11isDragEventEv__wrapper,b2,__ZNK7WebCore10WheelEvent12isMouseEventEv,b2,ii___ZNK7WebCore10MouseEvent5whichEv__wrapper,b2,ii___ZNK7WebCore17MouseRelatedEvent5pageYEv__wrapper,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore10WheelEventC2ERKN3WTF12AtomicStringERKNS_14WheelEventInitE,b3,viii___ZNK7WebCore10MouseEvent8cloneForEPNS_17HTMLIFrameElementE__wrapper,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_viiiiiiiiiiiid: dynCall_viiiiiiiiiiiid, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_viiiiiiiiiiiid": invoke_viiiiiiiiiiiid, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiiiiiiiiiiid = Module["dynCall_viiiiiiiiiiiid"] = asm["dynCall_viiiiiiiiiiiid"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore10MouseEvent9clipboardEv","__ZNK7WebCore10MouseEvent13relatedTargetEv","__ZNK7WebCore10WheelEvent14eventInterfaceEv","__ZN7WebCore10WheelEvent14initWheelEventEiiN3WTF10PassRefPtrINS_9DOMWindowEEEiiiibbbb","__ZN7WebCore10WheelEvent20initWebKitWheelEventEiiN3WTF10PassRefPtrINS_9DOMWindowEEEiiiibbbb","__ZN7WebCore10WheelEventC2ERKN3WTF12AtomicStringERKNS_14WheelEventInitE","_memset","__ZN7WebCore10WheelEventC2Ev","_strlen","__ZN7WebCore10WheelEventD0Ev","_memcpy","__ZN7WebCore10WheelEventD1Ev","__ZN7WebCore10WheelEventC2ERKNS_10FloatPointES3_jN3WTF10PassRefPtrINS_9DOMWindowEEERKNS_8IntPointESA_bbbbbd","__ZN7WebCore14WheelEventInitC2Ev","__ZNK7WebCore10WheelEvent12isMouseEventEv"]
