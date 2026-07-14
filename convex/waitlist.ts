import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addEntry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
    if (existing) {
      throw new Error("This email is already on the waitlist!");
    }
    await ctx.db.insert("waitlist", {
      name: args.name,
      email: args.email,
      phone: args.phone,
    });
  },
});
