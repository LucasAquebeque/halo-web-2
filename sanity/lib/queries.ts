// Proyectos destacados para la home
export const featuredProjectsQuery = `
*[_type == "project" && featured == true] | order(_createdAt desc)[0...6]{
  title,
  slug,
  category,
  location,
  year,
  mainImage,
  summary
}`

//Todos los proyectos
export const allProjectsQuery = `
    *[_type == "project"] | order(year desc){
        title, slug, category, location, year, mainImage, summary
    }
`
//Proyecto individual por slug
export const projectBySlugQuery =`
    *[_type == "project" && slug.current == $slug][0]{
    title, category, location, year, mainImage, gallery,
    technologies, summary, body
}
`
//Insights recientes
export const recentInsightsQuery =`
    *[_type == "insight"] | order(publishedAt desc) [0...6]{
        title, slug, publishedAt, mainImage, excerpt, tags
    }
`
//Todos los servicios ordenados
export const allServiceQuery = `
    *[_type == "service"] | order(order asc) {
    title, slug, icon, shortDescription, order, relatedTech
    }
`
//Insight individual
export const insightBySlugQuery = `
    *[_type == "insight" && slug.current == $slug][0]{
        title, publishedAt, mainImage, body, tags, seoTitle, seoDescription
    }
`
//Partners (para stealth pages)
export const partnerBySlugQuery = `
    *[_type == "partner" && slug.current == $slug][0]{
        name, logo, tier, description, body
    }
`