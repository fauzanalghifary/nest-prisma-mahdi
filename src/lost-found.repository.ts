import { Injectable } from '@nestjs/common';
import { CreateLostFoundItemDto } from './dtos/create-lost-found.dto';
import { UpdateLostFoundItemDto } from './dtos/update-lost-found.dto';
import * as fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

@Injectable()
export class LostFoundRepository {
  private readonly jsonFilePath = 'lost-found.json';

  async findAll() {
    const data = await this.readJsonFile();
    return data;
  }

  async findOne(id: number) {
    const data = await this.readJsonFile();
    const lostFoundItem = data.find(item => item.id === Number(id));
    console.log(data, lostFoundItem)
    return lostFoundItem;
  }

  async save(createLostFoundItemDto: CreateLostFoundItemDto) {
    const data = await this.readJsonFile();
    const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
    const newItem = { id: newId, ...createLostFoundItemDto };
    data.push(newItem);
    await this.writeJsonFile(data);
    return newItem;
  }

  async update(id: number, createLostFoundItemDto: CreateLostFoundItemDto) {
    const data = await this.readJsonFile();
    const foundIndex = data.findIndex(item => item.id === Number(id));
    if (foundIndex === -1) {
      return null;
    }
    const updatedItem = { id: Number(id), ...createLostFoundItemDto };
    data[foundIndex] = updatedItem;
    await this.writeJsonFile(data);
    return updatedItem;
  }

  async patch(id: number, updateLostFoundItemDto: UpdateLostFoundItemDto) {
    const data = await this.readJsonFile();
    const foundIndex = data.findIndex(item => item.id === Number(id));
    if (foundIndex === -1) {
      return null;
    }
    const updatedItem = { ...data[foundIndex], ...updateLostFoundItemDto };
    console.log(updateLostFoundItemDto)
    console.log(data[foundIndex])
    data[foundIndex] = updatedItem;
    await this.writeJsonFile(data);
    return updatedItem;
  }

  async delete(id: number) {
    const data = await this.readJsonFile();
    const foundIndex = data.findIndex(item => item.id === Number(id));
    if (foundIndex === -1) {
      return null;
    }
    const deletedItem = data.splice(foundIndex, 1)[0];
    await this.writeJsonFile(data);
    return deletedItem;
  }

  private async readJsonFile() {
    const fileData = await readFileAsync(this.jsonFilePath, 'utf-8');
    return JSON.parse(fileData);
  }

private async writeJsonFile(data: any) {
  const jsonStr = JSON.stringify(data, null, 2);
  await writeFileAsync(this.jsonFilePath, jsonStr, 'utf-8');
}

}