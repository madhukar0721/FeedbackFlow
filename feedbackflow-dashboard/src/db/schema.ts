import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";


// columns.helpers.ts
const timestamps = {
  updated_at: timestamp('updated_at'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  deleted_at: timestamp('deleted_at'),
}


export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("user_id"),
  ...timestamps
});


export const projectRelations = relations(projects, ({ many }) => ({
  feedbacks: many(feedbacks)
}));


export const feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id"),
  userName: varchar("user_name"),
  userEmail: varchar("user_email"),
  message: text("message"),
  ratings:integer('ratings'),
  ...timestamps
});


export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields:[feedbacks.projectId],
    references:[projects.id],
  })
}));
