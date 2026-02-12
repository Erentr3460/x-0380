import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Building2, 
  HardHat, 
  FileText, 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Bina Konstruksiyonu",
    description: "Modern, dayanıklı ve estetik yaşam alanları inşa ediyoruz. Konuttan ticari binalara kadar geniş bir yelpazede hizmet sunuyoruz.",
    icon: <Building2 className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Altyapı Projeleri",
    description: "Şehirlerin geleceğini inşa eden sağlam altyapı çözümleri. Yol, köprü ve kanalizasyon projelerinde uzman kadro.",
    icon: <HardHat className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1533932750621-3e4e9636605a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Teknik Danışmanlık",
    description: "Projelerinizin planlama, bütçeleme ve uygulama süreçlerinde profesyonel mühendislik ve mimarlık desteği.",
    icon: <FileText className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Onarım & Bakım",
    description: "Mevcut yapılarınızın ömrünü uzatan, güvenlik standartlarını yükselten kapsamlı tadilat ve restorasyon hizmetleri.",
    icon: <Wrench className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  }
];

const projects = [
  {
    title: "Modern Konut Kompleksi",
    category: "Konstruksiyon",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    description: "72 daireden oluşan lüks yaşam alanı projesi."
  },
  {
    title: "Endüstriyel Depo Alanı",
    category: "Altyapı",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "5000m² kapalı alan prefabrik depo inşaatı."
  },
  {
    title: "Şehir Merkezi İş Merkezi",
    category: "Konstruksiyon",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "B+ sınıfı ofis ve perakende alanları."
  },
  {
    title: "Liman Revizyon Projesi",
    category: "Altyapı",
    image: "https://images.unsplash.com/photo-1493397869564-960228096964?auto=format&fit=crop&q=80&w=800",
    description: "Konteyner terminali genişletme çalışması."
  },
  {
    title: "Lüks Villa İnşaatı",
    category: "Konstruksiyon",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63bac811?auto=format&fit=crop&q=80&w=800",
    description: "Özel tasarım modern akıllı ev projesi."
  },
  {
    title: "Restorasyon Çalışması",
    category: "Onarım & Bakım",
    image: "https://images.unsplash.com/photo-1490644659564-e40636733971?auto=format&fit=crop&q=80&w=800",
    description: "Tarihi eser statüsündeki binanın aslına uygun yenilenmesi."
  }
];

