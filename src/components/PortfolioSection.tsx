import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Современный коттедж в Подмосковье",
    area: "280 м²",
    type: "Жилой дом",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop&crop=entropy&cs=tinysrgb",
    description:
      "Двухэтажный коттедж с панорамными окнами и современной архитектурой",
  },
  {
    title: "Торговый центр 'Европа'",
    area: "1200 м²",
    type: "Коммерческое",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop&crop=entropy&cs=tinysrgb",
    description: "Многофункциональный торговый комплекс с парковкой на 50 мест",
  },
  {
    title: "Загородный дом с баней",
    area: "150 м²",
    type: "Жилой дом",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop&crop=entropy&cs=tinysrgb",
    description: "Экологичный дом из бруса с традиционной русской баней",
  },
  {
    title: "Офисное здание 'Бизнес-парк'",
    area: "800 м²",
    type: "Коммерческое",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop&crop=entropy&cs=tinysrgb",
    description:
      "Современный офисный центр класса А с энергосберегающими технологиями",
  },
  {
    title: "Элитный особняк",
    area: "420 м²",
    type: "Коттедж",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop&crop=entropy&cs=tinysrgb",
    description:
      "Роскошный особняк с бассейном, гаражом и ландшафтным дизайном",
  },
  {
    title: "Производственный цех",
    area: "600 м²",
    type: "Промышленное",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop&crop=entropy&cs=tinysrgb",
    description: "Складской комплекс с административными помещениями",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 150 успешно реализованных проектов различной сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-gray-800"
                  >
                    {project.area}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg leading-tight">
                    {project.title}
                  </h3>
                </div>
                <Badge variant="outline" className="mb-3 text-xs">
                  {project.type}
                </Badge>
                <p className="text-sm text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
