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

#if ENABLE(FONT_LOAD_EVENTS)

#include "JSFontLoader.h"

#include "Dictionary.h"
#include "Event.h"
#include "EventListener.h"
#include "ExceptionCode.h"
#include "FontLoader.h"
#include "JSDOMBinding.h"
#include "JSEvent.h"
#include "JSEventListener.h"
#include "JSVoidCallback.h"
#include <runtime/Error.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSFontLoaderTableValues[] =
{
    { "onloading", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsFontLoaderOnloading), (intptr_t)setJSFontLoaderOnloading },
    { "onloadingdone", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsFontLoaderOnloadingdone), (intptr_t)setJSFontLoaderOnloadingdone },
    { "onloadstart", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsFontLoaderOnloadstart), (intptr_t)setJSFontLoaderOnloadstart },
    { "onload", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsFontLoaderOnload), (intptr_t)setJSFontLoaderOnload },
    { "onerror", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsFontLoaderOnerror), (intptr_t)setJSFontLoaderOnerror },
    { "loading", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsFontLoaderLoading), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSFontLoaderTable = { 18, 15, JSFontLoaderTableValues, 0 };
/* Hash table for prototype */

static const HashTableValue JSFontLoaderPrototypeTableValues[] =
{
    { "checkFont", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsFontLoaderPrototypeFunctionCheckFont), (intptr_t)1 },
    { "loadFont", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsFontLoaderPrototypeFunctionLoadFont), (intptr_t)1 },
    { "notifyWhenFontsReady", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsFontLoaderPrototypeFunctionNotifyWhenFontsReady), (intptr_t)1 },
    { "addEventListener", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsFontLoaderPrototypeFunctionAddEventListener), (intptr_t)2 },
    { "removeEventListener", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsFontLoaderPrototypeFunctionRemoveEventListener), (intptr_t)2 },
    { "dispatchEvent", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsFontLoaderPrototypeFunctionDispatchEvent), (intptr_t)1 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSFontLoaderPrototypeTable = { 16, 15, JSFontLoaderPrototypeTableValues, 0 };
const ClassInfo JSFontLoaderPrototype::s_info = { "FontLoaderPrototype", &Base::s_info, &JSFontLoaderPrototypeTable, 0, CREATE_METHOD_TABLE(JSFontLoaderPrototype) };

JSObject* JSFontLoaderPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSFontLoader>(vm, globalObject);
}

bool JSFontLoaderPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSFontLoaderPrototype* thisObject = jsCast<JSFontLoaderPrototype*>(object);
    return getStaticFunctionSlot<JSObject>(exec, JSFontLoaderPrototypeTable, thisObject, propertyName, slot);
}

const ClassInfo JSFontLoader::s_info = { "FontLoader", &Base::s_info, &JSFontLoaderTable, 0 , CREATE_METHOD_TABLE(JSFontLoader) };

