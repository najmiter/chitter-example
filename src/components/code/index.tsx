import { PropsWithChildren } from 'react';

import './styles.css';
import { Card, CardContent } from '@/components/ui/card';

export default function Chitter({ children }: PropsWithChildren) {
  return (
    <Card className="!h-[95%] text-foreground/70 font-mono border-destructive-foreground/20">
      <CardContent className="py-3">{children}</CardContent>
    </Card>
  );
}
