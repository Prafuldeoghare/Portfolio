import React from "react";

function Chain(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.2864 8.7133C10.6038 8.031 9.67822 7.64771 8.71309 7.64771C7.74797 7.64771 6.82235 8.031 6.13976 8.7133L3.56559 11.2866C2.88299 11.9692 2.49951 12.895 2.49951 13.8604C2.49951 14.8257 2.88299 15.7515 3.56559 16.4341C4.24819 17.1167 5.174 17.5002 6.13934 17.5002C7.10469 17.5002 8.03049 17.1167 8.71309 16.4341L9.99976 15.1475"
        stroke="#D9F2F2"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.71289 11.2867C9.39548 11.969 10.3211 12.3523 11.2862 12.3523C12.2513 12.3523 13.177 11.969 13.8596 11.2867L16.4337 8.71334C17.1163 8.03074 17.4998 7.10493 17.4998 6.13959C17.4998 5.17424 17.1163 4.24844 16.4337 3.56584C15.7511 2.88324 14.8253 2.49976 13.86 2.49976C12.8946 2.49976 11.9688 2.88324 11.2862 3.56584L9.99956 4.8525"
        stroke="#D9F2F2"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Chain;
