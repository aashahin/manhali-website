import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  MessageCircle,
  Shield,
  Smartphone,
  Crown,
  Package,
  Rss, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const PricingSection = () => (
  <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          باقات تناسب طموحك
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          أطلق منصتك التعليمية الخاصة اليوم. كل ما تحتاجه للنجاح في مكان واحد.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {/* Monthly Plan */}
        <Card className="border-2 border-gray-200 bg-white shadow-lg relative">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                الخطة الشهرية
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                مثالية للانطلاقة السريعة وبناء الأساس
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                  $19
                </span>
                <span className="text-lg text-gray-600">/شهرياً</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600">تُجدد شهرياً</p>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-right">
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>3 مواقع (أكاديميات)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>عدد لا محدود من الدورات</span>
              </li>
              <li className="flex items-center gap-3">
                <Package className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>بيع المنتجات الرقمية</span>
              </li>
              <li className="flex items-center gap-3">
                <Rss className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>مدونة متكاملة للمقالات</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>عدد لا محدود من الطلاب</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>نطاق فرعي مجاني</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>ربط نطاقك الخاص</span>
              </li>
              <li className="flex items-center gap-3">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>شهادة SSL مجانية</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>تحليلات أساسية للأداء</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>مساحة تخزين غير محدودة</span>
              </li>
            </ul>
            <Button asChild className="w-full" variant="outline" size="lg">
              <Link href={"https://dash.manhali.com/auth/signup?plan=monthly"}>
                ابدأ الآن
              </Link>
            </Button>
            <p className="text-xs text-gray-500 mt-3 sm:mt-4">
              جرّب مجاناً لمدة 3 أيام
            </p>
          </CardContent>
        </Card>

        {/* Annual Plan */}
        <Card className="border-2 border-blue-200 bg-white shadow-2xl relative scale-105">
          <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-blue-600 text-white px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold rounded-full shadow-lg">
              الأكثر توفيراً وشيوعاً
            </Badge>
          </div>
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                <Crown className="h-5 w-5 text-yellow-500" />
                الخطة السنوية
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                للصنّاع الجادين والمشاريع الطموحة
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-4xl sm:text-5xl font-bold text-blue-600">
                  $150
                </span>
                <span className="text-lg text-gray-600">/سنوياً</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                <span className="line-through text-gray-400">$228</span>
                <Badge className="bg-green-100 text-green-700 text-xs">
                  وفّر 78$ عند الاشتراك السنوي
                </Badge>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-right">
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>كل مزايا الخطة الشهرية، بالإضافة إلى:</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>تحليلات متقدمة للطلاب</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>أدوات تسويق مدمجة</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>دعم فني ذو أولوية</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>شهادات إتمام مخصصة</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>تكامل مع أدوات خارجية</span>
              </li>
            </ul>
            <Button
              asChild
              className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              size="lg"
            >
              <Link href={"https://dash.manhali.com/auth/signup?plan=annual"}>
                اختر الخطة السنوية
              </Link>
            </Button>
            <p className="text-xs text-gray-500 mt-3 sm:mt-4">
              يشمل تجربة 3 أيام مجانية
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Value Proposition */}
      <div className="text-center mt-12 max-w-2xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h4 className="font-bold text-blue-900 mb-2">
            🎁 عرض حصري للخطة السنوية
          </h4>
          <p className="text-blue-700">
            اشترك سنوياً واحصل على خصم 50% علي صانع التطبيقات والمميزات المستقبلية (بقيمة 500$)، ووفر أكثر من نصف
            التكلفة السنوية!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
            <span>مدفوعات آمنة 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
            <span>متجاوب مع جميع الأجهزة</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
            <span>دعم فني متكامل بالعربية</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
