import { useState } from "react";
import { motion } from "framer-motion";
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
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const services = [
  {
    title: "Bina Konstruksiyonu",
    description: "Modern, dayanıklı ve estetik yaşam alanları inşa ediyoruz. Konuttan ticari binalara kadar geniş bir yelpazede hizmet sunuyoruz.",
    icon: <Building2 className="w-10 h-10 text-secondary" />
  },
  {
    title: "Altyapı Projeleri",
    description: "Şehirlerin geleceğini inşa eden sağlam altyapı çözümleri. Yol, köprü ve kanalizasyon projelerinde uzman kadro.",
    icon: <HardHat className="w-10 h-10 text-secondary" />
  },
  {
    title: "Teknik Danışmanlık",
    description: "Projelerinizin planlama, bütçeleme ve uygulama süreçlerinde profesyonel mühendislik ve mimarlık desteği.",
    icon: <FileText className="w-10 h-10 text-secondary" />
  },
  {
    title: "Onarım & Bakım",
    description: "Mevcut yapılarınızın ömrünü uzatan, güvenlik standartlarını yükselten kapsamlı tadilat ve restorasyon hizmetleri.",
    icon: <Wrench className="w-10 h-10 text-secondary" />
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
  }
];

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/7a1cb3c2-1074-4bad-96f0-40b858e43d20.png" alt="Sert Yapı Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold tracking-tight text-primary hidden sm:block">SERT YAPI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#hizmetler" className="font-medium hover:text-secondary transition-colors">Hizmetler</a>
            <a href="#hakkimizda" className="font-medium hover:text-secondary transition-colors">Hakkımızda</a>
            <a href="#projeler" className="font-medium hover:text-secondary transition-colors">Projeler</a>
            <a href="#iletisim" className="font-medium hover:text-secondary transition-colors">İletişim</a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6">Teklif Al</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-b border-gray-100 px-4 py-4 flex flex-col gap-4"
          >
            <a href="#hizmetler" onClick={() => setIsMenuOpen(false)} className="font-medium">Hizmetler</a>
            <a href="#hakkimizda" onClick={() => setIsMenuOpen(false)} className="font-medium">Hakkımızda</a>
            <a href="#projeler" onClick={() => setIsMenuOpen(false)} className="font-medium">Projeler</a>
            <a href="#iletisim" onClick={() => setIsMenuOpen(false)} className="font-medium">İletişim</a>
            <Button className="bg-primary w-full">Teklif Al</Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
            alt="Construction site" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary p-3 rounded-lg shadow-lg">
                <img src="/7a1cb3c2-1074-4bad-96f0-40b858e43d20.png" alt="Logo" className="h-12 w-auto brightness-0 invert" />
              </div>
              <div className="h-1 w-20 bg-secondary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Sert Yapı Sistemi - <br />
              <span className="text-secondary">Güvenilir</span> İnşaat Çözümleri
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Yılların verdiği tecrübe ve modern teknoloji ile hayallerinizdeki yapıları sağlam temeller üzerine inşa ediyoruz. Geleceği birlikte kuruyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-7 h-auto">
                Projelerimizi İnceleyin <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-7 h-auto">
                Bize Ulaşın
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 p-8 hidden lg:block">
          <div className="flex gap-12 text-white/50 font-bold text-lg">
            <div className="flex flex-col">
              <span className="text-white text-4xl mb-1">15+</span>
              <span>Yıllık Deneyim</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-4xl mb-1">200+</span>
              <span>Tamamlanan Proje</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-4xl mb-1">50+</span>
              <span>Uzman Kadro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Neler Yapıyoruz?</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary mb-6">Kapsamlı İnşaat Hizmetleri</h3>
            <div className="h-1.5 w-24 bg-secondary mx-auto mb-6" />
            <p className="text-gray-600">Her projede kalite, güvenlik ve zamanında teslimat prensipleriyle çalışarak beklentilerinizin ötesine geçiyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-none group">
                  <CardHeader className="pt-8">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                  alt="Construction work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary -z-10 rounded-2xl hidden md:block" />
              <div className="absolute -top-8 -left-8 w-64 h-64 border-4 border-secondary -z-10 rounded-2xl hidden md:block" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Biz Kimiz?</h2>
              <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">Uzmanlık ve Güvenle Geleceği İnşa Ediyoruz</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Sert Yapı, kurulduğu günden bu yana inşaat sektöründe kalite ve güvenin adresi olmuştur. Modern mimariyi, mühendislik disipliniyle birleştirerek sadece binalar değil, sağlam yaşam alanları inşa ediyoruz.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Her bir projemizde en yüksek kalite standartlarını ve iş güvenliği prensiplerini odağımıza alıyoruz. Teknik kadromuzun uzmanlığı ve yenilikçi yaklaşımımızla, sektördeki değişime öncülük ediyoruz.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                  <span className="font-bold">Yüksek Kalite Standartları</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                  <span className="font-bold">Zamanında Teslimat</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                  <span className="font-bold">Modern Mühendislik</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                  <span className="font-bold">Sürdürülebilir Çözümler</span>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-lg font-bold">
                Hakkımızda Daha Fazlası
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projeler" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Portfolyomuz</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6">Öne Çıkan Projelerimiz</h3>
              <div className="h-1.5 w-24 bg-secondary mb-6" />
              <p className="text-gray-300 text-lg">
                Titizlikle tamamladığımız ve gurur duyduğumuz seçkin projelerimizden bazıları.
              </p>
            </div>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 h-12">
              Tümünü Gör
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-secondary font-bold text-sm mb-2 uppercase tracking-widest">{project.category}</span>
                  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            <div className="lg:w-2/5 bg-primary p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">İletişim Bilgilerimiz</h3>
              <p className="text-gray-300 mb-12">
                Projeleriniz için teklif almak veya merak ettiklerinizi sormak için bize ulaşabilirsiniz.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-secondary font-bold text-sm uppercase">Telefon</p>
                    <p className="text-xl">+90 (212) 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-secondary font-bold text-sm uppercase">E-posta</p>
                    <p className="text-xl">info@sertyapi.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-secondary font-bold text-sm uppercase">Adres</p>
                    <p className="text-lg">İnşaat Mah. Modern Sk. No:24, Beşiktaş/İstanbul</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                  <span className="font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                  <span className="font-bold">ig</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                  <span className="font-bold">fb</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5 p-12">
              <h3 className="text-3xl font-bold mb-8 text-primary">Bize Mesaj Gönderin</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Adınız Soyadınız</Label>
                    <Input id="name" placeholder="John Doe" className="h-12 border-gray-200 focus:border-secondary focus:ring-secondary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta Adresiniz</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-12 border-gray-200 focus:border-secondary focus:ring-secondary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon Numaranız</Label>
                  <Input id="phone" placeholder="+90 5xx xxx xx xx" className="h-12 border-gray-200 focus:border-secondary focus:ring-secondary" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mesajınız</Label>
                  <Textarea id="message" placeholder="Projeniz hakkında kısa bir bilgi verin..." className="min-h-[150px] border-gray-200 focus:border-secondary focus:ring-secondary" />
                </div>
                
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-14 text-lg">
                  Gönder
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-20 pb-10 text-white border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img src="/7a1cb3c2-1074-4bad-96f0-40b858e43d20.png" alt="Logo" className="h-10 w-auto brightness-0 invert" />
                <span className="text-2xl font-bold tracking-tight">SERT YAPI</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Modern mühendislik çözümleri ve köklü inşaat tecrübemizle yarının sağlam yapılarını bugünden inşa ediyoruz.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 relative inline-block">
                Hızlı Linkler
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary" />
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-secondary transition-colors">Ana Sayfa</a></li>
                <li><a href="#hakkimizda" className="hover:text-secondary transition-colors">Hakkımızda</a></li>
                <li><a href="#projeler" className="hover:text-secondary transition-colors">Projelerimiz</a></li>
                <li><a href="#iletisim" className="hover:text-secondary transition-colors">Bize Ulaşın</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 relative inline-block">
                Hizmetlerimiz
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary" />
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#hizmetler" className="hover:text-secondary transition-colors">Bina Konstruksiyonu</a></li>
                <li><a href="#hizmetler" className="hover:text-secondary transition-colors">Altyapı Projeleri</a></li>
                <li><a href="#hizmetler" className="hover:text-secondary transition-colors">Teknik Danışmanlık</a></li>
                <li><a href="#hizmetler" className="hover:text-secondary transition-colors">Onarım & Bakım</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 relative inline-block">
                Bize Ulaşın
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary" />
              </h4>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-start gap-3">
                  <MapPin className="text-secondary shrink-0" size={20} />
                  <span>İnşaat Mah. Modern Sk. No:24, Beşiktaş/İstanbul</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-secondary shrink-0" size={20} />
                  <span>+90 (212) 123 45 67</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-secondary shrink-0" size={20} />
                  <span>info@sertyapi.com</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Sert Yapı Sistemi. Tüm Hakları Saklıdır.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
