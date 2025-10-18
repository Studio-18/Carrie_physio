import React from 'react';

function SvgIcon({
  size = 24,
  className,
  strokeWidth = 1.5,
  children,
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function UserIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </SvgIcon>
  );
}

export function ClockIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </SvgIcon>
  );
}

export function PackageIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.5 7.5 12 12 3.5 7.5" />
      <path d="M12 22V12" />
      <path d="m20.5 7.5-8.5-5-8.5 5V16a2 2 0 0 0 1 1.73l7.5 4.41a2 2 0 0 0 1.98 0l7.52-4.41A2 2 0 0 0 20.5 16Z" />
    </SvgIcon>
  );
}

export function CheckCircleIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m8.5 12.5 2.5 2.5 4.5-4.5" />
    </SvgIcon>
  );
}

export function XIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m16 8-8 8" />
      <path d="m8 8 8 8" />
    </SvgIcon>
  );
}

