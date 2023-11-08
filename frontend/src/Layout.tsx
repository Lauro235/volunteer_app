import { PropsWithChildren } from "react"

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid min-h-screen max-h-screen grid-rows-8 md:grid-rows-9 p-3">
      {/* <div className="grid min-h-screen max-h-screen grid-rows-8"> */}
      {children}
    </div>
  );
}

export default Layout