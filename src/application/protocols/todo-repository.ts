import { Todo } from '@/domain/models'

export interface TodoRepository {
    findAll: () => Promise<Todo[]>
    find: (word: string) => Promise<Todo[] | null>
    create: (model: Todo) => Promise<boolean>
    update: (model: Todo) => Promise<void>
}
