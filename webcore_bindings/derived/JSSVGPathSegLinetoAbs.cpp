/*
    This file is part of the WebKit open source project.
    This file has been generated by generate-bindings.pl. DO NOT MODIFY!

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public License
    along with this library; see the file COPYING.LIB.  If not, write to
    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
    Boston, MA 02110-1301, USA.
*/

#include "config.h"

#if ENABLE(SVG)

#include "JSSVGPathSegLinetoAbs.h"

#include "SVGPathSegLinetoAbs.h"
#include <runtime/Error.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSVGPathSegLinetoAbsTableValues[] =
{
    { "x", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGPathSegLinetoAbsX), (intptr_t)setJSSVGPathSegLinetoAbsX },
    { "y", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGPathSegLinetoAbsY), (intptr_t)setJSSVGPathSegLinetoAbsY },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGPathSegLinetoAbsConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGPathSegLinetoAbsTable = { 9, 7, JSSVGPathSegLinetoAbsTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSSVGPathSegLinetoAbsConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGPathSegLinetoAbsConstructorTable = { 1, 0, JSSVGPathSegLinetoAbsConstructorTableValues, 0 };
const ClassInfo JSSVGPathSegLinetoAbsConstructor::s_info = { "SVGPathSegLinetoAbsConstructor", &Base::s_info, &JSSVGPathSegLinetoAbsConstructorTable, 0, CREATE_METHOD_TABLE(JSSVGPathSegLinetoAbsConstructor) };

JSSVGPathSegLinetoAbsConstructor::JSSVGPathSegLinetoAbsConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSSVGPathSegLinetoAbsConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSSVGPathSegLinetoAbsPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSSVGPathSegLinetoAbsConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSSVGPathSegLinetoAbsConstructor, JSDOMWrapper>(exec, JSSVGPathSegLinetoAbsConstructorTable, jsCast<JSSVGPathSegLinetoAbsConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSSVGPathSegLinetoAbsPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGPathSegLinetoAbsPrototypeTable = { 1, 0, JSSVGPathSegLinetoAbsPrototypeTableValues, 0 };
const ClassInfo JSSVGPathSegLinetoAbsPrototype::s_info = { "SVGPathSegLinetoAbsPrototype", &Base::s_info, &JSSVGPathSegLinetoAbsPrototypeTable, 0, CREATE_METHOD_TABLE(JSSVGPathSegLinetoAbsPrototype) };

JSObject* JSSVGPathSegLinetoAbsPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSVGPathSegLinetoAbs>(vm, globalObject);
}

const ClassInfo JSSVGPathSegLinetoAbs::s_info = { "SVGPathSegLinetoAbs", &Base::s_info, &JSSVGPathSegLinetoAbsTable, 0 , CREATE_METHOD_TABLE(JSSVGPathSegLinetoAbs) };

JSSVGPathSegLinetoAbs::JSSVGPathSegLinetoAbs(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SVGPathSegLinetoAbs> impl)
    : JSSVGPathSeg(structure, globalObject, impl)
{
}

void JSSVGPathSegLinetoAbs::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSVGPathSegLinetoAbs::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSVGPathSegLinetoAbsPrototype::create(vm, globalObject, JSSVGPathSegLinetoAbsPrototype::createStructure(vm, globalObject, JSSVGPathSegPrototype::self(vm, globalObject)));
}

bool JSSVGPathSegLinetoAbs::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSVGPathSegLinetoAbs* thisObject = jsCast<JSSVGPathSegLinetoAbs*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSVGPathSegLinetoAbs, Base>(exec, JSSVGPathSegLinetoAbsTable, thisObject, propertyName, slot);
}

EncodedJSValue jsSVGPathSegLinetoAbsX(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGPathSegLinetoAbs* castedThis = jsDynamicCast<JSSVGPathSegLinetoAbs*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGPathSegLinetoAbs& impl = castedThis->impl();
    JSValue result = jsNumber(impl.x());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGPathSegLinetoAbsY(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGPathSegLinetoAbs* castedThis = jsDynamicCast<JSSVGPathSegLinetoAbs*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGPathSegLinetoAbs& impl = castedThis->impl();
    JSValue result = jsNumber(impl.y());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGPathSegLinetoAbsConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSSVGPathSegLinetoAbs* domObject = jsDynamicCast<JSSVGPathSegLinetoAbs*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSSVGPathSegLinetoAbs::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSSVGPathSegLinetoAbs::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSSVGPathSegLinetoAbs* thisObject = jsCast<JSSVGPathSegLinetoAbs*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSSVGPathSegLinetoAbs, Base>(exec, propertyName, value, JSSVGPathSegLinetoAbsTable, thisObject, slot);
}

void setJSSVGPathSegLinetoAbsX(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGPathSegLinetoAbs* castedThis = jsDynamicCast<JSSVGPathSegLinetoAbs*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGPathSegLinetoAbs& impl = castedThis->impl();
    float nativeValue(value.toFloat(exec));
    if (exec->hadException())
        return;
    impl.setX(nativeValue);
}


void setJSSVGPathSegLinetoAbsY(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGPathSegLinetoAbs* castedThis = jsDynamicCast<JSSVGPathSegLinetoAbs*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGPathSegLinetoAbs& impl = castedThis->impl();
    float nativeValue(value.toFloat(exec));
    if (exec->hadException())
        return;
    impl.setY(nativeValue);
}


JSValue JSSVGPathSegLinetoAbs::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSSVGPathSegLinetoAbsConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}


}

#endif // ENABLE(SVG)
