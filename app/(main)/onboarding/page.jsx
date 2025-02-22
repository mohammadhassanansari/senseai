import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-form";
import { getUserOnboardingStatus } from "../../../actions/user";
import { industries } from "../../data/industries";

export default async function OnboardingPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    return redirect("/dashboard"); // 🔥 Return redirect directly
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}
