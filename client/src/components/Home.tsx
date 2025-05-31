import { JSX } from "react";

function Home(props: any): JSX.Element {
  const boxes: number[] = props.array;

  return (
    <div className="h-screen pt-[5%]">
      <div className="grid grid-cols-3 gap-4 mx-[5%]">
        {boxes.map((box: number, index: number) => {
          return (
            <div key={index} className="box-item p-4 bg-tertiary">
              <img src="/vite.svg"></img>
              ProductId: {box}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
