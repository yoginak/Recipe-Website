import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commentsFilePath = path.join(__dirname, '../data/comments.json');

export const loadComments = () => {
    try {
        const data = fs.readFileSync(commentsFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading comments file:", error);
        return [];
    }
};

export const saveComments = (comments) => {
    try {
        fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2), 'utf8');
    } catch (error) {
        console.error("Error writing to comments file:", error);
    }
};