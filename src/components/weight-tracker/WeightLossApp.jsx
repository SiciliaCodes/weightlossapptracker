'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const exercises = {
  walking: { name: 'Walking', calories: 149 },
  jogging: { name: 'Jogging', calories: 298 },
  swimming: { name: 'Swimming', calories: 223 }
};

export default function WeightLossApp() {
  const [userInfo, setUserInfo] = useState({
    weight: '',
    height: '',
    age: ''
  });

  const calculateBMI = () => {
    if (!userInfo.weight || !userInfo.height) return;
    const heightM = userInfo.height / 100;
    return (userInfo.weight / (heightM * heightM)).toFixed(1);
  };

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>Weight Loss Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Input
            type="number"
            placeholder="Weight (kg)"
            value={userInfo.weight}
            onChange={(e) => setUserInfo({...userInfo, weight: e.target.value})}
          />
          <Input
            type="number"
            placeholder="Height (cm)"
            value={userInfo.height}
            onChange={(e) => setUserInfo({...userInfo, height: e.target.value})}
          />
          <Button onClick={calculateBMI}>Calculate BMI</Button>
        </div>
      </CardContent>
    </Card>
  );
}