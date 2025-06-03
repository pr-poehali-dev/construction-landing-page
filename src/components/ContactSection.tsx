import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Связаться с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости вашего проекта
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Наши контакты
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Phone" className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Телефон</div>
                  <div className="text-gray-600">+7 (495) 123-45-67</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Mail" className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600">info@stroy-dom.ru</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="MapPin" className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Адрес</div>
                  <div className="text-gray-600">
                    г. Москва, ул. Строительная, д. 15
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Clock" className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Режим работы</div>
                  <div className="text-gray-600">
                    Пн-Пт: 9:00-18:00, Сб: 10:00-16:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <Card>
            <CardHeader>
              <CardTitle>Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
              </div>
              <Input placeholder="Email" type="email" />
              <Input placeholder="Тип объекта (дом, коттедж, коммерческое)" />
              <Textarea
                placeholder="Опишите ваш проект: площадь, материалы, особые требования..."
                rows={4}
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Нажимая "Отправить заявку", вы соглашаетесь с обработкой
                персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
