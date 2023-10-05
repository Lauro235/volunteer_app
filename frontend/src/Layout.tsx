import { PropsWithChildren } from "react"

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid max-h-screen grid-rows-8">
      {children}
    </div>
  )
}

export default Layout