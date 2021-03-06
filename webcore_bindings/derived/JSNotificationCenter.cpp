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

#if ENABLE(LEGACY_NOTIFICATIONS)

#include "JSNotificationCenter.h"

#include "ExceptionCode.h"
#include "JSDOMBinding.h"
#include "JSNotification.h"
#include "JSVoidCallback.h"
#include "Notification.h"
#include "NotificationCenter.h"
#include <runtime/Error.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table for prototype */

static const HashTableValue JSNotificationCenterPrototypeTableValues[] =
{
    { "createNotification", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsNotificationCenterPrototypeFunctionCreateNotification), (intptr_t)3 },
    { "checkPermission", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsNotificationCenterPrototypeFunctionCheckPermission), (intptr_t)0 },
    { "requestPermission", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsNotificationCenterPrototypeFunctionRequestPermission), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSNotificationCenterPrototypeTable = { 8, 7, JSNotificationCenterPrototypeTableValues, 0 };
const ClassInfo JSNotificationCenterPrototype::s_info = { "NotificationCenterPrototype", &Base::s_info, &JSNotificationCenterPrototypeTable, 0, CREATE_METHOD_TABLE(JSNotificationCenterPrototype) };

JSObject* JSNotificationCenterPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSNotificationCenter>(vm, globalObject);
}

bool JSNotificationCenterPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSNotificationCenterPrototype* thisObject = jsCast<JSNotificationCenterPrototype*>(object);
    return getStaticFunctionSlot<JSObject>(exec, JSNotificationCenterPrototypeTable, thisObject, propertyName, slot);
}

const ClassInfo JSNotificationCenter::s_info = { "NotificationCenter", &Base::s_info, 0, 0 , CREATE_METHOD_TABLE(JSNotificationCenter) };

JSNotificationCenter::JSNotificationCenter(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<NotificationCenter> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSNotificationCenter::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSNotificationCenter::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSNotificationCenterPrototype::create(vm, globalObject, JSNotificationCenterPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSNotificationCenter::destroy(JSC::JSCell* cell)
{
    JSNotificationCenter* thisObject = static_cast<JSNotificationCenter*>(cell);
    thisObject->JSNotificationCenter::~JSNotificationCenter();
}

JSNotificationCenter::~JSNotificationCenter()
{
    releaseImplIfNotNull();
}

EncodedJSValue JSC_HOST_CALL jsNotificationCenterPrototypeFunctionCreateNotification(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSNotificationCenter* castedThis = jsDynamicCast<JSNotificationCenter*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSNotificationCenter::info());
    NotificationCenter& impl = castedThis->impl();
    if (exec->argumentCount() < 3)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    const String& iconUrl(exec->argument(0).isEmpty() ? String() : exec->argument(0).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    const String& title(exec->argument(1).isEmpty() ? String() : exec->argument(1).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    const String& body(exec->argument(2).isEmpty() ? String() : exec->argument(2).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.createNotification(iconUrl, title, body, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsNotificationCenterPrototypeFunctionCheckPermission(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSNotificationCenter* castedThis = jsDynamicCast<JSNotificationCenter*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSNotificationCenter::info());
    NotificationCenter& impl = castedThis->impl();

    JSC::JSValue result = jsNumber(impl.checkPermission());
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsNotificationCenterPrototypeFunctionRequestPermission(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSNotificationCenter* castedThis = jsDynamicCast<JSNotificationCenter*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSNotificationCenter::info());
    NotificationCenter& impl = castedThis->impl();
    RefPtr<VoidCallback> callback;
    if (!exec->argument(0).isUndefinedOrNull()) {
        if (!exec->uncheckedArgument(0).isFunction())
            return throwVMTypeError(exec);
        callback = JSVoidCallback::create(asObject(exec->uncheckedArgument(0)), castedThis->globalObject());
    }
    impl.requestPermission(callback);
    return JSValue::encode(jsUndefined());
}

bool JSNotificationCenterOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    JSNotificationCenter* jsNotificationCenter = jsCast<JSNotificationCenter*>(handle.get().asCell());
    if (jsNotificationCenter->impl().hasPendingActivity())
        return true;
    UNUSED_PARAM(visitor);
    return false;
}

void JSNotificationCenterOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSNotificationCenter* jsNotificationCenter = jsCast<JSNotificationCenter*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsNotificationCenter->impl(), jsNotificationCenter);
    jsNotificationCenter->releaseImpl();
}

#if ENABLE(BINDING_INTEGRITY)
#if PLATFORM(WIN)
#pragma warning(disable: 4483)
extern "C" { extern void (*const __identifier("??_7NotificationCenter@WebCore@@6B@")[])(); }
#else
extern "C" { extern void* _ZTVN7WebCore18NotificationCenterE[]; }
#endif
#endif
JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, NotificationCenter* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSNotificationCenter>(exec, impl))
        return result;

#if ENABLE(BINDING_INTEGRITY)
    void* actualVTablePointer = *(reinterpret_cast<void**>(impl));
#if PLATFORM(WIN)
    void* expectedVTablePointer = reinterpret_cast<void*>(__identifier("??_7NotificationCenter@WebCore@@6B@"));
#else
    void* expectedVTablePointer = &_ZTVN7WebCore18NotificationCenterE[2];
#if COMPILER(CLANG)
    // If this fails NotificationCenter does not have a vtable, so you need to add the
    // ImplementationLacksVTable attribute to the interface definition
    COMPILE_ASSERT(__is_polymorphic(NotificationCenter), NotificationCenter_is_not_polymorphic);
#endif
#endif
    // If you hit this assertion you either have a use after free bug, or
    // NotificationCenter has subclasses. If NotificationCenter has subclasses that get passed
    // to toJS() we currently require NotificationCenter you to opt out of binding hardening
    // by adding the SkipVTableValidation attribute to the interface IDL definition
    RELEASE_ASSERT(actualVTablePointer == expectedVTablePointer);
#endif
    ReportMemoryCost<NotificationCenter>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSNotificationCenter>(exec, globalObject, impl);
}

NotificationCenter* toNotificationCenter(JSC::JSValue value)
{
    return value.inherits(JSNotificationCenter::info()) ? &jsCast<JSNotificationCenter*>(value)->impl() : 0;
}

}

#endif // ENABLE(LEGACY_NOTIFICATIONS)
