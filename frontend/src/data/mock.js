// Mock data for Yunus Emre Kırbayır Portfolio Website

export const personalInfo = {
  name: "Yunus Emre KIRBAYIR",
  title: "Full-Stack Developer & Electronics Engineer",
  tagline: "Donanım ve Yazılımın Sinerjisinde Yenilikçi Çözümler",
  description: "Kocaeli Üniversitesi Elektronik ve Haberleşme Mühendisi mezunu olarak akademik ve profesyonel hayatım boyunca donanım ve yazılımın sinerjisine odaklandım. Mühendislik kökenli bakış açımla, karmaşık iş akışlarını analiz ederek bunları yüksek performanslı dijital çözümlere dönüştürüyorum.",
  email: "emrekirbayir@gmail.com",
  phone: "05395734636",
  linkedin: "https://www.linkedin.com/in/emrekrbyr/",
  github: "https://github.com/emrekrbyrr",
  location: "Kocaeli, Türkiye"
};

export const aboutText = {
  intro: "Kocaeli Üniversitesi Elektronik ve Haberleşme Mühendisi mezunu olarak akademik ve profesyonel hayatım boyunca donanım ve yazılımın sinerjisine odaklandım. Lisans eğitimim sırasında Elektromanyetik Uyumluluk (EMC) alanına yoğunlaşarak mikrodalga fırın camlarında uzay girişiminin önlenmesi, Faraday kafesi prensibiyle iletken duvar projeleri ve otonom araç sensörlerinin elektromanyetik paketlemesi gibi kritik mühendislik çalışmaları yürüttüm.",
  current: "Halihazırda bulut sistemleri (AWS), Docker ve Linux sunucu yönetimi gibi alanlarda projeler geliştirirken, elektromanyetik teori disiplini ile yazılımın esnekliğini birleştirerek karmaşık problemlere yenilikçi çözümler üretmeye devam ediyorum.",
  passion: "Sadece kod yazmaya değil; UI/UX tasarım süreçlerinden SEO stratejilerine ve yapay zeka istem mühendisliğine (Prompt Engineering) kadar dijital dünyanın farklı alanlarına ilgi duyuyor, kendimi sürekli geliştiriyorum. Karmaşık sistemleri daha verimli hale getirmek ve teknolojiyle katma değer yaratmak en büyük motivasyonumdur."
};

export const stats = [
  { value: "5+", label: "Yıl Deneyim" },
  { value: "15+", label: "Tamamlanan Proje" },
  { value: "3", label: "Uzmanlık Alanı" },
  { value: "100%", label: "Müşteri Memnuniyeti" }
];

export const skills = [
  {
    category: "Frontend Development",
    items: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Bootstrap", "UI/UX Design", "Responsive Design"]
  },
  {
    category: "Backend Development",
    items: ["Node.js", "PostgreSQL", "REST API", "Express.js", "Database Design"]
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS", "Docker", "Linux Server Management", "CI/CD", "Git"]
  },
  {
    category: "Hardware & EMC",
    items: ["Elektromanyetik Uyumluluk", "Mikrodalga Teorisi", "Faraday Kafesi", "Sensör Dizilimi", "EMC Testing"]
  },
  {
    category: "Diğer Yetenekler",
    items: ["SEO Optimization", "Prompt Engineering", "Problem Solving", "Sistem Analizi", "Proje Yönetimi"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Varlık ve Kiralama Yönetim Sistemi",
    description: "Bu platform; şirketlerin ürün kiralama süreçlerini teklif aşamasından başlayarak sözleşme, ödeme ve cari takibiyle birlikte tek merkezden yönetmesini sağlar. Operasyonel yükü azaltırken, finansal akışın hatasız ve şeffaf bir şekilde izlenmesine olanak tanır.",
    technologies: ["React.js", "Node.js", "Bootstrap", "PostgreSQL"],
    category: "Full-Stack Development",
    year: "2024"
  },
  {
    id: 2,
    title: "İtfaiye Bilgi Sistemi",
    description: "İtfaiye ekipleri için geliştirilmiş kapsamlı bilgi yönetim sistemi. Acil durum müdahalesi, ekip koordinasyonu ve raporlama süreçlerini dijitalleştirerek operasyonel verimliliği artıran modern bir platform.",
    technologies: ["Node.js", "React.js", "REST API", "Real-time Data"],
    category: "Full-Stack Development",
    year: "2024"
  },
  {
    id: 3,
    title: "Şirket Web Siteleri & SEO Çalışmaları",
    description: "Çeşitli sektörlerden şirketler için modern, responsive ve SEO optimize edilmiş web siteleri geliştirdim. Google arama sıralamalarında üst sıralara çıkmayı hedefleyen teknik ve içerik optimizasyonları uyguladım.",
    technologies: ["React.js", "SEO", "Google Analytics", "Performance Optimization"],
    category: "Web Development & SEO",
    year: "2023-2024"
  },
  {
    id: 4,
    title: "EMC Uyumlu Elektrikli Araç Sensör Dizilimi",
    description: "Otonom ve elektrikli araçlar için elektromanyetik uyumluluk standartlarına uygun sensör dizilimi tasarımı. Elektromanyetik girişimi minimize ederek güvenilir sensör performansı sağlayan mühendislik projesi.",
    technologies: ["EMC Testing", "Sensor Design", "Electromagnetic Theory", "CAD"],
    category: "Hardware Engineering",
    year: "2023"
  },
  {
    id: 5,
    title: "Mikrodalga Fırın Bal Peteği Cam Tasarımı",
    description: "Mikrodalga fırınlarda elektromanyetik sızıntıyı önlemek için Faraday kafesi prensibiyle çalışan bal peteği yapısında cam tasarımı. EMC standartlarına uygun, güvenli ve verimli bir çözüm.",
    technologies: ["EMC", "Faraday Cage", "Microwave Theory", "Material Science"],
    category: "Hardware Engineering",
    year: "2022"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    position: "CTO, TechCorp",
    text: "Yunus'un teknik bilgisi ve problem çözme yeteneği gerçekten etkileyici. Projelerimizde büyük bir fark yarattı.",
    avatar: null
  },
  {
    id: 2,
    name: "Ayşe Demir",
    position: "Proje Müdürü, InnoSoft",
    text: "Hem donanım hem yazılım konusundaki uzmanlığı sayesinde karmaşık projelerde benzersiz çözümler üretiyor.",
    avatar: null
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    position: "Founder, StartupHub",
    text: "Disiplinli çalışması ve detaylara verdiği önem ile her zaman beklentilerin üzerinde sonuçlar elde ettik.",
    avatar: null
  }
];

export const contactInfo = {
  title: "Birlikte Çalışalım",
  subtitle: "Yeni bir projeniz mi var? Benimle iletişime geçin!",
  email: "emrekirbayir@gmail.com",
  phone: "05395734636",
  linkedin: "https://www.linkedin.com/in/emrekrbyr/",
  github: "https://github.com/emrekrbyrr"
};