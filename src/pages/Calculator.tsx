import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [area, setArea] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [material, setMaterial] = useState("");
  const [foundation, setFoundation] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    let baseCost = 0;
    const areaNum = parseFloat(area) || 0;

    // Базовая стоимость по типу здания
    switch (buildingType) {
      case "house":
        baseCost = 25000;
        break;
      case "cottage":
        baseCost = 45000;
        break;
      case "commercial":
        baseCost = 18000;
        break;
      default:
        baseCost = 25000;
    }

    // Коэффициент материала
    let materialCoeff = 1;
    switch (material) {
      case "brick":
        materialCoeff = 1.2;
        break;
      case "wood":
        materialCoeff = 0.9;
        break;
      case "concrete":
        materialCoeff = 1.1;
        break;
      default:
        materialCoeff = 1;
    }

    // Коэффициент фундамента
    let foundationCoeff = 1;
    switch (foundation) {
      case "strip":
        foundationCoeff = 1;
        break;
      case "slab":
        foundationCoeff = 1.3;
        break;
      case "pile":
        foundationCoeff = 0.8;
        break;
      default:
        foundationCoeff = 1;
    }

    const result = Math.round(
      areaNum * baseCost * materialCoeff * foundationCoeff,
    );
    setTotalCost(result);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-semibold">Назад на главную</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Калькулятор стоимости
          </h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Рассчитайте стоимость строительства
          </h2>
          <p className="text-xl text-gray-600">
            Получите предварительную оценку стоимости вашего проекта
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Форма расчета */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" size={24} />
                Параметры строительства
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="area">Площадь (м²)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Введите площадь"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="building-type">Тип здания</Label>
                <Select value={buildingType} onValueChange={setBuildingType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип здания" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">Жилой дом</SelectItem>
                    <SelectItem value="cottage">Коттедж</SelectItem>
                    <SelectItem value="commercial">
                      Коммерческое здание
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="material">Материал стен</Label>
                <Select value={material} onValueChange={setMaterial}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите материал" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brick">Кирпич</SelectItem>
                    <SelectItem value="wood">Дерево</SelectItem>
                    <SelectItem value="concrete">Газобетон</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="foundation">Тип фундамента</Label>
                <Select value={foundation} onValueChange={setFoundation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите фундамент" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strip">Ленточный</SelectItem>
                    <SelectItem value="slab">Плитный</SelectItem>
                    <SelectItem value="pile">Свайный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={calculateCost}
                className="w-full bg-orange-500 hover:bg-orange-600"
                disabled={!area || !buildingType || !material || !foundation}
              >
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>
            </CardContent>
          </Card>

          {/* Результат */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Receipt" size={24} />
                Результат расчета
              </CardTitle>
            </CardHeader>
            <CardContent>
              {totalCost > 0 ? (
                <div className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {totalCost.toLocaleString()} ₽
                    </div>
                    <div className="text-gray-600">
                      Предварительная стоимость
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Площадь:</span>
                      <span className="font-semibold">{area} м²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Стоимость за м²:</span>
                      <span className="font-semibold">
                        {Math.round(
                          totalCost / parseFloat(area),
                        ).toLocaleString()}{" "}
                        ₽
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <Icon name="Info" className="inline mr-1" size={16} />
                      Точная стоимость определяется после выезда специалиста на
                      объект
                    </p>
                  </div>

                  <Button className="w-full" variant="outline">
                    <Icon name="Phone" className="mr-2" />
                    Заказать консультацию
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Icon
                    name="Calculator"
                    size={48}
                    className="mx-auto mb-4 opacity-50"
                  />
                  <p>Заполните все поля для расчета стоимости</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
