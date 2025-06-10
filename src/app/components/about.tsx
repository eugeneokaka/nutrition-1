import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <div className="mt-32">
      {/* {hero} */}
      <div className="w-3/4 mx-auto   sm:mt-40 ">
        <h1 className="text-3xl font-bold text-center my-20 md:text-5xl ">
          We're on a mission to imporve lives through nutriton
        </h1>
        <p className="text-gray-500 text-center text-lg my-20 md:text-xl">
          founded in 2015 ,oasis has been helping thousands of peaple achive
          their health
        </p>
        <div className="flex justify-center gap-2 ">
          <Button className="bg-green-600 text-white hover:bg-green-600 hover:text-white">
            book consoltation
          </Button>
          <Button variant={"outline"}>explore services</Button>
        </div>
      </div>
      {/* {end of hero} */}
    </div>
  );
}

export default page;
