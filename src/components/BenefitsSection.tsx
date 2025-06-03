import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Shield",
    title: "Гарантия качества",
    description: "5 лет гарантии на все строительные работы и материалы",
  },
  {
    icon: "Clock",
    title: "Соблюдение сроков",
    description: "Четкое планирование и контроль каждого этапа строительства",
  },
  {
    icon: "DollarSign",
    title: "Прозрачное ценообразование",
    description: "Фиксированная стоимость без скрытых доплат",
  },
  {
    icon: "Users",
    title: "Опытная команда",
    description: "Квалифицированные специалисты с опытом работы от 10 лет",
  },
  {
    icon: "FileCheck",
    title: "Все документы",
    description: "Полное оформление разрешительной документации",
  },
  {
    icon: "Wrench",
    title: "Собственная техника",
    description: "Современное оборудование и строительная техника",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Надежность, качество и индивидуальный подход к каждому проекту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
                <Icon
                  name={benefit.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
