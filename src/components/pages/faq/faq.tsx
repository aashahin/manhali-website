"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  X,
} from "lucide-react"
import Link from "next/link"
import { faqData, categories } from "./data"

const parseAndRenderHTML = (text: string) => {
  const bolded = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return { __html: bolded };
};

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFAQs = useMemo(() => {
    let filtered = faqData

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query) ||
          faq.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  const clearSearch = () => {
    setSearchQuery("")
    setSelectedCategory("all")
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              الأسئلة الشائعة
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              ابحث عن إجابات لجميع أسئلتك حول منصتنا
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="ابحث في الأسئلة الشائعة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ps-10 pe-3"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-8">

            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <h3 className="text-lg font-bold text-gray-900 mb-4">الفئات</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-right transition-colors ${
                          selectedCategory === category.id
                            ? "bg-blue-600 text-white"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            selectedCategory === category.id
                              ? "bg-white/20 text-white"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedCategory === "all"
                      ? "جميع الأسئلة"
                      : categories.find((c) => c.id === selectedCategory)?.name}
                  </h2>
                  <span className="text-sm text-gray-500">{filteredFAQs.length} سؤال</span>
                </div>

                {searchQuery && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-gray-600">
                      نتائج البحث عن: "<span className="font-medium">{searchQuery}</span>"
                    </span>
                    <button
                      onClick={clearSearch}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      مسح البحث
                    </button>
                  </div>
                )}
              </div>

              {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-3">
                  {filteredFAQs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      id={`faq-${faq.id}`}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 text-right hover:no-underline hover:bg-gray-50 [&[data-state=open]]:bg-gray-50">
                        <h3 className="text-base font-medium text-gray-900 text-right flex-1">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pt-2 border-t border-gray-100">
                          {/* --- UPDATED RENDER BLOCK --- */}
                          {/* We now use a div with prose styles and dangerouslySetInnerHTML */}
                          {/* The 'whitespace-pre-line' handles newlines, and 'prose' styles the <strong> tags */}
                          <div
                            className="prose prose-sm max-w-none text-gray-600 whitespace-pre-line"
                            dangerouslySetInnerHTML={parseAndRenderHTML(faq.answer)}
                          />
                          {faq.tags.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="flex flex-wrap gap-2">
                                {faq.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <Card className="border border-gray-200 text-center py-12">
                  <CardContent>
                    <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">لم نجد نتائج</h3>
                    <p className="text-gray-600 mb-6">
                      لم نجد أي أسئلة تطابق بحثك. جرب كلمات مختلفة أو تصفح الفئات.
                    </p>
                    <Button onClick={clearSearch} variant="outline">
                      عرض جميع الأسئلة
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              لم تجد الإجابة التي تبحث عنها؟
            </h2>
            <p className="text-lg text-gray-600">
              فريق الدعم جاهز لمساعدتك. تواصل معنا بالطريقة التي تناسبك أكثر.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Live Chat */}
            <Card className="border border-gray-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">الدردشة المباشرة</h3>
                <p className="text-sm text-gray-600 mb-4">احصل على إجابة فورية</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full" asChild>
                  <Link href="https://manhali.zaetoon.com/chat" target="_blank">
                    ابدأ المحادثة
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border border-gray-200 hover:border-green-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">البريد الإلكتروني</h3>
                <p className="text-sm text-gray-600 mb-4">رد خلال ساعة واحدة</p>
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full" asChild>
                  <Link href="mailto:support@manhali.com">
                    أرسل إيميل
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border border-gray-200 hover:border-purple-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">الهاتف</h3>
                <p className="text-sm text-gray-600 mb-4">تحدث معنا مباشرة</p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full" asChild>
                  <Link href="https://wa.me/966553768667">
                    اتصل بنا
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}