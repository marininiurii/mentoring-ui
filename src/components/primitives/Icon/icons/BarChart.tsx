import { FC } from 'react';

type Props = {
  size: readonly [number, number];
  className: string;
};

const BarChart: FC<Props> = ({ size, className }) => {
  return (
    <svg
      className={className}
      height={size[0]}
      width={size[1]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="BarChart">
        <path
          id="Vector"
          d="M29.428 26.0011H4.85659V3.71534C4.85659 3.5582 4.72801 3.42963 4.57087 3.42963H2.57087C2.41373 3.42963 2.28516 3.5582 2.28516 3.71534V28.2868C2.28516 28.4439 2.41373 28.5725 2.57087 28.5725H29.428C29.5852 28.5725 29.7137 28.4439 29.7137 28.2868V26.2868C29.7137 26.1296 29.5852 26.0011 29.428 26.0011ZM7.99944 23.1439H9.99944C10.1566 23.1439 10.2852 23.0153 10.2852 22.8582V17.7153C10.2852 17.5582 10.1566 17.4296 9.99944 17.4296H7.99944C7.8423 17.4296 7.71373 17.5582 7.71373 17.7153V22.8582C7.71373 23.0153 7.8423 23.1439 7.99944 23.1439ZM13.428 23.1439H15.428C15.5852 23.1439 15.7137 23.0153 15.7137 22.8582V11.4296C15.7137 11.2725 15.5852 11.1439 15.428 11.1439H13.428C13.2709 11.1439 13.1423 11.2725 13.1423 11.4296V22.8582C13.1423 23.0153 13.2709 23.1439 13.428 23.1439ZM18.8566 23.1439H20.8566C21.0137 23.1439 21.1423 23.0153 21.1423 22.8582V14.2153C21.1423 14.0582 21.0137 13.9296 20.8566 13.9296H18.8566C18.6994 13.9296 18.5709 14.0582 18.5709 14.2153V22.8582C18.5709 23.0153 18.6994 23.1439 18.8566 23.1439ZM24.2852 23.1439H26.2852C26.4423 23.1439 26.5709 23.0153 26.5709 22.8582V8.57248C26.5709 8.41534 26.4423 8.28677 26.2852 8.28677H24.2852C24.128 8.28677 23.9994 8.41534 23.9994 8.57248V22.8582C23.9994 23.0153 24.128 23.1439 24.2852 23.1439Z"
          fill="white"
          fill-opacity="0.85"
        />
      </g>
    </svg>
  );
};

export { BarChart };