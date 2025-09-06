import React from "react";
import Image from "next/image";

const HomeDescription = () => {
  return (
    <div className="w-5/6 flex justify-between mx-auto pb-20">
      <div className="w-1/2 flex flex-col gap-4">
        <h1>Bottari</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          fugiat, illo ducimus ea quod voluptas assumenda! Autem harum
          reprehenderit asperiores. Cumque repudiandae voluptatem dicta,
          molestias eius reprehenderit repellendus nemo ipsam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          dolorum eveniet facere, cum cumque aut autem consectetur alias qui
          nesciunt veniam maxime illo, hic debitis? Magni quisquam beatae quae
          culpa.
        </p>
      </div>
      <div className="flex">
        <Image src="/images/2.jpg" alt="Bottari" width={350} height={350} />
        <Image src="/images/1.jpg" alt="Bottari" width={350} height={350} />
      </div>
    </div>
  );
};

export default HomeDescription;
