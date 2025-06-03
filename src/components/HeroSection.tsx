import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Строим дома вашей мечты
            <span className="text-orange-400 block">под ключ</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Индивидуальное проектирование и строительство жилых домов, коттеджей
            и коммерческих зданий. Гарантия качества 5 лет.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            <Icon name="Phone" className="mr-2" />
            Получить консультацию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
          >
            <Icon name="Calculator" className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">150+</div>
            <div className="text-blue-100">Построенных объектов</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">12</div>
            <div className="text-blue-100">Лет опыта</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-blue-100">Довольных клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
