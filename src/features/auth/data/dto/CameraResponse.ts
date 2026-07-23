// src/features/dashboard/data/dto/CameraResponse.ts
export type CameraDto = {
  id: string;
  name: string;
  location_name: string;
  status: 'ONLINE' | 'OFFLINE';
  thumbnail_url: string;
  stream_url: string;
};