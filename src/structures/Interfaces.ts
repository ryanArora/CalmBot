import { Message, MessageReaction, PermissionResolvable, User } from "discord.js";
import Client from "./Client";

export type RunCallback = (client: Client, message: Message, args: string[]) => void;
export type ReactionCallback = (client: Client, reaction: MessageReaction, user: User) => void;
export type PromptCallback = (response: Message) => void;
export type Permission = PermissionResolvable | PermissionsEnum;

export interface IReactionListener {
  messageid: string;
  callback: ReactionCallback;
  userwhitelist?: string[];
}

export interface IPromptListener {
  user: string;
  channel: string;
  callback: PromptCallback;
}
export interface ICommand {
  settings: ICommandSettings | undefined;
  run: RunCallback;
  category?: string;
  subCommandSettings?: ISubCommandSettings;
  subCommands?: Map<string, ICommand>;
}

export interface ICommandSettings {
  description: string;
  usage: string;
  guildOnly?: boolean;
  permissions?: Permission;
  minimumArgs?: number;
  maximumArgs?: number;
}

export interface ISubCommandSettings {
  defaultSubCommand?: string;
  guildOnly?: boolean;
  minimumArgs?: number;
  maximumArgs?: number;
  permissions?: Permission;
}

export enum PermissionsEnum {
  DEVELOPER = "Developer",
  ADMIN = "Admin",
  STAFF = "Staff",
}
