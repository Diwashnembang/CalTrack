CREATE TABLE `calories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`total_cal` integer NOT NULL,
	`protein` integer,
	`carb` integer,
	`fat` integer,
	`fiber` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
