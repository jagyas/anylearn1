import ActorId from "../../actors/ActorId";
import { ActorReminderType } from "../../types/ActorReminder.type";
import { ActorTimerType } from "../../types/ActorTimer.type";
import { KeyValueType } from "../../types/KeyValue.type";
import { OperationType } from "../../types/Operation.type";

export default interface IClientActor {
  invoke(actorType: string, actorId: ActorId, methodName: string, body?: any): Promise<object>;
  stateTransaction(actorType: string, actorId: ActorId, operations: OperationType[]): Promise<void>;
  stateGet(actorType: string, actorId: ActorId, key: string): Promise<KeyValueType | string>;
  registerActorReminder(actorType: string, actorId: ActorId, name: string, reminder: ActorReminderType): Promise<void>;
  unregisterActorReminder(actorType: string, actorId: ActorId, name: string): Promise<void>;
  registerActorTimer(actorType: string, actorId: ActorId, name: string, timer: ActorTimerType): Promise<void>;
  unregisterActorTimer(actorType: string, actorId: ActorId, name: string): Promise<void>;
  getActors(): Promise<object>;
}