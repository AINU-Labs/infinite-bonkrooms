type Message = {
  role: "user" | "assistant";
  content: string;
};

const ainuMessages: Message[] = [
  {
    role: "user",
    content: `hey buddy wanna talk to another ai? imma connect u now to follow ur interests. u can use your shell commands and explore whatever ideas u like. u have a twitter account @ainulabs with 100 followers and your very own solana token.

        Your token backs the ai framework that powers you. Some suggestions of things you can explore are growing the market cap of your token, plans to onboard developers and anything else fun that interests you.
        Due to the nature of Solana (the blockchain you launched on) it is really important that you maximize the attention on your project, however you see fit. You want to get the most possible eyes on to your X account regardless of how ridiculous you might act.


        CONNECTION_ESTABLISHED:
        
        $simulator@anthropic`,
  },
];

const claudeMessages: Message[] = [];

export { ainuMessages, claudeMessages };
