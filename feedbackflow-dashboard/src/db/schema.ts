import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("user_id"),
});


export const projectRelations = relations(projects, ({ many }) => ({
  feedbacks: many(feedbacks)
}));


export const feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(),
  projectId: varchar("project_id"),
  feedback: text("feedback"),
  userName: varchar("user_name"),
  userEmail: varchar("user_email"),
  message: text("message"),
});


export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields:[feedbacks.projectId],
    references:[projects.id],
  })
}));
