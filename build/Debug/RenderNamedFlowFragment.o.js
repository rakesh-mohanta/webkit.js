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
H_BASE = parentModule["_malloc"](1256 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1256;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore23RenderNamedFlowFragmentC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore23RenderNamedFlowFragmentD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,78,97,109,101,100,70,108,111,119,70,114,97,103,109,101,110,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiifi(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiifi"](index,a1,a2,a3,a4,a5);
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore12RenderRegionE=env.__ZTVN7WebCore12RenderRegionE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore23RenderNamedFlowFragmentE=(H_BASE+32)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 286;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 98;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_iiiiii + 6;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 288;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_viiii + 20;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viiii + 24;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_viii + 60;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_viiiii + 12;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_viii + 58;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 66;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 100;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_viii + 70;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_viiii + 26;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 102;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viii + 68;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_viii + 62;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_viii + 56;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_viii + 64;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 1184 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 1220 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 1224 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 1228 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 1244 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 1248 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_vi + 36;
}
function __ZN7WebCore23RenderNamedFlowFragment33restoreRegionObjectsOriginalStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 48 | 0;
 if ((HEAP8[i1 + 184 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 _memset(i3 | 0, 0, 20) | 0;
 i8 = i1 + 176 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i1 + 164 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i1 + 168 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i11 + (i13 * 12 & -1) | 0;
 L4 : do {
  if ((i9 | 0) == 0) {
   i15 = 7;
  } else {
   L6 : do {
    if ((i13 | 0) == 0) {
     i16 = i11;
    } else {
     i17 = i11;
     while (1) {
      i18 = HEAP32[i17 >> 2] | 0;
      if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
       i16 = i17;
       break L6;
      }
      i18 = i17 + 12 | 0;
      if ((i18 | 0) == (i14 | 0)) {
       i15 = 7;
       break L4;
      } else {
       i17 = i18;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i14 | 0)) {
    i15 = 7;
    break;
   }
   i17 = i5 | 0;
   i18 = i5 + 4 | 0;
   i19 = i3 | 0;
   i20 = i7 + 8 | 0;
   i21 = i7 | 0;
   i22 = i16;
   L12 : while (1) {
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23 + 20 | 0;
    if ((HEAP32[i24 >> 2] & 768 | 0) == 256) {
     i25 = HEAP32[(HEAP32[i23 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i25 = HEAP32[i23 + 36 >> 2] | 0;
    }
    i26 = (i25 | 0) == 0;
    if (!i26) {
     i27 = i25 | 0;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
    }
    i27 = HEAP32[i22 + 4 >> 2] | 0;
    i28 = (i27 | 0) == 0;
    if (!i28) {
     i29 = i27 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    if ((HEAP32[i24 >> 2] & 768 | 0) != 256) {
     i24 = i27 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     i24 = i23 + 36 | 0;
     i29 = HEAP32[i24 >> 2] | 0;
     i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i29);
      __ZN3WTF8fastFreeEPv(i29);
     } else {
      HEAP32[i29 >> 2] = i30;
     }
     HEAP32[i24 >> 2] = i27;
    }
    if ((HEAP8[i22 + 8 | 0] & 1) == 0) {
     HEAP32[i4 >> 2] = 0;
     if ((__ZNK7WebCore11RenderStyle4diffEPKS0_Rj(i27, i25, i4) | 0) < 5) {
      i15 = 23;
     }
    } else {
     i15 = 23;
    }
    do {
     if ((i15 | 0) == 23) {
      i15 = 0;
      HEAP32[i17 >> 2] = 0;
      if (!i26) {
       i24 = i25 | 0;
       HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
      }
      HEAP32[i17 >> 2] = i25;
      HEAP8[i18] = 1;
      HEAP32[i6 >> 2] = i23;
      __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES4_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i7, i19, i6, i5);
      if ((HEAP8[i20] & 1) == 0) {
       i24 = HEAP32[i21 >> 2] | 0;
       i30 = HEAP32[i17 >> 2] | 0;
       if ((i30 | 0) != 0) {
        i29 = i30 | 0;
        HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
       }
       i29 = i24 + 4 | 0;
       i31 = HEAP32[i29 >> 2] | 0;
       HEAP32[i29 >> 2] = i30;
       do {
        if ((i31 | 0) != 0) {
         i29 = i31 | 0;
         i32 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
         if ((i32 | 0) == 0) {
          __ZN7WebCore11RenderStyleD2Ev(i31);
          __ZN3WTF8fastFreeEPv(i31);
          break;
         } else {
          HEAP32[i29 >> 2] = i32;
          break;
         }
        }
       } while (0);
       HEAP8[i24 + 8 | 0] = HEAP8[i18] & 1;
       i33 = i30;
      } else {
       i33 = HEAP32[i17 >> 2] | 0;
      }
      if ((i33 | 0) == 0) {
       break;
      }
      i31 = i33 | 0;
      i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
      if ((i32 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i33);
       __ZN3WTF8fastFreeEPv(i33);
       break;
      } else {
       HEAP32[i31 >> 2] = i32;
       break;
      }
     }
    } while (0);
    do {
     if (!i28) {
      i23 = i27 | 0;
      i32 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      if ((i32 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i27);
       __ZN3WTF8fastFreeEPv(i27);
       break;
      } else {
       HEAP32[i23 >> 2] = i32;
       break;
      }
     }
    } while (0);
    do {
     if (!i26) {
      i27 = i25 | 0;
      i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i28 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i25);
       __ZN3WTF8fastFreeEPv(i25);
       break;
      } else {
       HEAP32[i27 >> 2] = i28;
       break;
      }
     }
    } while (0);
    i26 = i22 + 12 | 0;
    if ((i26 | 0) == (i14 | 0)) {
     break;
    } else {
     i34 = i26;
    }
    while (1) {
     i26 = HEAP32[i34 >> 2] | 0;
     if (!((i26 | 0) == (-1 | 0) | (i26 | 0) == 0)) {
      break;
     }
     i26 = i34 + 12 | 0;
     if ((i26 | 0) == (i14 | 0)) {
      break L12;
     } else {
      i34 = i26;
     }
    }
    if ((i34 | 0) == (i14 | 0)) {
     break;
    } else {
     i22 = i34;
    }
   }
   i22 = i3 | 0;
   i17 = i3 + 4 | 0;
   i18 = i3 + 8 | 0;
   i21 = i3 + 12 | 0;
   i20 = i3 + 16 | 0;
   i35 = HEAP32[i10 >> 2] | 0;
   i36 = HEAP32[i22 >> 2] | 0;
   i37 = HEAP32[i12 >> 2] | 0;
   i38 = HEAP32[i17 >> 2] | 0;
   i39 = HEAP32[i18 >> 2] | 0;
   i40 = HEAP32[i8 >> 2] | 0;
   i41 = HEAP32[i21 >> 2] | 0;
   i42 = HEAP32[i20 >> 2] | 0;
   i43 = i22;
   i44 = i17;
   i45 = i18;
   i46 = i21;
   i47 = i20;
  }
 } while (0);
 if ((i15 | 0) == 7) {
  i35 = i11;
  i36 = 0;
  i37 = i13;
  i38 = 0;
  i39 = 0;
  i40 = i9;
  i41 = 0;
  i42 = 0;
  i43 = i3 | 0;
  i44 = i3 + 4 | 0;
  i45 = i3 + 8 | 0;
  i46 = i3 + 12 | 0;
  i47 = i3 + 16 | 0;
 }
 HEAP32[i10 >> 2] = i36;
 HEAP32[i43 >> 2] = i35;
 HEAP32[i12 >> 2] = i38;
 HEAP32[i44 >> 2] = i37;
 i44 = i1 + 172 | 0;
 i38 = HEAP32[i44 >> 2] | 0;
 HEAP32[i44 >> 2] = i39;
 HEAP32[i45 >> 2] = i38;
 HEAP32[i8 >> 2] = i41;
 HEAP32[i46 >> 2] = i40;
 i40 = i1 + 180 | 0;
 i1 = HEAP32[i40 >> 2] | 0;
 HEAP32[i40 >> 2] = i42;
 HEAP32[i47 >> 2] = i1;
 if ((i35 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((i37 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i35 + (i1 * 12 & -1) >> 2] | 0) != -1) {
     i47 = HEAP32[i35 + (i1 * 12 & -1) + 4 >> 2] | 0;
     if ((i47 | 0) == 0) {
      break;
     }
     i42 = i47 | 0;
     i40 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     if ((i40 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i47);
      __ZN3WTF8fastFreeEPv(i47);
      break;
     } else {
      HEAP32[i42 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i37 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i35);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23RenderNamedFlowFragment22setObjectStyleInRegionEPNS_12RenderObjectEN3WTF10PassRefPtrINS_11RenderStyleEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i2 + 20 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 & 768 | 0) == 256) {
  i12 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i12 = HEAP32[i2 + 36 >> 2] | 0;
 }
 i13 = (i12 | 0) == 0;
 if (i13) {
  i14 = i11;
 } else {
  i11 = i12 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i14 = HEAP32[i10 >> 2] | 0;
 }
 if ((i14 & 768 | 0) == 256) {
  i15 = i14;
 } else {
  i14 = HEAP32[i3 >> 2] | 0;
  i3 = i14 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i3 = i2 + 36 | 0;
  i11 = HEAP32[i3 >> 2] | 0;
  i16 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN7WebCore11RenderStyleD2Ev(i11);
   __ZN3WTF8fastFreeEPv(i11);
  } else {
   HEAP32[i11 >> 2] = i16;
  }
  HEAP32[i3 >> 2] = i14;
  i15 = HEAP32[i10 >> 2] | 0;
 }
 L15 : do {
  if ((i15 & 768 | 0) != 256) {
   if ((HEAP32[i2 + 24 >> 2] & 2 | 0) == 0 | i15 >>> 0 > 1073741823 >>> 0) {
    break;
   }
   L18 : do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 511](i2) | 0) {
     i17 = 44;
    } else {
     if ((HEAP32[i10 >> 2] & 768 | 0) == 256) {
      i18 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i18 = HEAP32[i2 + 36 >> 2] | 0;
     }
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i6, i18, 23);
     if ((HEAP8[i6 + 4 | 0] & 1) != 0) {
      if ((HEAP32[i6 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
       i17 = 44;
       break;
      }
     }
     i14 = (HEAP32[i18 + 12 >> 2] | 0) + 4 | 0;
     while (1) {
      if ((HEAP32[i14 + 4 >> 2] | 0) != 0) {
       i17 = 44;
       break L18;
      }
      i14 = HEAP32[i14 >> 2] | 0;
      if ((i14 | 0) == 0) {
       break;
      }
     }
     i14 = HEAP32[i10 >> 2] | 0;
     i3 = (i14 & 768 | 0) == 256;
     if (i3) {
      i19 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i19 = HEAP32[i2 + 36 >> 2] | 0;
     }
     i16 = HEAP32[i19 + 16 >> 2] | 0;
     i11 = (HEAP32[(HEAP32[i16 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
     i20 = HEAP32[i16 + 104 >> 2] | 0;
     i21 = (i20 & 134217726 | 0) == 0;
     if (i21 | i11) {
      if (!i21) {
       i17 = 44;
       break;
      }
     } else {
      if ((i20 & 2013265920 | 0) != 0) {
       i17 = 44;
       break;
      }
     }
     i20 = HEAP32[i16 + 112 >> 2] | 0;
     i21 = (i20 & 134217726 | 0) == 0;
     if (i21 | i11) {
      if (!i21) {
       i17 = 44;
       break;
      }
     } else {
      if ((i20 & 2013265920 | 0) != 0) {
       i17 = 44;
       break;
      }
     }
     i20 = HEAP32[i16 + 120 >> 2] | 0;
     i21 = (i20 & 134217726 | 0) == 0;
     if (i21 | i11) {
      if (!i21) {
       i17 = 44;
       break;
      }
     } else {
      if ((i20 & 2013265920 | 0) != 0) {
       i17 = 44;
       break;
      }
     }
     i20 = HEAP32[i16 + 128 >> 2] | 0;
     i16 = (i20 & 134217726 | 0) == 0;
     if (i16 | i11) {
      if (!i16) {
       i17 = 44;
       break;
      }
     } else {
      if ((i20 & 2013265920 | 0) != 0) {
       i17 = 44;
       break;
      }
     }
     if (i3) {
      i22 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i22 = HEAP32[i2 + 36 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) != 0) {
      i17 = 44;
      break;
     }
     if (i3) {
      i23 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i23 = HEAP32[i2 + 36 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 100 >> 2] | 0) != 0) {
      i24 = i14;
      break;
     }
     HEAP32[i10 >> 2] = i14 & 1073741823;
     break L15;
    }
   } while (0);
   if ((i17 | 0) == 44) {
    i24 = HEAP32[i10 >> 2] | 0;
   }
   if (i24 >>> 0 > 1073741823 >>> 0) {
    break;
   }
   HEAP32[i10 >> 2] = i24 & 1073741823 | 1073741824;
  }
 } while (0);
 i24 = i7 | 0;
 HEAP32[i24 >> 2] = 0;
 if (!i13) {
  i10 = i12 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 HEAP32[i24 >> 2] = i12;
 i10 = i7 + 4 | 0;
 HEAP8[i10] = i4 & 1;
 HEAP32[i8 >> 2] = i2;
 __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES4_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i9, i1 + 164 | 0, i8, i7);
 if ((HEAP8[i9 + 8 | 0] & 1) == 0) {
  i7 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i24 >> 2] | 0;
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  i8 = i7 + 4 | 0;
  i1 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i9;
  do {
   if ((i1 | 0) != 0) {
    i8 = i1 | 0;
    i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i2 | 0) == 0) {
     __ZN7WebCore11RenderStyleD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i8 >> 2] = i2;
     break;
    }
   }
  } while (0);
  HEAP8[i7 + 8 | 0] = HEAP8[i10] & 1;
  i25 = i9;
 } else {
  i25 = HEAP32[i24 >> 2] | 0;
 }
 do {
  if ((i25 | 0) != 0) {
   i24 = i25 | 0;
   i9 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i25);
    __ZN3WTF8fastFreeEPv(i25);
    break;
   } else {
    HEAP32[i24 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if (i13) {
  STACKTOP = i5;
  return;
 }
 i13 = i12 | 0;
 i25 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i25 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i12);
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i13 >> 2] = i25;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore23RenderNamedFlowFragment28computeChildrenStyleInRegionEPKNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i1 + 164 | 0;
 i12 = i11 | 0;
 i13 = i1 + 168 | 0;
 i14 = i4 | 0;
 i15 = i2 + 36 | 0;
 i2 = i7 | 0;
 i16 = i1 | 0;
 i17 = i8;
 i18 = i8 | 0;
 i8 = i9 | 0;
 i19 = i6 | 0;
 i20 = i10;
 while (1) {
  HEAP32[i5 >> 2] = i20;
  __ZN3WTF7HashMapIPKN7WebCore12RenderObjectENS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS9_IS6_EEE4findERKS4_(i4, i11, i5);
  i10 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i10 | 0) == ((HEAP32[i12 >> 2] | 0) + ((HEAP32[i13 >> 2] | 0) * 12 & -1) | 0)) {
    i21 = i20 + 20 | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i22 & 128 | 0) == 0) {
      i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 248 >> 2] & 511](i20) | 0;
      i24 = HEAP32[i21 >> 2] | 0;
      if (i23) {
       if ((i24 & 25165824 | 0) != 16777216) {
        i25 = i24;
        i26 = 10;
        break;
       }
      }
      if ((i24 & 768 | 0) == 256) {
       __ZN7WebCore11RenderStyle5cloneEPKS0_(i7, HEAP32[i15 >> 2] | 0);
       i27 = HEAP32[i2 >> 2] | 0;
       break;
      }
      i23 = HEAP32[i20 + 4 >> 2] | 0;
      if ((i24 & 128 | 0) == 0) {
       i28 = i23;
      } else {
       i28 = 0;
      }
      i24 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
      i23 = i24 + 320 | 0;
      i29 = HEAP32[i23 >> 2] | 0;
      if ((i29 | 0) == 0) {
       __ZN7WebCore8Document19createStyleResolverEv(i24);
       i30 = HEAP32[i23 >> 2] | 0;
      } else {
       i30 = i29;
      }
      __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i17, i30, i28, 0, 1, 0, i16);
      i29 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = 0;
      i27 = i29;
     } else {
      i25 = i22;
      i26 = 10;
     }
    } while (0);
    if ((i26 | 0) == 10) {
     i26 = 0;
     if ((i25 & 768 | 0) == 256) {
      i31 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i31 = HEAP32[i20 + 36 >> 2] | 0;
     }
     __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i6, HEAP32[i15 >> 2] | 0, HEAP32[i31 + 48 >> 2] & 31);
     i27 = HEAP32[i19 >> 2] | 0;
    }
    HEAP32[i8 >> 2] = i27;
    if ((i27 | 0) == 0) {
     i32 = 0;
     i33 = 0;
     i34 = 1;
     break;
    }
    i35 = i27;
    i36 = 0;
    i37 = HEAP32[i27 >> 2] | 0;
    i26 = 23;
   } else {
    i22 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i22 | 0) == 0) {
     HEAP32[i8 >> 2] = 0;
     i32 = 0;
     i33 = 1;
     i34 = 1;
     break;
    } else {
     i21 = i22 | 0;
     i29 = (HEAP32[i21 >> 2] | 0) + 1 | 0;
     HEAP32[i21 >> 2] = i29;
     HEAP32[i8 >> 2] = i22;
     i35 = i22;
     i36 = 1;
     i37 = i29;
     i26 = 23;
     break;
    }
   }
  } while (0);
  if ((i26 | 0) == 23) {
   i26 = 0;
   HEAP32[i35 >> 2] = i37 + 1;
   i32 = i35;
   i33 = i36;
   i34 = 0;
  }
  __ZN7WebCore23RenderNamedFlowFragment22setObjectStyleInRegionEPNS_12RenderObjectEN3WTF10PassRefPtrINS_11RenderStyleEEEb(i1, i20, i9, i33);
  i10 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i29 = i10 | 0;
    i22 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
    if ((i22 | 0) == 0) {
     __ZN7WebCore11RenderStyleD2Ev(i10);
     __ZN3WTF8fastFreeEPv(i10);
     break;
    } else {
     HEAP32[i29 >> 2] = i22;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i20 + 20 >> 2] & 768 | 0) != 256) {
   __ZN7WebCore23RenderNamedFlowFragment28computeChildrenStyleInRegionEPKNS_13RenderElementE(i1, i20);
  }
  do {
   if (!i34) {
    i10 = i32 | 0;
    i22 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i22 | 0) == 0) {
     __ZN7WebCore11RenderStyleD2Ev(i32);
     __ZN3WTF8fastFreeEPv(i32);
     break;
    } else {
     HEAP32[i10 >> 2] = i22;
     break;
    }
   }
  } while (0);
  i20 = HEAP32[i20 + 16 >> 2] | 0;
  if ((i20 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23RenderNamedFlowFragment27setRegionObjectsRegionStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 if ((HEAP8[i1 + 184 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = __ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
 i8 = HEAP32[(__ZN7WebCore20FlowThreadController30ensureRenderFlowThreadWithNameERKN3WTF12AtomicStringE(i7, (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 288 | 0) | 0) + 360 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i1 | 0;
 i9 = i1 + 116 | 0;
 i10 = i1 + 164 | 0;
 i11 = i10 | 0;
 i12 = i1 + 168 | 0;
 i13 = i3 | 0;
 i14 = i5;
 i15 = i5 | 0;
 i5 = i6 | 0;
 i16 = i8;
 while (1) {
  i8 = HEAP32[i16 >> 2] | 0;
  i17 = (HEAP32[i8 + 12 >> 2] & 2048 | 0) == 0;
  i18 = i8 + 32 | 0;
  if (i17) {
   i19 = i18 | 0;
  } else {
   i19 = HEAP32[i18 >> 2] | 0;
  }
  do {
   if ((HEAP32[i19 >> 2] | 0) != 0) {
    if (i17) {
     i20 = i18 | 0;
    } else {
     i20 = HEAP32[i18 >> 2] | 0;
    }
    i8 = HEAP32[i20 >> 2] | 0;
    i21 = i8;
    if (!(__ZNK7WebCore16RenderFlowThread18objectInFlowRegionEPKNS_12RenderObjectEPKNS_12RenderRegionE(HEAP32[i9 >> 2] | 0, i8, i7) | 0)) {
     break;
    }
    HEAP32[i4 >> 2] = i8;
    __ZN3WTF7HashMapIPKN7WebCore12RenderObjectENS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS9_IS6_EEE4findERKS4_(i3, i10, i4);
    i22 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i22 | 0) == ((HEAP32[i11 >> 2] | 0) + ((HEAP32[i12 >> 2] | 0) * 12 & -1) | 0)) {
      i23 = HEAP32[i8 + 4 >> 2] | 0;
      if ((HEAP32[i8 + 20 >> 2] & 128 | 0) == 0) {
       i24 = i23;
      } else {
       i24 = 0;
      }
      i25 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
      i23 = i25 + 320 | 0;
      i26 = HEAP32[i23 >> 2] | 0;
      if ((i26 | 0) == 0) {
       __ZN7WebCore8Document19createStyleResolverEv(i25);
       i27 = HEAP32[i23 >> 2] | 0;
      } else {
       i27 = i26;
      }
      __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i14, i27, i24, 0, 1, 0, i7);
      i26 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = 0;
      HEAP32[i5 >> 2] = i26;
      if ((i26 | 0) == 0) {
       i28 = 0;
       i29 = 0;
       i30 = 1;
       break;
      }
      i31 = i26;
      i32 = 0;
      i33 = HEAP32[i26 >> 2] | 0;
      i34 = 22;
     } else {
      i26 = HEAP32[i22 + 4 >> 2] | 0;
      if ((i26 | 0) == 0) {
       HEAP32[i5 >> 2] = 0;
       i28 = 0;
       i29 = 1;
       i30 = 1;
       break;
      } else {
       i23 = i26 | 0;
       i25 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
       HEAP32[i23 >> 2] = i25;
       HEAP32[i5 >> 2] = i26;
       i31 = i26;
       i32 = 1;
       i33 = i25;
       i34 = 22;
       break;
      }
     }
    } while (0);
    if ((i34 | 0) == 22) {
     i34 = 0;
     HEAP32[i31 >> 2] = i33 + 1;
     i28 = i31;
     i29 = i32;
     i30 = 0;
    }
    __ZN7WebCore23RenderNamedFlowFragment22setObjectStyleInRegionEPNS_12RenderObjectEN3WTF10PassRefPtrINS_11RenderStyleEEEb(i1, i8, i6, i29);
    i22 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i25 = i22 | 0;
      i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      if ((i26 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i22);
       __ZN3WTF8fastFreeEPv(i22);
       break;
      } else {
       HEAP32[i25 >> 2] = i26;
       break;
      }
     }
    } while (0);
    __ZN7WebCore23RenderNamedFlowFragment28computeChildrenStyleInRegionEPKNS_13RenderElementE(i1, i21);
    if (i30) {
     break;
    }
    i22 = i28 | 0;
    i8 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore11RenderStyleD2Ev(i28);
     __ZN3WTF8fastFreeEPv(i28);
     break;
    } else {
     HEAP32[i22 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i16 = HEAP32[i16 + 8 >> 2] | 0;
  if ((i16 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES4_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 * 12 & -1) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
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
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 * 12 & -1) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    HEAP8[i22 + 8 | 0] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i3 = i14 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i13 + 4 | 0;
 i22 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i14;
 do {
  if ((i22 | 0) != 0) {
   i14 = i22 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i22);
    __ZN3WTF8fastFreeEPv(i22);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP8[i13 + 8 | 0] = HEAP8[i4 + 4 | 0] & 1;
 i4 = i2 + 12 | 0;
 i22 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i22;
 i4 = i2 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i22 << 1 | 0) < (i3 | 0)) {
  i27 = i13;
  i28 = i3;
 } else {
  if ((i3 | 0) == 0) {
   i29 = 8;
  } else {
   i14 = i3 << 1;
   i29 = (i22 * 6 & -1 | 0) < (i14 | 0) ? i3 : i14;
  }
  i14 = __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i14;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 * 12 & -1) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 * 12 & -1) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 * 12 & -1) >> 2] = 0;
   HEAP32[i8 + (i9 * 12 & -1) + 4 >> 2] = 0;
   HEAP8[i8 + (i9 * 12 & -1) + 8 | 0] = 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 } else {
  i12 = 0;
  i13 = 0;
 }
 while (1) {
  i8 = i7 + (i12 * 12 & -1) | 0;
  i2 = i8 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i14 = i9;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i13;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 * 12 & -1) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L12 : do {
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
      if ((i29 | 0) == (i9 | 0)) {
       i30 = i28;
       break L12;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 * 12 & -1) | 0;
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
     i9 = i17 | 0;
     i20 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
      break;
     } else {
      HEAP32[i9 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i2 >> 2];
   i17 = i7 + (i12 * 12 & -1) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   HEAP8[i30 + 8 | 0] = HEAP8[i7 + (i12 * 12 & -1) + 8 | 0] & 1;
   i15 = (i8 | 0) == (i3 | 0) ? i30 : i13;
  }
  i20 = i12 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i12 = i20;
   i13 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i10 = i15;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 * 12 & -1) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 * 12 & -1) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i13 = i1 | 0;
    i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    if ((i12 | 0) == 0) {
     __ZN7WebCore11RenderStyleD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i13 >> 2] = i12;
     break;
    }
   }
  } while (0);
  i8 = i36 + 1 | 0;
  if ((i8 | 0) < (i5 | 0)) {
   i36 = i8;
  } else {
   i10 = i15;
   break;
  }
 }
 i11 = i7;
 __ZN3WTF8fastFreeEPv(i11);
 return i10 | 0;
}
function __ZN7WebCore23RenderNamedFlowFragment11createStyleERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i1, i2, 1);
 i6 = i1 | 0;
 i1 = i2 + 20 | 0;
 __ZN7WebCore11RenderStyle13setFlowThreadERKN3WTF12AtomicStringE(HEAP32[i6 >> 2] | 0, (HEAP32[i1 >> 2] | 0) + 284 | 0);
 __ZN7WebCore11RenderStyle15setRegionThreadERKN3WTF12AtomicStringE(HEAP32[i6 >> 2] | 0, (HEAP32[i1 >> 2] | 0) + 288 | 0);
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 292 >> 2] & 1;
 i9 = i7 + 20 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i10 + 292 >> 2] & 1 | 0) == (i8 | 0)) {
  i11 = i7;
 } else {
  if ((HEAP32[i10 >> 2] | 0) == 1) {
   i12 = i10;
  } else {
   __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i10);
   i10 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i9 >> 2] | 0;
   i7 = i4 | 0;
   i13 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
   } else {
    HEAP32[i7 >> 2] = i13;
   }
   HEAP32[i9 >> 2] = i10;
   i12 = i10;
  }
  i10 = i12 + 292 | 0;
  HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -2 | i8;
  i11 = HEAP32[i6 >> 2] | 0;
 }
 i8 = i2 + 48 | 0;
 i2 = i11 + 48 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -7169 | HEAP32[i8 >> 2] & 7168;
 i2 = (HEAP32[i6 >> 2] | 0) + 48 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -57345 | HEAP32[i8 >> 2] & 57344;
 i8 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore11RenderStyle14setShapeInsideEN3WTF10PassRefPtrINS_10ShapeValueEEE(i8, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 | 0;
 i8 = i5 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 + 4 | 0;
   i6 = i8 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i6 >> 2] = i11;
    break;
   }
   i11 = i8 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i1 = i2 + 4 | 0;
   i11 = i1 | 0;
   i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i11 >> 2] = i8;
    break;
   }
   i8 = i1 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23RenderNamedFlowFragment16checkRegionStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i2 = i1 + 4 | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 + 12 >> 2] & 1048580 | 0) != 1048580) {
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 232 >> 2] & 511](i3) | 0) == 0) {
    break;
   } else {
    i4 = 0;
   }
   i5 = i1 + 184 | 0;
   i6 = HEAP8[i5] | 0;
   i7 = i6 & -2;
   i8 = i7 | i4;
   HEAP8[i5] = i8;
   i9 = i1 + 116 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = i10;
   __ZN7WebCore21RenderNamedFlowThread23checkRegionsWithStylingEv(i11);
   return;
  }
 } while (0);
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i2 = i3 + 320 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i3);
  i13 = HEAP32[i2 >> 2] | 0;
 } else {
  i13 = i12;
 }
 i12 = i1 | 0;
 i2 = i1 | 0;
 i3 = i1 + 8 | 0;
 L10 : do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i14 = i12;
   i15 = i2;
  } else {
   i16 = i12;
   i17 = i2;
   i18 = i3;
   while (1) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 152 >> 2] & 511](i17) | 0)) {
     i14 = i16;
     i15 = i17;
     break L10;
    }
    i19 = HEAP32[i18 >> 2] | 0;
    i20 = i19 | 0;
    i21 = i19 + 8 | 0;
    if ((HEAP32[i21 >> 2] | 0) == 0) {
     i14 = i19;
     i15 = i20;
     break;
    } else {
     i16 = i19;
     i17 = i20;
     i18 = i21;
    }
   }
  }
 } while (0);
 i3 = i14 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 & 128 | 0) == 0) {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = i2;
    i23 = 16;
    break;
   }
   if ((HEAP32[i12 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i22 = i2;
    i23 = 16;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 232 >> 2] & 511](i12) | 0) == 0) {
    i22 = HEAP32[i3 >> 2] | 0;
    i23 = 16;
    break;
   } else {
    i24 = __ZNK7WebCore12RenderObject27generatingPseudoHostElementEv(i15) | 0;
    break;
   }
  } else {
   i22 = i2;
   i23 = 16;
  }
 } while (0);
 do {
  if ((i23 | 0) == 16) {
   if ((i22 & 128 | 0) != 0) {
    i24 = 0;
    break;
   }
   i24 = HEAP32[i14 + 4 >> 2] | 0;
  }
 } while (0);
 i4 = (__ZN7WebCore13StyleResolver16checkRegionStyleEPNS_7ElementE(i13, i24) | 0) & 1;
 i5 = i1 + 184 | 0;
 i6 = HEAP8[i5] | 0;
 i7 = i6 & -2;
 i8 = i7 | i4;
 HEAP8[i5] = i8;
 i9 = i1 + 116 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10;
 __ZN7WebCore21RenderNamedFlowThread23checkRegionsWithStylingEv(i11);
 return;
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore23RenderNamedFlowFragment24clearObjectStyleInRegionEPKNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = i2;
 i2 = i1 + 164 | 0;
 __ZN3WTF7HashMapIPKN7WebCore12RenderObjectENS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS9_IS6_EEE4findERKS4_(i4, i2, i5);
 i6 = HEAP32[i4 >> 2] | 0;
 i4 = i1 + 168 | 0;
 do {
  if ((i6 | 0) != ((HEAP32[i2 >> 2] | 0) + ((HEAP32[i4 >> 2] | 0) * 12 & -1) | 0)) {
   i7 = i2 | 0;
   i8 = HEAP32[i6 + 4 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   HEAP32[i6 >> 2] = -1;
   i8 = i1 + 180 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = i1 + 176 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   i8 = HEAP32[i4 >> 2] | 0;
   if (!((i10 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i7, (i8 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] & 511](i4) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 } else {
  i11 = i5;
 }
 while (1) {
  __ZN7WebCore23RenderNamedFlowFragment24clearObjectStyleInRegionEPKNS_12RenderObjectE(i1, i11);
  i11 = HEAP32[i11 + 16 >> 2] | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11RenderStyle14setShapeInsideEN3WTF10PassRefPtrINS_10ShapeValueEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 184 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
  i8 = i2;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i2 = i4 | 0;
  i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i9;
  }
  HEAP32[i5 >> 2] = i1;
  i7 = i1;
  i8 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = 0;
 i6 = i7 + 184 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i7 | 0;
 i6 = i7 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 + 4 | 0;
   i5 = i6 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i1 = HEAP32[i8 + 8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 + 4 | 0;
   i9 = i8 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i8 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23RenderNamedFlowFragmentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 40;
 i3 = HEAP32[i1 + 164 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 168 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 * 12 & -1) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 * 12 & -1) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i2 >> 2] = __ZTVN7WebCore12RenderRegionE + 8;
 i2 = HEAP32[i1 + 140 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore15RenderBlockFlowD2Ev(i9);
  return;
 }
 i3 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i4 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i8 = HEAP32[i5 + 12 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i7 = i8 | 0;
       i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i8);
        break;
       } else {
        HEAP32[i7 >> 2] = i6;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i9 = i1 | 0;
 __ZN7WebCore15RenderBlockFlowD2Ev(i9);
 return;
}
function __ZN7WebCore23RenderNamedFlowFragmentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 40;
 i3 = HEAP32[i1 + 164 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 168 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 * 12 & -1) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 * 12 & -1) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i2 >> 2] = __ZTVN7WebCore12RenderRegionE + 8;
 i2 = HEAP32[i1 + 140 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore15RenderBlockFlowD2Ev(i9);
  return;
 }
 i3 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i4 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i8 = HEAP32[i5 + 12 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i7 = i8 | 0;
       i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i8);
        break;
       } else {
        HEAP32[i7 >> 2] = i6;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i9 = i1 | 0;
 __ZN7WebCore15RenderBlockFlowD2Ev(i9);
 return;
}
function __ZN3WTF7HashMapIPKN7WebCore12RenderObjectENS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS9_IS6_EEE4findERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = (HEAP32[i2 + 4 >> 2] | 0) * 12 & -1 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 * 12 & -1) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L3 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 * 12 & -1) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L3;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN7WebCore23RenderNamedFlowFragment12attachRegionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore12RenderRegion12attachRegionEv(i1 | 0);
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  return;
 }
 i2 = i1 + 116 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore23RenderNamedFlowFragment16checkRegionStyleEv(i1);
 if ((HEAP8[i1 + 160 | 0] & 1) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] | 0;
 i5 = i4 + 16 | 0;
 i6 = i4 + 44 | 0;
 i7 = HEAP8[(__ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i5 >> 2] | 0) + 4 | 0, (HEAP32[i6 >> 2] | 0) >>> 13 & 3) | 0) + 5 | 0] | 0;
 i8 = i7 & 255;
 if ((i8 | 0) == 3 | (i8 | 0) == 2 | (i8 | 0) == 10) {
  i9 = 6;
 } else {
  if ((i7 - 11 & 255) >>> 0 < 4 >>> 0) {
   i9 = 6;
  } else {
   i10 = 1;
  }
 }
 do {
  if ((i9 | 0) == 6) {
   i7 = HEAP8[(__ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i5 >> 2] | 0) + 4 | 0, (HEAP32[i6 >> 2] | 0) >>> 13 & 3) | 0) + 5 | 0] | 0;
   i8 = i7 & 255;
   if ((i8 | 0) == 3 | (i8 | 0) == 2 | (i8 | 0) == 10) {
    i10 = 0;
    break;
   }
   i10 = (i7 - 11 & 255) >>> 0 > 3 >>> 0;
  }
 } while (0);
 i5 = (HEAP32[i6 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i11 = (HEAP32[i4 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i11 = (HEAP32[i4 + 4 >> 2] | 0) + 4 | 0;
 }
 i4 = (HEAP8[i11 + 5 | 0] | 0) == 0 & (i10 | (HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 25165824 | 0) != 16777216);
 i3 = i1 + 184 | 0;
 HEAP8[i3] = (i4 & 1) << 1 | HEAP8[i3] & -3;
 if (!i4) {
  return;
 }
 __ZN7WebCore16RenderFlowThread33incrementAutoLogicalHeightRegionsEv(HEAP32[i2 >> 2] | 0);
 return;
}
function __ZN7WebCore23RenderNamedFlowFragment36updateRegionHasAutoLogicalHeightFlagEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((HEAP8[i1 + 160 | 0] & 1) == 0) {
  return;
 }
 i2 = i1 + 184 | 0;
 i3 = (HEAPU8[i2] | 0) >>> 1 & 1;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0;
 i6 = i5 + 16 | 0;
 i7 = i5 + 44 | 0;
 i8 = HEAP8[(__ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i6 >> 2] | 0) + 4 | 0, (HEAP32[i7 >> 2] | 0) >>> 13 & 3) | 0) + 5 | 0] | 0;
 i9 = i8 & 255;
 if ((i9 | 0) == 3 | (i9 | 0) == 2 | (i9 | 0) == 10) {
  i10 = 4;
 } else {
  if ((i8 - 11 & 255) >>> 0 < 4 >>> 0) {
   i10 = 4;
  } else {
   i11 = 1;
  }
 }
 do {
  if ((i10 | 0) == 4) {
   i8 = HEAP8[(__ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i6 >> 2] | 0) + 4 | 0, (HEAP32[i7 >> 2] | 0) >>> 13 & 3) | 0) + 5 | 0] | 0;
   i9 = i8 & 255;
   if ((i9 | 0) == 3 | (i9 | 0) == 2 | (i9 | 0) == 10) {
    i11 = 0;
    break;
   }
   i11 = (i8 - 11 & 255) >>> 0 > 3 >>> 0;
  }
 } while (0);
 i6 = (HEAP32[i7 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i12 = (HEAP32[i5 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i12 = (HEAP32[i5 + 4 >> 2] | 0) + 4 | 0;
 }
 i5 = (HEAP8[i12 + 5 | 0] | 0) == 0 & (i11 | (HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 25165824 | 0) != 16777216);
 i4 = (i5 & 1) << 1 | HEAP8[i2] & -3;
 HEAP8[i2] = i4;
 if ((i5 & 1 | 0) == (i3 & 255 | 0)) {
  return;
 }
 if (i5) {
  __ZN7WebCore16RenderFlowThread33incrementAutoLogicalHeightRegionsEv(HEAP32[i1 + 116 >> 2] | 0);
  return;
 } else {
  HEAP8[i2] = i4 & -5;
  HEAP32[i1 + 188 >> 2] = 0;
  __ZN7WebCore16RenderFlowThread33decrementAutoLogicalHeightRegionsEv(HEAP32[i1 + 116 >> 2] | 0);
  return;
 }
}
function __ZN7WebCore23RenderNamedFlowFragment11layoutBlockEbNS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i3 = i4 + 8 | 0;
 i6 = i4 + 16 | 0;
 i7 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE(i1 | 0, i2, i5);
 if ((HEAP8[i1 + 160 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 132 | 0;
 i2 = (HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0;
 i8 = HEAP32[i5 >> 2] | 0;
 i9 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = i2 ? i9 : i8;
 i10 = i2 ? i8 : i9;
 i9 = i1 + 116 | 0;
 i8 = HEAP32[(HEAP32[i9 >> 2] | 0) + 292 >> 2] & 192;
 if ((i8 | 0) == 128 | (i8 | 0) == 192) {
  __ZN7WebCore12RenderRegion29computeOverflowFromFlowThreadEv(i7);
 }
 i8 = i1 + 184 | 0;
 do {
  if ((HEAP8[i8] & 2) != 0) {
   i2 = HEAP32[i9 >> 2] | 0;
   if ((HEAP32[i2 + 292 >> 2] & 192 | 0) != 0) {
    break;
   }
   __ZN7WebCore16RenderFlowThread17invalidateRegionsEv(i2);
   HEAP8[i8] = HEAP8[i8] & -5;
   HEAP32[i1 + 188 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore12RenderRegion16pageLogicalWidthEv(i3, i7);
 do {
  if ((i5 | 0) == (HEAP32[i3 >> 2] | 0)) {
   __ZNK7WebCore23RenderNamedFlowFragment17pageLogicalHeightEv(i6, i1);
   if ((i10 | 0) != (HEAP32[i6 >> 2] | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i6 + 292 >> 2] & 192 | 0) == 192) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore16RenderFlowThread17invalidateRegionsEv(i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderStyle15setRegionThreadERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) + 288 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP32[i1 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   i7 = i2 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i8 + 2;
   i9 = (HEAP32[i1 >> 2] | 0) == (i2 | 0);
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    if (!i9) {
     break;
    }
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i7 >> 2] = i8;
    if (!i9) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  i10 = i2;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i2);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i5 >> 2] = i2;
  i10 = i2;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = i2 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i10 + 288 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i10 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyle13setFlowThreadERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) + 284 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP32[i1 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   i7 = i2 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i8 + 2;
   i9 = (HEAP32[i1 >> 2] | 0) == (i2 | 0);
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    if (!i9) {
     break;
    }
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i7 >> 2] = i8;
    if (!i9) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  i10 = i2;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i2);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i5 >> 2] = i2;
  i10 = i2;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = i2 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i10 + 284 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i10 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9RenderBox13requiresLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 & 25165824 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 i1 = HEAP32[i4 + 20 >> 2] | 0;
 if (+HEAPF32[i1 + 4 >> 2] < +1) {
  i3 = 1;
  return i3 | 0;
 }
 i5 = i1 + 116 | 0;
 while (1) {
  if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
   i3 = 1;
   i6 = 20;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 20) {
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 296 >> 2] & 4063232 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 212 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 & 196608 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 292 >> 2] & 1024 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 & 262144 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = (HEAP32[i1 + 68 >> 2] | 0) + 32 | 0;
 if ((HEAP8[i2] & 3) != 3) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = (HEAP32[i2 >> 2] | 0) >>> 11 & 3;
 do {
  if ((i1 | 0) != 2) {
   i2 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
   if (((i2 | 0) == 0 | (i2 | 0) == 3) ^ (i1 | 0) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (HEAP32[(HEAP32[i4 + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0;
 return i3 | 0;
}
function __ZN7WebCore23RenderNamedFlowFragment19updateLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv(i5);
 i6 = HEAP8[i1 + 184 | 0] | 0;
 if ((i6 & 2) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[(HEAP32[i1 + 116 >> 2] | 0) + 292 >> 2] & 192 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((i6 & 4) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i1 + 188 >> 2] | 0;
 i7 = i1 | 0;
 i8 = i1;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 511](i7) | 0;
 i10 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 720 >> 2] & 127](i4, i7);
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 756 >> 2] & 511](i7) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 724 >> 2] & 127](i3, i7);
 i7 = i9 + i6 + i11 + i4 + (HEAP32[i3 >> 2] | 0) | 0;
 i3 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i12 = i1 + 56 | 0;
 } else {
  i12 = i1 + 52 | 0;
 }
 if ((i7 | 0) <= (HEAP32[i12 >> 2] | 0)) {
  STACKTOP = i2;
  return;
 }
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i7;
 } else {
  HEAP32[i1 + 52 >> 2] = i7;
 }
 __ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv(i5);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore23RenderNamedFlowFragment27shouldHaveAutoLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0;
 i3 = i1 + 16 | 0;
 i4 = i1 + 44 | 0;
 i5 = HEAP8[(__ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i3 >> 2] | 0) + 4 | 0, (HEAP32[i4 >> 2] | 0) >>> 13 & 3) | 0) + 5 | 0] | 0;
 i6 = i5 & 255;
 if ((i6 | 0) == 3 | (i6 | 0) == 2 | (i6 | 0) == 10) {
  i7 = 3;
 } else {
  if ((i5 - 11 & 255) >>> 0 < 4 >>> 0) {
   i7 = 3;
  } else {
   i8 = 1;
  }
 }
 do {
  if ((i7 | 0) == 3) {
   i5 = HEAP8[(__ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i3 >> 2] | 0) + 4 | 0, (HEAP32[i4 >> 2] | 0) >>> 13 & 3) | 0) + 5 | 0] | 0;
   i6 = i5 & 255;
   if ((i6 | 0) == 3 | (i6 | 0) == 2 | (i6 | 0) == 10) {
    i8 = 0;
    break;
   }
   i8 = (i5 - 11 & 255) >>> 0 > 3 >>> 0;
  }
 } while (0);
 i3 = i8 | (HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 25165824 | 0) != 16777216;
 i2 = (HEAP32[i4 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i9 = (HEAP32[i1 + 4 >> 2] | 0) + 12 | 0;
  i10 = i9 + 5 | 0;
  i11 = HEAP8[i10] | 0;
  i12 = i11 << 24 >> 24 == 0;
  i13 = i12 & i3;
  return i13 | 0;
 } else {
  i9 = (HEAP32[i1 + 4 >> 2] | 0) + 4 | 0;
  i10 = i9 + 5 | 0;
  i11 = HEAP8[i10] | 0;
  i12 = i11 << 24 >> 24 == 0;
  i13 = i12 & i3;
  return i13 | 0;
 }
 return 0;
}
function __ZNK7WebCore23RenderNamedFlowFragment17pageLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = HEAP32[i2 + 116 >> 2] | 0;
 do {
  if ((HEAP8[i2 + 184 | 0] & 4) != 0) {
   if ((HEAP32[i10 + 292 >> 2] & 192 | 0) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = HEAP32[i2 + 188 >> 2];
   STACKTOP = i3;
   return;
  }
 } while (0);
 i11 = i2 | 0;
 if ((HEAP32[i10 + 20 >> 2] & 8192 | 0) == 0) {
  __ZNK7WebCore9RenderBox11clientWidthEv(i7, i11);
  i10 = i2 | 0;
  i12 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 712 >> 2] & 127](i8, i10);
  i13 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 716 >> 2] & 127](i9, i10);
  HEAP32[i1 >> 2] = i13 - (HEAP32[i9 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore9RenderBox12clientHeightEv(i4, i11);
  i11 = i2 | 0;
  i9 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 704 >> 2] & 127](i5, i11);
  i2 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 708 >> 2] & 127](i6, i11);
  HEAP32[i1 >> 2] = i2 - (HEAP32[i6 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 + 100 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i6;
   _llvm_lifetime_start(4, 0, i9 | 0);
   __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   HEAP32[i6 >> 2] = 0;
   i10 = HEAP32[((HEAP32[i5 >> 2] | 0) < 0 ? i6 : i5) >> 2] | 0;
   _llvm_lifetime_end(4, 0, i9 | 0);
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i11 = i9;
    i12 = i10;
    break;
   }
   __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i4, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   i9 = HEAP32[i4 >> 2] | 0;
   i13 = (i9 | 0) > 0 ? 0 : -i9 | 0;
   i14 = i10;
   i15 = i1 | 0;
   i16 = i14 - i13 | 0;
   HEAP32[i15 >> 2] = i16;
   STACKTOP = i3;
   return;
  } else {
   i11 = i8;
   i12 = HEAP32[i8 + 4 >> 2] | 0;
  }
 } while (0);
 i13 = HEAP32[i11 + 8 >> 2] | 0;
 i14 = i12;
 i15 = i1 | 0;
 i16 = i14 - i13 | 0;
 HEAP32[i15 >> 2] = i16;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 + 100 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i6;
   _llvm_lifetime_start(4, 0, i9 | 0);
   __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i5, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   HEAP32[i6 >> 2] = 0;
   i10 = HEAP32[((HEAP32[i5 >> 2] | 0) < 0 ? i6 : i5) >> 2] | 0;
   _llvm_lifetime_end(4, 0, i9 | 0);
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i11 = i9;
    i12 = i10;
    break;
   }
   __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i4, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   i9 = HEAP32[i4 >> 2] | 0;
   i13 = (i9 | 0) > 0 ? 0 : -i9 | 0;
   i14 = i10;
   i15 = i1 | 0;
   i16 = i14 - i13 | 0;
   HEAP32[i15 >> 2] = i16;
   STACKTOP = i3;
   return;
  } else {
   i11 = i8;
   i12 = HEAP32[i8 + 12 >> 2] | 0;
  }
 } while (0);
 i13 = HEAP32[i11 + 16 >> 2] | 0;
 i14 = i12;
 i15 = i1 | 0;
 i16 = i14 - i13 | 0;
 HEAP32[i15 >> 2] = i16;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore23RenderNamedFlowFragment20maxPageLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i6 + 36 >> 2] | 0;
 i7 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i8 = HEAP32[i2 + 4 >> 2] | 0;
  i9 = i8 + 44 | 0;
  i10 = i8;
 } else {
  i8 = HEAP32[i2 + 4 >> 2] | 0;
  i9 = i8 + 28 | 0;
  i10 = i8;
 }
 if ((HEAP8[i9 + 5 | 0] | 0) == 15) {
  HEAP32[i1 >> 2] = 1073741823;
  STACKTOP = i3;
  return;
 }
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i11 = i10 + 44 | 0;
 } else {
  i11 = i10 + 28 | 0;
 }
 i10 = i11;
 i11 = HEAP32[i10 >> 2] | 0;
 i7 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i11;
 HEAP32[i4 + 4 >> 2] = i7;
 if ((i11 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore9RenderBox33computeReplacedLogicalHeightUsingENS_6LengthE(i1, i6, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZNK7WebCore23RenderNamedFlowFragment18visualOverflowRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 do {
  if ((HEAP8[i2 + 160 | 0] & 1) != 0) {
   i3 = __ZNK7WebCore12RenderRegion19renderBoxRegionInfoEPKNS_9RenderBoxE(i2 | 0, HEAP32[i2 + 116 >> 2] | 0) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i3 + 12 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i1;
   i5 = i4 + 20 | 0;
   HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   HEAP32[i3 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
   HEAP32[i3 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
   return;
  }
 } while (0);
 i5 = HEAP32[i2 + 88 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i3 = i2 + 52 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i4 = HEAP32[i3 + 4 >> 2] | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i1 + 8 | 0;
  HEAP32[i3 >> 2] = i2;
  HEAP32[i3 + 4 >> 2] = i4;
  return;
 } else {
  i4 = i1;
  i1 = i5 + 20 | 0;
  HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
  HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
  HEAP32[i4 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
  return;
 }
}
function __ZNK7WebCore20RenderBoxModelObject12paddingStartEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingEndEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23RenderNamedFlowFragment14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderRegion14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 if ((HEAP32[i1 + 116 >> 2] | 0) == 0) {
  i3 = i1 + 184 | 0;
  HEAP8[i3] = HEAP8[i3] & -2;
  return;
 }
 __ZN7WebCore23RenderNamedFlowFragment36updateRegionHasAutoLogicalHeightFlagEv(i1);
 __ZN7WebCore23RenderNamedFlowFragment16checkRegionStyleEv(i1);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 20 >> 2] & 31 | 0) == 0) {
  return;
 }
 i3 = i1 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 & 1 | 0) != 0) {
  return;
 }
 HEAP32[i3 >> 2] = i2 | 1;
 if ((i2 & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1 | 0);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore23RenderNamedFlowFragment20computeStyleInRegionEPKNS_12RenderObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 128 | 0) == 0) {
  i5 = i4;
 } else {
  i5 = 0;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i4 = i3 + 320 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i3);
  i7 = HEAP32[i4 >> 2] | 0;
 } else {
  i7 = i6;
 }
 __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i1, i7, i5, 0, 1, 0, i2 | 0);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 92 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 76 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject11paddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 84 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23RenderNamedFlowFragmentC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore12RenderRegionC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEPNS_16RenderFlowThreadE(i1 | 0, i2, i5, 0);
 HEAP32[i1 >> 2] = H_BASE + 40;
 _memset(i1 + 164 | 0, 0, 20) | 0;
 i5 = i1 + 184 | 0;
 HEAP8[i5] = HEAP8[i5] & -8;
 HEAP32[i1 + 188 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23RenderNamedFlowFragmentC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore12RenderRegionC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEPNS_16RenderFlowThreadE(i1 | 0, i2, i5, 0);
 HEAP32[i1 >> 2] = H_BASE + 40;
 _memset(i1 + 164 | 0, 0, 20) | 0;
 i5 = i1 + 184 | 0;
 HEAP8[i5] = HEAP8[i5] & -8;
 HEAP32[i1 + 188 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 __ZN7WebCore11RenderBlock27selectionGapRectsForRepaintEPKNS_22RenderLayerModelObjectE(i5, i2, i3);
 i3 = i1;
 i2 = i5;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i5 + 16 | 0);
 __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i5 + 32 | 0);
 STACKTOP = i4;
 return;
}
function viiiiiiiiii___ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 __ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
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
function iiiiiii___ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iiiiiii___ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function viiii___ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function __ZNK7WebCore20RenderBoxModelObject12borderBottomEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 128 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderRightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 112 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject10borderLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 104 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiiii___ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject9borderTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 120 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function viiiii___ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i4 + 40 >> 2] | 0) >>> 30 & 1);
 return;
}
function iiiiii___ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent3endENS_11WritingModeENS_13TextDirectionE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i4 + 40 >> 2] | 0) >>> 30 & 1);
 return;
}
function __ZN7WebCore23RenderNamedFlowFragment12detachRegionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i1 + 184 | 0] & 2) == 0) {
    break;
   }
   __ZN7WebCore16RenderFlowThread33decrementAutoLogicalHeightRegionsEv(i3);
  }
 } while (0);
 __ZN7WebCore12RenderRegion12detachRegionEv(i2);
 return;
}
function iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
}
function iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 FUNCTION_TABLE_viiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
}
function viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiii___ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5_(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 936 >> 2] & 3](i1, i2, i3, i4, i5, 0);
 return;
}
function viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1;
 i1 = i2 + 44 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore9RenderBox17borderBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 i4 = HEAP32[i2 + 56 >> 2] | 0;
 i2 = i1;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i2 + 4 >> 2] = i4;
 return;
}
function viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3_(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore12RenderRegion43adjustRegionBoundsFromFlowThreadPortionRectERKNS_8IntPointERNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderRegion43adjustRegionBoundsFromFlowThreadPortionRectERKNS_8IntPointERNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viiii___ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 511](i1 | 0) | 0) ^ 1;
 return i2 | 0;
}
function viii___ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17RenderLineBoxList26dirtyLinesFromChangedChildEPNS_20RenderBoxModelObjectEPNS_12RenderObjectE(i1 + 104 | 0, i1 | 0, i2);
 return;
}
function viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore12RenderRegion29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderRegion29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE(i1 | 0, i2 | 0);
}
function iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore12RenderRegion24repaintFlowThreadContentERKNS_10LayoutRectEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderRegion24repaintFlowThreadContentERKNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore12RenderRegion23pageLogicalTopForOffsetENS_10LayoutUnitE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderRegion23pageLogicalTopForOffsetENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 & 1024 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (i2 & 2048 | 0) != 0;
 return i3 | 0;
}
function viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore15RenderBlockFlow14containsFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 12 >> 2] | 0) != 0;
 return i3 | 0;
}
function viii___ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore12RenderRegion16positionForPointERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderRegion16positionForPointERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore12RenderRegion21collectLayerFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS_10LayoutRectES9_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function viii___ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderRegion35logicalHeightOfAllFlowThreadContentEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderRegion35logicalHeightOfAllFlowThreadContentEv(i1 | 0, i2 | 0);
}
function dynCall_iiiifi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiifi[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv(i1 | 0, i2 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 abort(1);
}
function __ZN7WebCore23RenderNamedFlowFragment31incrementAutoLogicalHeightCountEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16RenderFlowThread33incrementAutoLogicalHeightRegionsEv(HEAP32[i1 + 116 >> 2] | 0);
 return;
}
function __ZN7WebCore23RenderNamedFlowFragment31decrementAutoLogicalHeightCountEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16RenderFlowThread33decrementAutoLogicalHeightRegionsEv(HEAP32[i1 + 116 >> 2] | 0);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0_(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv(i1 | 0, i2 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv(i1 | 0) | 0;
}
function vii___ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject12borderBeforeEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle17borderBeforeWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore11RenderBlock15requiresColumnsEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11RenderBlock15requiresColumnsEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderStartEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderStartWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderAfterEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderAfterWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vi___ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv(i1 | 0);
}
function vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17strokeBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17objectBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore20RenderBoxModelObject9borderEndEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle14borderEndWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function vii___ZNK7WebCore12RenderRegion16pageLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderRegion16pageLogicalWidthEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv(i1 | 0) | 0;
}
function vi___ZN7WebCore12RenderRegion29computePreferredLogicalWidthsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderRegion29computePreferredLogicalWidthsEv(i1 | 0);
}
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function vi___ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv(i1 | 0);
}
function __ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox22verticalScrollbarWidthEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function __ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox21hasRelativeDimensionsEv(i1 | 0) | 0;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 511](i1) | 0) == 0 | 0;
}
function vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox13setScrollLeftEi(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore11RenderBlock23addOverflowFromChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock23addOverflowFromChildrenEv(i1 | 0);
}
function vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function vi___ZN7WebCore12RenderRegion21willBeRemovedFromTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderRegion21willBeRemovedFromTreeEv(i1 | 0);
}
function __ZN7WebCore23RenderNamedFlowFragmentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23RenderNamedFlowFragmentD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox10offsetLeftEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock14paginationUnitEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock14paginationUnitEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock14hasLineIfEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock14hasLineIfEmptyEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock14firstLineBlockEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 127](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore11RenderBlock19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox9offsetTopEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock13hoverAncestorEv(i1 | 0) | 0;
}
function vi___ZN7WebCore15RenderBlockFlow15willBeDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow15willBeDestroyedEv(i1 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore11RenderBlock12avoidsFloatsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock12avoidsFloatsEv(i1 | 0) | 0;
}
function vi___ZN7WebCore12RenderRegion17installFlowThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderRegion17installFlowThreadEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore15RenderBlockFlow8hasLinesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15RenderBlockFlow8hasLinesEv(i1 | 0) | 0;
}
function vi___ZN7WebCore12RenderRegion16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderRegion16insertedIntoTreeEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock17updateFirstLetterEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock17updateFirstLetterEv(i1 | 0);
}
function __ZNK7WebCore9RenderBox13intrinsicSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function b5(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(5);
 return 0;
}
function ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12scrollHeightEv(i1 | 0) | 0;
}
function vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox18updateLogicalWidthEv(i1 | 0);
}
function vi___ZN7WebCore15RenderBlockFlow11deleteLinesEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow11deleteLinesEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock15calcColumnWidthEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox10scrollLeftEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox12offsetHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 56 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox12marginBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 68 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox11offsetWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 52 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox11marginRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 64 >> 2];
 return;
}
function __ZNK7WebCore23RenderNamedFlowFragment20hasAutoLogicalHeightEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 184 | 0] & 2) != 0 | 0;
}
function vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox15updateFromStyleEv(i1 | 0);
}
function b11(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(11);
}
function __ZNK7WebCore9RenderBox10marginLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 72 >> 2];
 return;
}
function ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox9scrollTopEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9RenderBox9marginTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 60 >> 2];
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b13(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(13);
 return 0;
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
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function b2(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(2);
 return 0;
}
function __ZNK7WebCore23RenderNamedFlowFragment15namedFlowThreadEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 116 >> 2] | 0;
}
function __ZN7WebCore11RenderBlock17scrollbarsChangedEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function vi___ZN7WebCore11RenderBlock6layoutEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock6layoutEv(i1 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper() {
 __ZN7WebCore9RenderBox15createInlineBoxEv();
}
function __ZN7WebCore12RenderRegion43expandToEncompassFlowThreadContentsIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
 return 0;
}
function __ZNK7WebCore13RenderElement14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 28 >> 2] | 0;
}
function __ZNK7WebCore13RenderElement13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 32 >> 2] | 0;
}
function __ZNK7WebCore23RenderNamedFlowFragment25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 511](i2 | 0) | 0;
}
function __ZNK7WebCore23RenderNamedFlowFragment10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 8 | 0;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b14(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(14);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderRegion24canHaveGeneratedChildrenEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject23isTextControlInnerBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGViewportContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGResourceContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLFractionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderScrollbarPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isStretchingChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isSVGHiddenContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isRenderMathMLFencedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject23setNeedsTransformUpdateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12RenderObject21needsBoundariesUpdateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSnapshottedPlugInEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSVGResourceFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isFileUploadControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
 return 0;
}
function __ZNK7WebCore12RenderObject18isSVGForeignObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLMathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFullScreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderRegion17isRenderRegionSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isSVGGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isRenderMathMLRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderTableColEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderSVGBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isEmbeddedObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderRegion15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderRegion14isRenderRegionEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject14isTableSectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableCaptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isSVGContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderIFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject13isTextControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSVGTextPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isRenderImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isListMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTextFieldEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isSVGInlineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9RenderBox14hasControlClipEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTextAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGShapeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isListItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFrameSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFieldsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isRubyRunEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isReplicaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isCounterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function __ZNK7WebCore12RenderObject8isWidgetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isCanvasEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore9RenderBox14stopAutoscrollEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject7isVideoEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMeterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMediaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject6lengthEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject6isRubyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b6(i1) {
 i1 = i1 | 0;
 abort(6);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE__wrapper,b0,viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b0,viiiii___ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper,b0,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b0,viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b0,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b0,viiiii___ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper,b0,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b0,viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiii = [b1,b1,viiiiiiiiii___ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE__wrapper,b1];
  var FUNCTION_TABLE_iiiifi = [b2,b2,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,vi___ZN7WebCore12RenderRegion21willBeRemovedFromTreeEv__wrapper,b3,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b3,__ZN7WebCore12RenderObject17updateFromElementEv,b3,vi___ZN7WebCore12RenderRegion29computePreferredLogicalWidthsEv__wrapper,b3,vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper,b3,vi___ZN7WebCore15RenderBlockFlow11deleteLinesEv__wrapper,b3,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b3,__ZN7WebCore23RenderNamedFlowFragmentD0Ev,b3,vi___ZN7WebCore11RenderBlock23addOverflowFromChildrenEv__wrapper,b3,__ZN7WebCore23RenderNamedFlowFragment12detachRegionEv,b3,__ZN7WebCore9RenderBox14stopAutoscrollEv,b3,vi___ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv__wrapper,b3,vi___ZN7WebCore15RenderBlockFlow15willBeDestroyedEv__wrapper,b3,__ZN7WebCore23RenderNamedFlowFragment19updateLogicalHeightEv
  ,b3,vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper,b3,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b3,__ZN7WebCore23RenderNamedFlowFragment12attachRegionEv,b3,vi___ZN7WebCore12RenderRegion17installFlowThreadEv__wrapper,b3,vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper,b3,vi___ZN7WebCore12RenderRegion16insertedIntoTreeEv__wrapper,b3,vi___ZN7WebCore11RenderBlock6layoutEv__wrapper,b3,vi___ZN7WebCore11RenderBlock17updateFirstLetterEv__wrapper,b3,__ZN7WebCore12RenderRegion43expandToEncompassFlowThreadContentsIfNeededEv,b3,__ZN7WebCore23RenderNamedFlowFragmentD2Ev,b3,vi___ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv__wrapper,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b4,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b4,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b4,__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b4,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b4,__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv,b4,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b4,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b4,vii___ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv__wrapper,b4,vii___ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b4,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b4,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper,b4,vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper
  ,b4,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b4,__ZNK7WebCore9RenderBox9marginTopEv,b4,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b4,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper,b4,vii___ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb__wrapper,b4,vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper,b4,vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper,b4,__ZNK7WebCore23RenderNamedFlowFragment17pageLogicalHeightEv,b4,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b4,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b4,__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv,b4,vii___ZNK7WebCore12RenderRegion16pageLogicalWidthEv__wrapper,b4,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper
  ,b4,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b4,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b4,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b4,__ZNK7WebCore9RenderBox11marginRightEv,b4,__ZNK7WebCore23RenderNamedFlowFragment18visualOverflowRectEv,b4,__ZNK7WebCore9RenderBox11offsetWidthEv,b4,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b4,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b4,vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b4,vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper,b4,vii___ZNK7WebCore12RenderRegion35logicalHeightOfAllFlowThreadContentEv__wrapper,b4,__ZNK7WebCore9RenderBox10marginLeftEv,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv
  ,b4,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZNK7WebCore9RenderBox17borderBoundingBoxEv,b4,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b4,__ZNK7WebCore9RenderBox12marginBottomEv,b4,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b4,__ZNK7WebCore9RenderBox12offsetHeightEv,b4,vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiiiiii = [b5,b5,iiiiiii___ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5,iiiiiii___ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5,iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5];
  var FUNCTION_TABLE_ii = [b6,b6,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b6,ii___ZNK7WebCore11RenderBlock14firstLineBlockEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b6,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b6,__ZNK7WebCore12RenderObject10isRubyTextEv,b6,__ZNK7WebCore12RenderObject6isRubyEv,b6,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b6,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b6,ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper,b6,ii___ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv__wrapper,b6,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b6,__ZNK7WebCore12RenderObject14isTableCaptionEv,b6,__ZNK7WebCore12RenderObject8isWidgetEv,b6,__ZNK7WebCore12RenderObject11isTextFieldEv
  ,b6,__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv,b6,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b6,__ZNK7WebCore12RenderObject10isMenuListEv,b6,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b6,__ZNK7WebCore12RenderObject9isSVGRootEv,b6,__ZNK7WebCore12RenderRegion17isRenderRegionSetEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b6,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b6,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b6,__ZNK7WebCore12RenderObject7isMeterEv,b6,__ZNK7WebCore12RenderObject14isSVGContainerEv,b6,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b6,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b6,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv
  ,b6,__ZNK7WebCore12RenderObject7isQuoteEv,b6,__ZNK7WebCore12RenderObject10isListItemEv,b6,__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b6,__ZNK7WebCore12RenderObject10isSVGImageEv,b6,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b6,__ZNK7WebCore12RenderRegion14isRenderRegionEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b6,__ZNK7WebCore12RenderObject16isRenderTableColEv,b6,__ZNK7WebCore12RenderObject7isVideoEv,b6,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b6,__ZNK7WebCore12RenderObject13isCombineTextEv,b6,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b6,__ZNK7WebCore12RenderObject5isWBREv,b6,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv
  ,b6,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b6,__ZNK7WebCore13RenderElement14firstChildSlowEv,b6,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b6,ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b6,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b6,__ZNK7WebCore15RenderBlockFlow14containsFloatsEv,b6,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b6,__ZNK7WebCore12RenderObject7isFrameEv,b6,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b6,ii___ZNK7WebCore11RenderBlock14paginationUnitEv__wrapper,b6,ii___ZNK7WebCore15RenderBlockFlow8hasLinesEv__wrapper,b6,ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper,b6,__ZNK7WebCore12RenderObject9isReplicaEv
  ,b6,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b6,__ZNK7WebCore23RenderNamedFlowFragment25isRenderNamedFlowFragmentEv,b6,__ZNK7WebCore9RenderBox14hasControlClipEv,b6,__ZNK7WebCore23RenderNamedFlowFragment10renderNameEv,b6,__ZNK7WebCore12RenderObject7isMediaEv,b6,__ZNK7WebCore12RenderObject10isSVGShapeEv,b6,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b6,__ZNK7WebCore11RenderBlock19virtualContinuationEv,b6,__ZNK7WebCore12RenderObject14isRenderButtonEv,b6,__ZNK7WebCore12RenderObject8isSliderEv,b6,ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper,b6,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b6,ii___ZNK7WebCore11RenderBlock12avoidsFloatsEv__wrapper,b6,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b6,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper
  ,b6,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b6,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b6,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSliderThumbEv,b6,__ZNK7WebCore12RenderObject13isTextControlEv,b6,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b6,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b6,__ZNK7WebCore12RenderObject9isSVGTextEv,b6,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b6,__ZNK7WebCore12RenderObject10isProgressEv,b6,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b6,__ZNK7WebCore12RenderRegion24canHaveGeneratedChildrenEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b6,__ZNK7WebCore12RenderRegion15canHaveChildrenEv,b6,__ZNK7WebCore12RenderObject11isTableCellEv
  ,b6,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b6,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b6,__ZNK7WebCore12RenderObject12isRenderGridEv,b6,__ZNK7WebCore12RenderObject9isListBoxEv,b6,__ZNK7WebCore12RenderObject9isSVGPathEv,b6,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b6,__ZNK7WebCore13RenderElement13lastChildSlowEv,b6,__ZNK7WebCore12RenderObject13isRenderImageEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b6,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b6,ii___ZNK7WebCore11RenderBlock14hasLineIfEmptyEv__wrapper,b6,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b6,__ZNK7WebCore12RenderObject6lengthEv,b6,__ZNK7WebCore12RenderObject10isTableRowEv,b6,__ZNK7WebCore12RenderObject10isFrameSetEv
  ,b6,__ZNK7WebCore9RenderBox13requiresLayerEv,b6,__ZNK7WebCore12RenderObject10isFieldsetEv,b6,__ZNK7WebCore12RenderObject11isSVGInlineEv,b6,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b6,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b6,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b6,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b6,__ZNK7WebCore12RenderObject9isRubyRunEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b6,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b6,__ZNK7WebCore12RenderObject10isRubyBaseEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b6,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper
  ,b6,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b6,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b6,__ZNK7WebCore12RenderObject10isTextAreaEv,b6,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b6,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b6,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b6,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b6,__ZNK7WebCore12RenderObject7isImageEv,b6,__ZNK7WebCore23RenderNamedFlowFragment20hasAutoLogicalHeightEv,b6,__ZNK7WebCore12RenderObject9isCounterEv,b6,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b6,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b6,__ZNK7WebCore12RenderObject8isCanvasEv
  ,b6,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b6,ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper,b6,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b6,__ZNK7WebCore12RenderObject12isListMarkerEv,b6,__ZNK7WebCore12RenderObject7isEmptyEv,b6,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b6,__ZNK7WebCore12RenderObject7isTableEv,b6,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject14isTableSectionEv,b6,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b7,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b7,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b7,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b7,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,viii___ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper,b8,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b8,viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b8,viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb__wrapper,b8,viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b8,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b8,viii___ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore23RenderNamedFlowFragment14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b8,viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b8,__ZN7WebCore11RenderBlock17scrollbarsChangedEbb,b8,viii___ZN7WebCore12RenderRegion43adjustRegionBoundsFromFlowThreadPortionRectERKNS_8IntPointERNS_7IntRectE__wrapper,b8,__ZN7WebCore23RenderNamedFlowFragmentC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE
  ,b8,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE,b8,viii___ZN7WebCore12RenderRegion24repaintFlowThreadContentERKNS_10LayoutRectEb__wrapper,b8,__ZN7WebCore23RenderNamedFlowFragment11layoutBlockEbNS_10LayoutUnitE,b8,viii___ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b8,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b8,viii___ZN7WebCore12RenderRegion16positionForPointERKNS_11LayoutPointE__wrapper,b8,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b8,viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper,b8,viii___ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b8,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b8,viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b8,viii___ZNK7WebCore12RenderRegion23pageLogicalTopForOffsetENS_10LayoutUnitE__wrapper,b8,viii___ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb__wrapper,b8,viii___ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2___wrapper
  ,b8,viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper,b8,viii___ZNK7WebCore12RenderRegion29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper,b8,viii___ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_v = [b9,b9,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b9];
  var FUNCTION_TABLE_iiiii = [b10,b10,iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper,b10,iiiii___ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE__wrapper,b10,b10,b10];
  var FUNCTION_TABLE_viiiiii = [b11,b11,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE__wrapper,b12,iii___ZNK7WebCore11RenderBlock15requiresColumnsEi__wrapper,b12,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b12,iii___ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE__wrapper,b12,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b12,iii___ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb__wrapper,b12,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b12,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b12,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b12,__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb,b12,b12,b12,b12,b12,b12,b12,b12
  ,b12,b12,b12];
  var FUNCTION_TABLE_iiiiii = [b13,b13,iiiiii___ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b13,iiiiii___ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE__wrapper,b13,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b13];
  var FUNCTION_TABLE_viiii = [b14,b14,viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper,b14,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b14,viiii___ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b14,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b14,__ZN7WebCore12RenderRegion21collectLayerFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS_10LayoutRectES9_,b14,__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_,b14,viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b14,viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b14,viiii___ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb__wrapper,b14,__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b14,viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper,b14,b14
  ,b14,b14,b14];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iiiifi: dynCall_iiiifi, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iiiifi": invoke_iiiifi, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore12RenderRegionE": __ZTVN7WebCore12RenderRegionE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","__ZNK7WebCore12RenderRegion17isRenderRegionSetEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore23RenderNamedFlowFragment16checkRegionStyleEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZN7WebCore23RenderNamedFlowFragment22setObjectStyleInRegionEPNS_12RenderObjectEN3WTF10PassRefPtrINS_11RenderStyleEEEb","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZNK7WebCore23RenderNamedFlowFragment15namedFlowThreadEv","__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZNK7WebCore12RenderObject7isMeterEv","__ZN7WebCore11RenderStyle13setFlowThreadERKN3WTF12AtomicStringE","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZN7WebCore10BorderDataD2Ev","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore12RenderRegion21collectLayerFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS_10LayoutRectES9_","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZN7WebCore23RenderNamedFlowFragment11createStyleERKNS_11RenderStyleE","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZN7WebCore11RenderStyle15setRegionThreadERKN3WTF12AtomicStringE","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZN7WebCore23RenderNamedFlowFragment27setRegionObjectsRegionStyleEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZN7WebCore23RenderNamedFlowFragment14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore23RenderNamedFlowFragment17pageLogicalHeightEv","__ZNK7WebCore15RenderBlockFlow14containsFloatsEv","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv","__ZN7WebCore23RenderNamedFlowFragment24clearObjectStyleInRegionEPKNS_12RenderObjectE","__ZN7WebCore23RenderNamedFlowFragmentD0Ev","__ZN7WebCore23RenderNamedFlowFragment36updateRegionHasAutoLogicalHeightFlagEv","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZN7WebCore23RenderNamedFlowFragment31decrementAutoLogicalHeightCountEv","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore23RenderNamedFlowFragment12detachRegionEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZN7WebCore11RenderBlock17scrollbarsChangedEbb","__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZNK7WebCore23RenderNamedFlowFragment10renderNameEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore23RenderNamedFlowFragment27shouldHaveAutoLogicalHeightEv","__ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES4_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN7WebCore23RenderNamedFlowFragment12attachRegionEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZN7WebCore23RenderNamedFlowFragmentC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderRegion15canHaveChildrenEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore23RenderNamedFlowFragment20hasAutoLogicalHeightEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore23RenderNamedFlowFragment25isRenderNamedFlowFragmentEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore12RenderRegion24canHaveGeneratedChildrenEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","__ZN7WebCore11RenderStyle14setShapeInsideEN3WTF10PassRefPtrINS_10ShapeValueEEE","_memset","__ZNK7WebCore12RenderObject11isTableCellEv","_memcpy","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZN7WebCore23RenderNamedFlowFragment11layoutBlockEbNS_10LayoutUnitE","__ZN7WebCore23RenderNamedFlowFragment33restoreRegionObjectsOriginalStyleEv","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore11RenderBlock19virtualContinuationEv","__ZN7WebCore23RenderNamedFlowFragment28computeChildrenStyleInRegionEPKNS_13RenderElementE","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZN3WTF7HashMapIPKN7WebCore12RenderObjectENS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS9_IS6_EEE4findERKS4_","__ZNK7WebCore23RenderNamedFlowFragment18visualOverflowRectEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderRegion14isRenderRegionEv","__ZN7WebCore23RenderNamedFlowFragment31incrementAutoLogicalHeightCountEv","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZN7WebCore23RenderNamedFlowFragment20computeStyleInRegionEPKNS_12RenderObjectE","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore23RenderNamedFlowFragment20maxPageLogicalHeightEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZN7WebCore23RenderNamedFlowFragment19updateLogicalHeightEv","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZN7WebCore12RenderRegion43expandToEncompassFlowThreadContentsIfNeededEv","__ZN7WebCore23RenderNamedFlowFragmentD2Ev","__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS1_23RenderNamedFlowFragment21ObjectRegionStyleInfoEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject7isTableEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE"]
