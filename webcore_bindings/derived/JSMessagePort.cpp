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
#include "JSMessagePort.h"

#include "Event.h"
#include "EventListener.h"
#include "ExceptionCode.h"
#include "JSDOMBinding.h"
#include "JSEvent.h"
#include "JSEventListener.h"
#include "MessagePort.h"
#include <runtime/Error.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSMessagePortTableValues[] =
{
    { "onmessage", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsMessagePortOnmessage), (intptr_t)setJSMessagePortOnmessage },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsMessagePortConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSMessagePortTable = { 4, 3, JSMessagePortTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSMessagePortConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSMessagePortConstructorTable = { 1, 0, JSMessagePortConstructorTableValues, 0 };
static const HashTable& getJSMessagePortConstructorTable(ExecState* exec)
{
    return getHashTableForGlobalData(exec->vm(), JSMessagePortConstructorTable);
}

const ClassInfo JSMessagePortConstructor::s_info = { "MessagePortConstructor", &Base::s_info, 0, getJSMessagePortConstructorTable, CREATE_METHOD_TABLE(JSMessagePortConstructor) };

JSMessagePortConstructor::JSMessagePortConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSMessagePortConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSMessagePortPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSMessagePortConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSMessagePortConstructor, JSDOMWrapper>(exec, getJSMessagePortConstructorTable(exec), jsCast<JSMessagePortConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSMessagePortPrototypeTableValues[] =
{
    { "postMessage", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsMessagePortPrototypeFunctionPostMessage), (intptr_t)1 },
    { "start", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsMessagePortPrototypeFunctionStart), (intptr_t)0 },
    { "close", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsMessagePortPrototypeFunctionClose), (intptr_t)0 },
    { "addEventListener", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsMessagePortPrototypeFunctionAddEventListener), (intptr_t)2 },
    { "removeEventListener", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsMessagePortPrototypeFunctionRemoveEventListener), (intptr_t)2 },
    { "dispatchEvent", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsMessagePortPrototypeFunctionDispatchEvent), (intptr_t)1 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSMessagePortPrototypeTable = { 17, 15, JSMessagePortPrototypeTableValues, 0 };
static const HashTable& getJSMessagePortPrototypeTable(ExecState* exec)
{
    return getHashTableForGlobalData(exec->vm(), JSMessagePortPrototypeTable);
}

const ClassInfo JSMessagePortPrototype::s_info = { "MessagePortPrototype", &Base::s_info, 0, getJSMessagePortPrototypeTable, CREATE_METHOD_TABLE(JSMessagePortPrototype) };

JSObject* JSMessagePortPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSMessagePort>(vm, globalObject);
}

bool JSMessagePortPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSMessagePortPrototype* thisObject = jsCast<JSMessagePortPrototype*>(object);
    return getStaticFunctionSlot<JSObject>(exec, getJSMessagePortPrototypeTable(exec), thisObject, propertyName, slot);
}

static const HashTable& getJSMessagePortTable(ExecState* exec)
{
    return getHashTableForGlobalData(exec->vm(), JSMessagePortTable);
}

const ClassInfo JSMessagePort::s_info = { "MessagePort", &Base::s_info, 0, getJSMessagePortTable , CREATE_METHOD_TABLE(JSMessagePort) };

JSMessagePort::JSMessagePort(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<MessagePort> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSMessagePort::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSMessagePort::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSMessagePortPrototype::create(vm, globalObject, JSMessagePortPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSMessagePort::destroy(JSC::JSCell* cell)
{
    JSMessagePort* thisObject = static_cast<JSMessagePort*>(cell);
    thisObject->JSMessagePort::~JSMessagePort();
}

JSMessagePort::~JSMessagePort()
{
    releaseImplIfNotNull();
}

bool JSMessagePort::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSMessagePort* thisObject = jsCast<JSMessagePort*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSMessagePort, Base>(exec, getJSMessagePortTable(exec), thisObject, propertyName, slot);
}

EncodedJSValue jsMessagePortOnmessage(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSMessagePort* castedThis = jsDynamicCast<JSMessagePort*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    MessagePort& impl = castedThis->impl();
    if (EventListener* listener = impl.onmessage()) {
        if (const JSEventListener* jsListener = JSEventListener::cast(listener)) {
            if (JSObject* jsFunction = jsListener->jsFunction(impl.scriptExecutionContext()))
                return JSValue::encode(jsFunction);
        }
    }
    return JSValue::encode(jsNull());
}


EncodedJSValue jsMessagePortConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSMessagePort* domObject = jsDynamicCast<JSMessagePort*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSMessagePort::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSMessagePort::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSMessagePort* thisObject = jsCast<JSMessagePort*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSMessagePort, Base>(exec, propertyName, value, getJSMessagePortTable(exec), thisObject, slot);
}

void setJSMessagePortOnmessage(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSMessagePort* castedThis = jsDynamicCast<JSMessagePort*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    UNUSED_PARAM(exec);
    MessagePort& impl = castedThis->impl();
    impl.setOnmessage(createJSAttributeEventListener(exec, value, castedThis));
}


