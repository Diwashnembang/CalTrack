// db/schema.ts
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const caloriesTable = sqliteTable("calories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  total_cal: integer("total_cal").notNull(),
  protein: integer("protein"),
  carb: integer("carb"),
  fat: integer("fat"),
  fiber: integer("fiber"),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Export types for easy use in your components
export type calories = typeof caloriesTable.$inferSelect;
export type NewCalories = typeof caloriesTable.$inferInsert;
