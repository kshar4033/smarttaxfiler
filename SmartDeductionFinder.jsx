import React from 'react';
import { getMockDeductions } from '../api/mockAiResponse';

export default function SmartDeductionFinder() {
  const deductions = getMockDeductions();
  return (
    <div>
      <h2>Deductions</h2>
      <ul>{deductions.map((d, i) => <li key={i}>{d.section}: {d.label} – ₹{d.amount}</li>)}</ul>
    </div>
  );
}