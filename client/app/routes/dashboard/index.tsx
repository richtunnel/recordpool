import React, { lazy, Suspense } from "react";
const DashboardLayoutBasic = React.lazy(() => import("../../pages/dashboard/main"));

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading icon...</div>}>
      <DashboardLayoutBasic />;
    </Suspense>
  );
}
