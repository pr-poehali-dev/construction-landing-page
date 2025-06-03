import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="mx-auto mb-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <Icon name="Construction" size={32} className="text-orange-600" />
          </div>
          <CardTitle className="text-2xl">Сайт на техобслуживании</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Мы временно приостановили работу сайта для улучшения качества наших
            услуг.
          </p>
          <p className="text-sm text-gray-500">
            Приносим извинения за неудобства. Скоро мы вернёмся с обновлениями!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
