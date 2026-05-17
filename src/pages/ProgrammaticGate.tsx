import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { locationConfigs } from "../data/locations";
import { techConfigs } from "../data/tech";
import { Cpu } from "lucide-react";

const LocationLanding = lazy(() => import("./LocationLanding"));
const TechLanding = lazy(() => import("./TechLanding"));
const NotFound = lazy(() => import("./NotFound"));

export default function ProgrammaticGate() {
  const { slug } = useParams<{ slug: string }>();
  const normalizedSlug = slug?.toLowerCase() || "";

  const isLocation = !!locationConfigs[normalizedSlug];
  const isTech = !!techConfigs[normalizedSlug];

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-midnight flex items-center justify-center">
        <Cpu className="text-neon-purple animate-spin" size={48} />
      </div>
    }>
      {isLocation ? (
        <LocationLanding />
      ) : isTech ? (
        <TechLanding />
      ) : (
        <NotFound />
      )}
    </Suspense>
  );
}
