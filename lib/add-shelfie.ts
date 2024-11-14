'use server'
import { prisma } from "./db";
import { z } from "zod";

// Define the Zod validation schema for the book data
const BookSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  note: z.string().optional(),
  readStatus: z.string().min(1, { message: "Read status is required" }),
  rating: z.string().min(1, { message: "Rating is required" }), // Rating is a string for validation
});

export const createBook = async (prevState: unknown, formData: FormData) => {
  // Parse and validate the form data
  const validatedFields = BookSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Destructure the validated data
  const { title, author, genre, note, rating } = validatedFields.data;

  try {
    // Convert rating from string to number
    const ratingAsNumber = parseInt(rating, 10); // Use parseFloat if you need decimal values
    const readStatusAsBoolean = true;
    // Create the new book record in the database
    const newBook = await prisma.book.create({
      data: {
        title,
        author,
        genre,
        note: note || "", // Ensure the note is optional
        readStatus: readStatusAsBoolean,
        rating: ratingAsNumber, // Insert the number as the rating
      },
    });

    console.log("New Book Created:", newBook);
    return newBook; // Return the created book or some other success response
  } catch (error) {
    // Log and handle any errors from the database creation
    console.error("Error creating book:" + error);
    return {
      error: "Failed to create the book. Please try again later.",
    };
  }
};
