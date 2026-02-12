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

  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <img src="/7a1cb3c2-1074-4bad-96f0-40b858e43d20.png" alt="Sert Yapı Logo" className="h-8 w-auto brightness-0 invert" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-primary hidden sm:block">SERT YAPI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {["Hizmetler", "Hakkımızda", "Projeler", "İletişim"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace('ı', 'i')}`} 
                className="text-sm font-bold uppercase tracking-widest hover:text-secondary transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button className="md:hidden p-2 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-6 py-8 flex flex-col gap-6 shadow-2xl"
          >
            {["Hizmetler", "Hakkımızda", "Projeler", "İletişim"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace('ı', 'i')}`} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-lg font-bold uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0 opacity-40"
        >
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
            alt="Construction site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
        </motion.div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-0.5 w-16 bg-secondary" />
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">Güvenle İnşa Ediyoruz</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              SERT YAPI <br />
              <span className="text-transparent border-text-stroke">SİSTEMİ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
              Geleceği sağlam temeller üzerine kuruyoruz. Modern mühendislik ve estetik mimariyi buluşturan güvenilir çözüm ortağınız.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Hizmetlerimiz</h2>
              <h3 className="text-5xl md:text-7xl font-black text-primary leading-none tracking-tighter">
                UZMANLIK <br /> ALANLARIMIZ
              </h3>
            </div>
            <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed">
              Her aşamada mükemmelliği hedefleyen, teknik derinliğe sahip inşaat ve mühendislik çözümleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-6 transform -translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 leading-tight">{service.title}</h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-32">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                  alt="Construction work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary rounded-2xl -z-10 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full -z-20" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Hakkımızda</h2>
              <h3 className="text-5xl md:text-6xl font-black text-primary mb-10 leading-[0.9] tracking-tighter">
                BİR NESLİN <br /> GÜVENİNİ İNŞA <br /> EDİYORUZ
              </h3>
              <p className="text-gray-600 text-xl mb-8 leading-relaxed font-light italic border-l-4 border-secondary pl-6">
                "Sert Yapı, kurulduğu günden bu yana inşaat sektöründe kalite ve güvenin adresi olmuştur."
              </p>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
                Modern mimariyi, mühendislik disipliniyle birleştirerek sadece binalar değil, sağlam yaşam alanları inşa ediyoruz. Teknik kadromuzun uzmanlığı ve yenilikçi yaklaşımımızla, sektördeki değişime öncülük ediyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Deneyim", value: "15+ Yıl" },
                  { label: "Proje", value: "200+" },
                  { label: "Uzman", value: "50+" },
                  { label: "Mutluluk", value: "%100" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                    <div className="text-secondary font-bold text-xs uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projeler" className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Portfolyomuz</h2>
              <h3 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                SEÇKİN <br /> PROJELER
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-2xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent flex flex-col justify-end p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-secondary font-bold text-xs mb-3 uppercase tracking-[0.2em]">{project.category}</span>
                  <h4 className="text-3xl font-black mb-4 tracking-tight leading-tight">{project.title}</h4>
                  <p className="text-gray-300 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Contact Section */}
      <section id="iletisim" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Bize Ulaşın</h2>
              <h3 className="text-5xl md:text-7xl font-black text-primary mb-12 leading-none tracking-tighter">
                DİJİTALDE <br /> TAKİP EDİN
              </h3>
              
              <div className="space-y-8 mb-16">
                <div className="flex items-center gap-6 group">
                  <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Telefon</div>
                    <div className="text-xl font-bold text-primary">+90 (212) 000 00 00</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">E-Posta</div>
                    <div className="text-xl font-bold text-primary">info@sertyapi.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Adres</div>
                    <div className="text-xl font-bold text-primary">İş Merkezi, No:123, İstanbul, Türkiye</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-12 md:p-16 rounded-[40px] shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <h4 className="text-3xl font-black text-primary mb-10 tracking-tight">SOSYAL MEDYA</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-4 p-6 rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${social.color}`}
                  >
                    {social.icon}
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{social.name}</span>
                  </motion.a>
                ))}
              </div>
              <p className="mt-12 text-center text-gray-400 font-light text-sm">
                En yeni projelerimiz ve güncel duyurularımız için bizi takip etmeyi unutmayın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-32 pb-16 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white p-2 rounded-lg">
                  <img src="/7a1cb3c2-1074-4bad-96f0-40b858e43d20.png" alt="Logo" className="h-8 w-auto" />
                </div>
                <span className="text-3xl font-black tracking-tighter">SERT YAPI</span>
              </div>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                Yarının sağlam yapılarını bugünden, güven ve uzmanlıkla inşa ediyoruz.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-8">Hızlı Linkler</h4>
              <ul className="space-y-4">
                {["Hizmetler", "Hakkımızda", "Projeler", "İletişim"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace('ı', 'i')}`} className="text-gray-400 hover:text-white transition-colors duration-300 font-light">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-8">Hizmetlerimiz</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.title}>
                    <a href="#hizmetler" className="text-gray-400 hover:text-white transition-colors duration-300 font-light">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-8">İletişim</h4>
              <p className="text-gray-400 mb-6 font-light leading-relaxed">
                Her türlü soru ve proje talebiniz için bizimle iletişime geçmekten çekinmeyin.
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-500 font-light">
                <span className="flex items-center gap-2"><Phone size={14} className="text-secondary" /> +90 (212) 000 00 00</span>
                <span className="flex items-center gap-2"><Mail size={14} className="text-secondary" /> info@sertyapi.com</span>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-500 text-sm font-light">
              &copy; {new Date().getFullYear()} Sert Yapı Sistemi. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Gizlilik Politikası</a>
              <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