JSFontLoader::JSFontLoader(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<FontLoader> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSFontLoader::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSFontLoader::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSFontLoaderPrototype::create(vm, globalObject, JSFontLoaderPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSFontLoader::destroy(JSC::JSCell* cell)
{
    JSFontLoader* thisObject = static_cast<JSFontLoader*>(cell);
    thisObject->JSFontLoader::~JSFontLoader();
}

JSFontLoader::~JSFontLoader()
{
    releaseImplIfNotNull();
}

bool JSFontLoader::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSFontLoader* thisObject = jsCast<JSFontLoader*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSFontLoader, Base>(exec, JSFontLoaderTable, thisObject, propertyName, slot);
}

EncodedJSValue jsFontLoaderOnloading(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    if (EventListener* listener = impl.onloading()) {
        if (const JSEventListener* jsListener = JSEventListener::cast(listener)) {
            if (JSObject* jsFunction = jsListener->jsFunction(impl.scriptExecutionContext()))
                return JSValue::encode(jsFunction);
        }
    }
    return JSValue::encode(jsNull());
}


EncodedJSValue jsFontLoaderOnloadingdone(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    if (EventListener* listener = impl.onloadingdone()) {
        if (const JSEventListener* jsListener = JSEventListener::cast(listener)) {
            if (JSObject* jsFunction = jsListener->jsFunction(impl.scriptExecutionContext()))
                return JSValue::encode(jsFunction);
        }
    }
    return JSValue::encode(jsNull());
}


EncodedJSValue jsFontLoaderOnloadstart(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    if (EventListener* listener = impl.onloadstart()) {
        if (const JSEventListener* jsListener = JSEventListener::cast(listener)) {
            if (JSObject* jsFunction = jsListener->jsFunction(impl.scriptExecutionContext()))
                return JSValue::encode(jsFunction);
        }
    }
    return JSValue::encode(jsNull());
}


EncodedJSValue jsFontLoaderOnload(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    if (EventListener* listener = impl.onload()) {
        if (const JSEventListener* jsListener = JSEventListener::cast(listener)) {
            if (JSObject* jsFunction = jsListener->jsFunction(impl.scriptExecutionContext()))
                return JSValue::encode(jsFunction);
        }
    }
    return JSValue::encode(jsNull());
}


EncodedJSValue jsFontLoaderOnerror(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    if (EventListener* listener = impl.onerror()) {
        if (const JSEventListener* jsListener = JSEventListener::cast(listener)) {
            if (JSObject* jsFunction = jsListener->jsFunction(impl.scriptExecutionContext()))
                return JSValue::encode(jsFunction);
        }
    }
    return JSValue::encode(jsNull());
}


EncodedJSValue jsFontLoaderLoading(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    JSValue result = jsBoolean(impl.loading());
    return JSValue::encode(result);
}


void JSFontLoader::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSFontLoader* thisObject = jsCast<JSFontLoader*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSFontLoader, Base>(exec, propertyName, value, JSFontLoaderTable, thisObject, slot);
}

void setJSFontLoaderOnloading(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    impl.setOnloading(createJSAttributeEventListener(exec, value, castedThis));
}


void setJSFontLoaderOnloadingdone(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    impl.setOnloadingdone(createJSAttributeEventListener(exec, value, castedThis));
}


void setJSFontLoaderOnloadstart(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    impl.setOnloadstart(createJSAttributeEventListener(exec, value, castedThis));
}


void setJSFontLoaderOnload(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    impl.setOnload(createJSAttributeEventListener(exec, value, castedThis));
}


void setJSFontLoaderOnerror(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    UNUSED_PARAM(exec);
    FontLoader& impl = castedThis->impl();
    impl.setOnerror(createJSAttributeEventListener(exec, value, castedThis));
}


