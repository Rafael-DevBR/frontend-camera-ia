// src/features/dashboard/presentation/store/useCameraStore.ts
import { create } from 'zustand';

interface CameraStoreState {
  selectedCameraId: string | null;
  selectCamera: (id: string) => void;
}

export const useCameraStore = create<CameraStoreState>((set) => ({
  selectedCameraId: null,
  selectCamera: (id) => set({ selectedCameraId: id }),
}));