import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="absolute flex justify-between w-full h-screen my-40">
      <div className="">
        <h1 className="font-semibold tracking-widest uppercase">about our website</h1>
        <p className="w-1/2">
          As it were, we can turn out to be a piece of your unique occasions or
          improve any home through the flower game plans we make. Also, they are
          lovely, to say it gently. Be that as it may, our flowers can be far
          beyond essentially delightful; they can be splendid and brilliant,
          unobtrusive and fragile, cheering and crucial, quiet and serene, etc.
          The tremendous adaptability of flower types, as well as the feelings
          they express, can’t be denied.
        </p>
      </div>
      <div className="w-full h-screen ">
        <Image
          src="/../public/try.jpg"
          className="w-full h-screen"
          width={120}
          height={80}
        />
      </div>
    </div>
  );
};

export default about;
