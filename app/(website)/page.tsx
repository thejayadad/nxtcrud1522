import ActionBar from "@/components/action-bar/action-bar";
import TitleText from "@/components/hero/title-text";

export default function Home() {
  return (
   <div>
    <div className="flex flex-col mx-auto max-w-screen-lg p-4">
      <TitleText
        title="Welcome to Shelfie"
        description="Your personal online reading tracker"
      />
      <ActionBar />
    </div>
   </div>
  );
}
