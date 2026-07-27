// src/features/dashboard/domain/entities/Camera.ts
export interface Camera {
  id: string;
  name: string;
  location: string;
  status: "ONLINE" | "OFFLINE";
  thumbnailUrl: string;
  streamUrl: string;
}
