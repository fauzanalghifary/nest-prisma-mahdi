import { Injectable } from '@nestjs/common';
import { CreateLostFoundItemDto } from './dtos/create-lost-found.dto';
import { UpdateLostFoundItemDto } from './dtos/update-lost-found.dto';
import { PatchLostFoundItemDto } from './dtos/patch-lost-found.dto';
import { LostFoundRepository } from './lost-found.repository';

@Injectable()
export class LostFoundService {
  constructor(private readonly lostFoundRepository: LostFoundRepository) {}

  async getAllLostFoundItems() {
    return this.lostFoundRepository.findAll();
  }

  async getLostFoundItemById(id: number) {
    return this.lostFoundRepository.findOne(id);
  }

  async createLostFoundItem(createLostFoundItemDto: CreateLostFoundItemDto) {
    return this.lostFoundRepository.save(createLostFoundItemDto)
  }

    async updateLostFoundItem(id: number, updateLostFoundItemDto: UpdateLostFoundItemDto) {
    return this.lostFoundRepository.update(id, updateLostFoundItemDto);
  }

    async patchLostFoundItem(id: number, patchLostFoundItemDto: PatchLostFoundItemDto) {
    return this.lostFoundRepository.patch(id, patchLostFoundItemDto);
  }

  async deleteLostFoundItem(id: number) {
    return this.lostFoundRepository.delete(id);
  }
}
