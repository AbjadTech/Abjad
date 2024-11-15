'use client'
import Image from 'next/image'
import { useLanguage } from '@/contexts/languageSelction'
import Link from 'next/link'

export default function About() {
  const { isArabic, setIsArabic } = useLanguage();

  const content = {
    ar: {
      title1: "من نحن؟",
      title2: "قيمنا الأساسية", 
      title3: "ما نقدمه",
      title4: "من نخدم",
      p1: "أبجد التقنية هي فريق من المطورين المستقلين الملتزمين بشغف بإنشاء أدوات مبتكرة لتلبية احتياجات المجتمع الرقمي المتنوعة. تأسست المنظمة من قِبل مجموعة صغيرة من الأفراد المتشابهين في التفكير – @v0id_user و@***** و@**** على منصة X – ونحن متخصصون في بناء حلول عملية وذات جودة عالية تركز على الأمان والفائدة والموثوقية.\n\nفي أبجد التقنية، نحن أكثر من مجرد مطورين؛ نحن مجتمع من محبي التكنولوجيا يجمعنا التزام مشترك لإحداث فرق. فريقنا يجمع بين مهارات ومنظورات متنوعة لبناء أدوات تعالج التحديات الحقيقية التي يواجهها المطورون والمستخدمون على الإنترنت. نحن في المراحل الأولى من رحلتنا، لكن أهدافنا طموحة وواضحة.",
      p2: "قيمنا الأساسية بسيطة لكنها مؤثرة: نسعى لخلق أدوات مفيدة حقًا، مدفوعة باحتياجات مستخدمينا. مثل أي فريق متفانٍ، نؤمن بقدرة التكنولوجيا الجيدة على حل المشكلات وجعل الحياة أسهل وأكثر أمانًا.",
      p3: "تشمل مشاريعنا أدوات تركز على الأمان بالإضافة إلى أدوات للبروتوكولات الخاصة بسطح المكتب عن بُعد (RDP) وأكثر. أحد أبرز ابتكاراتنا هو كورد جارد، وهو حل لمكافحة الفيروسات المصغرة صُمم خصيصًا لاكتشاف التهديدات مثل برمجيات سرقة بيانات ديسكورد وتليجرام. يركز عملنا على مساعدة المستخدمين والمطورين على الإنترنت في الحفاظ على الأمان والوعي والتمكين.",
      p4: "تم تصميم أدواتنا لمن يهتمون بالعالم الرقمي – سواء كانوا مطورين أو محبي التكنولوجيا أو مستخدمين يوميين يبحثون عن حلول أمنية موثوقة. إذا كنت شخصًا يقدّر الأمان الفعال على الإنترنت، فإن أبجد التقنية هنا لتزويدك بأدوات فعالة للتنقل في العالم الرقمي بثقة."
    },
    en: {
      title1: "Who Are We?",
      title2: "Our Core Values",
      title3: "What We Offer", 
      title4: "Who We Serve",
      p1: "Abjad Tech is a team of independent developers passionately committed to creating innovative tools to meet the diverse needs of the digital community. Founded by a small group of like-minded individuals - @v0id_user, @***** and @***** on X platform - we specialize in building practical, high-quality solutions focused on security, utility, and reliability.\n\nAt Abjad Tech, we're more than just developers; we're a community of tech enthusiasts united by a shared commitment to making a difference. Our team combines diverse skills and perspectives to build tools that address real challenges faced by developers and users online. We're in the early stages of our journey, but our goals are ambitious and clear.",
      p2: "Our core values are simple yet impactful: we strive to create genuinely useful tools, driven by our users' needs. Like any dedicated team, we believe in the power of good technology to solve problems and make life easier and more secure.",
      p3: "Our projects include security-focused tools along with solutions for Remote Desktop Protocol (RDP) and more. One of our notable innovations is Cord Guard, a lightweight antivirus solution specifically designed to detect threats like Discord and Telegram token stealers. Our work focuses on helping online users and developers stay secure, aware, and empowered.",
      p4: "Our tools are designed for those who care about the digital world - whether they're developers, tech enthusiasts, or everyday users looking for reliable security solutions. If you're someone who values functional security online, Abjad Tech is here to provide you with effective tools to navigate the digital world with confidence."
    }
  }
  return (
    <div className={`min-h-screen bg-[#F2F3F5] text-black ${!isArabic ? 'ltr' : 'rtl'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <button 
        onClick={() => setIsArabic(!isArabic)}
        className="fixed top-4 right-4 lg:top-8 lg:right-8 z-50 bg-white/80 backdrop-blur-sm border border-black/10 shadow-lg rounded-full p-2.5 hover:bg-white/90 transition-all duration-300 group"
        aria-label="Switch language"
      >
        <div className="relative w-6 h-6 overflow-hidden">
          <div className={`absolute inset-0 transition-transform duration-300 ${isArabic ? 'translate-y-0' : 'translate-y-full'}`} style={{ fontFamily: 'TheYearofTheCamel-Bold', fontSize: '19px' }}>
            A
          </div>
          <div className={`absolute inset-0 transition-transform duration-300 ${isArabic ? '-translate-y-full' : 'translate-y-0'}`} style={{ fontFamily: 'TheYearofTheCamel-Bold' }}>
            ع
          </div>
        </div>
      </button>

      <header className="flex flex-col items-center py-6 md:py-10 lg:py-16">
        <Image
          src="/abjd_logo_blue.png?height=150&width=150"
          alt="TechCo logo"
          width={150}
          height={150}
          className="w-24 h-24 md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] mb-3"
        />
        {isArabic ? (
          <img src="/abjad_tech_text_ar.svg" alt="أبجد التقنية" className="w-full max-w-[280px] md:max-w-xl lg:max-w-2xl px-4" />
        ) : (
          <h1 className="font-bold mt-5 text-6xl md:text-[114px] lg:text-[144px]" style={{ fontFamily: 'TheYearofTheCamel-Bold' }}>Abjad Tech</h1>
        )}
      </header>

      <main className="max-w-4xl lg:max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: 'TheYearofTheCamel-Bold' }}>
          {isArabic ? content.ar.title1 : content.en.title1}
        </h2>
        <p className="mb-8 md:mb-10 lg:mb-12 leading-relaxed text-sm md:text-base lg:text-lg" style={{ fontFamily: 'TheYearofTheCamel-Light' }}>
          {isArabic ? content.ar.p1 : content.en.p1}
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: 'TheYearofTheCamel-Bold' }}>
          {isArabic ? content.ar.title2 : content.en.title2}
        </h2>
        <p className="mb-8 md:mb-10 lg:mb-12 leading-relaxed text-sm md:text-base lg:text-lg" style={{ fontFamily: 'TheYearofTheCamel-Light' }}>
          {isArabic ? content.ar.p2 : content.en.p2}
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: 'TheYearofTheCamel-Bold' }}>
          {isArabic ? content.ar.title3 : content.en.title3}
        </h2>
        <p className="mb-8 md:mb-10 lg:mb-12 leading-relaxed text-sm md:text-base lg:text-lg" style={{ fontFamily: 'TheYearofTheCamel-Light' }}>
          {isArabic ? content.ar.p3 : content.en.p3}
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: 'TheYearofTheCamel-Bold' }}>
          {isArabic ? content.ar.title4 : content.en.title4}
        </h2>
        <p className="mb-8 md:mb-10 lg:mb-12 leading-relaxed text-sm md:text-base lg:text-lg" style={{ fontFamily: 'TheYearofTheCamel-Light' }}>
          {isArabic ? content.ar.p4 : content.en.p4}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 md:mt-12 lg:mt-16">
          <Link 
            href="mailto:hello@abjad.cc"
            className="bg-[#2300F7] text-[#F2F3F5] font-bold py-2 px-6 lg:py-3 lg:px-8 hover:bg-opacity-90 transition-colors shadow-xl w-full sm:w-[180px] lg:w-[220px] text-center text-sm md:text-base lg:text-lg"
            style={{ fontFamily: 'TheYearofTheCamel-Bold' }}
          >
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
          </Link>

          <Link
            href="/"
            className="bg-[#2300F7] text-[#F2F3F5] font-bold py-2 px-6 lg:py-3 lg:px-8 hover:bg-opacity-90 transition-colors shadow-xl w-full sm:w-[180px] lg:w-[220px] text-center text-sm md:text-base lg:text-lg"
            style={{ fontFamily: 'TheYearofTheCamel-Bold' }}
          >
            {isArabic ? 'الصفحة الرئيسية' : 'Home Page'}
          </Link>
        </div>
      </main>
    </div>
  );
}
