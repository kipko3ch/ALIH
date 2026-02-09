import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface StrategyStep {
  title: string;
  description: string;
  icon: React.ElementType;
  isLast?: boolean;
}