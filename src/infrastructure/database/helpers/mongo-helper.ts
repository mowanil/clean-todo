

// const uri = 'mongodb://172.17.0.2:27017'
// const client = new MongoClient(uri)


import { MongoClient, Collection, Document } from 'mongodb'

export class MongoHelper {
    static uri: string = ""
    static client: MongoClient | null = null

    static async connect(uri: string): Promise<void> {
        this.uri = uri
        this.client = await new MongoClient(uri)
    }

    static async disconnect(): Promise<void> {
        if (this.client != null) {
            await this.client.close()
        }
    }

    static getCollection(name: string) {
        if (this.client != null) {
            return this.client.db().collection(name)
        }
    }
}