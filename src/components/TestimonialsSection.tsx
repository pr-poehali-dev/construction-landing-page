import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    name: "Михаил Петров",
    project: "Коттедж 250 м²",
    text: "Отличная работа! Дом построили точно в срок, качество материалов и работ на высоте. Особенно понравился индивидуальный подход.",
    rating: 5,
  },
  {
    name: "Елена Смирнова",
    project: "Торговый центр",
    text: "Профессиональная команда, все этапы строительства контролировались. Результат превзошел ожидания, рекомендую всем!",
    rating: 5,
  },
  {
    name: "Александр Иванов",
    project: "Загородный дом",
    text: "Строили дом для большой семьи. Учли все наши пожелания, работали аккуратно. Цена соответствует качеству.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мнения тех, кто уже построил дом своей мечты вместе с нами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.project}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
