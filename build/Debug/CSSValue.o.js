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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore8CSSValue7destroyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 & 2 | 0) != 0) {
  i3 = HEAP32[i1 + 8 >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i1);
  return;
 }
 switch (i2 >>> 13 & 63 | 0) {
 case 11:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i3 = i2 | 0;
     i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
      break;
     } else {
      HEAP32[i3 >> 2] = i5;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 10:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 15:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = HEAP32[i1 + 12 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i5 = i2 | 0;
     i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
      break;
     } else {
      HEAP32[i5 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i3 = i2 | 0;
     i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i3 >> 2] = i5;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 6:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = HEAP32[i1 + 128 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i5 = i2 | 0;
     i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
      break;
     } else {
      HEAP32[i5 >> 2] = i3;
      break;
     }
    }
   } while (0);
   __ZN7WebCore16CSSGradientValueD2Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 7:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore22CSSRadialGradientValueD2Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 4:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore17CSSCrossfadeValueD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 1:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore13CSSImageValueD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 16:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 17:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 24:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i3 = HEAP32[i1 + 12 >> 2] | 0;
    if ((i3 | 0) > 0) {
     i5 = 0;
     while (1) {
      i4 = HEAP32[i2 + (i5 * 20 & -1) >> 2] | 0;
      i6 = i4;
      do {
       if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
        i7 = i4 | 0;
        i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
        if ((i8 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i4);
         break;
        } else {
         HEAP32[i7 >> 2] = i8;
         break;
        }
       }
      } while (0);
      i5 = i5 + 1 | 0;
      if ((i5 | 0) >= (i3 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 3:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore14CSSCanvasValueD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 2:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore19CSSCursorImageValueD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 13:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore12CSSFontValueD2Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 14:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i1 + 20 | 0);
   i2 = HEAP32[i1 + 12 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i3 = i2 | 0;
     i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i3 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i5 = i2 | 0;
     i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i5 >> 2] = i3;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 12:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i3 = i2 | 0;
     i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i3 >> 2] = i5;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 0:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore17CSSPrimitiveValueD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 18:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = HEAP32[i1 + 16 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i5 = i2 | 0;
     i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i2);
      break;
     } else {
      HEAP32[i5 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i1 + 12 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i3 = i2 | 0;
     i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
      break;
     } else {
      HEAP32[i3 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i5 = i2 | 0;
     i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
      break;
     } else {
      HEAP32[i5 >> 2] = i3;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 19:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore14CSSShadowValueD2Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 8:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 9:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 20:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 28:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = i1 + 8 | 0;
   i3 = i1 + 16 | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   i4 = i2;
   if ((i5 | 0) != 0) {
    i6 = HEAP32[i4 >> 2] | 0;
    i8 = i6 + (i5 << 2) | 0;
    i5 = i6;
    while (1) {
     i6 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i7 = i6 | 0;
       i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i9 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i6);
        break;
       } else {
        HEAP32[i7 >> 2] = i9;
        break;
       }
      }
     } while (0);
     i5 = i5 + 4 | 0;
     if ((i5 | 0) == (i8 | 0)) {
      break;
     }
    }
    HEAP32[i3 >> 2] = 0;
   }
   i3 = HEAP32[i4 >> 2] | 0;
   if (!((i1 + 20 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
    HEAP32[i2 >> 2] = 0;
    HEAP32[i1 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 33:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i3 = i1 + 8 | 0;
   i2 = i1 + 16 | 0;
   i4 = HEAP32[i2 >> 2] | 0;
   i8 = i3;
   if ((i4 | 0) != 0) {
    i5 = HEAP32[i8 >> 2] | 0;
    i6 = i5 + (i4 << 2) | 0;
    i4 = i5;
    while (1) {
     i5 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       i9 = i5 | 0;
       i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       if ((i7 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i5);
        break;
       } else {
        HEAP32[i9 >> 2] = i7;
        break;
       }
      }
     } while (0);
     i4 = i4 + 4 | 0;
     if ((i4 | 0) == (i6 | 0)) {
      break;
     }
    }
    HEAP32[i2 >> 2] = 0;
   }
   i2 = HEAP32[i8 >> 2] | 0;
   if (!((i1 + 20 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i1 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 21:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 22:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i3 = i2 + 4 | 0;
     i8 = i3 | 0;
     i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i8 >> 2] = i6;
      break;
     }
     i6 = i3 - 4 | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 5:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore19CSSFilterImageValueD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 29:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = i1 + 8 | 0;
   i6 = i1 + 16 | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   i8 = i2;
   if ((i3 | 0) != 0) {
    i4 = HEAP32[i8 >> 2] | 0;
    i5 = i4 + (i3 << 2) | 0;
    i3 = i4;
    while (1) {
     i4 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i4 | 0) != 0) {
       i7 = i4 | 0;
       i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i9 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i4);
        break;
       } else {
        HEAP32[i7 >> 2] = i9;
        break;
       }
      }
     } while (0);
     i3 = i3 + 4 | 0;
     if ((i3 | 0) == (i5 | 0)) {
      break;
     }
    }
    HEAP32[i6 >> 2] = 0;
   }
   i6 = HEAP32[i8 >> 2] | 0;
   if (!((i1 + 20 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
    HEAP32[i2 >> 2] = 0;
    HEAP32[i1 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 30:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i6 = i1 + 8 | 0;
   i2 = i1 + 16 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   i5 = i6;
   if ((i8 | 0) != 0) {
    i3 = HEAP32[i5 >> 2] | 0;
    i4 = i3 + (i8 << 2) | 0;
    i8 = i3;
    while (1) {
     i3 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i9 = i3 | 0;
       i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       if ((i7 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i3);
        break;
       } else {
        HEAP32[i9 >> 2] = i7;
        break;
       }
      }
     } while (0);
     i8 = i8 + 4 | 0;
     if ((i8 | 0) == (i4 | 0)) {
      break;
     }
    }
    HEAP32[i2 >> 2] = 0;
   }
   i2 = HEAP32[i5 >> 2] | 0;
   if (!((i1 + 20 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i1 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 31:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = i1 + 8 | 0;
   i6 = i1 + 16 | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   i4 = i2;
   if ((i5 | 0) != 0) {
    i8 = HEAP32[i4 >> 2] | 0;
    i3 = i8 + (i5 << 2) | 0;
    i5 = i8;
    while (1) {
     i8 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i7 = i8 | 0;
       i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i9 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i8);
        break;
       } else {
        HEAP32[i7 >> 2] = i9;
        break;
       }
      }
     } while (0);
     i5 = i5 + 4 | 0;
     if ((i5 | 0) == (i3 | 0)) {
      break;
     }
    }
    HEAP32[i6 >> 2] = 0;
   }
   i6 = HEAP32[i4 >> 2] | 0;
   if (!((i1 + 20 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
    HEAP32[i2 >> 2] = 0;
    HEAP32[i1 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 32:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i6 = i1 + 8 | 0;
   i2 = i1 + 16 | 0;
   i4 = HEAP32[i2 >> 2] | 0;
   i3 = i6;
   if ((i4 | 0) != 0) {
    i5 = HEAP32[i3 >> 2] | 0;
    i8 = i5 + (i4 << 2) | 0;
    i4 = i5;
    while (1) {
     i5 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       i9 = i5 | 0;
       i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       if ((i7 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i5);
        break;
       } else {
        HEAP32[i9 >> 2] = i7;
        break;
       }
      }
     } while (0);
     i4 = i4 + 4 | 0;
     if ((i4 | 0) == (i8 | 0)) {
      break;
     }
    }
    HEAP32[i2 >> 2] = 0;
   }
   i2 = HEAP32[i3 >> 2] | 0;
   if (!((i1 + 20 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i1 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 23:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore20WebKitCSSShaderValueD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 25:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 26:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   i2 = HEAP32[i1 + 24 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i6 = i2 | 0;
     i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i6 >> 2] = i3;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 case 27:
  {
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore25WebKitCSSSVGDocumentValueD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   return;
  }
 default:
  {
   return;
  }
 }
}
function __ZNK7WebCore8CSSValue6equalsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 L1 : do {
  if ((i5 & 2 | 0) == 0) {
   i6 = i5 >>> 13 & 63;
   i7 = HEAP32[i2 + 4 >> 2] | 0;
   i8 = i7 >>> 13 & 63;
   if ((i6 | 0) != (i8 | 0)) {
    if (!((i6 | 0) != 28 | (i8 | 0) == 28)) {
     i9 = __ZNK7WebCore12CSSValueList6equalsERKNS_8CSSValueE(i1, i2) | 0;
     break;
    }
    if ((i5 & 516096 | 0) == 229376) {
     i9 = 0;
     break;
    }
    if ((i7 & 516096 | 0) != 229376) {
     i9 = 0;
     break;
    }
    i9 = __ZNK7WebCore12CSSValueList6equalsERKNS_8CSSValueE(i2, i1) | 0;
    break;
   }
   switch (i6 | 0) {
   case 10:
    {
     i9 = __ZNK7WebCore19CSSAspectRatioValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 11:
    {
     i9 = __ZNK7WebCore24CSSBorderImageSliceValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 3:
    {
     i9 = __ZNK7WebCore14CSSCanvasValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 2:
    {
     i9 = __ZNK7WebCore19CSSCursorImageValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 5:
    {
     i9 = __ZNK7WebCore19CSSFilterImageValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 13:
    {
     i9 = __ZNK7WebCore12CSSFontValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 14:
    {
     i9 = __ZNK7WebCore19CSSFontFaceSrcValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 12:
    {
     i9 = __ZNK7WebCore19CSSFontFeatureValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 15:
    {
     i9 = __ZNK7WebCore16CSSFunctionValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 6:
    {
     i9 = __ZNK7WebCore22CSSLinearGradientValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 7:
    {
     i9 = __ZNK7WebCore22CSSRadialGradientValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 4:
    {
     i9 = __ZNK7WebCore17CSSCrossfadeValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 1:
    {
     i9 = __ZNK7WebCore13CSSImageValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 16:
    {
     i9 = 1;
     break L1;
     break;
    }
   case 17:
    {
     i9 = 1;
     break L1;
     break;
    }
   case 24:
    {
     i9 = __ZNK7WebCore8CSSValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 0:
    {
     i9 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 18:
    {
     i9 = __ZNK7WebCore15CSSReflectValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 19:
    {
     i9 = __ZNK7WebCore14CSSShadowValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 8:
    {
     i9 = __ZNK7WebCore33CSSCubicBezierTimingFunctionValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 9:
    {
     i9 = __ZNK7WebCore27CSSStepsTimingFunctionValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 20:
    {
     i9 = __ZNK7WebCore20CSSUnicodeRangeValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 28:
    {
     i9 = __ZNK7WebCore12CSSValueList6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 33:
    {
     if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i2 + 36 >> 2] | 0)) {
      i9 = 0;
      break L1;
     }
     i9 = __ZNK7WebCore12CSSValueList6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 21:
    {
     i9 = (HEAP32[i1 + 8 >> 2] | 0) == (HEAP32[i2 + 8 >> 2] | 0);
     break L1;
     break;
    }
   case 22:
    {
     i9 = __ZNK7WebCore12CSSCalcValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 29:
    {
     i9 = __ZNK7WebCore20WebKitCSSFilterValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 30:
    {
     i9 = __ZNK7WebCore27WebKitCSSArrayFunctionValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 31:
    {
     i9 = __ZNK7WebCore25WebKitCSSMatFunctionValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 32:
    {
     i9 = __ZNK7WebCore25WebKitCSSMixFunctionValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 23:
    {
     i9 = __ZNK7WebCore20WebKitCSSShaderValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 25:
    {
     i9 = __ZNK7WebCore8SVGColor6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 26:
    {
     i9 = __ZNK7WebCore8SVGPaint6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   case 27:
    {
     i9 = __ZNK7WebCore25WebKitCSSSVGDocumentValue6equalsERKS0_(i1, i2) | 0;
     break L1;
     break;
    }
   default:
    {
     i9 = 0;
     break L1;
    }
   }
  } else {
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   i7 = (i6 | 0) == 0;
   if (!i7) {
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i4, i2);
   i8 = i4 | 0;
   i10 = __ZN3WTF5equalEPKNS_10StringImplES2_(i6, HEAP32[i8 >> 2] | 0) | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i8 = i11 | 0;
     i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i8 >> 2] = i12;
      break;
     }
    }
   } while (0);
   if (i7) {
    i9 = i10;
    break;
   }
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i9 = i10;
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    i9 = i10;
    break;
   }
  }
 } while (0);
 STACKTOP = i3;
 return i9 | 0;
}
function __ZNK7WebCore8CSSValue7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 & 2 | 0) != 0) {
  i4 = HEAP32[i2 + 8 >> 2] | 0;
  HEAP32[i1 >> 2] = i4;
  if ((i4 | 0) == 0) {
   return;
  }
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
  return;
 }
 switch (i3 >>> 13 & 63 | 0) {
 case 2:
  {
   __ZNK7WebCore19CSSCursorImageValue13customCSSTextEv(i1, i2);
   return;
  }
 case 5:
  {
   __ZNK7WebCore19CSSFilterImageValue13customCSSTextEv(i1, i2);
   return;
  }
 case 13:
  {
   __ZNK7WebCore12CSSFontValue13customCSSTextEv(i1, i2);
   return;
  }
 case 10:
  {
   __ZNK7WebCore19CSSAspectRatioValue13customCSSTextEv(i1, i2);
   return;
  }
 case 11:
  {
   __ZNK7WebCore24CSSBorderImageSliceValue13customCSSTextEv(i1, i2);
   return;
  }
 case 3:
  {
   __ZNK7WebCore14CSSCanvasValue13customCSSTextEv(i1, i2);
   return;
  }
 case 14:
  {
   __ZNK7WebCore19CSSFontFaceSrcValue13customCSSTextEv(i1, i2);
   return;
  }
 case 12:
  {
   __ZNK7WebCore19CSSFontFeatureValue13customCSSTextEv(i1, i2);
   return;
  }
 case 15:
  {
   __ZNK7WebCore16CSSFunctionValue13customCSSTextEv(i1, i2);
   return;
  }
 case 6:
  {
   __ZNK7WebCore22CSSLinearGradientValue13customCSSTextEv(i1, i2);
   return;
  }
 case 7:
  {
   __ZNK7WebCore22CSSRadialGradientValue13customCSSTextEv(i1, i2);
   return;
  }
 case 4:
  {
   __ZNK7WebCore17CSSCrossfadeValue13customCSSTextEv(i1, i2);
   return;
  }
 case 1:
  {
   __ZNK7WebCore13CSSImageValue13customCSSTextEv(i1, i2);
   return;
  }
 case 16:
  {
   __ZNK7WebCore17CSSInheritedValue13customCSSTextEv(i1, i2);
   return;
  }
 case 17:
  {
   __ZNK7WebCore15CSSInitialValue13customCSSTextEv(i1, i2);
   return;
  }
 case 24:
  {
   __ZNK7WebCore20CSSGridTemplateValue13customCSSTextEv(i1, i2);
   return;
  }
 case 0:
  {
   __ZNK7WebCore17CSSPrimitiveValue13customCSSTextEv(i1, i2);
   return;
  }
 case 18:
  {
   __ZNK7WebCore15CSSReflectValue13customCSSTextEv(i1, i2);
   return;
  }
 case 19:
  {
   __ZNK7WebCore14CSSShadowValue13customCSSTextEv(i1, i2);
   return;
  }
 case 8:
  {
   __ZNK7WebCore33CSSCubicBezierTimingFunctionValue13customCSSTextEv(i1, i2);
   return;
  }
 case 9:
  {
   __ZNK7WebCore27CSSStepsTimingFunctionValue13customCSSTextEv(i1, i2);
   return;
  }
 case 20:
  {
   __ZNK7WebCore20CSSUnicodeRangeValue13customCSSTextEv(i1, i2);
   return;
  }
 case 28:
  {
   __ZNK7WebCore12CSSValueList13customCSSTextEv(i1, i2);
   return;
  }
 case 33:
  {
   __ZNK7WebCore23WebKitCSSTransformValue13customCSSTextEv(i1, i2);
   return;
  }
 case 21:
  {
   __ZNK7WebCore22CSSLineBoxContainValue13customCSSTextEv(i1, i2);
   return;
  }
 case 22:
  {
   __ZNK7WebCore12CSSCalcValue13customCSSTextEv(i1, i2);
   return;
  }
 case 29:
  {
   __ZNK7WebCore20WebKitCSSFilterValue13customCSSTextEv(i1, i2);
   return;
  }
 case 30:
  {
   __ZNK7WebCore27WebKitCSSArrayFunctionValue13customCSSTextEv(i1, i2);
   return;
  }
 case 31:
  {
   __ZNK7WebCore25WebKitCSSMatFunctionValue13customCSSTextEv(i1, i2);
   return;
  }
 case 32:
  {
   __ZNK7WebCore25WebKitCSSMixFunctionValue13customCSSTextEv(i1, i2);
   return;
  }
 case 23:
  {
   __ZNK7WebCore20WebKitCSSShaderValue13customCSSTextEv(i1, i2);
   return;
  }
 case 25:
  {
   __ZNK7WebCore8SVGColor13customCSSTextEv(i1, i2);
   return;
  }
 case 26:
  {
   __ZNK7WebCore8SVGPaint13customCSSTextEv(i1, i2);
   return;
  }
 case 27:
  {
   __ZNK7WebCore25WebKitCSSSVGDocumentValue13customCSSTextEv(i1, i2);
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   return;
  }
 }
}
function __ZNK7WebCore8CSSValue13cloneForCSSOMEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = (HEAP32[i2 + 4 >> 2] | 0) >>> 13 & 63;
 switch (i14 | 0) {
 case 1:
 case 2:
  {
   __ZNK7WebCore13CSSImageValue13cloneForCSSOMEv(i1, i2);
   STACKTOP = i3;
   return;
  }
 case 29:
  {
   __ZNK7WebCore20WebKitCSSFilterValue13cloneForCSSOMEv(i6, i2);
   i15 = i6 | 0;
   i6 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i1 >> 2] = i6;
   STACKTOP = i3;
   return;
  }
 case 30:
  {
   __ZNK7WebCore27WebKitCSSArrayFunctionValue13cloneForCSSOMEv(i7, i2);
   i6 = i7 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i1 >> 2] = i7;
   STACKTOP = i3;
   return;
  }
 case 25:
  {
   __ZNK7WebCore8SVGColor13cloneForCSSOMEv(i11, i2);
   i7 = i11 | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i1 >> 2] = i11;
   STACKTOP = i3;
   return;
  }
 case 32:
  {
   __ZNK7WebCore25WebKitCSSMixFunctionValue13cloneForCSSOMEv(i9, i2);
   i11 = i9 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i3;
   return;
  }
 case 33:
  {
   __ZNK7WebCore23WebKitCSSTransformValue13cloneForCSSOMEv(i10, i2);
   i9 = i10 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i1 >> 2] = i10;
   STACKTOP = i3;
   return;
  }
 case 28:
  {
   __ZNK7WebCore12CSSValueList13cloneForCSSOMEv(i5, i2);
   i10 = i5 | 0;
   i5 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i1 >> 2] = i5;
   STACKTOP = i3;
   return;
  }
 case 0:
  {
   __ZNK7WebCore17CSSPrimitiveValue13cloneForCSSOMEv(i4, i2);
   i5 = i4 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i1 >> 2] = i4;
   STACKTOP = i3;
   return;
  }
 case 31:
  {
   __ZNK7WebCore25WebKitCSSMatFunctionValue13cloneForCSSOMEv(i8, i2);
   i4 = i8 | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i1 >> 2] = i8;
   STACKTOP = i3;
   return;
  }
 case 26:
  {
   __ZNK7WebCore8SVGPaint13cloneForCSSOMEv(i12, i2);
   i8 = i12 | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i1 >> 2] = i12;
   STACKTOP = i3;
   return;
  }
 default:
  {
   __ZNK7WebCore8CSSValue7cssTextEv(i13, i2);
   i2 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i2 >> 2] = 1;
   i12 = i2 + 4 | 0;
   i8 = i14 << 13 | HEAP32[i12 >> 2] & -524288 | 1;
   HEAP32[i12 >> 2] = i8;
   i14 = i13 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i2 + 8 >> 2] = i13;
   if ((i13 | 0) == 0) {
    i16 = i8;
   } else {
    i8 = i13 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i16 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i12 >> 2] = i16 | 2;
   HEAP32[i1 >> 2] = i2;
   i2 = HEAP32[i14 >> 2] | 0;
   if ((i2 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i14 = i2 | 0;
   i1 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i14 >> 2] = i1;
    STACKTOP = i3;
    return;
   }
  }
 }
}
function __ZN7WebCore16CSSGradientValueD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 64 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 20 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i5 | 0);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i5 | 0);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 20 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i1 + 76 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 68 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore22CSSImageGeneratorValueD2Ev(i9);
  return;
 }
 i6 = i2 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  i9 = i1 | 0;
  __ZN7WebCore22CSSImageGeneratorValueD2Ev(i9);
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  i9 = i1 | 0;
  __ZN7WebCore22CSSImageGeneratorValueD2Ev(i9);
  return;
 }
}
function __ZN7WebCore22CSSRadialGradientValueD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 140 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore16CSSGradientValueD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  i5 = i1 | 0;
  __ZN7WebCore16CSSGradientValueD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore16CSSGradientValueD2Ev(i5);
  return;
 }
}
function __ZN7WebCore14CSSShadowValueD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore12CSSFontValueD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZNK7WebCore8CSSValue23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPKNS_18StyleSheetContentsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 & 516096 | 0) == 0) {
  __ZNK7WebCore17CSSPrimitiveValue23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPKNS_18StyleSheetContentsE(i1, i2, i3);
  return;
 }
 if ((i4 & 491520) >>> 0 > 221184 >>> 0) {
  __ZNK7WebCore12CSSValueList23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPKNS_18StyleSheetContentsE(i1, i2, i3);
  return;
 }
 i5 = i4 >>> 13 & 63;
 if ((i5 | 0) == 14) {
  __ZNK7WebCore19CSSFontFaceSrcValue23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPKNS_18StyleSheetContentsE(i1, i2, i3);
  return;
 } else if ((i5 | 0) == 18) {
  __ZNK7WebCore15CSSReflectValue23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPKNS_18StyleSheetContentsE(i1, i2, i3);
  return;
 } else {
  return;
 }
}
function __ZNK7WebCore8CSSValue31hasFailedOrCanceledSubresourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 & 491520) >>> 0 > 221184 >>> 0) {
  i3 = __ZNK7WebCore12CSSValueList31hasFailedOrCanceledSubresourcesEv(i1) | 0;
  return i3 | 0;
 }
 i4 = i2 >>> 13 & 63;
 if ((i4 | 0) == 14) {
  i3 = __ZNK7WebCore19CSSFontFaceSrcValue31hasFailedOrCanceledSubresourcesEv(i1) | 0;
  return i3 | 0;
 } else if ((i4 | 0) == 1) {
  i3 = __ZNK7WebCore13CSSImageValue31hasFailedOrCanceledSubresourcesEv(i1) | 0;
  return i3 | 0;
 } else if ((i4 | 0) == 4) {
  i3 = __ZNK7WebCore17CSSCrossfadeValue31hasFailedOrCanceledSubresourcesEv(i1) | 0;
  return i3 | 0;
 } else if ((i4 | 0) == 5) {
  i3 = __ZNK7WebCore19CSSFilterImageValue31hasFailedOrCanceledSubresourcesEv(i1) | 0;
  return i3 | 0;
 } else {
  i3 = 0;
  return i3 | 0;
 }
 return 0;
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
function __ZNK7WebCore8CSSValue12cssValueTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2 & 516096;
 do {
  if ((i1 | 0) == 131072) {
   i3 = 0;
  } else {
   if ((i1 | 0) == 0) {
    i3 = 1;
    break;
   }
   if ((i2 & 491520) >>> 0 > 221184 >>> 0) {
    i3 = 2;
    break;
   }
   i3 = (i1 | 0) == 139264 ? 4 : 3;
  }
 } while (0);
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore8CSSValue22isImplicitInitialValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 4 >> 2] & 516096 | 0) != 139264) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 7 | 0] & 1) != 0;
 return i2 | 0;
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore8CSSValue6equalsERKS0_","_strlen","__ZNK7WebCore8CSSValue12cssValueTypeEv","__ZNK7WebCore8CSSValue22isImplicitInitialValueEv","__ZNK7WebCore8CSSValue13cloneForCSSOMEv","__ZNK7WebCore8CSSValue7cssTextEv","__ZN7WebCore16CSSGradientValueD2Ev","__ZNK7WebCore8CSSValue23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPKNS_18StyleSheetContentsE","__ZN7WebCore8CSSValue7destroyEv","_memset","__ZN7WebCore22CSSRadialGradientValueD2Ev","_memcpy","__ZNK7WebCore8CSSValue31hasFailedOrCanceledSubresourcesEv","__ZN7WebCore14CSSShadowValueD2Ev","__ZN7WebCore12CSSFontValueD2Ev"]
