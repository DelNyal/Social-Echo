import React from "react";
import {
  BeatLoading,
  BounceLoading,
  CircularLoading,
  ClockLoading,
  RotateLoading,
  SpinLoading,
  WaveLoading,
  DashLoading,
  CopperLoading,
} from "respinner";
export default function CommonLoading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BounceLoading gap={5} />
    </div>
  );
}
