import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: "modern-cottage",
    title: "Современный коттедж в Подмосковье",
    area: "280 м²",
    type: "Жилой дом",
    price: "12 600 000 ₽",
    duration: "8 месяцев",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    description:
      "Двухэтажный коттедж с панорамными окнами и современной архитектурой",
    features: [
      "Панорамные окна во всю стену",
      "Система умный дом",
      "Энергоэффективные материалы",
      "Ландшафтный дизайн",
      "Гараж на 2 автомобиля",
      "Терраса с видом на сад",
    ],
    specifications: {
      Фундамент: "Монолитная железобетонная плита",
      Стены: "Газобетон + облицовочный кирпич",
      Кровля: "Металлочерепица",
      Окна: "ПВХ с тройным стеклопакетом",
      Отопление: "Газовый котел + теплый пол",
      Электричество: "380В, резервный генератор",
    },
  },
  {
    id: "business-center",
    title: "Торговый центр Европа",
    area: "1200 м²",
    type: "Коммерческое",
    price: "21 600 000 ₽",
    duration: "12 месяцев",
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    ],
    description: "Многофункциональный торговый комплекс с парковкой на 50 мест",
    features: [
      "Парковка на 50 автомобилей",
      "Система вентиляции и кондиционирования",
      "Пожарная сигнализация",
      "Видеонаблюдение",
      "Грузовой лифт",
      "Отдельные входы для арендаторов",
    ],
    specifications: {
      Фундамент: "Свайно-ростверковый",
      Каркас: "Металлокаркас",
      Стены: "Сэндвич-панели",
      Кровля: "Профнастил с утеплением",
      Освещение: "Светодиодное",
      Коммуникации: "Полный комплекс инженерных систем",
    },
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Проект не найден</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <Icon name="ArrowLeft" size={20} />
            <span className="font-semibold">Назад к проектам</span>
          </Link>
          <Badge variant="outline">{project.type}</Badge>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Заголовок проекта */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-orange-500 text-white">{project.price}</Badge>
            <Badge variant="secondary">{project.area}</Badge>
            <Badge variant="outline">{project.duration}</Badge>
            <Badge variant="outline">Год: {project.year}</Badge>
          </div>
        </div>

        {/* Галерея изображений */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Фотогалерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={image}
                  alt={`${project.title} - фото ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Особенности проекта */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Icon name="Star" className="text-orange-500" />
                Особенности проекта
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon
                      name="Check"
                      className="text-green-500 mt-0.5"
                      size={16}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Технические характеристики */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Icon name="Settings" className="text-blue-500" />
                Технические характеристики
              </h3>
              <div className="space-y-3">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-start border-b border-gray-100 pb-2"
                  >
                    <span className="font-medium text-gray-600">{key}:</span>
                    <span className="text-gray-900 text-right max-w-[60%]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Призыв к действию */}
        <div className="mt-12 text-center bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Заинтересовал этот проект?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Мы можем реализовать похожий проект с учетом ваших пожеланий и
            бюджета
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" className="mr-2" />
              Заказать консультацию
            </Button>
            <Link to="/calculator">
              <Button variant="outline">
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
