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

#if ENABLE(SPEECH_SYNTHESIS)

#include "JSSpeechSynthesisEvent.h"

#include "SpeechSynthesisEvent.h"
#include "URL.h"
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSpeechSynthesisEventTableValues[] =
{
    { "charIndex", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSpeechSynthesisEventCharIndex), (intptr_t)0 },
    { "elapsedTime", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSpeechSynthesisEventElapsedTime), (intptr_t)0 },
    { "name", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSpeechSynthesisEventName), (intptr_t)0 },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSpeechSynthesisEventConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSpeechSynthesisEventTable = { 9, 7, JSSpeechSynthesisEventTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSSpeechSynthesisEventConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSpeechSynthesisEventConstructorTable = { 1, 0, JSSpeechSynthesisEventConstructorTableValues, 0 };
const ClassInfo JSSpeechSynthesisEventConstructor::s_info = { "SpeechSynthesisEventConstructor", &Base::s_info, &JSSpeechSynthesisEventConstructorTable, 0, CREATE_METHOD_TABLE(JSSpeechSynthesisEventConstructor) };

JSSpeechSynthesisEventConstructor::JSSpeechSynthesisEventConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSSpeechSynthesisEventConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSSpeechSynthesisEventPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSSpeechSynthesisEventConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSSpeechSynthesisEventConstructor, JSDOMWrapper>(exec, JSSpeechSynthesisEventConstructorTable, jsCast<JSSpeechSynthesisEventConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSSpeechSynthesisEventPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSpeechSynthesisEventPrototypeTable = { 1, 0, JSSpeechSynthesisEventPrototypeTableValues, 0 };
const ClassInfo JSSpeechSynthesisEventPrototype::s_info = { "SpeechSynthesisEventPrototype", &Base::s_info, &JSSpeechSynthesisEventPrototypeTable, 0, CREATE_METHOD_TABLE(JSSpeechSynthesisEventPrototype) };

JSObject* JSSpeechSynthesisEventPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSpeechSynthesisEvent>(vm, globalObject);
}

const ClassInfo JSSpeechSynthesisEvent::s_info = { "SpeechSynthesisEvent", &Base::s_info, &JSSpeechSynthesisEventTable, 0 , CREATE_METHOD_TABLE(JSSpeechSynthesisEvent) };

JSSpeechSynthesisEvent::JSSpeechSynthesisEvent(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SpeechSynthesisEvent> impl)
    : JSEvent(structure, globalObject, impl)
{
}

void JSSpeechSynthesisEvent::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSpeechSynthesisEvent::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSpeechSynthesisEventPrototype::create(vm, globalObject, JSSpeechSynthesisEventPrototype::createStructure(vm, globalObject, JSEventPrototype::self(vm, globalObject)));
}

bool JSSpeechSynthesisEvent::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSpeechSynthesisEvent* thisObject = jsCast<JSSpeechSynthesisEvent*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSpeechSynthesisEvent, Base>(exec, JSSpeechSynthesisEventTable, thisObject, propertyName, slot);
}

EncodedJSValue jsSpeechSynthesisEventCharIndex(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSpeechSynthesisEvent* castedThis = jsDynamicCast<JSSpeechSynthesisEvent*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SpeechSynthesisEvent& impl = castedThis->impl();
    JSValue result = jsNumber(impl.charIndex());
    return JSValue::encode(result);
}


EncodedJSValue jsSpeechSynthesisEventElapsedTime(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSpeechSynthesisEvent* castedThis = jsDynamicCast<JSSpeechSynthesisEvent*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SpeechSynthesisEvent& impl = castedThis->impl();
    JSValue result = jsNumber(impl.elapsedTime());
    return JSValue::encode(result);
}


EncodedJSValue jsSpeechSynthesisEventName(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSpeechSynthesisEvent* castedThis = jsDynamicCast<JSSpeechSynthesisEvent*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SpeechSynthesisEvent& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.name());
    return JSValue::encode(result);
}


EncodedJSValue jsSpeechSynthesisEventConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSSpeechSynthesisEvent* domObject = jsDynamicCast<JSSpeechSynthesisEvent*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSSpeechSynthesisEvent::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSSpeechSynthesisEvent::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSSpeechSynthesisEventConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}


}

#endif // ENABLE(SPEECH_SYNTHESIS)
