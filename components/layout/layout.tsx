import MainNavigation from "./main-navigation";

const Layout = ({ children }: any) => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>{children}</main>
    </>
  );
};

export default Layout;
