import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  Globe,
  Play,
  Users,
  TrendingUp,
  Award,
  Video,
  FileText,
  BarChart3,
  Crown,
  Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";

export const HeroSection = () => (
  <section
    className="relative overflow-hidden pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-24 lg:pb-32"
    aria-labelledby="hero-heading"
  >
    <div
      className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-green-50/30"
      aria-hidden="true"
    ></div>

    <div className="relative container mx-auto px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
        <Badge className="bg-blue-100 text-blue-700 border-blue-200 shadow-sm px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8 rounded-full inline-flex items-center">
          <span>
            <Heart
              className="size-3 sm:size-4 me-1.5 sm:me-2"
              aria-hidden="true"
            />
          </span>
          مصمم خصيصاً للمعلمين العرب
        </Badge>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 mb-4 sm:mb-6 md:mb-8"
        >
          أنشئ <span className="text-blue-600">أكاديميتك</span> الرقمية
          <br />
          <span className="text-green-600 relative">
            في دقائق معدودة
            <div
              className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1.5 sm:h-2 md:h-3 bg-green-200/50 rounded-full -z-10"
              aria-hidden="true"
            ></div>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto">
          <strong className="text-gray-900">منصة سهلة ومتكاملة</strong> لإنشاء
          وبيع الدورات التدريبية أونلاين.
          <span className="text-blue-600 font-semibold">
            {" "}
            مع نطاق مخصص ومزايا احترافية.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 md:mb-12 max-w-md sm:max-w-none mx-auto">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-base md:text-lg font-semibold rounded-xl w-full sm:w-auto min-h-[48px] transition-all duration-200"
          >
            <Link href={"https://dash.manhali.com/auth/signup"} className="flex items-center max-w-fit">
              ابدأ مجاناً الآن
              <ArrowLeft
                className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5"
                aria-hidden="true"
              />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 px-6 md:px-10 py-4 text-base md:text-lg font-semibold rounded-xl w-full sm:w-auto min-h-[48px] transition-all duration-200"
          >
            <Play
              className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5"
              aria-hidden="true"
            />
            شاهد العرض التوضيحي
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 bg-green-500 rounded-full"
              aria-hidden="true"
            ></div>
            <span>3 أيام تجربة مجانية</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 bg-green-500 rounded-full"
              aria-hidden="true"
            ></div>
            <span>نطاق مخصص مجاني</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 bg-green-500 rounded-full"
              aria-hidden="true"
            ></div>
            <span>دعم فني متواصل</span>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="max-w-6xl mx-auto">
        <div
          className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 p-4 md:p-6 lg:p-8 relative"
          role="region"
          aria-labelledby="demo-heading"
        >
          <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10">
            <Badge className="bg-blue-500 text-white px-3 md:px-4 py-1.5 md:py-2 text-sm font-semibold rounded-full shadow-lg">
              عرض تفاعلي
            </Badge>
          </div>

          {/* Platform Header */}
          <div className="space-y-4 md:space-y-6">
            <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 md:pb-6 border-b border-gray-100 gap-4">
              <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto min-w-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen
                    className="h-5 w-5 md:h-6 md:w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h2
                      id="demo-heading"
                      className="font-bold text-gray-900 text-base md:text-lg truncate"
                    >
                      أكاديمية المعرفة
                    </h2>
                    <Crown
                      className="h-4 w-4 text-yellow-500 flex-shrink-0"
                      aria-label="حساب مميز"
                    />
                  </div>
                  <p className="text-sm text-blue-600 font-medium truncate">
                    academy.manhali.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <Badge className="bg-green-100 text-green-700 px-3 py-1 text-sm flex-shrink-0">
                  نشط
                </Badge>
                <div className="text-right">
                  <div className="text-base md:text-lg font-semibold text-gray-900">
                    24,750 ريال
                  </div>
                  <div className="text-sm text-green-600">+32% هذا الشهر</div>
                </div>
              </div>
            </header>

            {/* Dashboard Stats */}
            <section aria-labelledby="stats-heading">
              <h3 id="stats-heading" className="sr-only">
                إحصائيات الأداء
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                <div className="text-center p-3 md:p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl md:rounded-2xl">
                  <div className="flex justify-center mb-2">
                    <Users
                      className="h-4 w-4 md:h-5 md:w-5 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                    1,247
                  </div>
                  <div className="text-sm text-blue-600">طالب نشط</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:rounded-2xl">
                  <div className="flex justify-center mb-2">
                    <Video
                      className="h-4 w-4 md:h-5 md:w-5 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">
                    12
                  </div>
                  <div className="text-sm text-green-600">دورة منشورة</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl md:rounded-2xl">
                  <div className="flex justify-center mb-2">
                    <Award
                      className="h-4 w-4 md:h-5 md:w-5 text-purple-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-purple-600 mb-1">
                    4.9
                  </div>
                  <div className="text-sm text-purple-600">متوسط التقييم</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl md:rounded-2xl">
                  <div className="flex justify-center mb-2">
                    <TrendingUp
                      className="h-4 w-4 md:h-5 md:w-5 text-orange-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">
                    94%
                  </div>
                  <div className="text-sm text-orange-600">معدل الإكمال</div>
                </div>
              </div>
            </section>

            {/* Course Management Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Top Courses */}
              <section
                className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6"
                aria-labelledby="courses-heading"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    id="courses-heading"
                    className="font-semibold text-gray-900 text-base md:text-lg"
                  >
                    أفضل الدورات أداءً
                  </h3>
                  <BarChart3
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="space-y-3 md:space-y-4">
                  {[
                    {
                      title: "التسويق الإلكتروني الشامل",
                      students: "234 طالب",
                      rating: "4.8 ⭐",
                      revenue: "8,900 ريال",
                      color: "from-blue-500 to-blue-600",
                      icon: Video,
                    },
                    {
                      title: "كتابة المحتوى الإبداعي",
                      students: "187 طالب",
                      rating: "4.9 ⭐",
                      revenue: "6,750 ريال",
                      color: "from-green-500 to-green-600",
                      icon: FileText,
                    },
                    {
                      title: "ريادة الأعمال من الصفر",
                      students: "156 طالب",
                      rating: "4.7 ⭐",
                      revenue: "5,200 ريال",
                      color: "from-blue-400 to-blue-500",
                      icon: Zap,
                    },
                  ].map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div
                          className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <course.icon
                            className="h-4 w-4 md:h-5 md:w-5 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-gray-900 text-sm md:text-base truncate">
                            {course.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {course.students} • {course.rating}
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-semibold text-green-600 text-sm md:text-base">
                          {course.revenue}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Platform Features */}
              <section
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl md:rounded-2xl p-4 md:p-6"
                aria-labelledby="features-heading"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  <h3
                    id="features-heading"
                    className="font-semibold text-gray-900 text-base md:text-lg"
                  >
                    مزايا منصتك المتكاملة
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    "نطاق مخصص (abdelrahman.co)",
                    "نظام دفع متكامل (مدى، فيزا، ماستركارد)",
                    "شهادات تخرج رقمية معتمدة",
                    "تطبيق جوال لطلابك",
                    "أدوات تسويق متقدمة",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-white/60 rounded-lg"
                    >
                      <div
                        className={`w-6 h-6 ${index % 2 === 0 ? "bg-blue-100" : "bg-green-100"} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <div
                          className={`w-2 h-2 ${index % 2 === 0 ? "bg-blue-600" : "bg-green-600"} rounded-full`}
                        ></div>
                      </div>
                      <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Quick Actions */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-right">
                  <h3 className="font-bold text-lg md:text-xl mb-2">
                    جاهز لإطلاق أكاديميتك؟
                  </h3>
                  <p className="text-blue-100 text-base">
                    ابدأ الأن واحصل على نطاقك المخصص في دقائق
                  </p>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold rounded-xl w-full sm:w-auto min-h-[48px] transition-all duration-200">
                  <Link
                    href={"https://dash.manhali.com/auth/signup"}
                    className="flex items-center"
                  >
                    ابدأ الأن
                    <ArrowLeft className="ms-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
);
