import express from 'express'

import { MongoHelper } from '@/infrastructure/database/helpers'

import env from '@/main/config/env'

MongoHelper.connect(env.mongo_url)

