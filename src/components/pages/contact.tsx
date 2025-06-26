"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, Phone, MessageCircle, Send, ArrowLeft, type LucideIcon } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    description: "للاستفسارات العامة والشراكات.",
    value: "support@manhali.com",
    href: "mailto:support@manhali.com",
  },
  {
    icon: Phone,
    title: "الهاتف",
    description: "للدعم الفوري (الأحد-الخميس، 9ص-6م).",
    value: "+966 55 376 8667",
    href: "tel:+966553768667",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    description: "للدعم السريع والمباشر.",
    value: "راسلنا الآن",
    href: "https://wa.me/966553768667",
  },
  {
    icon: MessageCircle,
    href: "https://manhali.zaetoon.com/chat",
    title: "فتح تذكرة",
    description: "للاستفسارات التقنية أو الدعم الفني.",
    value: "فتح تذكرة دعم",
  }
]

const faqItems = [
  {
    question: "ما الذي يمكنني بيعه على منصتكم؟",
    answer: "يمكنك بيع الدورات التدريبية، المنتجات الرقمية (كتب، قوالب)، ونشر المقالات. صممنا المنصة لتكون سهلة وبدون الحاجة لأي خبرة تقنية، مع دعم كامل للغة العربية.",
  },
  {
    question: "ما هي طرق الدفع التي تدعمونها؟",
    answer: "نُسهّل على عملائك في المنطقة العربية الشراء عبر دعم طرق الدفع الأساسية: مدى، فيزا، ماستركارد، وباي بال من خلال بوابتنا للدفع المدمجة.",
  },
  {
    question: "كيف يتم حساب الرسوم والأرباح؟",
    answer: "نظامنا واضح وشفاف. نأخذ رسماً بسيطاً قدره 4% على كل عملية بيع تتم عبر بوابتنا ويمكنك استخدام بوابة دفع أخري. والأهم، أننا لا نفرض أي رسوم على سحب أرباحك الأسبوعية.",
  },
  // Suggestion: Add a fourth item to highlight another key feature
  {
    question: "هل يمكنني استخدام نطاق (دومين) خاص بي؟",
    answer: "بالتأكيد. يمكنك ربط نطاقك الخاص بسهولة، أو الحصول على نطاق .com مجاني عند الاشتراك في الخطة السنوية لتعزيز هوية علامتك التجارية.",
  },
]

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "general",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    // Add submission logic (e.g., API call) here
  }

  return (
    <div className="rounded-xl border bg-card p-6 md:p-8">
      <h2 className="text-2xl font-bold">أرسل لنا رسالة</h2>
      <p className="mt-2 text-muted-foreground">
        سنعود إليك في أقرب وقت ممكن.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">الاسم الكامل</Label>
          <Input id="name" name="name" required placeholder="اسمك الكامل" onChange={handleInputChange} value={formData.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input id="email" name="email" type="email" required placeholder="example@email.com" onChange={handleInputChange} value={formData.email} />
        </div>
        <div className="space-y-3">
          <Label>نوع الاستفسار</Label>
          <RadioGroup name="inquiryType" defaultValue="general" onValueChange={handleRadioChange} className="grid grid-cols-2 gap-4">
            <div>
              <RadioGroupItem value="general" id="general" className="peer sr-only" />
              <Label htmlFor="general" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                استفسار عام
              </Label>
            </div>
            <div>
              <RadioGroupItem value="technical" id="technical" className="peer sr-only" />
              <Label htmlFor="technical" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                دعم تقني
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">رسالتك</Label>
          <Textarea id="message" name="message" required placeholder="اكتب رسالتك هنا..." rows={5} onChange={handleInputChange} value={formData.message} />
        </div>
        <Button type="submit" className="w-full" size="lg">
          إرسال الرسالة
          <Send className="mr-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}

// Contact Info Item Component
type ContactInfoItemProps = {
  icon: LucideIcon
  title: string
  description: string
  value: string
  href: string
}

const ContactInfoItem = ({ icon: Icon, title, description, value, href }: ContactInfoItemProps) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="block rounded-lg p-4 transition-colors hover:bg-muted/50">
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        <p className="mt-2 text-sm font-medium text-primary">{value}</p>
      </div>
    </div>
  </Link>
)

// Main Page Component
export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          تواصل معنا
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          فريقنا جاهز للإجابة على جميع أسئلتك. اختر الطريقة التي تناسبك أو املأ النموذج أدناه.
        </p>
      </div>

      {/* Main Content: Form and Info */}
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <ContactForm />
        <div className="flex flex-col gap-8">
          {contactMethods.map((method) => (
            <ContactInfoItem key={method.title} {...method} />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto mt-24 max-w-4xl">
        <h2 className="text-center text-3xl font-bold">الأسئلة الشائعة</h2>
        <p className="mt-2 text-center text-muted-foreground">
          ابحث عن إجابات سريعة لاستفساراتك هنا.
        </p>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-right text-lg">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/faq">
              عرض كل الأسئلة
              <ArrowLeft className="ms-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}