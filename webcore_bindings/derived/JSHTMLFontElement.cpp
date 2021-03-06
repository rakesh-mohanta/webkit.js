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
#include "JSHTMLFontElement.h"

#include "HTMLFontElement.h"
#include "HTMLNames.h"
#include "URL.h"
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSHTMLFontElementTableValues[] =
{
    { "color", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsHTMLFontElementColor), (intptr_t)setJSHTMLFontElementColor },
    { "face", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsHTMLFontElementFace), (intptr_t)setJSHTMLFontElementFace },
    { "size", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsHTMLFontElementSize), (intptr_t)setJSHTMLFontElementSize },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsHTMLFontElementConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSHTMLFontElementTable = { 9, 7, JSHTMLFontElementTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSHTMLFontElementConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSHTMLFontElementConstructorTable = { 1, 0, JSHTMLFontElementConstructorTableValues, 0 };
const ClassInfo JSHTMLFontElementConstructor::s_info = { "HTMLFontElementConstructor", &Base::s_info, &JSHTMLFontElementConstructorTable, 0, CREATE_METHOD_TABLE(JSHTMLFontElementConstructor) };

JSHTMLFontElementConstructor::JSHTMLFontElementConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSHTMLFontElementConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSHTMLFontElementPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSHTMLFontElementConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSHTMLFontElementConstructor, JSDOMWrapper>(exec, JSHTMLFontElementConstructorTable, jsCast<JSHTMLFontElementConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSHTMLFontElementPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSHTMLFontElementPrototypeTable = { 1, 0, JSHTMLFontElementPrototypeTableValues, 0 };
const ClassInfo JSHTMLFontElementPrototype::s_info = { "HTMLFontElementPrototype", &Base::s_info, &JSHTMLFontElementPrototypeTable, 0, CREATE_METHOD_TABLE(JSHTMLFontElementPrototype) };

JSObject* JSHTMLFontElementPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSHTMLFontElement>(vm, globalObject);
}

const ClassInfo JSHTMLFontElement::s_info = { "HTMLFontElement", &Base::s_info, &JSHTMLFontElementTable, 0 , CREATE_METHOD_TABLE(JSHTMLFontElement) };

JSHTMLFontElement::JSHTMLFontElement(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<HTMLFontElement> impl)
    : JSHTMLElement(structure, globalObject, impl)
{
}

void JSHTMLFontElement::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSHTMLFontElement::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSHTMLFontElementPrototype::create(vm, globalObject, JSHTMLFontElementPrototype::createStructure(vm, globalObject, JSHTMLElementPrototype::self(vm, globalObject)));
}

bool JSHTMLFontElement::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSHTMLFontElement* thisObject = jsCast<JSHTMLFontElement*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSHTMLFontElement, Base>(exec, JSHTMLFontElementTable, thisObject, propertyName, slot);
}

EncodedJSValue jsHTMLFontElementColor(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSHTMLFontElement* castedThis = jsDynamicCast<JSHTMLFontElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    HTMLFontElement& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.fastGetAttribute(WebCore::HTMLNames::colorAttr));
    return JSValue::encode(result);
}


EncodedJSValue jsHTMLFontElementFace(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSHTMLFontElement* castedThis = jsDynamicCast<JSHTMLFontElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    HTMLFontElement& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.fastGetAttribute(WebCore::HTMLNames::faceAttr));
    return JSValue::encode(result);
}


EncodedJSValue jsHTMLFontElementSize(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSHTMLFontElement* castedThis = jsDynamicCast<JSHTMLFontElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    HTMLFontElement& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.fastGetAttribute(WebCore::HTMLNames::sizeAttr));
    return JSValue::encode(result);
}


EncodedJSValue jsHTMLFontElementConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSHTMLFontElement* domObject = jsDynamicCast<JSHTMLFontElement*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSHTMLFontElement::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSHTMLFontElement::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSHTMLFontElement* thisObject = jsCast<JSHTMLFontElement*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSHTMLFontElement, Base>(exec, propertyName, value, JSHTMLFontElementTable, thisObject, slot);
}

void setJSHTMLFontElementColor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSHTMLFontElement* castedThis = jsDynamicCast<JSHTMLFontElement*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    HTMLFontElement& impl = castedThis->impl();
    const String& nativeValue(valueToStringWithNullCheck(exec, value));
    if (exec->hadException())
        return;
    impl.setAttribute(WebCore::HTMLNames::colorAttr, nativeValue);
}


void setJSHTMLFontElementFace(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSHTMLFontElement* castedThis = jsDynamicCast<JSHTMLFontElement*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    HTMLFontElement& impl = castedThis->impl();
    const String& nativeValue(valueToStringWithNullCheck(exec, value));
    if (exec->hadException())
        return;
    impl.setAttribute(WebCore::HTMLNames::faceAttr, nativeValue);
}


void setJSHTMLFontElementSize(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSHTMLFontElement* castedThis = jsDynamicCast<JSHTMLFontElement*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    HTMLFontElement& impl = castedThis->impl();
    const String& nativeValue(valueToStringWithNullCheck(exec, value));
    if (exec->hadException())
        return;
    impl.setAttribute(WebCore::HTMLNames::sizeAttr, nativeValue);
}


JSValue JSHTMLFontElement::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSHTMLFontElementConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}


}
