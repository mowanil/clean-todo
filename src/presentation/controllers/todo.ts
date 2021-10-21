import { Controller, HttpResponse } from '@/presentation/protocols'

import { TodoCreate } from '@/domain/usecases'

export class TodoCreateController implements Controller {

    constructor(
        private readonly todoCreate: TodoCreate
    ) {}

    async handle(request: { ID: number, Task: string, LimitDate: Date, Status: boolean }): Promise<HttpResponse> {
        
        try {
            await this.todoCreate.create({
                ...request,
                LimitDate: new Date()
            })
        } catch {

        }
            return {
                statusCode: 200,
                body: null
            }
        }
    }
}