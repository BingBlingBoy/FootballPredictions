import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    tasks: defineTable({
        text: v.string(),
        isCompleted: v.boolean(),
    }),
    users: defineTable({
        name: v.string(),
        wins: v.number(),
        tokenIdentifier: v.string(),
    }).index("by_token", ["tokenIdentifier"]),
});



