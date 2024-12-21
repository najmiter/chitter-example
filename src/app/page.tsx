'use client';

import init, { chittify } from 'chitter';
import { useCallback, useEffect, useState } from 'react';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Chitter from '@/components/code';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [highlightedHtml, setHighlightedHtml] = useState(
    'Output will appear here'
  );

  useEffect(() => {
    init();
  }, []);

  const highlight = useCallback(
    (source: string) => (source ? chittify(source) : 'Output will appear here'),
    []
  );

  return (
    <Card className="h-[96vh] max-h-screen text-xl !border-none">
      <ResizablePanelGroup direction="horizontal" className="gap-1">
        <ResizablePanel>
          <Label htmlFor="code" className="text-lg mb-2 block">
            Input
          </Label>
          <Textarea
            id="code"
            spellCheck={false}
            placeholder="Type your code here"
            onInput={(e) => {
              const code = e.currentTarget.value;
              setHighlightedHtml(highlight(code));
            }}
            className="w-full !h-[95%] text-foreground/70 py-3  md:text-xl font-mono !ring-0 !border-destructive-foreground/20 !outline-none"
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <Label className="text-lg mb-2 block">Output</Label>
          <Chitter>
            <div
              className="w-full !h-[95%]"
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </Chitter>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Card>
  );
}
