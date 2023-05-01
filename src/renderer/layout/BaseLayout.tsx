import React, { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import "./baseLayout.less";

const BaseLayout = (): JSX.Element => {
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = React.useState(true);
  const isShowList = ['/']

  useLayoutEffect(() => {
    isShowList.includes(location.pathname) ? setIsShow(true) : setIsShow(false);
  }, [location.pathname])

  return (
    <div className="base-layout">
      <header ref={headerRef} className="header-base">
      </header>
      <main ref={mainRef} className="main-base">
        <Outlet />
      </main>
      {
        isShow && <footer className="footer">
      </footer>
      }
    </div>
  );
};

export default BaseLayout;
