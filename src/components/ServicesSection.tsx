import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Жилые дома",
    description:
      "Строительство частных домов по индивидуальным и типовым проектам",
    features: [
      "Фундамент под ключ",
      "Стены и кровля",
      "Инженерные системы",
      "Отделочные работы",
    ],
    price: "от 25 000 руб/м²",
    icon: "Home",
  },
  {
    title: "Коттеджи",
    description: "Элитные коттеджи с современным дизайном и планировкой",
    features: [
      "Премиум материалы",
      "Дизайн-проект",
      "Ландшафтный дизайн",
      "Система умный дом",
    ],
    price: "от 45 000 руб/м²",
    icon: "Castle",
  },
  {
    title: "Коммерческие здания",
    description: "Офисы, склады, торговые центры и производственные помещения",
    features: [
      "Быстрые сроки",
      "Большие площади",
      "Современные технологии",
      "Энергоэффективность",
    ],
    price: "от 18 000 руб/м²",
    icon: "Building",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный цикл строительства - от проектирования до сдачи объекта под
            ключ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon
                      name={service.icon as any}
                      className="text-blue-600"
                      size={24}
                    />
                  </div>
                  <Badge className="bg-orange-500">{service.price}</Badge>
                </div>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500" size={16} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
