import { Todo } from '@/domain/models'
import { TodoUpdate, TodoCreate, TodoFind, TodoFindAll } from '@/domain/usecases'

import { TodoRepository } from '@/application/protocols'

export class DBTodoFindAll implements TodoFindAll {
    constructor(
        private readonly todoRepo: TodoRepository
    ) {}

    async findAll(): Promise<Todo[]> {
        return await this.todoRepo.findAll()
    }
}

export class DBTodoFind implements TodoFind {
    constructor(
        private readonly todoRepo: TodoRepository
    ) {}

    async find(word: string): Promise<Todo[] | null> {
        const result = await this.todoRepo.find(word)
        if (result) return result;

        return null 
    }
}

export class DBTodoCreate implements TodoCreate {
    constructor(
        private readonly todoRepo: TodoRepository
    ) {}

    async create(model: Todo): Promise<boolean> {
        return await this.todoRepo.create(model)
    }
}

export class DBTodoUpdate implements TodoUpdate {
    constructor(
        private readonly todoRepo: TodoRepository
    ) {}

    async update(model: Todo): Promise<void> {
        await this.todoRepo.update(model)
    }
}
