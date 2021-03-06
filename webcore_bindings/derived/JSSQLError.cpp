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

#if ENABLE(SQL_DATABASE)

#include "JSSQLError.h"

#include "SQLError.h"
#include "URL.h"
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSQLErrorTableValues[] =
{
    { "code", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorCode), (intptr_t)0 },
    { "message", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorMessage), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSQLErrorTable = { 4, 3, JSSQLErrorTableValues, 0 };
/* Hash table for prototype */

static const HashTableValue JSSQLErrorPrototypeTableValues[] =
{
    { "UNKNOWN_ERR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorUNKNOWN_ERR), (intptr_t)0 },
    { "DATABASE_ERR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorDATABASE_ERR), (intptr_t)0 },
    { "VERSION_ERR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorVERSION_ERR), (intptr_t)0 },
    { "TOO_LARGE_ERR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorTOO_LARGE_ERR), (intptr_t)0 },
    { "QUOTA_ERR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorQUOTA_ERR), (intptr_t)0 },
    { "SYNTAX_ERR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorSYNTAX_ERR), (intptr_t)0 },
    { "CONSTRAINT_ERR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorCONSTRAINT_ERR), (intptr_t)0 },
    { "TIMEOUT_ERR", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSQLErrorTIMEOUT_ERR), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSQLErrorPrototypeTable = { 16, 15, JSSQLErrorPrototypeTableValues, 0 };
static const HashTable& getJSSQLErrorPrototypeTable(ExecState* exec)
{
    return getHashTableForGlobalData(exec->vm(), JSSQLErrorPrototypeTable);
}

const ClassInfo JSSQLErrorPrototype::s_info = { "SQLErrorPrototype", &Base::s_info, 0, getJSSQLErrorPrototypeTable, CREATE_METHOD_TABLE(JSSQLErrorPrototype) };

JSObject* JSSQLErrorPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSQLError>(vm, globalObject);
}

bool JSSQLErrorPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSQLErrorPrototype* thisObject = jsCast<JSSQLErrorPrototype*>(object);
    return getStaticValueSlot<JSSQLErrorPrototype, JSObject>(exec, getJSSQLErrorPrototypeTable(exec), thisObject, propertyName, slot);
}

static const HashTable& getJSSQLErrorTable(ExecState* exec)
{
    return getHashTableForGlobalData(exec->vm(), JSSQLErrorTable);
}

const ClassInfo JSSQLError::s_info = { "SQLError", &Base::s_info, 0, getJSSQLErrorTable , CREATE_METHOD_TABLE(JSSQLError) };

JSSQLError::JSSQLError(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SQLError> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSSQLError::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSQLError::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSQLErrorPrototype::create(vm, globalObject, JSSQLErrorPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSSQLError::destroy(JSC::JSCell* cell)
{
    JSSQLError* thisObject = static_cast<JSSQLError*>(cell);
    thisObject->JSSQLError::~JSSQLError();
}

JSSQLError::~JSSQLError()
{
    releaseImplIfNotNull();
}

bool JSSQLError::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSQLError* thisObject = jsCast<JSSQLError*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSQLError, Base>(exec, getJSSQLErrorTable(exec), thisObject, propertyName, slot);
}

EncodedJSValue jsSQLErrorCode(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSQLError* castedThis = jsDynamicCast<JSSQLError*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SQLError& impl = castedThis->impl();
    JSValue result = jsNumber(impl.code());
    return JSValue::encode(result);
}


EncodedJSValue jsSQLErrorMessage(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSQLError* castedThis = jsDynamicCast<JSSQLError*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SQLError& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.message());
    return JSValue::encode(result);
}


// Constant getters

EncodedJSValue jsSQLErrorUNKNOWN_ERR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(0)));
}

EncodedJSValue jsSQLErrorDATABASE_ERR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(1)));
}

EncodedJSValue jsSQLErrorVERSION_ERR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(2)));
}

EncodedJSValue jsSQLErrorTOO_LARGE_ERR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(3)));
}

EncodedJSValue jsSQLErrorQUOTA_ERR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(4)));
}

EncodedJSValue jsSQLErrorSYNTAX_ERR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(5)));
}

EncodedJSValue jsSQLErrorCONSTRAINT_ERR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(6)));
}

EncodedJSValue jsSQLErrorTIMEOUT_ERR(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(7)));
}

bool JSSQLErrorOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    UNUSED_PARAM(handle);
    UNUSED_PARAM(visitor);
    return false;
}

void JSSQLErrorOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSSQLError* jsSQLError = jsCast<JSSQLError*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsSQLError->impl(), jsSQLError);
    jsSQLError->releaseImpl();
}

JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, SQLError* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSSQLError>(exec, impl))
        return result;
#if COMPILER(CLANG)
    // If you hit this failure the interface definition has the ImplementationLacksVTable
    // attribute. You should remove that attribute. If the class has subclasses
    // that may be passed through this toJS() function you should use the SkipVTableValidation
    // attribute to SQLError.
    COMPILE_ASSERT(!__is_polymorphic(SQLError), SQLError_is_polymorphic_but_idl_claims_not_to_be);
#endif
    ReportMemoryCost<SQLError>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSSQLError>(exec, globalObject, impl);
}

SQLError* toSQLError(JSC::JSValue value)
{
    return value.inherits(JSSQLError::info()) ? &jsCast<JSSQLError*>(value)->impl() : 0;
}

}

#endif // ENABLE(SQL_DATABASE)
