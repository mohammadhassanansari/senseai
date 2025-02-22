import { getIndustryInsights } from "../../../actions/dashboard";
import DashboardView from "./_components/dashboard-view";
import { getUserOnboardingStatus } from "../../../actions/user";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    return redirect("/onboarding"); // 🔥 Return redirect directly
  }

  const insights = await getIndustryInsights();

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
}
