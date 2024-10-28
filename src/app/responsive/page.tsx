import Link from "next/link";
import Image from "next/image";

export default function Responsive(){
    return(
  <div className="parentContainer">
  <div className="childContainer bounce-in-right">
  <div className="imageContainer"></div>
    <h1 className="title">Fashion Blog</h1>
      <p className="description">
      Sustainable fashion trends.{" "}
      </p>
   <Link href="/readmore-fashion"> <button className="readMore">Read More</button></Link>
  </div>

   <div className="childContainer bounce-in-right">
   <div className="imageContainer"></div>
<h1 className="title">Food Blog</h1>
  <p className="description">
  Vegan recipes for beginners{" "}
  </p>
<Link href="/readmore-food"> <button className="readMore">Read More</button></Link>
</div>

<div className="childContainer bounce-in-right">
<div className="imageContainer"></div>
    <h1 className="title">Health Blog</h1>
      <p className="description">
      Fitness routines for beginners.{" "}
      </p>
   <Link href="/readmore-health"> <button className="readMore">Read More</button></Link>
  </div>

<div className="childContainer bounce-in-right">
<div className="imageContainer"></div>
<h1 className="title">Lifestyle Blog</h1>
  <p className="description">
  Morning routines for productivity.{" "}
  </p>
<Link href="/readmore-lifestyle"> <button className="readMore">Read More</button></Link>
</div>

<div className="childContainer bounce-in-right">
<div className="imageContainer"></div>
    <h1 className="title">Technology Blog</h1>
      <p className="description">
      Top 10 tech trends to watch.{" "}
      </p>
   <Link href="/readmore-technology"> <button className="readMore">Read More</button></Link>
  </div>

  <div className="childContainer bounce-in-right">
    <div className="imageContainer"></div>
  <h1 className="title">Travel Blog</h1>
    <p className="description">
    Destination guides for popular cities.{" "}
    </p>
 <Link href="/readmore-travel"> <button className="readMore">Read More</button></Link>
</div>
</div>
 );
}













// import Link from "next/link";

// type IData = {
//    title: string;
//    description: string;
// };

// const data: IData[] = [
//     {title: "Eraj", description: "Hello from Naz Blog" },
//     {title: "Eraj", description: "Hello from Naz Blog" },
//     {title: "Eraj", description: "Hello from Naz Blog" },
//     {title: "Eraj", description: "Hello from Naz Blog" },
//     {title: "Eraj", description: "Hello from Naz Blog" },
//     {title: "Eraj", description: "Hello from Naz Blog" },
// ]

// export default function Responsive() {
//     return (
//       <div className="parentContainer">
//         {data.map((Idata)=>(
//         <div className="childContainer">
//           <div className="imageContainer">
//           <h1 className="title">{Idata.title}</h1>
//           <p className="description">
//             {Idata.description}</p>
//           <Link href="/beauty"><button className="readMore">Read More</button></Link>
//         </div>
// </div>
// ))}
// </div>
// )
// }