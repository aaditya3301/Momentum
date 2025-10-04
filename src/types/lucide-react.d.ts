declare module 'lucide-react' {
  import * as React from 'react';
  
  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }
  
  export const Plus: React.FC<IconProps>;
  export const Shield: React.FC<IconProps>;
  export const TrendingUp: React.FC<IconProps>;
  export const Users: React.FC<IconProps>;
  export const DollarSign: React.FC<IconProps>;
  export const CheckCircle: React.FC<IconProps>;
  export const Loader2: React.FC<IconProps>;
  export const AlertCircle: React.FC<IconProps>;
  export const ArrowLeft: React.FC<IconProps>;
  export const Calendar: React.FC<IconProps>;
  export const ArrowRight: React.FC<IconProps>;
  export const Play: React.FC<IconProps>;
  export const Trophy: React.FC<IconProps>;
  export const Coins: React.FC<IconProps>;
  export const X: React.FC<IconProps>;
  export const Wallet: React.FC<IconProps>;
  export const ExternalLink: React.FC<IconProps>;
  export const Eye: React.FC<IconProps>;
  export const Clock: React.FC<IconProps>;
  export const Zap: React.FC<IconProps>;
  export const Lock: React.FC<IconProps>;
  export const Gift: React.FC<IconProps>;
  export const Twitter: React.FC<IconProps>;
  export const MessageCircle: React.FC<IconProps>;
  export const Github: React.FC<IconProps>;
  export const Home: React.FC<IconProps>;
  export const Award: React.FC<IconProps>;
  export const Settings: React.FC<IconProps>;
  
  // Add other icons as needed
  const icons: Record<string, React.FC<IconProps>>;
  export default icons;
}