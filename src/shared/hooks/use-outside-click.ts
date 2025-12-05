import { useEffect, type RefObject } from 'react';

type OutsideClickHandler = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>, handler: OutsideClickHandler) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el) return;

      if (el.contains(event.target as Node)) return;

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
