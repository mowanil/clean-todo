import { Todo } from '@/domain/models'

export interface TodoFindAll {
    findAll: () => Promise<Todo[]>
}

export interface TodoFind {
    find: (word: string) => Promise<Todo[] | null>
}

export interface TodoCreate {
    create: (model: Todo) => Promise<boolean> 
}

export interface TodoUpdate {
    update: (model: Todo) => Promise<void>
}
