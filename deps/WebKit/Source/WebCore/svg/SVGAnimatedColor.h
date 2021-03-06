/*
 * Copyright (C) Research In Motion Limited 2011. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Library General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Library General Public License
 * along with this library; see the file COPYING.LIB.  If not, write to
 * the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA 02110-1301, USA.
 */

#ifndef SVGAnimatedColor_h
#define SVGAnimatedColor_h

#if ENABLE(SVG)
#include "SVGAnimatedTypeAnimator.h"

namespace WebCore {

class SVGAnimationElement;

class SVGAnimatedColorAnimator FINAL : public SVGAnimatedTypeAnimator {
public:
    SVGAnimatedColorAnimator(SVGAnimationElement*, SVGElement*);

    virtual std::unique_ptr<SVGAnimatedType> constructFromString(const String&) OVERRIDE;
    virtual std::unique_ptr<SVGAnimatedType> startAnimValAnimation(const SVGElementAnimatedPropertyList&) OVERRIDE { return nullptr; }
    virtual void stopAnimValAnimation(const SVGElementAnimatedPropertyList&) OVERRIDE { }
    virtual void resetAnimValToBaseVal(const SVGElementAnimatedPropertyList&, SVGAnimatedType*) OVERRIDE { }
    virtual void animValWillChange(const SVGElementAnimatedPropertyList&) OVERRIDE { }
    virtual void animValDidChange(const SVGElementAnimatedPropertyList&) OVERRIDE { }

    virtual void addAnimatedTypes(SVGAnimatedType*, SVGAnimatedType*) OVERRIDE;
    virtual void calculateAnimatedValue(float percentage, unsigned repeatCount, SVGAnimatedType*, SVGAnimatedType*, SVGAnimatedType*, SVGAnimatedType*) OVERRIDE;
    virtual float calculateDistance(const String& fromString, const String& toString) OVERRIDE;
};
} // namespace WebCore

#endif // ENABLE(SVG)

#endif
