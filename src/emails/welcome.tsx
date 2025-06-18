import { Button, Html } from "@react-email/components";
import { Heading } from "lucide-react";
import * as React from "react";
type WelcomeProps = {
  Firstname?: string;
};
export default function Welcome({ Firstname }: WelcomeProps) {
  return (
    <Html>
      <Heading>Welcome {Firstname}</Heading>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
