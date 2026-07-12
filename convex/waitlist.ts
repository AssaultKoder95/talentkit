import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addEntry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("waitlistEntries", {
      name: args.name,
      email: args.email,
      phone: args.phone,
    });
  },
});
