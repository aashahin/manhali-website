import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  ArrowLeft,
  Sparkles,
  Link as LinkIcon,
  Heart,
  Globe,
  Zap,
  Shield,
  Users,
  BookOpen,
  Palette,
} from "lucide-react"
import Link from "next/link";

const FeatureComparison = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
      <Check className="h-4 w-4 text-green-700" />
    </div>
    <p className="text-base md:text-lg text-gray-700">{children}</p>
  </div>
)

export const metadata = {
  title: "عن منصتنا - أنشئ أكاديميتك التعليمية الخاصة",
  description:
    "منصة تعليمية عربية بسيطة ومتقدمة تمكنك من إنشاء موقع دوراتك الخاص بنطاق مخصص. مثل Teachable لكن مصممة خصيصاً للمبدعين العرب.",
}

export default function AboutPage() {
  return (
    <main className="flex-1 bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-24 text-center">
        <div className="absolute inset-0 -z-0 opacity-10 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3b82f6_100%)]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            أنشئ أكاديميتك التعليمية
            <br />
            <span className="text-blue-600">بنطاقك الخاص</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
            حوّل شغفك بالتعليم إلى أكاديمية إلكترونية مزدهرة تحمل اسمك ونطاقك الخاص. نحن هنا لنتكفل بالتقنية، وأنت
            ركز على الإبداع.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-lg font-semibold" asChild>
              <Link href="https://dash.manhali.com/auth/signup">
                أنشئ موقعك الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ماذا نقدم لك؟
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              كل ما تحتاجه لتحويل خبرتك إلى أكاديمية تعليمية ناجحة
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="mt-4 text-xl">نطاقك الخاص</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  احصل على موقع دوراتك بنطاقك الخاص (yourname.com) مع تصميم احترافي يعكس علامتك التجارية
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="mt-4 text-xl">بساطة فائقة</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  إنشاء وإدارة دوراتك في دقائق معدودة بواجهة عربية بسيطة ومفهومة، بدون تعقيدات تقنية
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="mt-4 text-xl">أدوات شاملة</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  فيديوهات، اختبارات، شهادات، منتديات نقاش، ونظام دفع متكامل مع بوابات الدفع العربية
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="mt-4 text-xl">تسويق ذكي</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  أدوات تسويق مدمجة: كوبونات، عروض محدودة، وتحليلات مفصلة لنمو أعمالك
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="mt-4 text-xl">أمان وموثوقية</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  حماية محتواك، نسخ احتياطي تلقائي، وضمان وقت تشغيل 99.9% لضمان استمرارية أعمالك
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                  <Palette className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="mt-4 text-xl">تخصيص كامل</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  خصص ألوان وتصميم موقعك، أضف شعارك، وأنشئ تجربة فريدة تعكس شخصيتك وعلامتك التجارية
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              لماذا اخترنا بناء منصة جديدة؟
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              جربنا المنصات الموجودة، وواجهنا نفس التحديات التي تواجهها أنت الآن
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <Card className="overflow-hidden shadow-xl border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gray-100 p-8 lg:p-10">
                  <h3 className="text-xl font-bold text-gray-500 mb-6">المنصات التقليدية</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="font-mono text-red-500 text-lg">✗</span>
                      <span>واجهات معقدة تحتاج وقت طويل لتعلمها</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-mono text-red-500 text-lg">✗</span>
                      <span>علامتك التجارية مدفونة وسط الآلاف</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-mono text-red-500 text-lg">✗</span>
                      <span>رسوم عالية وعمولات مخفية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-mono text-red-500 text-lg">✗</span>
                      <span>دعم فني لا يفهم السوق العربي</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-mono text-red-500 text-lg">✗</span>
                      <span>بوابات دفع لا تدعم المنطقة العربية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-mono text-red-500 text-lg">✗</span>
                      <span>تصميمات لا تناسب المحتوى العربي</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 lg:p-10">
                  <h3 className="text-xl font-bold text-blue-600 mb-6">منصتنا: الحل المثالي</h3>
                  <div className="space-y-5">
                    <FeatureComparison>واجهة عربية بسيطة وبديهية</FeatureComparison>
                    <FeatureComparison>موقعك الخاص بنطاقك المخصص</FeatureComparison>
                    <FeatureComparison>أسعار شفافة بدون رسوم مخفية</FeatureComparison>
                    <FeatureComparison>دعم عربي متخصص 24/7</FeatureComparison>
                    <FeatureComparison>تكامل مع جميع بوابات الدفع العربية</FeatureComparison>
                    <FeatureComparison>تصميمات مخصصة للمحتوى العربي</FeatureComparison>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              مبادئنا الأساسية
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              هذه القيم توجه كل قرار نتخذه في تطوير المنصة وخدمة عملائنا
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center shadow-lg border-none">
              <CardHeader>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="mt-4 text-2xl">البساطة أولاً</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  نؤمن أن التقنية يجب أن تكون في الخلفية. نصمم كل شيء ليكون بسيطاً وواضحاً،
                  حتى تركز على ما تحبه: التعليم والإبداع.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-none">
              <CardHeader>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <LinkIcon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="mt-4 text-2xl">ملكية حقيقية</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  هذه أكاديميتك أنت، ليس مجرد صفحة على منصة أخرى. نطاقك الخاص،
                  تصميمك الخاص، وعلامتك التجارية في المقدمة دائماً.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-none">
              <CardHeader>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="mt-4 text-2xl">فهم السوق العربي</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  نحن نفهم تحديات المبدع العربي. من اللغة إلى طرق الدفع والتسويق،
                  كل شيء مصمم خصيصاً لاحتياجاتك وجمهورك.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            مستعد لبناء أكاديميتك؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100 leading-relaxed">
            انضم إلى آلاف المعلمين والمبدعين العرب الذين بنوا أعمالهم التعليمية.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-14 bg-white border-2 border-white px-10 text-lg font-bold text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              asChild
            >
              <Link href="https://dash.manhali.com/auth/signup">
                ابدأ تجربتك المجانية
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 border-2 border-white bg-transparent px-10 text-lg font-bold text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contact">
                تحدث مع فريقنا
              </Link>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>3 أيام تجربة</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>إلغاء في أي وقت</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>دعم مجاني</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}