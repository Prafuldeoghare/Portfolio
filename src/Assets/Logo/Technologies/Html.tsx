import React from "react";

function Html(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.1325 102.004L13.7063 7.5H106.294L97.8563 101.989L59.9438 112.5L22.1325 102.004Z"
        fill="#E44F26"
      />
      <path
        d="M60 104.468L90.6375 95.9738L97.845 15.2288H60V104.468Z"
        fill="#F1662A"
      />
      <path
        d="M60 50.2762H44.6625L43.605 38.4074H60V26.8162H30.9375L31.215 29.9287L34.0613 61.8674H60V50.2762ZM60 80.3774L59.9475 80.3924L47.04 76.9087L46.215 67.6649H34.5787L36.2025 85.8599L59.9475 92.4524L60 92.4374V80.3774Z"
        fill="#EBEBEB"
      />
      <path
        d="M59.9587 50.2762V61.8674H74.2312L72.8887 76.9012L59.9587 80.3887V92.4487L83.7225 85.8599L83.895 83.9024L86.6175 53.3887L86.9025 50.2762H59.9587ZM59.9587 26.8162V38.4074H87.9562L88.1887 35.8049L88.7175 29.9287L88.995 26.8162H59.9587Z"
        fill="white"
      />
    </svg>
  );
}

export default Html;
