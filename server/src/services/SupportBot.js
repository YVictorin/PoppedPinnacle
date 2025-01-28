import { CohereClient } from "cohere-ai";

class SupportBot {
    static client = new CohereClient({
        token: process.env.CO_API_KEY,
    });

    static async chat(userMessage) {
        console.log("The Cohere API was successful called.");
        try {
            const response = await SupportBot.client.chat({
                message: userMessage,
                model: "command-r-08-2024",
                preamble:
                    "You are the chat support bot for the Popped Pinnacle e-commerce website, which sells popcorn you have many product flavors and prices",
                documents: [
                    {
                        id: "",
                        title: "data",
                        snippet:
                            "Popped Pinnacle we offer a variety of popcorn flavors at these prices: 1. Classic Caramel Popcorn – Rich buttery caramel-coated popcorn. Price: $25.99. 2. Cheddar Bacon Ranch Popcorn – Savory sharp cheddar, crispy bacon, and ranch seasoning. Price: $9.99. 3. S'mores Popcorn – Chocolate, marshmallows, and graham crackers. Price: $35.99. 4. Buffalo Wing Popcorn – Spicy buffalo sauce and blue cheese. Price: $9.99. 5. Chocolate Peanut Butter Popcorn – Creamy chocolate and peanut butter. Price: $9.99. 6. Cinnamon Baked Apple Popcorn – Cinnamon and apple flavors. Price: $9.99. 7. Maple French Toast Popcorn – Maple syrup and cinnamon. Price: $9.99. 8. Mango Chili Lime Popcorn – Sweet mango, spicy chili, and lime. Price: $9.99. 9. Tiramisu Popcorn – Coffee, chocolate, and cream. Price: $50.00. 10. Peanut Butter & Jelly Popcorn – Peanut butter and jelly on popcorn. Price: $9.99. 11. Garlic Parmesan Truffle Popcorn – Garlic, Parmesan, and truffle. Price: $35.00. 12. Strawberry Shortcake Popcorn – Strawberry glaze and shortcake. Price: $45.99.",
                    },
                ],
            });

            const aiMessage = response.chatHistory[1].message;
            return aiMessage;
        } catch (e) {
            console.error("Error in chat method:", e);
            throw new Error("Failed to communicate with the AI service.");
        }
    }
}

export default SupportBot;
