"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  // 1. Input iin utgaa stated hadgalj awna ->
  // 2. Submit button daranguut backend iinha api ruu huselt ywuulna

  return (
    <div className="m-10 flex gap-10 flex-col">
      <div className="flex">
        <Card>
          <CardHeader>Form</CardHeader>
          <CardContent>
            <Input
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              placeholder="Age"
              onChange={(event) => setAge(event.target.value)}
            />
            <Input
              placeholder="Phone Number"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <Button>Submit</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
