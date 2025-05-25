import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface CircularProgressProps {
  percentage: number;
  radius?: number;
  strokeWidth?: number;
  duration?: number;
  children?: React.ReactNode;
  className?: string;
}

const CircularProgressContainer: React.FC<CircularProgressProps> = ({
  percentage,
  radius = 100,
  strokeWidth = 10,
  duration = 500,
  children,
  className,
}) => {
  const circumference = 2 * Math.PI * radius;
  const progressValue = (circumference * (100 - percentage)) / 100;

  return (
    <View
      className={`mt-12 mb-4 relative items-center justify-center self-center ${className}`}
    >
      <Svg width={radius * 2} height={radius * 2}>
        {/* Background Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#11152A"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#2563EB"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progressValue}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </Svg>
      {/* Content Container */}
      <View className="absolute inset-0 items-center justify-center">
        {children}
      </View>
    </View>
  );
};

export default CircularProgressContainer;
