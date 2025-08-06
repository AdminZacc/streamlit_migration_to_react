import { auth } from "@/auth";
import LandingPage from "@/components/landing-page";
import Dashboard from "@/components/dashboard";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return <LandingPage />;
  }

  return <Dashboard />;
}
