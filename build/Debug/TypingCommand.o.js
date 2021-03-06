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
H_BASE = parentModule["_malloc"](88 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 88;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13TypingCommandC1ERNS_8DocumentENS0_14ETypingCommandERKN3WTF6StringEjNS_15TextGranularityENS0_19TextCompositionTypeE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore13TypingCommandE=(H_BASE+8)|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13TypingCommand23forwardDeleteKeyPressedENS_15TextGranularityEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 816 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 88 | 0;
 i10 = i4 + 152 | 0;
 i11 = i4 + 352 | 0;
 i12 = i4 + 368 | 0;
 i13 = i4 + 384 | 0;
 i14 = i4 + 400 | 0;
 i15 = i4 + 416 | 0;
 i16 = i4 + 432 | 0;
 i17 = i4 + 448 | 0;
 i18 = i4 + 464 | 0;
 i19 = i4 + 480 | 0;
 i20 = i4 + 496 | 0;
 i21 = i4 + 512 | 0;
 i22 = i4 + 576 | 0;
 i23 = i4 + 592 | 0;
 i24 = i4 + 608 | 0;
 i25 = i4 + 624 | 0;
 i26 = i4 + 640 | 0;
 i27 = i4 + 656 | 0;
 i28 = i4 + 672 | 0;
 i29 = i4 + 688 | 0;
 i30 = i4 + 704 | 0;
 i31 = i4 + 720 | 0;
 i32 = i4 + 736 | 0;
 i33 = i4 + 752 | 0;
 i34 = i4 + 768 | 0;
 i35 = i4 + 784 | 0;
 i36 = i4 + 792 | 0;
 i37 = i4 + 808 | 0;
 i38 = i1 | 0;
 i39 = __ZN7WebCore11EditCommand5frameEv(i38) | 0;
 i40 = i39 + 464 | 0;
 __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(HEAP32[i40 >> 2] | 0, 0);
 __ZN7WebCore16VisibleSelectionC1Ev(i8);
 __ZN7WebCore16VisibleSelectionC1Ev(i9);
 i41 = i1 + 72 | 0;
 i42 = i1 + 124 | 0;
 i43 = HEAP32[i42 >> 2] | 0;
 if ((i43 | 0) == 2) {
  __ZN7WebCore16VisibleSelectionaSERKS0_(i8, i41) | 0;
  __ZN7WebCore16VisibleSelectionaSERKS0_(i9, i8) | 0;
 } else if ((i43 | 0) == 1) {
  HEAP8[i1 + 162 | 0] = 0;
  __ZN7WebCore14FrameSelectionC1EPNS_5FrameE(i10, 0);
  __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i10, i41, 6, 0, 0);
  __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(i10, 1, 0, i2, 0) | 0;
  do {
   if (i3) {
    if ((HEAP32[i10 + 84 >> 2] | 0) != 1 | (i2 | 0) == 0) {
     break;
    }
    __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(i10, 1, 0, 0, 0) | 0;
   }
  } while (0);
  i41 = i12 | 0;
  i43 = i1 + 108 | 0;
  i44 = HEAP32[i43 >> 2] | 0;
  HEAP32[i41 >> 2] = i44;
  if ((i44 | 0) != 0) {
   i45 = i44 + 8 | 0;
   HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
  }
  i45 = i1 + 112 | 0;
  HEAP32[i12 + 4 >> 2] = HEAP32[i45 >> 2];
  i44 = i1 + 116 | 0;
  i46 = HEAP32[i44 >> 2] | 0;
  i47 = i12 + 8 | 0;
  i48 = i47;
  i49 = HEAP32[i48 >> 2] & -8 | i46 & 7;
  HEAP32[i48 >> 2] = i49;
  HEAP8[i47] = i49 & 255 & -9 | i46 & 8;
  __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i11, i12, 1);
  i12 = HEAP32[i41 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i41 = i12 + 8 | 0;
    i46 = i41 | 0;
    i49 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
    HEAP32[i46 >> 2] = i49;
    if ((i49 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
   }
  } while (0);
  if ((HEAP32[i42 >> 2] | 0) == 2) {
   i50 = 0;
  } else {
   i50 = HEAP32[i1 + 120 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i13, i1 + 108 | 0, i50);
  i50 = i14 | 0;
  i42 = i13 | 0;
  i12 = HEAP32[i42 >> 2] | 0;
  HEAP32[i50 >> 2] = i12;
  if ((i12 | 0) != 0) {
   i41 = i12 + 8 | 0;
   HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
  }
  HEAP32[i14 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  i41 = HEAP32[i13 + 8 >> 2] | 0;
  i12 = i14 + 8 | 0;
  i49 = i12;
  i46 = HEAP32[i49 >> 2] & -8 | i41 & 7;
  HEAP32[i49 >> 2] = i46;
  HEAP8[i12] = i46 & 255 & -9 | i41 & 8;
  i41 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i14, F_BASE_ii + 6 | 0, 1) | 0;
  i14 = HEAP32[i50 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i50 = i14 + 8 | 0;
    i46 = i50 | 0;
    i12 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
    HEAP32[i46 >> 2] = i12;
    if ((i12 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
   }
  } while (0);
  L27 : do {
   if ((i41 | 0) != 0) {
    __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i16, i41);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i16, 1);
    i14 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i13, i15) | 0;
    i50 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i50 | 0) != 0) {
      i12 = i50 + 8 | 0;
      i46 = i12 | 0;
      i49 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i49;
      if ((i49 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
     }
    } while (0);
    i50 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i50 | 0) == 0) {
      i51 = 29;
     } else {
      i12 = i50 + 8 | 0;
      i49 = i12 | 0;
      i46 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
      HEAP32[i49 >> 2] = i46;
      if ((i46 | 0) >= 1) {
       i51 = 29;
       break;
      }
      if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
       i51 = 29;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
      if (!i14) {
       break L27;
      }
     }
    } while (0);
    if ((i51 | 0) == 29) {
     if (!i14) {
      break;
     }
    }
    i50 = HEAP32[i42 >> 2] | 0;
    do {
     if ((i50 | 0) != 0) {
      i12 = i50 + 8 | 0;
      i46 = i12 | 0;
      i49 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i49;
      if ((i49 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
     }
    } while (0);
    i50 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i50 | 0) != 0) {
      i14 = i50 + 8 | 0;
      i12 = i14 | 0;
      i49 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      HEAP32[i12 >> 2] = i49;
      if ((i49 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore14FrameSelectionD2Ev(i10);
    __ZN7WebCore16VisibleSelectionD2Ev(i9);
    __ZN7WebCore16VisibleSelectionD2Ev(i8);
    STACKTOP = i4;
    return;
   }
  } while (0);
  __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i17, i13, 1);
  i16 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i13, i17) | 0;
  i15 = HEAP32[i17 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i17 = i15 + 8 | 0;
    i41 = i17 | 0;
    i50 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
    HEAP32[i41 >> 2] = i50;
    if ((i50 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   }
  } while (0);
  do {
   if (i16) {
    __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i20, i13, 1);
    i15 = i19 | 0;
    i17 = i20 | 0;
    i50 = HEAP32[i17 >> 2] | 0;
    HEAP32[i15 >> 2] = i50;
    if ((i50 | 0) != 0) {
     i41 = i50 + 8 | 0;
     HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
    }
    HEAP32[i19 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
    i41 = HEAP32[i20 + 8 >> 2] | 0;
    i50 = i19 + 8 | 0;
    i14 = i50;
    i49 = HEAP32[i14 >> 2] & -8 | i41 & 7;
    HEAP32[i14 >> 2] = i49;
    HEAP8[i50] = i49 & 255 & -9 | i41 & 8;
    __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i18, i19, 1);
    i41 = i18 | 0;
    i49 = HEAP32[i41 >> 2] | 0;
    HEAP32[i41 >> 2] = 0;
    i50 = i11 | 0;
    i14 = HEAP32[i50 >> 2] | 0;
    HEAP32[i50 >> 2] = i49;
    do {
     if ((i14 | 0) != 0) {
      i49 = i14 + 8 | 0;
      i50 = i49 | 0;
      i12 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i12;
      if ((i12 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
     }
    } while (0);
    HEAP32[i11 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    i14 = HEAP32[i18 + 8 >> 2] | 0;
    i49 = i11 + 8 | 0;
    i12 = i49;
    i50 = HEAP32[i12 >> 2] & -8 | i14 & 7;
    HEAP32[i12 >> 2] = i50;
    HEAP8[i49] = i50 & 255 & -9 | i14 & 8;
    i14 = HEAP32[i41 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i50 = i14 + 8 | 0;
      i49 = i50 | 0;
      i12 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
      HEAP32[i49 >> 2] = i12;
      if ((i12 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
     }
    } while (0);
    i14 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i41 = i14 + 8 | 0;
      i50 = i41 | 0;
      i12 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i12;
      if ((i12 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     }
    } while (0);
    i14 = HEAP32[i17 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break;
    }
    i15 = i14 + 8 | 0;
    i14 = i15 | 0;
    i41 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    HEAP32[i14 >> 2] = i41;
    if ((i41 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
   }
  } while (0);
  do {
   if ((__ZNK7WebCore8Position13containerNodeEv(i11) | 0) != 0) {
    i18 = __ZNK7WebCore8Position13containerNodeEv(i11) | 0;
    i19 = i18 + 32 | 0;
    if ((HEAP32[i18 + 12 >> 2] & 2048 | 0) == 0) {
     i52 = i19 | 0;
    } else {
     i52 = HEAP32[i19 >> 2] | 0;
    }
    if ((HEAP32[i52 >> 2] | 0) == 0) {
     break;
    }
    i19 = __ZNK7WebCore8Position13containerNodeEv(i11) | 0;
    i18 = i19 + 32 | 0;
    if ((HEAP32[i19 + 12 >> 2] & 2048 | 0) == 0) {
     i53 = i18 | 0;
    } else {
     i53 = HEAP32[i18 >> 2] | 0;
    }
    i18 = HEAP32[i53 >> 2] | 0;
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 184 >> 2] & 31](i18) | 0)) {
     break;
    }
    i18 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i11) | 0;
    if ((i18 | 0) > (__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i11) | 0) | 0)) {
     break;
    }
    i18 = i22 | 0;
    i19 = HEAP32[i43 >> 2] | 0;
    HEAP32[i18 >> 2] = i19;
    if ((i19 | 0) != 0) {
     i20 = i19 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    }
    HEAP32[i22 + 4 >> 2] = HEAP32[i45 >> 2];
    i20 = HEAP32[i44 >> 2] | 0;
    i19 = i22 + 8 | 0;
    i13 = i19;
    i16 = HEAP32[i13 >> 2] & -8 | i20 & 7;
    HEAP32[i13 >> 2] = i16;
    HEAP8[i19] = i16 & 255 & -9 | i20 & 8;
    i20 = __ZNK7WebCore8Position13containerNodeEv(i11) | 0;
    i16 = i6 | 0;
    HEAP32[i16 >> 2] = i20;
    if ((i20 | 0) != 0) {
     i19 = i20 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i23, i6, 2);
    i19 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i16 = i19 + 8 | 0;
      i20 = i16 | 0;
      i13 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i13;
      if ((i13 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i21, i22, i23, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
    __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i38, i21);
    __ZN7WebCore16VisibleSelectionD2Ev(i21);
    i19 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i17 = i19 + 8 | 0;
      i16 = i17 | 0;
      i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      HEAP32[i16 >> 2] = i13;
      if ((i13 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     }
    } while (0);
    i19 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i17 = i19 + 8 | 0;
      i13 = i17 | 0;
      i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      HEAP32[i13 >> 2] = i16;
      if ((i16 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     }
    } while (0);
    i19 = __ZN7WebCore11EditCommand5frameEv(i38) | 0;
    HEAP8[i1 + 173 | 0] = 1;
    __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 2);
    i18 = HEAP32[i19 + 464 >> 2] | 0;
    i19 = i5 | 0;
    HEAP32[i19 >> 2] = i1;
    if ((i1 | 0) != 0) {
     i17 = i1 + 4 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i18, i5);
    i18 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i19 = i18 + 4 | 0;
      i17 = i19 | 0;
      i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      if ((i16 | 0) != 0) {
       HEAP32[i17 >> 2] = i16;
       break;
      }
      i16 = i19 - 4 | 0;
      if ((i16 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 7](i16);
     }
    } while (0);
    i18 = HEAP32[i42 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i16 = i18 + 8 | 0;
      i19 = i16 | 0;
      i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i17;
      if ((i17 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     }
    } while (0);
    i18 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i16 = i18 + 8 | 0;
      i17 = i16 | 0;
      i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      HEAP32[i17 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore14FrameSelectionD2Ev(i10);
    __ZN7WebCore16VisibleSelectionD2Ev(i9);
    __ZN7WebCore16VisibleSelectionD2Ev(i8);
    STACKTOP = i4;
    return;
   }
  } while (0);
  L138 : do {
   if ((i2 | 0) == 7) {
    if ((HEAP32[i10 + 84 >> 2] | 0) != 1) {
     break;
    }
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i24, i10 + 68 | 0, HEAP32[i10 + 80 >> 2] | 0);
    i5 = __ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i24, 1) | 0;
    i23 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i23 | 0) == 0) {
      i51 = 101;
     } else {
      i21 = i23 + 8 | 0;
      i22 = i21 | 0;
      i6 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      HEAP32[i22 >> 2] = i6;
      if ((i6 | 0) >= 1) {
       i51 = 101;
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       i51 = 101;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
      if (!i5) {
       break L138;
      }
     }
    } while (0);
    if ((i51 | 0) == 101) {
     if (!i5) {
      break;
     }
    }
    __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(i10, 1, 0, 0, 0) | 0;
   }
  } while (0);
  __ZN7WebCore16VisibleSelectionaSERKS0_(i8, i10 + 32 | 0) | 0;
  L149 : do {
   if ((HEAP32[i1 + 64 >> 2] | 0) == 2) {
    i24 = i25 | 0;
    i2 = HEAP32[i8 >> 2] | 0;
    HEAP32[i24 >> 2] = i2;
    if ((i2 | 0) != 0) {
     i23 = i2 + 8 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    }
    i23 = i25 + 4 | 0;
    HEAP32[i23 >> 2] = HEAP32[i8 + 4 >> 2];
    i2 = HEAP32[i8 + 8 >> 2] | 0;
    i21 = i25 + 8 | 0;
    i6 = i21;
    i22 = HEAP32[i6 >> 2] & -8 | i2 & 7;
    HEAP32[i6 >> 2] = i22;
    HEAP8[i21] = i22 & 255 & -9 | i2 & 8;
    i2 = i26 | 0;
    i22 = i1 + 36 | 0;
    i44 = HEAP32[i22 >> 2] | 0;
    HEAP32[i2 >> 2] = i44;
    if ((i44 | 0) == 0) {
     i54 = 0;
    } else {
     i45 = i44 + 8 | 0;
     HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
     i54 = HEAP32[i2 >> 2] | 0;
    }
    i45 = i26 + 4 | 0;
    i44 = i1 + 40 | 0;
    HEAP32[i45 >> 2] = HEAP32[i44 >> 2];
    i43 = i1 + 44 | 0;
    i53 = HEAP32[i43 >> 2] | 0;
    i52 = i26 + 8 | 0;
    i18 = i52;
    i16 = HEAP32[i18 >> 2] & -8 | i53 & 7;
    HEAP32[i18 >> 2] = i16;
    i19 = i16 & 255 & -9 | i53 & 8;
    HEAP8[i52] = i19;
    do {
     if ((HEAP32[i24 >> 2] | 0) == (i54 | 0)) {
      do {
       if ((HEAP8[i21] & 8) == 0) {
        i53 = HEAP32[i6 >> 2] & 7;
        if (!((i53 | 0) == 2 | (i53 | 0) == 4)) {
         i51 = 111;
         break;
        }
        i53 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i25) | 0;
        i55 = i53;
        i56 = HEAP8[i52] | 0;
       } else {
        i51 = 111;
       }
      } while (0);
      if ((i51 | 0) == 111) {
       i55 = HEAP32[i23 >> 2] | 0;
       i56 = i19;
      }
      do {
       if ((i56 & 8) == 0) {
        i53 = HEAP32[i18 >> 2] & 7;
        if (!((i53 | 0) == 2 | (i53 | 0) == 4)) {
         i51 = 115;
         break;
        }
        i57 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i26) | 0;
       } else {
        i51 = 115;
       }
      } while (0);
      if ((i51 | 0) == 115) {
       i57 = HEAP32[i45 >> 2] | 0;
      }
      if ((i55 | 0) != (i57 | 0)) {
       i58 = 1;
       break;
      }
      i58 = ((HEAP32[i18 >> 2] ^ HEAP32[i6 >> 2]) & 7 | 0) != 0;
     } else {
      i58 = 1;
     }
    } while (0);
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i18 = i6 + 8 | 0;
      i45 = i18 | 0;
      i19 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
      HEAP32[i45 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
     }
    } while (0);
    i6 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i6 | 0) == 0) {
      i51 = 127;
     } else {
      i2 = i6 + 8 | 0;
      i18 = i2 | 0;
      i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
      HEAP32[i18 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       i51 = 127;
       break;
      }
      if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
       i51 = 127;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
      if (i58) {
       i51 = 128;
       break L149;
      }
     }
    } while (0);
    if ((i51 | 0) == 127) {
     if (i58) {
      i51 = 128;
      break;
     }
    }
    i6 = i27 | 0;
    i24 = HEAP32[i1 + 48 >> 2] | 0;
    HEAP32[i6 >> 2] = i24;
    if ((i24 | 0) != 0) {
     i2 = i24 + 8 | 0;
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
    }
    i2 = i27 + 4 | 0;
    HEAP32[i2 >> 2] = HEAP32[i1 + 52 >> 2];
    i24 = HEAP32[i1 + 56 >> 2] | 0;
    i19 = i27 + 8 | 0;
    i18 = i19;
    i45 = HEAP32[i18 >> 2] & -8 | i24 & 7;
    HEAP32[i18 >> 2] = i45;
    HEAP8[i19] = i45 & 255 & -9 | i24 & 8;
    i24 = __ZNK7WebCore8Position13containerNodeEv(i27) | 0;
    i45 = i28 | 0;
    i23 = i8 + 36 | 0;
    i52 = HEAP32[i23 >> 2] | 0;
    HEAP32[i45 >> 2] = i52;
    if ((i52 | 0) != 0) {
     i21 = i52 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    i21 = i8 + 40 | 0;
    HEAP32[i28 + 4 >> 2] = HEAP32[i21 >> 2];
    i52 = i8 + 44 | 0;
    i5 = HEAP32[i52 >> 2] | 0;
    i53 = i28 + 8 | 0;
    i16 = i53;
    i17 = HEAP32[i16 >> 2] & -8 | i5 & 7;
    HEAP32[i16 >> 2] = i17;
    HEAP8[i53] = i17 & 255 & -9 | i5 & 8;
    i5 = (i24 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i28) | 0);
    i24 = HEAP32[i45 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i45 = i24 + 8 | 0;
      i17 = i45 | 0;
      i53 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      HEAP32[i17 >> 2] = i53;
      if ((i53 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
     }
    } while (0);
    do {
     if (i5) {
      i24 = i29 | 0;
      i45 = i8 + 24 | 0;
      i53 = HEAP32[i45 >> 2] | 0;
      HEAP32[i24 >> 2] = i53;
      if ((i53 | 0) != 0) {
       i17 = i53 + 8 | 0;
       HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
      }
      i17 = i8 + 28 | 0;
      HEAP32[i29 + 4 >> 2] = HEAP32[i17 >> 2];
      i53 = i8 + 32 | 0;
      i16 = HEAP32[i53 >> 2] | 0;
      i13 = i29 + 8 | 0;
      i20 = i13;
      i15 = HEAP32[i20 >> 2] & -8 | i16 & 7;
      HEAP32[i20 >> 2] = i15;
      HEAP8[i13] = i15 & 255 & -9 | i16 & 8;
      i16 = __ZNK7WebCore8Position13containerNodeEv(i29) | 0;
      i15 = i30 | 0;
      i13 = HEAP32[i23 >> 2] | 0;
      HEAP32[i15 >> 2] = i13;
      if ((i13 | 0) != 0) {
       i20 = i13 + 8 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
      }
      HEAP32[i30 + 4 >> 2] = HEAP32[i21 >> 2];
      i20 = HEAP32[i52 >> 2] | 0;
      i13 = i30 + 8 | 0;
      i41 = i13;
      i14 = HEAP32[i41 >> 2] & -8 | i20 & 7;
      HEAP32[i41 >> 2] = i14;
      HEAP8[i13] = i14 & 255 & -9 | i20 & 8;
      i20 = (i16 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i30) | 0);
      i16 = HEAP32[i15 >> 2] | 0;
      do {
       if ((i16 | 0) != 0) {
        i15 = i16 + 8 | 0;
        i14 = i15 | 0;
        i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
        HEAP32[i14 >> 2] = i13;
        if ((i13 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
       }
      } while (0);
      i16 = HEAP32[i24 >> 2] | 0;
      do {
       if ((i16 | 0) != 0) {
        i15 = i16 + 8 | 0;
        i13 = i15 | 0;
        i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
        HEAP32[i13 >> 2] = i14;
        if ((i14 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
       }
      } while (0);
      do {
       if (i20) {
        i16 = i31 | 0;
        i24 = HEAP32[i23 >> 2] | 0;
        HEAP32[i16 >> 2] = i24;
        if ((i24 | 0) != 0) {
         i15 = i24 + 8 | 0;
         HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
        }
        HEAP32[i31 + 4 >> 2] = HEAP32[i21 >> 2];
        i15 = HEAP32[i52 >> 2] | 0;
        i24 = i31 + 8 | 0;
        i14 = i24;
        i13 = HEAP32[i14 >> 2] & -8 | i15 & 7;
        HEAP32[i14 >> 2] = i13;
        HEAP8[i24] = i13 & 255 & -9 | i15 & 8;
        i15 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i31) | 0;
        i13 = i32 | 0;
        i24 = HEAP32[i45 >> 2] | 0;
        HEAP32[i13 >> 2] = i24;
        if ((i24 | 0) != 0) {
         i14 = i24 + 8 | 0;
         HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
        }
        HEAP32[i32 + 4 >> 2] = HEAP32[i17 >> 2];
        i14 = HEAP32[i53 >> 2] | 0;
        i24 = i32 + 8 | 0;
        i41 = i24;
        i12 = HEAP32[i41 >> 2] & -8 | i14 & 7;
        HEAP32[i41 >> 2] = i12;
        HEAP8[i24] = i12 & 255 & -9 | i14 & 8;
        i14 = i15 - (__ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i32) | 0) | 0;
        i15 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i15 | 0) != 0) {
          i13 = i15 + 8 | 0;
          i12 = i13 | 0;
          i24 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
          HEAP32[i12 >> 2] = i24;
          if ((i24 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
         }
        } while (0);
        i15 = HEAP32[i16 >> 2] | 0;
        if ((i15 | 0) == 0) {
         i59 = i14;
         break;
        }
        i13 = i15 + 8 | 0;
        i15 = i13 | 0;
        i24 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
        HEAP32[i15 >> 2] = i24;
        if ((i24 | 0) >= 1) {
         i59 = i14;
         break;
        }
        if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
         i59 = i14;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
        i59 = i14;
       } else {
        i13 = i33 | 0;
        i24 = HEAP32[i23 >> 2] | 0;
        HEAP32[i13 >> 2] = i24;
        if ((i24 | 0) != 0) {
         i15 = i24 + 8 | 0;
         HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
        }
        HEAP32[i33 + 4 >> 2] = HEAP32[i21 >> 2];
        i15 = HEAP32[i52 >> 2] | 0;
        i24 = i33 + 8 | 0;
        i12 = i24;
        i41 = HEAP32[i12 >> 2] & -8 | i15 & 7;
        HEAP32[i12 >> 2] = i41;
        HEAP8[i24] = i41 & 255 & -9 | i15 & 8;
        i15 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i33) | 0;
        i41 = HEAP32[i13 >> 2] | 0;
        if ((i41 | 0) == 0) {
         i59 = i15;
         break;
        }
        i13 = i41 + 8 | 0;
        i41 = i13 | 0;
        i24 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
        HEAP32[i41 >> 2] = i24;
        if ((i24 | 0) >= 1) {
         i59 = i15;
         break;
        }
        if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
         i59 = i15;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
        i59 = i15;
       }
      } while (0);
      i53 = __ZNK7WebCore8Position13containerNodeEv(i27) | 0;
      i17 = i35 | 0;
      HEAP32[i17 >> 2] = i53;
      if ((i53 | 0) != 0) {
       i45 = i53 + 8 | 0;
       HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
      }
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i34, i35, (__ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i27) | 0) + i59 | 0, 0);
      i45 = i34 | 0;
      i53 = HEAP32[i45 >> 2] | 0;
      HEAP32[i45 >> 2] = 0;
      i20 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = i53;
      do {
       if ((i20 | 0) != 0) {
        i53 = i20 + 8 | 0;
        i15 = i53 | 0;
        i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
        HEAP32[i15 >> 2] = i13;
        if ((i13 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
       }
      } while (0);
      HEAP32[i2 >> 2] = HEAP32[i34 + 4 >> 2];
      i20 = HEAP32[i34 + 8 >> 2] | 0;
      i53 = HEAP32[i18 >> 2] & -8 | i20 & 7;
      HEAP32[i18 >> 2] = i53;
      HEAP8[i19] = i53 & 255 & -9 | i20 & 8;
      i20 = HEAP32[i45 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i53 = i20 + 8 | 0;
        i13 = i53 | 0;
        i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
        HEAP32[i13 >> 2] = i15;
        if ((i15 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
       }
      } while (0);
      i20 = HEAP32[i17 >> 2] | 0;
      if ((i20 | 0) == 0) {
       break;
      }
      i45 = i20 + 8 | 0;
      i20 = i45 | 0;
      i53 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i53;
      if ((i53 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
     } else {
      i45 = HEAP32[i8 + 12 >> 2] | 0;
      if ((i45 | 0) != 0) {
       i53 = i45 + 8 | 0;
       HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
      }
      i53 = HEAP32[i8 + 16 >> 2] | 0;
      i20 = HEAP32[i8 + 20 >> 2] | 0;
      i15 = i20 & 8;
      i13 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = i45;
      do {
       if ((i13 | 0) != 0) {
        i45 = i13 + 8 | 0;
        i24 = i45 | 0;
        i41 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        HEAP32[i24 >> 2] = i41;
        if ((i41 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
       }
      } while (0);
      HEAP32[i2 >> 2] = i53;
      i13 = HEAP32[i18 >> 2] & -8 | i20 & 7;
      HEAP32[i18 >> 2] = i13;
      HEAP8[i19] = i13 & 255 & -9 | i15;
     }
    } while (0);
    i19 = i36 | 0;
    i18 = HEAP32[i22 >> 2] | 0;
    HEAP32[i19 >> 2] = i18;
    if ((i18 | 0) != 0) {
     i2 = i18 + 8 | 0;
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
    }
    HEAP32[i36 + 4 >> 2] = HEAP32[i44 >> 2];
    i2 = HEAP32[i43 >> 2] | 0;
    i18 = i36 + 8 | 0;
    i52 = i18;
    i21 = HEAP32[i52 >> 2] & -8 | i2 & 7;
    HEAP32[i52 >> 2] = i21;
    HEAP8[i18] = i21 & 255 & -9 | i2 & 8;
    __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i9, i36, i27);
    i2 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i2 | 0) != 0) {
      i19 = i2 + 8 | 0;
      i21 = i19 | 0;
      i18 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      HEAP32[i21 >> 2] = i18;
      if ((i18 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
     }
    } while (0);
    i2 = HEAP32[i6 >> 2] | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    i43 = i2 + 8 | 0;
    i2 = i43 | 0;
    i44 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    HEAP32[i2 >> 2] = i44;
    if ((i44 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
   } else {
    i51 = 128;
   }
  } while (0);
  if ((i51 | 0) == 128) {
   __ZN7WebCore16VisibleSelectionaSERKS0_(i9, i8) | 0;
  }
  i51 = HEAP32[i42 >> 2] | 0;
  do {
   if ((i51 | 0) != 0) {
    i42 = i51 + 8 | 0;
    i27 = i42 | 0;
    i36 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
    HEAP32[i27 >> 2] = i36;
    if ((i36 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
   }
  } while (0);
  i51 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i51 | 0) != 0) {
    i11 = i51 + 8 | 0;
    i42 = i11 | 0;
    i36 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
    HEAP32[i42 >> 2] = i36;
    if ((i36 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   }
  } while (0);
  __ZN7WebCore14FrameSelectionD2Ev(i10);
 }
 if ((HEAP32[i8 + 52 >> 2] | 0) >>> 0 < 2 >>> 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i9);
  __ZN7WebCore16VisibleSelectionD2Ev(i8);
  STACKTOP = i4;
  return;
 }
 if (!(__ZNK7WebCore14FrameSelection21shouldDeleteSelectionERKNS_16VisibleSelectionE(HEAP32[i39 + 468 >> 2] | 0, i8) | 0)) {
  __ZN7WebCore16VisibleSelectionD2Ev(i9);
  __ZN7WebCore16VisibleSelectionD2Ev(i8);
  STACKTOP = i4;
  return;
 }
 do {
  if (i3) {
   i39 = HEAP32[i40 >> 2] | 0;
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i37, i8);
   i10 = i37 | 0;
   __ZN7WebCore6Editor13addToKillRingEPNS_5RangeEb(i39, HEAP32[i10 >> 2] | 0, 0);
   i39 = HEAP32[i10 >> 2] | 0;
   if ((i39 | 0) == 0) {
    break;
   }
   i10 = i39 | 0;
   i51 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i51 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i39);
    __ZN3WTF8fastFreeEPv(i39);
    break;
   } else {
    HEAP32[i10 >> 2] = i51;
    break;
   }
  }
 } while (0);
 __ZN7WebCore11EditCommand20setStartingSelectionERKNS_16VisibleSelectionE(i38, i9);
 i37 = i1 | 0;
 i40 = i1 + 162 | 0;
 __ZN7WebCore20CompositeEditCommand15deleteSelectionERKNS_16VisibleSelectionEbbbbb(i37, i8, (HEAP8[i40] & 1) != 0, 1, 0, 1, 1);
 HEAP8[i40] = 0;
 i40 = __ZN7WebCore11EditCommand5frameEv(i38) | 0;
 HEAP8[i1 + 173 | 0] = 1;
 __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 2);
 i38 = HEAP32[i40 + 464 >> 2] | 0;
 i40 = i7 | 0;
 HEAP32[i40 >> 2] = i37;
 if ((i1 | 0) != 0) {
  i37 = i1 + 4 | 0;
  HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i38, i7);
 i7 = HEAP32[i40 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i9);
  __ZN7WebCore16VisibleSelectionD2Ev(i8);
  STACKTOP = i4;
  return;
 }
 i40 = i7 + 4 | 0;
 i7 = i40 | 0;
 i38 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i38 | 0) != 0) {
  HEAP32[i7 >> 2] = i38;
  __ZN7WebCore16VisibleSelectionD2Ev(i9);
  __ZN7WebCore16VisibleSelectionD2Ev(i8);
  STACKTOP = i4;
  return;
 }
 i38 = i40 - 4 | 0;
 if ((i38 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i9);
  __ZN7WebCore16VisibleSelectionD2Ev(i8);
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 7](i38);
 __ZN7WebCore16VisibleSelectionD2Ev(i9);
 __ZN7WebCore16VisibleSelectionD2Ev(i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13TypingCommand16deleteKeyPressedENS_15TextGranularityEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 800 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 176 | 0;
 i14 = i4 + 376 | 0;
 i15 = i4 + 392 | 0;
 i16 = i4 + 408 | 0;
 i17 = i4 + 424 | 0;
 i18 = i4 + 440 | 0;
 i19 = i4 + 456 | 0;
 i20 = i4 + 472 | 0;
 i21 = i4 + 488 | 0;
 i22 = i4 + 504 | 0;
 i23 = i4 + 520 | 0;
 i24 = i4 + 584 | 0;
 i25 = i4 + 600 | 0;
 i26 = i4 + 616 | 0;
 i27 = i4 + 632 | 0;
 i28 = i4 + 648 | 0;
 i29 = i4 + 664 | 0;
 i30 = i4 + 680 | 0;
 i31 = i4 + 696 | 0;
 i32 = i4 + 712 | 0;
 i33 = i4 + 728 | 0;
 i34 = i4 + 744 | 0;
 i35 = i4 + 760 | 0;
 i36 = i4 + 776 | 0;
 i37 = i4 + 792 | 0;
 i38 = i1 | 0;
 i39 = __ZN7WebCore11EditCommand5frameEv(i38) | 0;
 i40 = i39 + 464 | 0;
 __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(HEAP32[i40 >> 2] | 0, 0);
 __ZN7WebCore16VisibleSelectionC1Ev(i11);
 __ZN7WebCore16VisibleSelectionC1Ev(i12);
 i41 = i1 + 72 | 0;
 i42 = i1 + 124 | 0;
 i43 = HEAP32[i42 >> 2] | 0;
 do {
  if ((i43 | 0) == 2) {
   __ZN7WebCore16VisibleSelectionaSERKS0_(i11, i41) | 0;
   __ZN7WebCore16VisibleSelectionaSERKS0_(i12, i11) | 0;
  } else if ((i43 | 0) == 1) {
   i44 = i1 | 0;
   do {
    if (__ZN7WebCore20CompositeEditCommand39breakOutOfEmptyMailBlockquotedParagraphEv(i44) | 0) {
     i45 = __ZN7WebCore11EditCommand5frameEv(i38) | 0;
     HEAP8[i1 + 173 | 0] = 1;
     __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 1);
     i46 = HEAP32[i45 + 464 >> 2] | 0;
     i45 = i9 | 0;
     HEAP32[i45 >> 2] = i44;
     if ((i1 | 0) != 0) {
      i47 = i1 + 4 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i46, i9);
     i46 = HEAP32[i45 >> 2] | 0;
     if ((i46 | 0) == 0) {
      break;
     }
     i45 = i46 + 4 | 0;
     i46 = i45 | 0;
     i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     if ((i47 | 0) != 0) {
      HEAP32[i46 >> 2] = i47;
      break;
     }
     i47 = i45 - 4 | 0;
     if ((i47 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 4 >> 2] & 7](i47);
    }
   } while (0);
   HEAP8[i1 + 162 | 0] = 0;
   __ZN7WebCore14FrameSelectionC1EPNS_5FrameE(i13, 0);
   __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i13, i41, 6, 0, 0);
   __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(i13, 1, 1, i2, 0) | 0;
   do {
    if (i3) {
     if ((HEAP32[i13 + 84 >> 2] | 0) != 1 | (i2 | 0) == 0) {
      break;
     }
     __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(i13, 1, 1, 0, 0) | 0;
    }
   } while (0);
   i47 = i1 + 96 | 0;
   if ((HEAP32[i42 >> 2] | 0) == 2) {
    i48 = 1;
   } else {
    i48 = HEAP32[i1 + 120 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i47, i48);
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i14, i15, 1);
   i45 = HEAP32[i14 >> 2] | 0;
   i46 = (i45 | 0) == 0;
   do {
    if (!i46) {
     i49 = i45 + 8 | 0;
     i50 = i49 | 0;
     i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     HEAP32[i50 >> 2] = i51;
     if ((i51 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    }
   } while (0);
   i45 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i45 | 0) != 0) {
     i49 = i45 + 8 | 0;
     i51 = i49 | 0;
     i50 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i50;
     if ((i50 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    }
   } while (0);
   L32 : do {
    if (i46) {
     do {
      if (__ZN7WebCore20CompositeEditCommand23breakOutOfEmptyListItemEv(i44) | 0) {
       i45 = __ZN7WebCore11EditCommand5frameEv(i38) | 0;
       HEAP8[i1 + 173 | 0] = 1;
       __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 1);
       i49 = HEAP32[i45 + 464 >> 2] | 0;
       i45 = i8 | 0;
       HEAP32[i45 >> 2] = i44;
       if ((i1 | 0) != 0) {
        i50 = i1 + 4 | 0;
        HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
       }
       __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i49, i8);
       i49 = HEAP32[i45 >> 2] | 0;
       if ((i49 | 0) == 0) {
        break;
       }
       i45 = i49 + 4 | 0;
       i49 = i45 | 0;
       i50 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       if ((i50 | 0) != 0) {
        HEAP32[i49 >> 2] = i50;
        break;
       }
       i50 = i45 - 4 | 0;
       if ((i50 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i50 >> 2] | 0) + 4 >> 2] & 7](i50);
      } else {
       if ((HEAP32[i42 >> 2] | 0) == 2) {
        i52 = 1;
       } else {
        i52 = HEAP32[i1 + 120 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i47, i52);
       __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i16, i17, 1);
       i50 = i16 | 0;
       i45 = HEAP32[i50 >> 2] | 0;
       if ((i45 | 0) != 0) {
        i49 = i45 + 8 | 0;
        i45 = i49 - 8 | 0;
        i51 = i49 | 0;
        i53 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
        HEAP32[i51 >> 2] = i53;
        do {
         if ((i53 | 0) < 1) {
          if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i45);
         }
        } while (0);
        i45 = HEAP32[i17 >> 2] | 0;
        if ((i45 | 0) == 0) {
         break L32;
        }
        i49 = i45 + 8 | 0;
        i45 = i49 | 0;
        i53 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
        HEAP32[i45 >> 2] = i53;
        if ((i53 | 0) >= 1) {
         break L32;
        }
        if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
         break L32;
        }
        __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
        break L32;
       }
       i49 = __ZN7WebCore13TypingCommand21makeEditableRootEmptyEv(i1) | 0;
       i53 = HEAP32[i50 >> 2] | 0;
       do {
        if ((i53 | 0) != 0) {
         i45 = i53 + 8 | 0;
         i51 = i45 | 0;
         i54 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
         HEAP32[i51 >> 2] = i54;
         if ((i54 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
        }
       } while (0);
       i53 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i53 | 0) != 0) {
         i50 = i53 + 8 | 0;
         i45 = i50 | 0;
         i54 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
         HEAP32[i45 >> 2] = i54;
         if ((i54 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
        }
       } while (0);
       if (!i49) {
        break L32;
       }
       i53 = __ZN7WebCore11EditCommand5frameEv(i38) | 0;
       HEAP8[i1 + 173 | 0] = 1;
       __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 1);
       i50 = HEAP32[i53 + 464 >> 2] | 0;
       i53 = i7 | 0;
       HEAP32[i53 >> 2] = i44;
       if ((i1 | 0) != 0) {
        i54 = i1 + 4 | 0;
        HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
       }
       __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i50, i7);
       i50 = HEAP32[i53 >> 2] | 0;
       if ((i50 | 0) == 0) {
        break;
       }
       i53 = i50 + 4 | 0;
       i50 = i53 | 0;
       i54 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
       if ((i54 | 0) != 0) {
        HEAP32[i50 >> 2] = i54;
        break;
       }
       i54 = i53 - 4 | 0;
       if ((i54 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 4 >> 2] & 7](i54);
      }
     } while (0);
     __ZN7WebCore14FrameSelectionD2Ev(i13);
     __ZN7WebCore16VisibleSelectionD2Ev(i12);
     __ZN7WebCore16VisibleSelectionD2Ev(i11);
     STACKTOP = i4;
     return;
    }
   } while (0);
   if ((HEAP32[i42 >> 2] | 0) == 2) {
    i55 = 1;
   } else {
    i55 = HEAP32[i1 + 120 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i18, i47, i55);
   i46 = i19 | 0;
   i54 = i18 | 0;
   i53 = HEAP32[i54 >> 2] | 0;
   HEAP32[i46 >> 2] = i53;
   if ((i53 | 0) != 0) {
    i50 = i53 + 8 | 0;
    HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
   }
   HEAP32[i19 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   i50 = HEAP32[i18 + 8 >> 2] | 0;
   i53 = i19 + 8 | 0;
   i45 = i53;
   i51 = HEAP32[i45 >> 2] & -8 | i50 & 7;
   HEAP32[i45 >> 2] = i51;
   HEAP8[i53] = i51 & 255 & -9 | i50 & 8;
   i50 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i19, F_BASE_ii + 6 | 0, 1) | 0;
   i51 = HEAP32[i46 >> 2] | 0;
   do {
    if ((i51 | 0) != 0) {
     i46 = i51 + 8 | 0;
     i53 = i46 | 0;
     i45 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
     HEAP32[i53 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   L91 : do {
    if ((i50 | 0) == 0) {
     i56 = 77;
    } else {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i21, i50);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i21, 1);
     i51 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i18, i20) | 0;
     i47 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i46 = i47 + 8 | 0;
       i45 = i46 | 0;
       i53 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i46 = i47 + 8 | 0;
       i53 = i46 | 0;
       i45 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
       if (i51) {
        i57 = 1;
        break L91;
       } else {
        i56 = 77;
        break L91;
       }
      }
     } while (0);
     if (i51) {
      i57 = 1;
     } else {
      i56 = 77;
     }
    }
   } while (0);
   L103 : do {
    if ((i56 | 0) == 77) {
     L105 : do {
      if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i18, 1) | 0) {
       __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i22, i18, 1);
       i50 = (__ZN7WebCore25isFirstPositionAfterTableERKNS_15VisiblePositionE(i22) | 0) != 0;
       i47 = HEAP32[i22 >> 2] | 0;
       do {
        if ((i47 | 0) == 0) {
         i56 = 82;
        } else {
         i46 = i47 + 8 | 0;
         i45 = i46 | 0;
         i53 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
         HEAP32[i45 >> 2] = i53;
         if ((i53 | 0) >= 1) {
          i56 = 82;
          break;
         }
         if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
          i56 = 82;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
         if (!i50) {
          i56 = 85;
          break L105;
         }
        }
       } while (0);
       if ((i56 | 0) == 82) {
        if (!i50) {
         i56 = 85;
         break;
        }
       }
       if ((__ZN7WebCore25isLastPositionBeforeTableERKNS_15VisiblePositionE(i18) | 0) != 0) {
        i57 = 1;
        break L103;
       }
       __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(i13, 1, 1, i2, 0) | 0;
      } else {
       i56 = 85;
      }
     } while (0);
     do {
      if ((i56 | 0) == 85) {
       i51 = __ZN7WebCore25isFirstPositionAfterTableERKNS_15VisiblePositionE(i18) | 0;
       if ((i51 | 0) == 0) {
        break;
       }
       i47 = i6 | 0;
       HEAP32[i47 >> 2] = i51;
       i49 = i51 + 8 | 0;
       HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i24, i6, 1);
       i49 = HEAP32[i47 >> 2] | 0;
       do {
        if ((i49 | 0) != 0) {
         i47 = i49 + 8 | 0;
         i51 = i47 | 0;
         i46 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
         HEAP32[i51 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
        }
       } while (0);
       i49 = i25 | 0;
       i50 = HEAP32[i1 + 96 >> 2] | 0;
       HEAP32[i49 >> 2] = i50;
       if ((i50 | 0) != 0) {
        i47 = i50 + 8 | 0;
        HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
       }
       HEAP32[i25 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
       i47 = HEAP32[i1 + 104 >> 2] | 0;
       i50 = i25 + 8 | 0;
       i46 = i50;
       i51 = HEAP32[i46 >> 2] & -8 | i47 & 7;
       HEAP32[i46 >> 2] = i51;
       HEAP8[i50] = i51 & 255 & -9 | i47 & 8;
       __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i23, i24, i25, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
       __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i38, i23);
       __ZN7WebCore16VisibleSelectionD2Ev(i23);
       i47 = HEAP32[i49 >> 2] | 0;
       do {
        if ((i47 | 0) != 0) {
         i49 = i47 + 8 | 0;
         i51 = i49 | 0;
         i50 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
         HEAP32[i51 >> 2] = i50;
         if ((i50 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
        }
       } while (0);
       i47 = HEAP32[i24 >> 2] | 0;
       do {
        if ((i47 | 0) != 0) {
         i49 = i47 + 8 | 0;
         i50 = i49 | 0;
         i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         HEAP32[i50 >> 2] = i51;
         if ((i51 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
        }
       } while (0);
       i47 = __ZN7WebCore11EditCommand5frameEv(i38) | 0;
       HEAP8[i1 + 173 | 0] = 1;
       __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 1);
       i49 = HEAP32[i47 + 464 >> 2] | 0;
       i47 = i5 | 0;
       HEAP32[i47 >> 2] = i44;
       if ((i1 | 0) != 0) {
        i51 = i1 + 4 | 0;
        HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
       }
       __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i49, i5);
       i49 = HEAP32[i47 >> 2] | 0;
       if ((i49 | 0) == 0) {
        i57 = 1;
        break L103;
       }
       i47 = i49 + 4 | 0;
       i49 = i47 | 0;
       i51 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       if ((i51 | 0) != 0) {
        HEAP32[i49 >> 2] = i51;
        i57 = 1;
        break L103;
       }
       i51 = i47 - 4 | 0;
       if ((i51 | 0) == 0) {
        i57 = 1;
        break L103;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 7](i51);
       i57 = 1;
       break L103;
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionaSERKS0_(i11, i13 + 32 | 0) | 0;
     L145 : do {
      if ((i2 | 0) == 0) {
       i51 = i26 | 0;
       i47 = i11 + 36 | 0;
       i49 = HEAP32[i47 >> 2] | 0;
       HEAP32[i51 >> 2] = i49;
       if ((i49 | 0) != 0) {
        i50 = i49 + 8 | 0;
        HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
       }
       i50 = i11 + 40 | 0;
       HEAP32[i26 + 4 >> 2] = HEAP32[i50 >> 2];
       i49 = i11 + 44 | 0;
       i46 = HEAP32[i49 >> 2] | 0;
       i53 = i26 + 8 | 0;
       i45 = i53;
       i58 = HEAP32[i45 >> 2] & -8 | i46 & 7;
       HEAP32[i45 >> 2] = i58;
       HEAP8[i53] = i58 & 255 & -9 | i46 & 8;
       i46 = __ZNK7WebCore8Position13containerNodeEv(i26) | 0;
       i58 = i27 | 0;
       i53 = i11 + 24 | 0;
       i45 = HEAP32[i53 >> 2] | 0;
       HEAP32[i58 >> 2] = i45;
       if ((i45 | 0) != 0) {
        i59 = i45 + 8 | 0;
        HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
       }
       i59 = i11 + 28 | 0;
       HEAP32[i27 + 4 >> 2] = HEAP32[i59 >> 2];
       i45 = i11 + 32 | 0;
       i60 = HEAP32[i45 >> 2] | 0;
       i61 = i27 + 8 | 0;
       i62 = i61;
       i63 = HEAP32[i62 >> 2] & -8 | i60 & 7;
       HEAP32[i62 >> 2] = i63;
       HEAP8[i61] = i63 & 255 & -9 | i60 & 8;
       do {
        if ((i46 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i27) | 0)) {
         i60 = i28 | 0;
         i63 = HEAP32[i47 >> 2] | 0;
         HEAP32[i60 >> 2] = i63;
         if ((i63 | 0) != 0) {
          i61 = i63 + 8 | 0;
          HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
         }
         HEAP32[i28 + 4 >> 2] = HEAP32[i50 >> 2];
         i61 = HEAP32[i49 >> 2] | 0;
         i63 = i28 + 8 | 0;
         i62 = i63;
         i64 = HEAP32[i62 >> 2] & -8 | i61 & 7;
         HEAP32[i62 >> 2] = i64;
         HEAP8[i63] = i64 & 255 & -9 | i61 & 8;
         i61 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i28) | 0;
         i64 = i29 | 0;
         i63 = HEAP32[i53 >> 2] | 0;
         HEAP32[i64 >> 2] = i63;
         if ((i63 | 0) != 0) {
          i62 = i63 + 8 | 0;
          HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
         }
         HEAP32[i29 + 4 >> 2] = HEAP32[i59 >> 2];
         i62 = HEAP32[i45 >> 2] | 0;
         i63 = i29 + 8 | 0;
         i65 = i63;
         i66 = HEAP32[i65 >> 2] & -8 | i62 & 7;
         HEAP32[i65 >> 2] = i66;
         HEAP8[i63] = i66 & 255 & -9 | i62 & 8;
         i62 = (i61 - (__ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i29) | 0) | 0) > 1;
         i61 = HEAP32[i64 >> 2] | 0;
         do {
          if ((i61 | 0) != 0) {
           i64 = i61 + 8 | 0;
           i66 = i64 | 0;
           i63 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
           HEAP32[i66 >> 2] = i63;
           if ((i63 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
          }
         } while (0);
         i61 = HEAP32[i60 >> 2] | 0;
         if ((i61 | 0) == 0) {
          i67 = i62;
          break;
         }
         i64 = i61 + 8 | 0;
         i61 = i64 | 0;
         i63 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
         HEAP32[i61 >> 2] = i63;
         if ((i63 | 0) >= 1) {
          i67 = i62;
          break;
         }
         if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
          i67 = i62;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
         i67 = i62;
        } else {
         i67 = 0;
        }
       } while (0);
       i45 = HEAP32[i58 >> 2] | 0;
       do {
        if ((i45 | 0) != 0) {
         i59 = i45 + 8 | 0;
         i53 = i59 | 0;
         i46 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
         HEAP32[i53 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
        }
       } while (0);
       i45 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i45 | 0) == 0) {
         i56 = 133;
        } else {
         i58 = i45 + 8 | 0;
         i59 = i58 | 0;
         i46 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
         HEAP32[i59 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          i56 = 133;
          break;
         }
         if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
          i56 = 133;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
         if (!i67) {
          break L145;
         }
        }
       } while (0);
       if ((i56 | 0) == 133) {
        if (!i67) {
         break;
        }
       }
       i45 = i30 | 0;
       i51 = HEAP32[i47 >> 2] | 0;
       HEAP32[i45 >> 2] = i51;
       if ((i51 | 0) == 0) {
        i68 = 0;
       } else {
        i58 = i51 + 8 | 0;
        HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
        i68 = HEAP32[i47 >> 2] | 0;
       }
       i58 = HEAP32[i50 >> 2] | 0;
       HEAP32[i30 + 4 >> 2] = i58;
       i51 = HEAP32[i49 >> 2] | 0;
       i46 = i30 + 8 | 0;
       i59 = i46;
       i53 = HEAP32[i59 >> 2] & -8 | i51 & 7;
       HEAP32[i59 >> 2] = i53;
       HEAP8[i46] = i53 & 255 & -9 | i51 & 8;
       i53 = i32 | 0;
       HEAP32[i53 >> 2] = i68;
       if ((i68 | 0) == 0) {
        i69 = i58;
        i70 = i51;
       } else {
        i51 = i68 + 8 | 0;
        HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
        i69 = HEAP32[i50 >> 2] | 0;
        i70 = HEAP32[i49 >> 2] | 0;
       }
       HEAP32[i32 + 4 >> 2] = i69;
       i51 = i32 + 8 | 0;
       i58 = i51;
       i46 = HEAP32[i58 >> 2] & -8 | i70 & 7;
       HEAP32[i58 >> 2] = i46;
       HEAP8[i51] = i46 & 255 & -9 | i70 & 8;
       __ZNK7WebCore8Position8previousENS_16PositionMoveTypeE(i31, i32, 2);
       __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i11, i30, i31);
       i46 = HEAP32[i31 >> 2] | 0;
       do {
        if ((i46 | 0) != 0) {
         i51 = i46 + 8 | 0;
         i58 = i51 | 0;
         i59 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
         HEAP32[i58 >> 2] = i59;
         if ((i59 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
        }
       } while (0);
       i46 = HEAP32[i53 >> 2] | 0;
       do {
        if ((i46 | 0) != 0) {
         i49 = i46 + 8 | 0;
         i50 = i49 | 0;
         i47 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         HEAP32[i50 >> 2] = i47;
         if ((i47 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
        }
       } while (0);
       i46 = HEAP32[i45 >> 2] | 0;
       if ((i46 | 0) == 0) {
        break;
       }
       i53 = i46 + 8 | 0;
       i46 = i53 | 0;
       i49 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
      }
     } while (0);
     L202 : do {
      if ((HEAP32[i1 + 64 >> 2] | 0) == 2) {
       i53 = i33 | 0;
       i49 = HEAP32[i11 >> 2] | 0;
       HEAP32[i53 >> 2] = i49;
       if ((i49 | 0) != 0) {
        i46 = i49 + 8 | 0;
        HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
       }
       i46 = i33 + 4 | 0;
       HEAP32[i46 >> 2] = HEAP32[i11 + 4 >> 2];
       i49 = HEAP32[i11 + 8 >> 2] | 0;
       i47 = i33 + 8 | 0;
       i50 = i47;
       i51 = HEAP32[i50 >> 2] & -8 | i49 & 7;
       HEAP32[i50 >> 2] = i51;
       HEAP8[i47] = i51 & 255 & -9 | i49 & 8;
       i49 = i34 | 0;
       i51 = HEAP32[i1 + 36 >> 2] | 0;
       HEAP32[i49 >> 2] = i51;
       if ((i51 | 0) == 0) {
        i71 = 0;
       } else {
        i59 = i51 + 8 | 0;
        HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
        i71 = HEAP32[i49 >> 2] | 0;
       }
       i59 = i34 + 4 | 0;
       HEAP32[i59 >> 2] = HEAP32[i1 + 40 >> 2];
       i51 = HEAP32[i1 + 44 >> 2] | 0;
       i58 = i34 + 8 | 0;
       i64 = i58;
       i63 = HEAP32[i64 >> 2] & -8 | i51 & 7;
       HEAP32[i64 >> 2] = i63;
       i61 = i63 & 255 & -9 | i51 & 8;
       HEAP8[i58] = i61;
       do {
        if ((HEAP32[i53 >> 2] | 0) == (i71 | 0)) {
         do {
          if ((HEAP8[i47] & 8) == 0) {
           i51 = HEAP32[i50 >> 2] & 7;
           if (!((i51 | 0) == 2 | (i51 | 0) == 4)) {
            i56 = 158;
            break;
           }
           i51 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i33) | 0;
           i72 = i51;
           i73 = HEAP8[i58] | 0;
          } else {
           i56 = 158;
          }
         } while (0);
         if ((i56 | 0) == 158) {
          i72 = HEAP32[i46 >> 2] | 0;
          i73 = i61;
         }
         do {
          if ((i73 & 8) == 0) {
           i62 = HEAP32[i64 >> 2] & 7;
           if (!((i62 | 0) == 2 | (i62 | 0) == 4)) {
            i56 = 162;
            break;
           }
           i74 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i34) | 0;
          } else {
           i56 = 162;
          }
         } while (0);
         if ((i56 | 0) == 162) {
          i74 = HEAP32[i59 >> 2] | 0;
         }
         if ((i72 | 0) != (i74 | 0)) {
          i75 = 1;
          break;
         }
         i75 = ((HEAP32[i64 >> 2] ^ HEAP32[i50 >> 2]) & 7 | 0) != 0;
        } else {
         i75 = 1;
        }
       } while (0);
       i50 = HEAP32[i49 >> 2] | 0;
       do {
        if ((i50 | 0) != 0) {
         i64 = i50 + 8 | 0;
         i59 = i64 | 0;
         i61 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
         HEAP32[i59 >> 2] = i61;
         if ((i61 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
        }
       } while (0);
       i50 = HEAP32[i53 >> 2] | 0;
       do {
        if ((i50 | 0) == 0) {
         i56 = 174;
        } else {
         i49 = i50 + 8 | 0;
         i64 = i49 | 0;
         i61 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
         HEAP32[i64 >> 2] = i61;
         if ((i61 | 0) >= 1) {
          i56 = 174;
          break;
         }
         if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
          i56 = 174;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
         if (i75) {
          break L202;
         }
        }
       } while (0);
       if ((i56 | 0) == 174) {
        if (i75) {
         break;
        }
       }
       i50 = i35 | 0;
       i53 = HEAP32[i1 + 48 >> 2] | 0;
       HEAP32[i50 >> 2] = i53;
       if ((i53 | 0) != 0) {
        i49 = i53 + 8 | 0;
        HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
       }
       HEAP32[i35 + 4 >> 2] = HEAP32[i1 + 52 >> 2];
       i49 = HEAP32[i1 + 56 >> 2] | 0;
       i53 = i35 + 8 | 0;
       i61 = i53;
       i64 = HEAP32[i61 >> 2] & -8 | i49 & 7;
       HEAP32[i61 >> 2] = i64;
       HEAP8[i53] = i64 & 255 & -9 | i49 & 8;
       i49 = i36 | 0;
       i64 = HEAP32[i11 + 12 >> 2] | 0;
       HEAP32[i49 >> 2] = i64;
       if ((i64 | 0) != 0) {
        i53 = i64 + 8 | 0;
        HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
       }
       HEAP32[i36 + 4 >> 2] = HEAP32[i11 + 16 >> 2];
       i53 = HEAP32[i11 + 20 >> 2] | 0;
       i64 = i36 + 8 | 0;
       i61 = i64;
       i59 = HEAP32[i61 >> 2] & -8 | i53 & 7;
       HEAP32[i61 >> 2] = i59;
       HEAP8[i64] = i59 & 255 & -9 | i53 & 8;
       __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i12, i35, i36);
       i53 = HEAP32[i49 >> 2] | 0;
       do {
        if ((i53 | 0) != 0) {
         i49 = i53 + 8 | 0;
         i59 = i49 | 0;
         i64 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
         HEAP32[i59 >> 2] = i64;
         if ((i64 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
        }
       } while (0);
       i53 = HEAP32[i50 >> 2] | 0;
       if ((i53 | 0) == 0) {
        i57 = 2;
        break L103;
       }
       i49 = i53 + 8 | 0;
       i53 = i49 | 0;
       i64 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i64;
       if ((i64 | 0) >= 1) {
        i57 = 2;
        break L103;
       }
       if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
        i57 = 2;
        break L103;
       }
       __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
       i57 = 2;
       break L103;
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionaSERKS0_(i12, i11) | 0;
     i57 = 2;
    }
   } while (0);
   i44 = HEAP32[i54 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i49 = i44 + 8 | 0;
     i64 = i49 | 0;
     i53 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
     HEAP32[i64 >> 2] = i53;
     if ((i53 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore14FrameSelectionD2Ev(i13);
   if ((i57 | 0) == 2) {
    break;
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i12);
   __ZN7WebCore16VisibleSelectionD2Ev(i11);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP32[i11 + 52 >> 2] | 0) >>> 0 < 2 >>> 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i12);
  __ZN7WebCore16VisibleSelectionD2Ev(i11);
  STACKTOP = i4;
  return;
 }
 if (!(__ZNK7WebCore14FrameSelection21shouldDeleteSelectionERKNS_16VisibleSelectionE(HEAP32[i39 + 468 >> 2] | 0, i11) | 0)) {
  __ZN7WebCore16VisibleSelectionD2Ev(i12);
  __ZN7WebCore16VisibleSelectionD2Ev(i11);
  STACKTOP = i4;
  return;
 }
 do {
  if (i3) {
   i39 = HEAP32[i40 >> 2] | 0;
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i37, i11);
   i57 = i37 | 0;
   __ZN7WebCore6Editor13addToKillRingEPNS_5RangeEb(i39, HEAP32[i57 >> 2] | 0, 0);
   i39 = HEAP32[i57 >> 2] | 0;
   if ((i39 | 0) == 0) {
    break;
   }
   i57 = i39 | 0;
   i13 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i39);
    __ZN3WTF8fastFreeEPv(i39);
    break;
   } else {
    HEAP32[i57 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i1 + 174 | 0] & 1) != 0) {
  __ZN7WebCore11EditCommand20setStartingSelectionERKNS_16VisibleSelectionE(i38, i12);
 }
 i37 = i1 | 0;
 i40 = i1 + 162 | 0;
 __ZN7WebCore20CompositeEditCommand15deleteSelectionERKNS_16VisibleSelectionEbbbbb(i37, i11, (HEAP8[i40] & 1) != 0, 1, 0, 1, 1);
 HEAP8[i40] = 0;
 i40 = __ZN7WebCore11EditCommand5frameEv(i38) | 0;
 HEAP8[i1 + 173 | 0] = 1;
 __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 1);
 i38 = HEAP32[i40 + 464 >> 2] | 0;
 i40 = i10 | 0;
 HEAP32[i40 >> 2] = i37;
 if ((i1 | 0) != 0) {
  i37 = i1 + 4 | 0;
  HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i38, i10);
 i10 = HEAP32[i40 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i12);
  __ZN7WebCore16VisibleSelectionD2Ev(i11);
  STACKTOP = i4;
  return;
 }
 i40 = i10 + 4 | 0;
 i10 = i40 | 0;
 i38 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i38 | 0) != 0) {
  HEAP32[i10 >> 2] = i38;
  __ZN7WebCore16VisibleSelectionD2Ev(i12);
  __ZN7WebCore16VisibleSelectionD2Ev(i11);
  STACKTOP = i4;
  return;
 }
 i38 = i40 - 4 | 0;
 if ((i38 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i12);
  __ZN7WebCore16VisibleSelectionD2Ev(i11);
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 7](i38);
 __ZN7WebCore16VisibleSelectionD2Ev(i12);
 __ZN7WebCore16VisibleSelectionD2Ev(i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i4 | 0;
 i9 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i4 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i4 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i1 + 28 >> 2];
 i10 = HEAP32[i1 + 32 >> 2] | 0;
 i14 = i11 | i10 & 7;
 HEAP32[i13 >> 2] = i14;
 HEAP8[i12] = i14 & 255 & -9 | i10 & 8;
 i10 = i5 | 0;
 i14 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i10 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i11 = i14 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i15 = HEAP32[i10 >> 2] | 0;
 }
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = HEAP32[i2 + 28 >> 2];
 i14 = HEAP32[i2 + 32 >> 2] | 0;
 i16 = i5 + 8 | 0;
 i17 = i16;
 i18 = HEAP32[i17 >> 2] & -8 | i14 & 7;
 HEAP32[i17 >> 2] = i18;
 i19 = i18 & 255 & -9 | i14 & 8;
 HEAP8[i16] = i19;
 if ((HEAP32[i8 >> 2] | 0) == (i15 | 0)) {
  do {
   if ((HEAP8[i12] & 8) == 0) {
    i14 = HEAP32[i13 >> 2] & 7;
    if (!((i14 | 0) == 2 | (i14 | 0) == 4)) {
     i20 = 9;
     break;
    }
    i14 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i21 = i14;
    i22 = HEAP8[i16] | 0;
   } else {
    i20 = 9;
   }
  } while (0);
  if ((i20 | 0) == 9) {
   i21 = HEAP32[i9 >> 2] | 0;
   i22 = i19;
  }
  do {
   if ((i22 & 8) == 0) {
    i19 = HEAP32[i17 >> 2] & 7;
    if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
     i20 = 13;
     break;
    }
    i23 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i20 = 13;
   }
  } while (0);
  if ((i20 | 0) == 13) {
   i23 = HEAP32[i11 >> 2] | 0;
  }
  do {
   if ((i21 | 0) == (i23 | 0)) {
    if (((HEAP32[i17 >> 2] ^ HEAP32[i13 >> 2]) & 7 | 0) != 0) {
     i24 = 0;
     break;
    }
    i11 = i6 | 0;
    i5 = HEAP32[i1 + 36 >> 2] | 0;
    HEAP32[i11 >> 2] = i5;
    if ((i5 | 0) != 0) {
     i22 = i5 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    }
    i22 = i6 + 4 | 0;
    HEAP32[i22 >> 2] = HEAP32[i1 + 40 >> 2];
    i5 = HEAP32[i1 + 44 >> 2] | 0;
    i19 = i6 + 8 | 0;
    i9 = i19;
    i16 = HEAP32[i9 >> 2] & -8 | i5 & 7;
    HEAP32[i9 >> 2] = i16;
    HEAP8[i19] = i16 & 255 & -9 | i5 & 8;
    i5 = i7 | 0;
    i16 = HEAP32[i2 + 36 >> 2] | 0;
    HEAP32[i5 >> 2] = i16;
    if ((i16 | 0) == 0) {
     i25 = 0;
    } else {
     i4 = i16 + 8 | 0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
     i25 = HEAP32[i5 >> 2] | 0;
    }
    i4 = i7 + 4 | 0;
    HEAP32[i4 >> 2] = HEAP32[i2 + 40 >> 2];
    i16 = HEAP32[i2 + 44 >> 2] | 0;
    i12 = i7 + 8 | 0;
    i14 = i12;
    i18 = HEAP32[i14 >> 2] & -8 | i16 & 7;
    HEAP32[i14 >> 2] = i18;
    i26 = i18 & 255 & -9 | i16 & 8;
    HEAP8[i12] = i26;
    do {
     if ((HEAP32[i11 >> 2] | 0) == (i25 | 0)) {
      do {
       if ((HEAP8[i19] & 8) == 0) {
        i16 = HEAP32[i9 >> 2] & 7;
        if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
         i20 = 24;
         break;
        }
        i16 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
        i27 = i16;
        i28 = HEAP8[i12] | 0;
       } else {
        i20 = 24;
       }
      } while (0);
      if ((i20 | 0) == 24) {
       i27 = HEAP32[i22 >> 2] | 0;
       i28 = i26;
      }
      do {
       if ((i28 & 8) == 0) {
        i16 = HEAP32[i14 >> 2] & 7;
        if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
         i20 = 28;
         break;
        }
        i29 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
       } else {
        i20 = 28;
       }
      } while (0);
      if ((i20 | 0) == 28) {
       i29 = HEAP32[i4 >> 2] | 0;
      }
      if ((i27 | 0) != (i29 | 0)) {
       i30 = 0;
       break;
      }
      if (((HEAP32[i14 >> 2] ^ HEAP32[i9 >> 2]) & 7 | 0) != 0) {
       i30 = 0;
       break;
      }
      if ((HEAP32[i1 + 48 >> 2] | 0) != (HEAP32[i2 + 48 >> 2] | 0)) {
       i30 = 0;
       break;
      }
      i16 = HEAP8[i1 + 56 | 0] | 0;
      i18 = HEAP8[i2 + 56 | 0] | 0;
      if ((i16 & 1) != 0 ^ (i18 & 1) != 0) {
       i30 = 0;
       break;
      }
      i30 = (i16 & 2) != 0 ^ (i18 & 2) != 0 ^ 1;
     } else {
      i30 = 0;
     }
    } while (0);
    i9 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i14 = i9 + 8 | 0;
      i4 = i14 | 0;
      i26 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
     }
    } while (0);
    i9 = HEAP32[i11 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i24 = i30;
     break;
    }
    i5 = i9 + 8 | 0;
    i9 = i5 | 0;
    i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     i24 = i30;
     break;
    }
    if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
     i24 = i30;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    i24 = i30;
   } else {
    i24 = 0;
   }
  } while (0);
  i31 = i24;
  i32 = HEAP32[i10 >> 2] | 0;
 } else {
  i31 = 0;
  i32 = i15;
 }
 do {
  if ((i32 | 0) != 0) {
   i15 = i32 + 8 | 0;
   i10 = i15 | 0;
   i24 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i32 = HEAP32[i8 >> 2] | 0;
 if ((i32 | 0) == 0) {
  STACKTOP = i3;
  return i31 | 0;
 }
 i8 = i32 + 8 | 0;
 i32 = i8 | 0;
 i15 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
 HEAP32[i32 >> 2] = i15;
 if ((i15 | 0) >= 1) {
  STACKTOP = i3;
  return i31 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i31 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i3;
 return i31 | 0;
}
function __ZN7WebCore13TypingCommand10insertTextERNS_8DocumentERKN3WTF6StringERKNS_16VisibleSelectionEjNS0_19TextCompositionTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 80 | 0;
 i10 = i6 + 88 | 0;
 i11 = HEAP32[i1 + 332 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!i12) {
  i13 = i11 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i8, (HEAP32[i11 + 468 >> 2] | 0) + 32 | 0);
 __ZN7WebCore31dispatchBeforeTextInsertedEventERKN3WTF6StringERKNS_16VisibleSelectionEb(i9, i2, i3, (i5 | 0) == 1);
 i2 = HEAP32[(HEAP32[i11 + 464 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i14 = 18;
  } else {
   i13 = i2 + 4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 31](i2) | 0) {
     if ((HEAP8[i2 + 160 | 0] & 1) == 0) {
      i15 = 0;
      break;
     }
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     i15 = i2;
    } else {
     i15 = 0;
    }
   } while (0);
   i13 = i2 + 4 | 0;
   i16 = i13 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = i13 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 7](i18);
    } else {
     HEAP32[i16 >> 2] = i17;
    }
   } while (0);
   if ((i15 | 0) == 0) {
    i14 = 18;
    break;
   }
   i17 = i15 | 0;
   if (!(__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i15 + 72 | 0, i3) | 0)) {
    __ZN7WebCore11EditCommand20setStartingSelectionERKNS_16VisibleSelectionE(i17, i3);
    __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i17, i3);
   }
   HEAP32[i15 + 168 >> 2] = i5;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 48 >> 2] & 3](i15, (i4 & 4 | 0) != 0);
   HEAP8[i15 + 176 | 0] = i4 >>> 3 & 1;
   HEAP32[i7 >> 2] = i15;
   HEAP8[i7 + 4 | 0] = i4 & 1;
   HEAP32[i7 + 8 >> 2] = i9;
   __ZN7WebCore19forEachLineInStringINS_26TypingCommandLineOperationEEEvRKN3WTF6StringERKT_(i9, i7);
   i17 = i15 + 4 | 0;
   i16 = i17 | 0;
   i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i16 >> 2] = i13;
    break;
   }
   i13 = i17 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
  }
 } while (0);
 do {
  if ((i14 | 0) == 18) {
   i15 = __ZN3WTF10fastMallocEj(180) | 0;
   i7 = i15;
   __ZN7WebCore24TextInsertionBaseCommandC2ERNS_8DocumentE(i7, i1);
   HEAP32[i15 >> 2] = H_BASE + 16;
   i2 = i15 + 152 | 0;
   HEAP32[i2 >> 2] = 3;
   i13 = HEAP32[i9 >> 2] | 0;
   HEAP32[i15 + 156 >> 2] = i13;
   if ((i13 | 0) == 0) {
    i19 = 3;
   } else {
    i17 = i13 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
    i19 = HEAP32[i2 >> 2] | 0;
   }
   HEAP8[i15 + 160 | 0] = 1;
   HEAP8[i15 + 161 | 0] = i4 & 1;
   HEAP8[i15 + 162 | 0] = i4 >>> 4 & 1;
   HEAP32[i15 + 164 >> 2] = 0;
   HEAP32[i15 + 168 >> 2] = i5;
   HEAP8[i15 + 172 | 0] = i4 >>> 1 & 1;
   HEAP8[i15 + 174 | 0] = 0;
   HEAP8[i15 + 175 | 0] = i4 >>> 2 & 1;
   HEAP8[i15 + 176 | 0] = i4 >>> 3 & 1;
   switch (i19 | 0) {
   case 0:
   case 1:
   case 2:
   case 5:
   case 4:
    {
     HEAP8[i15 + 173 | 0] = 1;
     i14 = 23;
     break;
    }
   case 6:
   case 3:
    {
     HEAP8[i15 + 173 | 0] = 0;
     i14 = 23;
     break;
    }
   default:
    {
     HEAP8[i15 + 173 | 0] = 0;
     i2 = i10 | 0;
     HEAP32[i2 >> 2] = i7;
     if ((i15 | 0) == 0) {
      i20 = i2;
      i21 = 1;
     } else {
      i22 = i2;
      i14 = 25;
     }
    }
   }
   if ((i14 | 0) == 23) {
    i2 = i10 | 0;
    HEAP32[i2 >> 2] = i7;
    i22 = i2;
    i14 = 25;
   }
   if ((i14 | 0) == 25) {
    i2 = i15 + 4 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
    i20 = i22;
    i21 = 0;
   }
   __ZN7WebCore24TextInsertionBaseCommand25applyTextInsertionCommandEPNS_5FrameEN3WTF10PassRefPtrIS0_EERKNS_16VisibleSelectionES8_(i11, i10, i3, i8);
   i2 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i7 = i2 + 4 | 0;
     i17 = i7 | 0;
     i13 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i17 >> 2] = i13;
      break;
     }
     i13 = i7 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    }
   } while (0);
   if (i21) {
    break;
   }
   i2 = i15 + 4 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i2 >> 2] = i13;
    break;
   }
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 7](i15);
  }
 } while (0);
 i21 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i9 = i21 | 0;
   i20 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i9 >> 2] = i20;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionD2Ev(i8);
 if (i12) {
  STACKTOP = i6;
  return;
 }
 i12 = i11 + 4 | 0;
 i11 = i12 | 0;
 i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i11 >> 2] = i8;
  STACKTOP = i6;
  return;
 }
 i8 = i12 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 96 | 0;
 i12 = (__ZN7WebCore11EditCommand5frameEv(i1 | 0) | 0) + 464 | 0;
 if (!(__ZNK7WebCore6Editor32isContinuousSpellCheckingEnabledEv(HEAP32[i12 >> 2] | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 i13 = i1 + 72 | 0;
 i14 = i5 | 0;
 i15 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i14 >> 2] = i15;
 if ((i15 | 0) == 0) {
  i16 = i5 + 8 | 0;
  i17 = 0;
  i18 = i16;
  i19 = i16;
 } else {
  i16 = i15 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  i16 = i5 + 8 | 0;
  i15 = i16;
  i17 = HEAP32[i15 >> 2] & -8;
  i18 = i16;
  i19 = i15;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i15 = HEAP32[i1 + 104 >> 2] | 0;
 i16 = i17 | i15 & 7;
 HEAP32[i19 >> 2] = i16;
 HEAP8[i18] = i16 & 255 & -9 | i15 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i5, HEAP32[i1 + 120 >> 2] | 0);
 i1 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i14 = i1 + 8 | 0;
   i5 = i14 | 0;
   i15 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i6, i4, 0);
 i1 = i6 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) != 0) {
   __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i7, i6, 1);
   __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i8, i4, 1);
   do {
    if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i7, i8) | 0) {
     if ((i2 | 0) != 3) {
      break;
     }
     __ZN7WebCore6Editor27startAlternativeTextUITimerEv(HEAP32[i12 >> 2] | 0);
    } else {
     __ZN7WebCore9makeRangeERKNS_15VisiblePositionES2_(i9, i7, i8);
     i14 = i9 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     i14 = (i15 | 0) == 0;
     do {
      if (i14) {
       i20 = 17;
      } else {
       if ((i2 - 3 | 0) >>> 0 >= 4 >>> 0) {
        i20 = 17;
        break;
       }
       __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i11, i15, 0, 0);
       __ZNK3WTF6String15stripWhiteSpaceEv(i10, i11);
       i5 = i10 | 0;
       i16 = HEAP32[i5 >> 2] | 0;
       HEAP32[i5 >> 2] = 0;
       i5 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i5 | 0) != 0) {
         i18 = i5 | 0;
         i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
         if ((i19 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i5);
          break;
         } else {
          HEAP32[i18 >> 2] = i19;
          break;
         }
        }
       } while (0);
       i5 = HEAP32[i12 >> 2] | 0;
       if ((i16 | 0) == 0) {
        i21 = i5;
        i20 = 19;
        break;
       }
       __ZN7WebCore6Editor33markMisspellingsAfterTypingToWordERKNS_15VisiblePositionERKNS_16VisibleSelectionEb(i5, i7, i13, (HEAP32[i16 + 4 >> 2] | 0) != 0);
       i5 = i16 | 0;
       i19 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i5 >> 2] = i19;
        break;
       }
      }
     } while (0);
     if ((i20 | 0) == 17) {
      i21 = HEAP32[i12 >> 2] | 0;
      i20 = 19;
     }
     if ((i20 | 0) == 19) {
      __ZN7WebCore6Editor33markMisspellingsAfterTypingToWordERKNS_15VisiblePositionERKNS_16VisibleSelectionEb(i21, i7, i13, 0);
     }
     if (i14) {
      break;
     }
     i19 = i15 | 0;
     i5 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i15);
      __ZN3WTF8fastFreeEPv(i15);
      break;
     } else {
      HEAP32[i19 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i19 = i5 + 8 | 0;
     i18 = i19 | 0;
     i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i5 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i19 = i5 + 8 | 0;
     i17 = i19 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i5 = HEAP32[i1 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i19 = i5 + 8 | 0;
   i5 = i19 | 0;
   i18 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13TypingCommand16deleteKeyPressedERNS_8DocumentEjNS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 do {
  if ((i3 | 0) == 0) {
   i7 = i1 + 332 | 0;
   i8 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 464 >> 2] | 0) + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 31](i8) | 0) {
     if ((HEAP8[i8 + 160 | 0] & 1) == 0) {
      i10 = 0;
      break;
     }
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i10 = i8;
    } else {
     i10 = 0;
    }
   } while (0);
   i9 = i8 + 4 | 0;
   i11 = i9 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   do {
    if ((i12 | 0) == 0) {
     i13 = i9 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    } else {
     HEAP32[i11 >> 2] = i12;
    }
   } while (0);
   if ((i10 | 0) == 0) {
    break;
   }
   __ZN7WebCore16VisibleSelectionC2ERKS0_(i5, (HEAP32[(HEAP32[i7 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
   i12 = i10 | 0;
   if (!(__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i5, i10 + 72 | 0) | 0)) {
    __ZN7WebCore11EditCommand20setStartingSelectionERKNS_16VisibleSelectionE(i12, i5);
    __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i12, i5);
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i5);
   HEAP8[i10 + 176 | 0] = i2 >>> 3 & 1;
   __ZN7WebCore13TypingCommand16deleteKeyPressedENS_15TextGranularityEb(i10, 0, (i2 & 2 | 0) != 0);
   i12 = i10 + 4 | 0;
   i11 = i12 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    STACKTOP = i4;
    return;
   }
   i9 = i12 - 4 | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 88 | 0);
 i10 = __ZN3WTF10fastMallocEj(180) | 0;
 __ZN7WebCore24TextInsertionBaseCommandC2ERNS_8DocumentE(i10, i1);
 HEAP32[i10 >> 2] = H_BASE + 16;
 i1 = i10 + 152 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 + 156 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i14 = 1;
 } else {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  i14 = HEAP32[i1 >> 2] | 0;
 }
 HEAP8[i10 + 160 | 0] = 1;
 HEAP8[i10 + 161 | 0] = i2 & 1;
 HEAP8[i10 + 162 | 0] = i2 >>> 4 & 1;
 HEAP32[i10 + 164 >> 2] = i3;
 HEAP32[i10 + 168 >> 2] = 0;
 HEAP8[i10 + 172 | 0] = i2 >>> 1 & 1;
 HEAP8[i10 + 174 | 0] = 0;
 HEAP8[i10 + 175 | 0] = i2 >>> 2 & 1;
 HEAP8[i10 + 176 | 0] = i2 >>> 3 & 1;
 switch (i14 | 0) {
 case 6:
 case 3:
  {
   HEAP8[i10 + 173 | 0] = 0;
   i15 = 22;
   break;
  }
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i10 + 173 | 0] = 1;
   __ZN7WebCore20CompositeEditCommand5applyEv(i10);
   if ((i10 | 0) != 0) {
    i15 = 24;
   }
   break;
  }
 default:
  {
   HEAP8[i10 + 173 | 0] = 0;
   i15 = 22;
  }
 }
 if ((i15 | 0) == 22) {
  __ZN7WebCore20CompositeEditCommand5applyEv(i10);
  i15 = 24;
 }
 do {
  if ((i15 | 0) == 24) {
   i14 = i10 + 4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i14 >> 2] = i2;
    break;
   }
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i10 | 0;
 i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i15;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13TypingCommand23forwardDeleteKeyPressedERNS_8DocumentEjNS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i8 = HEAP32[(HEAP32[i7 + 464 >> 2] | 0) + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 31](i8) | 0) {
     if ((HEAP8[i8 + 160 | 0] & 1) == 0) {
      i10 = 0;
      break;
     }
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i10 = i8;
    } else {
     i10 = 0;
    }
   } while (0);
   i9 = i8 + 4 | 0;
   i11 = i9 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   do {
    if ((i12 | 0) == 0) {
     i13 = i9 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    } else {
     HEAP32[i11 >> 2] = i12;
    }
   } while (0);
   if ((i10 | 0) == 0) {
    break;
   }
   __ZN7WebCore16VisibleSelectionC2ERKS0_(i5, (HEAP32[i7 + 468 >> 2] | 0) + 32 | 0);
   i12 = i10 | 0;
   if (!(__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i5, i10 + 72 | 0) | 0)) {
    __ZN7WebCore11EditCommand20setStartingSelectionERKNS_16VisibleSelectionE(i12, i5);
    __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i12, i5);
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i5);
   HEAP8[i10 + 176 | 0] = i2 >>> 3 & 1;
   __ZN7WebCore13TypingCommand23forwardDeleteKeyPressedENS_15TextGranularityEb(i10, 0, (i2 & 2 | 0) != 0);
   i12 = i10 + 4 | 0;
   i11 = i12 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    STACKTOP = i4;
    return;
   }
   i9 = i12 - 4 | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 88 | 0);
 i10 = __ZN3WTF10fastMallocEj(180) | 0;
 __ZN7WebCore24TextInsertionBaseCommandC2ERNS_8DocumentE(i10, i1);
 HEAP32[i10 >> 2] = H_BASE + 16;
 i1 = i10 + 152 | 0;
 HEAP32[i1 >> 2] = 2;
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 + 156 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i14 = 2;
 } else {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i14 = HEAP32[i1 >> 2] | 0;
 }
 HEAP8[i10 + 160 | 0] = 1;
 HEAP8[i10 + 161 | 0] = i2 & 1;
 HEAP8[i10 + 162 | 0] = i2 >>> 4 & 1;
 HEAP32[i10 + 164 >> 2] = i3;
 HEAP32[i10 + 168 >> 2] = 0;
 HEAP8[i10 + 172 | 0] = i2 >>> 1 & 1;
 HEAP8[i10 + 174 | 0] = 0;
 HEAP8[i10 + 175 | 0] = i2 >>> 2 & 1;
 HEAP8[i10 + 176 | 0] = i2 >>> 3 & 1;
 switch (i14 | 0) {
 case 6:
 case 3:
  {
   HEAP8[i10 + 173 | 0] = 0;
   i15 = 22;
   break;
  }
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i10 + 173 | 0] = 1;
   __ZN7WebCore20CompositeEditCommand5applyEv(i10);
   if ((i10 | 0) != 0) {
    i15 = 24;
   }
   break;
  }
 default:
  {
   HEAP8[i10 + 173 | 0] = 0;
   i15 = 22;
  }
 }
 if ((i15 | 0) == 22) {
  __ZN7WebCore20CompositeEditCommand5applyEv(i10);
  i15 = 24;
 }
 do {
  if ((i15 | 0) == 24) {
   i14 = i10 + 4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i14 >> 2] = i2;
    break;
   }
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i10 | 0;
 i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i15;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19forEachLineInStringINS_26TypingCommandLineOperationEEEvRKN3WTF6StringERKT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = 4;
  } else {
   i9 = i2 | 0;
   i10 = i2 + 8 | 0;
   i11 = i5 | 0;
   i12 = 0;
   i13 = i1;
   L3 : while (1) {
    if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
     i14 = HEAP32[i13 + 8 >> 2] | 0;
     i15 = HEAP32[i13 + 4 >> 2] | 0;
     i16 = i12;
     while (1) {
      if (i16 >>> 0 >= i15 >>> 0) {
       i17 = i15;
       i8 = 19;
       break L3;
      }
      if ((HEAP16[i14 + (i16 << 1) >> 1] | 0) == 10) {
       i18 = i16;
       i19 = i15;
       break;
      } else {
       i16 = i16 + 1 | 0;
      }
     }
    } else {
     i16 = HEAP32[i13 + 8 >> 2] | 0;
     i15 = HEAP32[i13 + 4 >> 2] | 0;
     i14 = i12;
     while (1) {
      if (i14 >>> 0 >= i15 >>> 0) {
       i17 = i15;
       i8 = 19;
       break L3;
      }
      if ((HEAP8[i16 + i14 | 0] | 0) == 10) {
       i18 = i14;
       i19 = i15;
       break;
      } else {
       i14 = i14 + 1 | 0;
      }
     }
    }
    if ((i18 | 0) == -1) {
     i17 = i19;
     i8 = 19;
     break;
    }
    do {
     if ((i18 | 0) != (i12 | 0)) {
      i14 = HEAP32[i9 >> 2] | 0;
      __ZNK3WTF6String9substringEjj(i5, HEAP32[i10 >> 2] | 0, i12, i18 - i12 | 0);
      __ZN7WebCore13TypingCommand28insertTextRunWithoutNewlinesERKN3WTF6StringEb(i14, i5, 0);
      i14 = HEAP32[i11 >> 2] | 0;
      if ((i14 | 0) == 0) {
       break;
      }
      i15 = i14 | 0;
      i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i15 >> 2] = i16;
       break;
      }
     }
    } while (0);
    __ZN7WebCore13TypingCommand24insertParagraphSeparatorEv(HEAP32[i9 >> 2] | 0);
    i20 = i18 + 1 | 0;
    i16 = HEAP32[i7 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i8 = 3;
     break;
    } else {
     i12 = i20;
     i13 = i16;
    }
   }
   if ((i8 | 0) == 3) {
    if ((i20 | 0) == 0) {
     i8 = 4;
     break;
    } else {
     i21 = 0;
     i22 = i20;
    }
   } else if ((i8 | 0) == 19) {
    i11 = (i13 | 0) == 0 ? 0 : i17;
    if ((i12 | 0) == 0) {
     i23 = i11;
     i24 = i9;
     i25 = i10;
     break;
    } else {
     i21 = i11;
     i22 = i12;
    }
   }
   if ((i21 | 0) == (i22 | 0)) {
    STACKTOP = i3;
    return;
   }
   i11 = HEAP32[i2 >> 2] | 0;
   __ZNK3WTF6String9substringEjj(i6, HEAP32[i2 + 8 >> 2] | 0, i22, i21 - i22 | 0);
   __ZN7WebCore13TypingCommand28insertTextRunWithoutNewlinesERKN3WTF6StringEb(i11, i6, (HEAP8[i2 + 4 | 0] & 1) != 0);
   i11 = HEAP32[i6 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i16 = i11 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i16 >> 2] = i15;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 if ((i8 | 0) == 4) {
  i23 = 0;
  i24 = i2 | 0;
  i25 = i2 + 8 | 0;
 }
 i8 = HEAP32[i24 >> 2] | 0;
 __ZNK3WTF6String9substringEjj(i4, HEAP32[i25 >> 2] | 0, 0, i23);
 __ZN7WebCore13TypingCommand28insertTextRunWithoutNewlinesERKN3WTF6StringEb(i8, i4, (HEAP8[i2 + 4 | 0] & 1) != 0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13TypingCommand21makeEditableRootEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 80 | 0;
 i7 = i1 | 0;
 i8 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i1 + 72 | 0) | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  STACKTOP = i2;
  return i9 | 0;
 }
 i10 = i8 + 36 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i9 = 0;
  STACKTOP = i2;
  return i9 | 0;
 }
 do {
  if ((i11 | 0) == (HEAP32[i8 + 40 >> 2] | 0)) {
   if ((__ZNK7WebCore7Element17firstElementChildEv(i8) | 0) == 0) {
    break;
   }
   i12 = HEAP32[(__ZNK7WebCore7Element17firstElementChildEv(i8) | 0) + 44 >> 2] | 0;
   i13 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i12 | 0) != (i13 | 0)) {
    if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i13 + 16 >> 2] | 0)) {
     break;
    }
   }
   i13 = (HEAP32[i8 + 12 >> 2] & 2048 | 0) == 0;
   i12 = i8 + 32 | 0;
   if (i13) {
    i14 = i12 | 0;
   } else {
    i14 = HEAP32[i12 >> 2] | 0;
   }
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    break;
   }
   if (i13) {
    i15 = i12 | 0;
   } else {
    i15 = HEAP32[i12 >> 2] | 0;
   }
   if ((HEAP32[(HEAP32[i15 >> 2] | 0) + 24 >> 2] & 32 | 0) == 0) {
    break;
   } else {
    i9 = 0;
   }
   STACKTOP = i2;
   return i9 | 0;
  }
 } while (0);
 i15 = HEAP32[i10 >> 2] | 0;
 i14 = i1 | 0;
 if ((i15 | 0) != 0) {
  i11 = i1;
  i12 = i3 | 0;
  i13 = i15;
  while (1) {
   i15 = HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] | 0;
   HEAP32[i12 >> 2] = i13;
   i16 = i13 + 8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   FUNCTION_TABLE_viii[i15 & 3](i14, i3, 1);
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 + 8 | 0;
     i17 = i16 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i10 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
  }
 }
 __ZN7WebCore20CompositeEditCommand27addBlockPlaceholderIfNeededEPNS_7ElementE(i4, i14, i8);
 i14 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i4 = i14 + 8 | 0;
   i13 = i4 | 0;
   i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i8 | 0);
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i5, i6, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i7, i5);
 __ZN7WebCore16VisibleSelectionD2Ev(i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i9 = 1;
  STACKTOP = i2;
  return i9 | 0;
 }
 i6 = i5 + 8 | 0;
 i5 = i6 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  i9 = 1;
  STACKTOP = i2;
  return i9 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  i9 = 1;
  STACKTOP = i2;
  return i9 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 i9 = 1;
 STACKTOP = i2;
 return i9 | 0;
}
function __ZN7WebCore13TypingCommand15deleteSelectionERNS_8DocumentEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 if ((HEAP32[(HEAP32[i5 + 468 >> 2] | 0) + 84 >> 2] | 0) != 2) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(HEAP32[i5 + 464 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] & 31](i6) | 0) {
     if ((HEAP8[i6 + 160 | 0] & 1) == 0) {
      i7 = 0;
      break;
     }
     HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
     i7 = i6;
    } else {
     i7 = 0;
    }
   } while (0);
   i5 = i6 + 4 | 0;
   i8 = i5 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   do {
    if ((i9 | 0) == 0) {
     i10 = i5 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
    } else {
     HEAP32[i8 >> 2] = i9;
    }
   } while (0);
   if ((i7 | 0) == 0) {
    break;
   }
   HEAP8[i7 + 176 | 0] = i2 >>> 3 & 1;
   __ZN7WebCore13TypingCommand15deleteSelectionEb(i7, (i2 & 16 | 0) != 0);
   i9 = i7 + 4 | 0;
   i8 = i9 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    STACKTOP = i3;
    return;
   }
   i5 = i9 - 4 | 0;
   if ((i5 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 88 | 0);
 i7 = __ZN3WTF10fastMallocEj(180) | 0;
 __ZN7WebCore24TextInsertionBaseCommandC2ERNS_8DocumentE(i7, i1);
 HEAP32[i7 >> 2] = H_BASE + 16;
 i1 = i7 + 152 | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i7 + 156 >> 2] = i4;
 if ((i4 | 0) == 0) {
  i11 = 0;
 } else {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
  i11 = HEAP32[i1 >> 2] | 0;
 }
 HEAP8[i7 + 160 | 0] = 1;
 HEAP8[i7 + 161 | 0] = i2 & 1;
 HEAP8[i7 + 162 | 0] = i2 >>> 4 & 1;
 HEAP32[i7 + 164 >> 2] = 0;
 HEAP32[i7 + 168 >> 2] = 0;
 HEAP8[i7 + 172 | 0] = i2 >>> 1 & 1;
 HEAP8[i7 + 174 | 0] = 0;
 HEAP8[i7 + 175 | 0] = i2 >>> 2 & 1;
 HEAP8[i7 + 176 | 0] = i2 >>> 3 & 1;
 switch (i11 | 0) {
 case 6:
 case 3:
  {
   HEAP8[i7 + 173 | 0] = 0;
   i12 = 20;
   break;
  }
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i7 + 173 | 0] = 1;
   __ZN7WebCore20CompositeEditCommand5applyEv(i7);
   if ((i7 | 0) != 0) {
    i12 = 22;
   }
   break;
  }
 default:
  {
   HEAP8[i7 + 173 | 0] = 0;
   i12 = 20;
  }
 }
 if ((i12 | 0) == 20) {
  __ZN7WebCore20CompositeEditCommand5applyEv(i7);
  i12 = 22;
 }
 do {
  if ((i12 | 0) == 22) {
   i11 = i7 + 4 | 0;
   i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i11 >> 2] = i2;
    break;
   }
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
  }
 } while (0);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i7 | 0;
 i12 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13TypingCommand24insertParagraphSeparatorERNS_8DocumentEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i1 + 332 >> 2] | 0) + 464 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] & 31](i6) | 0) {
     if ((HEAP8[i6 + 160 | 0] & 1) == 0) {
      i8 = 0;
      break;
     }
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     i8 = i6;
    } else {
     i8 = 0;
    }
   } while (0);
   i7 = i6 + 4 | 0;
   i9 = i7 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   do {
    if ((i10 | 0) == 0) {
     i11 = i7 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
    } else {
     HEAP32[i9 >> 2] = i10;
    }
   } while (0);
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 48 >> 2] & 3](i8, (i2 & 4 | 0) != 0);
   __ZN7WebCore13TypingCommand24insertParagraphSeparatorEv(i8);
   i10 = i8 + 4 | 0;
   i9 = i10 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i9 >> 2] = i7;
    STACKTOP = i3;
    return;
   }
   i7 = i10 - 4 | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 88 | 0);
 i8 = __ZN3WTF10fastMallocEj(180) | 0;
 __ZN7WebCore24TextInsertionBaseCommandC2ERNS_8DocumentE(i8, i1);
 HEAP32[i8 >> 2] = H_BASE + 16;
 i1 = i8 + 152 | 0;
 HEAP32[i1 >> 2] = 5;
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 + 156 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i12 = 5;
 } else {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 HEAP8[i8 + 160 | 0] = 1;
 HEAP8[i8 + 161 | 0] = i2 & 1;
 HEAP8[i8 + 162 | 0] = i2 >>> 4 & 1;
 HEAP32[i8 + 164 >> 2] = 0;
 HEAP32[i8 + 168 >> 2] = 0;
 HEAP8[i8 + 172 | 0] = i2 >>> 1 & 1;
 HEAP8[i8 + 174 | 0] = 0;
 HEAP8[i8 + 175 | 0] = i2 >>> 2 & 1;
 HEAP8[i8 + 176 | 0] = i2 >>> 3 & 1;
 switch (i12 | 0) {
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i8 + 173 | 0] = 1;
   break;
  }
 case 6:
 case 3:
  {
   HEAP8[i8 + 173 | 0] = 0;
   break;
  }
 default:
  {
   HEAP8[i8 + 173 | 0] = 0;
  }
 }
 i12 = i4 | 0;
 HEAP32[i12 >> 2] = i8;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i4);
 i4 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i12 = i4 + 4 | 0;
   i8 = i12 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i8 >> 2] = i2;
    break;
   }
   i2 = i12 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13TypingCommand15insertLineBreakERNS_8DocumentEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i1 + 332 >> 2] | 0) + 464 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] & 31](i6) | 0) {
     if ((HEAP8[i6 + 160 | 0] & 1) == 0) {
      i8 = 0;
      break;
     }
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     i8 = i6;
    } else {
     i8 = 0;
    }
   } while (0);
   i7 = i6 + 4 | 0;
   i9 = i7 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   do {
    if ((i10 | 0) == 0) {
     i11 = i7 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
    } else {
     HEAP32[i9 >> 2] = i10;
    }
   } while (0);
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 48 >> 2] & 3](i8, (i2 & 4 | 0) != 0);
   __ZN7WebCore13TypingCommand15insertLineBreakEv(i8);
   i10 = i8 + 4 | 0;
   i9 = i10 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i9 >> 2] = i7;
    STACKTOP = i3;
    return;
   }
   i7 = i10 - 4 | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 88 | 0);
 i8 = __ZN3WTF10fastMallocEj(180) | 0;
 __ZN7WebCore24TextInsertionBaseCommandC2ERNS_8DocumentE(i8, i1);
 HEAP32[i8 >> 2] = H_BASE + 16;
 i1 = i8 + 152 | 0;
 HEAP32[i1 >> 2] = 4;
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 + 156 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i12 = 4;
 } else {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 HEAP8[i8 + 160 | 0] = 1;
 HEAP8[i8 + 161 | 0] = i2 & 1;
 HEAP8[i8 + 162 | 0] = i2 >>> 4 & 1;
 HEAP32[i8 + 164 >> 2] = 0;
 HEAP32[i8 + 168 >> 2] = 0;
 HEAP8[i8 + 172 | 0] = i2 >>> 1 & 1;
 HEAP8[i8 + 174 | 0] = 0;
 HEAP8[i8 + 175 | 0] = i2 >>> 2 & 1;
 HEAP8[i8 + 176 | 0] = i2 >>> 3 & 1;
 switch (i12 | 0) {
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i8 + 173 | 0] = 1;
   break;
  }
 case 6:
 case 3:
  {
   HEAP8[i8 + 173 | 0] = 0;
   break;
  }
 default:
  {
   HEAP8[i8 + 173 | 0] = 0;
  }
 }
 i12 = i4 | 0;
 HEAP32[i12 >> 2] = i8;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i4);
 i4 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i12 = i4 + 4 | 0;
   i8 = i12 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i8 >> 2] = i2;
    break;
   }
   i2 = i12 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13TypingCommand39insertParagraphSeparatorInQuotedContentERNS_8DocumentE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i1 + 332 >> 2] | 0) + 464 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 4 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] & 31](i5) | 0) {
     if ((HEAP8[i5 + 160 | 0] & 1) == 0) {
      i7 = 0;
      break;
     }
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
     i7 = i5;
    } else {
     i7 = 0;
    }
   } while (0);
   i6 = i5 + 4 | 0;
   i8 = i6 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   do {
    if ((i9 | 0) == 0) {
     i10 = i6 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
    } else {
     HEAP32[i8 >> 2] = i9;
    }
   } while (0);
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore13TypingCommand39insertParagraphSeparatorInQuotedContentEv(i7);
   i9 = i7 + 4 | 0;
   i8 = i9 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i8 >> 2] = i6;
    STACKTOP = i2;
    return;
   }
   i6 = i9 - 4 | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 7](i6);
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 88 | 0);
 i7 = __ZN3WTF10fastMallocEj(180) | 0;
 __ZN7WebCore24TextInsertionBaseCommandC2ERNS_8DocumentE(i7, i1);
 HEAP32[i7 >> 2] = H_BASE + 16;
 i1 = i7 + 152 | 0;
 HEAP32[i1 >> 2] = 6;
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i7 + 156 >> 2] = i4;
 if ((i4 | 0) == 0) {
  i11 = 6;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  i11 = HEAP32[i1 >> 2] | 0;
 }
 HEAP8[i7 + 160 | 0] = 1;
 HEAP8[i7 + 161 | 0] = 0;
 HEAP8[i7 + 162 | 0] = 0;
 HEAP32[i7 + 164 >> 2] = 0;
 HEAP32[i7 + 168 >> 2] = 0;
 HEAP8[i7 + 172 | 0] = 0;
 HEAP8[i7 + 174 | 0] = 0;
 HEAP8[i7 + 175 | 0] = 0;
 HEAP8[i7 + 176 | 0] = 0;
 switch (i11 | 0) {
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i7 + 173 | 0] = 1;
   break;
  }
 case 6:
 case 3:
  {
   HEAP8[i7 + 173 | 0] = 0;
   break;
  }
 default:
  {
   HEAP8[i7 + 173 | 0] = 0;
  }
 }
 i11 = i3 | 0;
 HEAP32[i11 >> 2] = i7;
 __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i3);
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 + 4 | 0;
   i7 = i11 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i7 >> 2] = i1;
    break;
   }
   i1 = i11 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore16VisibleSelectionaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i6 = i3;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i3] = i4 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 12 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i3 = i2 + 20 | 0;
 i5 = i1 + 20 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i3 = i1 + 32 | 0;
 i6 = i3;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i3] = i4 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 36 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i4 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i4;
 HEAP8[i2] = i4 & -3 | HEAP8[i3] & 2;
 return i1 | 0;
}
function __ZN7WebCore13TypingCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 124 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[i1 + 96 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 do {
  if (i5) {
   i6 = 5;
  } else {
   i7 = i4 + 8 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((HEAP32[i4 + 12 >> 2] & 256 | 0) != 0) {
    i6 = 5;
    break;
   }
   i7 = i4 + 8 | 0;
   i9 = 0;
   i10 = i8;
   i11 = i7;
   i12 = i7 | 0;
   i6 = 11;
  }
 } while (0);
 do {
  if ((i6 | 0) == 5) {
   i7 = HEAP32[i1 + 108 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     i13 = 1;
    } else {
     i8 = HEAP32[i7 + 8 >> 2] | 0;
     i14 = (HEAP32[i7 + 12 >> 2] & 256 | 0) != 0;
     i15 = i7 + 8 | 0;
     HEAP32[i15 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      i13 = i14;
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      i13 = i14;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
     i13 = i14;
    }
   } while (0);
   if (i5) {
    i16 = i13;
    i6 = 14;
    break;
   }
   i7 = i4 + 8 | 0;
   i14 = i7 | 0;
   i9 = i13;
   i10 = HEAP32[i14 >> 2] | 0;
   i11 = i7;
   i12 = i14;
   i6 = 11;
  }
 } while (0);
 do {
  if ((i6 | 0) == 11) {
   i13 = i10 - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    i16 = i9;
    i6 = 14;
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    i16 = i9;
    i6 = 14;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   if (i9) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 do {
  if ((i6 | 0) == 14) {
   if (i16) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 switch (HEAP32[i1 + 152 >> 2] | 0) {
 case 1:
  {
   if ((HEAP32[i1 + 144 >> 2] | 0) == 0) {
    HEAP8[i1 + 174 | 0] = 1;
   }
   __ZN7WebCore13TypingCommand16deleteKeyPressedENS_15TextGranularityEb(i1, HEAP32[i1 + 164 >> 2] | 0, (HEAP8[i1 + 172 | 0] & 1) != 0);
   STACKTOP = i2;
   return;
  }
 case 0:
  {
   __ZN7WebCore13TypingCommand15deleteSelectionEb(i1, (HEAP8[i1 + 162 | 0] & 1) != 0);
   STACKTOP = i2;
   return;
  }
 case 2:
  {
   __ZN7WebCore13TypingCommand23forwardDeleteKeyPressedENS_15TextGranularityEb(i1, HEAP32[i1 + 164 >> 2] | 0, (HEAP8[i1 + 172 | 0] & 1) != 0);
   STACKTOP = i2;
   return;
  }
 case 4:
  {
   __ZN7WebCore13TypingCommand15insertLineBreakEv(i1);
   STACKTOP = i2;
   return;
  }
 case 5:
  {
   __ZN7WebCore13TypingCommand24insertParagraphSeparatorEv(i1);
   STACKTOP = i2;
   return;
  }
 case 6:
  {
   __ZN7WebCore13TypingCommand39insertParagraphSeparatorInQuotedContentEv(i1);
   STACKTOP = i2;
   return;
  }
 case 3:
  {
   i16 = i1 + 156 | 0;
   i6 = HEAP8[i1 + 161 | 0] & 1;
   HEAP32[i3 >> 2] = i1;
   HEAP8[i3 + 4 | 0] = i6;
   HEAP32[i3 + 8 >> 2] = i16;
   __ZN7WebCore19forEachLineInStringINS_26TypingCommandLineOperationEEEvRKN3WTF6StringERKT_(i16, i3);
   STACKTOP = i2;
   return;
  }
 default:
  {
   STACKTOP = i2;
   return;
  }
 }
}
function __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 4 >> 2];
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i8 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i8 & 8;
 i8 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i8 >> 2] | 0;
 }
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i13 = i2;
 i14 = HEAP32[i13 >> 2] & -8 | i1 & 7;
 HEAP32[i13 >> 2] = i14;
 i15 = i14 & 255 & -9 | i1 & 8;
 HEAP8[i2] = i15;
 if ((HEAP32[i6 >> 2] | 0) == (i12 | 0)) {
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i1 = HEAP32[i11 >> 2] & 7;
    if (!((i1 | 0) == 2 | (i1 | 0) == 4)) {
     i16 = 9;
     break;
    }
    i1 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i17 = i1;
    i18 = HEAP8[i2] | 0;
   } else {
    i16 = 9;
   }
  } while (0);
  if ((i16 | 0) == 9) {
   i17 = HEAP32[i7 >> 2] | 0;
   i18 = i15;
  }
  do {
   if ((i18 & 8) == 0) {
    i15 = HEAP32[i13 >> 2] & 7;
    if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
     i16 = 13;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i16 = 13;
   }
  } while (0);
  if ((i16 | 0) == 13) {
   i19 = HEAP32[i9 >> 2] | 0;
  }
  if ((i17 | 0) == (i19 | 0)) {
   i20 = ((HEAP32[i13 >> 2] ^ HEAP32[i11 >> 2]) & 7 | 0) == 0;
  } else {
   i20 = 0;
  }
  i21 = i20;
  i22 = HEAP32[i8 >> 2] | 0;
 } else {
  i21 = 0;
  i22 = i12;
 }
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i8 = i12 | 0;
   i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i6 = i22 + 8 | 0;
 i22 = i6 | 0;
 i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return i21 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i21 | 0;
}
function __ZN7WebCore13TypingCommand39insertParagraphSeparatorInQuotedContentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i1 | 0;
 i7 = i4 | 0;
 i8 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i4 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i4 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i8 = HEAP32[i1 + 104 >> 2] | 0;
 i9 = i10 | i8 & 7;
 HEAP32[i12 >> 2] = i9;
 HEAP8[i11] = i9 & 255 & -9 | i8 & 8;
 i8 = (__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i4, F_BASE_ii + 14 | 0, 1) | 0) == 0;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i9 = i7 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 if (!i8) {
  __ZN7WebCore13TypingCommand24insertParagraphSeparatorEv(i1);
  STACKTOP = i2;
  return;
 }
 i8 = i1 | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(152) | 0;
 __ZN7WebCore22BreakBlockquoteCommandC1ERNS_8DocumentE(i7, i4);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i7;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i8, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 4 | 0;
   i7 = i4 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i7 >> 2] = i11;
    break;
   }
   i11 = i4 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
  }
 } while (0);
 i5 = __ZN7WebCore11EditCommand5frameEv(i6) | 0;
 HEAP8[i1 + 173 | 0] = 0;
 __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 6);
 i6 = HEAP32[i5 + 464 >> 2] | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i1 | 0) != 0) {
  i8 = i1 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i6, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = i5 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 7](i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13TypingCommand28insertTextRunWithoutNewlinesERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = (HEAP32[i1 + 168 >> 2] | 0) != 0 | 0;
 i10 = __ZN3WTF10fastMallocEj(168) | 0;
 __ZN7WebCore17InsertTextCommandC1ERNS_8DocumentERKN3WTF6StringEbNS0_13RebalanceTypeE(i10, i8, i2, i3, i9);
 i9 = i1 | 0;
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i10;
 i2 = (i10 | 0) == 0;
 if (!i2) {
  i8 = i10 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrIS0_EERKNS_16VisibleSelectionE(i9, i6, i1 + 72 | 0);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 4 | 0;
   i8 = i3 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i8 >> 2] = i11;
    break;
   }
   i11 = i3 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
  }
 } while (0);
 i6 = __ZN7WebCore11EditCommand5frameEv(i7) | 0;
 HEAP8[i1 + 173 | 0] = 0;
 __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 3);
 i7 = HEAP32[i6 + 464 >> 2] | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i1 | 0) != 0) {
  i9 = i1 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i7, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 4 | 0;
   i7 = i6 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i7 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
  }
 } while (0);
 if (i2) {
  STACKTOP = i4;
  return;
 }
 i2 = i10 + 4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13TypingCommand24insertParagraphSeparatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 if (!(__ZN7WebCore31canAppendNewLineFeedToSelectionERKNS_16VisibleSelectionE(i1 + 72 | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = __ZN3WTF10fastMallocEj(160) | 0;
 __ZN7WebCore31InsertParagraphSeparatorCommandC1ERNS_8DocumentEbb(i8, i7, 0, 0);
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i8;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i6, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
  }
 } while (0);
 i4 = __ZN7WebCore11EditCommand5frameEv(i5) | 0;
 HEAP8[i1 + 173 | 0] = 1;
 __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 5);
 i5 = HEAP32[i4 + 464 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i6;
 if ((i1 | 0) != 0) {
  i6 = i1 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 4 | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13TypingCommand15insertLineBreakEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 if (!(__ZN7WebCore31canAppendNewLineFeedToSelectionERKNS_16VisibleSelectionE(i1 + 72 | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = __ZN3WTF10fastMallocEj(152) | 0;
 __ZN7WebCore22InsertLineBreakCommandC1ERNS_8DocumentE(i8, i7);
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i8;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i6, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
  }
 } while (0);
 i4 = __ZN7WebCore11EditCommand5frameEv(i5) | 0;
 HEAP8[i1 + 173 | 0] = 1;
 __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 4);
 i5 = HEAP32[i4 + 464 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i6;
 if ((i1 | 0) != 0) {
  i6 = i1 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 4 | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i5 = i3;
 i6 = HEAP32[i5 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i5 >> 2] = i6;
 HEAP8[i3] = i6 & 255 & -9 | HEAP8[i4] & 8;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = i2 + 20 | 0;
 i4 = i1 + 20 | 0;
 i3 = i4;
 i5 = HEAP32[i3 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i3 >> 2] = i5;
 HEAP8[i4] = i5 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i6 = i1 + 32 | 0;
 i4 = i6;
 i3 = HEAP32[i4 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i6] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i1;
 HEAP8[i2] = i1 & -3 | HEAP8[i3] & 2;
 return;
}
function __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = i2;
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 4);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i5 + 8 | 0;
  i5 = i7 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 31](i2) | 0;
  } else {
   if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, i9, 0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore16VisibleSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore14FrameSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 120 | 0);
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 8 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 + 32 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i1 + 32 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i6 = i1 + 32 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i6 = i1 + 32 | 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 return;
}
function __ZN7WebCore13TypingCommand24typingAddedToOpenCommandENS0_14ETypingCommandE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN7WebCore11EditCommand5frameEv(i1 | 0) | 0;
 switch (i2 | 0) {
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i1 + 173 | 0] = 1;
   break;
  }
 case 6:
 case 3:
  {
   HEAP8[i1 + 173 | 0] = 0;
   break;
  }
 default:
  {
   HEAP8[i1 + 173 | 0] = 0;
  }
 }
 __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, i2);
 i2 = HEAP32[i5 + 464 >> 2] | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i6 = i1 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i2, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 4 | 0;
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i5 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13TypingCommand10insertTextERNS_8DocumentERKN3WTF6StringEjNS0_19TextCompositionTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    break;
   }
   i7 = HEAP32[i5 + 464 >> 2] | 0;
   if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
    i8 = HEAP32[i6 + 8 >> 2] | 0;
   } else {
    i8 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i6) | 0;
   }
   i9 = HEAP16[i8 >> 1] | 0;
   do {
    if ((i9 & 65535) >>> 0 < 128 >>> 0) {
     if ((i9 & 65535) >>> 0 >= 33 >>> 0) {
      i10 = 0;
      break;
     }
     if (i9 << 16 >> 16 == 32) {
      i10 = 1;
      break;
     }
     i10 = (i9 - 9 & 65535) >>> 0 < 5 >>> 0;
    } else {
     i10 = (_u_charDirection(i9 & 65535) | 0) == 9;
    }
   } while (0);
   __ZN7WebCore6Editor38updateMarkersForWordsAffectedByEditingEb(i7, i10);
  }
 } while (0);
 __ZN7WebCore13TypingCommand10insertTextERNS_8DocumentERKN3WTF6StringERKNS_16VisibleSelectionEjNS0_19TextCompositionTypeE(i1, i2, (HEAP32[i5 + 468 >> 2] | 0) + 32 | 0, i3, i4);
 return;
}
function __ZN7WebCore13TypingCommandC2ERNS_8DocumentENS0_14ETypingCommandERKN3WTF6StringEjNS_15TextGranularityENS0_19TextCompositionTypeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 __ZN7WebCore24TextInsertionBaseCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 152 | 0;
 HEAP32[i2 >> 2] = i3;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 156 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i3;
 } else {
  i3 = i8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  i9 = HEAP32[i2 >> 2] | 0;
 }
 HEAP8[i1 + 160 | 0] = 1;
 HEAP8[i1 + 161 | 0] = i5 & 1;
 HEAP8[i1 + 162 | 0] = i5 >>> 4 & 1;
 HEAP32[i1 + 164 >> 2] = i6;
 HEAP32[i1 + 168 >> 2] = i7;
 HEAP8[i1 + 172 | 0] = i5 >>> 1 & 1;
 HEAP8[i1 + 174 | 0] = 0;
 HEAP8[i1 + 175 | 0] = i5 >>> 2 & 1;
 HEAP8[i1 + 176 | 0] = i5 >>> 3 & 1;
 switch (i9 | 0) {
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i1 + 173 | 0] = 1;
   return;
  }
 case 6:
 case 3:
  {
   HEAP8[i1 + 173 | 0] = 0;
   return;
  }
 default:
  {
   HEAP8[i1 + 173 | 0] = 0;
   return;
  }
 }
}
function __ZN7WebCore13TypingCommandC1ERNS_8DocumentENS0_14ETypingCommandERKN3WTF6StringEjNS_15TextGranularityENS0_19TextCompositionTypeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 __ZN7WebCore24TextInsertionBaseCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 152 | 0;
 HEAP32[i2 >> 2] = i3;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 156 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i3;
 } else {
  i3 = i8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  i9 = HEAP32[i2 >> 2] | 0;
 }
 HEAP8[i1 + 160 | 0] = 1;
 HEAP8[i1 + 161 | 0] = i5 & 1;
 HEAP8[i1 + 162 | 0] = i5 >>> 4 & 1;
 HEAP32[i1 + 164 >> 2] = i6;
 HEAP32[i1 + 168 >> 2] = i7;
 HEAP8[i1 + 172 | 0] = i5 >>> 1 & 1;
 HEAP8[i1 + 174 | 0] = 0;
 HEAP8[i1 + 175 | 0] = i5 >>> 2 & 1;
 HEAP8[i1 + 176 | 0] = i5 >>> 3 & 1;
 switch (i9 | 0) {
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i1 + 173 | 0] = 1;
   return;
  }
 case 6:
 case 3:
  {
   HEAP8[i1 + 173 | 0] = 0;
   return;
  }
 default:
  {
   HEAP8[i1 + 173 | 0] = 0;
   return;
  }
 }
}
function __ZN7WebCore13TypingCommand11closeTypingEPNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[(HEAP32[i1 + 464 >> 2] | 0) + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 31](i2) | 0) {
   if ((HEAP8[i2 + 160 | 0] & 1) == 0) {
    i3 = 0;
    break;
   }
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   i3 = i2;
  } else {
   i3 = 0;
  }
 } while (0);
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = i1 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  } else {
   HEAP32[i2 >> 2] = i4;
  }
 } while (0);
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP8[i3 + 160 | 0] = 0;
 i4 = i3 + 4 | 0;
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i2 = i4 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
 return;
}
function __ZN7WebCore13TypingCommand15deleteSelectionEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 __ZN7WebCore20CompositeEditCommand15deleteSelectionEbbbbb(i5, i2, 1, 0, 1, 1);
 i2 = __ZN7WebCore11EditCommand5frameEv(i1 | 0) | 0;
 HEAP8[i1 + 173 | 0] = 1;
 __ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE(i1, 0);
 i6 = HEAP32[i2 + 464 >> 2] | 0;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i1 | 0) != 0) {
  i5 = i1 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 + 4 | 0;
 i4 = i2 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i6 = i2 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 7](i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13TypingCommand37lastTypingCommandIfStillOpenForTypingEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[(HEAP32[i2 + 464 >> 2] | 0) + 4 >> 2] | 0;
 i2 = (i3 | 0) == 0;
 do {
  if (i2) {
   i4 = 4;
  } else {
   i5 = i3 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 31](i3) | 0)) {
    i4 = 4;
    break;
   }
   if ((HEAP8[i3 + 160 | 0] & 1) == 0) {
    i4 = 4;
    break;
   }
   HEAP32[i1 >> 2] = i3;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  }
 } while (0);
 if ((i4 | 0) == 4) {
  HEAP32[i1 >> 2] = 0;
 }
 if (i2) {
  return;
 }
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  return;
 }
 i1 = i2 - 4 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 2;
}
function __ZN7WebCore13TypingCommand46updateSelectionIfDifferentFromCurrentSelectionEPS0_PNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i4, (HEAP32[i2 + 468 >> 2] | 0) + 32 | 0);
 i2 = i1 | 0;
 if (__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i4, i1 + 72 | 0) | 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore11EditCommand20setStartingSelectionERKNS_16VisibleSelectionE(i2, i4);
 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i2, i4);
 __ZN7WebCore16VisibleSelectionD2Ev(i4);
 STACKTOP = i3;
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
function __ZN7WebCore13TypingCommandD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 156 >> 2] | 0;
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
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13TypingCommandD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 156 >> 2] | 0;
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
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
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
function __ZN7WebCore13TypingCommand10insertTextERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i1;
 HEAP8[i5 + 4 | 0] = i3 & 1;
 HEAP32[i5 + 8 >> 2] = i2;
 __ZN7WebCore19forEachLineInStringINS_26TypingCommandLineOperationEEEvRKN3WTF6StringERKT_(i2, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13TypingCommand26updatePreservesTypingStyleENS0_14ETypingCommandE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 switch (i2 | 0) {
 case 0:
 case 1:
 case 2:
 case 5:
 case 4:
  {
   HEAP8[i1 + 173 | 0] = 1;
   return;
  }
 case 6:
 case 3:
  {
   HEAP8[i1 + 173 | 0] = 0;
   return;
  }
 default:
  {
   HEAP8[i1 + 173 | 0] = 0;
   return;
  }
 }
}
function viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore13TypingCommand38setShouldRetainAutocorrectionIndicatorEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 175 | 0] = i2 & 1;
 return;
}
function ii___ZN7WebCore20isTableStructureNodeEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore20isTableStructureNodeEPKNS_4NodeE(i1 | 0) | 0;
}
function b0(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(0);
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
function __ZNK7WebCore13TypingCommand35shouldRetainAutocorrectionIndicatorEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 175 | 0] & 1) != 0 | 0;
}
function ii___ZN7WebCore11isTableCellEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11isTableCellEPKNS_4NodeE(i1 | 0) | 0;
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
function __ZNK7WebCore13TypingCommand20preservesTypingStyleEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 173 | 0] & 1) != 0 | 0;
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
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function __ZNK7WebCore13TypingCommand23shouldStopCaretBlinkingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore11EditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13TypingCommand15isTypingCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore13TypingCommand13editingActionEv(i1) {
 i1 = i1 | 0;
 return 32;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiiiii = [b0,b0,__ZN7WebCore13TypingCommandC2ERNS_8DocumentENS0_14ETypingCommandERKN3WTF6StringEjNS_15TextGranularityENS0_19TextCompositionTypeE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore13TypingCommand7doApplyEv,b1,__ZN7WebCore13TypingCommandD0Ev,b1,__ZN7WebCore13TypingCommandD1Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore13TypingCommand38setShouldRetainAutocorrectionIndicatorEb,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b3,__ZNK7WebCore13TypingCommand13editingActionEv,b3,ii___ZN7WebCore11isTableCellEPKNS_4NodeE__wrapper,b3,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b3,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b3,__ZNK7WebCore13TypingCommand35shouldRetainAutocorrectionIndicatorEv,b3,ii___ZN7WebCore20isTableStructureNodeEPKNS_4NodeE__wrapper,b3,__ZNK7WebCore13TypingCommand20preservesTypingStyleEv,b3,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b3,__ZNK7WebCore13TypingCommand23shouldStopCaretBlinkingEv,b3,__ZNK7WebCore13TypingCommand15isTypingCommandEv,b3,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiiiii": invoke_viiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore13TypingCommand13editingActionEv","__ZN7WebCore13TypingCommand38setShouldRetainAutocorrectionIndicatorEb","__ZN7WebCore13TypingCommand23forwardDeleteKeyPressedERNS_8DocumentEjNS_15TextGranularityE","_memset","__ZN7WebCore13TypingCommand10insertTextERNS_8DocumentERKN3WTF6StringERKNS_16VisibleSelectionEjNS0_19TextCompositionTypeE","__ZN7WebCore13TypingCommand27markMisspellingsAfterTypingENS0_14ETypingCommandE","__ZN7WebCore13TypingCommand46updateSelectionIfDifferentFromCurrentSelectionEPS0_PNS_5FrameE","__ZN7WebCore13TypingCommand28insertTextRunWithoutNewlinesERKN3WTF6StringEb","__ZNK7WebCore13TypingCommand15isTypingCommandEv","__ZN7WebCore13TypingCommand24insertParagraphSeparatorERNS_8DocumentEj","__ZN7WebCore13TypingCommand23forwardDeleteKeyPressedENS_15TextGranularityEb","__ZN7WebCore16VisibleSelectionaSERKS0_","__ZN7WebCore13TypingCommand37lastTypingCommandIfStillOpenForTypingEPNS_5FrameE","__ZN7WebCore13TypingCommand24typingAddedToOpenCommandENS0_14ETypingCommandE","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore13TypingCommandD0Ev","__ZN7WebCore14FrameSelectionD2Ev","__ZN7WebCore13TypingCommandC2ERNS_8DocumentENS0_14ETypingCommandERKN3WTF6StringEjNS_15TextGranularityENS0_19TextCompositionTypeE","__ZN7WebCore13TypingCommandD1Ev","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCore13TypingCommand10insertTextERNS_8DocumentERKN3WTF6StringEjNS0_19TextCompositionTypeE","__ZN7WebCore13TypingCommand15insertLineBreakEv","__ZNK7WebCore13TypingCommand23shouldStopCaretBlinkingEv","__ZN7WebCore13TypingCommand39insertParagraphSeparatorInQuotedContentERNS_8DocumentE","__ZN7WebCore13TypingCommand7doApplyEv","__ZN7WebCore19forEachLineInStringINS_26TypingCommandLineOperationEEEvRKN3WTF6StringERKT_","__ZNK7WebCore13TypingCommand20preservesTypingStyleEv","__ZN7WebCore13TypingCommand16deleteKeyPressedERNS_8DocumentEjNS_15TextGranularityE","__ZN7WebCore13TypingCommand15insertLineBreakERNS_8DocumentEj","__ZN7WebCore13TypingCommand11closeTypingEPNS_5FrameE","__ZN7WebCoreeqERKNS_16VisibleSelectionES2_","__ZN7WebCore13TypingCommand26updatePreservesTypingStyleENS0_14ETypingCommandE","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore13TypingCommand39insertParagraphSeparatorInQuotedContentEv","__ZN7WebCore13TypingCommand24insertParagraphSeparatorEv","__ZN7WebCore13TypingCommand15deleteSelectionERNS_8DocumentEj","__ZNK7WebCore13TypingCommand35shouldRetainAutocorrectionIndicatorEv","_memcpy","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZN7WebCore13TypingCommand21makeEditableRootEmptyEv","__ZN7WebCore13TypingCommand16deleteKeyPressedENS_15TextGranularityEb","__ZN7WebCore13TypingCommand10insertTextERKN3WTF6StringEb","__ZN7WebCore13TypingCommand15deleteSelectionEb"]