JSValue JSMessagePort::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSMessagePortConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

EncodedJSValue JSC_HOST_CALL jsMessagePortPrototypeFunctionPostMessage(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSMessagePort* castedThis = jsDynamicCast<JSMessagePort*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSMessagePort::info());
    return JSValue::encode(castedThis->postMessage(exec));
}

EncodedJSValue JSC_HOST_CALL jsMessagePortPrototypeFunctionStart(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSMessagePort* castedThis = jsDynamicCast<JSMessagePort*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSMessagePort::info());
    MessagePort& impl = castedThis->impl();
    impl.start();
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsMessagePortPrototypeFunctionClose(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSMessagePort* castedThis = jsDynamicCast<JSMessagePort*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSMessagePort::info());
    MessagePort& impl = castedThis->impl();
    impl.close();
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsMessagePortPrototypeFunctionAddEventListener(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSMessagePort* castedThis = jsDynamicCast<JSMessagePort*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSMessagePort::info());
    MessagePort& impl = castedThis->impl();
    JSValue listener = exec->argument(1);
    if (!listener.isObject())
        return JSValue::encode(jsUndefined());
    impl.addEventListener(exec->argument(0).toString(exec)->value(exec), JSEventListener::create(asObject(listener), castedThis, false, currentWorld(exec)), exec->argument(2).toBoolean(exec));
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsMessagePortPrototypeFunctionRemoveEventListener(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSMessagePort* castedThis = jsDynamicCast<JSMessagePort*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSMessagePort::info());
    MessagePort& impl = castedThis->impl();
    JSValue listener = exec->argument(1);
    if (!listener.isObject())
        return JSValue::encode(jsUndefined());
    impl.removeEventListener(exec->argument(0).toString(exec)->value(exec), JSEventListener::create(asObject(listener), castedThis, false, currentWorld(exec)).get(), exec->argument(2).toBoolean(exec));
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsMessagePortPrototypeFunctionDispatchEvent(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSMessagePort* castedThis = jsDynamicCast<JSMessagePort*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSMessagePort::info());
    MessagePort& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    Event* evt(toEvent(exec->argument(0)));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = jsBoolean(impl.dispatchEvent(evt, ec));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

static inline bool isObservable(JSMessagePort* jsMessagePort)
{
    if (jsMessagePort->hasCustomProperties())
        return true;
    if (jsMessagePort->impl().hasEventListeners())
        return true;
    return false;
}

bool JSMessagePortOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    JSMessagePort* jsMessagePort = jsCast<JSMessagePort*>(handle.get().asCell());
    if (jsMessagePort->impl().hasPendingActivity())
        return true;
    if (jsMessagePort->impl().isFiringEventListeners())
        return true;
    if (!isObservable(jsMessagePort))
        return false;
    MessagePort* root = &jsMessagePort->impl();
    return visitor.containsOpaqueRoot(root);
}

void JSMessagePortOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSMessagePort* jsMessagePort = jsCast<JSMessagePort*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsMessagePort->impl(), jsMessagePort);
    jsMessagePort->releaseImpl();
}

#if ENABLE(BINDING_INTEGRITY)
#if PLATFORM(WIN)
#pragma warning(disable: 4483)
extern "C" { extern void (*const __identifier("??_7MessagePort@WebCore@@6B@")[])(); }
#else
extern "C" { extern void* _ZTVN7WebCore11MessagePortE[]; }
#endif
#endif
JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, MessagePort* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSMessagePort>(exec, impl))
        return result;

#if ENABLE(BINDING_INTEGRITY)
    void* actualVTablePointer = *(reinterpret_cast<void**>(impl));
#if PLATFORM(WIN)
    void* expectedVTablePointer = reinterpret_cast<void*>(__identifier("??_7MessagePort@WebCore@@6B@"));
#else
    void* expectedVTablePointer = &_ZTVN7WebCore11MessagePortE[2];
#if COMPILER(CLANG)
    // If this fails MessagePort does not have a vtable, so you need to add the
    // ImplementationLacksVTable attribute to the interface definition
    COMPILE_ASSERT(__is_polymorphic(MessagePort), MessagePort_is_not_polymorphic);
#endif
#endif
    // If you hit this assertion you either have a use after free bug, or
    // MessagePort has subclasses. If MessagePort has subclasses that get passed
    // to toJS() we currently require MessagePort you to opt out of binding hardening
    // by adding the SkipVTableValidation attribute to the interface IDL definition
    RELEASE_ASSERT(actualVTablePointer == expectedVTablePointer);
#endif
    ReportMemoryCost<MessagePort>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSMessagePort>(exec, globalObject, impl);
}

MessagePort* toMessagePort(JSC::JSValue value)
{
    return value.inherits(JSMessagePort::info()) ? &jsCast<JSMessagePort*>(value)->impl() : 0;
}

}
