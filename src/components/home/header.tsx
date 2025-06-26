"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // 1. Focus Management: When the mobile menu opens, focus is moved into it.
  //    When it closes, focus returns to the button that opened it.
  useEffect(() => {
    if (mobileMenuOpen) {
      // Find the first focusable element in the mobile nav and focus it.
      const firstFocusableElement = mobileNavRef.current?.querySelector(
        'a[href], button:not([disabled])'
      ) as HTMLElement | null;
      firstFocusableElement?.focus();
    } else {
      // Return focus to the menu button when the menu is closed.
      menuButtonRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  // 2. Keyboard Interaction: Close the menu when the 'Escape' key is pressed.
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscKey);
    }
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [mobileMenuOpen]);


  return (
    <header className="px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
      <Link href="/" aria-label="مَنهلي - الصفحة الرئيسية">
        <span className="mr-2 sm:mr-3 text-xl sm:text-2xl font-bold text-gray-900">
          مَنهلي
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav
        aria-label="القائمة الرئيسية"
        className="mr-auto hidden lg:flex items-center gap-8"
      >
        <Link
          href="/#how-it-works"
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          كيف يعمل
        </Link>
        <Link
          href="/#pricing"
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          الأسعار
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          من نحن
        </Link>
        <Button
          asChild
          variant="ghost"
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        >
          <Link href="https://dash.manhali.com/auth/login">تسجيل الدخول</Link>
        </Button>
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm px-6 rounded-xl"
        >
          <Link href="https://dash.manhali.com/auth/signup">جرب مجاناً</Link>
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        ref={menuButtonRef}
        aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        className="ms-auto lg:hidden p-2 text-gray-600 hover:text-gray-900"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileNavRef}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 lg:hidden"
        >
          <nav
            aria-label="القائمة الرئيسية للجوال"
            className="px-4 py-4 space-y-4"
          >
            <Link
              href="/#how-it-works"
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              كيف يعمل
            </Link>
            <Link
              href="/#pricing"
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              الأسعار
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              من نحن
            </Link>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Button
                asChild
                variant="ghost"
                className="w-full justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                <Link href="https://dash.manhali.com/auth/login" onClick={() => setMobileMenuOpen(false)}>
                  تسجيل الدخول
                </Link>
              </Button>
              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm rounded-xl"
              >
                <Link href="https://dash.manhali.com/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                  جرب مجاناً
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};