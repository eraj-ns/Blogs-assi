import Responsive from "./responsive/page"

export default function Home(){
  return(
    <section className="p-4">
      <div className="container">
        <h1 className="text-2x1 font-bold">Home Page</h1>
        <p className="w-1/2 font-medium py-2">
        The create 6 Different Blogs by ERAJ NAZ
        </p>
        <div className="responsive">
          <Responsive />
        </div>
      </div>
    </section>
  )
}

