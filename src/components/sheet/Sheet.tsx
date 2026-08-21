import { useTheme } from '../../hooks/utils/useTheme';
import { cn } from '../../utils/cn';
import type { ReactNode } from 'react';
import { useEffect, useId, useRef } from 'react';
import { SheetHeader } from './SheetHeader';
import type { FC } from 'react';

interface SheetProps {
  open: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
  onClose: () => void;
  children: ReactNode;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const Sheet: FC<SheetProps> = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  className,
}) => {
  const { isDark } = useTheme();
  const sheetRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = sheetRef.current;

    // Lock body scroll, compensating for scrollbar width to avoid layout shift.
    const { overflow: prevOverflow, paddingRight: prevPaddingRight } =
      document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Move focus into the panel.
    const focusables = panel?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    (focusables?.[0] ?? panel)?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panel) return;
      const items = panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!items.length) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (active && !panel.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-1000 transition-opacity duration-300',
          open
            ? 'pointer-events-auto'
            : 'opacity-0 pointer-events-none bg-modal-wash-1',
          isDark ? 'overlay_bg_dark' : 'overlay_bg',
        )}
        onClick={onClose}
        aria-hidden='true'
      />

      <div
        ref={sheetRef}
        tabIndex={-1}
        aria-hidden={!open}
        className={cn(
          'fixed items-center gap-6 pt-6 px-11.25 top-0 right-0 h-full w-full max-w-110 bg-surface-level-2-alt z-2000 transition-transform duration-300 flex flex-col outline-none',
          open ? 'translate-x-0' : 'translate-x-full',
          className,
        )}
        role='dialog'
        aria-modal='true'
        aria-labelledby={title ? titleId : undefined}
        aria-label={!title ? 'Sheet' : undefined}
      >
        <SheetHeader
          title={title}
          titleId={titleId}
          subtitle={subtitle}
          onClose={onClose}
          closeAriaLabel='Close sheet'
        />

        <div className='flex-1 overflow-y-auto w-full hide-scrollbar pb-6'>
          {children}
        </div>
      </div>
    </>
  );
};
