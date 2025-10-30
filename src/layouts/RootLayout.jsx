import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className="h-dvh w-full">
      <Outlet />
    </div>
  )
}

export default RootLayout
