import { useCallback, useEffect, useRef, useState } from 'react';
import { RESPONSIVE_BREAKPOINTS } from '../core/consts/responsive-breakpoints';

export type ScrollCarouselConfig = {
  itemsGapPx?: number;
  desktopVisibleItems?: number;
  tabletVisibleItems?: number;
  mobileVisibleItems?: number;
};

export function useScroll(configs?: ScrollCarouselConfig) {
  const { itemsGapPx = 16, desktopVisibleItems = 3, tabletVisibleItems = 2, mobileVisibleItems = 1 } = configs || {};

  const listRef = useRef<HTMLUListElement | null>(null);

  const [visibleItems, setVisibleItems] = useState(() => {
    if (typeof window === 'undefined') return desktopVisibleItems;
    const w = window.innerWidth;
    if (w < RESPONSIVE_BREAKPOINTS.Mobile) return mobileVisibleItems;
    if (w < 1024) return RESPONSIVE_BREAKPOINTS.Tablet;
    return desktopVisibleItems;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateVisibleItems = () => {
      const w = window.innerWidth;
      if (w < RESPONSIVE_BREAKPOINTS.Mobile) setVisibleItems(mobileVisibleItems);
      else if (w < RESPONSIVE_BREAKPOINTS.Tablet) setVisibleItems(tabletVisibleItems);
      else setVisibleItems(desktopVisibleItems);
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, [mobileVisibleItems, tabletVisibleItems, desktopVisibleItems]);

  const scrollByItem = useCallback(
    (direction: 'left' | 'right') => {
      const list = listRef.current;
      if (!list) return;

      const children = list.children;
      if (!children.length) return;

      const first = children[0] as HTMLElement;
      let step = first.offsetWidth;

      if (children.length > 1) {
        const second = children[1] as HTMLElement;
        const distance = second.offsetLeft - first.offsetLeft;
        if (distance > 0) step = distance; // includes gap
      }

      list.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth',
      });
    },
    [listRef],
  );

  const itemWidth = visibleItems > 0 ? `calc((100% - ${itemsGapPx * (visibleItems - 1)}px) / ${visibleItems})` : '100%';

  return {
    listRef,
    visibleItems,
    itemWidth,
    itemsGapPx,
    scrollByItem,
  };
}
