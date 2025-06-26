import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, DollarSign, Globe } from "lucide-react";

export const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-white">
    <div className="container mx-auto px-6 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          ثلاث خطوات بسيطة للربح من معرفتك
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          بدلاً من دفع عشرات الآلاف، ابدأ تجربتك مجاناً وأنشئ أكاديميتك التعليمية
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-16">
        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <div className="flex items-center justify-end gap-4 mb-6">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                3 دقائق
              </Badge>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              اختر اسم أكاديميتك
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              اختر اسماً مميزاً لأكاديميتك وسنجهز موقعك الشخصي فوراً
            </p>
            <div className="text-sm text-gray-500">
              تجربة مجانية • بدون بطاقة ائتمان • رابط مخصص
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900">اسم أكاديميتك</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="أكاديمية محمد"
                    className="w-full p-3 border border-gray-200 rounded-lg text-center"
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">رابط موقعك:</div>
                  <div className="bg-blue-50 p-2 rounded-lg font-mono text-sm text-blue-600">
                    academy-mohammed.com
                  </div>
                </div>
                <button className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium">
                  إنشاء الأكاديمية
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <ArrowLeft className="w-6 h-6 text-gray-400 rotate-90" />
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">دورتك الأولى</h4>
                <Badge className="bg-green-100 text-green-700 text-xs">
                  جاري الإنشاء
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">عنوان الدورة</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <Play className="w-2 h-2 text-white" />
                  </div>
                  <span className="text-sm text-blue-600">رفع المحتوى</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                  <span className="text-sm text-gray-400">النشر</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end gap-4 mb-6">
              <Badge variant="outline" className="text-green-600 border-green-200">
                30 دقيقة
              </Badge>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              أنشئ دورتك
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              ارفع فيديوهاتك، حدد السعر، وأطلق دورتك للعالم
            </p>
            <div className="text-sm text-gray-500">
              محرر بسيط • قوالب جاهزة • نشر فوري
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <ArrowLeft className="w-6 h-6 text-gray-400 rotate-90" />
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <div className="flex items-center justify-end gap-4 mb-6">
              <Badge variant="outline" className="text-purple-600 border-purple-200">
                فوري
              </Badge>
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ابدأ البيع والربح
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              احصل على موقعك المخصص وابدأ في بيع دوراتك فوراً
            </p>
            <div className="text-sm text-gray-500">
              موقع مخصص • مدفوعات آمنة • سحب فوري
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900">دورتك منشورة!</h4>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-sm font-medium text-green-800 mb-2">
                  دورة التسويق الرقمي
                </div>
                <div className="text-xs text-green-600 mb-3 font-mono">
                  academy-mohammed.com
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="font-bold text-green-700">23</div>
                    <div className="text-green-600">طالب</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-700">4.9</div>
                    <div className="text-green-600">تقييم</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-700">1,150</div>
                    <div className="text-green-600">ريال</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);