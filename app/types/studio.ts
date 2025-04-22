import type { UUID } from "crypto";
import { z } from "zod";
export const StudioType = z.object({
    id: z.string().uuid(),
    name: z.enum(["podcast", "music", "video", "jamming", "production"]),
    description: z.string(),
});
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
    
    imageUrls: z.array(z.string().url()).optional(),
    
    heroImageUrl: z.string().url(),
    
    createdAt: z.string().transform((str) => new Date(str)),
    
    updatedAt: z.string().transform((str) => new Date(str)),

    lastBooking: z.string().transform((str) => str?new Date(str):undefined).optional(),

    isAvailable: z.boolean(),

    pricePerHour: z.number(),

    type: z.array(z.string()).transform((types) => 
        types.map((type) => ({id:crypto.randomUUID(),name:type,description:type}))),

    capacity: z.number(),

});


