
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const UploadIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
);

export const MagicWandIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.25278V6.25278C12 6.11305 12.113 6 12.2528 6V6C12.3925 6 12.5056 6.11305 12.5056 6.25278V6.25278C12.5056 6.39252 12.3925 6.50557 12.2528 6.50557V6.50557C12.113 6.50557 12 6.39252 12 6.25278ZM8.25278 8.25278V8.25278C8.11305 8.25278 8 8.13973 8 8V8C8 7.86027 8.11305 7.74722 8.25278 7.74722V7.74722C8.39252 7.74722 8.50557 7.86027 8.50557 8V8C8.50557 8.13973 8.39252 8.25278 8.25278 8.25278ZM12.2528 4V4C12.113 4 12 3.88695 12 3.74722V3.74722C12 3.60748 12.113 3.49443 12.2528 3.49443V3.49443C12.3925 3.49443 12.5056 3.60748 12.5056 3.74722V3.74722C12.5056 3.88695 12.3925 4 12.2528 4ZM5 12.5056H5C4.86027 12.5056 4.74722 12.3925 4.74722 12.2528V12.2528C4.74722 12.113 4.86027 12 5 12H5C5.13973 12 5.25278 12.113 5.25278 12.2528V12.2528C5.25278 12.3925 5.13973 12.5056 5 12.5056Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 10.25L13.75 9.75M16 8.5L15.5 8M20 11.5L14.0042 5.50419C13.4384 4.93845 12.5616 4.93845 12.0042 5.50419L5.50419 12.0042C4.93845 12.5616 4.93845 13.4384 5.50419 14.0042L11.5 20L18.4289 13.0711C18.7314 12.7686 18.9095 12.3536 18.9095 11.9211C18.9095 11.0922 18.2462 10.4289 17.4173 10.4289H17.4173" />
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export const ArrowPathIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0113.53-5.08M20 15a8 8 0 01-13.53 5.08" />
    </svg>
);
