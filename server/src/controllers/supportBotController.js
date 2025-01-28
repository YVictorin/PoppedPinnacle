import SupportBot from "../services/SupportBot.js";

class SupportBotController {
    static async getAIResponse(req, res) {
        let { message } = req.body;  
        try {
            const aiResponse = await SupportBot.chat(message);
            res.status(200).json({ success: true, aiResponse });
        } catch (e) {
            console.error(e);
            res.status(500).json({ success: false, error: e.message });
        }
    }
}

export default SupportBotController