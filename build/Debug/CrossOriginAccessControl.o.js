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
H_BASE = parentModule["_malloc"](712 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 712;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([97,112,112,108,105,99,97,116,105,111,110,47,120,45,119,119,119,45,102,111,114,109,45,117,114,108,101,110,99,111,100,101,100,0,0,0,0,0,0,0,99,111,110,116,101,110,116,45,116,121,112,101,0,0,0,0,114,101,102,101,114,101,114,0,111,114,105,103,105,110,0,0,99,111,110,116,101,110,116,45,108,97,110,103,117,97,103,101,0,0,0,0,0,0,0,0,97,99,99,101,112,116,45,108,97,110,103,117,97,103,101,0,97,99,99,101,112,116,0,0,112,114,97,103,109,97,0,0,108,97,115,116,45,109,111,100,105,102,105,101,100,0,0,0,101,120,112,105,114,101,115,0,99,97,99,104,101,45,99,111,110,116,114,111,108,0,0,0,79,114,105,103,105,110,0,0,67,114,101,100,101,110,116,105,97,108,115,32,102,108,97,103,32,105,115,32,116,114,117,101,44,32,98,117,116,32,65,99,99,101,115,115,45,67,111,110,116,114,111,108,45,65,108,108,111,119,45,67,114,101,100,101,110,116,105,97,108,115,32,105,115,32,110,111,116,32,34,116,114,117,101,34,46,0,0,0,116,114,117,101,0,0,0,0,32,105,115,32,110,111,116,32,97,108,108,111,119,101,100,32,98,121,32,65,99,99,101,115,115,45,67,111,110,116,114,111,108,45,65,108,108,111,119,45,79,114,105,103,105,110,46,0,79,114,105,103,105,110,32,0,67,97,110,110,111,116,32,117,115,101,32,119,105,108,100,99,97,114,100,32,105,110,32,65,99,99,101,115,115,45,67,111,110,116,114,111,108,45,65,108,108,111,119,45,79,114,105,103,105,110,32,119,104,101,110,32,99,114,101,100,101,110,116,105,97,108,115,32,102,108,97,103,32,105,115,32,116,114,117,101,46,0,0,0,0,0,0,0,80,79,83,84,0,0,0,0,46,0,0,0,0,0,0,0,67,97,110,110,111,116,32,109,97,107,101,32,97,110,121,32,114,101,113,117,101,115,116,115,32,102,114,111,109,32,0,0,42,0,0,0,0,0,0,0,97,99,99,101,115,115,45,99,111,110,116,114,111,108,45,97,108,108,111,119,45,99,114,101,100,101,110,116,105,97,108,115,0,0,0,0,0,0,0,0,97,99,99,101,115,115,45,99,111,110,116,114,111,108,45,97,108,108,111,119,45,111,114,105,103,105,110,0,0,0,0,0,65,99,99,101,115,115,45,67,111,110,116,114,111,108,45,82,101,113,117,101,115,116,45,72,101,97,100,101,114,115,0,0,65,99,99,101,115,115,45,67,111,110,116,114,111,108,45,82,101,113,117,101,115,116,45,77,101,116,104,111,100,0,0,0,79,80,84,73,79,78,83,0,116,101,120,116,47,112,108,97,105,110,0,0,0,0,0,0,109,117,108,116,105,112,97,114,116,47,102,111,114,109,45,100,97,116,97,0,0,0,0,0,72,69,65,68,0,0,0,0,71,69,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore24passesAccessControlCheckERKNS_16ResourceResponseENS_17StoredCredentialsEPNS_14SecurityOriginERN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 688 | 0] | 0)) {
  i19 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i11, H_BASE + 512 | 0, 27);
  i20 = i11 | 0;
  i11 = HEAP32[i20 >> 2] | 0;
  HEAP32[i20 >> 2] = 0;
  HEAP32[i19 >> 2] = i11;
  HEAP32[H_BASE + 712 >> 2] = i19;
  HEAP8[H_BASE + 688 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 680 | 0] | 0)) {
  i19 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i10, H_BASE + 472 | 0, 32);
  i11 = i10 | 0;
  i10 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i19 >> 2] = i10;
  HEAP32[H_BASE + 704 >> 2] = i19;
  HEAP8[H_BASE + 680 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i19 = i1 | 0;
 __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldERKN3WTF12AtomicStringE(i12, i19, HEAP32[H_BASE + 712 >> 2] | 0);
 i1 = i12 | 0;
 do {
  if ((__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 464 | 0) | 0) & (i2 | 0) == 1) {
   i21 = 1;
  } else {
   if ((HEAP8[i3 + 22 | 0] & 1) != 0) {
    __ZNK7WebCore14SecurityOrigin8toStringEv(i13, i3);
    i12 = i13 | 0;
    i10 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i10 | 0) == 0) {
      i22 = 0;
      i23 = 1;
     } else {
      i11 = i10 | 0;
      i20 = HEAP32[i11 >> 2] | 0;
      i24 = i20 + 2 | 0;
      HEAP32[i11 >> 2] = i20 + 4;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       i25 = HEAP32[i11 >> 2] | 0;
      } else {
       HEAP32[i11 >> 2] = i24;
       i25 = i24;
      }
      i24 = i25 + 2 | 0;
      HEAP32[i11 >> 2] = i25 + 4;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       i22 = i10;
       i23 = 0;
       break;
      } else {
       HEAP32[i11 >> 2] = i24;
       i22 = i10;
       i23 = 0;
       break;
      }
     }
    } while (0);
    HEAP32[i9 >> 2] = H_BASE + 432;
    i10 = i9 + 4 | 0;
    HEAP32[i10 >> 2] = i22;
    i24 = (i22 | 0) == 0;
    if (!i24) {
     i11 = i22 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
    }
    __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i8, i9, H_BASE + 424 | 0);
    i11 = i8 | 0;
    i20 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = 0;
    i11 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i26 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i26;
       break;
      }
     }
    } while (0);
    if ((i20 | 0) == 0) {
     _WTFCrash();
     return 0;
    }
    i11 = i4 | 0;
    i26 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = i20;
    do {
     if ((i26 | 0) != 0) {
      i11 = i26 | 0;
      i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       break;
      } else {
       HEAP32[i11 >> 2] = i10;
       break;
      }
     }
    } while (0);
    do {
     if (!i24) {
      i26 = i22 | 0;
      i20 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i26 >> 2] = i20;
       break;
      }
     }
    } while (0);
    do {
     if (!i23) {
      i24 = i22 | 0;
      i20 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i24 >> 2] = i20;
       break;
      }
     }
    } while (0);
    i20 = HEAP32[i12 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i21 = 0;
     break;
    }
    i24 = i20 | 0;
    i26 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     i21 = 0;
     break;
    } else {
     HEAP32[i24 >> 2] = i26;
     i21 = 0;
     break;
    }
   }
   __ZNK7WebCore14SecurityOrigin8toStringEv(i14, i3);
   i26 = i14 | 0;
   i24 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 >> 2] | 0, HEAP32[i26 >> 2] | 0) | 0;
   i20 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i26 = i20 | 0;
     i10 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i26 >> 2] = i10;
      break;
     }
    }
   } while (0);
   if (i24) {
    if ((i2 | 0) == 0) {
     __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldERKN3WTF12AtomicStringE(i17, i19, HEAP32[H_BASE + 704 >> 2] | 0);
     i20 = i17 | 0;
     do {
      if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i20 >> 2] | 0, H_BASE + 264 | 0) | 0) {
       i27 = 0;
      } else {
       __ZN3WTF6StringC1EPKc(i18, H_BASE + 184 | 0);
       i12 = i18 | 0;
       i10 = HEAP32[i12 >> 2] | 0;
       HEAP32[i12 >> 2] = 0;
       i26 = i4 | 0;
       i11 = HEAP32[i26 >> 2] | 0;
       HEAP32[i26 >> 2] = i10;
       do {
        if ((i11 | 0) != 0) {
         i10 = i11 | 0;
         i26 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
         if ((i26 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i11);
          break;
         } else {
          HEAP32[i10 >> 2] = i26;
          break;
         }
        }
       } while (0);
       i11 = HEAP32[i12 >> 2] | 0;
       if ((i11 | 0) == 0) {
        i27 = 1;
        break;
       }
       i26 = i11 | 0;
       i10 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
       if ((i10 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        i27 = 1;
        break;
       } else {
        HEAP32[i26 >> 2] = i10;
        i27 = 1;
        break;
       }
      }
     } while (0);
     i24 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i10 = i24 | 0;
       i26 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
       if ((i26 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i10 >> 2] = i26;
        break;
       }
      }
     } while (0);
     if ((i27 | 0) != 0) {
      i21 = 0;
      break;
     }
    }
    i21 = 1;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 464 | 0) | 0) {
    __ZN3WTF6StringC1EPKc(i15, H_BASE + 328 | 0);
    i24 = i15 | 0;
    i20 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = 0;
    i26 = i4 | 0;
    i10 = HEAP32[i26 >> 2] | 0;
    HEAP32[i26 >> 2] = i20;
    do {
     if ((i10 | 0) != 0) {
      i20 = i10 | 0;
      i26 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i20 >> 2] = i26;
       break;
      }
     }
    } while (0);
    i10 = HEAP32[i24 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i21 = 0;
     break;
    }
    i26 = i10 | 0;
    i20 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     i21 = 0;
     break;
    } else {
     HEAP32[i26 >> 2] = i20;
     i21 = 0;
     break;
    }
   }
   __ZNK7WebCore14SecurityOrigin8toStringEv(i16, i3);
   i20 = i16 | 0;
   i26 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i26 | 0) == 0) {
     i28 = 0;
     i29 = 1;
    } else {
     i10 = i26 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     i30 = i11 + 2 | 0;
     HEAP32[i10 >> 2] = i11 + 4;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      i31 = HEAP32[i10 >> 2] | 0;
     } else {
      HEAP32[i10 >> 2] = i30;
      i31 = i30;
     }
     i30 = i31 + 2 | 0;
     HEAP32[i10 >> 2] = i31 + 4;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      i28 = i26;
      i29 = 0;
      break;
     } else {
      HEAP32[i10 >> 2] = i30;
      i28 = i26;
      i29 = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i7 >> 2] = H_BASE + 320;
   i26 = i7 + 4 | 0;
   HEAP32[i26 >> 2] = i28;
   i24 = (i28 | 0) == 0;
   if (!i24) {
    i30 = i28 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, i7, H_BASE + 272 | 0);
   i30 = i6 | 0;
   i10 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = 0;
   i30 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i26 = i30 | 0;
     i11 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i26 >> 2] = i11;
      break;
     }
    }
   } while (0);
   if ((i10 | 0) == 0) {
    _WTFCrash();
    return 0;
   }
   i30 = i4 | 0;
   i11 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = i10;
   do {
    if ((i11 | 0) != 0) {
     i30 = i11 | 0;
     i26 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i30 >> 2] = i26;
      break;
     }
    }
   } while (0);
   do {
    if (!i24) {
     i11 = i28 | 0;
     i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i11 >> 2] = i10;
      break;
     }
    }
   } while (0);
   do {
    if (!i29) {
     i24 = i28 | 0;
     i10 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i24 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i20 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i21 = 0;
    break;
   }
   i24 = i10 | 0;
   i11 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i21 = 0;
    break;
   } else {
    HEAP32[i24 >> 2] = i11;
    i21 = 0;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i1 >> 2] | 0;
 if ((i28 | 0) == 0) {
  STACKTOP = i5;
  return i21 | 0;
 }
 i1 = i28 | 0;
 i29 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i29 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i28);
  STACKTOP = i5;
  return i21 | 0;
 } else {
  HEAP32[i1 >> 2] = i29;
  STACKTOP = i5;
  return i21 | 0;
 }
 return 0;
}
function __ZN7WebCore35createAccessControlPreflightRequestERKNS_15ResourceRequestEPNS_14SecurityOriginE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 i12 = i2 | 0;
 i2 = i1 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i2, __ZNK7WebCore19ResourceRequestBase3urlEv(i12) | 0, 0);
 _memset(i1 + 160 | 0, 0, 19) | 0;
 HEAP32[i1 + 180 >> 2] = 15;
 __ZN7WebCore19ResourceRequestBase17removeCredentialsEv(i2);
 __ZN7WebCore19ResourceRequestBase15setAllowCookiesEb(i2, 0);
 __ZNK7WebCore14SecurityOrigin8toStringEv(i7, i3);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i2, H_BASE + 176 | 0, i7);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 608 | 0);
 __ZN7WebCore19ResourceRequestBase13setHTTPMethodERKN3WTF6StringE(i2, i8);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i3 = __ZNK7WebCore19ResourceRequestBase10httpMethodEv(i12) | 0;
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i2, H_BASE + 576 | 0, i3);
 __ZN7WebCore19ResourceRequestBase11setPriorityENS_20ResourceLoadPriorityE(i2, __ZNK7WebCore19ResourceRequestBase8priorityEv(i12) | 0);
 i3 = __ZNK7WebCore19ResourceRequestBase16httpHeaderFieldsEv(i12) | 0;
 i12 = i3 + 12 | 0;
 if ((HEAP32[i12 >> 2] | 0) <= 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i9 | 0;
 HEAP32[i1 >> 2] = 0;
 i8 = i9 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i7 = i9 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i13 = i9 + 12 | 0;
 HEAP8[i13] = 1;
 HEAP32[i9 + 16 >> 2] = 0;
 i14 = i9 + 20 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i3 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = i3 + 4 | 0;
 i3 = HEAP32[i17 >> 2] | 0;
 i18 = i16 + (i3 << 3) | 0;
 L16 : do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   i19 = i18;
  } else {
   if ((i3 | 0) == 0) {
    i19 = i16;
    break;
   } else {
    i20 = i16;
   }
   while (1) {
    i21 = HEAP32[i20 >> 2] | 0;
    if (!((i21 | 0) == (-1 | 0) | (i21 | 0) == 0)) {
     i19 = i20;
     break L16;
    }
    i21 = i20 + 8 | 0;
    if ((i21 | 0) == (i18 | 0)) {
     i19 = i18;
     break;
    } else {
     i20 = i21;
    }
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i9, i19 | 0);
 i20 = i19 + 8 | 0;
 L22 : do {
  if ((i20 | 0) == (i18 | 0)) {
   i22 = i18;
  } else {
   i19 = i20;
   while (1) {
    i16 = HEAP32[i19 >> 2] | 0;
    if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
     i22 = i19;
     break L22;
    }
    i16 = i19 + 8 | 0;
    if ((i16 | 0) == (i18 | 0)) {
     i22 = i18;
     break;
    } else {
     i19 = i16;
    }
   }
  }
 } while (0);
 i20 = (HEAP32[i15 >> 2] | 0) + (HEAP32[i17 >> 2] << 3) | 0;
 if ((i22 | 0) != (i20 | 0)) {
  i17 = i9 + 20 | 0;
  i15 = i22;
  while (1) {
   HEAP8[i6] = 44;
   i22 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i22 | 0) == 0) {
     i23 = 25;
    } else {
     i19 = HEAP32[i1 >> 2] | 0;
     if (i19 >>> 0 >= (HEAP32[i22 + 4 >> 2] | 0) >>> 0) {
      i23 = 25;
      break;
     }
     if ((HEAP32[i8 >> 2] | 0) != 0) {
      i23 = 25;
      break;
     }
     i16 = (HEAP8[i13] & 1) == 0;
     HEAP32[i1 >> 2] = i19 + 1;
     if (i16) {
      HEAP16[(HEAP32[i17 >> 2] | 0) + (i19 << 1) >> 1] = 44;
      break;
     } else {
      HEAP8[(HEAP32[i14 >> 2] | 0) + i19 | 0] = 44;
      break;
     }
    }
   } while (0);
   if ((i23 | 0) == 25) {
    i23 = 0;
    __ZN3WTF13StringBuilder6appendEPKhj(i9, i6, 1);
   }
   HEAP8[i5] = 32;
   i22 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i22 | 0) == 0) {
     i23 = 32;
    } else {
     i19 = HEAP32[i1 >> 2] | 0;
     if (i19 >>> 0 >= (HEAP32[i22 + 4 >> 2] | 0) >>> 0) {
      i23 = 32;
      break;
     }
     if ((HEAP32[i8 >> 2] | 0) != 0) {
      i23 = 32;
      break;
     }
     i16 = (HEAP8[i13] & 1) == 0;
     HEAP32[i1 >> 2] = i19 + 1;
     if (i16) {
      HEAP16[(HEAP32[i17 >> 2] | 0) + (i19 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i14 >> 2] | 0) + i19 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i23 | 0) == 32) {
    i23 = 0;
    __ZN3WTF13StringBuilder6appendEPKhj(i9, i5, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i9, i15 | 0);
   i22 = i15 + 8 | 0;
   L51 : do {
    if ((i22 | 0) == (i18 | 0)) {
     i24 = i18;
    } else {
     i19 = i22;
     while (1) {
      i16 = HEAP32[i19 >> 2] | 0;
      if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
       i24 = i19;
       break L51;
      }
      i16 = i19 + 8 | 0;
      if ((i16 | 0) == (i18 | 0)) {
       i24 = i18;
       break;
      } else {
       i19 = i16;
      }
     }
    }
   } while (0);
   if ((i24 | 0) == (i20 | 0)) {
    break;
   } else {
    i15 = i24;
   }
  }
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i9);
 i24 = HEAP32[i8 >> 2] | 0;
 if ((i24 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i9);
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i11 >> 2] = i9;
  if ((i9 | 0) != 0) {
   i25 = i9;
   i23 = 40;
  }
 } else {
  HEAP32[i11 >> 2] = i24;
  i25 = i24;
  i23 = 40;
 }
 if ((i23 | 0) == 40) {
  i23 = i25 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
 }
 __ZNK3WTF6String5lowerEv(i10, i11);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i2, H_BASE + 544 | 0, i10);
 i2 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i10 = i2 | 0;
   i23 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i10 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i23 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i23 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i2 | 0;
 i23 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i23 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i8 >> 2] = i23;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i12 + i9 | 0, i7 | 0) | 0;
 i9 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i11) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i9 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i14 = 42;
      break;
     }
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i9 >>> 0 > 2147483637 >>> 0) {
      i14 = 42;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i9 << 1) + 20 | 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i14 = 42;
      break;
     }
     i13 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i9;
     HEAP32[i12 + 8 >> 2] = i13;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     i15 = i12;
     i16 = i13;
    }
   } while (0);
   if ((i14 | 0) == 42) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   i12 = _strlen(i13 | 0) | 0;
   if ((i12 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i17 << 1) >> 1] = HEAPU8[i13 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   i17 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = HEAP32[i17 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i16 + (i21 + i12 << 1) >> 1] = HEAP16[i20 + (i21 << 1) >> 1] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i22 = 0;
       }
       while (1) {
        HEAP16[i16 + (i22 + i12 << 1) >> 1] = HEAPU8[i20 + i22 | 0] | 0;
        i22 = i22 + 1 | 0;
        if (i22 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     i20 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
     if ((i13 | 0) == 0) {
      i18 = 0;
      i19 = i20;
      break;
     }
     i18 = HEAP32[i13 + 4 >> 2] | 0;
     i19 = i20;
    }
   } while (0);
   i12 = i18 + i19 | 0;
   if ((i7 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i12 + i17 << 1) >> 1] = HEAPU8[i3 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 21;
    break;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i15;
   i24 = 0;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i14 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i9 + 20 | 0);
   i15 = i6 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i14 = 21;
    break;
   }
   i15 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i9;
   HEAP32[i16 + 8 >> 2] = i15;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i23 = i16;
   i24 = i15;
  }
 } while (0);
 if ((i14 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 i9 = _strlen(i14 | 0) | 0;
 _memcpy(i24 | 0, i14 | 0, i9) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i25 = 0;
   i26 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i27 = i14;
    i28 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i16 = 0;
    while (1) {
     HEAP8[i24 + (i16 + i9) | 0] = HEAP8[i15 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i10 >> 2] | 0;
    i16 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i25 = 0;
     i26 = i16;
     break;
    } else {
     i27 = i6;
     i28 = i16;
    }
   }
   i25 = HEAP32[i27 + 4 >> 2] | 0;
   i26 = i28;
  }
 } while (0);
 _memcpy(i24 + (i25 + i26) | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore40isOnAccessControlResponseHeaderWhitelistERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 96 | 0;
 i11 = i2 + 104 | 0;
 i12 = i2 + 120 | 0;
 i13 = i2 + 128 | 0;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 672 | 0] | 0)) {
  i14 = __ZN3WTF10fastMallocEj(20) | 0;
  i15 = i14;
  _memset(i14 | 0, 0, 20) | 0;
  __ZN3WTF6StringC1EPKc(i3, H_BASE + 160 | 0);
  i16 = i14;
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i2 + 8 | 0, i16, i3, i3);
  i14 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i3 = i14 | 0;
    i17 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i3 >> 2] = i17;
     break;
    }
   }
  } while (0);
  __ZN3WTF6StringC1EPKc(i4, H_BASE + 80 | 0);
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i5, i16, i4, i4);
  i5 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i4 = i5 | 0;
    i14 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i4 >> 2] = i14;
     break;
    }
   }
  } while (0);
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 48 | 0);
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i16, i6, i6);
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i6 = i7 | 0;
    i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i6 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN3WTF6StringC1EPKc(i8, H_BASE + 152 | 0);
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i9, i16, i8, i8);
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i8 = i9 | 0;
    i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i8 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN3WTF6StringC1EPKc(i10, H_BASE + 136 | 0);
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i11, i16, i10, i10);
  i11 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i10 = i11 | 0;
    i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i10 >> 2] = i9;
     break;
    }
   }
  } while (0);
  __ZN3WTF6StringC1EPKc(i12, H_BASE + 128 | 0);
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i13, i16, i12, i12);
  i16 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i12 = i16 | 0;
    i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i13 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i12 >> 2] = i13;
     break;
    }
   }
  } while (0);
  HEAP32[H_BASE + 696 >> 2] = i15;
  HEAP8[H_BASE + 672 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i15 = HEAP32[H_BASE + 696 >> 2] | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i18 = 0;
  STACKTOP = i2;
  return i18 | 0;
 }
 i13 = HEAP32[i15 + 8 >> 2] | 0;
 i15 = i1 | 0;
 i1 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i15 >> 2] | 0) | 0;
 i12 = (i1 >>> 23) + ~i1 | 0;
 i11 = i12 << 12 ^ i12;
 i12 = i11 >>> 7 ^ i11;
 i11 = i12 << 2 ^ i12;
 i12 = i11 >>> 20 ^ i11 | 1;
 i11 = i1;
 i1 = 0;
 while (1) {
  i9 = i11 & i13;
  i10 = i16 + (i9 << 2) | 0;
  i7 = HEAP32[i10 >> 2] | 0;
  i8 = i7;
  if ((i8 | 0) == 0) {
   i19 = 0;
   break;
  } else if ((i8 | 0) != (-1 | 0)) {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i7, HEAP32[i15 >> 2] | 0) | 0) {
    i19 = i10;
    break;
   }
  }
  i10 = (i1 | 0) == 0 ? i12 : i1;
  i11 = i10 + i9 | 0;
  i1 = i10;
 }
 i18 = (i19 | 0) != 0;
 STACKTOP = i2;
 return i18 | 0;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i7 = i9 << 12 ^ i9;
 i9 = i7 >>> 7 ^ i7;
 i7 = i9 << 2 ^ i9;
 i9 = i7 >>> 20 ^ i7 | 1;
 i7 = 0;
 i11 = i3;
 i3 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 8;
    break;
   } else {
    i16 = i7;
   }
  }
  i14 = (i3 | 0) == 0 ? i9 : i3;
  i7 = i16;
  i11 = i14 + i12 | 0;
  i3 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i7 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i7 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i7;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i4 = i7 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i7 | 0)) {
  i19 = i18;
  i20 = i7;
 } else {
  if ((i7 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i7 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i7 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i10 << 2) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i13) | 0;
   i13 = (i17 >>> 23) + ~i17 | 0;
   i18 = i13 << 12 ^ i13;
   i13 = i18 >>> 7 ^ i18;
   i18 = i13 << 2 ^ i13;
   i13 = i18 >>> 20 ^ i18 | 1;
   i18 = i17;
   i17 = 0;
   i19 = 0;
   while (1) {
    i20 = i18 & i16;
    i21 = i14 + (i20 << 2) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    i23 = i22;
    if ((i23 | 0) == (-1 | 0)) {
     i24 = i21;
    } else if ((i23 | 0) == 0) {
     i25 = 6;
     break;
    } else {
     if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i22, HEAP32[i12 >> 2] | 0) | 0) {
      i26 = i21;
      break;
     } else {
      i24 = i19;
     }
    }
    i22 = (i17 | 0) == 0 ? i13 : i17;
    i18 = i22 + i20 | 0;
    i17 = i22;
    i19 = i24;
   }
   if ((i25 | 0) == 6) {
    i25 = 0;
    i26 = (i19 | 0) != 0 ? i19 : i21;
   }
   i17 = i26 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i13 = i18 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i18;
   i15 = (i2 | 0) == (i3 | 0) ? i26 : i11;
  }
  i18 = i10 + 1 | 0;
  if ((i18 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i18;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i27 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i27 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i26 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i26;
     break;
    }
   }
  } while (0);
  i1 = i27 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i27 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i7 = i9 << 12 ^ i9;
 i9 = i7 >>> 7 ^ i7;
 i7 = i9 << 2 ^ i9;
 i9 = i7 >>> 20 ^ i7 | 1;
 i7 = 0;
 i11 = i3;
 i3 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 8;
    break;
   } else {
    i16 = i7;
   }
  }
  i14 = (i3 | 0) == 0 ? i9 : i3;
  i7 = i16;
  i11 = i14 + i12 | 0;
  i3 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i7 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i7 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i7;
 }
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i18 | 0;
 i13 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i7 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i7;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i4 << 1;
   i21 = (i7 * 6 & -1 | 0) < (i17 | 0) ? i4 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore40parseAccessControlExposeHeadersAllowListERKN3WTF6StringERNS0_7HashSetIS1_NS0_15CaseFoldingHashENS0_10HashTraitsIS1_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZNK3WTF6String5splitEtbRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i1, 44, 0, i4);
 do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i4 = i5 | 0;
   i1 = i2 | 0;
   i10 = 0;
   while (1) {
    __ZNK3WTF6String15stripWhiteSpaceEv(i5, (HEAP32[i7 >> 2] | 0) + (i10 << 2) | 0);
    i11 = HEAP32[i4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
       i12 = i11;
      } else {
       __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i6, i1, i5, i5);
       i13 = HEAP32[i4 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i12 = i13;
       }
      }
      i13 = i12 | 0;
      i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i13 >> 2] = i14;
       break;
      }
     }
    } while (0);
    i10 = i10 + 1 | 0;
    i15 = HEAP32[i9 >> 2] | 0;
    if (i10 >>> 0 >= i15 >>> 0) {
     break;
    }
   }
   if ((i15 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i7 >> 2] | 0;
   i4 = i10 + (i15 << 2) | 0;
   i1 = i10;
   while (1) {
    i10 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i11 = i10 | 0;
      i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i11 >> 2] = i14;
       break;
      }
     }
    } while (0);
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   HEAP32[i9 >> 2] = 0;
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i3;
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
function __ZN7WebCore32isSimpleCrossOriginAccessRequestERKN3WTF6StringERKNS_13HTTPHeaderMapE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 | 0;
 do {
  if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 664 | 0) | 0)) {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 656 | 0) | 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 416 | 0) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i3 + (i1 << 3) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 L9 : do {
  if ((i1 | 0) == 0) {
   i6 = i3;
  } else {
   i2 = i3;
   while (1) {
    i7 = HEAP32[i2 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i2;
     break L9;
    }
    i7 = i2 + 8 | 0;
    if ((i7 | 0) == (i5 | 0)) {
     i4 = 1;
     break;
    } else {
     i2 = i7;
    }
   }
   return i4 | 0;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  i4 = 1;
  return i4 | 0;
 } else {
  i8 = i6;
 }
 L17 : while (1) {
  if (!(__ZN7WebCore45isOnAccessControlSimpleRequestHeaderWhitelistERKN3WTF6StringES3_(i8 | 0, i8 + 4 | 0) | 0)) {
   i4 = 0;
   i9 = 17;
   break;
  }
  i6 = i8 + 8 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   i4 = 1;
   i9 = 18;
   break;
  } else {
   i10 = i6;
  }
  while (1) {
   i6 = HEAP32[i10 >> 2] | 0;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i10 + 8 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i4 = 1;
    i9 = 20;
    break L17;
   } else {
    i10 = i6;
   }
  }
  if ((i10 | 0) == (i5 | 0)) {
   i4 = 1;
   i9 = 19;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 17) {
  return i4 | 0;
 } else if ((i9 | 0) == 18) {
  return i4 | 0;
 } else if ((i9 | 0) == 19) {
  return i4 | 0;
 } else if ((i9 | 0) == 20) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore45isOnAccessControlSimpleRequestHeaderWhitelistERKN3WTF6StringES3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 120 | 0) | 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 104 | 0) | 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 80 | 0) | 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 72 | 0) | 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 64 | 0) | 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 48 | 0) | 0)) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore28extractMIMETypeFromMediaTypeERKN3WTF6StringE(i4, i2);
 i2 = i4 | 0;
 do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 8 | 0) | 0) {
   i7 = 1;
  } else {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 632 | 0) | 0) {
    i7 = 1;
    break;
   }
   i7 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 616 | 0) | 0;
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i2 >> 2] = i5;
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 4 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
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
 HEAP32[i1 + 48 >> 2] = i3;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i5 >> 2] = H_BASE + 664;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
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
function __ZN7WebCore29updateRequestForAccessControlERNS_15ResourceRequestEPNS_14SecurityOriginENS_17StoredCredentialsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 __ZN7WebCore19ResourceRequestBase17removeCredentialsEv(i6);
 __ZN7WebCore19ResourceRequestBase15setAllowCookiesEb(i6, (i3 | 0) == 0);
 __ZNK7WebCore14SecurityOrigin8toStringEv(i5, i2);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i6, H_BASE + 176 | 0, i5);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
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
function __ZN7WebCore45isOnAccessControlSimpleRequestMethodWhitelistERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 664 | 0) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 656 | 0) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 416 | 0) | 0;
 return i3 | 0;
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_memset","__ZN7WebCore40parseAccessControlExposeHeadersAllowListERKN3WTF6StringERNS0_7HashSetIS1_NS0_15CaseFoldingHashENS0_10HashTraitsIS1_EEEE","__ZN7WebCore29updateRequestForAccessControlERNS_15ResourceRequestEPNS_14SecurityOriginENS_17StoredCredentialsE","__ZN7WebCore35createAccessControlPreflightRequestERKNS_15ResourceRequestEPNS_14SecurityOriginE","__ZN7WebCore45isOnAccessControlSimpleRequestMethodWhitelistERKN3WTF6StringE","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore45isOnAccessControlSimpleRequestHeaderWhitelistERKN3WTF6StringES3_","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","_memcpy","__ZN7WebCore24passesAccessControlCheckERKNS_16ResourceResponseENS_17StoredCredentialsEPNS_14SecurityOriginERN3WTF6StringE","__ZN7WebCore40isOnAccessControlResponseHeaderWhitelistERKN3WTF6StringE","_strlen","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","__ZN7WebCore32isSimpleCrossOriginAccessRequestERKN3WTF6StringERKNS_13HTTPHeaderMapE"]
