
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Современный интерьер гостиной",
      category: "интерьеры",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Проект визуализации минималистичного интерьера для жилого комплекса"
    },
    {
      id: 2,
      title: "Концепт-дизайн автомобиля",
      category: "экстерьеры",
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Создание футуристичного концепта спортивного автомобиля"
    },
    {
      id: 3,
      title: "Архитектурная визуализация",
      category: "архитектура",
      imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Проект визуализации жилого комплекса для строительной компании"
    },
    {
      id: 4,
      title: "Продуктовая визуализация",
      category: "продукты",
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "3D модель и визуализация инновационного гаджета для рекламы"
    },
    {
      id: 5,
      title: "Дизайн мебели",
      category: "интерьеры",
      imageUrl: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Визуализация авторской коллекции мебели для выставки"
    },
    {
      id: 6,
      title: "Коммерческое помещение",
      category: "интерьеры",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Визуализация офисного пространства для IT-компании"
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Алексей Петров",
      company: "ArchStudio",
      text: "Работа была выполнена на высшем уровне. Все детали интерьера переданы с потрясающей точностью, что помогло нам успешно презентовать проект клиенту.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200"
    },
    {
      id: 2,
      name: "Мария Иванова",
      company: "Design Plus",
      text: "Уникальный подход к работе и внимание к мельчайшим деталям. Визуализации помогли увеличить конверсию наших продаж недвижимости на 30%.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200"
    },
  ];

  const skills = [
    { name: "3D Моделирование", level: 95 },
    { name: "Текстурирование", level: 90 },
    { name: "Освещение", level: 85 },
    { name: "Анимация", level: 75 },
    { name: "Постобработка", level: 80 },
  ];

  return (
    <div className="min-h-screen bg-background font-rubik">
      {/* Header Section */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-lg font-bold text-primary">
            <span className="text-primary-500">3D</span> Визуализатор
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">Навыки</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="md:hidden">
            <Icon name="Menu" className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-[#1A1F2C]">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#9b87f5] rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary rounded-full filter blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat tracking-tight mb-6 animate-fade-in">
            <span className="block">Превращаю идеи</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#9b87f5]">в визуальные истории</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10">
            Профессиональная 3D визуализация для архитектуры, дизайна интерьеров и рекламы продуктов
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Посмотреть работы
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Связаться со мной
              <Icon name="MessageSquare" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" 
                    alt="3D Designer at work" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#9b87f5] rounded-xl p-4 shadow-lg">
                  <p className="text-white font-bold text-lg">5+ лет опыта</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold font-montserrat mb-6">Обо мне</h2>
              <p className="text-lg text-foreground/80 mb-6">
                Привет! Я 3D визуализатор с более чем 5-летним опытом работы в сфере архитектурной и интерьерной визуализации. Моя миссия — создавать фотореалистичные изображения, которые помогают моим клиентам эффективно представлять свои проекты.
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                Я специализируюсь на создании высококачественных визуализаций для архитектурных бюро, дизайн-студий и рекламных агентств. Моя работа — это идеальный баланс между техническими навыками и художественным видением.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-muted text-foreground/80">3D Max</span>
                <span className="px-4 py-2 rounded-full bg-muted text-foreground/80">Corona Renderer</span>
                <span className="px-4 py-2 rounded-full bg-muted text-foreground/80">V-Ray</span>
                <span className="px-4 py-2 rounded-full bg-muted text-foreground/80">Blender</span>
                <span className="px-4 py-2 rounded-full bg-muted text-foreground/80">Adobe Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-montserrat text-center mb-12">Мои навыки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-[#9b87f5] rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-montserrat font-semibold mb-4">Почему выбирают меня</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>Ультра-реалистичные визуализации с вниманием к деталям</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>Соблюдение сроков и прозрачное ценообразование</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>Индивидуальный подход к каждому проекту</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>Постоянное совершенствование навыков и освоение новых технологий</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>Опыт работы с клиентами из разных стран и индустрий</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-montserrat text-center mb-4">Мои работы</h2>
          <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-12">
            Исследуйте мои последние проекты, созданные для клиентов из различных индустрий
          </p>
          
          <Tabs defaultValue="all" className="w-full mb-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">Все проекты</TabsTrigger>
                <TabsTrigger value="интерьеры">Интерьеры</TabsTrigger>
                <TabsTrigger value="архитектура">Архитектура</TabsTrigger>
                <TabsTrigger value="продукты">Продукты</TabsTrigger>
                <TabsTrigger value="экстерьеры">Экстерьеры</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover-scale transition-all duration-300 border border-border">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs">
                        {item.category}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-montserrat font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="интерьеры" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.filter(item => item.category === "интерьеры").map((item) => (
                  <Card key={item.id} className="overflow-hidden hover-scale transition-all duration-300 border border-border">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-montserrat font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Другие категории работают аналогично */}
            <TabsContent value="архитектура" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.filter(item => item.category === "архитектура").map((item) => (
                  <Card key={item.id} className="overflow-hidden hover-scale transition-all duration-300 border border-border">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-montserrat font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="продукты" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.filter(item => item.category === "продукты").map((item) => (
                  <Card key={item.id} className="overflow-hidden hover-scale transition-all duration-300 border border-border">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-montserrat font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="экстерьеры" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.filter(item => item.category === "экстерьеры").map((item) => (
                  <Card key={item.id} className="overflow-hidden hover-scale transition-all duration-300 border border-border">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-montserrat font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
              Посмотреть все проекты
              <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-montserrat text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-12">
            Что говорят клиенты о моем подходе к работе и результатах
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/70">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                    <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                    <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                    <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                    <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-montserrat text-center mb-4">Свяжитесь со мной</h2>
            <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-12">
              Готов обсудить ваш проект и предложить оптимальное решение
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-montserrat font-semibold mb-4">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Icon name="Mail" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@3dvisualizer.ru" className="text-foreground/70 hover:text-primary transition-colors">
                        info@3dvisualizer.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Icon name="Phone" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Телефон</p>
                      <a href="tel:+79001234567" className="text-foreground/70 hover:text-primary transition-colors">
                        +7 (900) 123-45-67
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Icon name="MapPin" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Местоположение</p>
                      <p className="text-foreground/70">
                        Москва, Россия
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-montserrat font-medium mb-4">Социальные сети</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-muted/70 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                      <Icon name="Instagram" className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-muted/70 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                      <Icon name="Facebook" className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-muted/70 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                      <Icon name="Linkedin" className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-muted/70 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                      <Icon name="Behance" className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold mb-4">Напишите мне</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ваш email адрес"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Расскажите о вашем проекте"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Отправить сообщение
                      <Icon name="Send" className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-lg font-bold text-primary mb-2">
                <span className="text-primary-500">3D</span> Визуализатор
              </div>
              <p className="text-sm text-foreground/70">
                Профессиональная 3D визуализация для ваших проектов
              </p>
            </div>
            
            <div className="text-sm text-foreground/70 text-center md:text-right">
              <p>© {new Date().getFullYear()} 3D Визуализатор. Все права защищены.</p>
              <p className="mt-1">Сделано с <span className="text-red-500">❤</span> в России</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
