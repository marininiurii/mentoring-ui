import { FC } from 'react';
import { UsergroupAdd } from './icons/UsergroupAdd/UsergroupAdd';

type IconKind = 'UsergroupAdd' | 'jkdfsh';
type IconSize = 's' | 'm' | 'l';

type IconProps = {
  kind: IconKind;
  size?: IconSize;
};

const sizes: Record<IconSize, readonly [number, number]> = {
  s: [16, 16],
  m: [24, 24],
  l: [32, 32],
} as const;

const Icon: FC<IconProps> = ({ kind, size = 'm' }) => {
  switch (kind) {
    case 'UsergroupAdd':
      return <UsergroupAdd size={sizes[size]} />;
    default:
      return null;
  }
};

export { Icon };