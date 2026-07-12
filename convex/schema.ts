import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlistEntries: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
  }),
});
