import { Injectable } from '@nestjs/common';
import firebaseCred from '../testKey.json';
import * as firebase from 'firebase-admin'
import { BatchResponse } from 'firebase-admin/lib/messaging/messaging-api';
import * as shell from 'shelljs'

@Injectable()
export class AppService {
  constructor() {
    const firebaseCredentials = JSON.parse(process.env.FIREBASE_CREDENTIAL_JSON);

    firebase.initializeApp({
      credential: firebase.credential.cert(firebaseCred),
      databaseURL: process.env.FIREBASE_DATABASE_URL
    })
  }

  public async sendAll(messages: firebase.messaging.TokenMessage[], dryRun?: boolean): Promise<BatchResponse>{
    if (process.env.NODE_ENV === 'local') {
      for (const { notification, token } of messages) {
        shell.exec(
          `echo '{ "aps": { "alert": ${JSON.stringify(notification)}, "token": "${token}" } }' | xcrun simctl push booted com.company.appname -`
        )
      }
    }
    return firebase.messaging().sendAll(messages, dryRun)
  }
  
}


