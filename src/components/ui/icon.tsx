import {
  Home,
  Castle,
  Building,
  Check,
  Phone,
  Calculator,
  Shield,
  Clock,
  DollarSign,
  Users,
  FileCheck,
  Wrench,
  Star,
  Mail,
  MapPin,
  Send,
  CircleAlert,
  LucideIcon,
} from "lucide-react";

const iconMap = {
  Home,
  Castle,
  Building,
  Check,
  Phone,
  Calculator,
  Shield,
  Clock,
  DollarSign,
  Users,
  FileCheck,
  Wrench,
  Star,
  Mail,
  MapPin,
  Send,
  CircleAlert,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  fallback?: keyof typeof iconMap;
}

const Icon = ({
  name,
  size = 16,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
