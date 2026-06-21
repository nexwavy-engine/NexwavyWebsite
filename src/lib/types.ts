// Domain types shared across adapters and UI. Framework-agnostic on purpose
// so the business logic stays portable (ADR-001).

export type RegistrationStatus = "pending" | "confirmed" | "waitlisted" | "cancelled";
export type PaymentStatus = "pending" | "paid" | "refunded" | "failed";
export type DeliveryFormat = "online" | "in-person" | "hybrid";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  serviceInterest: string;
  message?: string;
  source?: string;
  createdAt: string; // ISO
}

export interface Learner {
  id: string;
  authUserId: string;
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  roleTitle?: string;
  createdAt: string;
}

export interface Registration {
  id: string;
  learnerId: string | null; // null when registering without an account
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  courseId: string;
  cohortId?: string;
  preferredFormat: DeliveryFormat;
  registrationStatus: RegistrationStatus;
  paymentStatus: PaymentStatus;
  transactionReference?: string;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  summary: string;
  priceNgn: number;
  isActive: boolean;
}

export interface Cohort {
  id: string;
  courseId: string;
  startDate: string;
  deliveryFormat: DeliveryFormat;
  capacity: number;
  status: "scheduled" | "running" | "completed";
}
