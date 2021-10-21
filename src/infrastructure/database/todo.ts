import { Todo } from '@/domain/models'

import { MongoHelper } from '@/infrastructure/database/helpers/mongo-helper'

import { TodoRepository } from '@/application/protocols'

export class TodoMongoRepository implements TodoRepository {

    async create(model: Todo): Promise<boolean> {
        const todoCollection = MongoHelper.getCollection('todos')
        const result = await todoCollection.insertOne(model)
        return result.insertedId !== null
    }

    async find(word: string): Promise<Todo[] | null> {
        const todoCollection = MongoHelper.getCollection('todos')
        const todo = await todoCollection.findOne({
            Task: word
        })

        return [{
            ID: todo._id,
            Task: todo.Task,
            LimitDate: todo.LimitDate,
            Status: todo.Status
        }]
    }

    async findAll(): Promise<Todo[]> {
        const todocollection = MongoHelper.getCollection('todos')
        const todo = await todocollection.find().toArray()

        return todo.map(document => {
            return {
                ID: document._id,
                Task: document.Task,
                LimitDate: document.LimitDate,
                Status: document.Status
            }
        })
    }

    async update(model: Todo): Promise<void> {
        const todoCollection = MongoHelper.getCollection('todos')
        const todo = await todoCollection.updateOne({
            _id: model.ID,

        }, {
            $set: {
                Task: model.Task,
                LimitDate: model.LimitDate,
                Status: model.Status
            }
        })

    }

}