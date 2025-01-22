import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const MenuItem = () => {
  return (
    <Card className="max-w-md overflow-hidden">
      <div className="relative">
        <img src="" alt="" className="w-full h-64 object-cover" />
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold text-red-700">
            Sunshine Stackers
          </h3>
          <span className="text-xl font-bold text-gray-900">$12.99</span>
        </div>

        <p className="text-gray-600">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
