import { z } from "zod";
/**
 * Represents a studio entity in the system
 */
export const Studio = z.object({
    
    id: z.string().uuid(),
    
    name: z.string(),
    
    description: z.string(),
    
    location: z.object({
        address: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zip: z.string(),
        latitude: z.number().optional(),
        longitude: z.number().optional(),
    }).optional(),
    
    imageUrl: z.string().optional(),
    
    createdAt: z.date(),
    
    updatedAt: z.date(),

    lastBooking: z.date().optional(),

    isAvailable: z.boolean(),

    pricePerHour: z.number(),

    type: z.enum(["podcast", "music", "video", "jamming"]),

    capacity: z.number(),

});