const socialLinks = [
  { name: "Instagram", icon: <Instagram className="w-8 h-8" />, href: "https://instagram.com", color: "hover:text-[#E4405F]" },
  { name: "LinkedIn", icon: <Linkedin className="w-8 h-8" />, href: "https://linkedin.com", color: "hover:text-[#0A66C2]" },
  { name: "Facebook", icon: <Facebook className="w-8 h-8" />, href: "https://facebook.com", color: "hover:text-[#1877F2]" },
  { name: "Twitter", icon: <Twitter className="w-8 h-8" />, href: "https://twitter.com", color: "hover:text-[#1DA1F2]" },
  { name: "YouTube", icon: <Youtube className="w-8 h-8" />, href: "https://youtube.com", color: "hover:text-[#FF0000]" },
  { name: "WhatsApp", icon: <MessageCircle className="w-8 h-8" />, href: "https://wa.me/900000000000", color: "hover:text-[#25D366]" },
];

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const [activeCategory, setActiveCategory] = useState("Hepsi");
  const categories = ["Hepsi", ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeCategory === "Hepsi" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      {/* Navigation */}
      <nav className="fixed w-full z-[100] transition-all duration-500 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-primary p-2.5 rounded-2xl group-hover:rotate-12 transition-transform duration-500">
              <img src="/7a1cb3c2-1074-4bad-96f0-40b858e43d20.png" alt="Sert Yapı Logo" className="h-7 w-auto brightness-0 invert" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-primary leading-none">SERT YAPI</span>
              <span className="text-[8px] font-bold tracking-[0.4em] text-secondary uppercase leading-none mt-1">SİSTEMLERİ</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            {["Hizmetler", "Hakkımızda", "Projeler", "İletişim"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace('ı', 'i').replace('ü', 'u')}`} 
                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-primary transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Teklif Alın</span>
            </div>
          </div>

          <button className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed inset-0 z-50 bg-white md:hidden flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-xl">
                  <img src="/7a1cb3c2-1074-4bad-96f0-40b858e43d20.png" alt="Sert Yapı Logo" className="h-6 w-auto brightness-0 invert" />
                </div>
                <span className="text-xl font-black tracking-tighter text-primary">SERT YAPI</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-10">
              {["Hizmetler", "Hakkımızda", "Projeler", "İletisim"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace('ı', 'i').replace('ü', 'u')}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-4xl font-black text-primary tracking-tighter"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="mt-auto">
              <div className="text-[10px] font-black text-secondary tracking-widest uppercase mb-6">Bize Ulaşın</div>
              <div className="text-xl font-bold text-primary mb-2">+90 (212) 000 00 00</div>
              <div className="text-xl font-bold text-primary">info@sertyapi.com</div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a192f]">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2400" 
            alt="Modern Construction" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-[#0a192f]/50" />
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 -right-20 w-80 h-80 border-[40px] border-secondary/30 rounded-full" />
          <div className="absolute bottom-1/4 -right-40 w-120 h-120 border-[2px] border-secondary/20 rounded-full" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-6 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-secondary font-bold tracking-widest uppercase text-xs">Mükemmelliği İnşa Ediyoruz</span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-[0.85] tracking-tighter">
                <span className="block">SERT</span>
                <span className="text-transparent border-text-stroke opacity-80 block">YAPI</span>
                <span className="text-secondary block">SİSTEMİ</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
                Güvenilir inşaat çözümleriyle geleceği şekillendiriyoruz. Modern mühendislik, estetik tasarım ve sarsılmaz kalite anlayışı.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0a192f] bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Expert" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-[#0a192f] bg-secondary flex items-center justify-center text-white text-xs font-bold">
                    +50
                  </div>
                </div>
                <div className="text-gray-400 text-sm">
                  <span className="text-white font-bold block">50+ Uzman Kadro</span>
                  Projeleriniz emin ellerde
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="hidden lg:block flex-1 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200" 
                  alt="Architecture" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-xl shadow-2xl flex items-center gap-4 border border-gray-100"
              >
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <CheckCircle2 className="text-secondary w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-black text-primary">200+</div>
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Başarıyla Tamamlanan Proje</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-32 bg-[#f8fafc] relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-10 left-10 text-[20rem] font-black text-black/[0.02] leading-none pointer-events-none select-none">
          SERVICES
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">Neler Yapıyoruz?</span>
              </motion.div>
              <h3 className="text-5xl md:text-7xl font-black text-primary leading-[0.9] tracking-tighter">
                UZMANLIK <br /> <span className="text-secondary">ALANLARIMIZ</span>
              </h3>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-500 max-w-sm text-lg font-light leading-relaxed border-l-2 border-gray-200 pl-6"
            >
              Her projede mühendislik hassasiyeti ve mimari estetiği bir araya getirerek değer yaratıyoruz.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-4 border border-gray-100"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-500">
                    <div className="text-primary group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors duration-500">{service.title}</h4>
                  <p className="text-gray-500 font-light leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-300 cursor-pointer">
                    Detayları Gör <ChevronRight size={16} className="text-secondary" />
                  </div>
                </div>

                {/* Hover Image Background (Subtle) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl overflow-hidden pointer-events-none">
                  <img src={service.image} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-32 bg-[#0a192f] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                  alt="Construction work" 
                  className="w-full h-auto scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a192f]/40 to-transparent" />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-10 -right-10 bg-secondary p-10 rounded-[2.5rem] shadow-2xl rotate-3">
                <div className="text-5xl font-black text-white mb-1">15+</div>
                <div className="text-[10px] font-bold text-white uppercase tracking-[0.2em] leading-tight">YILLIK<br />DENEYİM</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">Hakkımızda</span>
              </div>
              
              <h3 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                GELECEĞİN <br /> <span className="text-transparent border-text-stroke">MİMARİSİNİ</span> <br /> İNŞA EDİYORUZ
              </h3>
              
              <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
                Sert Yapı Sistemleri olarak, inşaat sektöründe sadece yapılar değil, güven ve sürdürülebilirlik inşa ediyoruz. Yarım asırlık vizyonumuzla, modern teknolojiyi geleneksel sağlamlıkla buluşturuyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                {[
                  { label: "Tamamlanan Proje", value: "200+", icon: <CheckCircle2 className="text-secondary" /> },
                  { label: "Uzman Kadro", value: "50+", icon: <HardHat className="text-secondary" /> },
                ].map((stat) => (
                  <div key={stat.label} className="flex gap-4">
                    <div className="mt-1">{stat.icon}</div>
                    <div>
                      <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-white/5 flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2 className="text-secondary w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase">ISO 9001 Sertifikalı</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2 className="text-secondary w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase">7/24 Teknik Destek</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projeler" className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">Portfolyomuz</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black text-primary leading-[0.9] tracking-tighter">
                SEÇKİN <br /> <span className="text-secondary">PROJELERİMİZ</span>
              </h2>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-2 bg-gray-50 p-1.5 rounded-full border border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-500 ${
                    activeCategory === cat 
                      ? "bg-primary text-white shadow-lg" 
                      : "bg-transparent text-gray-400 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-x-0 bottom-0 p-10 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[1px] w-8 bg-secondary" />
                    <span className="text-secondary text-[10px] font-black tracking-[0.2em] uppercase">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-3xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-secondary transition-colors duration-300">{project.title}</h4>
                  <p className="text-gray-300 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 cursor-pointer group/link">
                    PROJEYİ İNCELE <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-secondary transition-colors duration-300"><ChevronRight size={14} /></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Media & Contact Section */}
      <section id="iletisim" className="py-32 bg-[#f8fafc] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">Bağlantıda Kalalım</span>
              </motion.div>
              
              <h3 className="text-5xl md:text-7xl font-black text-primary mb-12 leading-[0.9] tracking-tighter">
                BİZE <br /> <span className="text-secondary">ULAŞIN</span>
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-2">TELEFON HATTI</div>
                    <div className="text-2xl font-black text-primary tracking-tight">+90 (212) 000 00 00</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-2">E-POSTA ADRESİ</div>
                    <div className="text-2xl font-black text-primary tracking-tight">info@sertyapi.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-2">MERKEZ OFİS</div>
                    <div className="text-2xl font-black text-primary tracking-tight">İş Merkezi, No:123, İstanbul</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -rotate-3" />
              <div className="relative bg-white p-12 md:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-gray-100">
                <h4 className="text-3xl font-black text-primary mb-12 tracking-tight flex items-center gap-4">
                  DİJİTAL DÜNYA <div className="h-px flex-1 bg-gray-100" />
                </h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex flex-col items-center justify-center gap-4 p-8 rounded-[2.5rem] bg-gray-50 transition-all duration-500 hover:bg-white hover:shadow-2xl overflow-hidden relative`}
                    >
                      <div className={`z-10 text-gray-400 ${social.color.replace('hover:', 'group-hover:')} transition-colors duration-500`}>
                        {social.icon}
                      </div>
                      <span className="z-10 text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors duration-500">{social.name}</span>
                      
                      {/* Decorative background circle on hover */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-secondary/5 rounded-full group-hover:w-32 group-hover:h-32 transition-all duration-700" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-32 pb-16 text-white relative overflow-hidden">
        {/* Decorative background logo */}
        <div className="absolute top-0 right-0 text-[30rem] font-black text-white/[0.02] leading-none pointer-events-none translate-x-1/3 -translate-y-1/4">
          SERT
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-4 mb-10 group">
                <div className="bg-white p-2.5 rounded-2xl group-hover:rotate-12 transition-transform duration-500">
                  <img src="/7a1cb3c2-1074-4bad-96f0-40b858e43d20.png" alt="Logo" className="h-8 w-auto" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black tracking-tighter leading-none">SERT YAPI</span>
                  <span className="text-[10px] font-bold tracking-[0.4em] text-secondary uppercase leading-none mt-1">SİSTEMLERİ</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-light text-lg mb-10">
                Geleceğin dünyasını sağlam temeller, yenilikçi mühendislik ve kusursuz estetikle inşa ediyoruz.
              </p>
              <div className="flex gap-4">
                {socialLinks.slice(0, 4).map((social) => (
                  <a key={social.name} href={social.href} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-10">Kurumsal</h4>
              <ul className="space-y-5">
                {["Hizmetler", "Hakkımızda", "Projeler", "Kariyer", "Bize Ulaşın"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 font-light flex items-center gap-2 group">
                      <div className="w-0 h-px bg-secondary transition-all duration-300 group-hover:w-4" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-10">Uzmanlıklar</h4>
              <ul className="space-y-5">
                {services.map((service) => (
                  <li key={service.title}>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 font-light flex items-center gap-2 group">
                      <div className="w-0 h-px bg-secondary transition-all duration-300 group-hover:w-4" />
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-8">Bülten</h4>
              <p className="text-gray-400 mb-8 font-light text-sm leading-relaxed">
                En yeni projelerimizden haberdar olmak için bültenimize abone olun.
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-light focus:outline-none focus:border-secondary transition-colors"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-secondary text-white px-6 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
                  Katıl
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} Sert Yapı Sistemi. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="flex gap-10">
              <a href="#" className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Gizlilik</a>
              <a href="#" className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Çerezler</a>
              <a href="#" className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">KVKK</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
