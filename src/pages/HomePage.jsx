import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="font-black text-6xl">Home Page</h1>
      <Button variant="secondary">Get Started</Button>
    </div>
  )
}

export default HomePage
