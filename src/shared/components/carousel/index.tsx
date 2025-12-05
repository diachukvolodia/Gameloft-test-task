import { memo, useCallback, type JSX, type ReactNode } from 'react';
import classNames from 'clsx';

import type { WithId } from '../../core/common';
import { useScroll, type ScrollCarouselConfig } from '../../hooks';
import { Button } from '../button';
import { TextH1 } from '../text';

export type CarouselProps<T extends WithId> = {
  data: T[];
  itemClassName?: string;
  renderItem: (item: T) => ReactNode;
  configs?: ScrollCarouselConfig;
};

function CarouselComponent<T extends WithId>({ data, itemClassName, configs, renderItem }: CarouselProps<T>) {
  const { listRef, itemWidth, itemsGapPx, scrollByItem } = useScroll(configs);

  const handleScrollClick = useCallback(
    (direction: 'left' | 'right') => {
      scrollByItem(direction);
    },
    [scrollByItem],
  );

  if (!data?.length) return null;

  return (
    <div className="relative flex items-center">
      <Button type="button" onClick={() => handleScrollClick('left')}>
        <TextH1>{'<'}</TextH1>
      </Button>

      <div className="relative flex-1 overflow-hidden mx-10">
        <ul
          ref={listRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ columnGap: `${itemsGapPx}px` }}
        >
          {data.map((item) => (
            <li key={item.id} className={classNames('shrink-0', itemClassName)} style={{ width: itemWidth }}>
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </div>

      <Button type="button" onClick={() => handleScrollClick('right')}>
        <TextH1>{'>'}</TextH1>
      </Button>
    </div>
  );
}

export const Carousel = memo(CarouselComponent) as <T extends WithId>(props: CarouselProps<T>) => JSX.Element;
