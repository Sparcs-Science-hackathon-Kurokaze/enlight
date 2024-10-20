import React from "react";
import Button from "../atom/Button";

interface PageLayoutProps {
  children: React.ReactNode;
  current: number;
  pageIndex: number;
  pageLength: number;
  toNextPage: () => void;
  ref: React.RefObject<HTMLDivElement>;
}
// Reusable component for each page layout
const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ children, current, pageIndex, toNextPage, pageLength }, ref) => {
    return (
      <div ref={ref} className="h-screen flex flex-col items-center">
        {children}
        {current === pageIndex &&
          (current === pageLength - 1 ? (
            <div className="w-full flex flex-col justify-center items-end h-36">
              <Button text="퀴즈로!" onClick={toNextPage} />
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-end h-36">
              <Button text="다음으로" onClick={toNextPage} />
            </div>
          ))}
      </div>
    );
  }
);
PageLayout.displayName = "PageLayout";
export default PageLayout;
