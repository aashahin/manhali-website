import React from "react";
import Link from "next/link";

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white">
    <div className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
      {children}
    </div>
  </div>
);

export default function PrivacyPolicyPage() {
  const lastDate = "2025-06-26";
  return (
    <PageLayout>
      <article className="prose max-w-none prose-blue">
        <h1>سياسة الخصوصية</h1>
        <p className="lead text-gray-600">
          آخر تحديث: {lastDate}
        </p>

        <p>
          مرحباً بك في <strong>مَنهلي</strong>. نحن نأخذ خصوصيتك على محمل الجد، وتوضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية. تنطبق هذه السياسة على جميع مستخدمي منصتنا، بما في ذلك منشئي المحتوى ("المنشئون") وطلابهم وعملائهم ("الطلاب").
        </p>

        <h2>1. المعلومات التي نجمعها</h2>
        <p>نقوم بجمع أنواع مختلفة من المعلومات لتقديم خدماتنا وتحسينها:</p>

        <h3>أ. المعلومات التي يقدمها المنشئون:</h3>
        <ul>
          <li><strong>معلومات الحساب:</strong> الاسم، البريد الإلكتروني، كلمة المرور، ومعلومات الملف الشخصي عند تسجيل حساب.</li>
          <li><strong>معلومات الدفع للاشتراك:</strong> عند الاشتراك في خططنا الشهرية أو السنوية، نقوم بجمع معلومات الدفع اللازمة عبر مزود خدمة دفع آمن (مثل Stripe). نحن لا نقوم بتخزين تفاصيل بطاقتك الائتمانية على خوادمنا.</li>
          <li><strong>معلومات سحب الأرباح:</strong> لمعالجة أرباحك الأسبوعية، نجمع تفاصيل حسابك البنكي أو معلومات وسيلة الدفع التي تختارها.</li>
          <li><strong>محتوى الموقع:</strong> كل المحتوى الذي تقوم بإنشائه ورفعه، بما في ذلك الدورات (الفيديو والنصوص والملفات)، المنتجات الرقمية، المقالات، الشعارات، وإعدادات التخصيص.</li>
          <li><strong>بيانات التكاملات:</strong> إذا قمت بربط خدمات خارجية، مثل Google Analytics أو Amazon S3 أو Cloudflare، فإننا نقوم بتخزين مفاتيح الربط اللازمة بشكل آمن.</li>
          <li><strong>بيانات الاستيراد:</strong> إذا استخدمت ميزة الاستيراد من منصة "سلة"، فإننا نعالج بيانات المستخدمين والمنتجات والطلبات التي تقدمها لنا لغرض وحيد وهو نقلها إلى حسابك على منصتنا.</li>
        </ul>

        <h3>ب. المعلومات التي نجمعها عن الطلاب (بالنيابة عن المنشئين):</h3>
        <ul>
          <li><strong>معلومات التسجيل والشراء:</strong> اسم الطالب، البريد الإلكتروني، وتفاصيل عمليات الشراء التي يقوم بها على موقع المنشئ.</li>
          <li><strong>بيانات الدفع:</strong> تتم معالجة مدفوعات الطلاب عبر بوابات الدفع التي ندعمها (بوابتنا الخاصة أو Stripe). نحن لا نخزن بيانات بطاقاتهم.</li>
          <li><strong>بيانات التقدم في الدورات:</strong> نتتبع تقدم الطلاب في الدورات، مثل الدروس المكتملة، لتوفير هذه المعلومات للمنشئ ولتحسين تجربة الطالب.</li>
        </ul>

        <h3>ج. المعلومات التي نجمعها تلقائياً:</h3>
        <ul>
          <li><strong>بيانات الاستخدام وملفات تعريف الارتباط (Cookies):</strong> معلومات حول كيفية تفاعلك مع المنصة، عنوان IP، نوع المتصفح، الصفحات التي تزورها، وذلك لتحسين الأداء وتأمين المنصة.</li>
        </ul>

        <h2>2. كيف نستخدم معلوماتك</h2>
        <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
        <ul>
          <li><strong>لتقديم وتشغيل خدماتنا:</strong> إنشاء حسابك، استضافة موقعك ومحتواك، ومعالجة الاشتراكات.</li>
          <li><strong>لمعالجة المدفوعات والأرباح:</strong> معالجة عمليات شراء الطلاب بشكل آمن، وتحويل الأرباح الأسبوعية للمنشئين.</li>
          <li><strong>للتواصل معك:</strong> إرسال إشعارات هامة حول الخدمة، الرد على استفسارات الدعم الفني، وإرسال رسائل تسويقية (مع توفير خيار إلغاء الاشتراك).</li>
          <li><strong>للتحليل والتحسين:</strong> فهم كيفية استخدام المنصة لتطوير ميزات جديدة وتحسين تجربة المستخدم.</li>
          <li><strong>للأمان والامتثال القانوني:</strong> حماية المنصة من الاحتيال والأنشطة غير القانونية، والامتثال للالتزامات القانونية.</li>
        </ul>

        <h2>3. كيف نشارك معلوماتك</h2>
        <p>نحن لا نبيع بياناتك الشخصية. قد نشارك معلوماتك فقط في الحالات التالية:</p>
        <ul>
          <li><strong>مع المنشئين:</strong> يتم مشاركة معلومات الطلاب (مثل الاسم والبريد الإلكتروني وسجل الشراء) مع المنشئ الذي يملكون منتجاته، حيث يعتبر المنشئ هو المتحكم الأساسي في بيانات عملائه.</li>
          <li><strong>مع مزودي الخدمة:</strong> نشارك المعلومات مع أطراف ثالثة موثوقة تساعدنا في تشغيل خدماتنا، مثل بوابات الدفع (Stripe)، ومزودي الاستضافة (AWS, Cloudflare)، وخدمات تحليل البيانات (Google Analytics).</li>
          <li><strong>لأسباب قانونية:</strong> إذا طُلب منا ذلك بموجب القانون أو أمر قضائي، أو لحماية حقوقنا وسلامة مستخدمينا.</li>
          <li><strong>في حالة نقل الملكية:</strong> في حالة الاندماج أو الاستحواذ، قد يتم نقل معلوماتك إلى الكيان الجديد.</li>
        </ul>

        <h2>4. تخزين البيانات وأمانها</h2>
        <p>نحن نلتزم بحماية بياناتك. نستخدم تدابير أمنية تقنية وإدارية، بما في ذلك تشفير SSL، لحماية معلوماتك من الوصول غير المصرح به. أنت تتحكم في مكان تخزين ملفات المحتوى الخاصة بك، إما على خوادمنا الآمنة (الخيار الافتراضي) أو على حسابات التخزين السحابي الخاصة بك (AWS S3, Cloudflare).</p>

        <h2>5. حقوقك وخياراتك</h2>
        <p>لديك الحق في الوصول إلى معلوماتك الشخصية وتحديثها أو حذفها من خلال لوحة التحكم الخاصة بك. يمكنك أيضًا إلغاء الاشتراك في رسائل البريد الإلكتروني التسويقية في أي وقت. لحذف حسابك بالكامل، يرجى التواصل معنا.</p>

        <h2>6. خصوصية الأطفال</h2>
        <p>منصتنا غير موجهة للأطفال دون سن 13 عامًا (أو السن القانوني المعمول به في بلدك). نحن لا نجمع معلومات شخصية عن قصد من الأطفال.</p>

        <h2>7. التغييرات على هذه السياسة</h2>
        <p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإعلامك بأي تغييرات جوهرية عن طريق نشر السياسة الجديدة على هذه الصفحة وإرسال إشعار عبر البريد الإلكتروني.</p>

        <h2>8. تواصل معنا</h2>
        <p>
          إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى عدم التردد في التواصل معنا عبر البريد الإلكتروني{" "}
          <a href="mailto:support@manhali.com">support@manhali.com</a>{" "}
          أو من خلال{" "}
          <Link href="/contact">
            صفحة اتصل بنا
          </Link>
          .
        </p>
      </article>
    </PageLayout>
  );
}

export const metadata = {
  title: "سياسة الخصوصية | مَنهلي",
  description: "تعرف على كيفية جمع واستخدام وحماية معلوماتك الشخصية على منصة مَنهلي.",
}