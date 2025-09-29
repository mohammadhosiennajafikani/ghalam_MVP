import { useState } from "react";
import { ProfileHeader } from "../components/ProfileHeader";
import { Tabs } from "../components/Tabs";
import { ContentGrid } from "../components/ContentGrid";


export default function Acount() {
  const [activeTab, setActiveTab] = useState<"posts" | "books">("posts");

  return (
    <div className="max-w-4xl mx-auto  min-h-screen pb-16">
      <ProfileHeader />
      <Tabs active={activeTab} onChange={setActiveTab} />
      <ContentGrid active={activeTab} />
    </div>
  );
}
