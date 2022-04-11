import { Link } from "remix";
import { useOptionalUser } from "~/utils";
import { Banner, Header, ImageBanner } from "../components";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Banner />
      <Header />
      <div className="absolute top-28 h-full w-full">
        <ImageBanner />
      </div>
    </main>
  );
}
