import { Injectable } from '@nestjs/common';
import { CreateLostFoundItemDto } from './dtos/create-lost-found.dto';
import { UpdateLostFoundItemDto } from './dtos/update-lost-found.dto';
import { LostFoundRepository } from './lost-found.repository';

@Injectable()
export class LostFoundService {
  constructor(private readonly lostFoundRepository: LostFoundRepository) {}

  async getAllLostFoundItems(q: string) {
    return this.lostFoundRepository.findAll(q);
  }

  async getLostFoundItemById(id: number) {
    return this.lostFoundRepository.findOne(id);
  }

  async createLostFoundItem(
    createLostFoundItemDto: CreateLostFoundItemDto,
    userId: number,
  ) {
    return this.lostFoundRepository.save(createLostFoundItemDto, userId);
  }

  async updateLostFoundItem(
    id: number,
    createLostFoundItemDto: CreateLostFoundItemDto,
  ) {
    return this.lostFoundRepository.update(id, createLostFoundItemDto);
  }

  async patchLostFoundItem(
    id: number,
    updateLostFoundItemDto: UpdateLostFoundItemDto,
  ) {
    return this.lostFoundRepository.patch(id, updateLostFoundItemDto);
  }

  async deleteLostFoundItem(id: number) {
    return this.lostFoundRepository.delete(id);
  }
}
