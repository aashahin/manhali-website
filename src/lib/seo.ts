import { Metadata } from "next";

const title = "مَنهلي: أنشئ موقعك التعليمي لبيع الدورات أونلاين";
const description =
  "مَنهلي هي منصة عربية متكاملة تمنحك كل الأدوات لإنشاء موقعك التعليمي الاحترافي وبيع دوراتك أونلاين. ابدأ اليوم بتحويل خبرتك إلى مشروع مربح بدون أي خبرة برمجية.";
const domain = "manhali.com";

export const websiteMetadata: Metadata = {
  title,
  description,
  authors: [
    {
      name: "عبدالرحمن شاهين",
      url: "https://abdelrahman.co",
    },
  ],
  applicationName: "مَنهلي",
  category: "Education",
  keywords: [
    "منصة تعليمية",
    "بيع الدورات أونلاين",
    "إنشاء مواقع تعليمية",
    "دورات عبر الإنترنت",
    "أكاديمية أونلاين",
    "للمدربين العرب",
    "بديل Teachable عربي",
    "منصة SaaS عربية",
    "بيع المحتوى الرقمي",
    "بديل مساق",
    "teachable عربي"
  ],
  openGraph: {
    title,
    description,
    url: `https://${domain}`,
    siteName: "مَنهلي",
    images: [
      {
        url: `https://${domain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};
