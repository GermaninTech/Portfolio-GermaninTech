// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Aquí definimos la URL principal de tu web. 
  // Cuando tengas tu dominio real (ej: germanintech.vercel.app), cámbialo aquí.
  const baseUrl = 'https://Portfolio-GermaninTech.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si en el futuro añades más páginas (como un blog), las añades aquí:
    /*
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    */
  ];
}