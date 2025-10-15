"use client";

import { useRouter } from "next/navigation";

export default function RoleSelector() {
  const router = useRouter();

  const handleSelect = (role: "creator" | "brand") => {
    localStorage.setItem("userRole", role);

    if (role === "brand") {
      router.push("/dashboard"); // brand home
    } else {
      router.push("/"); // creator home
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Who are you?</h2>
      <button onClick={() => handleSelect("creator")}>I'm a Creator</button>
      <button onClick={() => handleSelect("brand")}>I'm a Brand</button>
    </div>
  );
}
