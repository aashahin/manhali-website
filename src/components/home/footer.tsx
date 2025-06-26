import { BookOpen } from "lucide-react";
import Link from "next/link";

export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
        {/* Brand */}
        <Link href="/" className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
          <span className="ml-3 text-2xl font-bold">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-4 text-sm text-gray-400">
          <Link href="/faq" className="hover:text-white transition-colors">
           الأسئلة الشائعة
          </Link>
          {/*<Link href="/blog" className="hover:text-white transition-colors">*/}
          {/*  المدونة*/}
          {/*</Link>*/}
          <Link href="/about" className="hover:text-white transition-colors">
            من نحن
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            تواصل معنا
          </Link>
          <Link href="https://manhali.zaetoon.com/chat" target="_blank" className="hover:text-white transition-colors">
            الدعم
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400 text-center sm:text-right order-2 sm:order-1">
          &copy; {new Date().getFullYear()} مَنهلي. جميع الحقوق محفوظة.
        </p>

        <div className="flex gap-6 text-xs text-gray-400 order-1 sm:order-2">
          <Link href="/terms" className="hover:text-white transition-colors">
            الشروط والأحكام
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            سياسة الخصوصية
          </Link>
        </div>
      </div>
    </div>
  </footer>
);