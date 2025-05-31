import { JSX } from "react";

function Home(props: any): JSX.Element {
  const boxes: number[] = props.array;

  return (
    <div className="h-screen pt-[5%]">
      <div className="grid grid-cols-3 gap-4 mx-[5%]">
        {boxes.map((value: number, index: number): any => (
          <div className="bg-tertiary p-7 rounded-xl" key={index}>
            Product Id: {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
