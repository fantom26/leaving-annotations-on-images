import { ReactNode } from "react";

type iconsType = "delete" | "mouse" | "plus" | "send";

export const ICONS: Record<iconsType, ReactNode> = {
  delete: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8333 3.33333H12.9167L12.0833 2.5H7.91666L7.08332 3.33333H4.16666V5H15.8333V3.33333ZM4.99999 15.8333C4.99999 16.2754 5.17558 16.6993 5.48815 17.0118C5.80071 17.3244 6.22463 17.5 6.66666 17.5H13.3333C13.7754 17.5 14.1993 17.3244 14.5118 17.0118C14.8244 16.6993 15 16.2754 15 15.8333V5.83333H4.99999V15.8333Z" />
    </svg>
  ),
  mouse: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.1" width="24" height="24" rx="4" fill="white" />
      <path d="M11.0909 4C8.21818 4.35636 6 6.8 6 9.76727H11.0909" fill="white" />
      <path d="M6 14.131C6 17.3443 8.60489 19.9492 11.8182 19.9492C15.0315 19.9492 17.6364 17.3443 17.6364 14.131V11.2219H6" fill="#9B9B9B" />
      <path d="M12.5454 4V9.76727H17.6363C17.6363 6.8 15.4109 4.35636 12.5454 4Z" fill="#9B9B9B" />
    </svg>
  ),
  plus: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.1" width="24" height="24" rx="4" fill="white" />
      <path d="M19 13.5H19.5V13V11V10.5H19H13.5V5V4.5H13H11H10.5V5V10.5H5H4.5V11V13V13.5H5H10.5V19V19.5H11H13H13.5V19V13.5H19Z" fill="#454545" stroke="white" />
    </svg>
  ),
  send: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.83329 18.9999L19.375 12.7666C20.05 12.4749 20.05 11.5249 19.375 11.2333L4.83329 4.99993C4.28329 4.75827 3.67496 5.1666 3.67496 5.75827L3.66663 9.59993C3.66663 10.0166 3.97496 10.3749 4.39163 10.4249L16.1666 11.9999L4.39163 13.5666C3.97496 13.6249 3.66663 13.9833 3.66663 14.3999L3.67496 18.2416C3.67496 18.8333 4.28329 19.2416 4.83329 18.9999Z"
      />
    </svg>
  )
};
