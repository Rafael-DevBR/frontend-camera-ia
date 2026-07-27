// src/features/dashboard/data/mappers/CameraMapper.ts
import { Camera } from "../../domain/entities/Camera";
import { CameraDto } from "../dto/CameraResponse";

export class CameraMapper {
  static toDomain(dto: CameraDto): Camera {
    return {
      id: dto.id,
      name: dto.name,
      location: dto.location_name,
      status: dto.status,
      thumbnailUrl: dto.thumbnail_url,
      streamUrl: dto.stream_url,
    };
  }
}
