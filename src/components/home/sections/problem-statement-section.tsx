import { MessageCircle, TrendingUp, Zap } from "lucide-react";

export const ProblemStatementSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          هل تواجه هذه التحديات؟
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">صعوبة في الوصول للطلاب</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              تملك خبرة قيمة لكن لا تعرف كيف تصل للجمهور المناسب وتبني قاعدة طلاب مخلصين
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">التعقيدات التقنية</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              تريد التركيز على التدريس وليس على إدارة المواقع والأنظمة التقنية المعقدة
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">دخل غير مستقر</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              تعتمد على الدورات الحضورية أو المشاريع المؤقتة بدلاً من دخل شهري ثابت
            </p>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">نحن نفهم تحدياتك</h3>
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
            لهذا صممنا منصة مَنهلي لتكون الحل الشامل الذي يساعدك على تحويل خبرتك إلى مصدر دخل مستدام
          </p>
        </div>
      </div>
    </div>
  </section>
);