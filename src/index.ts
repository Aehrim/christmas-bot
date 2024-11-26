/**
 * Imports the ping command from the commands directory and exports it as part of the commands object.
 * 
 * @module commands
 * @property {Object} commands - An object containing the available commands.
 * @property {Object} commands.ping - The ping command module.
 */

import * as ping from './commands/ping';
import * as fs from 'fs/promises';
import axios from 'axios';
import { Client, GatewayIntentBits } from 'discord.js';

// class APIDataHandler {
//     private client: Client;
//     private apiUrl: string;
//     private jsonFilePath: string;
// }

// constructor(token: string, apiUrl: string, jsonFilePath: String)

export const commands = {
    ping,
}