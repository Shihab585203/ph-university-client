import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please Select a Name" }),
  year: z.string({ required_error: "Please Select a Year" }),
  startMonth: z.string({ required_error: "Please Select a Start Month" }),
  endMonth: z.string({ required_error: "Please Select an End Month" }),
});

export const academicFacultySchema = z.object({
  name: z.string({ required_error: "Please Select a Name" }),
});
