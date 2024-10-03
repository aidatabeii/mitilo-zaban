import Header from "./Header";


function Layout({ children }) {
  return (
    <>
   <Header/>
      <div className="m-6">{children}</div>
    </>
  );
}
export default Layout;