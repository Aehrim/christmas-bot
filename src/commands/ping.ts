import { CommandInteraction, SlashCommandBuilder} from 'discord.js';

/**
 * Defines the data for the "ping" command.
 * 
 * This command responds with "Pong!" when invoked.
 * 
 * @constant {SlashCommandBuilder} data - The command builder for the "ping" command.
 */
export const data = new SlashCommandBuilder()
.setName("ping")
.setDescription("Antwortet mit Pong!");

export async function execute(interaction: CommandInteraction) {
  await interaction.reply("Pong!");
}