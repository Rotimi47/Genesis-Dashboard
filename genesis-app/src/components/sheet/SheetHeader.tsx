import { IconX } from '@tabler/icons-react';
import type { FC } from 'react';

interface SheetHeaderProps {
  title?: string;
  subtitle?: string;
  onClose: () => void;
  closeAriaLabel?: string;
  titleId?: string;
}

export const SheetHeader: FC<SheetHeaderProps> = ({
  title,
  subtitle,
  onClose,
  closeAriaLabel = 'Close',
  titleId,
}) => (
  <div className='flex items-center w-full justify-between overflow-hidden shrink-0'>
    <div className='flex flex-col gap-1 min-w-0'>
      {title && (
        <h2
          id={titleId}
          className='text-xl text-text-main-1 font-semibold truncate max-w-62.5'
        >
          {title}
        </h2>
      )}
      {subtitle && <p className='text-sm text-text-sub-1'>{subtitle}</p>}
    </div>

    <button
      type='button'
      onClick={onClose}
      aria-label={closeAriaLabel}
      className='bg-close-info-1 size-7 shrink-0 rounded-md flex items-center justify-center'
    >
      <IconX width={12} height={12} className='text-close-text-1' />
    </button>
  </div>
);