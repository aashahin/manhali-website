import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const CtaSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-blue-600 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700"></div>

    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          حان الوقت لتحويل
          <br />
          <span className="text-blue-200">خبرتك إلى ثروة</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          انضم إلى المئات من المعلمين العرب الذين أطلقوا مواقعهم التعليمية
          الخاصة بنجاح. احصل على موقع كامل بنطاق مخصص وابدأ بيع دوراتك
          اليوم.{" "}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto mb-8 sm:mb-12">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 sm:py-4 text-lg sm:text-xl rounded-xl shadow-xl w-full sm:w-auto"
          >
            <Link href={"https://dash.manhali.com/auth/signup"} className="flex items-center">
              أنشئ موقعك الآن
              <ArrowLeft className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
              3 أيام
            </div>
            <div className="text-sm sm:text-base text-blue-200">
              تجربة مجانية
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
              3 دقائق
            </div>
            <div className="text-sm sm:text-base text-blue-200">
              للإعداد الكامل
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
              24/7
            </div>
            <div className="text-sm sm:text-base text-blue-200">
              دعم باللغة العربية
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
