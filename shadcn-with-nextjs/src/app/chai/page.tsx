import { Button } from "@/components/ui/button";
import React from "react";

const ChaiPage = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center text-2xl">
      <div>
        ChaiPage:)
      </div>
      <button className="px-6 py-2 m-2 bg-blue-500 rounded text-white hover:bg-blue-700" >Test Button</button>
      <Button variant="outline" size="lg" >ShadCN Button</Button>
      <Button variant="mybtn" size="lg">My Btn</Button>
    </main>
  );
};

export default ChaiPage;
