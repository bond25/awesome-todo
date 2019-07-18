import {registerEnumType} from 'type-graphql'

export enum PayloadStatus {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL'
}

registerEnumType(PayloadStatus, {name: 'PayloadStatus'})