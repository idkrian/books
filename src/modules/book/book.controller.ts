import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookGTO } from './book.gto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: BookGTO){
    return this.bookService.create(data)
  }

  @Get()
  async findAll(){
    return this.bookService.findAll()
  }

  @Put(":id")
  async update(@Param('id') id: string, @Body() data: BookGTO){
    return this.bookService.update(id,data)
  }

  @Delete(":id")
  async delete(@Param('id') id:string){
    this.bookService.delete(id)
  }

}