EncodedJSValue JSC_HOST_CALL jsFontLoaderPrototypeFunctionCheckFont(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSFontLoader::info());
    FontLoader& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    const String& font(exec->argument(0).isEmpty() ? String() : exec->argument(0).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    const String& text(argumentOrNull(exec, 1).isEmpty() ? String() : argumentOrNull(exec, 1).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = jsBoolean(impl.checkFont(font, text));
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsFontLoaderPrototypeFunctionLoadFont(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSFontLoader::info());
    FontLoader& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    Dictionary params(exec, exec->argument(0));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    impl.loadFont(params);
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsFontLoaderPrototypeFunctionNotifyWhenFontsReady(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSFontLoader::info());
    FontLoader& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    if (!exec->argument(0).isFunction())
        return throwVMTypeError(exec);
    RefPtr<VoidCallback> callback = JSVoidCallback::create(asObject(exec->uncheckedArgument(0)), castedThis->globalObject());
    impl.notifyWhenFontsReady(callback);
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsFontLoaderPrototypeFunctionAddEventListener(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSFontLoader::info());
    FontLoader& impl = castedThis->impl();
    JSValue listener = exec->argument(1);
    if (!listener.isObject())
        return JSValue::encode(jsUndefined());
    impl.addEventListener(exec->argument(0).toString(exec)->value(exec), JSEventListener::create(asObject(listener), castedThis, false, currentWorld(exec)), exec->argument(2).toBoolean(exec));
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsFontLoaderPrototypeFunctionRemoveEventListener(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSFontLoader::info());
    FontLoader& impl = castedThis->impl();
    JSValue listener = exec->argument(1);
    if (!listener.isObject())
        return JSValue::encode(jsUndefined());
    impl.removeEventListener(exec->argument(0).toString(exec)->value(exec), JSEventListener::create(asObject(listener), castedThis, false, currentWorld(exec)).get(), exec->argument(2).toBoolean(exec));
    return JSValue::encode(jsUndefined());
}

EncodedJSValue JSC_HOST_CALL jsFontLoaderPrototypeFunctionDispatchEvent(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSFontLoader* castedThis = jsDynamicCast<JSFontLoader*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSFontLoader::info());
    FontLoader& impl = castedThis->impl();
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

void JSFontLoader::visitChildren(JSCell* cell, SlotVisitor& visitor)
{
    JSFontLoader* thisObject = jsCast<JSFontLoader*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    COMPILE_ASSERT(StructureFlags & OverridesVisitChildren, OverridesVisitChildrenWithoutSettingFlag);
    ASSERT(thisObject->structure()->typeInfo().overridesVisitChildren());
    Base::visitChildren(thisObject, visitor);
    thisObject->impl().visitJSEventListeners(visitor);
}

static inline bool isObservable(JSFontLoader* jsFontLoader)
{
    if (jsFontLoader->hasCustomProperties())
        return true;
    if (jsFontLoader->impl().hasEventListeners())
        return true;
    return false;
}

bool JSFontLoaderOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    JSFontLoader* jsFontLoader = jsCast<JSFontLoader*>(handle.get().asCell());
    if (jsFontLoader->impl().hasPendingActivity())
        return true;
    if (jsFontLoader->impl().isFiringEventListeners())
        return true;
    if (!isObservable(jsFontLoader))
        return false;
    Document* root = jsFontLoader->impl().document();
    if (!root)
        return false;
    return visitor.containsOpaqueRoot(root);
}

void JSFontLoaderOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSFontLoader* jsFontLoader = jsCast<JSFontLoader*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsFontLoader->impl(), jsFontLoader);
    jsFontLoader->releaseImpl();
}

#if ENABLE(BINDING_INTEGRITY)
#if PLATFORM(WIN)
#pragma warning(disable: 4483)
extern "C" { extern void (*const __identifier("??_7FontLoader@WebCore@@6B@")[])(); }
#else
extern "C" { extern void* _ZTVN7WebCore10FontLoaderE[]; }
#endif
#endif
JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, FontLoader* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSFontLoader>(exec, impl))
        return result;

#if ENABLE(BINDING_INTEGRITY)
    void* actualVTablePointer = *(reinterpret_cast<void**>(impl));
#if PLATFORM(WIN)
    void* expectedVTablePointer = reinterpret_cast<void*>(__identifier("??_7FontLoader@WebCore@@6B@"));
#else
    void* expectedVTablePointer = &_ZTVN7WebCore10FontLoaderE[2];
#if COMPILER(CLANG)
    // If this fails FontLoader does not have a vtable, so you need to add the
    // ImplementationLacksVTable attribute to the interface definition
    COMPILE_ASSERT(__is_polymorphic(FontLoader), FontLoader_is_not_polymorphic);
#endif
#endif
    // If you hit this assertion you either have a use after free bug, or
    // FontLoader has subclasses. If FontLoader has subclasses that get passed
    // to toJS() we currently require FontLoader you to opt out of binding hardening
    // by adding the SkipVTableValidation attribute to the interface IDL definition
    RELEASE_ASSERT(actualVTablePointer == expectedVTablePointer);
#endif
    ReportMemoryCost<FontLoader>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSFontLoader>(exec, globalObject, impl);
}

FontLoader* toFontLoader(JSC::JSValue value)
{
    return value.inherits(JSFontLoader::info()) ? &jsCast<JSFontLoader*>(value)->impl() : 0;
}

}

#endif // ENABLE(FONT_LOAD_EVENTS)
