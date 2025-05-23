import { Studio } from '../types/studio';
import { z } from 'zod';
export const sampleStudios: z.infer<typeof Studio>[] = [
    {
        id: "550e8400-e29b-41d4-a716-446655440000",
        name: "The Sound Lab",
        description: "State-of-the-art podcast studio with premium equipment",
        location: {
            address: "123 Music Lane",
            city: "New York",
            state: "NY",
            zip: "10001",
            latitude: 40.7128,
            longitude: -74.0060
        },
        heroImageUrl: "https://example.com/soundlab.jpg",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-03-15"),
        lastBooking: new Date("2024-03-14"),
        isAvailable: true,
        pricePerHour: 75,
        type: ["podcast", "recording"],
        capacity: 4
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440001",
        name: "Beat Factory",
        description: "Professional music production studio with vintage equipment",
        location: {
            address: "456 Beat Street",
            city: "Los Angeles",
            state: "CA",
            zip: "90001",
            latitude: 34.0522,
            longitude: -118.2437
        },
        heroImageUrl: "https://example.com/beatfactory.jpg",
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date("2024-03-16"),
        lastBooking: new Date("2024-03-13"),
        isAvailable: true,
        pricePerHour: 120,
        type: ["music", "production"],
        capacity: 6
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440002",
        name: "Video Vision Studio",
        description: "Modern video production studio with green screen",
        location: {
            address: "789 Film Blvd",
            city: "Chicago",
            state: "IL",
            zip: "60601",
            latitude: 41.8781,
            longitude: -87.6298
        },
        heroImageUrl: "https://example.com/videovision.jpg",
        createdAt: new Date("2024-02-01"),
        updatedAt: new Date("2024-03-17"),
        lastBooking: new Date("2024-03-15"),
        isAvailable: false,
        pricePerHour: 150,
        type: ["video", "streaming"],
        capacity: 8
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440003",
        name: "Jam Space",
        description: "Casual jamming studio perfect for bands and musicians",
        location: {
            address: "321 Rock Road",
            city: "Austin",
            state: "TX",
            zip: "78701",
            latitude: 30.2672,
            longitude: -97.7431
        },
        heroImageUrl: "https://example.com/jamspace.jpg",
        createdAt: new Date("2024-02-15"),
        updatedAt: new Date("2024-03-18"),
        lastBooking: new Date("2024-03-16"),
        isAvailable: true,
        pricePerHour: 60,
        type: ["jamming", "rehearsal"],
        capacity: 10
    }
]; 